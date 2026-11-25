import * as express from "express";
import { MultimediaCustom } from "./MultimediaCustom";
import ApiRoute from "../ApiRoute";

const router = express.Router();
const server: MultimediaCustom = new MultimediaCustom();

router.get("/imdb-search", async (request, response) => {
  const query =
    typeof request.query.q === "string" ? request.query.q.trim() : "";
  if (!query || query.length > 100) {
    response.status(400).json({
      success: false,
      message: "A title of 1 to 100 characters is required",
    });
    return;
  }

  try {
    const imdbResponse = await fetch(
      `https://v2.sg.media-imdb.com/suggestion/x/${encodeURIComponent(
        query
      )}.json`,
      { signal: AbortSignal.timeout(10000) }
    );
    if (!imdbResponse.ok) {
      console.error(`IMDb title search returned status ${imdbResponse.status}`);
      response.status(502).json({
        success: false,
        message: "IMDb title search is temporarily unavailable",
      });
      return;
    }

    response.json(await imdbResponse.json());
  } catch (error) {
    console.error("IMDb title search request failed", error);
    response.status(502).json({
      success: false,
      message: "IMDb title search is temporarily unavailable",
    });
  }
});

ApiRoute.get(router, "/", server.listRequestHandler);
ApiRoute.post(router, "/", server.createRequestHandler);
ApiRoute.post(router, "/:mma_id", server.updateRequestHandler);

export { router };
