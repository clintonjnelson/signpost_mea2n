import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

export class UserForm {
  email:      string;
  password:   string;
  newAccount: boolean;
  termsCond:  boolean;
}



@Component({
  moduleId: module.id,
  selector: 'login-signup-form',
  templateUrl: 'login-signup-form.component.html',
  styleUrls:  ['login-signup-form.component.css']
})


export class LoginSignupFormComponent {
  @Output() close = new EventEmitter<any>();
  userForm: UserForm = {
    email:      '',
    password:   '',
    newAccount: false,
    termsCond:  false
  };

  constructor( private auth: AuthService) {}

  login(): boolean {
    console.log("LOGIN CLICKED");
    this.auth.login();
    // VALIDATE SUCCESS BEFORE CLOSING WHEN HTTP HOOKED UP
    this.close.emit(null);
    return false;
  }

  cancel(): boolean {
    console.log("CLOSE CLICKED!");
    this.close.emit(null);
    return false;
  }
}







///////////////////MAYBE MOVE THIS UP TO THE NAVBAR PARENT LEVEL TO CONTROL???
///////////////////OR MAKE THE OAUTH LINKS THEIR OWN TYPE OF COMPOENT???
// 'use strict';
// /*
//   Routes Covered:
//     - /oauth
//     - /login

//   This module covers two cases:
//   Oauth signin where a cookie is sent to /oauth and parsed out of the params
//   Basic signin, where the user creates a login through the website
// */
// module.exports = function (app) {
//     app.controller('sessionsController', [
//         'sessions',
//         '$scope',
//         '$http',
//         '$routeParams',
//         '$window',
//         function (sessions, $scope, $http, $routeParams, $window) {
//             var currPath = sessions.currPath();
//             //-------------------- LOGOUT ------------------
//             if (checkPath('/logout')) {
//                 sessions.resetSession(); // clear token, redirect greet
//                 $window.location.reload();
//                 sessions.redirect('/greet');
//             }
//             console.log("SHOULD NOT HIT THIS ON LOGOUT");
//             //-------------------- OAUTH ------------------
//             if (checkPath('/oauth') && $routeParams.token) {
//                 console.log("ITS TRYING OAUTH", $routeParams.token);
//                 sessions.setOauthSession(); // session+token+user => load/clear/redirect
//             }
//             else if (checkPath('/oauth')) {
//                 sessions.redirect('/greet');
//             }
//             //--------------------- BASIC AUTH ---------------------
//             // $scope & initial values
//             $scope.user = {};
//             $scope.user.newAccount = false;
//             $scope.user.termsCond = false;
//             // Functions
//             $scope.login = function () {
//                 if ($scope.user.newAccount) {
//                     if ($scope.user.termsCond) {
//                         $http.post('/users', $scope.user)
//                             .success(function (data) {
//                             sessions.setBasicSession(data); // sets: eat, user, http-eat-header
//                             console.log('User created.');
//                         })
//                             .error(function (err) {
//                             console.log('Error creating user.');
//                         });
//                     }
//                     else {
//                     }
//                 }
//                 else {
//                     sessions.login($scope.user, function (err, data) {
//                         if (err) {
//                             return console.log("ERROR LOGGING IN: ", err);
//                         }
//                         console.log("LOGGED IN.");
//                         sessions.redirect('/'); // redirects if not successful
//                     });
//                 }
//             };
//             function checkPath(path) {
//                 return (currPath === path ? true : false);
//             }
//         }
//     ]);
// };
