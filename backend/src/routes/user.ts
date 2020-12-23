import { Router } from 'express';
import { newUser, modifUser, connectUser, confirmUser } from '../controllers/userController';


const userRouter = Router();

userRouter.post("/new", newUser);
userRouter.post("/connexion", connectUser);
userRouter.put("/:id/modify",modifUser);
userRouter.get('/confirm',confirmUser)

export default userRouter;