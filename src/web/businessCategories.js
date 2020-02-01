import { selectUserBusinessCategories, addUserBusinessCategories, deleteUserBusinessCategories, editUserBusinessCategories, updateUserBusinessCategories } from '../model/businessCategoriesModal';
import { ServicesReponse } from '../constant/successCodes';

module.exports.selectBusinessCategories = (req, res) => {

    selectUserBusinessCategories((err, result) => {
        if (err) {
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
}

module.exports.addBusinessCategories = (req, res) => {
    const { category, description, status } = req.body;
    console.log(req.body)
    addUserBusinessCategories({ category, description, status }, (err, result) => {
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

module.exports.deleteBusinessCategories = (req, res) => {
    const { id } = req.body;
    if (!id) { return res.json('delete id is requred') }
    deleteUserBusinessCategories(id, (err, result) => {
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

module.exports.editBusinessCategories = (req, res) => {
    const { id } = req.params
    if (!id) { return res.json({ message: 'edit id is requred' }) }
    editUserBusinessCategories(id, (err, result) => {
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

module.exports.updateBusinessCategories = (req, res) => {
    const { id, category, description, status } = req.body;
    if (!id) { return res.json('requrid id'); }
    updateUserBusinessCategories(id, { category, description, status }, (err, result) => {
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
