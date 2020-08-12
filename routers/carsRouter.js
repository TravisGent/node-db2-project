const express = require('express');
const router = express.Router();
const knex = require("knex");

const db = knex({
  client: "sqlite3",
  connection: {
    filename: "./data/cars.db3"
  },
  useNullAsDefault: true
});

router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.json(cars);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});

router.post('/', (req, res) => {
    const newCar = req.body;
  
    db("cars").insert(newCar)
      .then(project => {
        res.status(201).json({ data: project });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ errorMessage: "We could not add the car" });
      });
  });

module.exports = router;