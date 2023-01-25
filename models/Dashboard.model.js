const mongoose = require('mongoose')

const dashboardSchema = new mongoose.Schema(
    {
        header: {
            image: {
                type: String,
                default: "",
            },
            title: {
                type: String,
                default: "Your workspace"
            },
        },
        todo: [
            {
                text: {
                    type: String,
                },
                isDone: {
                    type: Boolean,
                    default: false
                }
            }
        ],
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    }
)

module.exports = mongoose.model("Dashboard", dashboardSchema)