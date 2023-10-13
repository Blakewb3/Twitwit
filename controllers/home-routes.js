const router = require('express').Router();
const { Twit, User } = require('../models');
const withAuth = require('../utils/auth');

// Route for the homepage to display twits
router.get('/', async (req, res) => {
  try {
    // Fetch all twits and include user data for each twit
    const twitData = await Twit.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const twits = twitData.map((twit) => twit.get({ plain: true }));

    // Render the homepage template with serialized data and session flag
    res.render('homepage', {
      twits,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for displaying a user's profile
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find and retrieve data for the logged-in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: PostTwit }],
    });

    const user = userData.get({ plain: true });

    // Render the user's profile with serialized data and set the logged-in flag
    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  // Redirect to the profile route if the user is already logged in
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
