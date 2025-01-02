/**
 * @file application.system.constants.validation.js
 * @module application.system.constants.validation
 * @description Contains all validations for application system constants.
 * @requires module:application.system.constants
 * @author Seth Hollingsead
 * @date 2023/03/30
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_sys from '../../constants/application.system.constants.js';

/**
 * @function applicationSystemConstantsValidation
 * @description Initializes the application system constants validation data objects array.
 * @return {array<object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2023/03/30
 */
export const applicationSystemConstantsValidation = [
  // Hay-CAF system constants
  {Name: 'cbrowserName', Actual: app_sys.cbrowserName, Expected: 'browserName'},

  // Constants Validation
  {Name: 'cresolvedConstantsPath_Application', Actual: app_sys.cresolvedConstantsPath_Application, Expected: 'resolvedConstantsPath_Application'},
  {Name: 'capplicationBusinessConstantsValidation', Actual: app_sys.capplicationBusinessConstantsValidation, Expected: 'applicationBusinessConstantsValidation'},
  {Name: 'capplicationCommandConstantsValidation', Actual: app_sys.capplicationCommandConstantsValidation, Expected: 'applicationCommandConstantsValidation'},
  {Name: 'capplicationConfigurationConstantsValidation', Actual: app_sys.capplicationConfigurationConstantsValidation, Expected: 'applicationConfigurationConstantsValidation'},
  {Name: 'capplicationConstantsValidation', Actual: app_sys.capplicationConstantsValidation, Expected:  'applicationConstantsValidation'},
  {Name: 'capplicationMessageConstantsValidation', Actual: app_sys.capplicationMessageConstantsValidation, Expected: 'applicationMessageConstantsValidation'},
  {Name: 'capplicationSystemConstantsValidation', Actual: app_sys.capplicationSystemConstantsValidation, Expected: 'applicationSystemConstantsValidation'},

  // Filenames
  {Name: 'capplication_business_constants_js', Actual: app_sys.capplication_business_constants_js, Expected: 'application.business.constants.js'},
  {Name: 'capplication_command_constants_js', Actual: app_sys.capplication_command_constants_js, Expected: 'application.command.constants.js'},
  {Name: 'capplication_configuration_constants_js', Actual: app_sys.capplication_configuration_constants_js, Expected: 'application.configuration.constants.js'},
  {Name: 'capplication_constants_js', Actual: app_sys.capplication_constants_js, Expected: 'application.constants.js'},
  {Name: 'capplication_message_constants_js', Actual: app_sys.capplication_message_constants_js, Expected: 'application.message.constants.js'},
  {Name: 'capplication_system_constants_js', Actual: app_sys.capplication_system_constants_js, Expected: 'application.system.constants.js'},

  // Framework
  {Name: 'cCAFfeinated', Actual: app_sys.cCAFfeinated, Expected: 'CAFfeinated'},

  // Test Drivers
  // NOTE: At some point in the future hay-CAF will transition to using hayD-CAF rather than our current system.
  // Then we can call test scripts using Playwright, Cypress, NightwatchJS, WebDriverIO, Appium and TestCafe.
  // But for now I'm going to hard-code this to just using testcafe, because it's what we have, and it's what we can use.
  // However, we will add them here so the system is ready to support them once we do finally get around to building our next generation test execution framework.
  {Name: 'ctestcafe', Actual: app_sys.ctestcafe, Expected: 'testcafe'},
  {Name: 'cplaywright', Actual: app_sys.cplaywright, Expected: 'playwright'},
  {Name: 'ccypress', Actual: app_sys.ccypress, Expected: 'cypress'},
  {Name: 'cselenium', Actual: app_sys.cselenium, Expected: 'selenium'},
  {Name: 'cwebdriver', Actual: app_sys.cwebdriver, Expected: 'webdriver'},
  {Name: 'cappium', Actual: app_sys.cappium, Expected: 'appium'},
  {Name: 'cnightwatch', Actual: app_sys.cnightwatch, Expected: 'nightwatch'},
  {Name: 'cvalidExecutionEngines', Actual: app_sys.cvalidExecutionEngines, Expected: 'testcafe,playwright,selenium,webdriver,appium'},
  {Name: 'cslowExe', Actual: app_sys.cslowExe, Expected: 'slowExe'},
  {Name: 'ctestName', Actual: app_sys.ctestName, Expected: 'testName'},
  {Name: 'cCAF', Actual: app_sys.cCAF, Expected: 'CAF'},

  // Commands & Command Types
  {Name: 'cvalidCommandTypes', Actual: app_sys.cvalidCommandTypes, Expected: 'dos,cmd,bash,powershell'},
  {Name: 'cdashNoExit', Actual: app_sys.cdashNoExit, Expected: '-NoExit'},
  {Name: 'cdashNoProfile', Actual: app_sys.cdashNoProfile, Expected: '-NoProfile'},
  {Name: 'cdashExecutionPolicy', Actual: app_sys.cdashExecutionPolicy, Expected: '-ExecutionPolicy'},
  {Name: 'cInvokeDashExpression', Actual: app_sys.cInvokeDashExpression, Expected: 'Invoke-Expression'},
  {Name: 'cdashCommand', Actual: app_sys.cdashCommand, Expected: '-Command'},
  {Name: 'cSetDashLocation', Actual: app_sys.cSetDashLocation, Expected: 'Set-Location'},
  {Name: 'cDosBatAndStartWait', Actual: app_sys.cDosBatAndStartWait, Expected: ' && start /wait '},
  {Name: 'cStartDashSleep', Actual: app_sys.cStartDashSleep, Expected: 'Start-Sleep'},
  {Name: 'cDashSeconds', Actual: app_sys.cDashSeconds, Expected: '-Seconds'},
  {Name: 'cClearDashHost', Actual: app_sys.cClearDashHost, Expected: 'Clear-Host'},
  {Name: 'cosascript', Actual: app_sys.cosascript, Expected: 'osascript'},

  // Darwin Script Contents lines
  {Name: 'cDarwinScriptContentLine1', Actual: app_sys.cDarwinScriptContentLine1, Expected: '#!/usr/bin/env bash\r\n'},
  {Name: 'cDarwinScriptContentLine2', Actual: app_sys.cDarwinScriptContentLine2, Expected: 'osascript -e \'tell application "Terminal"\r\n'},
  {Name: 'cDarwinScriptContentLine3', Actual: app_sys.cDarwinScriptContentLine3, Expected: 'if not (exists window 1) then reopen\r\n'},
  {Name: 'cDarwinScriptContentLine4', Actual: app_sys.cDarwinScriptContentLine4, Expected: 'activate\r\n'},
  {Name: 'cDarwinScriptContentPowershellLineA', Actual: app_sys.cDarwinScriptContentPowershellLineA, Expected: 'do script "clear -x; pwsh -NoExit -Command '},
  {Name: 'cDarwinScriptContentBashLineA', Actual: app_sys.cDarwinScriptContentBashLineA, Expected: 'do script "clear -x; '},
  {Name: 'cDarwinScriptContentLine5B', Actual: app_sys.cDarwinScriptContentLine5B, Expected: '" in window 1\r\n'},
  {Name: 'cDarwinScriptContentLine6', Actual: app_sys.cDarwinScriptContentLine6, Expected: 'end tell\''},

  // Miscellaneous
  {Name: 'cSpawnedProcess', Actual: app_sys.cSpawnedProcess, Expected: 'SpawnedProcess'},
  {Name: 'csocketsServer', Actual: app_sys.csocketsServer, Expected: 'socketsServer'},
  {Name: 'cchildProcess', Actual: app_sys.cchildProcess, Expected: 'childProcess'}
];