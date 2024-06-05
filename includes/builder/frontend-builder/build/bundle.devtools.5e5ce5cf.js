(window.webpackETJsonp=window.webpackETJsonp||[]).push([[0],{602:function(e,t,n){"use strict";n.r(t),n.d(t,"Devtools",(function(){return M}));var i=n(1),o=n(70),r=n(72),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.https,i=void 0!==n&&n,o=t.host,r=void 0===o?null:o,s=t.reconnect,a=void 0===s||s,u=t.reconnectInterval,l=void 0===u?1e4:u;if(c(this,e),this.host=r,this.https=i,this.version=0,!this.host)throw new Error('Devtools: You have to pass in the "host" option');this.backlog=[],this.isConnected=!1,this.ws=null,this.reconnectInterval=l,this.doReconnect=a,this.sendInitial=this.sendInitial.bind(this)}return a(e,[{key:"createSocket",value:function(){throw new Error('You have to implement a "createSocket" method')}},{key:"addListeners",value:function(){this.createSocket(),this.ws.onmessage=this.onMessage.bind(this)}},{key:"onMessage",value:function(e){}},{key:"reconnect",value:function(){var e=this;setTimeout((function(){e.init()}),this.reconnectInterval)}},{key:"init",value:function(){var e=this;this.addListeners(),this.ws.onopen=function(){e.ws.send(JSON.stringify({type:"ping"}))},this.ws.onerror=function(){},this.ws.onclose=function(){e.isConnected=!1,e.doReconnect&&(console.warn("Debugger application is not running on selected port... will reconnect automatically behind the scenes"),e.reconnect())}}},{key:"sendMessage",value:function(e){this.ws.send(e)}},{key:"sendBulkMessage",value:function(e,t){var n=JSON.stringify({type:"bulk",source:t,version:this.version,data:{messages:e}});this.sendMessage(n)}},{key:"watchExecution",value:function(e,t){var n=this;e.on("start",(function(e,i){var o=JSON.stringify({type:"executionStart",source:t,version:n.version,data:{execution:{executionId:e.id,name:e.name,staticTree:e.staticTree,datetime:e.datetime,executedBy:i&&i._execution?i._execution:null}}});n.sendExecutionMessage(o)})),e.on("end",(function(e){var i=JSON.stringify({type:"executionEnd",source:t,version:n.version,data:{execution:{executionId:e.id}}});n.latestExecutionId=e.id,n.sendExecutionMessage(i)})),e.on("pathStart",(function(e,i,o){var r=JSON.stringify({type:"executionPathStart",source:t,version:n.version,data:{execution:{executionId:i.id,functionIndex:o.functionIndex,path:e}}});n.sendExecutionMessage(r)})),e.on("functionStart",(function(e,i,o){var r=n.safeStringify({type:"execution",source:t,version:n.version,data:{execution:{executionId:e.id,functionIndex:i.functionIndex,payload:o,data:null}}});n.sendExecutionMessage(r)})),e.on("functionEnd",(function(e,i,o,s){if(!(!s||s instanceof r.a&&!s.payload)){var a=n.safeStringify({type:"executionFunctionEnd",source:t,version:n.version,data:{execution:{executionId:e.id,functionIndex:i.functionIndex,output:s instanceof r.a?s.payload:s}}});n.sendExecutionMessage(a)}})),e.on("error",(function(e,i,o){var r=JSON.stringify({type:"executionFunctionError",source:t,version:n.version,data:{execution:{executionId:i.id,functionIndex:o.functionIndex,error:{name:e.name,message:e.message,stack:e.stack,func:o.function.toString()}}}});n.sendExecutionMessage(r)}))}},{key:"safeStringify",value:function(e){var t=[];return JSON.stringify(e,(function(e,n){var i="object"===(void 0===n?"undefined":s(n))&&null!==n&&!Array.isArray(n);return i&&t.indexOf(n)>-1?"[CIRCULAR]":(i&&t.push(n),n)}))}},{key:"sendExecutionMessage",value:function(e){this.isConnected?this.sendMessage(e):this.backlog.push(e)}},{key:"sendInitial",value:function(){}},{key:"createExecutionMessage",value:function(e,t,n,i){}},{key:"sendExecutionData",value:function(e,t,n,i){var o=this.createExecutionMessage(e,t,n,i);this.sendExecutionMessage(o)}}]),e}(),l=u,d=n(603),h=n.n(d),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();!function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.trees=[],n.latestExecutionId=null,n.version="3.3.1",n.init(),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(t,e),f(t,[{key:"createSocket",value:function(){this.ws=new h.a((this.https?"wss":"ws")+"://"+this.host)}},{key:"onMessage",value:function(e){switch(JSON.parse(e.data).type){case"pong":case"ping":this.sendInitial()}}},{key:"add",value:function(e){this.trees.push(e),e.contextProviders.debugger=this.Provider(),this.watchExecution(e,"ft")}},{key:"remove",value:function(e){this.trees.splice(this.trees.indexOf(e),1),delete e.contextProviders.debugger,e.removeAllListeners("start"),e.removeAllListeners("end"),e.removeAllListeners("pathStart"),e.removeAllListeners("functionStart"),e.removeAllListeners("functionEnd"),e.removeAllListeners("error")}},{key:"removeAll",value:function(){var e=this;this.trees.reduce((function(e,t){return e.push(t),e}),[]).forEach((function(t){e.remove(t)}))}},{key:"sendInitial",value:function(){var e=JSON.stringify({type:"init",source:"ft",version:this.version});this.sendMessage(e),this.backlog.length&&(this.sendBulkMessage(this.backlog,"ft"),this.backlog=[]),this.isConnected=!0}},{key:"createExecutionMessage",value:function(e,t,n,i){var o={execution:{executionId:t.id,functionIndex:n.functionIndex,payload:i,datetime:t.datetime,data:e}};return this.safeStringify({type:"execution",source:"ft",version:this.version,data:o})}},{key:"Provider",value:function(){var e=this.sendExecutionData.bind(this);return new o.a({send:function(t){e(t,this.context.execution,this.context.functionDetails,this.context.props)},wrapProvider:function(e,t){var n=this;return Object.keys(t).reduce((function(i,o){var r=t[o];return i[o]=function(){for(var i=arguments.length,s=Array(i),a=0;a<i;a++)s[a]=arguments[a];return n.context.debugger.send({method:e+"."+o,args:s}),r.apply(t,s)},i}),{})}},{wrap:!1})}}])}(l);var p=n(17),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),g=function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,i)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(i):void 0};function y(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var x="PLACEHOLDER_INITIAL_MODEL",w="$$DEBUGGING_DATA$$",M=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.storeMutations,o=void 0===n||n,r=e.preventExternalMutations,s=void 0===r||r,a=e.warnStateProps,c=void 0===a||a,u=e.preventPropsReplacement,l=void 0!==u&&u,d=e.bigComponentsWarning,h=void 0===d?10:d,f=e.host,p=void 0===f?null:f,v=e.https,g=void 0!==v&&v,y=e.reconnect,x=void 0===y||y,w=e.reconnectInterval,M=void 0===w?5e3:w,k=e.allowedTypes,S=void 0===k?[]:k,O=e.disableDebounce,I=void 0!==O&&O;b(this,t);var E=m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{host:p,https:g,reconnect:x,reconnectInterval:M}));return E.version="5.1.1",E.debuggerWatchMap={},E.debuggerComputedMap={},E.storeMutations=o,E.preventExternalMutations=s,E.warnStateProps=c,E.preventPropsReplacement=l,E.bigComponentsWarning=h,E.nextId=0,E.mutations=[],E.initialModelString=null,E.controller=null,E.originalRunTreeFunction=null,E.isResettingDebugger=!1,E.pendingUpdates=[],E.computedState={},E.allowedTypes=[].concat("undefined"==typeof File?[]:File).concat("undefined"==typeof FileList?[]:FileList).concat("undefined"==typeof Blob?[]:Blob).concat("undefined"==typeof ImageData?[]:ImageData).concat("undefined"==typeof RegExp?[]:RegExp).concat(S||[]),E.sendInitial=E.sendInitial.bind(E),I?m(E,E):(E.sendWatchMapBatch=Object(i.f)(E.sendWatchMapBatch,50),E)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),v(t,[{key:"createSocket",value:function(){this.ws=new WebSocket((this.https?"wss":"ws")+"://"+this.host)}},{key:"remember",value:function(e){this.controller.model.set([],JSON.parse(this.initialModelString)),this.controller.run=0===e?this.originalRunTreeFunction:function(e){console.warn('The sequence "'+e+'" fired while debugger is remembering state, it was ignored')};for(var t=0;t<this.mutations.length-e;t++){var n,i=JSON.parse(this.mutations[t].data),o=i.method.split(".").pop();(n=this.controller.model)[o].apply(n,y(i.args))}this.controller.flush(!0),this.controller.emit("remember",JSON.parse(this.mutations[e].data).datetime)}},{key:"reset",value:function(){this.controller.model.set([],JSON.parse(this.initialModelString)),this.backlog=[],this.mutations=[],this.controller.flush(!0)}},{key:"onMessage",value:function(e){var t=JSON.parse(e.data);switch(t.type){case"changeModel":this.controller.model.set(t.data.path,t.data.value),this.controller.flush();break;case"remember":this.storeMutations?this.remember(t.data):console.warn("Cerebral Devtools - You tried to time travel, but you have turned of storing of mutations");break;case"reset":this.reset();break;case"pong":case"ping":this.sendInitial()}}},{key:"init",value:function(e){this.controller=e||this.controller,this.originalRunTreeFunction=this.controller.run,this.storeMutations&&(this.initialModelString=JSON.stringify(this.controller.model.get())),g(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this),e&&this.watchExecution(this.controller,"c")}},{key:"sendInitial",value:function(){var e=this,t=this.controller.model.get(),n=JSON.stringify({type:"init",source:"c",version:this.version,data:{initialModel:this.initialModelString?x:t,initialComputedState:Object.keys(this.computedState).reduce((function(t,n){return t[n]=e.computedState[n].getValue(),t}),{})}}).replace('"PLACEHOLDER_INITIAL_MODEL"',this.initialModelString);this.isResettingDebugger=!0,this.sendMessage(n),this.backlog.length&&(this.sendBulkMessage(this.backlog,"c"),this.backlog=[]),this.isResettingDebugger=!1,this.isConnected=!0,this.sendMessage(JSON.stringify({type:"watchMap",source:"c",version:this.version,data:{watchMap:this.debuggerWatchMap,computedMap:this.debuggerComputedMap,updates:[]}}))}},{key:"createExecutionMessage",value:function(e,t,n,i){var o="";this.storeMutations&&e&&"mutation"===e.type&&(o=JSON.stringify(e));var r={execution:{executionId:t.id,functionIndex:n.functionIndex,payload:i,datetime:t.datetime,data:o?w:e}};return o&&this.mutations.push({executionId:t.id,data:o}),JSON.stringify({type:"execution",source:"c",version:this.version,data:r}).replace('"$$DEBUGGING_DATA$$"',o)}},{key:"updateComputedState",value:function(e,t){this.isConnected&&this.sendMessage(JSON.stringify({type:"computedUpdate",source:"c",version:this.version,data:{path:e,value:t}}))}},{key:"registerComputedState",value:function(e,t){this.computedState[t.join(".")]=e}},{key:"updateWatchMap",value:function(e,t,n){if(n)for(var i in n)if(!t||!(i in t)){var o=this.debuggerWatchMap[i];o.splice(o.indexOf(e),1),0===o.length&&delete this.debuggerWatchMap[i]}if(t)for(var r in t)n&&r in n||(this.debuggerWatchMap[r]=this.debuggerWatchMap[r]?this.debuggerWatchMap[r].concat(e):[e])}},{key:"updateComputedMap",value:function(e,t){e instanceof p.a&&(this.debuggerComputedMap[e.name]=t.filter((function(t){return t.watcher!==e})).map((function(e){return e.watcher})))}},{key:"sendWatchMap",value:function(e,t,n,i){this.isConnected&&(this.pendingUpdates.push({start:n,duration:i,changes:t,watchers:e}),this.sendWatchMapBatch())}},{key:"sendWatchMapBatch",value:function(){this.sendMessage(JSON.stringify({type:"watchMap",source:"c",version:this.version,data:{datetime:Date.now(),watchMap:this.debuggerWatchMap,computedMap:this.debuggerComputedMap,updates:this.pendingUpdates}})),this.pendingUpdates=[]}}]),t}(l);t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return new(Function.prototype.bind.apply(M,[null].concat(t)))}},603:function(e,t,n){"use strict";e.exports=WebSocket}}]);