const mysql = require('mysql');

const con = mysql.createConnection({
	host: '89.33.44.76',
	user: 'r50224es_smart',
	password: '@smart13211989'
	database: 'r50224es_smartengineering'
}, (err) => {
	if(err){
		throw new Error('Unable to connect to database');
	} else {
		console.log("Database connection successfull");
	}
});

module.exports.insert = function (boxid, pres, hum, temp, aqi, callback) {
	con.query('INSERT INTO smartdata2 VALUES (?, ?, ?, ?, ?)', [boid, pres, hum, temp, aqi], callback)
	};