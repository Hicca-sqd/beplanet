app.controller( 'HeaderCtrl', HeaderCtrl )
HeaderCtrl.$inject = [ '$http', '$cookies', '$state', '$rootScope' ]; //
function HeaderCtrl( $http, $cookies, $state, $rootScope ) {
	var hc = this;
	if ( $cookies.getObject( 'session' ) ) {
		$rootScope.session = $cookies.getObject( 'session' );
	}
	hc.logout = function() {
		$http.post( '/api/logout' )
			.success( function( response ) {
				$rootScope.session = undefined;
				$state.go( 'home' );
			} )
			.error( function( err ) {
				console.log( err );
			} )
	}

}