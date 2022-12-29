const Rss = require('../models/rss');

// Get all the rss feeds in the database
exports.getRssFeeds = () => {
  return Rss.find({})
    .then(rssFeeds => {
      if (!rssFeeds) {
        throw Error('Rss feeds not found');
      }
      return rssFeeds;
    })
    .catch(err => {
      throw err;
    });
}

// Get all the rss feeds in the database where the state is true
exports.getRssFeedsStateTrue = () => {
  return Rss.find({state: true})
    .then(rssFeeds => {
      if (!rssFeeds) {
        throw Error('Rss feeds not found');
      }
      return rssFeeds;
    })
    .catch(err => {
      throw err;
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

  if (!rssFeed.link.startsWith('http')) {
    res.status(400);
    return next(new Error('The link must be an url'));
  }

  rssFeed.save((err, newRssFeed) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(newRssFeed);
  });
}

exports.changeRssState = (id, state) => {
  return Rss.findOneAndUpdate({_id: id}, {state: state}, {new: true})
}

// Change the state of an rss feed
exports.changeRssFeedState = (req, res, next) => {
  Rss.findByIdAndUpdate(req.params.id, {state: req.body.state}, {new: true}, (err, updatedRssFeed) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(updatedRssFeed);
  });
}

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