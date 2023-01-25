
const User = require("./../models/User.model")

const updatedUser = (req, res, next) => {

    const { email, username, isDark } = req.body


    User.findByIdAndUpdate(req.payload._id, { email, username, isDark }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    updatedUser
}