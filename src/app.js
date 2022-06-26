const express = require("express");
const app = express();
app.use(express.json());
const pastes = require('./data/pastes-data');
const usersRouter = require('./users/users.router');
const pastesRouter = require('./pastes/pastes.router');

//router for users and pastes
app.use('/users', usersRouter);
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
