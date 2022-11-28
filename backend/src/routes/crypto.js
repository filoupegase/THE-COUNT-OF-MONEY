const express = require('express');
const router = express.Router();

const coinMarketCap = require('../crypto/coinmarketcap');

router.get('/', async (req, res, next) => {
  try {
    const data = await coinMarketCap.getCoinmarketcapData('/v1/cryptocurrency/listings/latest');
    res.json(data);
  } catch (err) {
    next(err);
  }
});

// Get the popular cryptocurrencies
router.get('/popular', async (req, res, next) => {
  let limit = 10; // TODO use the value set by the admin
  try {
    const data = await coinMarketCap.getCoinmarketcapData(`/v1/cryptocurrency/listings/latest?limit=${limit}`);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;