app.controller('TourCtrl', TourCtrl);

TourCtrl.$inject = ['$http', '$scope', '$state'];

function TourCtrl($http, $scope, $state){
	var be = this;
	be.objectToEdit = null;

	// $http.get('/api/tour/' + $state.params.id)
	// .success(function(response){
	// 	be.tour = response.tour;
	// 	console.log(be.tour);

	// })
	// .error(function(err){
	// 	console.log(err);
	// })


}

