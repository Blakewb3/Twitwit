const router = require('express').Router();
const Twit = require('../../models/post-twit');   

// route to create/add a twit using async/await
router.post('/', async (req, res) => {
  try { 
    const twitData = await Twit.create({
    user_name: req.body.user_name,
    twit_content: req.body.twit_content,
  });

  // if the twit is successfully created, the new response will be returned as json
  res.status(200).json(dishData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;
