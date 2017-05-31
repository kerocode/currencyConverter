/* global malarkey:false, moment:false */

import {
  config
} from './index.config';
import {
  routerConfig
} from './index.route';
import {
  runBlock
} from './index.run';
import {
  themeConfig
} from './theme';
import {
  MainController
} from './main/main.controller';
import {
  RateController
} from '../app/components/rate/rate.controller';
import {
  GithubContributorService
} from '../app/components/githubContributor/githubContributor.service';
import {
  WebDevTecService
} from '../app/components/webDevTec/webDevTec.service';
import {
  NavbarDirective
} from '../app/components/navbar/navbar.directive';
import {
  MalarkeyDirective
} from '../app/components/malarkey/malarkey.directive';

angular.module('angularjs', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ngMaterial', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .config(themeConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('RateController', RateController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
