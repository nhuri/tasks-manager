import expressAsyncHandler from "express-async-handler";
import Task from "../models/taskModel.js";
import {
  getAll,
  getOne,
  deleteOne,
  createOne,
  editOne,
} from "./factoryHandlers.js";

export const getTasks = getAll(Task);

export const getTaskById = getOne(Task);

export const deleteTaskById = deleteOne(Task);

export const editTaskById = editOne(Task);

export const addTask = createOne(Task);

export const getTasksByUserId = expressAsyncHandler(async (req, res, next) => {
  const document = await Task.find({ userId: req.user._id });
  if (!document)
    return next(new AppError(400, "the requested document was not found"));
  res.status(201).json({
    status: "success",
    document,
  });
});
