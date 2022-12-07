const express = require('express')
const mysql = require('mysql')
const app = express()

const connection =
   mysql.createConnection({
      host:'us-cdbr-east-06.cleardb.net',
      user:'bf14d42cd29744',
      password:'f0afa56f',
      database:'heroku_6f1cd1ab31fd623'
   });

var port = process.env.PORT || 5000;

app.get('/',(req, res)=>{
    connection.query('SELECT * FROM test',(error,results)=>{
        res.send('hello'+results[0].name+':'+results[0].text);
          console.log(results)
          console.log(results[0])
          console.log(results[0].name)
          console.log(results[0].text)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))