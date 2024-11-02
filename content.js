let menux0_0=false;
chrome.storage.local.get('switch0_0',function(data){menux0_0=data.switch0_0||false;})
chrome.storage.onChanged.addListener((changes,areaName)=>{
    if(changes.switch0_0){menux0_0=changes.switch0_0.newValue;}
});
const puntero='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMTEgMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMvPgogIDxwYXRoIGQ9Ik0gMC43MjIgMC41NTggTCAwLjg0MSAxMy4wMjQgTCA1LjAwMSAxMC4xNTkgTCAxMC4zMzYgOS4wMzUgTCAwLjcyMiAwLjU1OCBaIiBmaWxsPSIjMDA4ODAwIiBzdHlsZT0idHJhbnNmb3JtLW9yaWdpbjogMHB4IDBweDsiLz4KPC9zdmc+';
const estilo=document.createElement('style');
document.head.appendChild(estilo);
document.addEventListener('contextmenu',function(event){
    if(menux0_0){
    const link=event.target.closest('a');
    if (link) {
        event.preventDefault();
        chrome.runtime.sendMessage({href0_0:link.href});
        //link.style.cursor= `url("${puntero}"), auto`;
        estilo.innerHTML=`a { cursor: url("${puntero}"), auto; }`;
        setTimeout(()=>{estilo.innerHTML='';},250);//link.style.cursor = '';
    }}
});
console.log('Ready');