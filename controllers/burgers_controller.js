const express = require("express");
const router = express.Router();

const db = require("../models");

module.exports = function(app) {
    app.get("/", (req, res) => {
        let query = {};
        if (req.query.customer_name) {
            query.CustomerID = req.query.customer_name;
        }

        db.Burger.findAll({
            where: query,
            include: [db.Customer]
        }).then(function(dbBurgers) {
            res.render("index", { burger: dbBurgers });
        });
    });
    
    app.post("/api/burgers", (req,res) => {
        db.Burger.create({
            burger_name: req.body.name,
            devoured: req.body.devoured
        }).then(function(dbBurgers) {
            res.json(dbBurgers)
        });
    });
    
    app.put("/api/burgers/:id", (req, res) => {
        db.Burger.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function(dbBurgers) {
            res.json(dbBurgers)
        })
    });
};
