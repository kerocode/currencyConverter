export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    }, {
      url: '/rate',
      templateUrl: 'app/components/rate/rate.html',
      controller: 'RateController',
      controllerAs: 'rate'
    })
    .state('rate', {
      url: '/rate',
      templateUrl: 'app/components/rate/rate.html',
      controller: 'RateController',
      controllerAs: 'rate'
    });

  $urlRouterProvider.otherwise('/');
}
