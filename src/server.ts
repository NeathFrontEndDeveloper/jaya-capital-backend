import express, { Request, Response } from "express";
import clientRouter from "./routes/clientRoute";

const app = express();
const PORT = 8000;

app.use("/api/client", clientRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
