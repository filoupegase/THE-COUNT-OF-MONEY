const Rss = require('../models/rss');

// Get all the rss feeds in the database
exports.getRssFeeds = (req, res, next) => {
  Rss.find({}, (err, rssFeeds) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(rssFeeds);
  });
}
// Get a single rss feed by id
exports.getRssFeed = (req, res, next) => {
  Rss.findById(req.params.id, (err, rssFeed) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(rssFeed);
  });
}

// Create a new rss feed
exports.createRssFeed = (req, res, next) => {
  const rssFeed = new Rss(req.body);
  rssFeed.save((err, newRssFeed) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(newRssFeed);
  });
}

// Update an rss feed

// Delete an rss feed
exports.deleteRssFeed = (req, res, next) => {
  Rss.findByIdAndDelete(req.params.id, (err, deletedRssFeed) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(deletedRssFeed);
  });
}