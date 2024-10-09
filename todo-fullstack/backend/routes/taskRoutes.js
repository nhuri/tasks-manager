import express, { Router } from "express";
import {
  getTasks,
  deleteTaskById,
  editTaskById,
  addTask,
  getTasksByUserId,
} from "./../controllers/taskController.js";
import { protect } from "../controllers/authController.js";

const router = express.Router();
router.route("/").get(getTasks);
router.route("/").post(
  protect,
  (req, res, next) => {
    req.body.userId = req.user._id;
    next();
  },
  addTask
);
router.route("/byUser").get(
  protect,
  (req, res, next) => {
    next();
  },
  getTasksByUserId
);
router.route("/:id").delete(deleteTaskById).patch(editTaskById);

export default router;
