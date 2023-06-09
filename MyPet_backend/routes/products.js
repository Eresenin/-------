var express = require('express');
var router = express.Router();

const { Client } = require('pg')
const client = new Client(
  {
    user: 'postgres',
    host: 'localhost',
    database: 'my_pets',
    password: '1234',
    port: 5432,
  }
)
 
client.connect()

/* GET users listing. */
router.get('/', async function(req, res, next) {

  res.set('Access-Control-Allow-Origin', '*');
  
  const products = await client.query("SELECT * FROM products")

  res.send(products.rows);
});

module.exports = router;
