app.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$http', '$scope', '$state', '$rootScope','$cookies' ];

function MainCtrl($http, $scope, $state, $rootScope,$cookies ){
	var be = this;

	$http.get( '/api/tour/' )
		.success( function( response ) {
			be.tours = response.tours;
			console.log(response);

		} )
		.error( function( err ) {
			console.log( err );
		} )

		// $http.get( '/api/feadbacks/' )
		// .success( function( response ) {
		// 	be.feads = response.feads;
		// 	console.log(response.feads);

		// } )
		// .error( function( err ) {
		// 	console.log( err );
		// } )

	be.bot = function() {
		var data = {
			city: be.depart,
			come: be.come,
			date: be.date,
			wise: be.wise,
			phone: be.phone

		}
		$http.post( '/api/bot', data )
			.success( function( response ) {
				console.log( "lol" );

			} )
			.error( function( err ) {
				console.log( err );
			} )
	}

		be.tour = function() {
		var data = {
			name: be.pername,
			phone: be.phone

		}
		$http.post( '/api/bot/tour', data )
			.success( function( response ) {

			} )
			.error( function( err ) {
				console.log( err );
			} )
	}

			be.visa = function() {
		var data = {
			country: be.country,
			name: be.visaname,
			phone: be.phone
		}
		console.log(data);
		$http.post( '/api/bot/visa', data )
			.success( function( response ) {

			} )
			.error( function( err ) {
				console.log( err );
			} )
	}

			be.about = function() {
		var data = {
			name: be.about_name,
			phone: be.about_phone
		}
		console.log(data);
		$http.post( '/api/bot/about', data )
			.success( function( response ) {

			} )
			.error( function( err ) {
				console.log( err );
			} )
	}

	var modal = document.getElementById( 'modal' );
	var modal_tours = document.getElementById( 'modal--tours' );
	var modal__visa = document.getElementById( 'modal--visa' );



	var isShowModal = false;

be.toggleModal = function () {
	if ( isShowModal ) {
		modal.style.display = 'none';
	} else {
		modal.style.display = 'flex';
	}
	isShowModal = !isShowModal;
}

be.toggleTour = function () {
	if ( isShowModal ) {
		modal_tours.style.display = 'none';
	} else {
		modal_tours.style.display = 'flex';
	}
	isShowModal = !isShowModal;
	}

	be.toggleVisa = function () {
	if ( isShowModal ) {
		modal__visa.style.display = 'none';
	} else {
		modal__visa.style.display = 'flex';
	}
	isShowModal = !isShowModal;
	}
}

