angular
  .module('myApp',[])
  .controller('myController',myController)
;

function myController(){
  var vm=this;
  vm.convertArray = convertArray;

  function convertArray(value){
    vm.result=value.toUpperCase();
  }


}
