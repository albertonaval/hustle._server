
const User = require("./../models/User.model")

const updatedUser = (req, res, next) => {

    const { email, username } = req.body


    User.findByIdAndUpdate(req.payload._id, { email, username }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    updatedUser
}