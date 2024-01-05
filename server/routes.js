// routes.js
const express = require("express");
const router = express.Router();
const AdminRouter=require("./API");
router.get("/example", (req, res) => {
  res.send("Example route");
});

module.exports = (app) => {
  app.use("/v1/api/admin", AdminRouter);
  
};
