import express from "express";
import userRouter from "./routes/userRoutes.js";
import taskRouter from "./routes/taskRoutes.js";
import AppError from "./utils/AppError.js";
import globalErrorHandler from "./utils/errorHandler.js";
import cookieParser from "cookie-parser";
import cors from "cors";
// const userRouter = require ("./routes/userRoutes.js")
const app = express();
const origins = ["http://localhost:5173"];
app.use(express.static("public"));
app.use(cookieParser());
app.use(
  cors({
    origin: (origin, callback) => {
      // Check if the request origin is in the allowedOrigins array, or if it's not set (e.g., when using Postman)
      if (origins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter);

app.all("*", (req, res, next) => {
  next(new AppError(550, "The requested route is not exist"));
});
app.use(globalErrorHandler);
export default app;
