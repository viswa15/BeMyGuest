import express from "express";

import {
  forgotPasswordContoller,
  loginController,
  registerController,
  userForgotPasswordController,
  userLoginController,
  userRegisterController
} from "../controllers/authController.js";

//router object
const router = express.Router();

//routing
//REGISTER FOREIGNER || METHOD : POST
router.post("/register-visiter", registerController);

//LOGIN FOREIGNER || METHOD : POST
router.post("/login-visiter", loginController);

//RESET PASSWORD || METHOD : PUT
router.put("/forgot-password", forgotPasswordContoller);

//for user
//REGISTER FOREIGNER || METHOD : POST
router.post("/user-register", userRegisterController);

//LOGIN FOREIGNER || METHOD : POST
router.post("/user-login", userLoginController);

//RESET PASSWORD || METHOD : PUT
router.put("/user-forgot-password", userForgotPasswordController);

export default router;
