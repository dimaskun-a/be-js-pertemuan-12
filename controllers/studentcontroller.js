//import model student
const student = require("../modeks/student");

//buat class student controller
class studentcontroller {
    index(req, res) {
        const students = student.all();

        const data = {
            message: "menampilkan semua student",
            data: [],
        };
        res.json(data);
    }

    store(req, res) {
        res.json("menambahkan data students");
    }

    update(req, res) {
        const { id } = req.params;
        res.json("mengeedit data students ${id}");
    }

    destroy(req, res) {
        const { id } = req.params;
        res.json("menghapus data students ${id}");
    }
}

//buat object student controller
const object = new studuencontroller();

//export object
module.exports = object;
