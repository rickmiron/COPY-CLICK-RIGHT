chrome.runtime.onInstalled.addListener(function(){
  console.log("La extensión se ha instalado.");
});
chrome.storage.local.set({'switch0_0':false},function(){
});
var miarray=[];
chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
    if (message.type==='*GET0DATA*') {
      sendResponse({message:"Hello",value0_0:miarray});
    }
    else if(message.href0_0){
      miarray.push(message.href0_0);
      chrome.action.setIcon({ path: "c32v.png" });
      setTimeout(() => {
        chrome.action.setIcon({ path: "c32.png" });
      }, 500); // Cambia el ícono de vuelta después de 3 segundos
    }else if(message.href0_0==0){
      miarray.length=0;
    }
});
/**
 * Tracks when a service worker was last alive and extends the service worker
 * lifetime by writing the current time to extension storage every 20 seconds.
 * You should still prepare for unexpected termination - for example, if the
 * extension process crashes or your extension is manually stopped at
 * chrome://serviceworker-internals. 
 */
let heartbeatInterval;
async function runHeartbeat() {
  //await chrome.storage.local.set({ 'last-heartbeat': new Date().getTime() });
  await chrome.storage.local.set({'xizix':false});
}
/**
 * Starts the heartbeat interval which keeps the service worker alive. Call
 * this sparingly when you are doing work which requires persistence, and call
 * stopHeartbeat once that work is complete.
 */
async function startHeartbeat() {
  // Run the heartbeat once at service worker startup.
  runHeartbeat().then(() => {
    // Then again every 20 seconds.
    heartbeatInterval = setInterval(runHeartbeat, 10 * 1000);
  });
}
async function stopHeartbeat() {
  clearInterval(heartbeatInterval);
}
/**
 * Returns the last heartbeat stored in extension storage, or undefined if
 * the heartbeat has never run before.
 */
async function getLastHeartbeat() {
  return (await chrome.storage.local.get('last-heartbeat'))['last-heartbeat'];
}
startHeartbeat();