
const mongoose = require('mongoose');

// ç esquema de contacto
 const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true }
});


// modelo de contacto
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;