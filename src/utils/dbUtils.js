import mysql from 'mysql';
let connectionGlobal;

// initAndConnectDb
export const initAndConnectDb = function (callback) {
  console.log(new Date().toISOString() + " dbUtils: initAndConnectDb ++");
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Vishal@123',
    database: 'luhar_jagat'
  });
  connection.connect((err) => {
    if (err) {
      return callback(err);
    } else {
      console.log(new Date().toISOString(), "mysql db initialized");
      connectionGlobal = connection;
      return callback(null);
    }
  });
  console.log(new Date().toISOString() + " dbUtils: initAndConnectDb --");
  return connection;
};

// getDatabase
export const getDatabase = () => (connectionGlobal);
