
const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");





module.exports = (app) => {

  app.set("trust proxy", 1)
  app.use(
    cors({
      origin: ["http://localhost:3000", process.env.ORIGIN]
    })
  )

  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};