
const router = require("express").Router()

const { updatedUser } = require("../controllers/user.controller")
const { isAuthenticated } = require("../middleware/jwt.middleware")


router.put("/update", isAuthenticated, updatedUser)


module.exports = router
