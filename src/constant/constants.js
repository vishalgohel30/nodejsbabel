exports.FULL_NAME_MAX_LENGTH = 70;
exports.EMAIL_MAX_LENGTH = 50;
exports.EMAIL_MIN_LENGTH = 9;
exports.PASSWORD_MIN_LENGTH = 1;
exports.PASSWORD_MAX_LENGTH = 16;
exports.MOBILE_NUMBER_LENGTH = 10;

exports.CONTACTS_LIST_UPPER_LIMIT = 20;
exports.CONTACTS_LIST_LOWER_LIMIT = 0;

exports.CONTACT_ENABLED = "Enabled";
exports.CONTACT_DISABLED = "Disabled";

/*******************************
 * Database Table constant
 ******************************/
// exports.TABLE_USERS = "users";
// exports.TABLE_SESSIONS = "sessions";
// // exports.TABLE_CONTACTS = "contacts";

// // table services
// exports.TABLE_SERVICES = "services";
// exports.TABLE_SESSIONS = "sessions";
// // exports.TABLE_CONTACTS = "contacts";

// // table contact
// exports.TABLE_CONTACTS = "contacts";

// exports.TABLE_BUSINESS_CATEGORIES = "business_categories";

// exports.TABLE_BUSINESS = "businesses"

export const constant  = {
    TABLE_USERS: "users",
    TABLE_SESSIONS: "sessions",
    TABLE_SERVICES: "services",
    TABLE_SESSIONS: "sessions",
    TABLE_CONTACTS: "contacts",
    TABLE_BUSINESS_CATEGORIES: "business_categories",
    TABLE_BUSINESS: "businesses",
}

exports.emailFilter = /^[a-zA-Z0-9](\.?[a-zA-Z0-9_-])*@[a-zA-Z0-9-]+\.([a-zA-Z]{1,6}\.)?[a-zA-Z]{2,6}$/;