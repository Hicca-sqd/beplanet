const express = require( 'express' )
const multer = require( 'multer' ) 
const upload = multer( {
	dest: 'public/uploads/'
} )
const fs = require( 'fs' )
const path = require( 'path' )
const router = express.Router() 
const asyncMiddleware = require('../async')
const Tour = require( '../models/Tour' )


router.get( '/', ( req, res, next ) => {
	Tour.find().exec( ( err, tours ) => {
			if ( err ) return res.send( err );
			res.send({tours:tours})
			console.log(tours);
		} )
} )

router.post( '/', upload.single( 'file' ), ( req, res, next ) => {
	var tour = new Tour( {
		name: req.body.name,
		price: req.body.price,
	} )
	let tempPath = req.file.path;
	let targetPath = path.resolve(
		`public/uploads/${tour._id}.${req.file.originalname.split('.').pop()}` )
	fs.rename( tempPath, targetPath, ( err ) => {
		if ( err ) return res.send( err )
		tour.link = `/uploads/${tour._id}.${req.file.originalname.split('.').pop()}`
		tour.save( ( err, employer ) => {
			if ( err ) return res.send( err )
			res.send( tour )
		} )
	} )
} )

router.get( '/home/:page', ( req, res, next ) => {
	Tour.find()
		.skip((req.params.page - 1) * 5)
		.limit(5)
		.exec( ( err, posts ) => {
			if ( err ) return res.send( err );
			Tour.count().exec((err, count) => {
				if( err ) return res.send( err )
				res.send({ posts: posts, count: count })
			})
		} )
} )

router.get( '/:id', ( req, res, next ) => {
			Tour.findById( req.params.id )
				.exec( ( err, tour ) => {
			if ( err ) return res.send( err )
			res.send( {tour} )
			console.log('Mongo')
		} )
} )

module.exports = router 