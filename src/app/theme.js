 export function themeConfig($mdThemingProvider) {
   'ngInject';
   $mdThemingProvider.theme('default')
     .primaryPalette('cyan')
     .accentPalette('orange')
     .warnPalette('red');
 }
