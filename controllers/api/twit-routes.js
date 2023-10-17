const router = require('express').Router();
const { twit } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newTwit = await twit.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTwit);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const twitData = await twit.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!twitData) {
      res.status(404).json({ message: 'No Twit found with this id!' });
      return;
    }

    res.status(200).json(twitData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;