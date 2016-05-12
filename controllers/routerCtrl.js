module.exports = function( $routeProvider, $locationProvider  ) {
  $routeProvider
    .when("/", {
      templateUrl: 'pages/home'
    })
    .otherwise({
      redirectTo:"/"
    });
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: true
    });
     //.hashPrefix('!');
};
