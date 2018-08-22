var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

import { CONN_MONGODB_LOCAL } from '../constants/Config';
var mongoosePagiante = require('mongoose-paginate');
mongoose.connect(CONN_MONGODB_LOCAL);

var db = mongoose.connection;
autoIncrement.initialize(db);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('DB Connected');
});

import { schemaCategory } from './schemaPost';

schemaCategory.plugin(autoIncrement.plugin, { model: 'Category', field: 'id', startAt: 1 });

var Category = mongoose.model('Category', schemaCategory);

export {
    Category
}

