import User from "../models/userModel.js";
import { getAll, getOne, deleteOne } from "./factoryHandlers.js";

export const getUsers = getAll(User);

export const getUserById = getOne(User);

export const deleteUserById = deleteOne(User);
