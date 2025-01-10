/**
 * @file socketsServer.js
 * @module socketsServer
 * @description Creates a socket server through which clients will communicate.
 * @requires module:application.constants
 * @requires module:application.message.constants
 * @requires module:application.system.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires {@link https://nodejs.dev/learn/the-nodejs-process-module|process}
 * @requires {@link https://nodejs.org/api/net|net}
 * @author Karl-Edward F.P. Jean-Mehu
 * @date 2023/12/29
 * @copyright Copyright © 2023-… by Karl-Edward F.P. Jean-Mehu. All rights reserved.
 */

// Internal imports
import * as apc from '../constants/application.constants.js';
import * as app_msg from '../constants/application.message.constants.js';
import * as app_sys from '../constants/application.system.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';
import process from 'process';
import { createServer } from 'net';

const { bas, gen, msg, num, wrd } = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));

// application.hay-CAF.childProcess.socketsServer.
const namespacePrefix = wrd.capplication + bas.cDot + apc.cApplicationName + bas.cDot + app_sys.cchildProcess + bas.cDot + baseFileName + bas.cDot;

// Host and port to which the socket connection will be listening to.
const SOCKET = {
  host: num.c127 + bas.cDot + num.c0 + bas.cDot + num.c0 + bas.cDot + num.c1, // '127.0.0.1',
  port: 3000,
};
let persistentBuffer = '';
const messageDelimiter = bas.cHash.repeat(2) + wrd.cEND + bas.cHash.repeat(2); // ##END##

/**
 * @function safeJsonParse
 * @description Safely parses socket chunks into javascript objects.
 * @param {buffer} buffer - The buffer value to be converted.
 * @return {object} A JSON object that is safely parsed from the input JSON string.
 * @author Karl-Edward FP Jean-Mehu
 * @date 2023/12/29
 */
async function safeJsonParse(buffer) {
  const functionName = safeJsonParse.name;
  let chunkString = buffer.toString(gen.cUTF8).trim();
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cbufferIs + buffer);
  let returnData = [];
  const REGEX = /\{([^{}]*)\}/g;

  // append the incoming chunkString to the persistent buffer.
  persistentBuffer += chunkString;
  // persistentBuffer after appending new chunk is now:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csafeJsonParseMessage01 + persistentBuffer);

  // Step 1: Split by messageDelimiter to identify complete messages
  let messages = persistentBuffer.split(messageDelimiter);
  // Messages array after messageDelimiter split:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csafeJsonParseMessage02 + JSON.stringify(messages));

  // Step 2: Process each message that appears complete
  for (let i = 0; i < messages.length - 1; i++) {
    // BEGIN: i-th iterator
    await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_ithIteration + i);
    const message = messages[i].trim();
    await haystacks.consoleLog(namespacePrefix, functionName, msg.cmessageIs + message);
    if (message.length > 0) {
      try {
        // Attempt to parse as JSON; if successful, add to returnData
        const json = JSON.parse(message);
        // Successfully parsed json data is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csafeJsonParseMessage03 + JSON.stringify(json));
        returnData.push(json); // Add fully formed JSON objects
      } catch (error) {
        // If JSON parsing fails, use REGEX to extract valid JSON fragments
        // JSON parse error at iteration
        // attempting REGEX extraction: 
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csafeJsonParseMessage04 + i + app_msg.csafeJsonParseMessage05 + error.message);
        // Error-causing message content:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csafeJsonParseMessage06 + message);

        const tempData = message.matchAll(REGEX);
        // Attempting REGEX extraction for matches in error-causing message.
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csafeJsonParseMessage07);
        // tempData is:
        await haystacks.consoleLog(namespacePrefix, functionName, msg.ctempDataIs + tempData);
        for (const match of tempData) {
          // REGEX match string is:
          await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csafeJsonParseMessage08 + match);
          try {
            returnData.push(JSON.parse(match[0]));
            // Successfully parsed REGEX JSON fragment
            await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csafeJsonParseMessage09);
          } catch (e) {
            // Skipping unparsable JSON fragment:
            await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csafeJsonParseMessage10 + match[0]);
          }
        } // End-for (const match of tempData)
      } // End-catch (error)
    } // End-if (message.length > 0)
    await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_ithIteration + i);
  } // End-for (let i = 0; i < message.length - 1; i++)

  // Step 3: Retain any unprocessed part (last item) in the persistent buffer for next call.
  persistentBuffer = messages[messages.length - 1];
  // persistentBuffer AFTER processing is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csafeJsonParseMessage11 + persistentBuffer);

  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs +  JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function messageContainsTestResult
 * @description Checks to see if the message contains all of the string requirements
 * that would indicate the message contains a test result of some kind.
 * @param {string} message The message that should be evaluated if it contains some kind of a test result.
 * @returns {boolean} True or False to indicate if the message contains a test result or not.
 * @author Seth Hollingsead
 * @date 2024/02/20
 */
async function messageContainsTestResult(message) {
  const functionName = messageContainsTestResult.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cmessageIs + message);
  let returnData = false;
  if (message) {
    if (message.includes(app_msg.cTestResultsLog) && message.includes(wrd.cTest + bas.cUnderscore) && 
    (message.toLowerCase().includes(wrd.cpass) ||
    message.toLowerCase().includes(wrd.cwarning) ||
    message.toLowerCase().includes(wrd.cfail))) {
      returnData = true;
    }
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs +  returnData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getTestResultFromMessage
 * @description Parses the input message to determine what the test result value should be.
 * valid test result values are: pass, warning, fail
 * @param {string} message The message that should be parsed into a test result.
 * @returns {string} The test result, pass, warning or fail.
 * @author Seth Hollingsead
 * @date 2024/02/20
 */
async function getTestResultFromMessage(message) {
  const functionName = getTestResultFromMessage.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cmessageIs + message);
  let returnData = wrd.cfail;
  if (message) {
    if (message.toLowerCase().includes(wrd.cpass)) { returnData = wrd.cpass; }
    else if (message.toLowerCase().includes(wrd.cwarning)) { returnData = wrd.cwarning; }
    else if (message.toLowerCase().includes(wrd.cfail)) { returnData = wrd.cfail; }
    else { returnData = wrd.cfail; } // For completeness
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs +  returnData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

// Messages queue
const createMessageQueue = (state = { items: [] }) => ({
    items: state.items || [],

    async enqueue(item) {
      return new Promise(resolve => {
        if (!Array.isArray(item)) item = [item];
        this.items = [...this.items, ...item];
        resolve();
      }) },

    async dequeue() {
      const [item, ...rest] = this.items;
      this.items = rest;
      return new Promise(resolve => resolve(item || null));
    },

    async isEmpty() {
      return new Promise(resolve => resolve(this.items.length === 0));
    },

    async size() {
      return new Promise(resolve => resolve(this.items.length));
    }
});

/**
 * @function socketsServer
 * @description manages the socket connection and communication.
 * @author Karl-Edward FP Jean-Mehu
 * @date 2023/12/29
 */
export default function socketsServer() {
  const functionName = socketsServer.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);

  let server = null;

  try {
    // Flag to check if there is an active connection
    let isConnected = false;

    // Test result from client
    let testResult = null;

    // Check wether result was retrieved
    let testResultRetrieved = false;

    // Message queue
    let messageQueue = createMessageQueue();

    // Checks if the server has ended
    let serverHasEnded = false;

    // Async proscess write
    const processWriteAsync = async (msg) => new Promise(resolve => {
      process.stdout.write(msg);
      resolve();
    });

    // Banner log
    const bannerLog = async (eventName, cb) => {
      console.log('\r\n');
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);
      await cb();
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
      console.log('\r\n');
    }

    // Handles actions taken when an error occurs on the server.
    const handleError = async (error, serverInstance) => {
      const eventName = bas.cDot + wrd.cerror;
      await bannerLog(eventName, async () => {
        serverHasEnded = true;
        await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cerrorIs + error);
        if (error[wrd.ccode] === gen.cEADDRINUSE && !isConnected){
          await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
          return;
        } else if (error[wrd.ccode] !== gen.cECONNRESET) {
          // Error on socket server:
          console.error(app_msg.cErrorSocketServerMessage01 + error.message);
        } else if (error[wrd.ccode] === gen.cECONNRESET) {
          console.log(gen.cECONNRESET + bas.cExclamation.repeat(4));
          serverInstance.close();
        }
      });
      return;
    };

    // Handles actions to take when server begins to listen for connections from clients.
    const handleListening = async () => {
      const eventName = bas.cDot + wrd.clistening;
      await bannerLog(eventName, async () => {
        console.log(bas.cCarRetNewLin + wrd.cListening + bas.cDot.repeat(3) + bas.cCarRetNewLin);
      });
    };

    // Handles actions to take when a client is connected.
    const handleConnection = async () => {
      const eventName = bas.cDot + wrd.cconnection;
      await bannerLog(eventName, async () => {
        isConnected = true;
        console.log(bas.cCarRetNewLin + app_msg.cServerConnected + bas.cCarRetNewLin );
      });
    };

    const test = async (json, childEventName) => {
      if (json[wrd.cmessage]){
        const { message, timestamp } = json;

        // This is the ECHO from the testing framework back to the hay-CAF window.
        let logMessage = timestamp + bas.cColon + bas.cSpace + message;
        console.log(logMessage);
        // Again echo this to the haystacks.consoleLog, because it can be logged to the log file from there.
        haystacks.consoleLog(namespacePrefix, functionName + childEventName, logMessage);

        // Terminates child processes if the "end" message is received
        const str = message.split(bas.cSpace)[0].toLowerCase();
        if (str === wrd.cend) {
          // Sending termination cmd to clients...
          haystacks.consoleLog(namespacePrefix, functionName + childEventName, app_msg.csendingTerminationCmdToClients);
          if (!testResultRetrieved) {
            // Test failed prematurely!
            console.log(bas.cCarRetNewLin + app_msg.cTestFailedPrematurely + bas.cExclamation + bas.cCarRetNewLin);
            server.close();
          }
        }
      }
    }

    // Handles incoming messages as they come in from a socket client.
    const handleData = async (chunk, socket = null) => {
      const eventName = bas.cDot + wrd.cdata;
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, app_msg.cchunkIs + JSON.stringify(chunk));
      try {
        const json = await safeJsonParse(chunk.toString().trim());
        // Safe Parsed JSON data:
        await haystacks.consoleLog(namespacePrefix, functionName + eventName, app_msg.csocketServerDataEventHandlerMessage01 + JSON.stringify(json));

        if (json) {
          let hasMessage = false;

          if (Array.isArray(json)) {
            // JSON is an array with length:
            await haystacks.consoleLog(namespacePrefix, functionName + eventName, app_msg.csocketServerDataEventHandlerMessage02 + json.length);
            for (const obj1 of json) {
              // Log the current object being processed
              // Processing array item:
              await haystacks.consoleLog(namespacePrefix, functionName + eventName, app_msg.csocketServerDataEventHandlerMessage03 + JSON.stringify(obj1));

              const objMessage = obj1[wrd.cmessage];
              // Extracted message from array item:
              await haystacks.consoleLog(namespacePrefix, functionName + eventName, app_msg.csocketServerDataEventHandlerMessage04 + objMessage);

              if (objMessage?.includes(app_msg.cTestResultsLog) && objMessage?.includes(wrd.cTest + bas.cUnderscore) && 
              (objMessage?.toLowerCase()?.includes(wrd.cpass) ||
              objMessage?.toLowerCase()?.includes(wrd.cwarning) ||
              objMessage?.toLowerCase()?.includes(wrd.cfail))) {
                // Identified test result in array item.
                await haystacks.consoleLog(namespacePrefix, functionName + eventName, app_msg.csocketServerDataEventHandlerMessage05);
                if (objMessage?.toLowerCase()?.includes(wrd.cpass)) { testResult = wrd.cpass; }
                else if (objMessage?.toLowerCase()?.includes(wrd.cwarning)) { testResult = wrd.cwarning; }
                else if (objMessage?.toLowerCase()?.includes(wrd.cfail)) { testResult = wrd.cfail; }

                // Exit the loop as soon as a matching item is found
                break;
              }
            }

            hasMessage = json.every(v => v[wrd.cmessage]);
            // Result of every() check for messages:
            await haystacks.consoleLog(namespacePrefix, functionName + eventName, app_msg.csocketServerDataEventHandlerMessage06 + hasMessage);
          } else {
            // JSON is an object
            await haystacks.consoleLog(namespacePrefix, functionName + eventName, app_msg.csocketServerDataEventHandlerMessage07);
            hasMessage = json[wrd.cmessage];
            if (hasMessage) {
              // Extracted message from JSON object:
              await haystacks.consoleLog(namespacePrefix, functionName + eventName, app_msg.csocketServerDataEventHandlerMessage08 + hasMessage);
              if (hasMessage.includes(app_msg.cTestResultsLog) && hasMessage.includes(wrd.cTest + bas.cUnderscore) && 
              (hasMessage.toLowerCase().includes(wrd.cpass) ||
              hasMessage.toLowerCase().includes(wrd.cwarning) ||
              hasMessage.toLowerCase().includes(wrd.cfail))) {
                // Identified test result in JSON object.
                await haystacks.consoleLog(namespacePrefix, functionName + eventName, app_msg.csocketServerDataEventHandlerMessage09);
                if (hasMessage.toLowerCase().includes(wrd.cpass)) { testResult = wrd.cpass; }
                else if (hasMessage.toLowerCase().includes(wrd.cwarning)) { testResult = wrd.cwarning; }
                else if (hasMessage.toLowerCase().includes(wrd.cfail)) { testResult = wrd.cfail; }
              }
            } // End-if (hasMessage)
          }

          if (hasMessage) {
            // Enqueuing parsed JSON to message queue
            await haystacks.consoleLog(namespacePrefix, functionName + eventName, app_msg.csocketServerDataEventHandlerMessage10);
            await messageQueue.enqueue(json);
            // Enqueued successfully. Queue size:
            await haystacks.consoleLog(namespacePrefix, functionName + eventName, app_msg.csocketServerDataEventHandlerMessage11 + await messageQueue.size());
          }

          while(!await messageQueue.isEmpty()) {
            const {message} = await messageQueue.dequeue();
            // Dequeued message for console log:
            await haystacks.consoleLog(namespacePrefix, functionName + eventName, app_msg.csocketServerDataEventHandlerMessage12 + message);
            // Success raw chunk data:
            await haystacks.consoleLog(namespacePrefix, functionName + eventName, app_msg.csocketServerDataEventHandlerMessage13 + chunk.toString());
            console.log(message);
          }
        }
      } catch ({ message }) {
        // Failed retrieving data from client:
        console.log(bas.cCarRetNewLin + app_msg.cErrorSocketServerMessage02 + message);
        await haystacks.consoleLog(namespacePrefix, functionName + eventName, app_msg.cErrorSocketServerMessage02 + message);
        // Failed raw chunk data:
        await haystacks.consoleLog(namespacePrefix, functionName + eventName, app_msg.csocketServerDataEventHandlerMessage14 + chunk.toString());
      }
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
    };

    // Handle drain
    const handleDrain = async (socket) => {
      if (!messageQueue.isEmpty()) {
        const eventName = bas.cDot + wrd.cdrain;
        await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);
        const json = await messageQueue.dequeue();
        await test(json, eventName);
        await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
        socket.resume();
      }
    }

    // Handles actions to take when the connection closes.
    const handleClose = async () => {
      const eventName = bas.cDot + wrd.cclose;
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);

      isConnected = false;

      // Show error only if connection did not close successfully
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
      await processWriteAsync(bas.cGreaterThan);
    };

    // Gracefully exits process, when user attempts a "q" (quit) / ctrl-c.
    process.on(gen.cSIGINT, async () => {
      const eventName = bas.cDot + gen.csigint;
       await bannerLog(eventName, () => {
        isConnected = false;

        // Disconnecting gracefully
        console.log(bas.cCarRetNewLin + app_msg.cDisconnectingGracefully + bas.cCarRetNewLin);
      });
      process.exit();
    });

    // Start listening for connections
    const handleConnect = async () => {
      const eventName = bas.cDot + wrd.cconnect;
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);

      testResultRetrieved = false;
      serverHasEnded = false;

      if (!isConnected) { 
        server.listen(SOCKET.port, SOCKET.host, handleListening);
      }
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
    }

    // Stop listening and close connection
    const handleDisconnect = async () => {
      const eventName = bas.cDot + wrd.cdisconnect;
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);
      if (isConnected){
        isConnected = false;
        haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
      }
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
    }

    // Indicates the end of the server connection and properly closes server to enable smooth re-runs
    const handleEnd = async (serverInstance) => {
      const eventName = bas.cDot + wrd.cend;
      await bannerLog(eventName, async () => {
        isConnected = false;
        // Server connection has ended!
        // Message Queue:
        // console.log(app_msg.cMessageQueueColon, await messageQueue.size())
        console.log(bas.cCarRetNewLin + app_msg.cErrorSocketServerMessage03 + bas.cCarRetNewLin);
      });
      // await processWriteAsync(bas.cGreaterThan);
      // ! IMPORTANT allow re-runs
      serverHasEnded = true;
      testResult = null;
      testResultRetrieved = false
      serverInstance.close();
    }

    // After retrieving testResult
    // Ends test after a number of seconds if it has not
    // already ended
    const beginEndOfScriptCountDown = async (allottedTimeInSeconds = 20) => {
      if (testResultRetrieved) {
        await new Promise(resolve => {
          setTimeout(() => {
            // Closing...Timeout reached for end of script!
            console.log(app_msg.cClosingTimeoutEndOfScript);
            server.close();
          }, allottedTimeInSeconds * 1000);
        })
      }
    }

    // Keep checking during the given allotted time for the test result. 
    // If no value is provided or time has passed send error.
    const getTestResult = async (allottedTimeInSeconds) => {
      // console.log('calling getTestResult');
      return await new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
          // Error: The allotted time to retrieve the test result has passed. Try again later.
          reject(app_msg.cgetTestResultsError01);
        }, allottedTimeInSeconds * 1000);

        const checkResult = () => {
          if (serverHasEnded) {
            resolve(testResult || wrd.cfail);
          } else {
            if (typeof testResult === wrd.cstring && testResult.length){
              clearTimeout(timeoutId);
              testResultRetrieved = true;
              beginEndOfScriptCountDown();
              resolve(testResult);
            } else {
              setTimeout(checkResult, 100);
            }
          }
        }
      
        // Restart test.
        checkResult();
      });
    }

    // Return server instance
    server = createServer(async socket => {
      handleConnection();
      socket.on(wrd.cdata, async chunk => { 
        socket.emit(wrd.cdisconnect);
          await handleData(chunk, socket);
      }); 
      socket.on(wrd.cerror, async (error) => { await handleError(error, server); }); 
      socket.on(wrd.cdisconnect, handleDisconnect);
      socket.on(wrd.cclose, async () => { await handleClose(); }); 
      socket.on(wrd.cend, async () => { await handleEnd(server) }); 
      socket.on(wrd.cdrain, async () => { await handleDrain(socket) }); 
      socket.on(wrd.cpause, () => {
        // Client has paused due to backpressure.
        console.log(app_msg.cClientPausedBackpressure);
      }); 
    });

    server.getTestResult = getTestResult;
    server.connect = handleConnect;
    server.terminate = async () => {
      await new Promise(resolve => {
        server.close();
        resolve();
      });
    }; 

    // invoke optional command if 
    server.serverHasEndedCallback = async (callback, allottedTimeInSeconds = 5) => {
      await new Promise((resolve) => {
        // Calling serverHasEndedCallback!!
        console.log(app_msg.cCallingServerHasEndedCallbackMessage01);
        const timeoutId = setTimeout(() => {
          // doing bad!!
          console.log(app_msg.cCallingServerHasEndedCallbackMessage02)
          // Test has failed if nothing happened in the allottedTimeInSeconds!
          resolve(callback(true));
        }, allottedTimeInSeconds * 1000);

        // Keep checking if the server has ended
        // return status whether result was returned via callback
        const checkStatus = () => {
          if (serverHasEnded && testResultRetrieved){
            clearTimeout(timeoutId);
            // test has not (yet) failed
            resolve(callback(false));
          } else {
            setTimeout(checkStatus, 100);
          }
        }
      
        // Restart check.
        checkStatus();
      });
    }

    return server;
  } catch ({ code, message }) {
    if (code == gen.cEADDRINUSE ) {
      // already in use...
      console.log(app_msg.calreadyInUse);
    } else {
      // Socket server failed:
      console.log(bas.cCarRetNewLin + app_msg.cSocketServerFailed + message);
    }
  }
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
}
