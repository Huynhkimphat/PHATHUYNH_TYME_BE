const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const product = require('./products')

const app = express();
const port = 3001;

let productTemps = [
  {
    img: "DJ.png",
    title: "DJ",
    price: 10.75,
    tier: "Legendary",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "Assassin.png",
    title: "Assassin",
    price: 10.75,
    tier: "Legendary",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "Basketball.png",
    title: "Basketball",
    price: 10.75,
    tier: "Legendary",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "Mafia.png",
    title: "Mafia",
    price: 10.75,
    tier: "Legendary",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "Neon.png",
    title: "Neon",
    price: 10.75,
    tier: "Legendary",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "DJ.png",
    title: "DJ",
    price: 2.75,
    tier: "Mythic",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "Assassin.png",
    title: "Assassin",
    price: 2.75,
    tier: "Mythic",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "Basketball.png",
    title: "Basketball",
    price: 2.75,
    tier: "Mythic",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "Mafia.png",
    title: "Mafia",
    price: 2.75,
    tier: "Mythic",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "Neon.png",
    title: "Neon",
    price: 2.75,
    tier: "Mythic",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "DJ.png",
    title: "DJ",
    price: 2.75,
    tier: "Epic",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "Assassin.png",
    title: "Assassin",
    price: 2.75,
    tier: "Epic",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "Basketball.png",
    title: "Basketball",
    price: 2.75,
    tier: "Epic",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "Mafia.png",
    title: "Mafia",
    price: 2.75,
    tier: "Epic",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "Neon.png",
    title: "Neon",
    price: 2.75,
    tier: "Epic",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "DJ.png",
    title: "DJ",
    price: 2.75,
    tier: "Rare",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "Assassin.png",
    title: "Assassin",
    price: 2.75,
    tier: "Rare",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "Basketball.png",
    title: "Basketball",
    price: 2.75,
    tier: "Rare",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "Mafia.png",
    title: "Mafia",
    price: 2.75,
    tier: "Rare",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "Neon.png",
    title: "Neon",
    price: 2.75,
    tier: "Rare",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "DJ.png",
    title: "DJ",
    price: 2.75,
    tier: "Common",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "Assassin.png",
    title: "Assassin",
    price: 2.75,
    tier: "Common",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "Basketball.png",
    title: "Basketball",
    price: 2.75,
    tier: "Common",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "Mafia.png",
    title: "Mafia",
    price: 2.75,
    tier: "Common",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
  {
    img: "Neon.png",
    title: "Neon",
    price: 2.75,
    tier: "Common",
    author: {
      name: "HKP",
      img: "DJ.png",
    },
  },
];
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/products", (req, res) => {
  const products = product.generateProducts();
  res.json(products);
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
