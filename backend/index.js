const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
var aboutRouter = require('./routes/aboutRouter');

var app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017'; // Default to local MongoDB
const client = new MongoClient(uri);

client.connect()
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server only after connecting to MongoDB
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Failed to connect to MongoDB:", err);
  });

app.use('/api/about', aboutRouter); // Mounting the aboutRouter on /api/about

// 404 Not Found Handler
app.use((req, res, next) => {
    res.status(404).json({ error: 'Resource not found' });
});

// General Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error for debugging
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error',
    });
});

// Exporting the app for testing or other uses
module.exports = app;
