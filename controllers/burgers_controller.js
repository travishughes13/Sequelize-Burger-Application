var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/burgers", function(req, res) {
    db.Burgers.findAll({
    }).then(function(burgers) {
      console.log(res);
      res.json(burgers);
    });
  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/burgers", function(req, res) {
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user
    db.Burgers.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(results){
      res.end();
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/burgers/:id", function(req, res) {
    db.Burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.end();
    });
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/burgers", function(req, res) {
    db.Burgers.update({
      devoured: req.body.devoured,
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(results){
      res.end();
    });
  });
};