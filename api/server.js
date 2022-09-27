const express = require('express');
const app = express();
const port = 3000;
const baseUri = '/files/data';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API Route
const FilesController = require('./controllers/files.controller');
app.get(baseUri, FilesController.getAllFiles);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
