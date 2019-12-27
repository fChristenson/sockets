import express, { Request, Response } from "express";
import * as path from "path";

export const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "views", "loading.html"));
});
