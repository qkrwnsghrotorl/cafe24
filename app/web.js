"use strict";
// PORT
const PORT = 8002;

// module - express
const express = require("express");
const app = express();

// module - bodyparser
const bodyParser = require("body-parser");

// 앱세팅
app.set('views', __dirname + '/src/views');
app.set("view engine", "ejs"); 
app.use(express.static(`${__dirname}/src/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 라우터 설정
const home = require("./src/routes/home");

// 미들웨어 method
app.use("/", home);

app.listen(PORT, () => {
    console.log("서버 가동");
})

module.exports = app;
//asdf
