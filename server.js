const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
// todo: remeber to replace placeholders
const sequelize = require('.placholder');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Session configuration
const sess = {
  secret: process.env.SESSION_SECRET || 'secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Set up Handlebars.js
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static files (CSS, JavaScript, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Server is running on port ' + PORT));
});
