import {constant} from '../constant/constants'
const dbUtils = require('../utils/dbUtils');

export const selectUserBusiness = function (callback) {
    console.log(new Date().toISOString() + " servicesModel: services sql in ++");
    const SERVICES_SQL = `SELECT * FROM ${constant.TABLE_BUSINESS}`;
    dbUtils.getDatabase().query(SERVICES_SQL, callback);
    console.log(new Date().toISOString() + " servicesModel: services sql exit --");
}

export const addUserBusiness=(addUserObj, callback)=>{
  console.log(new Date().toISOString() + " servicesModel: addContact ++");
  const SERVICES_SQL = `INSERT INTO ${constant.TABLE_BUSINESS} SET ?`;
  console.log(SERVICES_SQL)
  dbUtils.getDatabase().query(SERVICES_SQL, addUserObj, callback);
  console.log(new Date().toISOString() + " servicesModel: addContact --");
}

export const deleteUserBusiness=(id,callback)=>{
    console.log(new Date().toISOString() + " servicesModel: services sql in ++");
    const SERVICES_SQL = `DELETE FROM ${constant.TABLE_BUSINESS} WHERE id=${id}`;
    dbUtils.getDatabase().query(SERVICES_SQL, callback);
    console.log(new Date().toISOString() + " servicesModel: services sql exit --");
  }
  
export const editUserBusiness = (id, callback) => {
    console.log(new Date().toISOString() + " servicesModel: services sql in ++");
    const SERVICES_SQL = `SELECT * FROM ${constant.TABLE_BUSINESS} WHERE id='${id}'`
    dbUtils.getDatabase().query(SERVICES_SQL, callback);
    console.log(new Date().toISOString() + " servicesModel: services sql exit --");
  }
  
export const updateUserBusiness=(id, update, callback)=>{
    console.log(new Date().toISOString() + " servicesModel: services sql in ++");
    const SERVICES_SQL = `UPDATE ${constant.TABLE_BUSINESS} SET? WHERE ID=${id}`
    dbUtils.getDatabase().query(SERVICES_SQL, update, callback);
    console.log(new Date().toISOString() + " servicesModel: services sql exit --");
  }