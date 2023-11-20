import express, { Application } from "express";
import { dev } from "./config";

const app: Application = express();
const port: number = dev.app.port;
//const port = 3002;
app.listen(port, () => {
  try {
    console.log(`this server is working on localhost:${port}`);
  } catch {
    console.log("server is not working");
  }
});
