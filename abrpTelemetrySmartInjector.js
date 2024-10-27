//
// activate sending and then launch an endless loop triggering a ticker.10 notice
// every 10 seconds
//

import PubSub from 'pubsub-js'
import {info, onetime, send,sendTelemetryIfNecessary,validateUsrAbrpConfig} from './abrp.js'

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

console.log('starting...');
if (validateUsrAbrpConfig()) {
 while(true){
   try {
     sendTelemetryIfNecessary();
   } catch (err) {
     console.err(err);
   }
   await sleep(1000)
 }
} else {
  console.log('config invalid. aborting...');
}

console.log('finished');
