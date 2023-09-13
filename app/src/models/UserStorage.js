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
}

module.exports = UserStorage;