'use strict';

module.exports =
  angular.module('blognodejs.anon', [
           //load your foo submodules here, e.g.:
           //require('./bar').name
         ])
         .config(function ($stateProvider) {
           $stateProvider
             .state('app.anon', {
               url: '',
               abstract: true
             })
             .state('app.anon.login', {
               url: '/login',
               views: {
                 'container@': {
                   templateUrl: 'app/anon/login.html'
                 }
               }
             })
             .state('app.anon.register', {
             url: '/register',
             views: {
               'container@': {
                 templateUrl: 'app/anon/register.html'
               }
             }
           })
           ;
         })
;
