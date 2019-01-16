app.controller('AddCtrl', AddCtrl);

AddCtrl.$inject = ['$http', '$scope', '$state', '$rootScope'];

function AddCtrl($http, $scope, $state, $rootScope){
	var be = this;
	be.AddError = false;

		be.savePost = function() {
		var data = new FormData();
		data.append( 'name', be.name );
		data.append( 'price', be.price );
		data.append( 'file', be.file );
		// console.log()
		$http.post( '/api/tour', data, {
				headers: {
					'Content-Type': undefined
				},
				transformRequest: angular.identity
			} )
			.success( function( response ) {
				console.log( response );
				
			} )
			.error( function( err ) {
				console.log( err );
			} )
	}

	be.deletePost = function( post ) {
		$http.delete( '/api/post/' + post._id )
			.success( function( response ) {
				var index = be.posts.findIndex( function( item ) {
					return item._id == post._id
				} );
				be.posts.splice( index, 1 );
			} )
			.error( function( err ) {
				console.log( err );
			} );
	}

}