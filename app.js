var express = require("express");
const app = express();
var expressWS = require("express-ws")(app);
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

const { setup } = require("radiks-server");

setup().then((RadiksController) => {
  app.use("/radiks", RadiksController);
});

app.listen(5000);
// expressWS(app);
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// e

module.exports = app;
