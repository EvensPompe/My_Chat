import { Router } from 'express';
import { newUser, modifUser, connectUser } from '../controllers/userController';


const userRouter = Router();

userRouter.post("/new", newUser);
userRouter.post("/connexion", connectUser);
userRouter.put("/:id/modify",modifUser);

export default userRouter;