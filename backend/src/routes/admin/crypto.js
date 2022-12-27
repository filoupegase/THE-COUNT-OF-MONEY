const express = require('express');
const router = express.Router();

const coinMarketCap = require('../../crypto/coinmarketcap');
const {getSettings} = require("../../controller/settings");
const cryptoController = require('../../controller/crypto');

/**
 * Get the crypto store in the database
 *
 * @param req
 * @param res
 * @param next
 */

router.get('/', async (req, res, next) => {
  const state = req.query.state;
  let data = '';
  console.log("====> State: " + state);
  try {
    // switch the state
    switch (state) {
      case 'true':
        data = await cryptoController.getCryptoStateTrue();
        break;
      case 'false':
        data = await cryptoController.getCryptoStateFalse();
        break;
      default:
        data = await cryptoController.getCrypto();
        break;
    }
    res.status(200).send(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;