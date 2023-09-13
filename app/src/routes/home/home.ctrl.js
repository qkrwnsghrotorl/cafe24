"use strict";

const users = {
    id: ["20301", "20302", "20303"],
    pw: ["1234", "1234", "rotc0588"],
};


const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
            pw = req.body.pw;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id)
            if (users.pw[idx] === pw) {
                return res.json({
                    success: true
                });
            }
        }

        return res.json({
            success: false,
            msg: "login fail",
        });
    },
};

module.exports = {
    output,
    process
};