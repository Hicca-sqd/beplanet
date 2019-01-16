app.controller('DelCtrl', DelCtrl);

DelCtrl.$inject = ['$http', '$scope', '$state', '$rootScope','$cookies' ];

function DelCtrl($http, $scope, $state, $rootScope,$cookies ){
	var hc = this;
		$http.get( '/api/post/home/' + hc.current_page )
		.success( function( response ) {
			hc.posts = response.posts;
		} )
		.error( function( err ) {
			console.log( err );
		} )

		hc.deletePost = function( post ) {
		$http.delete( '/api/post/' + post._id )
			.success( function( response ) {
				var index = hc.posts.findIndex( function( item ) {
					return item._id == post._id
				} );
				hc.posts.splice( index, 1 );
			} )
			.error( function( err ) {
				console.log( err );
			} );
	}
	hc.makeEditable = function( post ) {
		hc.objectToEdit = post;
	}
	hc.closeModal = function() {
		hc.objectToEdit = null;
	}
	hc.editPost = function() {
		$http.put( '/api/post', hc.objectToEdit )
			.success( function( response ) {
				console.log( response );
				hc.closeModal();
			} )
			.error( function( error ) {
				console.log( error );
			} );
	}
}