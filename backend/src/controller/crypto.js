const Crypto = require("../models/crypto");
const coinMarketCap = require("../crypto/coinmarketcap");

// Get all the crypto
exports.getCrypto = () => {
  return Crypto.find({})
}

// Get all crypto where the state is true
exports.getCryptoStateTrue = () => {
  return Crypto.find({state: true})
}
// Get all crypto where the state is false
exports.getCryptoStateFalse = (req, res, next) => {
  return Crypto.find({state: false})
}

exports.getCryptoCmcIdStateTrue = () => {
  return Crypto.find({state: true})
    .then(crypto => {
      if (!crypto) {
        throw Error('Crypto not found');
      }
      return crypto.map(crypto => crypto.cmcId);
    })
    .catch(err => {
      throw err;
    });
}

exports.getCryptoCmcId = () => {
  return Crypto.find({})
    .then(crypto => {
      if (!crypto) {
        throw Error('Crypto not found');
      }
      return crypto.map(crypto => crypto.cmcId);
    })
    .catch(err => {
      throw err;
    });

}

exports.changeCryptoState = (cmcId, state) => {
  return Crypto.findOneAndUpdate({cmcId: cmcId}, {state: state}, {new: true})
}
exports.deleteCrypto = (cmcId) => {
  return Crypto.findOneAndRemove({cmcId: cmcId})
}

// Add a new crypto addCrypto(cmcid, state);
exports.addCrypto = async (cmcId, state) => {
  // Get the data from coinmarketcap
  const data = await coinMarketCap.getCoinmarketcapData('/v1/cryptocurrency/info?id=' + cmcId);

  const crypto = new Crypto({
    name: data.data[cmcId].name,
    symbol: data.data[cmcId].symbol,
    cmcId: cmcId,
    state: state
  });
  console.log(crypto);
  return crypto.save();
}