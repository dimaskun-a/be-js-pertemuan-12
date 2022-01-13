//import mysql
const mysql = require("mysql");

//import dotenv
ewquire("dotenv").config();

//buat koneksi
mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "laravel_rest_api"
});

// konek ke database
db.connect(function(err) {
    if (err) {
        console.log("koneksi error: ${err}");
        return;
    } else {
        console.log("koneksi berhasil");
        return;
    }
});

//export db
module.exports = db;
