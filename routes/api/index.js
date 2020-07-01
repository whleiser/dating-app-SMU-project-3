const router = require("express").Router();
const matchRoutes = require("./matches");

// Book routes
router.use("/matches", matchRoutes);

module.exports = router;
