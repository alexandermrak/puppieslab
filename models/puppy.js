const mongoose = require("mongoose");
require("./user");

const Schema = require("mongoose").Schema;

var puppySchema = new Schema(
  {
    name: { type: String, required: true },
    breed: { type: String, default: "Mixed" },
    age: { type: Number, default: 0 },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Puppy", puppySchema);
