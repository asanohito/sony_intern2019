'use strict';

let lastSystemEvent = null;
let asrListener = null;
let sensorListener = null;

function postAppRequest(message) {
  lastSystemEvent.source.postMessage({ type: "webappEvent", intent: "WEBAPP-COMMAND", slot: message }, lastEvent.origin);
}

window.addEventListener('message', function (event) {
  lastSystemEvent = event;
  if (event.data.type === 'command') {
    if (event.data.param.DomainGoal === 'WEB_COMMON-RECOGNIZE') {
      if (asrListener) {
        asrListener(event.data.param.slot);
        console.log("とれてない");
      }
    }
  } else if (event.data.type === 'sensingInfo') {
    $('#sensor').html(JSON.stringify(event.data.param.sensingEntryList[0].personInfo.attribute.position), null, 4);
    console.log("とれてます");
    
    // var r = 
    // $('#r').html(JSON.stringify(event.data.param.sensingEntryList[0].personInfo.attribute.position.r), null, 4);
    // $('#theta').html(JSON.stringify(event.data.param.sensingEntryList[0].personInfo.attribute.position.theta), null, 4);
    // $('#phi').html(JSON.stringify(event.data.param.sensingEntryList[0].personInfo.attribute.position.phi), null, 4);
    if (0 < event.data.param.sensingEntryList.length) {
      if (sensorListener) {
        sensorListener(event.data.param.sensingEntryList);
      }
    }
  }
  console.log(JSON.stringify(event.data.param.sensingEntryList[0].personInfo.attribute.position), null, 4);
  
});

function setAsrEventListener(func) {
  asrListener = func;
}

function setSensorEventListener(func) {
  sensorListener = func;
}