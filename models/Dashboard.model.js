const mongoose = require('mongoose')

const dashboardSchema = new mongoose.Schema(
    {
        header: {
            image: {
                type: String,
                default: "https://res.cloudinary.com/dqvwx536e/image/upload/v1675367914/marek-piwnicki-LYIFtMXzo10-unsplash_v9zql2.jpg",
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