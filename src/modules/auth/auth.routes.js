import { Router } from "express";
import { checkEmail } from "../../middleware/checkEmail.js";
import { validate } from "../../middleware/validate.js";
import { signin, signup } from "./auth.controller.js";
import { signinVal, signupVal } from "./auth.validation.js";

const authRouter =Router()
authRouter.post('/signup' ,validate(signupVal),checkEmail,signup)
authRouter.post('/signin',validate(signinVal),signin)
export default authRouter;