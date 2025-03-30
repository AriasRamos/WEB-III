// app.js
const mysql2 = require('mysql2');

// Create a connection to the database
const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testdb'
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database!');
  
  // Example query
  connection.query('SELECT * FROM users', (err, results, fields) => {
    if (err) throw err;
    console.log(results);
  });

  // Close the connection
  connection.end();
});

