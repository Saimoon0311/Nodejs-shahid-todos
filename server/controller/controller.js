const itemList = require("../model/model");

exports.createtodos = (req, res) => {
  const list = new itemList({
    text: req.body.text,
  });
  list
    .save(list)
    .then((data) => {
      res.send({
        data: data,
        message: "This item is ad on the list",
      });
    })
    .catch((err) => {
      res.send({
        message: "SOme thing is wrong",
        error: err,
      });
    });
};

exports.alltodos = (req, res) => {
  itemList
    .find()
    .then((text) => {
      res.send(text);
    })
    .catch((err) => {
      res.send({
        message: "some thing is wrong",
        error: err,
      });
    });
};

exports.deletetodos = (req, res) => {
  const id = req.params.id;
  itemList
    .findByIdAndDelete(id)
    .then((text) => {
      res.send({
        message: "List has been delete",
      });
    })
    .catch((err) => res.send(err));
};
