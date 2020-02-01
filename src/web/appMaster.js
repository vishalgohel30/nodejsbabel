import express from 'express';
const appMaster = express.Router();
import multer from 'multer';
import services from './services';

const contacts = require('./contacts');
const user = require('./user');
const businessCategories = require('./businessCategories');
const businesses = require('./businesses');

import { upload } from './fileUpload';

// var storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, './public/uploads/')
//   },
//   filename: function (req, file, callback) {
//     callback(null, + Date.now() + file.originalname)
//   }
// })

// var upload = multer({ storage: storage })


// ----* services rute * -----
appMaster.get('/services', (req, res) => {
  services.selectServices(req, res);
});

appMaster.post('/services-add', upload.single('user'), (req, res) => {
  let { file: { filename: image = '' } = {} } = req;
  req.body.service = 'demo';
  req.body.description = 'demo1';
  console.log('image', image, req.body)
  // appMaster.post('/services-add', (req, res) => {
  services.insertServices(req, res);
});

appMaster.post('/services-delete', (req, res) => {
  services.deleteServices(req, res);
});

appMaster.get('/services-edit/:id', (req, res) => {
  services.editServices(req, res);
});

appMaster.post('/services-update', (req, res) => {
  services.updateServices(req, res);
});

// ---- * contacts rute * ----

appMaster.get('/contacts', (req, res) => {
  contacts.selectContacts(req, res);
});

appMaster.post('/contacts-add', (req, res) => {
  contacts.addContacts(req, res);
})

appMaster.post('/contacts-delete', (req, res) => {
  contacts.deleteContacts(req, res);
})

appMaster.get('/contacts-edit/:id', (req, res) => {
  contacts.editContacts(req, res);
})

appMaster.post('/contacts-update', (req, res) => {
  contacts.updateContacts(req, res);
});

// ---*  user rute * --- 
appMaster.get('/user', (req, res) => {
  user.selectUser(req, res);
});

appMaster.post('/user-add', (req, res) => {
  user.insertUser(req, res);
});

appMaster.post('/user-delete', (req, res) => {
  user.deleteUser(req, res);
});

appMaster.get('/user-edit/:id', (req, res) => {
  user.editUser(req, res);
});

appMaster.post('/user-update', (req, res) => {
  user.updateUser(req, res);
});

// ---* businessCategoriesModal rute

appMaster.get('/businessCategories', (req, res) => {
  businessCategories.selectBusinessCategories(req, res);
});

appMaster.post('/businessCategories-add', (req, res) => {
  businessCategories.addBusinessCategories(req, res);
});

appMaster.post('/businessCategories-delete', (req, res) => {
  businessCategories.deleteBusinessCategories(req, res);
});

appMaster.get('/businessCategories-edit/:id', (req, res) => {
  businessCategories.editBusinessCategories(req, res);
});

appMaster.post('/businessCategories-update', (req, res) => {
  businessCategories.updateBusinessCategories(req, res);
});



// ---* business rute

appMaster.get('/business', (req, res) => {
  businesses.selectBusiness(req, res);
});

appMaster.post('/business-add', (req, res) => {
  businesses.addBusiness(req, res);
});

appMaster.post('/business-delete', (req, res) => {
  businesses.deleteBusiness(req, res);
});

appMaster.get('/business-edit/:id', (req, res) => {
  businesses.editBusiness(req, res);
});

appMaster.post('/business-update', (req, res) => {
  businesses.updateBusiness(req, res);
});

export {appMaster};

// appMaster.get('/user-register', (req, res) => {
//   userModel.loginUser((err, result) => {
//     if (err) {
//       console.log(new Date().toISOString(), "userModel.registerUser error");
//       console.log(err);
//       const errCode = genUtils.sqlError(err);
//       return res.json(errCode);
//     } else if (result) {
//       console.log(new Date().toISOString(), "userModel.registerUser result");
//       console.log(result);
//       return res.json({
//         code: 100,
//         message: "Registered successfully",
//         result
//       })
//     } else {
//       return res.json(error.genericError);
//     }
//   });

//   console.log(new Date().toISOString(), " appMaster: user-register --");
// });

