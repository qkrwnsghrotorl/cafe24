"use strict";
// PORT
const PORT = 3000;

// module
const express = require("express");
const app = express();

// 앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs"); 

// 라우터 설정
const home = require("./src/routes/home")

// 미들웨어 method
app.use("/", home);

module.exports = app;