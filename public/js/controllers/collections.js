app.controller( 'ToursCtrl', ToursCtrl )
ToursCtrl.$inject = [ '$http','$state', '$rootScope' ]; //
function ToursCtrl( $http,$state, $rootScope ) {
	var be = this;
	be.current_page = 1;
	be.pages = [];
	be.all_pages = [];
	be.count;
	be.all_pages_count;


	$http.get( '/api/tour/home/' + be.current_page )
		.success( function( response ) {
			be.posts = response.posts;
			be.count = response.count;
			be.all_pages_count = Math.ceil(be.count/5);
			be.all_pages = new Array(be.all_pages_count)
			for(var i = 0; i < be.all_pages.length; i++){
				be.all_pages[i] = i;
			}
			be.pages = be.all_pages.slice(0,5);
			console.log(be.all_pages)
		} )
		.error( function( err ) {
			console.log( err );
		} )

		be.nextPage = function () {
			if (be.current_page%5 == 0 && be.current_page < be.all_pages_count) {

				be.pages = be.all_pages.slice(be.current_page, be.current_page + 5);
				be.current_page ++;
				be.getPosts();

			} else if(be.current_page < be.all_pages_count){
					be.current_page ++;
					be.getPosts();
			}
		}
				be.prevPage = function () {
			if ((be.current_page - 1)%5 == 0 && be.current_page > 1) {
				be.current_page --;
				be.pages = be.all_pages.slice(be.current_page - 5, be.current_page);
				be.getPosts();

			} else if(be.current_page > 1){
					be.current_page --;
					be.getPosts();
			}
		}
		be.getPosts = function () {
			$http.get('/api/post/home/' + be.current_page)
				.success(function(response){
					be.posts = response.posts;
				})
				.error(function(err){
					console.log(err);
				})
		}
		be.setPage = function (page) {
			be.current_page = page;
			be.getPosts();
		}

}