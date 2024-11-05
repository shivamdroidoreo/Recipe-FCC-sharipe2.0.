const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

// User login
router.post('/login', async (req, res) => {
  try {
    const usersCollection = req.db.collection('users');
    const { email, password } = req.body;
    const user = await usersCollection.findOne({ email });
    
    if (!user) {
      return res.json({ success: false, message: 'Invalid email or password' });
    }
    
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({ success: false, message: 'Invalid email or password' });
    }
    
    res.json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// User registration
// router.post('/register', async (req, res) => {
//   try {
//     const usersCollection = req.db.collection('users');
//     const { email, password } = req.body;
//     const existingUser = await usersCollection.findOne({ email });
    
//     if (existingUser) {
//       return res.json({ success: false, message: 'Email already exists' });
//     }
    
//     const hashedPassword = await bcrypt.hash(password, 10);
//     await usersCollection.insertOne({ email, password: hashedPassword });
    
//     res.json({ success: true, message: 'Registration successful' });
//   } catch (error) {
//     console.error('Error during registration:', error);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// });

module.exports = router;

//userRouter.js