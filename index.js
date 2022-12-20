const express = require('express')
const mysql = require('mysql')
const app = express()

app.use(express.static('public'));

const connection =
   mysql.createConnection({
      host:'us-cdbr-east-06.cleardb.net',
      user:'bf14d42cd29744',
      password:'f0afa56f',
      database:'heroku_6f1cd1ab31fd623'
   });

var port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    connection.query(
      'SELECT * FROM all_subjects',
      (error, results) => {
        res.render('top.ejs',{subjects: results});
      }
    );
 });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))