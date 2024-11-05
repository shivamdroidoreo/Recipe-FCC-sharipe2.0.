// const express = require('express');
// const router = express.Router();

// // Example registration route
// router.post('/register', async (req, res) => {
//   try {
//     // Your registration logic here
//     // For example, saving user data to the database

//     res.status(201).send({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error("Registration error:", error);
//     res.status(500).send({ error: 'Registration failed' });
//   }
// });

// // Handle 404 for routes not matched in registerRouter
// router.use((req, res) => {
//   res.status(404).send({ error: 'Route not found' });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt'); // For password hashing

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/teamMembers';
const client = new MongoClient(uri);

// Middleware to connect to MongoDB for each request
const connectToDb = async (req, res, next) => {
    try {
        await client.connect();
        req.db = client.db('teamMembers'); // Use your database name
        next();
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).send({ error: 'Failed to connect to the database' });
    }
};

// Use the middleware for all routes in this router
router.use(connectToDb);

// Registration route
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ error: 'Email and password are required' });
    }

    try {
        const usersCollection = req.db.collection('users');

        // Check if user already exists
        const existingUser = await usersCollection.findOne({ email });
        if (existingUser) {
            return res.status(409).send({ error: 'User already exists' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { email, password: hashedPassword };

        // Save the new user to the database
        await usersCollection.insertOne(newUser);
        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).send({ error: 'Registration failed' });
    }
});

// Handle 404 for routes not matched in registerRouter
router.use((req, res) => {
    res.status(404).send({ error: 'Route not found' });
});

module.exports = router;

//registerRouter.js