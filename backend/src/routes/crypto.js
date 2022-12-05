const express = require('express');
const router = express.Router();

const coinMarketCap = require('../crypto/coinmarketcap');
const {getSettings} = require("../controller/settings");

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
  const limit = await getSettings().then(settings => settings.popularCryptos);
  try {
    console.log(limit);
    const data = await coinMarketCap.getCoinmarketcapData(`/v1/cryptocurrency/listings/latest?limit=${limit}`);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;