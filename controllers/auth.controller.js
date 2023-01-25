const Dashboard = require("../models/Dashboard.model")
const User = require("../models/User.model")


const signup = async (req, res, next) => {
    try {
        const { email, username, password } = req.body

        const createdUser = await User.create({ email, username, password })
        const { _id } = createdUser

        const user = { email, _id, username }
        const createDashboard = await Dashboard.create({ owner: createdUser._id })

        res.status(201).json({ user, createDashboard })
    } catch (err) {
        next(err)
    }
}

const login = (req, res, next) => {

    const { email, password } = req.body

    if (email === "" || password === "") {
        res.status(400).json({ message: "Provide email or password" })
    }

    User.findOne({ email })
        .then(foundUser => {
            if (foundUser && foundUser.validatePassword(password)) {
                res.status(200).json({ authToken: foundUser.signToken() })
            } else {
                res.status(401).json({ message: "Unable to authenticate the user" })
            }
        })
        .catch(err => next(err))
}

const verify = (req, res, next) => {
    res.status(200).json(req.payload)
}

const refreshToken = (req, res, next) => {
    User.findById(req.payload._id)
        .then(newToken => {
            res.status(200).json({ refreshToken: newToken.signToken() })
        })
        .catch(err => next(err))
}

const deleteUser = async (req, res, next) => {
    try {
        const deleteUser = await User.findByIdAndRemove(req.payload._id)
        const deleteDashboard = await Dashboard.deleteOne({ owner: req.payload._id })

        res.sendStatus(204)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    signup,
    login,
    verify,
    refreshToken,
    deleteUser
}

