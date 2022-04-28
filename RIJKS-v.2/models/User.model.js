//USER MODEL
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: String,
    lastname: String,
    username: {
      type: String,
      unique: true,
      // required: [true, 'Nombre de usuario obligatorio'],
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email obligatorio'],
      trim: true
    },
    password: {
      type: String,
      // required: [true, 'Contraseña obligatoria'],
      trim: true,
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },
    favArts: [{
      type: Schema.Types.ObjectId,
      ref: 'Art'
    }],
    favEvent: [{
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }]
  }
);

module.exports = model("User", userSchema);