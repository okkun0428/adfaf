const express = require('express')
const mysql = require('mysql')
const app = express()

app.use(express.static('public'));

const db_config = {
   host: 'us-cdbr-east-06.cleardb.net',
   user: 'bf14d42cd29744',
   password: 'f0afa56f',
   database: 'heroku_6f1cd1ab31fd623'
};

const pool = mysql.createPool(db_config);

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
   pool.getConnection(function(err, connection){
       connection.query('SELECT * FROM all_subjects', function(err,results){
       res.render('top.ejs',{subjects: results});
       connection.release();
       });
   });
});

app.listen(app.get('port'), function() {
   console.log('heroku-mysql app is running on port', app.get('port'));
 });