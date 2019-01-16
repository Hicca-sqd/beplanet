const express = require( 'express' )
const multer = require( 'multer' ) 
const upload = multer( {
	dest: 'public/uploads/'
} )
const fs = require( 'fs' )
const path = require( 'path' )
const router = express.Router() 
const Fead = require( '../models/Feadback' )

router.get( '/', ( req, res, next ) => {
	Fead.find().exec( ( err, feads ) => {
			if ( err ) return res.send( err );
			res.send(feads)
			console.log(feads);
		} )
} )


router.post( '/', upload.single( 'file' ), ( req, res, next ) => {
	var feadback = new Feadback( {
		name: req.body.name,
		country: req.body.country,
		pros: req.body.pros,
		cons: req.body.cons,
		comment: req.body.comm
	} )
	let tempPath = req.file.path;
	let targetPath = path.resolve(
		`public/uploads/${feadback._id}.${req.file.originalname.split('.').pop()}` )
	fs.rename( tempPath, targetPath, ( err ) => {
		if ( err ) return res.send( err )
		feadback.link = `/uploads/${feadback._id}.${req.file.originalname.split('.').pop()}`
		feadback.save( ( err, employer ) => {
			if ( err ) return res.send( err )
			res.send( feadback )
		} )
	} )
} )

module.exports = router 
