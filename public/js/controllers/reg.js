app.controller('RegCtrl', RegCtrl);

RegCtrl.$inject = ['$http', '$scope', '$state', '$rootScope'];

function RegCtrl($http, $scope, $state, $rootScope){
	var hc = this;

	hc.register = function(){
		var data = {
			name: hc.name,
			email: hc.email,
			password: hc.password
		}

		$http.post('/api/signup', data)
		.success(function(response){
			$state.go('auth');
			console.log(response)
		})
		.error(function(err){
			console.log(err);
		});
	}

}