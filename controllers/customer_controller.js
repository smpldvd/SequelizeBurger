const db = require("../models");

module.exports = function(app) {
    app.get("/api/customers", (req, res) => {
        db.Customer.findAll({}).then(function(dbCustomer) {
            res.json(dbCustomer);
        });
    });
    
    app.post("/api/customers", (req,res) => {
        db.Customer.create(req.body).then(function(dbCustomer) {
            res.json(dbCustomer)
        });
    });
    
    app.put("/api/customers/:id", (req, res) => {
        db.Customer.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function(dbCustomer) {
            res.json(dbCustomer)
        })
    });
};
