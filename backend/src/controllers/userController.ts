import { Request, Response } from 'express';
import bcrypt from "bcrypt";
import { TokenGenerator } from "ts-token-generator";
import { User } from "../models/User";
import Mail from '../middlewares/Mail';
import jwt from 'jsonwebtoken';

export async function newUser(req: Request, res: Response) {
    const userFound = await User.findOne({
        where:{email:req.body['email']}
    });

      if(userFound === null){
         if(req.body['password'] === req.body['confPassword'] && (req.body['password'] && req.body['confPassword'])){
             let user:any = {};
             user['name'] = req.body['name'];
             user['email'] = req.body['email'];
             user['password'] = bcrypt.hashSync(req.body['password'],10);
             user['isConnected'] = false;
             user['token'] = new TokenGenerator().generate();
             user['country'] = req.body['country'];
             await User.create(user);

             let userForJwt = {
                 name:req.body['name'],
                 email:req.body["email"],
                 
             }

             let tokenjwt = jwt.sign(userForJwt,`${process.env.SECRET_KEY}`);
             let mail = new Mail();
             let subject:string = "Demande d'inscription à My_Chat";
             let message:string = `Hello ${user['name']},
             votre nouveau compte a été créé avec succès !
             Pour confirmer l'inscription, cliquez sur le lien ci-dessous :
             http://localhost:${process.env.PORT}/user/confirmation?&jwt=${tokenjwt}
             Attention: Vous avez dix minutes pour confirmer votre compte. Si vous n'êtes pas à l'origine, ignorer le message !
             À très bientôt !
  
  
             Evens POMPE de My_Chat.`;
             mail.sendMail(req.body['email'],subject,message)

             res.status(201).json({message:"Le compte a été créé avec succès !"})
         }else{
             res.json({error:"Le mot de passe est incorrecte !"})
         } 
      }else{
         res.json({error:"Le compte existe déjà !"})
      }
}

export const modifUser = async (req:Request,res:Response) => {
    const user = await User.findByPk(req.params["id"]);

    if(user){
        let option = {
            where:{
                id:req.params["id"]
            }
        };

        if(req.body.hasOwnProperty("password") && req.body.hasOwnProperty("newPassword")){
            if(bcrypt.compareSync(req.body['password'],user['password'])){
                req.body["password"] = bcrypt.hashSync(req.body["password"],10)
                await User.update(req.body,option);
                res.status(200).json({message:"Modification effectué avec succès !"})
            }else{
                res.status(400).json({error:"Erreur liée à la modification !"})
            }
        }else{
            await User.update(req.body,option);
            res.status(200).json({message:"Modification effectué avec succès !"})
        }
    }else{
        res.status(404).json({error:"Le compte est introuvable !"})
    }
}

export const connectUser = async (req:Request,res:Response) => {
    const user = await User.findOne({
        where:{
            email:req.body["email"]
        }
    });

    if(user){
        if(bcrypt.compareSync(req.body['password'],user['password'])){
            
            res.status(200).json({message:"Vous êtes connecté !"})
        }else{
            res.status(400).json({error:"Le nom d'utilisateur ou le mot de passe est invalide !"})
        }
    }else{
        res.status(400).json({error:"Le nom d'utilisateur ou le mot de passe est invalide !"})
    }
}