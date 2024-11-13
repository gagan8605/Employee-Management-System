const mongoose = require('mongoose');

// Generate a random unique employee ID
const generateEmployeeId = () => 'EMP' + Math.floor(100000 + Math.random() * 900000);

const employeeSchema = new mongoose.Schema({
    employeeId: { type: String, unique: true, default: generateEmployeeId },
    name: String,
    age: Number,
    position: String,
    department: String,
    salary: Number,
    status: { type: String, enum: ['active', 'inactive'], default: 'active' }
});

module.exports = mongoose.model('Employee', employeeSchema);
