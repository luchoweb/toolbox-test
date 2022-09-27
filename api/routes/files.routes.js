'use strict';

const express = require('express');
const router = express.Router();

const FilesController = require('../controllers/files.controller');

// Get all files and content
router.get('/data', FilesController.getAllFiles);

// Get all files and content
router.get('/list', FilesController.getAllFilesNames);

module.exports = router;
