import express from "express";
import userController from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", userController.getUserList);
router.post("/signin", userController.signin);
router.post("/signup", userController.signup);
router.post("/google-signin", userController.signinWithGoogle);

export default router;
