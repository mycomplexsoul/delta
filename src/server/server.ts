import * as path from "path";
import * as express from "express";
import * as Routes from "./Routes";

const app = express();
app.use(express.json());

// app.use(express.static(path.join(__dirname, '../../src')));
app.use(
  "/node_modules",
  express.static(path.join(__dirname, "../../node_modules"))
);

app.use(function(req, res, next) {
  console.log("----------------------------");
  console.log(`incoming request: ${req.url}`);
  next();
});

app.get("/status", (req, res) => {
  res.end(
    JSON.stringify({
      operationOK: true,
      message: `Hi! server time is ${new Date()}`
    })
  );
});

app.get("/metadata", (req, res) => {
  const appVersion: string = process.env.npm_package_version;

  res.end(
    JSON.stringify({
      appVersion,
      serverDate: new Date()
    })
  );
});

app.use("/api", Routes.router);

app.use(function(req, res) {
  const log = (msg: string) => {
    console.log(new Date(), msg);
  };
  const files = [
    "/runtime.js",
    "/polyfills.js",
    "/styles.js",
    "/vendor.js",
    "/main.js",
    "/runtime.js.map",
    "/polyfills.js.map",
    "/styles.js.map",
    "/vendor.js.map",
    "/main.js.map",
    "/favicon.ico"
  ];
  // Use res.sendfile, as it streams instead of reading the file into memory.
  const index = path.join(__dirname, "../../dist/intranet/index.html");
  if (files.indexOf(req.url) !== -1) {
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
