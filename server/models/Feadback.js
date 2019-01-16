const mongoose = require( 'mongoose' )
const FeadSchema = mongoose.Schema( {
	name: String, 
	country: String,
	pros: String,
	cons: String,
	comment: String,
	date: {
		type: Date,
		default: Date.now
	}, 
	link: String,

} )
module.exports = mongoose.model( 'Fead', FeadSchema ) 