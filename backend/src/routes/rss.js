const express = require('express');
const router = express.Router();
const Parser = require('rss-parser');

const rssController = require('../controller/rss');
const {getSettings} = require("../controller/settings");


function getRssArticles(url) {
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

// This route return clean list of rss articles agregated from all rss feeds from the database
router.get('/', async (req, res, next) => {
  const limit = await getSettings().then(settings => settings.popularRss);
  const rssFeeds = await rssController.getRssFeedsStateTrue();

  const rssArticles = await Promise.all(rssFeeds.map(rssFeed => getRssArticles(rssFeed.link)));
  const articles = rssArticles.map(rssArticle => rssArticle.items).flat();
  articles.sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate));

  res.status(200).send(articles.slice(0, limit));
});

module.exports = router;