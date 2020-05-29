const express = require('express');
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('connected')
});

const mysql = require('mysql');

// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
});

con.connect((err) => {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

con.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
});



con.query('SELECT * FROM burger', (err, rows) => {
    if (err) throw err;

    console.log('Data received from Db:');
    console.log(rows);
});

rows.forEach((row) => {
    console.log(`${row.name} lives in ${row.burger}`);
});

addEventListener(('click') con.query(
        'DELETE FROM burgers WHERE id = ?', [5], (err, result) => {
            if (err) throw err;

            console.log(`Deleted ${result.affectedRows} row(s)`);
        }
    );


);