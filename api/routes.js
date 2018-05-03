const router = require('express').Router();
const _ = require('lodash');
const fs = require('fs');
const Fuse = require('fuse.js');
const path = require('path');

// @route   GET /search/:query
// @desc    used to fuzzy search for a document
router.get('/search/:query', (req, res) => {
  const { query } = req.params;

  fs.readFile('./files.json', (err, data) => {
    const file = JSON.parse(data);

    const fuse = new Fuse(file, {
      shouldSort: true,
      keys: ['filename', 'tags']
    });
    const results = fuse.search(query);

    res.json(results);
  });
});

// @route   GET /advanced
// @desc    used for more specific searches use url query params
router.get('/advanced', (req, res) => {
  console.log(req.query);

  res.json({ ok: true });
});

// @route   GET /data/:filename
// @desc    retrieve data on a specific document
router.get('/data/:filename', (req, res) => {
  console.log(req.params.filename);

  fs.readFile('./files.json', (err, data) => {
    const file = JSON.parse(data);

    const fileData = file.filter(
      (item) => item.filename === req.params.filename
    )[0];

    res.json(fileData);
  });
});

// @route   GET /document/:filename
// @desc    retrieve document pdf file
router.get('/document/:filename', (req, res) => {
  res.sendFile(path.join(__dirname, 'documents', req.params.filename));
});

module.exports = router;
