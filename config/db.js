const mysql = require('mysql2')

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    database:"ads_3",
    password:"NSS302@ss",
});
// let sql = "SELECT * FROM takes;"
// pool.execute(sql, function(err, result){
//     if(err) throw err;

//     console.log(result)
// })

module.exports = pool.promise();