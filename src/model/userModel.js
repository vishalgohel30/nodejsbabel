import { constant } from '../constant/constants'
const dbUtils = require('../utils/dbUtils');

export const addUser = function (addUserObj, callback) {
  const SERVICES_SQL = `INSERT INTO ${constant.TABLE_USERS} SET ?`;
  dbUtils.getDatabase().query(SERVICES_SQL, addUserObj, callback);
};

export const selectUser = (callback) => {
  const SERVICES_SQL = `SELECT * FROM ${constant.TABLE_USERS}`;
  dbUtils.getDatabase().query(SERVICES_SQL, callback);
};


export const editUser = function (id, callback) {
  const SERVICES_SQL = `SELECT * FROM ${constant.TABLE_USERS} WHERE id=${id}`;
  dbUtils.getDatabase().query(SERVICES_SQL, callback);
};

export const deleteUser = function (id, callback) {
  const SERVICES_SQL = `DELETE FROM ${constant.TABLE_USERS} WHERE id='${id}'`;
  dbUtils.getDatabase().query(SERVICES_SQL, callback);
};

export const updateUser = function (update, id, callback) {
  const SERVICES_SQL = `UPDATE ${constant.TABLE_USERS} SET ? WHERE id='${id}'`;
  dbUtils.getDatabase().query(SERVICES_SQL, update, callback);
}
