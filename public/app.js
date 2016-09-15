var app = angular.module('plunker', ['siyfion.sfTypeahead']);

app.controller('MainCtrl', function($scope, $http) {
  $scope.vuln = {};
  $scope.vulnsList = [];
  $scope.selectedNumber = null;
  var url = 'http://localhost:3000/vulns';
  $http.get(url).then(function(res){
    $scope.vulnerabl = res.data;
  });
  
  // instantiate the bloodhound suggestion engine
  var numbers = new Bloodhound({
    datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.titulo); },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
            url: 'http://localhost:3000/vulns'
          }
    /*local: [
      { titulo: 'SQL Injection', descripcion: 'Te pueden joder la BD', solucion: 'Validar campos de entrada', referencias: 'owasp top 10 A1' },
      { titulo: 'XSS', descripcion: 'Ataques sobre el navegador cliente', solucion: 'Validar campos de entrada renderizadas', referencias: 'owasp top 10 A5' },
      { titulo: 'FTP undesclosed', descripcion: 'Login FTP comun', solucion: 'Modificar defaults', referencias: 'owasp top 10 A1 nist 32 sans 12' },
      { titulo: 'FTP undesclosed', descripcion: 'Login FTP comun', solucion: 'Modificar defaults', referencias: 'owasp top 10 A1 nist 32 sans 12' }
    ]*/
  });
   
  // initialize the bloodhound suggestion engine
  numbers.initialize();
  
  $scope.numbersDataset = {
    displayKey: 'titulo',
    source: numbers.ttAdapter()
  };
  
  $scope.addValue = function (value) {
    numbers.add(value);
    $scope.vuln = {};
  };

  $scope.addToList = function (value) {
    $scope.vulnsList.push(value);
    /*$http.post(url, value).
      then(function (res){
        $scope.postResult = res;
      }, function (err){
        $scope.error = err;
      });
    */
    $scope.selectedNumber = null;
  };
  /*
  $scope.setValue = function () {
    $scope.selectedNumber = { num: 'seven' };
  };
  
  $scope.clearValue = function () {
    $scope.selectedNumber = null;
  };
*/
  
  // Typeahead options object
  $scope.exampleOptions = {
    highlight: true
  };
  
  $scope.exampleOptionsNonEditable = {
    highlight: true,
    editable: false // the new feature
  };
  
});
