import { Router, Request, Response } from "express";

const indexRouter = Router();

indexRouter.get("/", (req: Request, res: Response) => {
  res.json({
    statusCode: 200,
    message: "Welcome to your API",
  });
});

export default indexRouter;
