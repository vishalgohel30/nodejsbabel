const error = require('../constant/errorCodes');
import { selectUser, addUser, deleteUser, editUser, updateUser } from '../model/userModel';
import { ServicesReponse } from '../constant/successCodes';


module.exports.selectUser = function (req, res) {
    selectUser((err, result) => {
        if (err) {
            console.log(new Date().toISOString(), "userModel.selectServices error");
            console.log(err);
            return res.json(error.serverDown);
        } else if (result) {
            console.log(new Date().toISOString(), "userModel.selectServices result");
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

    console.log(new Date().toISOString(), " selectServices: selectServices --");

};

module.exports.insertUser = (req, res) => {
    let { name, phone, stauts, passowrd } = req.body;
    addUser({ name, phone }, (err, result) => {
        if (err) {
            return res.json(error.serverDown);
        } else if (result) {
            return res.json({
                code: ServicesReponse.code,
                stauts: ServicesReponse.status,
                message: ServicesReponse.add,
            });
        } else {
            return res.json(error.contactNotFound);
        }
    });
    console.log(new Date().toISOString(), " selectServices: selectServices --");
}

module.exports.deleteUser = (req, res) => {
    let { id } = req.body;
    deleteUser(id, (err, result) => {
        if (err) {
            return res.json(error.serverDown);
        } else if (result) {
            return res.json({
                code: ServicesReponse.code,
                stauts: ServicesReponse.status,
                message: ServicesReponse.delete,
            });
        } else {
            return res.json(error.contactNotFound);
        }
    });
    console.log(new Date().toISOString(), " selectServices: selectServices --");
}

module.exports.editUser = (req, res) => {
    let { id } = req.params;
    editUser(id, (err, result) => {
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
    console.log(new Date().toISOString(), " selectServices: selectServices --");
}

module.exports.updateUser = (req, res) => {
    const { name, phone, status, password, id } = req.body;
    if (!id) {
        return res.json({
            message: 'id is required?'
        })
    }
    const update = { name, phone, status, password };
    updateUser(update, id, (err, result) => {

        if (err) {
            return res.json(error.serverDown);
        } else if (result) {
            return res.json({
                code: ServicesReponse.code,
                status: ServicesReponse.status,
                message: ServicesReponse.update,

            })
        } else {
            return res.json(error.contactNotFound);
        }
    });
}


//https://www.youtube.com/watch?v=ByPelyF4SJs&feature=youtu.be