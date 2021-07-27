var express = require('express')
var bodyParser = require('body-parser');
var app = express()
var mysql = require('mysql');
var db = require('./data');
const cookieParser = require('cookie-parser');
var ejs = require('ejs');

var db_conn = {
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.database
};

var conn = mysql.createConnection(db_conn);
conn.connect();

app.set("view engine", "ejs");
app.set("views", "./");
app.use(express.static('image'));
app.use(express.static('js'));
app.use(express.static('css'));
app.use(express.static('cookie'));
app.use(express.static('information'));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(request, response) {
    response.render('main');
});

app.post('/', function(request, response){

});
 
app.get('/index', function(request, response) { 
    response.render('index');
});
 
app.listen(80, function() {
});