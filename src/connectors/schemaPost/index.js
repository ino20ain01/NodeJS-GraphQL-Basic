var mongoose = require('mongoose');

export var schemaCategory = new mongoose.Schema({
    title: String,
    description: String,
    create_date: { type: Date, default: Date.now },
    update_date: { type: Date, default: Date.now }
});