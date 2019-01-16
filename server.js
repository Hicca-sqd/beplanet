const express = require( 'express' ) //запрашиваем экс джс
const bodyParser = require( 'body-parser' )
const morgan = require( 'morgan' )
const cookieParser = require( 'cookie-parser' )
const mongoose = require( 'mongoose' )
const path = require( 'path' ) //библиотека для того чтобы выявлять абсоляютный пусть
const session = require( 'express-session' )
const MongoStore = require( 'connect-mongo' )( session )
mongoose.connect( 'mongodb://localhost/newbeplanet' ,{ useNewUrlParser: true }) //подключенение к монгоду и задаем название 
const app = express() //создаем приложение
app.use( express.static( path.join( __dirname, 'public' ) ) ) //ап из это использование статитчная папка будет папка publicм все что с фронтом
app.use( bodyParser.urlencoded( {
	extended: true
} ) ) // когда мы берем урленкодер помогает читать всё что в адресной строке  
app.use( bodyParser.json( {
	limit: '5mb'
} ) ) // могу брат данные которые идут с фронта в виде джисона и лимит в 1мб
app.use( cookieParser() ) // подкляюил парсер
app.use( morgan( 'dev' ) ) // подключил морган это логирование
app.use( session( {
	resave: true,
	secret: 'secret',
	saveUninitialized: true,
	key: 'key',
	store: new MongoStore( {
		mongooseConnection: mongoose.connection
	} ) //что мы используем бд
} ) );
app.use( '/api', require( './server/routes' ) ) //когда запрос на апи  то подключаются роутес индекст,джс
app.get( '/', ( req, res, next ) => { //создаем гет запрос
	res.send( 'Home page' )
} )
app.get( '*', ( req, res, next ) => {
	res.redirect( '/#' + req.originalUrl );
} )
app.listen( 3047, () => { //забираем 300 порт
	console.log( 'Server started' )
} )