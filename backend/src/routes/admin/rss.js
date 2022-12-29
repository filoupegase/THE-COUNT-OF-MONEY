const express = require('express');
const rssController = require('../../controller/rss');

const router = express.Router();

// All the rss routes that require Admin privileges

// Get all the rss feeds in the database
router.get('/', (req, res, next) => {
  rssController.getRssFeeds()
    .then(rssFeeds => {
      res.status(200).send(rssFeeds);
    })
    .catch(err => {
      res.status(500);
      return next(err);
    });
});

// Get a single rss feed by id
router.get('/:id', rssController.getRssFeed);

// Add a new rss feed
router.post('/', rssController.createRssFeed)

router.put('/state/:id', async (req, res, next) => {
  const id = req.params.id;
  const state = req.query.state;

  try {
    const data = await rssController.changeRssState(id, state);
    if (!data) {
      throw Error('Rss not found');
    }
    res.status(200).send(data);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Update an rss feed state
router.put('/:id', rssController.changeRssFeedState);

// Delete an rss feed
router.delete('/:id', rssController.deleteRssFeed);

module.exports = router;


