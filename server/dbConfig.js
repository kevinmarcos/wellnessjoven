const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '34.122.235.207',
    user: 'ingresarbd',
    password: "'ZbfCA_B=5<9ypqX",
    database: 'tap2023',
});

connection.connect((err) => {
    if (err) {
        return JSON.stringify({error: err});
    }else{
        console.log('Connected!');
    }
});

module.exports = connection;