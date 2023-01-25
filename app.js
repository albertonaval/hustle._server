
require("dotenv").config();


require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app);



const projectName = "server.";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;


const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);


require("./error-handling")(app);

module.exports = app;