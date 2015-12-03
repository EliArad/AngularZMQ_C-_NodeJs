var Watson = require('./watsonzmq');
var watson = new Watson.Watsonzmq(8989);
var fs = require('fs');
/////////////////////////////////////////////////  START ////////////////////////////////////////////////////////////
var startData = {
    calibrationDirectory:'c:/watsoncalibration',
    maxFilesToPack: 10000,
    maxPackedFilesInDirectory: 10000,
    DirectoryToStoreData: 'c:/mpfmtests',
    EstimatorEnabled: false,
    estimatorPythonCodePath:'',
    estimatorPKLFile:'',
    openPythonConsoleWindow:false,
    pythonConnectionTimeout:10000,
    KillPythonProcessWhenStarting:false,
    CreateDirectoriesBaseTimeForTests:true,
    scriptContent:''
}

//var scriptFileName  = 'C:/watsonScripts/22.71/script_estimator_one_port.txt';
//startData.scriptContent = fs.readFileSync(scriptFileName, 'utf8');

watson.Start(startData, function(err)
{
    if (err != 'ok')
        console.log(err);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
watson.Stop(function(err)
{
    console.log(err);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var r = watson.IsWatsonAlive();





