const sql = require('mssql/msnodesqlv8');
const DBConfig = {
  server: 'DESKTOP-2297589\\SQLEXPRESS01',
  database: 'N8DB',
  //user: '',
  // password: '',
  options: {
    trustedConnection: true
  }
};
const SQLQuery = async (queryString, Medhod = "GET") => {
  console.log(queryString);
  return new Promise((resolve, reject) => {
    sql.connect(DBConfig, err => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        var sqlRequest = new sql.Request();
        sqlRequest.query(queryString, (errSQL, data) => {
          if (errSQL) {
            //console.error("Error executing query:", errSQL);
            reject(errSQL);
          } else {
            //console.log("Query executed successfully!");
            //console.log(data);
            resolve(data.recordset);
          }
        });
      }
    });
  });
};
module.exports = SQLQuery;