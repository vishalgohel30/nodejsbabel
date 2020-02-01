const error = require('../constant/errorCodes');

module.exports.sqlError = function (err) {
  if (err.sqlMessage.includes('users_email_id_uindex')) {
    return error.emailIdExist;
  } else if (err.sqlMessage.includes('contacts_in')) {
    return error.unableToAddSameMobileNo;
  } else {
    return error.serverDown;
  }
};
