import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { CustomError } from "./lib/type";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.send("Hello, Express + TypeScript!");
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: "The route you are looking for does not exist.",
  });
});

app.use(
  (err: CustomError, _req: Request, res: Response, _next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
      statusCode,
      message: err.message || "Something went wrong",
      details: err.details ?? undefined,
    });
  },
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
