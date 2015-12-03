'use strict';


app.controller('MainController', ['$scope','$state','authToken','watsonapi',
               'appCookieStore','fileReader','$window','$base64',
    function($scope,$state,authToken,watsonapi,appCookieStore,fileReader,$window,$base64)
    {
        var vm = this;
        $scope.watsonTemperature = 0;
        vm.changesuccess = true;
        vm.lastError = '';

        vm.enableComponents = false;
        vm.data = appCookieStore.get('startdataforn');
        vm.scriptContent = appCookieStore.get('scriptContent');


        var socket = io.connect('http://localhost:1500');
        socket.on('connect', function(data) {
            console.log("connection IO ok");
            //socket.emit('join', 'Hello World from client');
        });

        socket.on('watsonnotify', function (data) {
            if (data.code == 700)
            {
                vm.startClass = false;
            } else
            if (data.code == 3030)
            {
                vm.startClass = true;
            } else
            if (data.code == 2000)
            {
                $scope.watsonTemperature = data.Msg;
                $scope.$digest()
            } else {
                console.log(data.Msg);
                vm.response = data.Msg;
                $scope.$digest()
            }
        });

        socket.on('disconnect', function () {
            vm.enableComponents = false;
        });

        $scope.fileNameChanged1 = function() {

            var fileInputElement = document.getElementById("fileInputElementfirst");
            $scope.uploadFile1(fileInputElement.files[0]);
        }

        $scope.uploadFile1 = function (fileName, index) {


            $scope.progress = 0;
            console.log(fileName);
            fileReader.readAsDataUrl(fileName, $scope)
                .then(function(result) {
                    var str = result.slice(23);
                    vm.scriptContent = atob(str);
                    appCookieStore.set('scriptContent' , vm.scriptContent);
                });
        };

        watsonapi.IsConnected().then(function (response){
            vm.enableComponents = true;
        });

        vm.Start = function()
        {
            vm.data.scriptContent = vm.scriptContent
            watsonapi.Start(vm.data).then(function (response){

                vm.lastError = '';
                vm.changesuccess = false;

                appCookieStore.set('startdataforn', vm.data);
                console.log(response);
                if (response != 'ok')
                {
                    vm.lastError = response;
                    vm.changesuccess = true;
                }
            }).catch(function (response){
                vm.lastError = response;
                vm.changesuccess = true;
            });
        }

        vm.Stop = function()
        {
            watsonapi.Stop().then(function (response){

                if (response != 'ok')
                {
                    vm.lastError = response;
                    vm.changesuccess = true;
                }
            }).catch(function (response){
                vm.lastError = response;
                vm.changesuccess = true;
            });
        }
    }

  ]);
