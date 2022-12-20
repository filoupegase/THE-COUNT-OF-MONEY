const Crypto = require("../models/crypto");
const coinMarketCap = require("../crypto/coinmarketcap");

// Get all the crypto
exports.getCrypto = (req, res, next) => {
  Crypto.find({})
    .then(crypto => {
      res.status(200).send(crypto);
    })
    .catch(err => {
      res.status(500);
      return next(err);
    });
}

// Get all crypto where the state is true
exports.getCryptoStateTrue = (req, res, next) => {
  Crypto.find({state: true})
    .then(crypto => {
      res.status(200).send(crypto);
    })
    .catch(err => {
      res.status(500);
      return next(err);
    });
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
// Get all crypto id
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

//FIXME
// exports.addCrypto = async (cmcid) => {
//   const existentId = await this.getCryptoCmcId();
//   if (!Array.isArray(list)) {
//     // Make the list an array delimited by comma
//     list = list.split(',');
//   }
//   console.log("List: " + list);
//   console.log("Existent id: " + existentId);
//   // Remove from list the crypto that already exist in existentId array
//   // make the array
//   for (let i = 0; i < list.length; i++) {
//     console.log("List" + i + ": " + list[i]);
//     if (existentId.includes(list[i])) {
//       console.log("Remove: " + list[i]);
//       list.splice(i, 1);
//     }
//   }
//   console.log("New list: " + list);
//   // return
//   const data = await coinMarketCap.getCoinmarketcapData('/v1/cryptocurrency/info?id=' + list);
//   const cryptoList = [];
//   for (let i in data.data) {
//     cryptoList.push({
//       name: data.data[i].name,
//       symbol: data.data[i].symbol,
//       cmcId: data.data[i].id,
//       state: true
//     });
//   }
//   // Add the list of crypto to the database
//   await Crypto.insertMany(cryptoList);
// }
