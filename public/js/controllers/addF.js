app.controller('FeadCtrl', FeadCtrl);

FeadCtrl.$inject = ['$http', '$scope', '$state', '$rootScope'];

function FeadCtrl($http, $scope, $state, $rootScope){
	var be = this;
	be.AddError = false;

		be.saveFead = function() {
		var data = new FormData();
		data.append( 'name', be.name );
		data.append( 'country', be.country );
		data.append( 'pros', be.pros );
		data.append( 'cons', be.cons );
		data.append( 'comment', be.comm );
		data.append( 'file', be.file );

		$http.post( '/api/feedbacks', data, {
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

}