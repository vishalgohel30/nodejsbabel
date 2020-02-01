// const CONSTANT = require('../constant/constants');
// const dbUtils = require('../utils/dbUtils');

// export const addContact = function (contactObj, callback) {
//   console.log(new Date().toISOString() + " contactsModel: addContact ++");
//   const ADD_CONTACT_SQL = `INSERT INTO ${CONSTANT.TABLE_CONTACTS} SET ?`;
//   console.log(new Date().toISOString(), ADD_CONTACT_SQL);
//   dbUtils.getDatabase().query(ADD_CONTACT_SQL, contactObj, callback);
//   console.log(new Date().toISOString() + " contactsModel: addContact --");
// };

// module.exports.findContact = function (userId, mobileNo, callback) {
//   console.log(new Date().toISOString() + " contactsModel: findContact ++");
//   const FIND_CONTACT_SQL = `SELECT * FROM ${CONSTANT.TABLE_CONTACTS} WHERE user_id='${userId}' AND mobile_no='${mobileNo}'`;
//   console.log(new Date().toISOString(), FIND_CONTACT_SQL);
//   dbUtils.getDatabase().query(FIND_CONTACT_SQL, callback);
//   console.log(new Date().toISOString() + " contactsModel: findContact --");
// };

// module.exports.countContacts = function (userId, callback) {
//   console.log(new Date().toISOString() + " contactsModel: countContacts ++");
//   const COUNT_CONTACTS_SQL = `SELECT COUNT(*) as row_count FROM ${CONSTANT.TABLE_CONTACTS} WHERE user_id='${userId}' AND status='${CONSTANT.CONTACT_ENABLED}'`;
//   console.log(new Date().toISOString(), COUNT_CONTACTS_SQL);
//   dbUtils.getDatabase().query(COUNT_CONTACTS_SQL, callback);
//   console.log(new Date().toISOString() + " contactsModel: countContacts --");
// };

// module.exports.listContacts = function (userId, skip, limit, callback) {
//   console.log(new Date().toISOString() + " contactsModel: listContacts ++");
//   const LIST_CONTACTS_SQL = `SELECT user_id, contact_id, name, mobile_no FROM ${CONSTANT.TABLE_CONTACTS} WHERE user_id='${userId}' AND status='${CONSTANT.CONTACT_ENABLED}' LIMIT ${skip}, ${limit}`;
//   console.log(new Date().toISOString(), LIST_CONTACTS_SQL);
//   dbUtils.getDatabase().query(LIST_CONTACTS_SQL, callback);
//   console.log(new Date().toISOString() + " contactsModel: listContacts --");
// };

// module.exports.updateContact = function (contactId, updateObj, callback) {
//   console.log(new Date().toISOString() + " contactsModel: updateContact ++");
//   const UPDATE_CONTACT_SQL = `UPDATE ${CONSTANT.TABLE_CONTACTS} SET ? WHERE contact_id='${contactId}'`;
//   console.log(new Date().toISOString(), UPDATE_CONTACT_SQL);
//   dbUtils.getDatabase().query(UPDATE_CONTACT_SQL, updateObj, callback);
//   console.log(new Date().toISOString() + " contactsModel: updateContact --");
// };

// module.exports.deleteContact = function (contactId, updateObj, callback) {
//   console.log(new Date().toISOString() + " contactsModel: deleteContact ++");
//   const DELETE_CONTACT_SQL = `UPDATE ${CONSTANT.TABLE_CONTACTS} SET ? WHERE contact_id='${contactId}' AND status='${CONSTANT.CONTACT_ENABLED}'`;
//   console.log(new Date().toISOString(), DELETE_CONTACT_SQL);
//   dbUtils.getDatabase().query(DELETE_CONTACT_SQL, updateObj, callback);
//   console.log(new Date().toISOString() + " contactsModel: deleteContact --");
// };

import {constant} from '../constant/constants'
const dbUtils = require('../utils/dbUtils');

export const selectUserContact = function (callback) {
    console.log(new Date().toISOString() + " servicesModel: services sql in ++");
    const SERVICES_SQL = `SELECT * FROM ${constant.TABLE_CONTACTS}`;
    dbUtils.getDatabase().query(SERVICES_SQL, callback);
    console.log(new Date().toISOString() + " servicesModel: services sql exit --");
}

export const addUserContacts=(addUserObj, callback)=>{
    console.log(new Date().toISOString() + " contactsModel: addContact ++");
  const ADD_CONTACT_SQL = `INSERT INTO ${constant.TABLE_CONTACTS} SET ?`;
  console.log(new Date().toISOString(), ADD_CONTACT_SQL);
  dbUtils.getDatabase().query(ADD_CONTACT_SQL, addUserObj, callback);
  console.log(new Date().toISOString() + " contactsModel: addContact --");
}

export const deleteUserContacts=(id,callback)=>{
  console.log(new Date().toISOString() + " servicesModel: services sql in ++");
  const SERVICES_SQL = `DELETE FROM ${constant.TABLE_CONTACTS} WHERE id=${id}`;
  dbUtils.getDatabase().query(SERVICES_SQL, callback);
  console.log(new Date().toISOString() + " servicesModel: services sql exit --");
}

export const editUserContacts = (id, callback) => {
  console.log(id)
  console.log(new Date().toISOString() + " servicesModel: services sql in ++");
  const SERVICES_SQL = `SELECT * FROM ${constant.TABLE_CONTACTS} WHERE id='${id}'`
  // const SERVICES_SQL = `SELECT * FROM ${constant.TABLE_SERVICES} WHERE id='${id}'`;
  dbUtils.getDatabase().query(SERVICES_SQL, callback);
  console.log(new Date().toISOString() + " servicesModel: services sql exit --");
}

export const updateUserContacts=(id, update, callback)=>{
  console.log(new Date().toISOString() + " servicesModel: services sql in ++");
  const SERVICES_SQL = `UPDATE ${constant.TABLE_CONTACTS} SET? WHERE ID=${id}`
  dbUtils.getDatabase().query(SERVICES_SQL, update, callback);
  console.log(new Date().toISOString() + " servicesModel: services sql exit --");
}