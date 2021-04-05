const express = require('express');
const app = express();
const cors = require("cors");
const connection = require('./data/bd');
const router = require("./routes/routes");


app.use(cors());

app.use("./src/uploads/", express.static("/src/uploads"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// connection databse
connection.authenticate().then(() => {
  console.log('database ok');
}).catch(err => {
  console.log(err);
});

app.use(router);

app.listen(3333, () => console.log('\n 🚀  Server PORT 3333 '));




