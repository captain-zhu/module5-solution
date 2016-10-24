/**
 * Created by zhuyongxuan1 on 2016/10/24.
 */
(function () {
  "use strict";

  angular.module('common')
    .service('AuthService', AuthService);


  AuthService.$inject = [];
  function AuthService() {
    var service = this;
    service.user = undefined;

    service.save = function (user) {
      service.user = user;
    };

    service.getUser = function () {
      return service.user;
    }

  }



})();