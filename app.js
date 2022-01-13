// inport express
const express = require("express");

// buat object express
const app = express ();

// menggunakan middleware
app.use(express.json());

// definisikan router
const router = require("./routes/api");
app.use(router);

// definisikan port
app.listen(3000, () => {
    console.log("server running at http//localhost:3000");
});
