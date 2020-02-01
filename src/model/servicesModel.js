import { constant } from '../constant/constants'

const dbUtils = require('../utils/dbUtils');

export const selectUserServices = (callback) => {
    const SERVICES_SQL = `SELECT * FROM ${constant.TABLE_SERVICES}`;
    dbUtils.getDatabase().query(SERVICES_SQL, callback);
}

export const insertUserServices = (addUserObj, callback) => {
    const SERVICES_SQL = `INSERT INTO ${constant.TABLE_SERVICES} SET ?`;
    dbUtils.getDatabase().query(SERVICES_SQL, addUserObj, callback);
}

export const deleteUserServices = (id, callback) => {
    const SERVICES_SQL = `DELETE FROM ${constant.TABLE_SERVICES} WHERE id='${id}'`;
    dbUtils.getDatabase().query(SERVICES_SQL, callback);
}

export const editUserServices = (id, callback) => {
    const SERVICES_SQL = `SELECT * FROM ${constant.TABLE_SERVICES} WHERE id='${id}'`;
    dbUtils.getDatabase().query(SERVICES_SQL, callback);
}

export const updateUserServices = (update, id, callback) => {
    const SERVICES_SQL = `UPDATE ${constant.TABLE_SERVICES} SET ? WHERE id='${id}'`;
    dbUtils.getDatabase().query(SERVICES_SQL, update, callback);
}