import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'search-box',
  templateUrl: 'search-box.component.html',
  styleUrls:  ['search-box.component.css']
})

export class SearchBoxComponent {
  searchStr: string;
  foundUsers: string[];     // users found by search
  foundSigns: string[];     // signs found by search

  searchUsers() {
    console.log("SEARCH USERS TRIGGERED");
    //         console.log("SEARCHING CLICKED!");
    //         console.log("Search string is: ", $scope.searchStr);

    //         databaseSearch($scope.searchStr);

    //       function databaseSearch(queryStr) {
    //         $http.get('/search', {params: {'searchStr': queryStr} })
    //           .success(function(data) {
    //             console.log("SUCCESSFUL SEARCH. DATA IS: ", data);
    //             $scope.users = data.users;
    //             $scope.signs = data.signs;
    //           })
    //           .error(function(err) {
    //             // TODO: SHOW ERROR MSG TO USER
    //             console.log("Error searching.");
    //           });
    //       }
  }
}


// 'use strict';

// module.exports = function(app) {

//   app.controller('searchController', [
//     '$scope',
//     '$routeParams',
//     '$http',
//     function($scope, $routeParams, $http) {

//       console.log("ROUTE PARAMS IS: ", $routeParams);

// ************ AFTER CLICKING SEARCH, THERE WILL BE SEARCH PARAMS IN THE ROUTE
// ************ IF THEY EXIST, THIS MEANS WE NEED TO GRAB THOSE RESULTS & DISPLAY

//       var init = function() {
//         var paramsQuery = $routeParams.searchStr;
//         if(paramsQuery) {
//           databaseSearch(paramsQuery);
//         }
//       };
//       init();

//       $scope.searchStr = '';
//       $scope.users     = [];    // found users
//       $scope.signs     = [];    // found signs


//       $scope.searchUsers = function() {
//         console.log("SEARCHING CLICKED!");
//         console.log("Search string is: ", $scope.searchStr);

//         databaseSearch($scope.searchStr);
//       };

//       function databaseSearch(queryStr) {
//         $http.get('/search', {params: {'searchStr': queryStr} })
//           .success(function(data) {
//             console.log("SUCCESSFUL SEARCH. DATA IS: ", data);
//             $scope.users = data.users;
//             $scope.signs = data.signs;
//           })
//           .error(function(err) {
//             // TODO: SHOW ERROR MSG TO USER
//             console.log("Error searching.");
//           });
//       }
//     }
//   ]);
// };
