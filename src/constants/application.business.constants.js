/**
 * @file application.business.constants.js
 * @module application.business.constants
 * @description A file to hold all of the client application business rules constants.
 * So none of the constants in this file should be generic/system/framework constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2023/03/30
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {wrd, gen} = hayConst;

// ********************************
// hay-CAF rules in order
// ********************************
export const cbuildArrayOfTestNames = wrd.cbuild + wrd.cArray + wrd.cOf + wrd.cTest + wrd.cNames; // buildArrayOfTestNames
export const cexecuteTestCommand = wrd.cexecute + wrd.cTest + wrd.cCommand; // executeTestCommand
export const cspawnCmdProcess = wrd.cspawn + gen.cCmd + wrd.cProcess; // spawnCmdProcess