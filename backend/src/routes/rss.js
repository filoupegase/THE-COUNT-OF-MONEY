const express = require('express');
const rssController = require('../controller/rss');

const router = express.Router();

// Get all the rss feeds in the database
router.get('/', rssController.getRssFeeds);
// Get a single rss feed by id
router.get('/:id', rssController.getRssFeed);
// Create a new rss feed, only admin can do this
router.post('/', rssController.createRssFeed)

// Update an rss feed

// Delete an rss feed
router.delete('/:id', rssController.deleteRssFeed);

module.exports = router;