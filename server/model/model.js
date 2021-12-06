const mongoose = require("mongoose");
const sehema = mongoose.Schema;

const todos = new sehema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const itemList = mongoose.model("itemList", todos);

module.exports = itemList;
