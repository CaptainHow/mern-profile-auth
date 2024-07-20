import express from "express";
import { googleController, signinController, signupController } from "../controllers/auth.controller.js";

const authRouter = express.Router()

authRouter.post('/signup', signupController)
authRouter.post('/signin', signinController)
authRouter.post('/google', googleController)

export default authRouter;