import { Router } from 'express';
import { getHome } from '../controllers/userController';


const userRouter = Router();

userRouter.get("/", getHome)

export { userRouter };