import { Request, Response } from 'express';
import bcrypt from "bcrypt";
import { TokenGenerator } from "ts-token-generator";
import { User } from "../models/User";
import Mail from '../middlewares/Mail';
import jwt from 'jsonwebtoken';
import Message from "../interfaces/Message";
import UserForJwt from "../interfaces/UserForJwt";

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
             user['isAuth'] = false;
             user['token'] = new TokenGenerator().generate();
             user['country'] = req.body['country'];
             await User.create(user);

             let userForJwt:UserForJwt = {
                 name:req.body['name'],
                 email:req.body["email"],
                 isConnected: false,
                 isAuth:false,
                 token:user['token'],
                 country:user['country']
             }

             let tokenjwt = jwt.sign(userForJwt,`${process.env.S_KEY}`,{ expiresIn: 600 });
             let mail = new Mail();
             let subject:string = "Demande d'inscription à My_Chat";

             let message:Message = {
                 title:"Bienvenue à My_Chat !",
                 content:`Hello ${user['name']},
                 votre nouveau compte a été créé avec succès !
                 Pour confirmer l'inscription, cliquez sur le lien ci-dessous :`,
                 link:`http://localhost:${process.env.PORT}/user/confirmation?&jwt=${tokenjwt}`,
                 user:user['name'],
                 end:`Attention: Vous avez dix minutes pour confirmer votre compte. Si vous n'êtes pas à l'origine, ignorer le message !
                À très bientôt !`
             }
  
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
            var newToken:string = new TokenGenerator().generate();
            let userForJwt:UserForJwt = {
                name:`${user?.name}`,
                email:`${user?.email}`,
                token:newToken,
                isAuth:true,
                isConnected:true,
                country:`${user?.country}`
            };
            let newJwt = jwt.sign(userForJwt,`${process.env.S_KEY}`);
            res.status(200).json({message:"Vous êtes connecté !",token:newJwt})
        }else{
            res.status(400).json({error:"Le nom d'utilisateur ou le mot de passe est invalide !"})
        }
    }else{
        res.status(400).json({error:"Le nom d'utilisateur ou le mot de passe est invalide !"})
    }
}

export const confirmUser = async (req:Request,res:Response) =>{
    let jwtToken = req.query.jwt;
    jwt.verify(`${jwtToken}`,`${process.env.S_KEY}`,(err,jwtDecoded:any)=>{
        if (err){
            res.status(400).json({error:"Le lien a expiré ou est invalide !"})
        }else{
            if(jwtDecoded["isConnected"] && jwtDecoded['isAuth']){
                res.status(400).json({error:"L'utilisateur a déjà confirmé !"})
            }else{
                let option = {
                    where:{
                        token:jwtDecoded["token"]
                    }
                };
                User.findOne({
                    where:{
                        token:jwtDecoded["token"],
                        name:jwtDecoded["name"],
                        email:jwtDecoded["email"]
                    },
                    attributes:{
                        exclude:['password']
                    }
                }).then(user=>{
                    if((user?.token === jwtDecoded["token"])&&(user?.email === jwtDecoded["email"])){
                        var newToken:string = new TokenGenerator().generate();
                        User.update({isConnected:true,isAuth:true,token:newToken},option);
                        let userForJwt:UserForJwt = {
                            name:`${user?.name}`,
                            email:`${user?.email}`,
                            token:newToken,
                            isAuth:true,
                            isConnected:true,
                            country:`${user?.country}`
                        };
                        let newJwt = jwt.sign(userForJwt,`${process.env.S_KEY}`);
                        res.status(200).json({message:"Votre compte a été confirmé avec succès !",token:newJwt})
                    }else{
                        res.status(400).json({error:"Une erreur est survenue"})
                    }
                }) 
            }
        }
    })
}

export const allUsers = async (req:Request,res:Response) => {
    const users = await User.findAll({
        attributes:{
            exclude:['password']
        }
    });
    res.status(200).json(users);
}

export const oneUser = async (req:Request,res:Response) => {
    const user = await User.findOne({
        where:{id:req.params.id}
    });
    let userForJwt:UserForJwt = {
        name:`${user?.name}`,
        email:`${user?.email}`,
        token:`${user?.token}`,
        isAuth:false,
        isConnected:false,
        country:`${user?.country}`
    };
    let token = jwt.sign(userForJwt,`${process.env.S_KEY}`,{expiresIn:60});
    res.status(200).json({user:user,token:token});
}