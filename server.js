// server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { app } from './firebase'; // Import the initialized Firebase app
require('dotenv').config();

const firebaseApp = app; // Access the initialized Firebase app

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to CulinAI Backend!');
});

// Add a new recipe
app.post('/recipes', async (req, res) => {
  // Your code to interact with Firebase
});

// Get all recipes
app.get('/recipes', async (req, res) => {
  // Your code to interact with Firebase
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
