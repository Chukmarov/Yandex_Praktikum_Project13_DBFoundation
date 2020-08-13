const Card = require('../models/card');

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  const likes = [];
  Card.create({
    name, link, owner: req.user._id, likes,
  })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardid)
    .then(() => res.send({ message: `Карточка ${req.params.cardid} удалена` }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};
