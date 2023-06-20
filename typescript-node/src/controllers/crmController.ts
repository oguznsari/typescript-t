import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    try {
        let newContact = new Contact(req.body);
        res.json(newContact);
    } catch (error) {
        res.send(error);
    }
};

export const getContacts = async (req, res) => {

    try {
        let contact = await Contact.find({});
        res.json(contact);

        // actual data
        for (let item of contact) {
            console.log(item);
        }

        // position of data
        for (let itemPos in contact) {
            console.log(itemPos);
        }
    } catch (error) {
        res.send(error);

    }
};

export const getContactWithID = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const updateContact = (req, res) => {
    try {
        let contact = Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true });
        res.json(contact)

    } catch (error) {
        res.send(error);
    }
}

export const deleteContact = (req, res) => {
    Contact.deleteOne({ _id: req.params.contactId }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted contact' });
    })
}