'use strict';

module.exports =
  angular.module('blognodejs.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
