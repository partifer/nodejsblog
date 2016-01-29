'use strict';

module.exports =
  angular
    .module('blognodejs.profile', [
      //load your foo submodules here, e.g.:
      //require('./bar').name
    ])
    .config(function ($stateProvider) {
      $stateProvider
        .state('app.profile', {
          url: '/my',
          abstract: true
        })
        .state('app.profile.edit', {
          url: '/profile',
          views: {
            'container@': {
              templateUrl: 'app/profile/edit.html'
            }
          }
        })
        .state('app.profile.article', {
          url: '/article',
          views: {
            'container@': {
              templateUrl: 'app/profile/layout.html'
            }
          }
        })
        .state('app.profile.article.list', {
          url: '/list',
          views: {
            'left-column@app.profile.article': {
              templateUrl: 'app/profile/list.html'
            }
          }
        })
        .state('app.profile.article.add', {
          url: '/add',
          views: {
            'left-column@app.profile.article': {
              templateUrl: 'app/profile/add.html'
            }
          }
        })
        .state('app.profile.article.edit', {
          url: '/edit',
          views: {
            'left-column@app.profile.article': {
              templateUrl: 'app/profile/edit.html'
            }
          }
        })
        .state('app.profile.article.delete', {
          url: '/delete',
          views: {
            'left-column@app.profile.article': {
              templateUrl: 'app/profile/delete.html'
            }
          }
        });
    })
;
