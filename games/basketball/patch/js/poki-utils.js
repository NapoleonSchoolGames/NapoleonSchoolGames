document.xURL="https://poki.com/";if(typeof consoleLog=='undefined'){consoleLog=console.log}
var originalEval=eval;evalx=function(){arguments[0]=arguments[0].replace("aHR0cHM6Ly9wb2tpLmNvbS9zaXRlbG9jaw==","I3ViZzIzNQ==");arguments[0]=arguments[0].replace("'location'","'xlocation'");return originalEval.apply(this,arguments)}
navigator.sendBeacon=function(){consoleLog("--fx--navigator.sendBeacon--",arguments)}
WebSocket=function(){}
xlocation=new Proxy(location,{get:function(target,property,receiver){consoleLog("--fx--xlocation--get--property--",property);let targetObj=target[property];if(typeof targetObj=="function"){return(...args)=>target[property].apply(target,args)}else{if(property=="host"||property=="hostname"){return"localhost"}
if(property=="href"){return"https://localhost/"}
if(property=="origin"){return"https://localhost/"}
return targetObj}},set:function(target,property,receiver){consoleLog("--fx--xlocation--set--property--",property,receiver);return!0}});xwindow=new Proxy(window,{get:function(target,property,receiver){if(typeof target[property]=="function"){return(...args)=>target[property].apply(target,args)}else{if(property=="location"){return target.xlocation}
return target[property]}}})