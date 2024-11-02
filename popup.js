document.addEventListener('DOMContentLoaded',function() {
  chrome.runtime.sendMessage({type:'*GET0DATA*'},(response)=>{
    if(response){
      const href=response.value0_0;
      document.getElementById('links').value=href.join('\n');
    }
  });
});

let checkbox=document.getElementById('elcheck');

chrome.storage.local.get('switch0_0',function(data){
    checkbox.checked=data.switch0_0;
});

checkbox.addEventListener('click',function(){
    chrome.storage.local.set({'switch0_0':checkbox.checked},function(){
    });
});

document.getElementById('elcopia').addEventListener('click',function(){
  const linksText=document.getElementById('links').value
  document.getElementById('elcopia').textContent='copiado'
  //navigator.clipboard.writeText(linksText)
  navigator.clipboard.write([new ClipboardItem({'text/plain':new Blob([linksText],{type:'text/plain'})})])
  .then(()=>{
    setTimeout(()=>{
      document.getElementById('elcopia').textContent='copia links'
    },2000);
  });
});

document.getElementById('elborra').addEventListener('click',function(){
  chrome.runtime.sendMessage({href0_0:0});
  document.getElementById('links').value="";
});