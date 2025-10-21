require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
// console.log(PORT);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
