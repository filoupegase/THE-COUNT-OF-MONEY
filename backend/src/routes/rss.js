const express = require('express');
const router = express.Router();
const Parser = require('rss-parser');

const rssController = require('../controller/rss');
const {getSettings} = require("../controller/settings");


function getRssArticles(url) {
  // Get only the last 10 articles to save bandwidth
  return new Promise((resolve, reject) => {
    const feed = new Parser();
    feed.parseURL(url, (err, parsed) => {
      if (err) {
        reject(err);
      } else {
        resolve(parsed);
      }
    });
  });
}

router.get('/', async (req, res, next) => {
  const limit = await getSettings().then(settings => settings.popularRss);
  // get all the rss feeds from the database
  const rssFeeds = await rssController.getRssFeedsStateTrue();

  // Agrregate all the rss feeds articles in one rss feed
  const agregatedRssFeed = {
    title: 'Agregated Rss Feed',
    description: 'Agregated Rss Feed',
    items: []
  };

  for (let i = 0; i < rssFeeds.length; i++) {
    let articles = await getRssArticles(rssFeeds[i].link);
    agregatedRssFeed.items = agregatedRssFeed.items.concat(articles.items);
  }

  // Sort the articles by date
  agregatedRssFeed.items.sort((a, b) => {
    return new Date(b.pubDate) - new Date(a.pubDate);
  });

  agregatedRssFeed.items = agregatedRssFeed.items.slice(0, limit);
  return res.json(agregatedRssFeed);
});

module.exports = router;