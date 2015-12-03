app.factory("watsonapi", function($http, $q,myConfig) {

    var Start = function(data)
    {
        var url = myConfig.url + "/api/Start";
        return $http.post(url, data).
            then(sendResponseData).
            catch(sendResponseError)
    }
    var Stop = function()
    {
        var url = myConfig.url + "/api/Stop";
        return $http.get(url).
            then(sendResponseData).
            catch(sendResponseError)
    }
    var IsConnected = function()
    {
        var url = myConfig.url + "/api/IsConnected";
        return $http.get(url).
            then(sendResponseData).
            catch(sendResponseError)
    }
    var GetSampleNumber = function()
    {
        var url = myConfig.url + "/api/GetSampleNumber";
        return $http.get(url).
            then(sendResponseData).
            catch(sendResponseError)
    }
    var GetTotalSampleNumber = function()
    {
        var url = myConfig.url + "/api/GetTotalSampleNumber";
        return $http.get(url).
            then(sendResponseData).
            catch(sendResponseError)
    }

    var IsWatsonAlive = function()
    {
        var url = myConfig.url + "/api/IsWatsonAlive";
        return $http.get(url).
            then(sendResponseData).
            catch(sendResponseError)
    }

    var IsRunning = function()
    {
        var url = myConfig.url + "/api/IsRunning";
        return $http.get(url).
            then(sendResponseData).
            catch(sendResponseError)
    }

    var SetEstimatorOnly = function(enable)
    {
        var url = myConfig.url + "/api/SetEstimatorOnly";
        return $http.post(url , enable).
            then(sendResponseData).
            catch(sendResponseError)
    }

    function sendResponseData(response)
    {
        //console.log(response);
        return response.data;
    }
    function sendResponseError(response)
    {
        //console.log("error from send " + response);
        return $q.reject("error from send " + response.status);
    }
    return{
        Start:Start,
        Stop:Stop,
        GetSampleNumber:GetSampleNumber,
        GetTotalSampleNumber:GetTotalSampleNumber,
        IsConnected:IsConnected,
        SetEstimatorOnly:SetEstimatorOnly,
        IsRunning:IsRunning,
        IsWatsonAlive:IsWatsonAlive
    };
});
