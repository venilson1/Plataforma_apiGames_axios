const express = require('express');
const app = express();
const cors = require("cors");
const connection = require('./data/bd');
const Game = require('./src/models/game');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
//connection databse
connection.authenticate().then(() => {
  console.log('database ok');
}).catch(err => {
  console.log(err);
})

app.get('/games', (req, res) => {
  Game.findAll().then(games => {
    res.json({ game: games })
  })
});

app.get('/games/:id', (req, res) => {
  const id = req.params.id;
  Game.findByPk(id).then(games => res.json({ game: games }))
});

app.post('/games', (req, res) => {
  const { title, year, price } = req.body;
  Game.create({
    title,
    year,
    price
  }).then((games) => {
    res.json({ game: games })
  });


  res.sendStatus(200);
});

app.put('/games/:id', (req, res) => {
  const idparam = req.params.id;
  console.log(typeof idparam );
  if (isNaN(idparam)) {
    res.sendStatus(400)
  } else {

    const id = parseInt(req.params.id)
    const { title, year, price } = req.body;
    Game.update({
      title,
      year,
      price,
    },
    {
      where: {
        id: id
      }
    }).then(() => {
      res.sendStatus(200);
    });
  }
})

app.delete('/games/:id', (req, res) => {

  if (isNaN(req.params.id)) {
    res.sendStatus(400)
  } else {
    const id = parseInt(req.params.id);

    Game.destroy({
      where: {
        id: id
      }
    }).then(() => res.sendStatus(204))
  }
})


app.listen(3333, (req, res) => {
  console.log('servidor porta 3333');
})


