/**
 * @file application.system.constants.js
 * @module application.system.constants
 * @description A file to hold all of the client application system constants.
 * So none of the constants in this file should be generic/system/framework constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2023/03/30
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {bas, elm, gen, phn, num, sys, unt, wrd} = hayConst;

// hay-CAF system constants
export const cbrowserName = wrd.cbrowser + wrd.cName; // browserName

// Constants Validation
export const cresolvedConstantsPath_Application = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cApplication; // resolvedConstantsPath_Application
export const capplicationBusinessConstantsValidation = wrd.capplication + wrd.cBusiness + wrd.cConstants + wrd.cValidation; // applicationBusinessConstantsValidation
export const capplicationCommandConstantsValidation = wrd.capplication + wrd.cCommand + wrd.cConstants + wrd.cValidation; // applicationCommandConstantsValidation
export const capplicationConfigurationConstantsValidation = wrd.capplication + wrd.cConfiguration + wrd.cConstants + wrd.cValidation; // applicationConfigurationConstantsValidation
export const capplicationConstantsValidation = wrd.capplication + wrd.cConstants + wrd.cValidation; // applicationConstantsValidation
export const capplicationMessageConstantsValidation = wrd.capplication + wrd.cMessage + wrd.cConstants + wrd.cValidation; // applicationMessageConstantsValidation
export const capplicationSystemConstantsValidation = wrd.capplication + wrd.cSystem + wrd.cConstants + wrd.cValidation; // applicationSystemConstantsValidation

// Filenames
export const capplication_business_constants_js = wrd.capplication + bas.cDot + wrd.cbusiness + bas.cDot + wrd.cconstants + gen.cDotjs; // application.business.constants.js
export const capplication_command_constants_js = wrd.capplication + bas.cDot + wrd.ccommand + bas.cDot + wrd.cconstants + gen.cDotjs; // application.command.constants.js
export const capplication_configuration_constants_js = wrd.capplication + bas.cDot + wrd.cconfiguration + bas.cDot + wrd.cconstants + gen.cDotjs; // application.configuration.constants.js
export const capplication_constants_js = wrd.capplication + bas.cDot + wrd.cconstants + gen.cDotjs; // application.constants.js
export const capplication_message_constants_js = wrd.capplication + bas.cDot + wrd.cmessage + bas.cDot + wrd.cconstants + gen.cDotjs; // application.message.constants.js
export const capplication_system_constants_js = wrd.capplication + bas.cDot + wrd.csystem + bas.cDot + wrd.cconstants + gen.cDotjs; // application.system.constants.js

// Framework
export const cCAFfeinated = bas.cCA + bas.cFf + bas.cei + bas.cna + phn.cted; // CAFfeinated

// Test Drivers
// NOTE: At some point in the future hay-CAF will transition to using hayD-CAF rather than our current system.
// Then we can call test scripts using Playwright, Cypress, NightwatchJS, WebDriverIO, Appium and TestCafe.
// But for now I'm going to hard-code this to just using testcafe, because it's what we have, and it's what we can use.
// However, we will add them here so the system is ready to support them once we do finally get around to building our next generation test execution framework.
export const ctestcafe = wrd.ctest + wrd.ccafe; // testcafe
export const cplaywright = wrd.cplay + wrd.cwright; // playwright
export const cpuppeteer = wrd.cpup + wrd.cpet + phn.ceer; // puppeteer
export const ccypress = wrd.ccypress; // cypress
export const cselenium = elm.cselenium; // selenium
export const cwebdriver = wrd.cweb + wrd.cdriver; // webdriver
export const cappium = wrd.capp + phn.cium; // appium
export const cnightwatch = wrd.cnight + wrd.cwatch; // nightwatch
export const cvalidExecutionEngines = ctestcafe + bas.cComa + cplaywright + bas.cComa + cpuppeteer + bas.cComa + cselenium + bas.cComa + cwebdriver + bas.cComa + cappium; // testcafe,playwright,selenium,webdriver,appium
export const cslowExe = wrd.cslow + gen.cExe; // slowExe
export const ctestName = wrd.ctest + wrd.cName; // testName
export const cCAF = bas.cCA + bas.cF; // CAF

// Commands & Command Types
export const cvalidCommandTypes = sys.cdos + bas.cComa + sys.ccmd + bas.cComa + sys.cbash + bas.cComa + sys.cpowershell; // dos,cmd,bash,powershell
export const cdashNoExit = bas.cDash + wrd.cNo + wrd.cExit; // -NoExit
export const cdashNoProfile = bas.cDash + wrd.cNo + wrd.cProfile; // -NoProfile
export const cdashExecutionPolicy = bas.cDash + wrd.cExecution + wrd.cPolicy; // -ExecutionPolicy
export const cInvokeDashExpression = wrd.cInvoke + bas.cDash + wrd.cExpression; // Invoke-Expression
export const cdashCommand = bas.cDash + wrd.cCommand; // -Command
export const cSetDashLocation = wrd.cSet + bas.cDash + wrd.cLocation; // Set-Location
export const cDosBatAndStartWait = bas.cSpace + bas.cAndPersand.repeat(2) + bas.cSpace + wrd.cstart + bas.cSpace + bas.cForwardSlash + wrd.cwait + bas.cSpace; // && start /wait 
export const cStartDashSleep = wrd.cStart + bas.cDash + wrd.cSleep; // Start-Sleep
export const cDashSeconds = bas.cDash + unt.cSeconds; // -Seconds
export const cClearDashHost = wrd.cClear + bas.cDash + wrd.cHost; // Clear-Host
export const cosascript = bas.cos + bas.ca + wrd.cscript; // osascript

// Darwin Script Contents lines
export const cDarwinScriptContentLine1 = bas.cHash + bas.cExclamation + bas.cForwardSlash + gen.cusr + bas.cForwardSlash + gen.cbin + bas.cForwardSlash + gen.cenv + bas.cSpace + sys.cbash + bas.cCarRetNewLin; // #!/usr/bin/env bash
export const cDarwinScriptContentLine2 = cosascript + bas.cSpace + bas.cDash + bas.ce + bas.cSpace + bas.cSingleQuote + wrd.ctell + bas.cSpace + wrd.capplication + bas.cSpace + bas.cDoubleQuote + wrd.cTerminal + bas.cDoubleQuote + bas.cCarRetNewLin; // osascript -e 'tell application "Terminal"
export const cDarwinScriptContentLine3 = wrd.cif + bas.cSpace + wrd.cnot + bas.cSpace + bas.cOpenParenthesis + wrd.cexists + bas.cSpace + wrd.cwindow + bas.cSpace + num.c1 + bas.cCloseParenthesis + bas.cSpace + wrd.cthen + bas.cSpace + wrd.creopen + bas.cCarRetNewLin; // if not (exists window 1) then reopen
export const cDarwinScriptContentLine4 = wrd.cactivate + bas.cCarRetNewLin; // activate
export const cDarwinScriptContentPowershellLineA = wrd.cdo + bas.cSpace + wrd.cscript + bas.cSpace + bas.cDoubleQuote + wrd.cclear + bas.cSpace + bas.cDash + bas.cx + bas.cSemiColon + bas.cSpace + sys.cpwsh + bas.cSpace + cdashNoExit + bas.cSpace + cdashCommand + bas.cSpace; // do script "clear -x; pwsh -NoExit -Command
export const cDarwinScriptContentBashLineA = wrd.cdo + bas.cSpace + wrd.cscript + bas.cSpace + bas.cDoubleQuote + wrd.cclear + bas.cSpace + bas.cDash + bas.cx + bas.cSemiColon + bas.cSpace; // do script "clear -x;
export const cDarwinScriptContentLine5B = bas.cDoubleQuote + bas.cSpace + wrd.cin + bas.cSpace + wrd.cwindow + bas.cSpace + num.c1 + bas.cCarRetNewLin; // " in window 1
export const cDarwinScriptContentLine6 = wrd.cend + bas.cSpace + wrd.ctell + bas.cSingleQuote; // end tell'

// Miscellaneous
export const cSpawnedProcess = wrd.cSpawned + wrd.cProcess; // SpawnedProcess
export const csocketsServer = wrd.csockets + wrd.cServer; // socketsServer
export const cchildProcess = wrd.cchild + wrd.cProcess; // childProcess