(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{318:function(e,t,n){"use strict";n.r(t);var o=n(3),i=n.n(o),a=n(10),r=n(4),s=n(5),c=n(8),l=n(7),d=n(325),u=n(9),h=n(328),p=(n(746),n(336)),v=n(470),b=n.n(v),f=n(13),m=n(2),g=n(6),w=n(0),O=n.n(w),x=(n(748),function(e){function t(e){var n;return Object(r.a)(this,t),n=Object(c.a)(this,Object(l.a)(t).call(this,e)),Object(g.a)(Object(m.a)(Object(m.a)(n)),"onLoad",function(){n.loadError||n.setState({classNames:[]})}),Object(g.a)(Object(m.a)(Object(m.a)(n)),"onError",function(){n.loadError=!0,n.setState({src:n.props.errorSrc})}),n.state={classNames:["default-img"],src:n.props.src},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=["image"].concat(Object(f.a)(this.state.classNames),Object(f.a)(this.props.className.split(" ")));return O.a.createElement("img",{className:e.join(" "),onError:this.onError,onLoad:this.onLoad,src:this.state.src})}}]),t}(O.a.PureComponent));Object(g.a)(x,"defaultProps",{errorSrc:"/resources/img/default.png",className:""});var E=x,k=n(366),j=n(41),y=function(e){function t(e,n){var o;return Object(r.a)(this,t),(o=Object(c.a)(this,Object(l.a)(t).call(this,e,n))).react=n.react,o}return Object(u.a)(t,e),Object(s.a)(t,[{key:"load",value:function(){var e=this;return this.react.setState({activeItem:null,items:[]}).then(Object(a.a)(i.a.mark(function t(){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadItems();case 2:if(!((n=t.sent).length>1)){t.next=8;break}return e.createButton(),t.next=7,e.react.setState({activeItem:n.filter(function(t){return t.active||t.guid===e.options.viewId})[0],items:n});case 7:e.options.showPanel&&e.showPanel(!0);case 8:case"end":return t.stop()}},t,this)}))),console.log("Viewing.Extension.ViewableSelector loaded"),!0}},{key:"loadItems",value:function(){var e=Object(a.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.options.views){e.next=2;break}return e.abrupt("return",this.options.views);case 2:return t=this.options.urn,e.next=5,Object(j.f)(t);case 5:return this.doc=e.sent,e.abrupt("return",Object(j.d)(this.doc));case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"unload",value:function(){return console.log("Viewing.Extension.ViewableSelector unloaded"),this.button&&this.viewer.container.removeChild(this.button),this.react.popViewerPanel(this.id),Object(d.a)(Object(l.a)(t.prototype),"unload",this).call(this),!0}},{key:"onItemSelected",value:function(){var e=Object(a.a)(i.a.mark(function e(t){var n,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.react.getState(),o=n.activeItem,t.guid===o.guid){e.next=9;break}if(!t.url){e.next=4;break}return e.abrupt("return",window.location.href=location.origin+t.url);case 4:return this.viewer.showLoader(!0),e.next=7,this.showPanel(!1);case 7:this.viewer.tearDown(),t.id?(t.db,t.id,this.options.loadModel(this.viewer,t,1500)):this.options.loadModel(this.viewer,{db:this.options.database,id:this.options.modelId,viewId:t.guid},1500);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"createButton",value:function(){var e=this;this.button=document.createElement("button"),this.button.title="This model has multiple views ...",this.button.className="viewable-selector btn",this.button.onclick=function(){e.showPanel(!0)};var t=document.createElement("span");t.className="fa fa-list-ul",this.button.appendChild(t);var n=document.createElement("label");this.button.appendChild(n),n.innerHTML="Views",this.viewer.container.appendChild(this.button)}},{key:"showPanel",value:function(){var e=Object(a.a)(i.a.mark(function e(t){var n,o,a,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=9;break}return n=this.viewer.container,o=this.react.getState(),a=o.items,this.button.classList.add("active"),r=Math.min(n.offsetHeight-110,78*(a.length+1)+55),e.next=7,this.react.pushViewerPanel(this,{maxHeight:r,draggable:!1,maxWidth:500,minWidth:310,width:310,left:20,top:20,height:r});case 7:e.next=12;break;case 9:return e.next=11,this.react.popViewerPanel(this.id);case 11:this.button.classList.remove("active");case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"renderContent",value:function(){var e=this,t=this.react.getState(),n=t.activeItem,o=t.items,i=this.options,a=i.apiUrl,r=i.database,s=i.modelId,c=o.map(function(t){var o=t.guid===n.guid?" active":"",i="size=400"+(t.id?"":"&guid=".concat(t.guid)),c=t.id||s,l="".concat(a,"/").concat(r,"/").concat(c,"/thumbnail?")+"".concat(i);return O.a.createElement("div",{key:t.guid,className:"item"+o,onClick:function(){return e.onItemSelected(t)}},O.a.createElement("div",{className:"image-container","data-for":"thumbnail-".concat(t.guid),"data-tip":!0},O.a.createElement(E,{src:l})),O.a.createElement(b.a,{id:"thumbnail-".concat(t.guid),className:"tooltip-thumbnail",delayShow:700,effect:"solid",place:"right"},O.a.createElement("div",null,O.a.createElement("img",{src:l,height:"200"}))),O.a.createElement(k.a,{text:t.name}))});return O.a.createElement("div",{className:"items"},c,O.a.createElement("div",{style:{height:"80px"}}))}},{key:"renderTitle",value:function(){var e=this;return O.a.createElement("div",{className:"title"},O.a.createElement("label",null,"Select View"),O.a.createElement("div",{className:"viewable-selector-controls"},O.a.createElement("span",{onClick:function(){return e.showPanel(!1)},className:"fa fa-times"})))}},{key:"render",value:function(e){var t=this;return O.a.createElement(p.a,{renderTitle:function(){return t.renderTitle(e.docked)},showTitle:e.showTitle,className:this.className},this.renderContent())}},{key:"className",get:function(){return"viewable-selector"}},{key:"displayName",get:function(){return"View Selector"}}],[{key:"ExtensionId",get:function(){return"Viewing.Extension.ViewableSelector"}}]),t}(h.a);Autodesk.Viewing.theExtensionManager.registerExtension(y.ExtensionId,y);t.default="Viewing.Extension.ViewableSelector"},325:function(e,t,n){"use strict";var o=n(7);function i(e,t,n){return(i="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(o.a)(e)););return e}(e,t);if(i){var a=Object.getOwnPropertyDescriptor(i,t);return a.get?a.get.call(n):a.value}})(e,t,n||e)}n.d(t,"a",function(){return i})},326:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var r=i.apply(null,o);r&&e.push(r)}else if("object"===a)for(var s in o)n.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}"undefined"!==typeof e&&e.exports?(i.default=i,e.exports=i):void 0===(o=function(){return i}.apply(t,[]))||(e.exports=o)}()},328:function(e,t,n){"use strict";var o=n(13),i=n(22),a=n(4),r=n(5),s=n(8),c=n(7),l=n(325),d=n(9),u=n(2),h=function(e){function t(e){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object(a.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).onModelCompletedLoad=n.onModelCompletedLoad.bind(Object(u.a)(Object(u.a)(n))),n.onObjectTreeCreated=n.onObjectTreeCreated.bind(Object(u.a)(Object(u.a)(n))),n.onModelRootLoaded=n.onModelRootLoaded.bind(Object(u.a)(Object(u.a)(n))),n.onExtensionLoaded=n.onExtensionLoaded.bind(Object(u.a)(Object(u.a)(n))),n.onModelActivated=n.onModelActivated.bind(Object(u.a)(Object(u.a)(n))),n.onGeometryLoaded=n.onGeometryLoaded.bind(Object(u.a)(Object(u.a)(n))),n.onToolbarCreated=n.onToolbarCreated.bind(Object(u.a)(Object(u.a)(n))),n.onModelBeginLoad=n.onModelBeginLoad.bind(Object(u.a)(Object(u.a)(n))),n.onModelUnloaded=n.onModelUnloaded.bind(Object(u.a)(Object(u.a)(n))),n.onSelection=n.onSelection.bind(Object(u.a)(Object(u.a)(n))),n.__onLoadNodeProperties=n.__onLoadNodeProperties.bind(Object(u.a)(Object(u.a)(n))),n.__onModelRootLoaded=n.__onModelRootLoaded.bind(Object(u.a)(Object(u.a)(n))),n.__onModelActivated=n.__onModelActivated.bind(Object(u.a)(Object(u.a)(n))),n.__onModelUnloaded=n.__onModelUnloaded.bind(Object(u.a)(Object(u.a)(n))),n.__onModelLoaded=n.__onModelLoaded.bind(Object(u.a)(Object(u.a)(n))),n.models=e.impl.modelQueue().getModels(),n.defaultOptions=r,n.options=Object(i.a)({},r,o),n.react=n.options.react,n.viewer=e,n.initializeEvents(),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"load",value:function(){return this.options.contextMenu&&this.onContextMenu&&this.options.contextMenu.addHandler(this.onContextMenu),!0}},{key:"unload",value:function(){var e=this;return this.options.contextMenu&&this.onContextMenu&&this.options.contextMenu.removeHandler(this.onContextMenu),this.viewerEvents.forEach(function(t){e.viewer.removeEventListener(t.id,e[t.handler])}),this.eventSink&&(this.eventSink.off("MetaProperties:loadNodeProperties",this.__onLoadNodeProperties),this.eventSink.off("model.activated",this.__onModelActivated),this.eventSink.off("model.unloaded",this.__onModelUnloaded),this.eventSink.off("model.loaded",this.__onModelLoaded)),this.off(),!0}},{key:"onExtensionLoaded",value:function(e){}},{key:"onModelBeginLoad",value:function(e){}},{key:"onModelActivated",value:function(e){}},{key:"__onModelRootLoaded",value:function(e){var t=this;this.viewerEvent([Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,Autodesk.Viewing.GEOMETRY_LOADED_EVENT]).then(function(e){t.onModelCompletedLoad(e[0])})}},{key:"onModelRootLoaded",value:function(e){}},{key:"onObjectTreeCreated",value:function(e){}},{key:"onGeometryLoaded",value:function(e){}},{key:"onModelCompletedLoad",value:function(e){}},{key:"onToolbarCreated",value:function(e){}},{key:"onModelUnloaded",value:function(e){}},{key:"onSelection",value:function(e){}},{key:"__onLoadNodeProperties",value:function(e){var t=e.dbId,n=e.properties;if(this.onLoadNodeProperties)return this.onLoadNodeProperties(t,n)}},{key:"__onModelLoaded",value:function(e){this.models=Object(o.a)(this.models).concat([e.model]),this.onModelBeginLoad(e)}},{key:"__onModelActivated",value:function(e){this.onModelActivated(e)}},{key:"__onModelUnloaded",value:function(e){this.models=this.models.filter(function(t){return t.guid!==e.model.guid}),this.onModelUnloaded(e)}},{key:"initializeEvents",value:function(){var e=this;this.options.eventSink&&(this.eventSink=this.options.eventSink,this.eventSink.on("MetaProperties:loadNodeProperties",this.__onLoadNodeProperties),this.eventSink.on("model.loaded",this.__onModelLoaded),this.eventSink.on("model.activated",this.__onModelActivated),this.eventSink.on("model.unloaded",this.__onModelUnloaded)),this.viewerEvents=[{id:Autodesk.Viewing.EXTENSION_LOADED_EVENT,handler:"onExtensionLoaded"},{id:Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,handler:"onObjectTreeCreated"},{id:Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT,handler:"__onModelRootLoaded"},{id:Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT,handler:"onModelRootLoaded"},{id:Autodesk.Viewing.GEOMETRY_LOADED_EVENT,handler:"onGeometryLoaded"},{id:Autodesk.Viewing.TOOLBAR_CREATED_EVENT,handler:"onToolbarCreated"}],this.options.controlledSelection||this.viewerEvents.push({id:Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT,handler:"onSelection"}),this.viewerEvents.forEach(function(t){e.viewerEvent(t.id,e[t.handler])})}},{key:"viewerEvent",value:function(e,t){var n=this;if(!t){var o=(Array.isArray(e)?e:[e]).map(function(e){return new Promise(function(t){n.viewer.addEventListener(e,function o(i){n.viewer.removeEventListener(e,o),t(i)})})});return Promise.all(o)}this.viewer.addEventListener(e,t)}},{key:"emit",value:function(e,n){return this.options.eventSink?this.options.eventSink.emit(e,n):Object(l.a)(Object(c.a)(t.prototype),"emit",this).call(this,e,n)}},{key:"emitAcc",value:function(e,n){return this.options.eventSink?this.options.eventSink.emitAcc(e,n):Object(l.a)(Object(c.a)(t.prototype),"emitAcc",this).call(this,e,n)}}],[{key:"ExtensionId",get:function(){return"Viewing.Extension.MultiModelExtensionBase"}}]),t}(n(30).a.Composer(Autodesk.Viewing.Extension));t.a=h},333:function(e,t,n){var o=n(334);"string"===typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(21)(o,i);o.locals&&(e.exports=o.locals)},334:function(e,t,n){(e.exports=n(20)(!1)).push([e.i,".widget-container {\n  position: relative;\n  height: 100%;\n  width: 100%; }\n\n.widget-container > .title {\n  border-bottom: 1px solid #cdcdcd;\n  background-color: #f5f5f5;\n  padding-right: 10px;\n  color: black;\n  position: relative;\n  overflow: hidden;\n  text-align: left;\n  height: 40px;\n  width: 100%; }\n\n.widget-container > .title > label {\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-left: 27px;\n  margin-top: 10px; }\n\n.widget-container > .content {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  width: 100%; }\n",""])},336:function(e,t,n){"use strict";var o=n(13),i=n(4),a=n(5),r=n(8),s=n(7),c=n(9),l=n(6),d=(n(333),n(0)),u=n.n(d),h=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"renderTitle",value:function(){return this.props.showTitle?this.props.renderTitle?this.props.renderTitle():u.a.createElement("div",{className:"title"},u.a.createElement("label",null,this.props.title)):u.a.createElement("div",null)}},{key:"renderChildren",value:function(){var e=this;return this.props.dimensions?u.a.Children.map(this.props.children,function(t){var n=Object.assign({},t.props,{dimensions:e.props.dimensions});return u.a.cloneElement(t,n)}):this.props.children}},{key:"render",value:function(){var e=["widget-container"].concat(Object(o.a)(this.props.className.split(" "))),t=this.props.showTitle?"calc(100% - 40px)":"100%";return u.a.createElement("div",{className:e.join(" "),style:this.props.style},this.renderTitle(),u.a.createElement("div",{className:"content",style:{height:t}},this.renderChildren()))}}]),t}(u.a.PureComponent);Object(l.a)(h,"defaultProps",{showTitle:!0,className:""});var p=h;t.a=p},363:function(e,t,n){var o=n(364);"string"===typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(21)(o,i);o.locals&&(e.exports=o.locals)},364:function(e,t,n){(e.exports=n(20)(!1)).push([e.i,".label-container {\n  position: relative;\n  overflow: hidden;\n  font-size: 100%;\n  color: #343434;\n  height: 100%;\n  float: left; }\n",""])},366:function(e,t,n){"use strict";var o=n(13),i=n(4),a=n(5),r=n(8),s=n(7),c=n(9),l=n(6),d=n(380),u=n.n(d),h=n(0),p=n.n(h),v=(n(363),function(e){function t(e){return Object(i.a)(this,t),Object(r.a)(this,Object(s.a)(t).call(this,e))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=["label-container"].concat(Object(o.a)(this.props.className.split(" "))),t={width:"center"===this.props.textAlign?"100%":"",textAlign:this.props.textAlign};return p.a.createElement("div",{className:e.join(" "),style:t},p.a.createElement("p",null,u.a.sanitize(this.props.text)))}}]),t}(p.a.PureComponent));Object(l.a)(v,"defaultProps",{textAlign:"left",className:"",text:""});t.a=v},478:function(e,t){},746:function(e,t,n){var o=n(747);"string"===typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(21)(o,i);o.locals&&(e.exports=o.locals)},747:function(e,t,n){(e.exports=n(20)(!1)).push([e.i,".viewable-selector.btn {\n  transition-property: opacity;\n  transition-timing-function: ease;\n  transition-duration: 1.0s;\n  transition-delay: 0.0s;\n  padding: 6px 12px 2px 12px;\n  position: absolute;\n  box-shadow: none;\n  outline: none;\n  opacity: 0.8;\n  color: grey;\n  left: 10px;\n  top: 10px; }\n  .viewable-selector.btn:focus {\n    outline: none; }\n  .viewable-selector.btn.active {\n    pointer-events: none;\n    opacity: 0.0; }\n  .viewable-selector.btn span {\n    position: relative;\n    margin: 0 8px 0 0;\n    font-size: 18px;\n    float: left;\n    top: 2px; }\n  .viewable-selector.btn label {\n    pointer-events: none;\n    font-weight: normal; }\n\n.viewable-selector .items {\n  background: rgba(255, 255, 255, 0.7);\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: 100%; }\n  .viewable-selector .items .item {\n    transition-property: border, background;\n    transition-timing-function: ease;\n    transition-duration: 1.0s;\n    transition-delay: 0.0s;\n    border: 1px solid #cdcdcd;\n    padding: 4px 4px 4px 8px;\n    width: calc(100% - 8px);\n    margin: 4px 0 4px 4px;\n    border-radius: 4px;\n    text-align: left;\n    cursor: pointer;\n    color: #525252;\n    height: 78px; }\n    .viewable-selector .items .item:hover {\n      background: rgba(255, 165, 0, 0.1);\n      border: 1px solid orange; }\n    .viewable-selector .items .item.active {\n      background: rgba(255, 165, 0, 0.35);\n      border: 1px solid orange;\n      cursor: default; }\n    .viewable-selector .items .item .label-container {\n      width: calc(100% - 100px);\n      top: 14px; }\n    .viewable-selector .items .item .image-container {\n      margin: 0 10px 0 0;\n      height: 70px;\n      float: left;\n      width: 70px; }\n      .viewable-selector .items .item .image-container img {\n        height: 70px;\n        width: 70px; }\n    .viewable-selector .items .item .tooltip-thumbnail {\n      background-color: #ededed !important;\n      border: 1px solid grey;\n      padding: 2px; }\n      .viewable-selector .items .item .tooltip-thumbnail div {\n        height: 200px;\n        width: 200px; }\n\n.viewable-selector-controls {\n  margin: 6px 12px auto 0;\n  position: relative;\n  float: right; }\n  .viewable-selector-controls span {\n    position: relative;\n    color: #9b9b9b;\n    cursor: pointer;\n    font-size: 20px; }\n  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {\n    .viewable-selector-controls {\n      /* IE10+ specific styles go here */ }\n      .viewable-selector-controls span {\n        top: 4px; } }\n  .viewable-selector-controls:hover span {\n    color: #f58b00; }\n\n@-moz-document url-prefix() {\n  .view-selector.btn label {\n    position: relative;\n    top: 1px; } }\n",""])},748:function(e,t,n){var o=n(749);"string"===typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(21)(o,i);o.locals&&(e.exports=o.locals)},749:function(e,t,n){(e.exports=n(20)(!1)).push([e.i,'.image {\n  height: 100%;\n  width: 100%; }\n  .image.default-img {\n    content: url("/resources/img/default.png"); }\n\n@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {\n  .image.default-img {\n    background: url("/resources/img/default.png");\n    background-repeat: repeat;\n    background-repeat: initial;\n    background-size: 100%;\n    display: inherit; } }\n\n@-moz-document url-prefix() {\n  .image.default-img {\n    background: url("/resources/img/default.png");\n    background-repeat: repeat;\n    background-repeat: initial;\n    background-size: 100%;\n    display: inherit; } }\n',""])}}]);
//# sourceMappingURL=20.20f7027d.chunk.js.map