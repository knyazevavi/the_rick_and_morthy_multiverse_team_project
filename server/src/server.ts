import express from "express";

import "dotenv/config";
import { featureFlags } from "./constants";
import { isHasKey } from "./utils";
const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.post("/set-feature-flag", (req, res) => {
  const { key, value } = req.body;

  if (!isHasKey(key)) {
    res.status(400).send(`Feature flag ${key} does not exist.`);
    return;
  }

  featureFlags[key] = value;
  res.send(`Feature flag ${key} updated successfully.`);
});

app.get(":key", (req: express.Request, res: express.Response) => {
  const { key } = req.params;
  if (!isHasKey(key)) {
    res.send(`flag ${key} do not exist`);
    return;
  }

  res.send({ key: featureFlags[key] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
