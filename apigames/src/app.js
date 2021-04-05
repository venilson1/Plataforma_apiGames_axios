const express = require('express');
const app = express();
const cors = require("cors");
const connection = require('./data/bd');
const router = require("./routes/routes");


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// connection databse
connection.authenticate().then(() => {
  console.log('database ok');
}).catch(err => {
  console.log(err);
});

app.use(router);

app.listen(3333, () => console.log('\n 🚀  Server PORT 3333 '));




