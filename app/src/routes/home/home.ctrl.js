"use strict";

const User = require("../../models/User")

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    },
    bio: (req, res) => {
        res.render("home/sic_bio");
    },
    it: (req, res) => {
        res.render("home/sic_it");
    },
    new: (req, res) => {
        res.render("home/sic_new");
    },
    eco: (req, res) => {
        res.render("home/sic_eco");
    },
    gov: (req, res) => {
        res.render("home/sic_gov");
    },
    mob: (req, res) => {
        res.render("home/sic_mob");
    }, // 이후 관리자 페이지
    bioadmin: (req, res) => {
        res.render("home/admin/admin_bio");
    },
    itadmin: (req, res) => {
        res.render("home/admin/admin_it");
    },
    newadmin: (req, res) => {
        res.render("home/admin/admin_new");
    },
    ecoadmin: (req, res) => {
        res.render("home/admin/admin_eco");
    },
    govadmin: (req, res) => {
        res.render("home/admin/admim_gov");
    },
    mobadmin: (req, res) => {
        res.render("home/admin/admin_mob");
    },
    adminpage: (req, res) => {
        res.render("home/admin/adminmain");
    }

}

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        
        return res.json(response);
    
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },
};

module.exports = {
    output,
    process
};

