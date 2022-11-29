const UserModel = require("../models/user");
const RssModel = require("../models/rss");
const SettingsModel = require("../models/settings");

// Settings
SettingsModel.findOne({}, (err, settings) => {
  if (err) {
    console.log(err);
  } else if (!settings) {
    const newSettings = new SettingsModel();
    newSettings.save();
    console.log("=> Settings initialized");
  }
});

// users
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

// crypto


// rss

RssModel.find({}, (err, rssFeeds) => {
  if (err) {
    console.log(err);
  } else if (rssFeeds.length === 0) {
    const rssFeed1 = new RssModel({
      name: 'Actualités Altcoins',
      link: 'https://coinacademy.fr/actu/altcoins?feed=gn',
      state: true
    });
    const rssFeed2 = new RssModel({
      name: 'Actualités Bitcoin',
      link: 'https://coinacademy.fr/actu/bitcoin?feed=gn',
      state: true
    });
    const rssFeed3 = new RssModel({
      name: 'Actualités Ethereum',
      link: 'https://coinacademy.fr/actu/ethereum?feed=gn',
      state: true
    });
    const rssFeed4 = new RssModel({
      name: 'Actualités Fiscalité',
      link: 'https://coinacademy.fr/actu/fiscalite?feed=gn',
      state: true
    });
    const rssFeed5 = new RssModel({
      name: 'Actualités Mining',
      link: 'https://coinacademy.fr/actu/mining?feed=gn',
      state: true
    });
    const rssFeed6 = new RssModel({
      name: 'Actualités NFT',
      link: 'https://coinacademy.fr/actu/nft?feed=gn',
      state: true
    });
    const rssFeed7 = new RssModel({
      name: 'Actualités Play-to-Earn',
      link: 'https://coinacademy.fr/actu/play-to-earn?feed=gn',
      state: true
    });
    const rssFeed8 = new RssModel({
      name: 'Actualités Régulation',
      link: 'https://coinacademy.fr/actu/regulation?feed=gn',
      state: true
    });
    const rssFeed9 = new RssModel({
      name: 'Coin Hebdo – Récap de la semaine',
      link: 'https://coinacademy.fr/actu/coin-hebdo?feed=gn',
      state: true
    });
    // Save all the rss feeds at once
    RssModel.insertMany([rssFeed1, rssFeed2, rssFeed3, rssFeed4, rssFeed5, rssFeed6, rssFeed7, rssFeed8, rssFeed9], (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        console.log("=> Rss feeds initialized");
      }
    });
  }
});