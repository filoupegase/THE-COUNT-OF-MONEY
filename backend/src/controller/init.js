const UserModel = require("../models/user");
const RssModel = require("../models/rss");
const SettingsModel = require("../models/settings");
const CryptoModel = require("../models/crypto");

SettingsModel.findOne({}, (err, settings) => {
  if (err) {
    console.log(err);
  } else if (!settings) {
    const newSettings = new SettingsModel();
    newSettings.save();
    console.log("=> Settings initialized");
  }
});

UserModel.countDocuments({}, (err, count) => {
  if (err) {
    console.log(err);
  } else if (count === 0) {
    const admin = new UserModel({
      username: 'admin',
      email: 'admin@localhost',
      password: 'admin123',
      roles: ['user', 'admin']
    });

    const user = new UserModel({
      username: 'user',
      email: 'user@localhost',
      password: 'user123'
    });
    admin.save();
    user.save();
    console.log("=> Users initialized");
  }
});

CryptoModel.countDocuments({}, (err, count) => {
  if (err) {
    console.log(err);
  } else if (count === 0) {
    const crypto = new CryptoModel({
      name: 'Bitcoin',
      symbol: 'BTC',
      cmcId: '1',
      state: true
    });
    const crypto2 = new CryptoModel({
      name: 'Ethereum',
      symbol: 'ETH',
      cmcId: '1027',
      state: true
    });
    const crypto3 = new CryptoModel({
      name: 'Tether',
      symbol: 'USDT',
      cmcId: '825',
      state: true
    });
    const crypto4 = new CryptoModel({
      name: 'BNB',
      symbol: 'BNB',
      cmcId: '1839',
      state: true
    });
    const crypto5 = new CryptoModel({
      name: 'USD Coin',
      symbol: 'USDC',
      cmcId: '3408',
      state: true
    });
    crypto.save();
    crypto2.save();
    crypto3.save();
    crypto4.save();
    crypto5.save();
    console.log("=> Crypto initialized");
  }
});

RssModel.find({}, (err, rssFeeds) => {
  if (err) {
    console.log(err);
  } else if (rssFeeds.length === 0) {
    const rssFeed1 = new RssModel({
      name: 'Actualités Bitcoin',
      link: 'https://coinacademy.fr/actu/bitcoin?feed=gn',
      state: true
    });
    const rssFeed2 = new RssModel({
      name: 'Actualités Ethereum',
      link: 'https://coinacademy.fr/actu/ethereum?feed=gn',
      state: true
    });
    const rssFeed3 = new RssModel({
      name: 'Actualités Fiscalité',
      link: 'https://coinacademy.fr/actu/fiscalite?feed=gn',
      state: true
    });
    const rssFeed4 = new RssModel({
      name: 'Actualités Mining',
      link: 'https://coinacademy.fr/actu/mining?feed=gn',
      state: false
    });
    const rssFeed5 = new RssModel({
      name: 'Coin Hebdo – Récap de la semaine',
      link: 'https://coinacademy.fr/actu/coin-hebdo?feed=gn',
      state: true
    });
    // Save all the rss feeds at once
    RssModel.insertMany([rssFeed1, rssFeed2, rssFeed3, rssFeed4, rssFeed5], (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        console.log("=> Rss feeds initialized");
      }
    });
  }
});