/**
 * @file application.message.constants.js
 * @module application.message.constants
 * @description Contains many re-usable application message constants.
 * @requires module:application.configuration.constants
 * @requires module:application.system.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2023/03/30
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal Imports
import * as app_cfg from './application.configuration.constants.js';
import * as app_sys from './application.system.constants.js';

// External imports
import hayConst from '@haystacks/constants';
const {bas, gen, msg, num, sys, wrd} = hayConst;

// General application messages

// Application messages
export const cinstructionsMessage00 = wrd.cInstructions + bas.cSpace + wrd.cto + bas.cSpace + wrd.cend + bas.cSpace + wrd.cuser + bas.cColon; // Instructions to end user:

// Constants Validation
export const callClientConstantsValidationDataIs = wrd.call + wrd.cClient + wrd.cConstants + wrd.cValidation + wrd.cData + sys.cSpaceIsColonSpace; // allClientConstantsValidationData is:
export const cresolvedConstantsPath_ApplicationBusinessIs = app_sys.cresolvedConstantsPath_Application + wrd.cBusiness + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationBusiness is:
export const cresolvedConstantsPath_ApplicationCommandIs = app_sys.cresolvedConstantsPath_Application + wrd.cCommand + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationCommand is:
export const cresolvedConstantsPath_ApplicationConfigurationIs = app_sys.cresolvedConstantsPath_Application + wrd.cConfiguration + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationConfiguration is:
export const cresolvedConstantsPath_ApplicationConstantIs = app_sys.cresolvedConstantsPath_Application + wrd.cConstant + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationConstant is:
export const cresolvedConstantsPath_ApplicationMessageIs = app_sys.cresolvedConstantsPath_Application + wrd.cMessage + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationMessage is:
export const cresolvedConstantsPath_ApplicationSystemIs = app_sys.cresolvedConstantsPath_Application + wrd.cSystem + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationSystem is:

export const cApplicationBusinessConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cBusiness + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Business Constants Phase 1 Validation
export const cApplicationCommandConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cCommand + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Command Constants Phase 1 Validation
export const cApplicationConfigurationConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cConfiguration + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Configuration Constants Phase 1 Validation
export const cApplicationConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Constants Phase 1 Validation
export const cApplicationMessageConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cMessage + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Message Constants Phase 1 Validation
export const cApplicationSystemConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cSystem + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application System Constants Phase 1 Validation

export const cApplicationBusinessConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cBusiness + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Business Constants Phase 2 Validation
export const cApplicationCommandConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cCommand + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Command Constants Phase 2 Validation
export const cApplicationConfigurationConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cConfiguration + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Configuration Constants Phase 2 Validation
export const cApplicationConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Constants Phase 2 Validation
export const cApplicationMessageConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cMessage + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Message Constants Phase 2 Validation
export const cApplicationSystemConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cSystem + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application System Constants Phase 2 Validation

export const capplicationMessage01 = wrd.cBEGIN + bas.cSpace + wrd.cmain + bas.cSpace + wrd.cprogram + bas.cSpace + wrd.cloop; // BEGIN main program loop
export const capplicationMessage02 = wrd.cBEGIN + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cparser; // BEGIN command parser
export const capplicationMessage03 = wrd.cEND + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cparser; // END command parser
export const capplicationMessage04 = wrd.cEND + bas.cSpace + wrd.cmain + bas.cSpace + wrd.cprogram + bas.cSpace + wrd.cloop; // END main program loop
export const capplicationMessage05 = wrd.cExiting + bas.cSpace + wrd.cHay + bas.cDash + bas.cCA + bas.cF + bas.cSpace + wrd.capplication; // Exiting Hay-CAF application

export const csettingKeyIs = wrd.csetting + wrd.cKey + sys.cSpaceIsColonSpace; // settingKey is:
export const csettingValueIs = wrd.csetting + wrd.cValue + sys.cSpaceIsColonSpace; // settingValue is:
export const crefactoredAppConfigIs = wrd.crefactored + wrd.cApp + wrd.cConfig + sys.cSpaceIsColonSpace; // refactoredAppConfig is:
export const cappConfigIs = wrd.capp + wrd.cConfig + sys.cSpaceIsColonSpace; // appConfig is:
export const cshellCommandToRunIs = wrd.cshell + wrd.cCommand + wrd.cTo + wrd.cRun + sys.cSpaceIsColonSpace; // shellCommandToRun is:
export const coptionsIs = wrd.coptions + sys.cSpaceIsColonSpace; // options is:
export const cboilerPlateTestPathAndFileNameIs = wrd.cboiler + wrd.cPlate + wrd.cTest + wrd.cPath + wrd.cAnd + wrd.cFileName + sys.cSpaceIsColonSpace; // boilerPlateTestPathAndFileName is:
export const crootTestFolderPathIs = wrd.croot + wrd.cTest + wrd.cFolder + wrd.cPath + sys.cSpaceIsColonSpace; // rootTestFolderPath is:
export const cdefaultTestBehaviorRunAllTestsIs = wrd.cdefault + wrd.cTest + wrd.cBehavior + wrd.cRun + wrd.cAll + wrd.cTests + sys.cSpaceIsColonSpace; // defaultTestBehaviorRunAllTests is:
export const cslowExecutionIs = wrd.cslow + wrd.cExecution + sys.cSpaceIsColonSpace; // slowExecution is:
export const cmultiTestExecutionIs = wrd.cmulti + wrd.cTest + wrd.cExecution + sys.cSpaceIsColonSpace; // multiTestExecution is:
export const clistOfBrowsersIs = wrd.clist + wrd.cOf + wrd.cBrowsers + sys.cSpaceIsColonSpace; // listOfBrowsers is:
export const cexecutionEngineIs = wrd.cexecution + wrd.cEngine + sys.cSpaceIsColonSpace; // executionEngine is:
export const creportEnabledIs = wrd.creport + wrd.cEnabled + sys.cSpaceIsColonSpace; // reportEnabled is:
export const creportPathIs = wrd.creport + wrd.cPath + sys.cSpaceIsColonSpace; // reportPath is:
export const ccommandTypeIs = wrd.ccommand + wrd.cType + sys.cSpaceIsColonSpace; // commandType is:
export const ctestWorkflowFilesAre = wrd.ctest + wrd.cWorkflow + wrd.cFiles + sys.cSpaceAreColonSpace; // testWorkflowFiles are:
export const ctestFileNameKeyIs = wrd.ctest + wrd.cFileName + wrd.cKey + sys.cSpaceIsColonSpace; // testFileNameKey is:
export const ctestFileNameIs = wrd.ctest + wrd.cFileName + sys.cSpaceIsColonSpace; // testFileName is:
export const carrayOfTestNamesToExecuteIs = wrd.carray + wrd.cOf + wrd.cTestNames + wrd.cTo + wrd.cExecute + sys.cSpaceIsColonSpace; // arrayOfTestNamesToExecute is:
export const ctestWorkflowFileNameAndPathKeyIs = wrd.ctest + wrd.cWorkflow + wrd.cFileName + wrd.cAnd + wrd.cPath + wrd.cKey + sys.cSpaceIsColonSpace; // testWorkflowFileNameAndPathKey is:
export const ctestWorkflowFileIs = wrd.ctest + wrd.cWorkflow + wrd.cFile + sys.cSpaceIsColonSpace; // testWorkflowFile is:
export const ccurrentTimeStampIs = wrd.ccurrent + wrd.cTime + wrd.cStamp + sys.cSpaceIsColonSpace; // currentTimeStamp is:
export const ctestReporterCommandStringIs = wrd.ctest + wrd.cReporter + wrd.cCommand + wrd.cString + sys.cSpaceIsColonSpace; // testReporterCommandString is:
export const clistOfTestNamesToExecuteIs = wrd.clist + wrd.cOf + wrd.cTestNames + wrd.cTo + wrd.cExecute + sys.cSpaceIsColonSpace; // listOfTestNamesToExecute is:
export const ctestCommandStringIs = wrd.ctest + wrd.cCommand + wrd.cString + sys.cSpaceIsColonSpace; // testCommandString is:
export const ctestNameKeyIs = wrd.ctestName + wrd.cKey + sys.cSpaceIsColonSpace; // testNameKey is:
export const ctestNameIs = wrd.ctestName + sys.cSpaceIsColonSpace; // testName is:
export const ctestFileNameArrayIs = wrd.ctest + wrd.cFile + wrd.cName + wrd.cArray + sys.cSpaceIsColonSpace; // testFileNameArray is:
export const cvalidCommandTypesAre = wrd.cvalid + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.ctypes + sys.cSpaceAreColonSpace; // valid command types are:
export const cErrorYourSystemColon = msg.cERROR_Colon + wrd.cYour + bas.cSpace + wrd.csystem + bas.cComa + bas.cSpace; // ERROR: You're system,
export const cErrorIsNotYetSupported = bas.cSpace + wrd.cis + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cyet + bas.cSpace + wrd.csupported + bas.cExclamation; // is not yet supported!
export const cCAFfeinatedPathIs = app_sys.cCAFfeinated + wrd.cPath + sys.cSpaceIsColonSpace; // CAFfeinatedPath is:
export const cmessageDataIs = wrd.cmessage + wrd.cData + sys.cSpaceIsColonSpace; // messageData is:
export const ctestScriptFileNameIs = wrd.ctest + wrd.cScript + wrd.cFileName + sys.cSpaceIsColonSpace; // testScriptFileName is:
export const cconfigurationTestScriptFileNameIs = wrd.cconfiguration + bas.cSpace + ctestScriptFileNameIs; // configuration testScriptFileName is:
export const cServerConnected = wrd.cServer + bas.cSpace + wrd.cConnected; // Server Connected
export const ctestResult = wrd.ctest + wrd.cResult; // testResult
export const cSocketServer = wrd.cSocket + bas.cSpace + wrd.cserver + bas.cSpace; // Socket server
export const cDisconnectingGracefully = wrd.cDisconnecting + bas.cSpace + wrd.cgracefully; // Disconnecting gracefully
export const cSocketServerFailed = cSocketServer + wrd.cfailed + bas.cColon + bas.cSpace; // Socket server failed: 
export const cchunkIs = wrd.cchunk + sys.cSpaceIsColonSpace; // chunk is:
export const csendingTerminationCmdToClients = wrd.cSending + bas.cSpace + wrd.ctermination + bas.cSpace + gen.ccmd + bas.cSpace + wrd.cto + bas.cSpace + wrd.cclients + bas.cDot.repeat(3); // Sending termination cmd to clients...
export const cmainTestScriptFileNameIs = wrd.cmain + bas.cDot + app_cfg.ctestScriptFileName + sys.cSpaceIsColonSpace; // main.testScriptFileName is:
export const cmainApplicationRootPathIs = wrd.cmain + bas.cDot + msg.capplicationRootPathIs; // main.applicationRootPath is:
export const cshellCommandNotDefined = wrd.cShell + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cdefined; // Shell command not defined
export const cselectedShellNotFound = wrd.cSelected + bas.cSpace + wrd.cshell + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cfound + bas.cDot; // Selected shell not found.
export const cProcessWasSpawned = wrd.cProcess + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cspawned + bas.cExclamation; // Process was spawned!
export const cPathToShellExecutableIs = wrd.cpath + wrd.cTo + wrd.cShell + wrd.cExecutable + sys.cSpaceIsColonSpace; // pathToShellExecutable is:
export const cshellScriptFileNameIs = wrd.cshell + wrd.cScript + bas.cSpace + wrd.cfile + bas.cSpace + wrd.cname + sys.cSpaceIsColonSpace; // shellScript file name is:
export const cerrorCreatingTheTmpFile = wrd.cError + bas.cSpace + wrd.ccreating + bas.cSpace + wrd.cthe + bas.cSpace + gen.ctmp + bas.cSpace + wrd.cfile + bas.cColon + bas.cSpace; // Error creating the tmp file:
export const cTmpFileSuccessfullyWritten = bas.cCarRetNewLin + gen.cTmp + bas.cSpace + wrd.cfile + bas.cSpace + wrd.csuccessfully + bas.cSpace + wrd.cwritten + bas.cColon + bas.cSpace; // Tmp file successfully written:
export const cspawnCommandRawIs = wrd.cspawn + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cRAW + sys.cSpaceIsColonSpace; // spawn command RAW is:
export const cspawnCommandIs = wrd.cspawn + bas.cSpace + wrd.ccommand + sys.cSpaceIsColonSpace; // spawn command is:
export const cFailedExecutingColon = wrd.cFailed + bas.cSpace + wrd.cexecuting + bas.cColon + bas.cSpace; // Failed executing:
export const cTestResultsLog = wrd.cTest + wrd.cResults + wrd.cLog; // TestResultsLog
export const cobj1Is = gen.cobj + num.c1 + sys.cSpaceIsColonSpace; // obj1 is:
export const cobjMessageIs = gen.cobj + wrd.cMessage + sys.cSpaceIsColonSpace; // objMessage is:
export const cmessageQueueColon = wrd.cMessage + bas.cSpace + wrd.cQueue + bas.cColon + bas.cSpace; // Message Queue:
export const cMessageQueueSize = wrd.cMessage + bas.cSpace + wrd.cQueue + bas.cSpace + wrd.csize + bas.cColon + bas.cSpace; // Message Queue size:
export const cstringToEncryptIs = wrd.cstring + wrd.cTo + wrd.cEncrypt + sys.cSpaceIsColonSpace; // stringToEncrypt is: 
export const cencryptionKeyIs = wrd.cencryption + wrd.cKey + sys.cSpaceIsColonSpace; // encryptionKey is: 
export const cencryptionKeyArrayIs = wrd.cencryption + wrd.cKey + wrd.cArray + sys.cSpaceIsColonSpace; // encryptionKeyArray is: 
export const cpublicKeyIs = wrd.cpublic + wrd.cKey + sys.cSpaceIsColonSpace; // publicKey is: 
export const cencryptedStringIs = wrd.cencrypted + wrd.cString + sys.cSpaceIsColonSpace; // encryptedString is: 
export const cdecryptedStringIs = wrd.cdecrypted + bas.cSpace + wrd.cstring + sys.cSpaceIsColonSpace; // decrypted string is:
export const crawChunkData = wrd.craw + bas.cSpace + wrd.cchunk + bas.cSpace + wrd.cdata + bas.cColon + bas.cSpace; // raw chunk data:
export const csafeJsonParseMessage01 = wrd.cpersistent + wrd.cBuffer + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cappending + bas.cSpace + wrd.cnew + bas.cSpace + wrd.cchunk + bas.cSpace + wrd.cis + bas.cSpace + wrd.cnow + bas.cColon + bas.cSpace; // persistentBuffer after appending new chunk is now:
export const csafeJsonParseMessage02 = wrd.cMessages + bas.cSpace + wrd.carray + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cmessage + wrd.cDelimiter + bas.cSpace + wrd.csplit + bas.cColon + bas.cSpace; // Messages array after messageDelimiter split:
export const csafeJsonParseMessage03 = wrd.cSuccessfully + bas.cSpace + wrd.cparsed + bas.cSpace + gen.cjson + bas.cSpace + wrd.cdata + sys.cSpaceIsColonSpace; // Successfully parsed json data is:
export const csafeJsonParseMessage04 = gen.cJSON + bas.cSpace + wrd.cparse + bas.cSpace + wrd.cerror + bas.cSpace + wrd.cat + bas.cSpace + wrd.citeration + bas.cColon + bas.cSpace; // JSON parse error at iteration:
export const csafeJsonParseMessage05 = wrd.cattempting + bas.cSpace + gen.cREGEX + bas.cSpace + wrd.cextraction + bas.cColon + bas.cSpace; // attempting REGEX extraction: 
export const csafeJsonParseMessage06 = wrd.cError + bas.cDash + wrd.ccausing + bas.cSpace + wrd.cmessage + bas.cSpace + wrd.ccontent + bas.cColon + bas.cSpace; // Error-causing message content:
export const csafeJsonParseMessage07 = wrd.cAttempting + bas.cSpace + gen.cREGEX + bas.cSpace + wrd.cextraction + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cmatches + bas.cSpace + wrd.cin + bas.cSpace + wrd.cerror + bas.cDash + wrd.ccausing + bas.cSpace + wrd.cmessage + bas.cDot; // Attempting REGEX extraction for matches in error-causing message.
export const csafeJsonParseMessage08 = gen.cREGEX + bas.cSpace + wrd.cmatch + bas.cSpace + wrd.cstring + sys.cSpaceIsColonSpace; // REGEX match string is:
export const csafeJsonParseMessage09 = wrd.cSuccessfully + bas.cSpace + wrd.cparsed + bas.cSpace + gen.cREGEX + bas.cSpace + gen.cJSON + bas.cSpace + wrd.cfragment; // Successfully parsed REGEX JSON fragment
export const csafeJsonParseMessage10 = wrd.cSkipping + bas.cSpace + wrd.cunparsable + bas.cSpace + gen.cJSON + bas.cSpace + wrd.cfragment + bas.cColon + bas.cSpace; // Skipping unparsable JSON fragment:
export const csafeJsonParseMessage11 = wrd.cpersistent + wrd.cBuffer + bas.cSpace + wrd.cAFTER + bas.cSpace + wrd.cprocessing + sys.cSpaceIsColonSpace; // persistentBuffer AFTER processing is:
export const csocketServerDataEventHandlerMessage01 = wrd.cSafe + bas.cSpace + wrd.cParsed + bas.cSpace + gen.cJSON + bas.cSpace + wrd.cdata + bas.cColon + bas.cSpace; // Safe Parsed JSON data:
export const csocketServerDataEventHandlerMessage02 = gen.cJSON + bas.cSpace + wrd.cis + bas.cSpace + wrd.can + bas.cSpace + wrd.carray + bas.cSpace + wrd.cwith + bas.cSpace + wrd.clength + bas.cColon + bas.cSpace; // JSON is an array with length:
export const csocketServerDataEventHandlerMessage03 = wrd.cProcessing + bas.cSpace + wrd.carray + bas.cSpace + wrd.citem + bas.cColon + bas.cSpace; // Processing array item:
export const csocketServerDataEventHandlerMessage04 = wrd.cExtracted + bas.cSpace + wrd.cmessage + bas.cSpace + wrd.cfrom + bas.cSpace + wrd.carray + bas.cSpace + wrd.citem + bas.cColon + bas.cSpace; // Extracted message from array item:
export const csocketServerDataEventHandlerMessage05 = wrd.cIdentified + bas.cSpace + wrd.ctest + bas.cSpace + wrd.cresult + bas.cSpace + wrd.cin + bas.cSpace + wrd.carray + bas.cSpace + wrd.citem + bas.cDot; // Identified test result in array item.
export const csocketServerDataEventHandlerMessage06 = wrd.cResult + bas.cSpace + wrd.cof + bas.cSpace + wrd.cevery + bas.cOpenParenthesis + bas.cCloseParenthesis + bas.cSpace + wrd.ccheck + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cmessages + bas.cColon + bas.cSpace; // Result of every() check for messages:
export const csocketServerDataEventHandlerMessage07 = gen.cJSON + bas.cSpace + wrd.cis + bas.cSpace + wrd.can + bas.cSpace + wrd.cobject; // JSON is an object
export const csocketServerDataEventHandlerMessage08 = wrd.cExtracted + bas.cSpace + wrd.cmessage + bas.cSpace + wrd.cfrom + bas.cSpace + gen.cJSON + bas.cSpace + wrd.cobject + bas.cColon + bas.cSpace; // Extracted message from JSON object:
export const csocketServerDataEventHandlerMessage09 = wrd.cIdentified + bas.cSpace + wrd.ctest + bas.cSpace + wrd.cresult + bas.cSpace + wrd.cin + bas.cSpace + gen.cJSON + bas.cSpace + wrd.cobject + bas.cDot; // Identified test result in JSON object.
export const csocketServerDataEventHandlerMessage10 = wrd.cEnqueuing + bas.cSpace + wrd.cparsed + bas.cSpace + gen.cJSON + bas.cSpace + wrd.cto + bas.cSpace + wrd.cmessage + bas.cSpace + wrd.cqueue; // Enqueuing parsed JSON to message queue
export const csocketServerDataEventHandlerMessage11 = wrd.cEnqueued + bas.cSpace + wrd.csuccessfully + bas.cDot + bas.cSpace + wrd.cQueue + bas.cSpace + wrd.csize + bas.cColon + bas.cSpace; // Enqueued successfully. Queue size:
export const csocketServerDataEventHandlerMessage12 = wrd.cDequeued + bas.cSpace + wrd.cmessage + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cconsole + bas.cSpace + wrd.clog + bas.cColon + bas.cSpace; // Dequeued message for console log:
export const csocketServerDataEventHandlerMessage13 = wrd.cSuccess + bas.cSpace + crawChunkData; // Success raw chunk data:
export const csocketServerDataEventHandlerMessage14 = wrd.cFailed + bas.cSpace + crawChunkData; // Failed raw chunk data:

// ERROR Messages
export const cErrorSetBoilerPlateTestPathAndFileNameMessage = msg.cERROR_Colon + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cand + bas.cSpace + wrd.cfilename + bas.cSpace + wrd.cas + bas.cSpace + wrd.cinput + bas.cDot; // ERROR: Please enter a valid path and filename as input.
export const cErrorSetRootTestFolderPathMessage = msg.cERROR_Colon + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cas + bas.cSpace + wrd.cinput + bas.cDot; // ERROR: Please enter a valid path as input.
export const cErrorSetDefaultTestBehaviorMessage = msg.cERROR_Colon + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cinput + bas.cComa + bas.cSpace + gen.ctrue + bas.cSpace + wrd.cor + bas.cSpace + gen.cfalse + bas.cDot; // ERROR: Please enter a valid input, true or false.
export const cErrorSetBrowserListMessage = msg.cERROR_Colon + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.clist + bas.cSpace + wrd.cof + bas.cSpace + wrd.cbrowser + bas.cSpace + wrd.cnames + bas.cSpace + wrd.cto + bas.cSpace + wrd.cexecute + bas.cSpace + wrd.cwith + bas.cDot; // ERROR: Please enter a valid list of browser names to execute with.
export const csetExecutionEngineMessage01 = msg.cWARNING_Colon + wrd.cAll + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cexecution + bas.cSpace + wrd.cengines + bas.cSpace + wrd.care + bas.cSpace + wrd.cnot + bas.cSpace + wrd.ccurrently + bas.cSpace + wrd.csupported + bas.cSpace + wrd.cby + bas.cSpace + wrd.cour + bas.cSpace + wrd.ctesting + bas.cSpace + wrd.cengine + bas.cDot; // WARNING: All valid execution engines are not currently supported by our testing engine.
export const csetExecutionEngineMessage02 = msg.cWARNING_Colon + wrd.cOnly + bas.cSpace + app_sys.ctestcafe + bas.cSpace + wrd.cis + bas.cSpace + wrd.csupported + bas.cSpace + wrd.cas + bas.cSpace + bas.ca + bas.cSpace + wrd.ctesting + bas.cSpace + wrd.cengine + bas.cComa + bas.cSpace + wrd.cuntil + bas.cSpace + wrd.cwe + bas.cSpace + wrd.ccan + bas.cSpace + wrd.cfinish + bas.cSpace + wrd.cbuilding + bas.cSpace + wrd.cour + bas.cSpace + wrd.cnext + bas.cSpace + wrd.cgeneration + bas.cSpace + wrd.csystem + bas.cDot; // WARNING: Only testcafe is supported as a testing engine, until we can finish building our next generation system.
export const csetExecutionEngineMessage03 = msg.cWARNING_Colon + wrd.cThe + bas.cSpace + wrd.cexecution + bas.cSpace + wrd.cengine + bas.cSpace + wrd.cwill + bas.cSpace + wrd.cbe + bas.cSpace + wrd.chard + bas.cSpace + wrd.ccoded + bas.cSpace + wrd.cto + bas.cSpace + app_sys.ctestcafe + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cnow + bas.cDot; // WARNING: The execution engine will be hard coded to testcafe for now.
export const csetExecutionEngineMessage04 = msg.cERROR_Colon + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cexecution + bas.cSpace + wrd.cengine + bas.cSpace + wrd.csuch + bas.cSpace + wrd.cas + bas.cColon + bas.cSpace; // ERROR: Please enter a valid execution engine such as:
export const csetReportPathConfigurationMessage01 = msg.cERROR_Colon + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.csystem + bas.cSpace + wrd.cpath + bas.cDot; // ERROR: Please enter a valid system path.
export const csetChildProcessLimitTimeMessage01 = msg.cERROR_Colon + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cprocess + bas.cSpace + wrd.ctime + bas.cDot; // ERROR: Please enter a valid process time.
export const csetCommandTypeMessage01 = msg.cERROR_Colon + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.ctype + bas.cDot + bas.cSpace + wrd.cValid + bas.cSpace + wrd.ctypes + bas.cSpace + wrd.care + bas.cColon + bas.cSpace; // ERROR: Please enter a valid command type. Valid types are:
export const ctestMessage01 = msg.cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cbrowsers + bas.cSpace + wrd.cspecified + bas.cDot + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.cset + bas.cSpace + wrd.cthe + bas.cSpace + wrd.clist + bas.cSpace + wrd.cof + bas.cSpace + wrd.cbrowsers + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.csetting + bas.cColon + bas.cSpace; // ERROR: No browsers specified. Please set the list of browsers in the configuration setting:
export const ctestMessage02 = msg.cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cexecution + bas.cSpace + wrd.cengine + bas.cSpace + wrd.cis + bas.cSpace + wrd.cspecified + bas.cDot + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.cset + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cexecution + bas.cSpace + wrd.cengine + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.csetting + bas.cColon + bas.cSpace; // ERROR: No execution engine is specified. Please set the execution engine in the configuration setting:
export const ctestMessage03 = msg.cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cboiler + bas.cSpace + wrd.cplate + bas.cSpace + wrd.ctest + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cand + bas.cSpace + wrd.cfile + bas.cSpace + wrd.cname + bas.cSpace + wrd.cwere + bas.cSpace + wrd.cspecified + bas.cDot + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.cset + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cboiler + bas.cSpace + wrd.cplate + bas.cSpace + wrd.ctest + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cand + bas.cSpace + wrd.cfile + bas.cSpace + wrd.cname + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.csetting + bas.cColon + bas.cSpace; // ERROR: No boiler plate test path and file name were specified. Please set the boiler plate test path and file name in the configuration setting:
export const ctestMessage04 = msg.cERROR_Colon + wrd.cNo + bas.cSpace + wrd.creport + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cspecified + bas.cDot + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.cset + bas.cSpace + wrd.cthe + bas.cSpace + wrd.creport + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.csetting + bas.cColon + bas.cSpace; // ERROR: No report path specified. Please set the report path in the configuration setting:
export const ctestMessage05 = msg.cERROR_Colon + wrd.cNo + bas.cSpace + wrd.ctest + bas.cSpace + wrd.croot + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cspecified + bas.cDot + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.cset + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.csetting + bas.cColon + bas.cSpace; // ERROR: No test root path specified. Please set the path in the configuration setting:
export const cErrorExecuteTestCommandMessage01 = msg.cERROR_Colon + wrd.cYou + bas.cSpace + wrd.cmust + bas.cSpace + wrd.cspecify + bas.cSpace + bas.ca + bas.cSpace + wrd.ctest + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cto + bas.cSpace + wrd.cexecute + bas.cDot + bas.cSpace + wrd.cCommand + sys.cSpaceIsColonSpace; // ERROR: You must specify a test command to execute. Command is:
export const cchildProcessCommandStringNotDefined = wrd.cChild + bas.cSpace + wrd.cprocess + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cstring + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cdefined + bas.cDot; // Child process command string not defined.
export const cErrorSocketServerMessage01 = wrd.cError + bas.cSpace + gen.con + bas.cSpace + wrd.csocket + bas.cSpace + wrd.cserver + bas.cColon + bas.cSpace; // Error on socket server:
export const cErrorSocketServerMessage02 = wrd.cFailed + bas.cSpace + wrd.cretrieving + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cfrom + bas.cSpace + wrd.cclient + bas.cColon + bas.cSpace; // Failed retrieving data from client:
export const cErrorSocketServerMessage03 = wrd.cServer + bas.cSpace + wrd.cconnection + bas.cSpace + wrd.chas + bas.cSpace + wrd.cended + bas.cExclamation; // Server connection has ended!
export const cTestFailedPrematurely = wrd.cTest + bas.cSpace + wrd.cfailed + bas.cSpace + wrd.cprematurely + bas.cExclamation; // Test failed prematurely!
export const cShellCommandNotDefined = wrd.cShell + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cdefined + bas.cDot; // Shell command not defined.
export const cSelectedShellNotFound = wrd.cSelected + bas.cSpace + wrd.cshell + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cfound + bas.cDot; // Selected shell not found.
export const cErrorCreatingTempFile = bas.cCarRetNewLin + wrd.cError + bas.cSpace + wrd.ccreating + bas.cSpace + wrd.ctemp + bas.cSpace + wrd.cfile + bas.cColon + bas.cSpace; // Error creating temp file:
export const cErrorFromChild = bas.cCarRetNewLin + wrd.cError + bas.cSpace + wrd.cfrom + bas.cSpace + wrd.cchild + bas.cColon + bas.cSpace; // Error from child:
export const cChildDisconnected = bas.cCarRetNewLin + wrd.cChild + bas.cSpace + wrd.cdisconnected + bas.cDot; // Child disconnected.
export const cErrorOnShell = bas.cCarRetNewLin + wrd.cError + bas.cSpace + wrd.con + bas.cSpace + wrd.cshell + bas.cColon + bas.cSpace; // Error on shell:
export const cClosingTimeoutEndOfScript = wrd.cClosing + bas.cDot.repeat(3) + wrd.cTimeout + bas.cSpace + wrd.creached + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cend + bas.cSpace + wrd.cof + bas.cSpace + wrd.cscript + bas.cExclamation; // Closing...Timeout reached for end of script!
export const cgetTestResultsError01 = msg.cERROR_Colon + wrd.cThe + bas.cSpace + wrd.callotted + bas.cSpace + wrd.ctime + bas.cSpace + wrd.cto + bas.cSpace + wrd.cretrieve + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ctest + bas.cSpace + wrd.cresult + bas.cSpace + wrd.chas + bas.cSpace + wrd.cpassed + bas.cDot + bas.cSpace + wrd.cTry + bas.cSpace + wrd.cagain + bas.cSpace + wrd.clater + bas.cDot; // Error: The allotted time to retrieve the test result has passed. Try again later.
export const cClientPausedBackpressure = wrd.cClient + bas.cSpace + wrd.chas + bas.cSpace + wrd.cpaused + bas.cSpace + wrd.cdue + bas.cSpace + wrd.cto + bas.cSpace + wrd.cback + wrd.cpressure + bas.cDot; // Client has paused due to backpressure.
export const cCallingServerHasEndedCallbackMessage01 = wrd.cCalling + bas.cSpace + wrd.cserver + wrd.cHas + wrd.cEnded + wrd.cCall + wrd.cback + bas.cExclamation.repeat(2); // Calling serverHasEndedCallback!!
export const cCallingServerHasEndedCallbackMessage02 = wrd.cdoing + bas.cSpace + wrd.cbad + bas.cExclamation.repeat(2); // doing bad!!
export const calreadyInUse = wrd.calready + bas.cSpace + wrd.cin + bas.cSpace + wrd.cuse + bas.cDot.repeat(3); // already in use...
// Encryption messages
// WARNING: No valid inputs where provided to the command.
export const cencryptStringMessage01 = msg.cWARNING_Colon + wrd.cNo + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cinputs + bas.cSpace + wrd.cwhere + bas.cSpace + wrd.cprovided + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ccommand + bas.cDot;
// This command is intended to be used by the system administrator.
export const cencryptStringMessage02 = wrd.cThis + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cis + bas.cSpace + wrd.cintended + bas.cSpace + wrd.cto + bas.cSpace + wrd.cbe + bas.cSpace + wrd.cused + bas.cSpace + wrd.cby + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csystem + bas.cSpace + wrd.cadministrator + bas.cDot;
// The system administrator will have a private key used by the testing framework, to be combined with the public key.
export const cencryptStringMessage03 = wrd.cThe + bas.cSpace + wrd.csystem + bas.cSpace + wrd.cadministrator + bas.cSpace + wrd.cwill + bas.cSpace + wrd.chave + bas.cSpace + bas.ca + bas.cSpace + wrd.cprivate + bas.cSpace + wrd.ckey + bas.cSpace + wrd.cused + bas.cSpace + wrd.cby + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ctesting + bas.cSpace + wrd.cframework + bas.cComa + bas.cSpace + wrd.cto + bas.cSpace + wrd.cbe + bas.cSpace + wrd.ccombined + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cpublic + bas.cSpace + wrd.ckey + bas.cDot;
// This privateKey should be combined with a publicKey uniquely generated for this specific string encryption.
export const cencryptStringMessage04 = wrd.cThis + bas.cSpace + wrd.cprivate + wrd.cKey + bas.cSpace + wrd.cshould + bas.cSpace + wrd.cbe + bas.cSpace + wrd.ccombined + bas.cSpace + wrd.cwith + bas.cSpace + bas.ca + bas.cSpace + wrd.cpublic + wrd.cKey + bas.cSpace + wrd.cuniquely + bas.cSpace + wrd.cgenerated + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthis + bas.cSpace + wrd.cspecific + bas.cSpace + wrd.cstring + bas.cSpace + wrd.cencryption + bas.cDot;
// The publicKey should be stored in the testing framework page data according to the instructions in the framework documentation,
export const cencryptStringMessage05 = wrd.cThe + bas.cSpace + wrd.cpublic + wrd.cKey + bas.cSpace + wrd.cshould + bas.cSpace + wrd.cbe + bas.cSpace + wrd.cstored + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ctesting + bas.cSpace + wrd.cframework + bas.cSpace + wrd.cpage + bas.cSpace + wrd.cdata + bas.cSpace + wrd.caccording + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cinstructions + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cframework + bas.cSpace + wrd.cdocumentation + bas.cComa;
// along side the encrypted string. The testing framework will take these two pieces of data and combine it with the
export const cencryptStringMessage06 = wrd.calong + bas.cSpace + wrd.cside + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cencrypted + bas.cSpace + wrd.cstring + bas.cDot + bas.cSpace + wrd.cThe + bas.cSpace + wrd.ctesting + bas.cSpace + wrd.cframework + bas.cSpace + wrd.cwill + bas.cSpace + wrd.ctake + bas.cSpace + wrd.cthese + bas.cSpace + num.ctwo + bas.cSpace + wrd.cpieces + bas.cSpace + wrd.cof + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cand + bas.cSpace + wrd.ccombine + bas.cSpace + wrd.cit + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cthe;
// privateKey stored in the testing framework to decrypt the data at the point of use.
export const cencryptStringMessage07 = wrd.cprivate + wrd.cKey + bas.cSpace + wrd.cstored + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ctesting + bas.cSpace + wrd.cframework + bas.cSpace + wrd.cto + bas.cSpace + wrd.cdecrypt + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cat + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cpoint + bas.cSpace + wrd.cof + bas.cSpace + wrd.cuse + bas.cDot;
// This will allow your testing account credentials to remain secure across the entire testing framework.
export const cencryptStringMessage08 = wrd.cThis + bas.cSpace + wrd.cwill + bas.cSpace + wrd.callow + bas.cSpace + wrd.cyour + bas.cSpace + wrd.ctesting + bas.cSpace + wrd.caccount + bas.cSpace + wrd.ccredentials + bas.cSpace + wrd.cto + bas.cSpace + wrd.cremain + bas.cSpace + wrd.csecure + bas.cSpace + wrd.cacross + bas.cSpace + wrd.cthe + bas.cSpace + wrd.centire + bas.cSpace + wrd.ctesting + bas.cSpace + wrd.cframework + bas.cDot;
// Testing account credentials at rest (test page data) as well as in use (execution/debug logs) will remain confidential
export const cencryptStringMessage09 = wrd.cTesting + bas.cSpace + wrd.caccount + bas.cSpace + wrd.ccredentials + bas.cSpace + wrd.cat + bas.cSpace + wrd.crest + bas.cSpace + bas.cOpenParenthesis + wrd.ctest + bas.cSpace + wrd.cpage + bas.cSpace + wrd.cdata + bas.cCloseParenthesis + bas.cSpace + wrd.cas + bas.cSpace + wrd.cwell + bas.cSpace + wrd.cas + bas.cSpace + wrd.cin + bas.cSpace + wrd.cuse + bas.cSpace + bas.cOpenParenthesis + wrd.cexecution + bas.cForwardSlash + wrd.cdebug + bas.cSpace + wrd.clogs + bas.cCloseParenthesis + bas.cSpace + wrd.cwill + bas.cSpace + wrd.cremain + bas.cSpace + wrd.cconfidential;
// under all circumstances and usage.
export const cencryptStringMessage10 = wrd.cunder + bas.cSpace + wrd.call + bas.cSpace + wrd.ccircumstances + bas.cSpace + wrd.cand + bas.cSpace + wrd.cusage + bas.cDot;
// Make certain that the privateKey you use is the same privateKey used in the testing framework.
export const cencryptStringMessage11 = wrd.cMake + bas.cSpace + wrd.ccertain + bas.cSpace + wrd.cthat + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cprivate + wrd.cKey + bas.cSpace + wrd.cyou + bas.cSpace + wrd.cuse + bas.cSpace + wrd.cis + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csame + bas.cSpace + wrd.cprivate + wrd.cKey + bas.cSpace + wrd.cused + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ctesting + bas.cSpace + wrd.cframework + bas.cDot;
// Please enter the string to be encrypted.
export const cencryptStringMessage12 = wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cstring + bas.cSpace + wrd.cto + bas.cSpace + wrd.cbe + bas.cSpace + wrd.cencrypted + bas.cDot;
// Please enter a privateKey_publicKey to be used as a seed for the encryption process.
export const cencryptStringMessage13 = wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cprivate + wrd.cKey + bas.cUnderscore + wrd.cpublic + wrd.cKey + bas.cSpace + wrd.cto + bas.cSpace + wrd.cbe + bas.cSpace + wrd.cused + bas.cSpace + wrd.cas + bas.cSpace + bas.ca + bas.cSpace + wrd.cseed + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cencryption + bas.cSpace + wrd.cprocess + bas.cDot;
// Make certain you store the encrypted string and the public key in the testing framework page data,
export const cencryptStringMessage14 = wrd.cMake + bas.cSpace + wrd.ccertain + bas.cSpace + wrd.cyou + bas.cSpace + wrd.cstore + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cencrypted + bas.cSpace + wrd.cstring + bas.cSpace + wrd.cand + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cpublic + bas.cSpace + wrd.ckey + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ctesting + bas.cSpace + wrd.cframework + bas.cSpace + wrd.cpage + bas.cSpace + wrd.cdata + bas.cComa;
// according to the instructions in the framework documentation.
export const cencryptStringMessage15 = wrd.caccording + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cinstructions + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cframework + bas.cSpace + wrd.cdocumentation + bas.cDot;
// ERROR: Failure to encrypt string. Please file a support ticket with the Hay-CAF repo,
export const cencryptStringMessage16 = msg.cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cencrypt + bas.cSpace + wrd.cstring + bas.cDot + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.cfile + bas.cSpace + bas.ca + bas.cSpace + wrd.csupport + bas.cSpace + wrd.cticket + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cHay + bas.cDash + app_sys.cCAF + bas.cSpace + wrd.crepo + bas.cComa;
// or contact Haystacks Tech support team, repo link and contact details are provided in the Hay-CAF product documentation.
export const cencryptStringMessage17 = wrd.cor + bas.cSpace + wrd.ccontact + bas.cSpace + wrd.cHaystacks + bas.cSpace + wrd.cTech + bas.cSpace + wrd.csupport + bas.cSpace + wrd.cteam + bas.cComa + bas.cSpace + wrd.crepo + bas.cSpace + wrd.clink + bas.cSpace + wrd.cand + bas.cSpace + wrd.ccontact + bas.cSpace + wrd.cdetails + bas.cSpace + wrd.care + bas.cSpace + wrd.cprovided + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cHay + bas.cDash + app_sys.cCAF + bas.cSpace + wrd.cproduct + bas.cSpace + wrd.cdocumentation + bas.cDot;
export const cvalidEncryptString = wrd.cvalid + bas.cSpace + wrd.cencrypt + bas.cSpace + wrd.cstring; // valid encrypt string
export const cvalidPublicPrivateKey = wrd.cvalid + bas.cSpace + wrd.cpublic + bas.cDash + wrd.cprivate + bas.cSpace + wrd.ckey; // valid public-private key
export const cvalidInputData = wrd.cvalid + bas.cSpace + wrd.cinput + bas.cSpace + wrd.cdata; // valid input data
export const cencryptionSuccessful = wrd.cencryption + bas.cSpace + wrd.csuccessful; // encryption successful
// This privateKey should be combined with a publicKey that was previously uniquely generated and used for the encryption process.
export const cdecryptStringMessage01 = wrd.cThis + bas.cSpace + wrd.cprivate + wrd.cKey + bas.cSpace + wrd.cshould + bas.cSpace + wrd.cbe + bas.cSpace + wrd.ccombined + bas.cSpace + wrd.cwith + bas.cSpace + bas.ca + bas.cSpace + wrd.cpublic + wrd.cKey + bas.cSpace + wrd.cthat + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cpreviously + bas.cSpace + wrd.cuniquely + bas.cSpace + wrd.cgenerated + bas.cSpace + wrd.cand + bas.cSpace + wrd.cused + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cencryption + bas.cSpace + wrd.cprocess + bas.cDot;
// If you have the privateKey and the publicKey as well as the encrypted string,
export const cdecryptStringMessage02 = wrd.cIf + bas.cSpace + wrd.cyou + bas.cSpace + wrd.chave + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cprivate + wrd.cKey + bas.cSpace + wrd.cand + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cpublic + wrd.cKey + bas.cSpace + wrd.cas + bas.cSpace + wrd.cwell + bas.cSpace + wrd.cas + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cencrypted + bas.cSpace + wrd.cstring + bas.cComa;
// you can use this function to manually test the decryption process.
export const cdecryptStringMessage03 = wrd.cyou + bas.cSpace + wrd.ccan + bas.cSpace + wrd.cuse + bas.cSpace + wrd.cthis + bas.cSpace + wrd.cfunction + bas.cSpace + wrd.cto + bas.cSpace + wrd.cmanually + bas.cSpace + wrd.ctest + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cdecryption + bas.cSpace + wrd.cprocess + bas.cDot;
// Please enter the string to be decrypted.
export const cdecryptStringMessage04 = wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cstring + bas.cSpace + wrd.cto + bas.cSpace + wrd.cbe + bas.cSpace + wrd.cdecrypted + bas.cDot;
// Please enter the same privateKey_publicKey that was used as a seed for the encryption process.
export const cdecryptStringMessage05 = wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csame + bas.cSpace + wrd.cprivate + wrd.cKey + bas.cUnderscore + wrd.cpublic + wrd.cKey + bas.cSpace + wrd.cthat + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cused + bas.cSpace + wrd.cas + bas.cSpace + bas.ca + bas.cSpace + wrd.cseed + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cencryption + bas.cSpace + wrd.cprocess + bas.cDot;
// Make certain the decrypted string matches with the original string that you encrypted.
export const cdecryptStringMessage06 = wrd.cMake + bas.cSpace + wrd.ccertain + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cdecrypted + bas.cSpace + wrd.cstring + bas.cSpace + wrd.cmatches + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cthe + bas.cSpace + wrd.coriginal + bas.cSpace + wrd.cstring + bas.cSpace + wrd.cthat + bas.cSpace + wrd.cyou + bas.cSpace + wrd.cencrypted + bas.cDot;
// You are responsible to verify and confirm that the encryption and decryption is working successfully with the correct data.
export const cdecryptStringMessage07 = wrd.cYou + bas.cSpace + wrd.care + bas.cSpace + wrd.cresponsible + bas.cSpace + wrd.cto + bas.cSpace + wrd.cverify + bas.cSpace + wrd.cand + bas.cSpace + wrd.cconfirm + bas.cSpace + wrd.cthat + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cencryption + bas.cSpace + wrd.cand + bas.cSpace + wrd.cdecryption + bas.cSpace + wrd.cis + bas.cSpace + wrd.cworking + bas.cSpace + wrd.csuccessfully + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ccorrect + bas.cSpace + wrd.cdata + bas.cDot;
// ERROR: Failure to decrypt the string. Please file a support ticket with the Hay-CAF repo,
export const cdecryptStringMessage08 = msg.cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cdecrypt + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cstring + bas.cDot + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.cfile + bas.cSpace + bas.ca + bas.cSpace + wrd.csupport + bas.cSpace + wrd.cticket + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cHay + bas.cDash + app_sys.cCAF + bas.cSpace + wrd.crepo + bas.cComa;

// SUCCESS Messages
export const cconfigurationSettingSuccessfullyChanged = bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.csetting + bas.cSpace + wrd.csuccessfully + bas.cSpace + wrd.cchanged + bas.cDot; // configuration setting successfully changed.
export const cSuccessSetBoilerPlateTestPathAndFileNameMessage = msg.cSUCCESS_Colon + app_cfg.cboilerPlateTestPathAndFileName + cconfigurationSettingSuccessfullyChanged; // SUCCESS: boilerPlateTestPathAndFileName configuration setting successfully changed.
export const cSuccessSetRootTestFolderPathMessage = msg.cSUCCESS_Colon + app_cfg.crootTestFolderPath + cconfigurationSettingSuccessfullyChanged; // SUCCESS: rootTestFolderPath configuration setting successfully changed.
export const cSuccessSetDefaultTestBehaviorMessage = msg.cSUCCESS_Colon + app_cfg.cdefaultRunAllTests + cconfigurationSettingSuccessfullyChanged; // SUCCESS: defaultRunAllTests configuration setting successfully changed.
export const cSuccessSetSlowExecutionMessage = msg.cSUCCESS_Colon + app_cfg.cslowExecution + cconfigurationSettingSuccessfullyChanged; // SUCCESS: slowExecution configuration setting successfully changed.
export const cSuccessSetMultiTestExecutionMessage = msg.cSUCCESS_Colon + app_cfg.cmultiTestExecution + cconfigurationSettingSuccessfullyChanged; // SUCCESS: multiTestExecution configuration setting successfully changed.
export const cSuccessSetBrowsersListMessage = msg.cSUCCESS_Colon + app_cfg.clistOfBrowsers + cconfigurationSettingSuccessfullyChanged; // SUCCESS: listOfBrowsers configuration setting successfully changed.
export const cSuccessSetExecutionEngineMessage = msg.cSUCCESS_Colon + app_cfg.cexecutionDriverEngine + cconfigurationSettingSuccessfullyChanged; // SUCCESS: executionDriverEngine configuration setting successfully changed.
export const cSuccessSetEnableReporterConfigurationMessage = msg.cSUCCESS_Colon + app_cfg.cenableReporter + cconfigurationSettingSuccessfullyChanged; // SUCCESS: enableReporter configuration setting successfully changed.
export const cSuccessSetReportPathConfigurationMessage = msg.cSUCCESS_Colon + app_cfg.creportPath + cconfigurationSettingSuccessfullyChanged; // SUCCESS: reportPath configuration setting successfully changed.
export const cSuccessSetChildProcessLimitTimeMessage = msg.cSUCCESS_Colon + app_cfg.cchildProcessLimitTime + cconfigurationSettingSuccessfullyChanged; // SUCCESS: childProcessLimitTime configuration setting successfully changed.
export const cSuccessSetCmdTypeMessage = msg.cSUCCESS_Colon + app_cfg.ccmdType + cconfigurationSettingSuccessfullyChanged; // SUCCESS: cmdType configuration setting successfully changed.
export const cExitingChildProcess = bas.cCarRetNewLin + wrd.cExiting + bas.cSpace + wrd.cchild + bas.cSpace + wrd.cprocess + bas.cDot; // Exiting child process.