/**
 * @returns amount of product -> between min and max
 */
function randomAmount(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * price from 0 to 10
 * @returns commonPrice
 */
function commonPrice() {
  return Math.floor(Math.random() * 1000) / 100;
};

/**
 * price from 10 to 50
 * @returns rarePrice
 */
function rarePrice() {
  return Math.floor(Math.random() * (5000 - 1000) + 1000) / 100;
};

/**
 * price from 50 to 100
 * @returns rarePrice
 */
function epicPrice() {
  return Math.floor(Math.random() * (10000 - 5000) + 5000) / 100;
};

/**
 * price from 100 to 200
 * @returns rarePrice
 */
function mythicPrice() {
  return Math.floor(Math.random() * (20000 - 10000) + 10000) / 100;
};

/**
 * price from 200 to 1000
 * @returns rarePrice
 */
function legendaryPrice() {
  return Math.floor(Math.random() * (100000 - 20000) + 20000) / 100;
};

module.exports = {
  randomAmount,
  commonPrice,
  rarePrice,
  epicPrice,
  mythicPrice,
  legendaryPrice,
};
