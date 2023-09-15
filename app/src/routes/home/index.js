"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.get("/bio", ctrl.output.bio);
router.get("/it", ctrl.output.it);
router.get("/eco", ctrl.output.eco);
router.get("/mob", ctrl.output.mob);
router.get("/gov", ctrl.output.gov);
router.get("/new", ctrl.output.new);

router.get("/adminpage", ctrl.output.adminpage);
router.get("/adminpage/admin_bio", ctrl.output.bioadmin);
router.get("/adminpage/admin_it", ctrl.output.itadmin);
router.get("/adminpage/admin_eco", ctrl.output.ecoadmin);
router.get("/adminpage/admin_mob", ctrl.output.mobadmin);
router.get("/adminpage/admin_gov", ctrl.output.govadmin);
router.get("/adminpage/admin_new", ctrl.output.newadmin);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register)

module.exports = router;