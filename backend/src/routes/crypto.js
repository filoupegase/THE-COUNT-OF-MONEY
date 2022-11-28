const express = require('express');
const router = express.Router();

const coinMarketCap = require('../crypto/coinmarketcap');

/**
 * Get the data from the API of coinmarketcap
 */
router.get('/', async (req, res, next) => {
  try {
    const data = await coinMarketCap.getCoinmarketcapData('/v1/cryptocurrency/listings/latest');
    res.json(data);
  } catch (err) {
    next(err);
  }
});

/**
 * Get the X popular cryptocurrencies
 * The X is defined by the Administrator
 * @param req
 * @param res
 * @param next
 */
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