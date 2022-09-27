const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

var corsOptions = {
  origin: '*',
  methods: 'GET',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API Route
const fileRoutes = require('./routes/files.routes');
app.use(`/files`, fileRoutes);

// 404
app.get('*', (req, res) => {
  res.status(404).send({
    statusCode: 404,
    statusMessage: `The route doesn't exist!`
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
