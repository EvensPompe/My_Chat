import { Router } from 'express';
import { newUser, modifUser, connectUser, confirmUser, allUsers, oneUser } from '../controllers/userController';


const userRouter = Router();

userRouter.post("/new", newUser);
userRouter.post("/connexion", connectUser);
userRouter.put("/:id/modify",modifUser);
userRouter.get('/confirm',confirmUser);
userRouter.get('/all',allUsers);
userRouter.get('/find/:id',oneUser);

export default userRouter;