const { Request, Response, NextFunction, Router } = require("express");

const handleGetWorkspaces = () => {
  return async (req, res, next) => {
    try {
      console.log(req);
    } catch (err) {
      next(err);
    }
  };
};

const createWorkSpacesRouter = () => {
  const router = new Router();
  router.get("/", handleGetWorkspaces());
};

module.exports = { createWorkSpacesRouter };
