var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root1234",
    database : 'startwelldb',
    insecureAuth : true
  });
  



module.exports = {
    conn
}
    