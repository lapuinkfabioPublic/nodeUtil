import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello World from Node.js Complete Project!' });
});

// Example route using some dependencies
app.get('/uuid', (req, res) => {
  const { v4: uuidv4 } = require('uuid');
  res.json({ uuid: uuidv4() });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});