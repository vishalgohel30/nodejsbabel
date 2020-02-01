// const uuidv4 = require('uuid/v4');
const async = require('async');
const error = require('../constant/errorCodes');
const CONSTANT = require("../constant/constants");
const contactsModel = require("../model/contactsModel");
// const genUtils = require("../utils/GenUtils");

module.exports.listContacts = function (req, res) {
  console.log(new Date().toISOString(), " contactUsers: listContacts ++");
  const userId = req.body.user_id;
  let skip = req.body.skip;
  let limit = req.body.limit;

//   if (!(limit && (typeof limit === 'number' || limit instanceof Number) &&
//     limit <= CONSTANT.CONTACTS_LIST_UPPER_LIMIT && limit >= CONSTANT.CONTACTS_LIST_LOWER_LIMIT)) {
//     limit = 20;
//   }

//   if (!(skip && (typeof skip === 'number' || skip instanceof Number) && skip > 0)) {
//     skip = 0;
//   }

  async.parallel({
    totalCount: (callback) => {
      contactsModel.countContacts(userId, (err, result) => {
        if (err) {
          console.log(new Date().toISOString(), "contactsModel.countContacts error");
          console.log(err);
          callback(error.serverDown, null);
        } else if (result && result.length > 0) {
          callback(null, result[0].row_count);
        } else {
          callback(null, 0);
        }
      })
    },
    contactList: (callback) => {
      contactsModel.listContacts(userId, skip, limit, (err, result) => {
        if (err) {
          console.log(new Date().toISOString(), "contactsModel.listContacts error");
          console.log(err);
          callback(error.serverDown, null);
        } else if (result) {
          callback(null, result);
        } else {
          callback(error.genericError, null);
        }
      })
    }
  }, (err, result) => {
    if (err) {
      return res.json(err);
    } else if (result) {
      if (result.contactList && result.contactList.length > 0) {
        return res.json({
          code: 100,
          message: "Success",
          ...result
        });
      } else {
        return res.json(error.emptyContactList);
      }
      // result = {
      //   ...result,
      //   totalCount: total
      // };
    }
  });

  console.log(new Date().toISOString(), " contactUsers: listContacts --");
};