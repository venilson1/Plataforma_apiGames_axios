const express = require('express');
const app = express();
const cors = require("cors");
const connection = require('./data/bd');
const routes = require("./routes/routes");


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// connection databse
connection.authenticate().then(() => {
  console.log('database ok');
}).catch(err => {
  console.log(err);
});

app.use(routes);

app.listen(3333, () => console.log('\n 🚀 \033[0;32m Server PORT 3333 '));




