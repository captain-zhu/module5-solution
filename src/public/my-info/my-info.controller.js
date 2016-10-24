/**
 * Created by zhuyongxuan1 on 2016/10/24.
 */
(function () {
  "use strict";

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['user'];
  function MyInfoController(user) {
    var $ctrl = this;
    $ctrl.user = user;
  }


})();