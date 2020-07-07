const router = require("express").Router();

// Requiring our models and passport as we've configured it
const db = require("../../models");
const passport = require("../../config/passport");

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  router.post("/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    console.log(req.user);
    res.json({
      email: req.user.email,
      id: req.user.id,
      name: req.user.name,
      age: req.user.age,
      bio: req.user.bio,
      hobbies: req.user.hobbies,
      male: req.user.male,
      female: req.user.female,
      interestMale: req.user.interestMale,
      interestFemale: req.user.interestFemale
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  router.post("/signup", (req, res) => {
    db.User.create(req.body)
      .then(() => {
        res.send(200);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  // Route for logging user out
  router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  router.get("/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });


// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
