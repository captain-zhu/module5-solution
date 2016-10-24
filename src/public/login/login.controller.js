/**
 * Created by zhuyongxuan1 on 2016/10/24.
 */
(function () {
  "use strict";

  angular.module('public')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$http', 'urlEndPoint', 'AuthService', '$state'];
  function LoginController($http, urlEndPoint, AuthService, $state) {
    var $ctrl = this;
    $ctrl.user = {};
    $ctrl.showError = false;
    $ctrl.doLogin = function () {
      console.log("login");
      $http.get(urlEndPoint + 'menu_items/' + $ctrl.user.favoriteShortName + '.json')
        .then(
          function (response) {
            $ctrl.showError = false;
            $ctrl.user.favorite = response.data;
            AuthService.save($ctrl.user);
            console.log('login success');
            $state.go('public.home');
          }
        ).catch(
        function (error) {
          $ctrl.showError = true;
        }
      );
    }
  }


})();