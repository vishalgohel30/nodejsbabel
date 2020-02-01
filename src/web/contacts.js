import { selectUserContact, addUserContacts, deleteUserContacts, editUserContacts, updateUserContacts } from '../model/contactsModel';
import { ServicesReponse } from '../constant/successCodes';

module.exports.selectContacts = (req, res) => {

    selectUserContact((err, result) => {
        if (err) {
            console.log(err);
            return res.json(error.serverDown);
        } else if (result) {
            return res.json({
                code: ServicesReponse.code,
                stauts: ServicesReponse.status,
                message: ServicesReponse.select,
                result
            });
        } else {
            return res.json(error.contactNotFound);
        }
    });

    console.log(new Date().toISOString(), " selectContacts: selectContacts --");
}

module.exports.addContacts = (req, res) => {
    const { name, phone, subject, message } = req.body;
    addUserContacts({ name, phone, subject, message }, (err, result) => {
        if (err) {
            return res.json(error.serverDown);
        } else if (result) {
            return res.json({
                code: ServicesReponse.code,
                stauts: ServicesReponse.status,
                message: ServicesReponse.add,
                // result
            });
        } else {
            return res.json(error.contactNotFound);
        }
    })
}

module.exports.deleteContacts = (req, res) => {
    const { id } = req.body;
    if (!id) { return res.json('delete id is requred') }
    deleteUserContacts(id, (err, result) => {
        if (err) {
            return res.json(error.serverDown);
        } else if (result) {
            return res.json({
                code: ServicesReponse.code,
                stauts: ServicesReponse.status,
                message: ServicesReponse.delete,
                // result
            });
        } else {
            return res.json(error.contactNotFound);
        }
    })
}

module.exports.editContacts = (req, res) => {
    const { id } = req.params
    if (!id) { return res.json({ message: 'edit id is requred' }) }
    editUserContacts(id, (err, result) => {
        if (err) {
            return res.json(error.serverDown);
        } else if (result) {
            return res.json({
                code: ServicesReponse.code,
                stauts: ServicesReponse.status,
                message: ServicesReponse.edit,
                result
            });
        } else {
            return res.json(error.contactNotFound);
        }
    });
}

module.exports.updateContacts = (req, res) => {
    const { id, name, phone, subject, message } = req.body;
    if (!id) { return res.json('requrid id'); }
    updateUserContacts(id, { name, phone, subject, message }, (err, result) => {
        if (err) {
            return res.json(error.serverDown)
        } else if (result) {
            return res.json({
                code: ServicesReponse.code,
                stauts: ServicesReponse.status,
                message: ServicesReponse.update,
            });
        } else {
            return res.json(error.contactNotFound)
        }
    })
}