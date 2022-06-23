const express = require("express");
const app = express();
app.use(express.json());
const pastes = require('./data/pastes-data');
const pastesRouter = require('./pastes/pastes.router');

//use pastes router
app.use('/pastes', pastesRouter);

// Not found handler
app.use((req, res, next) => {
  next(`Not found: ${req.originalUrl}`);
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  const { status = 500, message = 'Something went wrong!' } = err;
  res.status(status).json({ error: message });
});

module.exports = app;
