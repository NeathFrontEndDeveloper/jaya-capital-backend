import { Router } from "express";
import { Request, Response } from "express";
import { readFileSync } from "fs";
import path from "path";

const clientRouter = Router();

clientRouter.get("/", (req: Request, res: Response) => {
  try {
    const filePath = path.join(__dirname, "../data/client.json");
    const data = readFileSync(filePath, "utf-8");
    const users = JSON.parse(data);

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error reading user data", error });
  }
});

export default clientRouter;
