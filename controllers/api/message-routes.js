const express = require('express');
const router = express.Router();
const Message = require('../../models/message');
const withAuth = require('../../utils/auth');

// Route to send a new private message (requires authentication)
router.post('/send', withAuth, async (req, res) => {
  try {
    // Create a new private message with the content, sender ID from the session, and receiver ID from the request body
    const newMessage = await Message.create({
      content: req.body.content,
      senderId: req.session.user_id, // Sender's user ID from the session
      receiverId: req.body.receiverId,  // Receiver's user ID from the request body
      status: 'sent', // Set the initial status as 'sent'
    });

    res.status(200).json(newMessage);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to view private messages (requires authentication)
router.get('/view', withAuth, async (req, res) => {
  try {
    // Fetch private messages that the user is either the sender or receiver of
    const messages = await Message.findAll({
      where: {
        [Op.or]: [
          { senderId: req.session.user_id },
          { receiverId: req.session.user_id },
        ],
      },
      order: [['createdAt', 'ASC']], // Order messages by creation date
    });

    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to mark a message as 'read' (requires authentication)
router.put('/mark-read/:id', withAuth, async (req, res) => {
  try {
    // Find the message by ID
    const message = await Message.findByPk(req.params.id);

    if (!message) {
      res.status(404).json({ message: 'Message not found' });
      return;
    }

    // Check if the logged-in user is either the sender or receiver of the message
    if (message.senderId !== req.session.user_id && message.receiverId !== req.session.user_id) {
      res.status(403).json({ message: 'You are not authorized to mark this message as read' });
      return;
    }

    // Update the message status to 'read'
    message.status = 'read';

    await message.save();

    res.status(200).json(message);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
