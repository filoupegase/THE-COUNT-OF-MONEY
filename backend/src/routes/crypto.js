const express = require('express');
const router = express.Router();

const coinMarketCap = require('../crypto/coinmarketcap');
const {getSettings} = require("../controller/settings");
const cryptoController = require('../controller/crypto');

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

router.get('/info', async (req, res, next) => {
  try {
    const list = await cryptoController.getCryptoCmcIdStateTrue();
    const data = await coinMarketCap.getCoinmarketcapData('/v1/cryptocurrency/info?id=' + list);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.post('/add', async (req, res, next) => {
  try {
    console.log(req.body.list);
    await cryptoController.addCrypto(req.body.list);
    res.status(200).send("Crypto added");
  } catch (err) {
    next(err);
  }
});

module.exports = router;