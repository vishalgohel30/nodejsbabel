import {constant} from '../constant/constants'
const dbUtils = require('../utils/dbUtils');


module.exports.findSessionByEmailId = function (emailId, callback) {
  console.log(new Date().toISOString() + " sessionModel: findSessionByEmailId ++");
  const SELECT_SESSION_DETAILS_SQL = `SELECT * FROM ${constant.TABLE_SESSIONS} WHERE email_id='${emailId}'`;
  dbUtils.getDatabase().query(SELECT_SESSION_DETAILS_SQL, callback);
  console.log(new Date().toISOString() + " sessionModel: findSessionByEmailId --");
};

module.exports.createSession = function (userSessionObj, callback) {
  console.log(new Date().toISOString() + " sessionModel: createSession ++");
  const SELECT_SESSION_DETAILS_SQL = `INSERT INTO ${constant.TABLE_SESSIONS} SET ?`;
  dbUtils.getDatabase().query(SELECT_SESSION_DETAILS_SQL, userSessionObj, callback);
  console.log(new Date().toISOString() + " sessionModel: createSession --");
};

module.exports.updateSessionByEmailId = function (emailId, sessionDetails, callback) {
  console.log(new Date().toISOString() + " sessionModel: updateSessionByEmailId ++");
  const UPDATE_SESSION_DETAILS_SQL = `UPDATE ${constant.TABLE_SESSIONS} SET ? WHERE email_id='${emailId}'`;
  dbUtils.getDatabase().query(UPDATE_SESSION_DETAILS_SQL, sessionDetails, callback);
  console.log(new Date().toISOString() + " sessionModel: updateSessionByEmailId --");
};

module.exports.findSessionBySessionToken = function (sessionToken, callback) {
  console.log(new Date().toISOString() + " sessionModel: findSessionBySessionToken ++");
  const SELECT_SESSION_DETAILS_SQL = `SELECT * FROM ${constant.TABLE_SESSIONS} WHERE session_token='${sessionToken}'`;
  dbUtils.getDatabase().query(SELECT_SESSION_DETAILS_SQL, callback);
  console.log(new Date().toISOString() + " sessionModel: findSessionBySessionToken --");
};

module.exports.updateSessionBySessionToken = function (sessionToken, userId, sessionDetails, callback) {
  console.log(new Date().toISOString() + " sessionModel: updateSessionBySessionToken ++");
  const UPDATE_SESSION_DETAILS_SQL = `UPDATE ${constant.TABLE_SESSIONS} SET ? WHERE session_token='${sessionToken}' AND user_id='${userId}'`;
  dbUtils.getDatabase().query(UPDATE_SESSION_DETAILS_SQL, sessionDetails, callback);
  console.log(new Date().toISOString() + " sessionModel: updateSessionBySessionToken --");
};

module.exports.logoutBySessionToken = function (sessionToken, callback) {
  console.log(new Date().toISOString() + " sessionModel: logoutBySessionToken ++");
  const DELETE_SESSION_DETAILS_SQL = `DELETE FROM ${constant.TABLE_SESSIONS} WHERE session_token='${sessionToken}'`;
  dbUtils.getDatabase().query(DELETE_SESSION_DETAILS_SQL, callback);
  console.log(new Date().toISOString() + " sessionModel: logoutBySessionToken --");
};
