//MODELO ARTISTA
const { Schema, model } = require('mongoose');

const artistSchema = new Schema(
    {
        name: String,
        nationality: String,
        paintings: {
            type: Schema.Types.ObjectId,
            ref: 'Art'
        },
    },
    {
        timestamps: true,
    }
)
const Artist = model("Artist", artistSchema);
module.exports = Artist;