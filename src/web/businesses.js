import { selectUserBusiness, addUserBusiness, deleteUserBusiness, editUserBusiness, updateUserBusiness } from '../model/businessesModal';
import { ServicesReponse } from '../constant/successCodes';

module.exports.selectBusiness = (req, res) => {

    selectUserBusiness((err, result) => {
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

module.exports.addBusiness = (req, res) => {
    const { category_id, user_id, business_name, address, city, pincode, state, country, phone, email } = req.body;
    addUserBusiness({ category_id, user_id, business_name, address, city, pincode, state, country, phone, email }, (err, result) => {
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

module.exports.deleteBusiness = (req, res) => {
    const { id } = req.body;
    if (!id) { return res.json('delete id is requred') }
    deleteUserBusiness(id, (err, result) => {
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

module.exports.editBusiness = (req, res) => {
    const { id } = req.params
    if (!id) { return res.json({ message: 'edit id is requred' }) }
    editUserBusiness(id, (err, result) => {
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

module.exports.updateBusiness = (req, res) => {
    const { id, category_id, user_id, business_name, address, city, pincode, state, country, phone, email } = req.body;
    if (!id) { return res.json('requrid id'); }
    updateUserBusiness(id, { category_id, user_id, business_name, address, city, pincode, state, country, phone, email }, (err, result) => {
        if (err) {
            return res.json(error.serverDown)
        } else if (result) {
            return res.json({
                code: ServicesReponse.code,
                stauts: ServicesReponse.status,
                message: ServicesReponse.update
            });
        } else {
            return res.json(error.contactNotFound)
        }
    })
}
