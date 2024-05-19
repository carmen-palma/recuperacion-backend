
const Contact = require('../models/Contact');

// ontener todos los contactos
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los contactos' });
    }
};



// crear nuevo contacto
exports.createContact = async (req, res) => {
    const { name, phone, email } = req.body;
    if (!name || !phone || !email) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    try {
        const newContact = new Contact({ name, phone, email });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el contacto' });
    }
};


// Obtener contacto por id
exports.getContactById = async (req, res) => {
    const { id } = req.params;
    try {
        const contact = await Contact.findById(id);
        if (!contact) {
            return res.status(404).json({ message: 'Contacto no encontrado' });
        }
        res.json(contact);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el contacto' });
    }
};


// aactualizar un contacto por id
exports.updateContactById = async (req, res) => {
    const { id } = req.params;
    const { name, phone, email } = req.body;
    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            id,
            { name, phone, email },
            { new: true }
        );
        if (!updatedContact) {
            return res.status(404).json({ message: 'Contacto no encontrado' });
        }
        res.json(updatedContact);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el contacto' });
    }
};



// Eliminarcontacto por id
exports.deleteContactById = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedContact = await Contact.findByIdAndDelete(id);
        if (!deletedContact) {
            return res.status(404).json({ message: 'Contacto no encontrado' });
        }
        res.json({ message: 'Contacto eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el contacto' });
    }
};
