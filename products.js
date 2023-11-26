const commonUtils = require("./utils");

const productImages = [
  {
    img: "DJ.png",
    title: "DJ",
  },
  {
    img: "Assassin.png",
    title: "Assassin",
  },
  {
    img: "Basketball.png",
    title: "Basketball",
  },
  {
    img: "Mafia.png",
    title: "Mafia",
  },
  {
    img: "Neon.png",
    title: "Neon",
  },
];

const tiers = ["Legendary", "Mythic", "Epic", "Rare", "Common"];

const author = {
  name: "HKP",
  img: "avatar.png",
};

const generateProducts = () => {
  const amount = commonUtils.randomAmount(30, 100);
  const products = [];
  for (let i = 0; i < amount; i++) {
    let randomProductImg = commonUtils.randomAmount(0, 4);
    let randomTier = commonUtils.randomAmount(0, 4);
    let price = 0;
    switch (tiers[randomTier]) {
      case "Legendary":
        price = commonUtils.legendaryPrice();
        break;
      case "Mythic":
        price = commonUtils.mythicPrice();
        break;
      case "Epic":
        price = commonUtils.epicPrice();
        break;
      case "Rare":
        price = commonUtils.rarePrice();
        break;
      default:
        price = commonUtils.commonPrice();
        break;
    }
    let product = {
      img: productImages[randomProductImg].img,
      title: productImages[randomProductImg].title,
      price: price,
      tier: tiers[randomTier],
      author: author,
    };

    products.push(product);
  }
  return products;
};

module.exports = {
  generateProducts,
};
