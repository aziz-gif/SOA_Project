const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// model d'un employée
let Employee = new Schema(
  {
    nom: {
      type: String,
    },
    prenom: {
      type: String,
    },
    email: {
      type: String,
    },
    tel: {
      type: Number,
    },
  },
  {
    collection: "employees",
  }
);

module.exports = mongoose.model("Employee", Employee);
