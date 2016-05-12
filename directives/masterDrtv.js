module.exports = ['$animate', function($animate) {
  return {
    scope: true,
    restrict: 'AE',
    replace: 'true',
    controller: 'masterCtrl',
    link: function(scope, elem, attrs) {
      console.log("FROM MASTER LINK");
    }
  }
}]
