const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  isCompleted: { type: Boolean, default: false },
  startedAt: Date,
  endedAt: Date,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);


// mongodb+srv://galustpetrosyan809:<db_password>@cluster0.spu3lhd.mongodb.net/