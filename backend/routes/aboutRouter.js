const express = require('express');
const { MongoClient } = require('mongodb');

const router = express.Router();
const uri = process.env.DB_URI || 'mongodb://localhost:27017/teamMembers'; // Your MongoDB URI
const client = new MongoClient(uri);

// Middleware to connect to MongoDB
const connectToDb = async (req, res, next) => {
  try {
    await client.connect();
    req.db = client.db('teamMembers'); // Use your database name
    next();
  } catch (error) {
    res.status(500).json({ error: 'Failed to connect to the database' });
  }
};

// Use the connectToDb middleware
router.use(connectToDb);

// GET About Us message
router.get('/', async (req, res) => {
    try {
      const aboutCollection = req.db.collection('about');
      const aboutMessage = await aboutCollection.findOne({});
      if (!aboutMessage) {
        return res.status(404).json({ error: 'About message not found' });
      }
      res.json(aboutMessage);
    } catch (error) {
      console.error('Error fetching about message:', error);
      res.status(500).json({ error: 'Error fetching about message' });
    }
  });
  
  // GET team members
  router.get('/team', async (req, res) => {
    try {
      const teamCollection = req.db.collection('team');
      const teamMembers = await teamCollection.find({}).toArray();
      if (teamMembers.length === 0) {
        return res.status(404).json({ error: 'No team members found' });
      }
      res.json(teamMembers);
    } catch (error) {
      console.error('Error fetching team members:', error);
      res.status(500).json({ error: 'Error fetching team members' });
    }
  });
// Export the router
module.exports = router;
