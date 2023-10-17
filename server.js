const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});//add helper here

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 30 * 60 * 1000, // Session expires after 30 minutes of inactivity
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
}));

app.use(session(sess));

// Set up Handlebars.js
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Static files (CSS, JavaScript, etc.)
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening on http://localhost:${PORT}`);
  });
});
