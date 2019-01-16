var app = angular.module( 'beplanet', [ //ту пишем названия библиотек
	'ui.router', 'ngCookies'
] );
app.config( routeConfig );
routeConfig.$inject = [ '$stateProvider', '$urlRouterProvider','$locationProvider']; //инджект модуль 
//1) создаем страницы с помощью стате для каждой страницы пишешь новый стате, с помощью стстае можно созд новые страницы 2) если не существует такой страницы то он кидает человека на гл страницу 3) 
function routeConfig( $stateProvider, $urlRouterProvider, $locationProvider ) {
	$locationProvider.html5Mode( true );
	$urlRouterProvider.otherwise( '/' );
	$stateProvider
	.state( 'home', {
		url: '/',
		templateUrl: '/views/home.html',
		controller: 'MainCtrl',
		controllerAs: 'be'
	} )
	.state( 'tours', {
		url: '/tours',
		templateUrl: '/views/tours.html',
		controller: 'ToursCtrl',
		controllerAs: 'be'
	} )
	.state( 'addhotTour', {
		url: '/addT',
		templateUrl: '/views/addT.html',
		controller: 'AddCtrl',
		controllerAs: 'be'
	} )
	.state( 'admPanel', { 
		url: '/adm',
		templateUrl: '/views/adm.html',
		controller: 'AdmCtrl',
		controllerAs: 'be'
	} )
		.state( 'EditColls', {
		url: '/edit',
		templateUrl: '/views/edit.html',
		controller: 'DelCtrl',
		controllerAs: 'be'
	} )
		.state( 'tour_info', {
		url: '/tour/:id',
		templateUrl: '/views/tourinfo.html',
		controller: 'TourCtrl',
		controllerAs: 'be'
	} )
		.state( 'addtFeed', {
		url: '/addF',
		templateUrl: '/views/addFead.html',
		controller: 'FeadCtrl',
		controllerAs: 'be'
	} );
}