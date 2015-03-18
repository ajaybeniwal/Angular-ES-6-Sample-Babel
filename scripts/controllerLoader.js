import angular from 'angular';
import MainController from './mainController.js';
import MainService from './mainService.js';
let constModule='controllerModule';
angular.module(constModule,[])
    .controller('MainController', MainController)
    .factory('MainService',['$http',MainService]);
export default constModule;
