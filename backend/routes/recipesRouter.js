const express = require('express');
const router = express.Router();
const { MongoClient, ObjectId } = require('mongodb');
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/recipes'; // Your MongoDB URI
const client = new MongoClient(uri);

// Middleware to connect to MongoDB
const connectToDb = async (req, res, next) => {
  try {
    if (!client.isConnected()) {
      await client.connect();
    }
    req.db = client.db('recipes'); // Replace with your database name
    next();
  } catch (error) {
    res.status(500).json({ error: 'Failed to connect to the database' });
  }
};

// Use the connectToDb middleware
router.use(connectToDb);

// GET recipes by area
router.get('/', async (req, res) => {
  try {
    const area = req.query.area;
    const recipesCollection = req.db.collection('recipes');
    const recipes = await recipesCollection.find({ area }).toArray();
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ error: 'Error fetching recipes' });
  }
});

// GET a single recipe by ID
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const recipesCollection = req.db.collection('recipes');
    const recipe = await recipesCollection.findOne({ _id: new ObjectId(id) });
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    console.error('Error fetching recipe:', error);
    res.status(500).json({ error: 'Error fetching recipe' });
  }
});

module.exports = router;

// recipeRouter.js