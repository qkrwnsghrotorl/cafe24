"use strict";

const id = document.querySelector("#id"),
    pw = document.querySelector("#pw"),
    name = document.querySelector("#name"),
    rBtn = document.querySelector("#button")


rBtn.addEventListener("click", register);

function register() {
    const req = {
        id: id.value,
        pw: pw.value,
        name: name.value
    };

    fetch("/register", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/login";
            } else {
                alert(res.msg);
            }
        });
    
}

