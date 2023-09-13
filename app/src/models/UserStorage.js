"use strict";

class UserStorage {
    static #users = {
        id: ["20301", "20302", "20303"],
        pw: ["1234", "1234", "rotc0588"],
        name: ["학생1", "학생2", "학생3"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);  // [id, pw, name]

        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx]
            return newUser;
        }, {});
        return userInfo;
    }
}

module.exports = UserStorage;