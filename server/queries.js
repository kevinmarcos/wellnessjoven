const db = require('./dbConfig.js');

function getUsers() {
    db.query('SELECT * FROM users', (err, rows) => {
        if(err){ console.log('Error: '+ err); }
        console.log(JSON.stringify(rows));
    });    
}

module.exports = {
    getUsers: getUsers
}
