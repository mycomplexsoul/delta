import { Router } from "express";

const get = (
  router: Router,
  route: string,
  handler: ({ request, response }) => any | void
) => {
  router.get(route, (request, response) => {
    handler({ request, response });
  });
};

const post = (
  router: Router,
  route: string,
  handler: ({ request, response }) => any | void
) => {
  router.post(route, (request, response) => {
    handler({ request, response });
  });
};

export default { get, post };
