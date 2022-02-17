// importation express
const express = require("express");

// utilisation de express
const app = express();
const employeeRoute = express.Router();

// le model employee
let employeeModel = require("../Model/Employee");

// Get lists des employée
employeeRoute.route("/").get(function (req, res) {
  employeeModel.find(function (err, employee) {
    if (err) {
      console.log(err);
    } else {
      res.json(employee);
    }
  });
});

// ajouter un employé
employeeRoute.route("/addEmployee").post(function (req, res) {
  let employee = new employeeModel(req.body);
  employee.save().then((emp) => {
      res.status(200).json({ employee: "Ajoutée avec succée" });
    })
    .catch((err) => {
      res.status(400).send("erreur");
    });
});

// update employé
employeeRoute.route("/updateEmployee/:id").post(function (req, res) {
  employeeModel.findById(req.params.id, function (err, employee) {
    if (!employee) return next(new Error("pas demployee avec cette ID"));
    else {
      employee.nom = req.body.nom;
      employee.prenom = req.body.prenom;
      employee.email = req.body.email;
      employee.tel = req.body.tel;

      employee.save().then((emp) => {res.json("employee a été modifié");
        })
        .catch((err) => {
          res.status(400).send("probleme de mise a jour");
        });
    }
  });
});

// supprimer un employé
employeeRoute.route("/deleteEmployee/:id").get(function (req, res) {
  employeeModel.findByIdAndRemove(
    {
      _id: req.params.id,
    },
    function (err, employee) {
      if (err) res.json(err);
      else res.json("employée a été supprimé");
    }
  );
});

module.exports = employeeRoute;
