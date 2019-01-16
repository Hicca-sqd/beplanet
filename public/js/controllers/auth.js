app.controller('AuthCtrl', AuthCtrl);

AuthCtrl.$inject = ['$http', '$scope', '$state', '$rootScope', '$cookies'];

function AuthCtrl($http, $scope, $state, $rootScope, $cookies){
	var hc = this;
	hc.authError = false;

	hc.login = function(){
		var data = {
			email: hc.email,
			name: hc.name,
			password: hc.password
		}

		$http.post('/api/auth', data)
		.success(function(response){
			$rootScope.session = $cookies.getObject('session');
			$state.go('home');
		})
		.error(function(err){
			hc.authError = true;
			console.log(err);
		});
	}

}