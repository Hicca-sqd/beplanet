//моделька поста
const mongoose = require( 'mongoose' )
const TourSchema = mongoose.Schema( { //чтобы создать модель надо записать что там будет хсема с помощью монгуса
	name: String, //свойство - тип
	price: String,
	date: {
		type: Date,
		default: Date.now
	}, 
	link: String,
	// 	comments: [
	// 	{
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: 'Comment'
	// 	}
	// ]
} )
module.exports = mongoose.model( 'Tour', TourSchema ) //создание таблицы в базе пост сверху описание структуры как элемента