var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var mongoosePagiante = require('mongoose-paginate');
import { CONN_MONGODB_LOCAL } from '../constants/Config';

mongoose.connect(CONN_MONGODB_LOCAL);
var db = mongoose.connection;
autoIncrement.initialize(db);

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
    console.log('DB Connected');
});

import { categorySchema } from './categorySchema';
import { postSchema } from './postSchema';

// Category Schema
categorySchema.virtual('posts', {
    ref: 'Post',
    localField: '_id',
    foreignField: 'categories',
    justOne: false,   
});
categorySchema.plugin(autoIncrement.plugin, { model: 'Category', field: 'id', startAt: 1 });
// Post Schema
postSchema.plugin(autoIncrement.plugin, { model: 'Post', field: 'id', startAt: 1 });

var Category = mongoose.model('Category', categorySchema);

export {
    Category
}

