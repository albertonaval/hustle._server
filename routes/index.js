module.exports = app => {

    const userRoutes = require("./user.routes")
    app.use("/api/user", userRoutes)

    const authRoutes = require("./auth.routes")
    app.use("/api/auth", authRoutes)

    const dashboardRoutes = require("./dashboard.routes")
    app.use("/api/dashboard", dashboardRoutes)

    const uploadRoutes = require("./upload.routes")
    app.use("/api/upload", uploadRoutes)

}