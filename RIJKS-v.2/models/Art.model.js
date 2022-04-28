//MODELO OBRA DE ARTE
const { Schema, model } = require('mongoose');

const artSchema = new Schema(
    {
        title: String,
        created: Date,
        productionPlace: String,
        description: String,
        relatedCollection: {
            type: String,
            enum: ["permanent", "temporary"]
        },
        profileImg: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
)

const Art = model("Art", artSchema);
module.exports = Art;