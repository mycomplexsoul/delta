import * as path from "path";
import * as express from "express";
import * as Routes from "./Routes";
import * as cors from "cors";
import { existsSync } from "fs";
import { imagesRouter } from "./imagesRouter";

const app = express();
app.use(express.json());

app.use(
  "/node_modules",
  express.static(path.join(__dirname, "../../node_modules"))
);

app.use("/", express.static(path.join(__dirname, "../../dist/intranet")));

app.use(function (req, res, next) {
  console.log("----------------------------");
  console.log(
    `${new Date().toISOString()} incoming request ${req.method}: ${req.url}`
  );
  const requestData = {
    body: req.body,
    params: req.params,
    query: req.query,
  };
  console.log(JSON.stringify(requestData, null, 2), "data in request");
  next();
});

app.get("/status", (req, res) => {
  res.end(
    JSON.stringify({
      success: true,
      message: `Hi! server time is ${new Date()}`,
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
      hasCFG,
    })
  );
});

app.use(
  "/api/external/links",
  cors({
    origin: "https://x.com",
    credentials: false,
  })
);

app.use(
  "/api/external/links/verify",
  cors({
    origin: "https://x.com",
    credentials: false,
  })
);

app.options(
  "/api/external/links",
  cors({
    origin: "https://x.com",
    credentials: false,
  })
);
app.options(
  "/api/external/links/verify",
  cors({
    origin: "https://x.com",
    credentials: false,
  })
);
app.use("/api/external/links/:lnk_id", cors());
app.options("/api/external/links/:lnk_id", cors());

app.use("/api", Routes.router);
app.use("/images", imagesRouter);

app.use(function (req, res) {
  const log = (msg: string) => {
    console.log(new Date(), msg);
  };
  const files: string[] = [
    "/runtime",
    "/polyfills",
    "/styles",
    "/vendor",
    "/main",
    "/chunk",
    "/assets",
  ];
  const expandedFiles: string[] = ([] as string[])
    .concat(files.map((f) => f))
    /* .concat(files.map((f) => `${f}-es2015.js`))
    .concat(files.map((f) => `${f}-es2015.js.map`))
    .concat(files.map((f) => `${f}-es5.js`))
    .concat(files.map((f) => `${f}-es5.js.map`)) */
    .concat(["/favicon.ico", "/manifest.webmanifest"]);
  // Use res.sendfile, as it streams instead of reading the file into memory.
  const index = path.join(__dirname, "../../dist/intranet/browser/index.html");
  if (expandedFiles.some((file) => req.url.startsWith(file))) {
    // TODO: move this to FE build
    const file = path.join(__dirname, `../../dist/intranet/browser${req.url}`);
    log(`Answering request with: ${file}`);
    res.sendFile(file);
  } else {
    log(`Answering request for asset ${req.url} with: ${index}`);
    res.sendFile(index);
  }
});

export default app;
