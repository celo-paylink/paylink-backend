import { Router, Request, Response } from "express";
import { signJWT, verifyJWT } from "../lib/jwt";

const indexRouter = Router();

indexRouter.get("/", (req: Request, res: Response) => {
  res.json({
    statusCode: 200,
    message: "Welcome to your API",
  });
});

export default indexRouter;
