import express from "express";
import { googleController, signinController, signupController, signOutController } from "../controllers/auth.controller.js";

const authRouter = express.Router()

authRouter.post('/signup', signupController)
authRouter.post('/signin', signinController)
authRouter.post('/google', googleController)
authRouter.get('/signout', signOutController)

export default authRouter;