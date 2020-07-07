var express = require("express");
var db = require("../models");
const { Op } = require("sequelize");

var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  // user.all(function(data) {
  //   var hbsObject = {
  //     users: data
  //   };
  //   console.log(hbsObject);
  //   res.render("index", hbsObject);
  // });
  db.User.findAll({
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});

router.get("/filtered", function({user}, res) {
  db.User.findAll({
    where: {
      // [Op.or]: [
        hobbiesInterests: user.hobbiesInterests
      // ]
    }
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});

router.post("/", function(req, res) {
  db.User.create(req.body).then(function(dbUser) {
    res.json(dbUser);
  });
});

router.put("/api/user/:id", function(req, res) {
  // var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  // user.update({
  //   sleepy: req.body.sleepy
  // }, condition, function(result) {
  //   if (result.changedRows == 0) {
  //     // If no rows were changed, then the ID must not exist, so 404
  //     return res.status(404).end();
  //   } else {
  //     res.status(200).end();
  //   }
  // });
});

router.delete("/api/user/:id", function(req, res) {
  // var condition = "id = " + req.params.id;

  // user.delete(condition, function(result) {
  //   if (result.affectedRows == 0) {
  //     // If no rows were changed, then the ID must not exist, so 404
  //     return res.status(404).end();
  //   } else {
  //     res.status(200).end();
  //   }
  // });
});

// Export routes for server.js to use.
module.exports = router;
