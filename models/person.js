const mongoose = require('mongoose');

// Define the schema for the person
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Ensures that the 'name' property is required
    },
});

// Create the Mongoose model for the person
const Person = mongoose.model('Person', personSchema);

// Export the Person model
module.exports = Person;