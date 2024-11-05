// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const { MongoClient } = require('mongodb');
// const bcrypt = require('bcrypt'); // For password hashing
// const aboutRouter = require('./routes/aboutRouter'); // About Us route handler
// const recipesRouter = require('./routes/recipesRouter');
// const userRouter = require('./routes/userRouter');
// const registerRouter = require('./routes/registerRouter');

// // Initialize Express application
// const app = express();
// const PORT = process.env.PORT || 4000;
// const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/teamMembers';

// // MongoDB client
// const client = new MongoClient(uri);

// // Middleware to parse JSON and URL-encoded data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // CORS options
// const corsOptions = {
//     origin: '*', // Adjust for production
//     credentials: true,
//     optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));

// // Connect to MongoDB
// const connectToDatabase = async () => {
//     try {
//         await client.connect();
//         console.log("Connected to MongoDB");
//         app.listen(PORT, () => {
//             console.log(`Server is running on port: ${PORT}`);
//         });
//     } catch (err) {
//         console.error("Failed to connect to MongoDB:", err);
//         process.exit(1); // Exit if connection fails
//     }
// };
// connectToDatabase();

// // Mount the aboutRouter on /api/about
// app.use('/api/about', aboutRouter);
// app.use('/api/recipes', recipesRouter);
// app.use('/api/users', userRouter);
// app.use('/api/users', registerRouter);

// // 404 Not Found Handler
// app.use((req, res, next) => {
//     res.status(404).json({ error: 'Resource not found' });
// });

// // General Error Handler
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(err.status || 500).json({
//         error: err.message || 'Internal Server Error',
//     });
// });

// module.exports = app;


// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const { MongoClient } = require('mongodb');
// const bcrypt = require('bcrypt'); // For password hashing
// const aboutRouter = require('./routes/aboutRouter'); // About Us route handler
// const recipesRouter = require('./routes/recipesRouter');
// const userRouter = require('./routes/userRouter'); // User-related routes (login, etc.)
// const registerRouter = require('./routes/registerRouter'); // Registration route

// // Initialize Express application
// const app = express();
// const PORT = process.env.PORT || 4000;
// const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/teamMembers';

// // MongoDB client
// const client = new MongoClient(uri);

// // Middleware to parse JSON and URL-encoded data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // CORS options
// const corsOptions = {
//     origin: '*', // Adjust for production
//     credentials: true,
//     optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));

// // Connect to MongoDB
// const connectToDatabase = async () => {
//     try {
//         await client.connect();
//         console.log("Connected to MongoDB");
//         app.listen(PORT, () => {
//             console.log(`Server is running on port: ${PORT}`);
//         });
//     } catch (err) {
//         console.error("Failed to connect to MongoDB:", err);
//         process.exit(1); // Exit if connection fails
//     }
// };

// // Mount routers
// app.use('/api/about', aboutRouter);
// app.use('/api/recipes', recipesRouter);
// app.use('/api/users', userRouter); // Combine user routes
// app.use('/api/register', registerRouter); // Adjusted route for registration

// // 404 Not Found Handler
// app.use((req, res, next) => {
//     res.status(404).json({ error: 'Resource not found' });
// });

// // General Error Handler
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(err.status || 500).json({
//         error: err.message || 'Internal Server Error',
//     });
// });

// // Start the database connection
// connectToDatabase();

// module.exports = app;
