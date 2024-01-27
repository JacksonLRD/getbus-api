const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    id: String,
    name: String,
    role: String,
    busCompanyId: String,
  },
  {
    collection: "users",
    timestamps: true,
  }
);

module.exports = { userSchema };
