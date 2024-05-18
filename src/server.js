const express = require("express");
const { createWorkSpacesRouter } = require("./workspaces/workspaces.router");

const app = express();
const port = process.env.PORT || 3000;

app.use("/workspaces", createWorkSpacesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
