'use strict';

const express = require('express');
const router = express.Router();

const FilesController = require('../controllers/files.controller');

// Get all files and their content
router.get('/data', FilesController.getAllFiles);

// Get all file names
router.get('/list', FilesController.getAllFilesNames);

module.exports = router;
