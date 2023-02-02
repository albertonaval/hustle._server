const router = require("express").Router()

const { getDashboardByUserId,
    newDashboard,
    updateHeader,
    updateTodo,
    deleteDashboard
} = require("../controllers/dashboard.controller")

const { isAuthenticated } = require("../middleware/jwt.middleware")

router.get("/", isAuthenticated, getDashboardByUserId)

router.post("/new", newDashboard)

router.put("/update/header/:id", isAuthenticated, updateHeader)

router.put("/update/todo/:id", isAuthenticated, updateTodo)

router.delete("/delete/:id", isAuthenticated, deleteDashboard)

module.exports = router



