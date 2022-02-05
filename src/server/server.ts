import * as path from "path";
import * as express from "express";
import * as Routes from "./Routes";
import * as cors from "cors";
import { existsSync } from "fs";

const app = express();
app.use(express.json());

app.use(
  "/node_modules",
  express.static(path.join(__dirname, "../../node_modules"))
);

app.use("/", express.static(path.join(__dirname, "../../dist/intranet")));

app.use(function(req, res, next) {
  console.log("----------------------------");
  console.log(`${new Date().toISOString()} incoming request ${req.method}: ${req.url}`);
  if (Object.keys(req.body).length) {
    console.log(req.body, 'body in request');
  }
  if (Object.keys(req.params).length) {
    console.log(req.params, 'params in request');
  }
  next();
});

app.get("/status", (req, res) => {
  res.end(
    JSON.stringify({
      success: true,
      message: `Hi! server time is ${new Date()}`
    })
  );
});

app.get("/metadata", (req, res) => {
  const appVersion: string = process.env.npm_package_version;
  const hasCFG: boolean = existsSync(path.join(__dirname, "../../cfg.json"));

  res.end(
    JSON.stringify({
      appVersion,
      serverDate: new Date(),
      hasCFG
    })
  );
});

app.options("/api/external/links", cors());
app.options("/api/external/links/verify", cors());
app.options("/api/external/links/:lnk_id", cors());

app.use("/api", Routes.router);

app.use(function(req, res) {
  const log = (msg: string) => {
    console.log(new Date(), msg);
  };
  const files = ["/runtime", "/polyfills", "/styles", "/vendor", "/main"];
  const expandedFiles = []
    .concat(files.map(f => `${f}-es2015.js`))
    .concat(files.map(f => `${f}-es2015.js.map`))
    .concat(files.map(f => `${f}-es5.js`))
    .concat(files.map(f => `${f}-es5.js.map`))
    .concat(["/favicon.ico", "/manifest.webmanifest"]);
  // Use res.sendfile, as it streams instead of reading the file into memory.
  const index = path.join(__dirname, "../../dist/intranet/index.html");
  if (expandedFiles.indexOf(req.url) !== -1) {
    // TODO: move this to FE build
    const file = path.join(__dirname, `../../dist/intranet${req.url}`);
    log(`Answering request with: ${file}`);
    res.sendFile(file);
  } else {
    log(`Answering request with: ${index}`);
    res.sendFile(index);
  }
});

export default app;
