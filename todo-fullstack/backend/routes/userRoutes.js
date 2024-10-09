import express, { Router } from "express";
import {
  getUsers,
  getUserById,
  deleteUserById,
} from "./../controllers/userController.js";
import {
  registerUser,
  login,
  forgotPassword,
  logout,
  resetPassword,
} from "./../controllers/authController.js";

const router = express.Router();
router.route("/").get(getUsers);
router.route("/register").post(registerUser);
router.route("/login").post(login);
router.post("/forgotPassword", forgotPassword);
router.patch("/logout", logout);

router.post("/resetPassword/:plainResetToken", resetPassword);
router.route("/:id").get(getUserById).delete(deleteUserById);

export default router;
