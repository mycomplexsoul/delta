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

export default { get };
