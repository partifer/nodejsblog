'use strict';

module.exports =
  angular.module('blognodejs.app', [
           //load your foo submodules here, e.g.:
           //require('./bar').name
         ])
         .config(function ($stateProvider) {
           $stateProvider
             .state('app', {
               url: '',
               views: {
                 'navbar@': {
                   templateUrl: 'app/app/navbar.html'
                 },
                 'container@': {
                   templateUrl: 'app/app/container.html'
                 },
                 'footer@': {
                   templateUrl: 'app/app/footer.html'
                 }
               }
             });
         })
         .controller('blogController', require('./blogController'))
;
