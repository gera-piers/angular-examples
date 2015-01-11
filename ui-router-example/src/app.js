/**
 * Created by jerry on 1/10/15.
 */

(function(){
  'use strict';

  angular.module('uiRouterExample', ['ui.router'])
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routerConfig($stateProvider, $urlRouterProvider){

    //Default option
    $urlRouterProvider.otherwise('/home');

    //Different states
    $stateProvider
      .state('home',
        {
          url: '/home',
          templateUrl: 'views/partial-home.html'
        })
        .state('home.list',//Nested
          {
            url: '/list',
            templateUrl: 'views/partial-home-list.html',
            controller: homeListController,
            controllerAs: 'vm'
          })
        .state('home.paragraph',//Nested
          {
            url:'/paragraph',
            template: 'I could sure use a drink right now.'
          })
      .state('about',
        {
          url: '/about',
          views: {
            '': {//main template (relatively named)
              templateUrl: 'views/partial-about.html'
            },
            'columnOne@about': {//column one (absolutely named)
              template: 'Look Im a Column'
            },
            'columnTwo@about': {//column two (absolutely named)
              templateUrl: 'views/table-data.html',
              controller: columnController,
              controllerAs: 'vm'
            }
          }
        });
  }

  //Functions
  function homeListController(){

    var vm = this;

    vm.dogs = ['Bernese', 'Husky', 'Neapolitan Mastiff'];

  }

  function columnController(){

    var vm = this;

    vm.message = 'test';
    vm.scotches = [
      {
        name: 'Macallan 12',
        price: 50
      },
      {
        name: 'Chivas Regal Royal Salute',
        price: 10000
      },
      {
        name: 'Glenfiddich 1937',
        price: 20000
      }
    ];
  }

})();
