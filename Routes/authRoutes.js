const Router = require("express");
const authentication = require("../Authentication/auth");

const router = Router();

router.post("/", authentication.login);

module.exports = router;