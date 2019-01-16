const express = require('express');
const mongoose = require('mongoose');
const router = express.Router() //все

const TelegramBot = require('node-telegram-bot-api');
const token = '678401119:AAGZfufvYOKXygexG0Cqy6w5d07VE3rPOjQ';
const bot = new TelegramBot(token, {polling: true});
const chatId = "-318965165";
var test = "AAA";
// const User = require("../models/User");

// mongoose.connect('mongodb://localhost/tgbot',{ useNewUrlParser: true })

// app.set('port', 2000 || process.env.PORT); //2 порт среды разработки

//497209805:AAF4ndbgqCbE0Zo3ZcFfkJMsSBQAsWJLU40

// var server = app.listen(app.get('port'), (err)=>{

// 	console.log('Server started' +' '+ app.get('port'));
// });
router.post( '/', ( req, res, next ) => {
var arr = {
		city: req.body.city,
		come: req.body.come,
		date: req.body.date,
		wise: req.body.wise,
		phone: req.body.phone,
		};

var msg = 'Заявка на авиа ' + '\n' 
		+ 'Отправка: ' + arr.city + '\n' 
		+ 'Прибытие в: ' + arr.come + '\n' 
		+ 'Дата вылета: ' + arr.date + '\n' 
		+ 'Туда/обратно: ' + arr.wise + '\n' 
		+ 'Телефон: ' + arr.phone ;

		bot.sendMessage(chatId,msg);
} )

router.post( '/tour', ( req, res, next ) => {
var arr = {
		name: req.body.pername,
		phone: req.body.phone,
		};

var msg = 'Этот человек: ' + arr.name + '\n' 
		+ 'C номером: ' + arr.phone + '\n'
		+ 'Интересуется туром';


		bot.sendMessage(chatId,msg);
} )

router.post( '/visa', ( req, res, next ) => {
var arr = {
		country: req.body.country,
		name: req.body.name,
		phone: req.body.phone
		};
console.log(arr);
var msg = 'Этот человек: ' + arr.name + '\n' 
		+ 'C номером: ' + arr.phone + '\n'
		+ 'Хочет получить визу в: ' + arr.country;


		bot.sendMessage(chatId,msg);
} )

router.post( '/about', ( req, res, next ) => {
var arr = {
		name: req.body.name,
		phone: req.body.phone
		};
console.log(arr);
var msg = 'Этот человек: ' + arr.name + '\n' 
		+ 'C номером: ' + arr.phone + '\n'
		+ 'Оставил заявку на обратный звонок'


		bot.sendMessage(chatId,msg);
} )

module.exports = router
