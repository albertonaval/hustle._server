const Dashboard = require("../models/Dashboard.model");


const getDashboardByUserId = (req, res, next) => {

    Dashboard.find({ owner: req.payload._id })
        .then(response => {
            res.json(response)
        })
        .catch(err => next(err))

}

const newDashboard = (req, res, next) => {

    const { header, todo } = req.body
    const { id: owner } = req.payload

    Dashboard.create({ header, todo, owner })
        .then(response => {
            res.json(response)
        })
        .catch(err => next(err))
}

const updateHeader = (req, res, next) => {

    const { id: dashboard_id } = req.params

    Dashboard.findById(dashboard_id)
        .then(data => {
            return Dashboard.findByIdAndUpdate(dashboard_id, { header: { ...data.header, ...req.body } }, { new: true })
        })
        .catch(err => next(err))
}

const updateTodo = (req, res, next) => {

    const { id: dashboard_id } = req.params

    Dashboard.findByIdAndUpdate(dashboard_id, { todo: { ...req.body, ...todo } }, { new: true })
        .then(response => {
            res.josn(response)
        })
        .catch(err => next(err))
}

const deleteDashboard = (req, res, next) => {

    const { id: owner } = req.payload

    Dashboard.findByIdAndDelete({ owner })
        .then(response => {
            res.json(response)
        })
        .catch(err => next(err))

}


module.exports = {
    getDashboardByUserId,
    newDashboard,
    updateHeader,
    updateTodo,
    deleteDashboard

}