module.exports = ['$animate', function($animate) {
  return {
    scope: true,
    restrict: 'AE',
    replace: 'true',
    templateUrl: 'template/header',
    link: function(scope, elem, attrs) {
      console.log('FROM HEADER LINK');
    }
  }
}]
