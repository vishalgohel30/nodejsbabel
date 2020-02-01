module.exports.serverDown = {
  code: 201,
  message: 'Server Down. Please try again later'
};

module.exports.nameNotString = {
  code: 101,
  message: 'Name should be a string'
};

module.exports.nameLengthExceeded = {
  code: 102,
  message: 'Name should not be greater than 70 characters'
};

module.exports.provideName = {
  code: 103,
  message: 'Provide name'
};

module.exports.invalidEmailType = {
  code: 104,
  message: 'Email-id should be a string'
};

module.exports.emailLengthExceeded = {
  code: 105,
  message: 'Email-id must be between 9 and 40 characters'
};

module.exports.invalidEmail = {
  code: 106,
  message: 'Invalid email-id entered. Check and try again!'
};

module.exports.provideEmail = {
  code: 107,
  message: 'Provide your Email-id',
};

module.exports.passwordNotString = {
  code: 108,
  message: 'Password should be a string'
};

module.exports.invalidPassword = {
  code: 109,
  message: 'Password must be between 1 and 16 characters'
};

module.exports.providePassword = {
  code: 110,
  message: 'Enter the password'
};

module.exports.genericError = {
  code: 111,
  message: 'Something went wrong. Please try again later'
};

module.exports.emailIdExist = {
  code: 112,
  message: 'Email Id already registered. Please use different one'
};

module.exports.userNotRegistered = {
  code: 113,
  message: 'You are not registered with us'
};

module.exports.incorrectPassword = {
  code: 114,
  message: 'Incorrect password'
};

module.exports.provideSessionToken = {
  code: 115,
  message: 'Provide session token'
};

module.exports.errorFetchingToken = {
  code: 116,
  message: 'Unable to fetch session details. Please try again'
};

module.exports.invalidSessionToken = {
  code: 117,
  message: 'Invalid session token / authentication details'
};

module.exports.incorrectMobileNo = {
  code: 118,
  message: 'Mobile number must be of string data type'
};

module.exports.mobileNumLengthExceeded = {
  code: 119,
  message: 'Mobile number must be of 10 digits'
};

module.exports.provideMobileNo = {
  code: 120,
  message: 'Provide Mobile number'
};

module.exports.unableToAddSameMobileNo = {
  code: 121,
  message: 'You cannot add same mobile number twice'
};

module.exports.emptyContactList = {
  code: 122,
  message: 'Contact list is empty'
};

module.exports.provideContactId = {
  code: 123,
  message: 'Provide Contact id'
};

module.exports.contactNotFound = {
  code: 124,
  message: 'Contact not found'
};
