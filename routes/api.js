//import express
const express = require("express");

// buat object router
const router = express.router();

// buat routing
router.get("/", (req, res) => {
    res.send("hello express");
});

//buat routing student
const studentcontroller = require("../controllers/studentcontroller");
router.get("/students", (req, res) => {
    res.send("menampilkan data students");
});

router.post("/students", (req, res) => {
    res.send("menambahkan data students");
});

router.put("/students", (req, res) => {
    const { id } = req.params;
    res.send("mengedit data students");
});
router.delete("/students", (req, res) => {
    const { id} = req.params;
    res.send("menghapus data students");
});

//export routing
module.exports = router;