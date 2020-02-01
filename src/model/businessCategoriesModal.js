
// const CONSTANT = require('../constant/constants');
import {constant} from '../constant/constants'
const dbUtils = require('../utils/dbUtils');

export const selectUserBusinessCategories = function (callback) {
    const SERVICES_SQL = `SELECT * FROM ${constant.TABLE_BUSINESS_CATEGORIES}`;
    dbUtils.getDatabase().query(SERVICES_SQL, callback);
}

export const addUserBusinessCategories=(addUserObj, callback)=>{
  const SERVICES_SQL = `INSERT INTO ${constant.TABLE_BUSINESS_CATEGORIES} SET ?`;
  dbUtils.getDatabase().query(SERVICES_SQL, addUserObj, callback);
}

export const deleteUserBusinessCategories=(id,callback)=>{
    const SERVICES_SQL = `DELETE FROM ${constant.TABLE_BUSINESS_CATEGORIES} WHERE id=${id}`;
    dbUtils.getDatabase().query(SERVICES_SQL, callback);
  }
  
export const editUserBusinessCategories = (id, callback) => {
    const SERVICES_SQL = `SELECT * FROM ${constant.TABLE_BUSINESS_CATEGORIES} WHERE id='${id}'`
    dbUtils.getDatabase().query(SERVICES_SQL, callback);
  }
  
export const updateUserBusinessCategories=(id, update, callback)=>{
    const SERVICES_SQL = `UPDATE ${constant.TABLE_BUSINESS_CATEGORIES} SET? WHERE ID=${id}`
    dbUtils.getDatabase().query(SERVICES_SQL, update, callback);
  }