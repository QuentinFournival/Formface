const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const UserSchema = new Schema ({
    Name: { type: String, required: true },
    FirstName: { type: String, required: true },
    Email: { type: String, required: true, unique: true, match: /^[a-zA-Z0-9._-][^<§!:/;,\|()"#`~&=+%µ*$£%>]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/ },
    Password: { type: String },
});

module.exports = UserSchema;