const Game = require('../models/Game');


module.exports = {
  async index(req, res){
    const games = await Game.findAll();
    return res.json(games);
  },

  async findById(req, res){
    const id = req.params.id;
    const games = await Game.findByPk(id)
    return res.json(games);
  },

  async create(req, res){
    const { title, year, price } = req.body;
    const file = req.file.path;
    console.log(req.file);

      await Game.create({
      title,
      year,
      price,
      file
    });

    return res.sendStatus(201);
  },

  async update(req, res){
    const id = parseInt(req.params.id);
    const { title, year, price } = req.body;
    await Game.update(
      { title, year,price,},
      {where: {id: id}}
    )

    return res.sendStatus(200);
  },

  async delete(req, res){
    const id = parseInt(req.params.id);
    await Game.destroy({where: { id: id }})

    return res.sendStatus(204);
  }
};