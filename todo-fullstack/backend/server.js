import dotenv from "dotenv";
import connectDB from "./utils/connectDB.js";
dotenv.config();
import app from "./app.js";

const connectionStr = process.env.MONGO_DB_ATLAS.replace(
  "<password>",
  process.env.MONGO_DB_ATLAS_PASSWORD
).replace("<username>", process.env.MONGO_DB_ATLAS_USERNAME);
// console.log(connectionStr);
connectDB(connectionStr);

const port = 8000 || 8001;
app.listen(port, "127.0.0.1", () => {
  console.log(`Server is listening on port ${port}`);
});
