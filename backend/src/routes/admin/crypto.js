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
    res.status(500);
    return next(err);
  }
});

router.put('/state/:cmcId', async (req, res, next) => {
  const cmcid = req.params.cmcId;
  const state = req.query.state;
  try {
    const data = await cryptoController.changeCryptoState(cmcid, state);
    if (!data) {
      throw Error('Crypto not found');
    }
    res.status(200).send(data);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Delete a crypto
router.delete('/:cmcId', async (req, res, next) => {
  const cmcid = req.params.cmcId;
  try {
    const data = await cryptoController.deleteCrypto(cmcid);
    if (!data) {
      throw Error('Crypto not found');
    }
    res.status(200).send(data);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Add a new crypto
router.post('/', async (req, res, next) => {
  const cmcid = req.body.cmcId;
  const state = req.body.state;
  try {
    const cryptolst = await cryptoController.getCryptoCmcId();
    if (cryptolst.includes(cmcid)) {
      throw Error('Crypto already exist');
    }

    const data = await cryptoController.addCrypto(cmcid, state);
    if (!data) {
      throw Error('Error adding crypto');
    }
    res.status(200).send(data);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

module.exports = router;