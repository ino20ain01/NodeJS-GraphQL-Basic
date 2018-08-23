var mongoose = require('mongoose');

export var postSchema = new mongoose.Schema({
    title: String,
    description: String,
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    create_date: { type: Date, default: Date.now },
    update_date: { type: Date, default: Date.now }
}); 