import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./src/routes/index.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});
app.use("/api/v1", routes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(`MongoDB Connected`))
  .catch((error) => {
    console.error("MongoDB conenction error: ", error);
    process.exit();
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
