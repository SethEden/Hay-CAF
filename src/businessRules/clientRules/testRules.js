/**
 * @file testRules.js
 * @module testRules
 * @description Contains all client defined business rules for the hay-CAF application.
 * @requires module:application.constants
 * @requires module:application.message.constants
 * @requires module:application.system.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/03/30
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as apc from '../../constants/application.constants.js';
import * as app_msg from '../../constants/application.message.constants.js';
import * as app_sys from '../../constants/application.system.constants.js';
import * as app_cfg from '../../constants/application.configuration.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';
import process from 'process';
import { fork } from 'child_process';
import socketsServer from '../../childProcess/socketsServer.js';

const { bas, biz, cfg, gen, msg, num, sys, wrd } = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const spawnProcess = `${__dirname}/../../childProcess/spawnProcess.js`;

// application.hay-CAF.businessRules.clientRules.testRules.
const namespacePrefix = wrd.capplication + bas.cDot + apc.cApplicationName + bas.cDot + wrd.cbusiness + wrd.cRules + bas.cDot + wrd.cclient + wrd.cRules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function buildArrayOfTestNames
 * @description Takes a test workflow file name, parses the file name to get the test name, and adds the test name to an array of test names and returns the modified array.
 * @param {string} inputData The file name and path of the test workflow data file.
 * @param {array<string>} inputMetaData The array that the test name should be added to once it has been parsed, and if it fulfills the qualification as a valid test workflow file name.
 * @return {array<string>} A modified string array that contains the test name if it is a valid test file name.
 * @author Seth Hollingsead
 * @date 2023/11/09
 */
async function buildArrayOfTestNames(inputData, inputMetaData) {
  let functionName = buildArrayOfTestNames.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = inputMetaData;
  let testFileName = await haystacks.executeBusinessRules([inputData, ''], [biz.cgetFileNameFromPath, biz.cremoveFileExtensionFromFileName],);
  let executionEngine = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cexecutionDriverEngine);
  // executionEngine is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cexecutionEngineIs + executionEngine);

  // testFileName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ctestFileNameIs + testFileName);
  // Now the test file name should have a prefix "Test_", lets make sure we only parse files with this prefix, otherwise they are not properly formatted tests,
  // and the testing framework would have trouble executing them anyway!
  if (testFileName.includes(wrd.cTest + bas.cUnderscore) === true) {
    if (executionEngine === app_sys.ctestcafe) {
      let testFileNameArray = testFileName.split(bas.cUnderscore); // Split the filename into an array so we can remove the prefix "Test_".
      // testFileNameArray is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ctestFileNameArrayIs + JSON.stringify(testFileNameArray));
      testFileNameArray.shift(); // Remove the "Test" prefix, this means we now just have the test name, not the file name.
      returnData.push(testFileNameArray[0]); // Add the test name to the array of tests to execute.
    } else {
      returnData.push(testFileName);
    }
  } // End-if (testFileName.includes(wrd.cTest + bas.cUnderscore) === true)
  await haystacks.consoleLog(namespacePrefix,functionName,msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function executeTestCommand
 * @description Takes a command string and executes it on a CLI Windows CMD, BASH or PowerShell interface as a child process.
 * @param {string} inputData The command string that should be executed in the child process.
 * @param {'cmd'|'bash'|'powershell'} inputMetaData The command type to be used to spawn a child process 
 * @return {boolean} True or False to indicate if the test passed successfully or not.
 * @author Seth Hollingsead
 * @date 2023/11/14
 */
async function executeTestCommand(inputData, inputMetaData) {
  let functionName = executeTestCommand.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  const platform = process.platform.toLowerCase();
  const supportedPlatforms = [gen.cdarwin, gen.cwin32, gen.clinux];

  // Ensures the user is using a supported platform / OS.
  if (supportedPlatforms.includes(platform)) {
    if (inputData && inputMetaData) {
      inputMetaData = String(inputMetaData).toLowerCase().trim() || '';

      // Validates the selected command type
      if (inputMetaData === '' || !app_sys.cvalidCommandTypes.split(bas.cComa).includes(inputMetaData)) {
        // ERROR: You must specify a test type to execute. Command type is:
        console.log(app_msg.cErrorExecuteTestCommandMessage01 + inputMetaData);
        // Valid command types are:
        console.log(app_msg.cvalidCommandTypesAre + app_sys.cvalidCommandTypes.split(bas.cComa).join(bas.cComa + bas.cSpace));
      } else {
        // Spawns child process using appropriate shell and executes input command
        // TODO: Return true or false based on the test passing or failing.
        returnData = await spawnCmdProcess(inputData, inputMetaData);
      }
    } else {
      // ERROR: You must specify a test command to execute. Command is:
      console.log(app_msg.cErrorExecuteTestCommandMessage01 + inputMetaData);
    }
  } else {
    // ERROR: You're system,
    // is not yet supported!
    console.log(app_msg.cErrorYourSystemColon + platform + app_msg.cErrorIsNotYetSupported);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function spawnCmdProcess
 * @description Detects the OS and creates a temporary shell script which executes the given command string in a child process's terminal
 * @param {string} inputData The command string that should be executed in the child process.
 * @param {string} inputMetaData This is not used in this business rule.
 * @return {string} The string that executed command result
 * @author Karl-Edward Jean-Mehu
 * @date 2023/12/03
 */
async function spawnCmdProcess(inputData, inputMetaData) {
  const functionName = spawnCmdProcess.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let result = false;
  try {

    // Start communication protocol Server
    const socketServer = socketsServer();
    await socketServer.connect();

    // Obtain root path for haystacks
    const _rootPath = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.crootTestFolderPath);

    // Obtain the absolute path for CAFfeinated
    const normalizedPath = path.normalize(_rootPath);
    const directories = normalizedPath.split(path.sep);
    const targetIndex = directories.indexOf(app_sys.cCAFfeinated) + 1;
    const CAFfeinatedPath = directories.slice(0, targetIndex).join(bas.cForwardSlash);
    // CAFfeinatedPath is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cCAFfeinatedPathIs + CAFfeinatedPath);

    // Serialize shell options
    const serializedOptions = JSON.stringify({ 
      shell: inputMetaData,
      CAFfeinatedPath,
      debug: {
        keepTmpFile: false
      }
    });

    // Spawns a fork (independent) process
    const childProcess = fork(spawnProcess, [
      inputData,
      serializedOptions,
      { stdio: [wrd.cpipe, wrd.cpipe, wrd.cpipe, gen.cipc] },
    ]);

    // Handler for incoming data from child process
    childProcess.on(wrd.cdata, async (chunk) => {
      const eventName = bas.cDot + wrd.cdata;
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);
      // data is:
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cdataIs + chunk.toString());
      const message = chunk.toString();
      // message from child:
      console.log(msg.cmessageFromChild + message);
      // message is:
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cmessageIs + message);
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
    });

    // Handler for incoming messages from child process
    childProcess.on(wrd.cmessage, async (messageData) => {
      const eventName = bas.cDot + wrd.cmessage;
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);
      // messageData is:
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, app_msg.cmessageDataIs + JSON.stringify(messageData));
      if (messageData[wrd.cName]) {
        // testScriptFileName is:
        await haystacks.consoleLog(namespacePrefix, functionName + eventName, app_msg.ctestScriptFileNameIs + messageData[wrd.cName]);
        await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.ctestScriptFileName, messageData[wrd.cName]);

        let tempTestScriptFileName = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.ctestScriptFileName);
        // configuration testScriptFileName is:
        await haystacks.consoleLog(namespacePrefix, functionName + eventName, app_msg.cconfigurationTestScriptFileNameIs + tempTestScriptFileName);
      }
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
    });

    // Error handler on child process
    childProcess.on(wrd.cerror, async (error) => {
      const eventName = bas.cDot + wrd.cerror;
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);
      // error is:
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cerrorIs + JSON.stringify(error));
      console.log(msg.cERROR_Colon + error);
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
      await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function + bas.cSpace + num.c1);
      return false;
    });

    // Child process exited
    childProcess.on(wrd.cexit, async (code, signal) => {
      const eventName = bas.cDot + wrd.cexit;
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);
      // exited with code:
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cexitedWithCode + JSON.stringify(code));
      // signal is:
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.csignalIs + JSON.stringify(signal));
      // Display only unsuccessful exit codes
      if (code !== 0) {
        // Exited with code:
        // , and signal:
        console.log(msg.cexitedWithCode + code + msg.candSignal + signal);
        await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function + bas.cSpace + num.c2);
      }
      return;
    });

    // Cleanup / delete tmp script file
    const Cleanup = async () => {
      const childFunction = bas.cDot + wrd.cClean + wrd.cup;
      await haystacks.consoleLog(namespacePrefix, functionName + childFunction, msg.cBEGIN_Function);
      let testScriptFileName = '';
      let fileDeleted = false;

      // Cleanup any script files from the last command run.
      testScriptFileName = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.ctestScriptFileName);
      // main.testScriptFileName is:
      // console.log(app_msg.cmainTestScriptFileNameIs + testScriptFileName);
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cmainTestScriptFileNameIs + testScriptFileName);
      if (testScriptFileName !== '') {
        let applicationRootPath = await haystacks.getConfigurationSetting(wrd.csystem, cfg.cclientRootPath);
        // main.applicationRootPath is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cmainApplicationRootPathIs + applicationRootPath);
        // TODO Make sure to apply additional logic for file name and path to make sure it's fully qualifed
        fileDeleted = await haystacks.executeBusinessRules([testScriptFileName, ''], [biz.cdeleteFile]);
        if (fileDeleted === true) {
          await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.ctestScriptFileName, '');
        }
      }
      await haystacks.consoleLog(namespacePrefix, functionName + childFunction, msg.cEND_Function);
    }

    // Obtain the child process time (allotted) limit
    const childProcessLimitTime = Number(await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cchildProcessLimitTime));

    result = await new Promise((resolve, reject) => {
      const childFunction = bas.cDot + wrd.cresult;
      haystacks.consoleLog(namespacePrefix, functionName + childFunction, msg.cBEGIN_Function);
      // Obtain results from test
      socketServer.getTestResult(childProcessLimitTime).then(testResult => {
        haystacks.consoleLog(namespacePrefix, functionName + childFunction, namespacePrefix + functionName + childFunction + sys.cSpaceIsColonSpace + testResult);

        Cleanup();

        // Kill the child process.
        childProcess.kill();
        resolve(testResult);
      })
      .catch(error => {
        haystacks.consoleLog(namespacePrefix, functionName + childFunction, namespacePrefix + functionName + childFunction + bas.cDot + wrd.cerror + sys.cSpaceIsColonSpace + error);
        Cleanup();

        // Kill the child process.
        childProcess.kill();
        console.log(error);
        reject(false);
      });
      haystacks.consoleLog(namespacePrefix, functionName + childFunction, msg.cEND_Function);
    });

    await socketServer.terminate();
  } catch (e) {
    console.log(e);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function + bas.cSpace + num.c3);
  return new Promise(resolve => { resolve(result)});
}

export { executeTestCommand, buildArrayOfTestNames, spawnCmdProcess };
