import asyncHandler from "express-async-handler";
// import APImethods from "../utils/APImethods";
import AppError from "../utils/AppError.js";

export const getAll = (Model) =>
  asyncHandler(async (req, res, next) => {
    let filter = {};
    const apimethods = new APImethods(Model.find(filter), req.query);
    apimethods.filter().sort().selectFields().makePagination();

    const documents = await apimethods.query;

    res.status(200).json({
      status: "success",
      documents,
    });
  });
export const getOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    if (!req.params.id) return next(new AppError(400, "Missing Details"));
    // console.log(req.params.id);
    // console.log(Model.findById());

    const document = await Model.findById(req.params.id);
    if (!document)
      return next(new AppError(400, "the requested document was not found"));
    res.status(201).json({
      status: "success",
      document,
    });
  });
export const deleteOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const deletedDoc = await Model.findByIdAndDelete(req.params.id);
    if (!deletedDoc)
      return next(new AppError(400, "the requested document was not found"));
    res.status(204).json({
      status: "success",
      document: null,
    });
  });
export const createOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const document = await Model.create(req.body);
    res.status(201).json({
      status: "success",
      document,
    });
  });
export const editOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const updatedDoc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedDoc)
      return next(new AppError(400, "the requested document was not found"));
    res.status(201).json({
      status: "success",
      document: updatedDoc,
    });
  });
