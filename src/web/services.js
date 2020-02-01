import express from 'express';
import error from '../constant/errorCodes';
import { selectUserServices, insertUserServices, deleteUserServices, editUserServices, updateUserServices } from '../model/servicesModel';
import { ServicesReponse } from '../constant/successCodes';
// const multer = require('multer');
const app = express();


module.exports.selectServices = function (req, res) {
    selectUserServices((err, result) => {
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

    console.log(new Date().toISOString(), " selectServices: selectServices --");
};

// Public Folder
app.use(express.static('../public'));

module.exports.insertServices = (req, res) => {
    let { service, description } = req.body;
    let { file: { filename: image = '' } = {} } = req;
    console.log('image', image, service, description)
    // let image = 'adsf';
    insertUserServices({ service, description, image }, (err, result) => {
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

module.exports.deleteServices = (req, res) => {
    let { id } = req.body;
    deleteUserServices(id, (err, result) => {
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

module.exports.editServices = (req, res) => {
    let { id } = req.params;
    editUserServices(id, (err, result) => {
        if (err) {
            return res.json(error.serverDown);
        } else if (result) {
            return res.json({
                code: ServicesReponse.code,
                status: ServicesReponse.status,
                message: ServicesReponse.edit,
                result
            });
        } else {
            return res.json(error.contactNotFound);
        }
    });
    console.log(new Date().toISOString(), " selectServices: selectServices --");
}

module.exports.updateServices = (req, res) => {
    const { service, image, description, id } = req.body;
    if (!id) {
        return res.json({
            message: 'id is required?'
        })
    }
    const update = { service, image, description };
    updateUserServices(update, id, (err, result) => {

        if (err) {
            return res.json(error.serverDown);
        } else if (result) {
            return res.json({
                code: ServicesReponse.code,
                stauts: ServicesReponse.status,
                message: ServicesReponse.update,

            })
        } else {
            return res.json(error.contactNotFound);
        }
    });
}


//https://www.youtube.com/watch?v=ByPelyF4SJs&feature=youtu.be