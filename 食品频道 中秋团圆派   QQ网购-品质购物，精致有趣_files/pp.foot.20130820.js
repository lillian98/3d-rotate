window['PP.foot.time'] && window['PP.foot.time'].push(new Date());
(function(){function $addEvent(obj,type,handle){if(!obj||!type||!handle){return;}
if(obj instanceof Array){for(var i=0,l=obj.length;i<l;i++){$addEvent(obj[i],type,handle);}
return;}
if(type instanceof Array){for(var i=0,l=type.length;i<l;i++){$addEvent(obj,type[i],handle);}
return;}
window.__allHandlers=window.__allHandlers||{};window.__Hcounter=window.__Hcounter||1;function setHandler(obj,type,handler,wrapper){obj.__hids=obj.__hids||[];var hid='h'+window.__Hcounter++;obj.__hids.push(hid);window.__allHandlers[hid]={type:type,handler:handler,wrapper:wrapper}}
function createDelegate(handle,context){return function(){return handle.apply(context,arguments);};}
if(window.addEventListener){var wrapper=createDelegate(handle,obj);setHandler(obj,type,handle,wrapper)
obj.addEventListener(type,wrapper,false);}
else if(window.attachEvent){var wrapper=createDelegate(handle,obj);setHandler(obj,type,handle,wrapper)
obj.attachEvent("on"+type,wrapper);}
else{obj["on"+type]=handle;}};function $addToken(url,type){var token=$getToken();if(url==""||(url.indexOf("://")<0?location.href:url).indexOf("http")!=0){return url;}
if(url.indexOf("#")!=-1){var f1=url.match(/\?.+\#/);if(f1){var t=f1[0].split("#"),newPara=[t[0],"&g_tk=",token,"&g_ty=",type,"#",t[1]].join("");return url.replace(f1[0],newPara);}else{var t=url.split("#");return[t[0],"?g_tk=",token,"&g_ty=",type,"#",t[1]].join("");}}
return token==""?(url+(url.indexOf("?")!=-1?"&":"?")+"g_ty="+type):(url+(url.indexOf("?")!=-1?"&":"?")+"g_tk="+token+"&g_ty="+type);};function $countRd(rd,random){var arrRd=rd.split("."),rand=random||100;var jsrdUrl="http://service.paipai.com/cgi-bin/ping?u=http://jsrd.paipai.com&fu=http://jsrd.paipai.com%3FPTAG%3D"+rd+"&resolution=1024*768";jsrdUrl+="&fpageId="+arrRd[0]+"&fdomainId="+arrRd[1]+"&flinkId="+arrRd[2];if(/paipai.com|buy.qq.com|wanggou.com/.test(document.domain)){if(Math.random()<=rand/100){$report(jsrdUrl);}}else{$report($makeRd(rd));}};function $delCookie(name,path,domain,secure){var value=$getCookie(name);if(value!=null){var exp=new Date();exp.setMinutes(exp.getMinutes()-1000);path=path||"/";document.cookie=name+'=;expires='+exp.toGMTString()+(path?';path='+path:'')+(domain?';domain='+domain:'')+(secure?';secure':'');}};function $delEvent(obj,type,handle){if(!obj||!type||!handle){return;}
if(obj instanceof Array){for(var i=0,l=obj.length;i<l;i++){$delEvent(obj[i],type,handle);}
return;}
if(type instanceof Array){for(var i=0,l=type.length;i<l;i++){$delEvent(obj,type[i],handle);}
return;}
function find(obj,type,handler){var hids=obj.__hids;if(!hids||!window.__allHandlers){return null;}
for(var i=hids.length-1;i>=0;i--){var hid=hids[i];var h=window.__allHandlers[hid];if(h&&h.type==type&&h.handler==handler){var wrapper=h.wrapper;window.__allHandlers[hid]=null;delete window.__allHandlers[hid];hids.splice(i,1);obj.__hids=hids;return wrapper;}}
return null;}
if(window.removeEventListener){obj.removeEventListener(type,find(obj,type,handle)||handle,false);}
else if(window.detachEvent){obj.detachEvent("on"+type,find(obj,type,handle)||handle);}};function $empty(){return function(){return true;}};function $float(opt){var option={id:"",left:0,top:0,width:400,height:0,title:"",html:"",leaver:2,zindex:255,autoResize:false,cover:true,dragble:false,fix:false,titleId:"",showClose:true,closeId:"",bgframeLeft:-2,bgframeTop:-2,cName:"module_box_normal vt_float",style:"stand",contentStyle:"",cssUrl:window.config_float_css||"http://static.paipaiimg.com/module/module_box.css",onInit:$empty(),onClose:$empty()};for(var i in opt){option[i]=opt[i];}
var that=arguments.callee;var _host=window.location.hostname,_isQQ=_host.indexOf("qq.com")!=-1,_isBBC=_host.indexOf("buy.qq.com")!=-1,_isPP=_host.indexOf("paipai.com")!=-1;if(_isPP){option.bgframeLeft=0;option.bgframeTop=0;}
that.data?"":init(option.cssUrl);option.id=option.id?option.id:++that.data.zIndex;option.close=closeFloat;option.destruct=destructFloat;option.closeOther=closeOther;option.keepBoxFix=keepBoxFix;option.resize=resize;option.show=showBox;option.setPos=setPos;option.closeOther();option.show();that.data.list.push(option);if(option.dragble){$initDragItem({barDom:option.boxTitleHandle,targetDom:option.boxHandle});}
return option;function closeFloat(){if(!option.onClose(option)){return;}
option.closeOther();option.destruct();}
function destructFloat(){var _this=this;_this.cover?that.data.closeCover():"";if(_this.sizeTimer){clearInterval(_this.sizeTimer);}
if(_this.fixTimer){clearInterval(_this.fixTimer);}
_this.boxHandle?document.body.removeChild(_this.boxHandle):"";_this.boxHandel=_this.boxHandle=null;for(var i=0,l=that.data.list.length;i<l;i++){if(!that.data.list[i]){continue;}
if(_this.id==that.data.list[i].id){that.data.list[i]=null;}}
if(_this.closeId){var arrClose=_this.closeId.split(",");for(var l=arrClose.length;l--;){var _el=$id(arrClose[l]);if(_el){_el.onclick=null;_el=null;}}}}
function closeOther(){for(var i=0,l=that.data.list.length;i<l;i++){if(!that.data.list[i]){continue;}
if(that.data.list[i].leaver>=this.leaver&&this.id!=that.data.list[i].id){that.data.list[i].destruct();}}}
function showBox(){this.cover?that.data.showCover():"";var c=document.createElement("div"),content="",_style=option.contentStyle?(' style="'+option.contentStyle+'" '):"";c.id=this.boxId='float_box_'+this.id;c.style.position="absolute";if($isBrowser("ie6")){content='<iframe frameBorder="0" style="position:absolute;left:'+option.bgframeLeft+'px;top:'+option.bgframeTop+'px;z-index:-1;border:none;" id="float_iframe_'+this.id+'"></iframe>';}
switch(option.style+""){case"stand":c.className=option.cName;c.innerHTML=content+'<div class="box_title" id="float_title_'+this.id+'"><a href="javascript:;" style="display:'+(this.showClose?'':'none')+';"  class="bt_close" id="float_closer_'+this.id+'">×</a><h4>'+this.title+'</h4></div><div class="box_content" '+_style+'>'+this.html+'</div>';break;case"":c.className=option.cName;c.innerHTML=content+'<div class="box_content" '+_style+' id="float_title_'+this.id+'">'+this.html+'</div>';break;case"none":c.className="";c.innerHTML=content+'<div class="box_content" '+_style+' id="float_title_'+this.id+'">'+this.html+'</div>';break;case"new":c.className=option.cName;c.innerHTML=content+'<div class="layer_inner"><div class="layer_hd" '+_style+' id="float_title_'+this.id+'"><div class="layer_hd_title">'+this.title+'</div><a href="javascript:void(0);" class="layer_hd_close" id="float_closer_'+this.id+'">close</a></div><div class="layer_bd">'+this.html+'</div></div></div>';break;}
document.body.appendChild(c);c=null;this.boxHandel=this.boxHandle=$id('float_box_'+this.id);if($isBrowser("ie6")){this.boxIframeHandle=$id('float_iframe_'+this.id);}
this.boxTitleHandle=$id(option.titleId||('float_title_'+this.id));this.boxCloseHandle=$id('float_closer_'+this.id);this.height?(this.boxHandle.style.height=(option.height=="auto"?option.height:option.height+"px")):"";this.width?(this.boxHandle.style.width=(option.width=="auto"?option.width:option.width+"px")):"";this.boxHandle.style.zIndex=that.data.zIndex;this.sw=parseInt(this.boxHandle.offsetWidth);this.sh=parseInt(this.boxHandle.offsetHeight);this.setPos();var _this=this;_this.boxCloseHandle?_this.boxCloseHandle.onclick=function(){_this.close();return false;}:"";if(_this.closeId){var arrClose=_this.closeId.split(",");for(var l=arrClose.length;l--;){var _el=$id(arrClose[l]);if(_el){_el.onclick=function(){_this.close();return false;};_el=null;}}}
_this.keepBoxFix();if(!_this.onInit(option)){return;}}
function setPos(left,top){var psw=$getPageScrollWidth(),ww=$getWindowWidth(),psh=$getPageScrollHeight(),wh=$getWindowHeight();var p=[0,0];left&&(this.left=left);top&&(this.top=top);p[0]=parseInt(this.left?this.left:(psw+(ww-this.sw)/2));p[1]=parseInt(this.top?this.top:(psh+(wh-this.sh)/2));(p[0]+this.sw)>(psw+ww)?(p[0]=psw+ww-this.sw-10):"";(p[1]+this.sh)>(psh+wh)?(p[1]=psh+wh-this.sh-10):"";p[1]<psh?p[1]=psh:"";p[0]<psw?p[0]=psw:"";if($isBrowser("ie6")){this.boxIframeHandle.height=(this.sh-2)+"px";this.boxIframeHandle.width=(this.sw-2)+"px";}
this.boxHandle.style.left=p[0]+"px";this.boxHandle.style.top=p[1]+"px";this.keepBoxFix();}
function resize(w,h){if(w&&w.constructor===Number){this.sw=w;this.boxHandle.style.width=this.sw+"px";if($isBrowser("ie6")){this.boxIframeHandle.width=(this.sw-2)+"px";}}
if(h&&h.constructor===Number){this.sh=h;this.boxHandle.style.height=this.sh+"px";if($isBrowser("ie6")){this.boxIframeHandle.height=(this.sh-2)+"px";}}
this.setPos();}
function keepBoxFix(){if(this.fix){var _this=this;if($isBrowser("ie6")){!_this.fixTimer&&(_this.fixTimer=setInterval(function(){_this.boxHandle.style.left=(_this.left?_this.left:($getPageScrollWidth()+($getWindowWidth()-_this.sw)/2))+"px";_this.boxHandle.style.top=(_this.top?_this.top:($getPageScrollHeight()+($getWindowHeight()-_this.sh)/2))+"px";},30));}else{_this.boxHandle.style.position="fixed";_this.boxHandle.style.left=(_this.left?_this.left:($getWindowWidth()-_this.sw)/2)+"px";_this.boxHandle.style.top=(_this.top?_this.top:($getWindowHeight()-_this.sh)/2)+"px";}}}
function autoResize(){if(this.autoResize){var _this=this;_this.sizeTimer=setInterval(function(){_this.sw=_this.boxHandle.offsetWidth;_this.sh=_this.boxHandle.offsetHeight;if($isBrowser("ie6")){_this.boxIframeHandle.height=(_this.sh-2)+"px";_this.boxIframeHandle.width=(_this.sw-2)+"px";}},50);}}
function init(cssUrl){if(cssUrl){$loadCss(cssUrl);}
that.data={};that.data.zIndex=option.zindex;that.data.list=[];createCover();that.data.showCover=showCover;that.data.closeCover=closeCover;function createCover(){var c=document.createElement("div");c.id="float_cover";c.style.display="none";c.style.width="0px";c.style.height="0px";c.style.backgroundColor="#cccccc";c.style.zIndex=250;c.style.position="fixed";c.style.hasLayout=-1;c.style.left="0px";c.style.top="0px";c.style.filter="alpha(opacity=50);";c.style.opacity="0.5";document.body.appendChild(c);if($isBrowser("ie6")){c.innerHTML='<iframe frameBorder="0" style="position:absolute;left:0;top:0;width:100%;z-index:-1;border:none;" id="float_cover_iframe"></iframe>';c.style.position="absolute";}
that.data.cover=$id("float_cover");that.data.coverIframe=$id("float_cover_iframe");that.data.coverIsShow=false;that.data.coverSize=[0,0];c=null;}
function showCover(){that.data.cover.style.display="block";that.data.coverIsShow=true;keepCoverShow();that.data.coverTimer=setInterval(function(){keepCoverShow();},50);function keepCoverShow(){var _d=that.data;if(_d.coverIsShow){var ch=$getContentHeight(),wh=$getWindowHeight(),cw=$getContentWidth(),ww=$getWindowWidth(),ns=[wh,ww];if($isBrowser("ie6")){_d.cover.style.top=$getPageScrollHeight()+"px";}
if(ns.toString()!=that.data.coverSize.toString()){_d.coverSize=ns;_d.cover.style.height=ns[0].toFixed(0)+"px";_d.cover.style.width=ns[1].toFixed(0)+"px";if(_d.coverIframe){_d.coverIframe.style.height=ns[0].toFixed(0)+"px";_d.coverIframe.style.width=ns[1].toFixed(0)+"px";}}}}}
function closeCover(){that.data.cover.style.display="none";that.data.coverIsShow=false;clearInterval(that.data.coverTimer);}}};function $getContentHeight(){var bodyCath=document.body;var doeCath=document.compatMode=='BackCompat'?bodyCath:document.documentElement;return(window.MessageEvent&&navigator.userAgent.toLowerCase().indexOf('firefox')==-1)?bodyCath.scrollHeight:doeCath.scrollHeight;};function $getContentWidth(){var bodyCath=document.body;var doeCath=document.compatMode=='BackCompat'?bodyCath:document.documentElement;return(window.MessageEvent&&navigator.userAgent.toLowerCase().indexOf('firefox')==-1)?bodyCath.scrollWidth:doeCath.scrollWidth;};function $getCookie(name){var reg=new RegExp("(^| )"+name+"(?:=([^;]*))?(;|$)"),val=document.cookie.match(reg);return val?(val[2]?unescape(val[2]):""):null;};function $getMousePosition(e){var e=window.event?window.event:e;if(e.evt)e=e.evt;var pos=[];if(typeof e.pageX!="undefined"){pos=[e.pageX,e.pageY];}else if(typeof e.clientX!="undefined"){pos=[e.clientX+$getScrollPosition()[0],e.clientY+$getScrollPosition()[1]];}
return pos;};function $getPageScrollHeight(){var bodyCath=document.body;var doeCath=document.compatMode=='BackCompat'?bodyCath:document.documentElement;var ua=navigator.userAgent.toLowerCase();return(window.MessageEvent&&ua.indexOf('firefox')==-1&&ua.indexOf('opera')==-1&&ua.indexOf('msie')==-1)?bodyCath.scrollTop:doeCath.scrollTop;};function $getPageScrollWidth(){var bodyCath=document.body;var doeCath=document.compatMode=='BackCompat'?bodyCath:document.documentElement;return(window.MessageEvent&&navigator.userAgent.toLowerCase().indexOf('firefox')==-1)?bodyCath.scrollLeft:doeCath.scrollLeft;};function $getQuery(name,url){var u=arguments[1]||window.location.search,reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)"),r=u.substr(u.indexOf("\?")+1).match(reg);return r!=null?r[2]:"";};function $getScrollPosition(){var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft||window.pageXOffset;var scrollTop=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;return[scrollLeft?scrollLeft:0,scrollTop?scrollTop:0];};function $getTarget(e,parent,tag){var e=window.event||e,tar=e.srcElement||e.target;if(parent&&tag&&tar.nodeName.toLowerCase()!=tag){while(tar=tar.parentNode){if(tar==parent||tar==document.body||tar==document){return null;}else if(tar.nodeName.toLowerCase()==tag){break;}}};return tar;};function $getToken(){var skey=$getCookie("skey"),token=skey==null?"":$time33(skey);return token;};function $getWindowHeight(){var bodyCath=document.body;return(document.compatMode=='BackCompat'?bodyCath:document.documentElement).clientHeight;};function $getWindowWidth(){var bodyCath=document.body;return(document.compatMode=='BackCompat'?bodyCath:document.documentElement).clientWidth;};function $getY(e){var t=e.offsetTop||0;while(e=e.offsetParent){t+=e.offsetTop;}
return t;};function $getYP(e){var t=$getY(e),e=e.parentNode;while(0===t&&document.body!=e){t=$getY(e);e=e.parentNode;}
return t;};function $id(id){return typeof(id)=="string"?document.getElementById(id):id;};function $inArray(t,arr){if(arr.indexOf){return arr.indexOf(t);}
for(var i=arr.length;i--;){if(arr[i]===t){return i*1;}};return-1;};function $initDragItem(opt){var option={barDom:"",targetDom:""};for(var i in opt){option[i]=opt[i];}
var that=arguments.callee;that.option?"":that.option={};option.barDom.style.cursor='move';option.targetDom.style.position="absolute";option.barDom.onmousedown=function(e){var e=window.event||e;that.option.barDom=this;that.option.targetDom=option.targetDom;var currPostion=[parseInt(option.targetDom.style.left)?parseInt(option.targetDom.style.left):0,parseInt(option.targetDom.style.top)?parseInt(option.targetDom.style.top):0];that.option.diffPostion=[$getMousePosition({evt:e})[0]-currPostion[0],$getMousePosition({evt:e})[1]-currPostion[1]];document.onselectstart=function(){return false;};window.onblur=window.onfocus=function(){document.onmouseup();};return false;};option.targetDom.onmouseup=document.onmouseup=function(){if(that.option.barDom){that.option={};document.onselectstart=window.onblur=window.onfocus=null;}};option.targetDom.onmousemove=document.onmousemove=function(e){try{var e=window.event||e;if(that.option.barDom&&that.option.targetDom){that.option.targetDom.style.left=($getMousePosition({evt:e})[0]-that.option.diffPostion[0])+"px";that.option.targetDom.style.top=($getMousePosition({evt:e})[1]-that.option.diffPostion[1])+"px";}}
catch(e){}};};function $isBrowser(str){str=str.toLowerCase();var b=navigator.userAgent.toLowerCase();var arrB=[];arrB['firefox']=b.indexOf("firefox")!=-1;arrB['opera']=b.indexOf("opera")!=-1;arrB['safari']=b.indexOf("safari")!=-1;arrB['chrome']=b.indexOf("chrome")!=-1;arrB['gecko']=!arrB['opera']&&!arrB['safari']&&b.indexOf("gecko")>-1;arrB['ie']=!arrB['opera']&&b.indexOf("msie")!=-1;arrB['ie6']=!arrB['opera']&&b.indexOf("msie 6")!=-1;arrB['ie7']=!arrB['opera']&&b.indexOf("msie 7")!=-1;arrB['ie8']=!arrB['opera']&&b.indexOf("msie 8")!=-1;arrB['ie9']=!arrB['opera']&&b.indexOf("msie 9")!=-1;arrB['ie10']=!arrB['opera']&&b.indexOf("msie 10")!=-1;return arrB[str];};function $isDocReady(){if(navigator.userAgent.match(/MSIE/)){try{document.documentElement.doScroll('left');return true;}catch(e){}
return false;}else{return document.body?true:false;}};function $isLogin(){return($getCookie("skey")&&$getCookie("uin"))?true:false;};function $loadCss(path,callback){if(!path){return;}
var l;if(!window["_loadCss"]||window["_loadCss"].indexOf(path)<0){l=document.createElement('link');l.setAttribute('type','text/css');l.setAttribute('rel','stylesheet');l.setAttribute('href',path);l.setAttribute("id","loadCss"+Math.random());document.getElementsByTagName("head")[0].appendChild(l);window["_loadCss"]?(window["_loadCss"]+="|"+path):(window["_loadCss"]="|"+path);}
l&&(typeof callback=="function")&&(l.onload=callback);return true;};function $loadScript(obj){if(!$loadScript.counter){$loadScript.counter=1;}
var isObj=typeof(obj)=="object",url=isObj?obj.url:arguments[0],id=isObj?obj.id:arguments[1],obj=isObj?obj:arguments[2],_head=document.head||document.getElementsByTagName("head")[0]||document.documentElement,_script=document.createElement("script"),D=new Date(),_time=D.getTime(),_isCleared=false,_timer=null,o=obj||{},data=o.data||'',charset=o.charset||"gb2312",isToken=o.isToken,timeout=o.timeout,isAutoReport=o.isAutoReport||false,reportOptions=o.reportOptions||{},reportType=o.reportType||'current',reportRetCodeName=o.reportRetCodeName,reportSuccessCode=typeof(o.reportSuccessCode)=="undefined"?200:o.reportSuccessCode,reportErrorCode=typeof(o.reportErrorCode)=="undefined"?500:o.reportErrorCode,reportTimeoutCode=typeof(o.reportTimeoutCode)=="undefined"?600:o.reportTimeoutCode,onload=o.onload,onsucc=o.onsucc,callbackName=o.callbackName||'',callback=o.callback,errorback=o.errorback,_jsonpLoadState='uninitialized';var complete=function(errCode){if(!_script||_isCleared){return;}
_isCleared=true;if(_timer){clearTimeout(_timer);_timer=null;}
_script.onload=_script.onreadystatechange=_script.onerror=null;if(_head&&_script.parentNode){_head.removeChild(_script);}
_script=null;if(callbackName){if(callbackName.indexOf('.')==-1){window[callbackName]=null;try{delete window[callbackName];}
catch(e){}}
else{var arrJ=callbackName.split("."),p={};for(var j=0,jLen=arrJ.length;j<jLen;j++){var n=arrJ[j];if(j==0){p=window[n];}
else{if(j==jLen-1){try{delete p[n];}
catch(e){}}
else{p=p[n];}}}}}
if(_jsonpLoadState!="loaded"&&typeof errorback=="function"){errorback(errCode);}
if(isAutoReport&&reportType!='cross'){_retCoder.report(_jsonpLoadState=="loaded",errCode);}};var jsontostr=function(d){var a=[];for(var k in d){a.push(k+'='+d[k]);}
return a.join('&');};if(isAutoReport&&reportOptions){if(reportType=='cross'){$returnCode(reportOptions).reg();}
else{reportOptions.url=reportOptions.url||url.substr(0,url.indexOf('?')==-1?url.length:url.indexOf('?'));var _retCoder=$returnCode(reportOptions);}}
if(data){url+=(url.indexOf("?")!=-1?"&":"?")+(typeof data=='string'?data:jsontostr(data));}
if(callbackName&&typeof callback=="function"){var oldName=callbackName;if(callbackName.indexOf('.')==-1){callbackName=window[callbackName]?callbackName+$loadScript.counter++:callbackName;window[callbackName]=function(jsonData){_jsonpLoadState='loaded';if(isAutoReport&&reportRetCodeName){reportSuccessCode=jsonData[reportRetCodeName];}
callback.apply(null,arguments);onsucc&&(onsucc());};}
else{var arrJ=callbackName.split("."),p={},arrF=[];for(var j=0,jLen=arrJ.length;j<jLen;j++){var n=arrJ[j];if(j==0){p=window[n];}
else{if(j==jLen-1){p[n]?(n=n+$loadScript.counter++):'';p[n]=function(jsonData){_jsonpLoadState='loaded';if(isAutoReport&&reportRetCodeName){reportSuccessCode=jsonData[reportRetCodeName];}
callback.apply(null,arguments);onsucc&&(onsucc());};}
else{p=p[n];}}
arrF.push(n);}
callbackName=arrF.join('.');}
url=url.replace('='+oldName,'='+callbackName);}
_jsonpLoadState='loading';id=id?(id+_time):_time;url=(isToken!==false?$addToken(url,"ls"):url);_script.charset=charset;_script.id=id;_script.onload=_script.onreadystatechange=function(){var uA=navigator.userAgent.toLowerCase();if(!(!(uA.indexOf("opera")!=-1)&&uA.indexOf("msie")!=-1)||/loaded|complete/i.test(this.readyState)){if(typeof onload=="function"){onload();}
complete(_jsonpLoadState=="loaded"?reportSuccessCode:reportErrorCode);}};_script.onerror=function(){complete(reportErrorCode);};if(timeout){_timer=setTimeout(function(){complete(reportTimeoutCode);},parseInt(timeout,10));}
setTimeout(function(){_script.src=url;try{_head.insertBefore(_script,_head.lastChild);}catch(e){}},0);};function $loadUrl(o){o.element=o.element||'script';var el=document.createElement(o.element);el.charset=o.charset||'utf-8';if(o.noCallback==true){el.setAttribute("noCallback","true");}
el.onload=el.onreadystatechange=function(){if(/loaded|complete/i.test(this.readyState)||navigator.userAgent.toLowerCase().indexOf("msie")==-1){clear();}};el.onerror=function(){clear();};el.src=o.url;document.getElementsByTagName('head')[0].appendChild(el);function clear(){if(!el){return;}
el.onload=el.onreadystatechange=el.onerror=null;el.parentNode&&(el.parentNode.removeChild(el));el=null;}};(function(){var counter=1;$login=function(opts){var that=arguments.callee;var login={option:{'title':"腾讯电商-请您登录后继续刚才的操作",'containerId':"",'floatDialog':true,'modalDialog':true,'dragable':true,'showClose':true,'quickLogin':true,'checkLogin':true,'checkReady':true,'showProtocol':false,'site':'paipai','noChangeQQ':false,'defaultQQ':"",'type':"self",'action':"",'x':0,'y':0,'domain':"",'skin':"http://static.paipaiimg.com/module/module_box.css",'appid':'','onLogin':$empty(),'onReset':$empty(),'onClose':$empty(),'onResize':$empty(),'onSuccess':$empty(),'onFailure':$empty()},init:function(opts){var option=this.option;for(var i in opts){option[i]=opts[i];}
if(option.checkReady&&!$isDocReady()){return;}
var hn=location.hostname,topDomain=hn.split(".");if(topDomain.length>1){topDomain=topDomain[topDomain.length-2]+'.'+topDomain[topDomain.length-1];try{document.domain=option.domain||topDomain;}catch(e){}}
option.show=this.show;option.close=this.close;option.resize=this.resize;option.doAction=this.doAction;option.counter=counter++;if(hn.indexOf("paipai.com")!=-1){$setCookie('returnurl','',-1,'/','paipai.com');$setCookie('referurl','',-1,'/','paipai.com');}
if(option.checkLogin&&$isLogin()){option.doAction();return;}
this.registerLoginEvent();this.load(option.skin);option.show(option);that.instance=option;return option;},registerLoginEvent:function(){ptlogin2_onLogin=function(){return $login.instance.onLogin()?true:false;};ptlogin2_onReset=function(){return $login.instance.onReset()?true:false;};ptlogin2_onClose=function(){if(location.hostname.indexOf("qq.com")!=-1){ptlogin2_onSuccess();}
return $login.instance.onClose()?true:false;};ptlogin2_onResize=function(w,h){var login=$login.instance;w=parseInt(w);h=parseInt(h);if(!login.onResize(w,h)){return false;}
login.resize($id("login_frame_"+login.counter),w,h);if(login.floatDialog){h=h+75-(login.showProtocol?0:39);login.floatHandle?login.floatHandle.resize(w+28,h):"";login.resize($id("loginunit"),w+28,h);}else{h=h+60-(login.showProtocol?0:39);login.resize($id(login.containerId),w,h);login.resize($id("loginunit2"),w,h);}
return true;};ptlogin2_onSuccess=function(){var login=$login.instance;if(!login.onSuccess()){return false;}
login.close();var hn=location.hostname,isQQ=hn.indexOf("qq.com")!=-1,isWG=hn.indexOf("wanggou.com")!=-1,isDone=false;var url="",url2="",url3="";if(isQQ){url="http://ptlogin2.qq.com/ho_cross_domain?tourl="+encodeURIComponent("http://member.paipai.com/cgi-bin/ptlogin?returnurl=http://auction.paipai.com/null.shtml&loginfrom=20");url2="http://ptlogin2.qq.com/ho_cross_domain?tourl="+encodeURIComponent("http://member.wanggou.com/userlogin/ptlogin?returnurl=http://auction.paipai.com/null.shtml&loginfrom=20&daid=154");url3="http://ptlogin2.qq.com/ho_cross_domain?tourl="+encodeURIComponent("http://base.51buy.com/login/synclogin");}else if(isWG){url="http://ptlogin2.wanggou.com/ho_cross_domain?tourl="+encodeURIComponent("http://member.paipai.com/cgi-bin/ptlogin?returnurl=http://auction.paipai.com/null.shtml&loginfrom=20");url2="http://ptlogin2.wanggou.com/ho_cross_domain?tourl="+encodeURIComponent("http://user.buy.qq.com/cgi-bin/ping/visitkey");url3="http://ptlogin2.wanggou.com/ho_cross_domain?tourl="+encodeURIComponent("http://base.51buy.com/login/synclogin");}else{url="http://ptlogin2.paipai.com/ho_cross_domain?tourl="+encodeURIComponent("http://user.buy.qq.com/cgi-bin/ping/visitkey");url2="http://ptlogin2.paipai.com/ho_cross_domain?tourl="+encodeURIComponent("http://member.wanggou.com/userlogin/ptlogin?returnurl=http://auction.paipai.com/null.shtml&loginfrom=20&daid=154");url3="http://ptlogin2.paipai.com/ho_cross_domain?tourl="+encodeURIComponent("http://base.51buy.com/login/synclogin");}
var doAction=function(){if(!isDone){isDone=true;login.doAction();}
if(timer){clearTimeout(timer);timer=null;}};var timer=setTimeout(function(){doAction();},2000);var img=new Image(),img2=new Image(),img3=new Image();img.onabort=img.onerror=img2.onabort=img2.onerror=img3.onabort=img3.onerror=function(){doAction();};img.src=url;img2.src=url2;img3.src=url3;return true;};ptlogin2_onFailure=function(err){var login=$login.instance;if(!login.onFailure(err)){return false;}
if(err){alert("登录失败！可能的错误原因："+err);}
$login(login);return true;};ptlogin2_frame_onLoad=function(){var login=$login.instance;if(login.noChangeQQ){var _ifrm=$id('login_frame_'+login.counter);if(_ifrm){var _u=_ifrm.contentWindow&&_ifrm.contentWindow.document.getElementById('u');if(_u){_u.disabled=true;}}}};},doAction:function(){switch(this.type){case"func":this.action();break;case"top":top.location.href=this.action;break;case"parent":parent.location.href=this.action;break;case"self":location.href=this.action;break;case"blank":window.open(this.action);break;}},show:function(option){var hn=location.hostname,isQQ=hn.indexOf("qq.com")!=-1,isWG=hn.indexOf("wanggou.com")!=-1;if(!this.appid){if(isWG){this.appid=677010801;}else if(hn.indexOf("buy.qq.com")>-1){if(hn.indexOf("seller.buy.qq.com")>-1){this.appid=703010802;}else{this.appid=677010801;}}else{this.appid=isQQ?8000210:17000101;}}
if(!this.daid){if(hn.indexOf("wanggou.com")!=-1){this.daid=154;}else if(hn.indexOf("buy.qq.com")!=-1){this.daid=128;}else if(hn.indexOf("shop.qq.com")!=-1){this.daid=127;}else if(hn.indexOf("paipai.com")!=-1){this.daid=126;}else if(hn.indexOf("51buy.com")!=-1){this.daid=68;}else if(hn.indexOf("chong.qq.com")!=-1){this.daid=129;}else if(hn.indexOf("kuyoo.cn")!=-1){this.daid=130;}else if(hn.indexOf("etg.qq.com")!=-1){this.daid=131;}else if(hn.indexOf("wkd.qq.com")!=-1){this.daid=66;}else if(hn.indexOf("weikeduo.qq.com")!=-1){this.daid=132;}else if(hn.indexOf("victor.qq.com")!=-1){this.daid=133;}else if(hn.indexOf("piao.qq.com")!=-1){this.daid=76;}else if(hn.indexOf("go.qq.com")!=-1){this.daid=70;}else if(hn.indexOf("gaopeng.qq.com")!=-1){this.daid=134;}else if(hn.indexOf("gaopeng.com")!=-1){this.daid=135;}else if(hn.indexOf("518.qq.com")!=-1){this.daid=152;}else if(hn.indexOf("yixun.com")!=-1){this.daid=174;}
$setCookie("daid",this.daid,525600);}
if(this.daid==154||this.daid==128||this.daid==127){this.title="腾讯网购-请您登录后继续刚才的操作";}else if(this.daid==126){this.title="腾讯拍拍-请您登录后继续刚才的操作";}
var query={"style":13,"daid":this.daid,"pt_safe":1,"hide_title_bar":1,"hide_close_icon":1,"target":"self","no_verifyimg":1,"f_url":"loginerroralert","bgcolor":this.floatDialog?"f2faff":"eef5ff","link_target":"blank","uin":this.defaultQQ,"appid":this.appid,"t":Math.random()};if(!this.quickLogin){query['enable_qlogin']=0;}
if(isQQ){var url='https://ssl.ui.ptlogin2.qq.com/cgi-bin/login?';query['s_url']=hn.indexOf("buy.qq.com")>-1?'http://buy.qq.com%2Fredirect.html':(/(chong\.qq\.com)/.test(hn)?'http%3A%2F%2Fchong.qq.com%2Fmember%2Flogin_s.shtml':'http://imgcache.qq.com%2Fqqshop%2Fac%2Fportal%2Fredirect.html');}else if(isWG){var url='https://ssl.ui.ptlogin2.qq.com/cgi-bin/login?';query['s_url']=encodeURIComponent('http://member.wanggou.com/userlogin/ptlogin?loginfrom=21&daid=154');}else{var url='https://ssl.ui.ptlogin2.paipai.com/cgi-bin/login?';query['s_url']='http://member.paipai.com/cgi-bin/ptlogin%3Floginfrom%3D18';}
url+=$makeUrl(query);var width=398,ifrmHeight=370,height=ifrmHeight+35+(this.showProtocol?39:0);var isQQbuy=hn.indexOf("buy.qq.com")>-1||isWG;var h='<div class="{class}" id="{class}" style="position:relative;\
                    height:'+height+'px;\
                    width:'+width+'px"><h3 id="login_title_{id}" style="padding:0;\
                    margin:0"><span id="login_close_btn_{id}"{display}>关闭</span><strong>登录</strong><em>{title}</em></h3><iframe src="'+url+'" id="login_frame_{id}" name="login_frame_{id}" scrolling="no" frameborder="0" allowTransparency ="true" onload="ptlogin2_frame_onLoad()"  style="height:'+ifrmHeight+'px;\
                    width:'+(width-2)+'px"></iframe><div id="login_protocol_{id}" style="text-align:center"><input name="" id="login_protocol_chk_{id}" type="checkbox" value="" checked="checked" /><label for="login_protocol_chk_{id}"> 已阅读并同意<a class="blule" href="'+(isQQbuy?'http://buy.qq.com/agreement.html':'http://help.paipai.com/user_agreement.shtml')+'" target="_blank">《'+(isQQbuy?'QQ网购平台服务协议':'拍拍网用户服务协议')+'》</a></label></div><div id="login_protocol_mask_{id}" onclick="alert(\'请先同意《'+(isQQbuy?'QQ网购平台服务协议':'拍拍网用户服务协议')+'》\')" style="position:absolute;\
                            left:3px;\
                    top:28px;\
                    filter:alpha(opacity=1);\
                    opacity:0.01;\
                    background-color:#000;\
                    display:none;\
                    width:398px;\
                    height:'+ifrmHeight+'px"></div></div>';h=h.replace(/{id}/g,option.counter).replace(/{class}/g,this.floatDialog?"loginunit":"loginunit2").replace(/{display}/g,this.showClose?"":'style="display:none;\
                    "').replace(/{title}/g,this.title);if(this.floatDialog){this.floatHandle=$float({width:width,height:height,cover:this.modalDialog,style:'none',title:this.title,titleId:'login_title_'+option.counter,html:'<div id="login_content_'+option.counter+'">'+h+'</div>',left:this.x,top:this.y,dragble:this.dragable,fix:!this.dragable,showClose:this.showClose,closeId:this.showClose?"login_close_btn_"+option.counter:''});this.containerId="login_content_"+option.counter;}else{$id(this.containerId).innerHTML=h;}
if(this.showProtocol){$id("login_protocol_"+option.counter).style.display="";$id("login_protocol_chk_"+option.counter).onclick=function(){var a=$id("login_protocol_mask_"+option.counter);if(this.checked){a.style.display="none"}else{a.style.display="";}};}else{$id("login_protocol_"+option.counter).style.display="none";}},close:function(){if(this.floatDialog&&this.floatHandle){this.floatHandle.close();}},load:function(arrURL){if(arrURL instanceof Array){for(var i=0,l=arrURL.length;i<l;i++){if(arrURL[i]&&/^(http|https):\/\//ig.test(arrURL[i])){$loadCss(arrURL[i]);}}}else if(arrURL){$loadCss(arrURL);}},resize:function(obj,w,h){if(h){obj.style.height=h+'px';}
if(w){obj.style.width=w+'px';}}}
return login.init(opts);};})(window);function $makeRd(rd,url){var url=url||'http://www.paipai.com/rd.html',arrRd=rd.split(".");return"http://service.paipai.com/cgi-bin/go?pageId="+arrRd[0]+"&domainId="+arrRd[1]+"&linkId="+arrRd[2]+"&url="+escape(url);};function $makeUrl(data){var arr=[];for(var k in data){arr.push(k+"="+data[k]);};return arr.join("&");};(function(){var CFG={"auction1.paipai.com":["pfhlkd_imageViewerFrame","comSelfContent"],"shop.paipai.com":["ppshop_bg"],"www.paipai.com":["portalSliderList","portalFloor1","portalFloor2","portalFloor3","portalFloor4"],"sse1.paipai.com":["itemList"],"buy.qq.com":['firstScreen','secondScreen'],"searchex.buy.qq.com":['product'],'party.buy.qq.com':['recommandActivity','branchFocusAds']}
var REG=/(img[0-7]|pai[0-7]|pics[0-3]|static)\.(paipaiimg|qpic|wgimg|gtimg)\.(cn|com)/;var RPID=function(prefix,host){if(prefix.indexOf("pai")>-1)
return 3;if(prefix.indexOf("img")>-1){if(host=='paipaiimg')
return 2;if(host=='wgimg')
return 4;}
if(prefix=='static')
return 5;return 1;}
if(window["$picSpeed"]){return;}
window["$picSpeed"]=function(){var img=document.createElement('img');var host=location.host;if(host&&CFG[host]){var area=CFG[host][Math.floor(CFG[host].length*Math.random())];area=$id(area)||document.body;var imgs=area.getElementsByTagName("img");if(imgs.length){var one=imgs[Math.floor(imgs.length*Math.random())];var src=$strTrim(one.src||one.getAttribute("init_src")||one.getAttribute("back_src")||"");if(src&&REG.test(src)){var reportUrl="http://isdspeed.qq.com/cgi-bin/r.cgi?flag1=5829&flag2=28&flag3="+RPID(RegExp.$1,RegExp.$2);var outTimer=null;img.onload=img.onerror=function(){var utime=new Date()-sTime;utime=utime>5000?5000:utime;$report(reportUrl+"&1="+utime+"&2="+(this.width*this.height));clearTimeout(outTimer);}
outTimer=setTimeout(function(){img.onload=img.onerror=$empty();$report(reportUrl+"&1=5000");},5000);var sTime=new Date();img.src=src+(src.indexOf("?")>-1?"&t=":"?t=")+Math.random();}}}}})();(function(){if(typeof $pubsub!="undefined"){return;}
$pubsub={};var topics={},subUid=0;$pubsub.publish=function(topic){if(!topics[topic]){return false;}
var args=[].slice.call(arguments,1);setTimeout(function(){var subscribers=topics[topic];for(var i=0,j=subscribers.length;i<j;i++){subscribers[i].callback.apply(null,args);}},0);return true;};$pubsub.subscribe=function(topic,callback){if(!topics[topic]){topics[topic]=[];}
var token=(++subUid).toString();topics[topic].push({token:token,callback:callback});return token;};$pubsub.unsubscribe=function(token){for(var m in topics){if(topics[m]){for(var i=0,j=topics[m].length;i<j;i++){if(topics[m][i].token===token){topics[m].splice(i,1);return token;}}}}
return false;};}());function $report(url){$loadUrl({'url':url+((url.indexOf('?')==-1)?'?':'&')+Math.random(),'element':'img'});};function $returnCode(opt){var option={url:"",action:"",sTime:"",eTime:"",retCode:"",errCode:"",frequence:1,refer:location.href,uin:"",domain:"paipai.com",from:1,report:report,isReport:false,timeout:3000,timeoutCode:444,formatUrl:true,reg:reg};for(var i in opt){option[i]=opt[i];}
if(option.url){option.sTime=new Date();}
if(option.timeout){setTimeout(function(){if(!option.isReport){option.report(false,option.timeoutCode);}},option.timeout);}
function reg(){this.sTime=new Date();if(!this.action){return;}
var rcookie=$getCookie("retcode"),cookie2=[];rcookie=rcookie?rcookie.split("|"):[];for(var i=0;i<rcookie.length;i++){if(rcookie[i].split(",")[0]!=this.action){cookie2.push(rcookie[i]);}}
cookie2.push(this.action+","+this.sTime.getTime());$setCookie("retcode",cookie2.join("|"),60,"/",this.domain);}
function report(ret,errid){this.isReport=true;this.eTime=new Date();this.retCode=ret?1:2;this.errCode=isNaN(parseInt(errid))?"0":parseInt(errid);if(this.action){this.url="http://retcode.paipai.com/"+this.action;var rcookie=$getCookie("retcode"),ret="",ncookie=[];rcookie=rcookie?rcookie.split("|"):[];for(var i=0;i<rcookie.length;i++){if(rcookie[i].split(",")[0]==this.action){ret=rcookie[i].split(",");}
else{ncookie.push(rcookie[i]);}}
$setCookie("retcode",ncookie.join("|"),60,"/",this.domain);if(!ret){return;}
this.sTime=new Date(parseInt(ret[1]));}
if(!this.url){return;}
var domain=this.url.replace(/^.*\/\//,'').replace(/\/.*/,''),timer=this.eTime-this.sTime,cgi=encodeURIComponent(this.formatUrl?this.url.match(/^[\w|/|.|:|-]*/)[0]:this.url);this.reportUrl="http://c.isdspeed.qq.com/code.cgi?domain="+domain+"&cgi="+cgi+"&type="+this.retCode+"&code="+this.errCode+"&time="+timer+"&rate="+this.frequence+(this.uin?("&uin="+this.uin):"");if(this.reportUrl&&Math.random()<(1/this.frequence)&&this.url){$report(this.reportUrl);}}
return option;};function $scroll(opt){var that=arguments.callee;if(that.isBind===undefined){that.isBind=false;that.heightList=[];that.funcList=[];that.optList=[];that.visibleH=document.documentElement.clientHeight||document.body.clientHeight;}
if(opt.clean==true){that.heightList=[];that.funcList=[];that.optList=[];}
var _win=window,_doc=document;if(opt.parent){_win=opt.parent.window;_doc=opt.parent.document;that.visibleH=_doc.documentElement.clientHeight||_doc.body.clientHeight;}
var height=opt.height!=undefined?opt.height:$getY($id(opt.id));if(that.visibleH<height){that.heightList.push(height*1);that.funcList.push(opt.func);that.optList.push(opt);}else{opt.func(opt);};if(that.isBind){that.isBind=true;}else{$addEvent(_win,'scroll',onScroll);$addEvent(_win,'resize',onScroll);};function onScroll(){$throttle(doScroll,null,100);}
function doScroll(){var len=that.heightList.length;if(len===0){$delEvent(_win,'scroll',onScroll);$delEvent(_win,'resize',onScroll);return null;};var dv=_doc.defaultView,y=(dv)?dv.pageYOffset:0,h=that.visibleH,arrHeight=[],arrFunc=[],arrOpt=[];var doList=[];try{h+=Math.max(_doc.body.scrollTop,_doc.documentElement.scrollTop,y);}catch(e){}
for(var i=0;i<len;i++){if(h>that.heightList[i]){doList.push(that.optList[i]);}else{arrHeight.push(that.heightList[i]);arrFunc.push(that.funcList[i]);arrOpt.push(that.optList[i]);}};that.heightList=arrHeight;that.funcList=arrFunc;that.optList=arrOpt;if(doList.length>0){execTask(doList);}}
function execTask(taskList){for(var i=0,j=taskList.length;i<j;i++){taskList[i].func(taskList[i]);}}};function $setCookie(name,value,expires,path,domain,secure){var exp=new Date(),expires=arguments[2]||null,path=arguments[3]||"/",domain=arguments[4]||null,secure=arguments[5]||false;expires?exp.setMinutes(exp.getMinutes()+parseInt(expires)):"";document.cookie=name+'='+escape(value)+(expires?';expires='+exp.toGMTString():'')+(path?';path='+path:'')+(domain?';domain='+domain:'')+(secure?';secure':'');};function $strTrim(str,code){var argus=code||"\\s";var temp=new RegExp("(^"+argus+"*)|("+argus+"*$)","g");return str.replace(temp,"");};function $throttle(method,context,delay){clearTimeout(method.tId);method.tId=setTimeout(function(){method.call(context);},delay);};function $time33(str){for(var i=0,len=str.length,hash=5381;i<len;++i){hash+=(hash<<5)+str.charAt(i).charCodeAt();};return hash&0x7fffffff;};true||$cloud();var objMsg={p:"paipai.com"};if(window['AIOPAGE']){objMsg={p:"aio.com"};}
if(typeof(pageMess)!='undefined'){objMsg.sku=pageMess.commodityId;objMsg.shop=pageMess.qqUin;objMsg.category=pageMess.rootClassId;objMsg.leaf=pageMess.commodityClassId;}
if(typeof(pd)!='undefined'){objMsg.shop=pd.qqUin;}
if(typeof(shopData)!='undefined'){objMsg.shopType=shopData.isVipShop;}
$addEvent(document.body,'mousedown',function(e){if((e.button==0||e.button==1)){var tar=$getTarget(e),toUrl='',pp='',wg='',id='',name='',policy='',stuff='',material='';while(tar&&tar.tagName!="BODY"&&tar.tagName!="HTML"){if(tar.tagName=='TBODY'||tar.tagName=='THEAD'){tar=tar.parentNode;}
else{!id&&(id=tar.id||'');!name&&(id=tar.name||'');if(tar.getAttribute){!pp&&(pp=tar.getAttribute('ptag')||tar.ptag||'');!wg&&(wg=tar.getAttribute('wgtag')||tar.wgtag||'');!policy&&(policy=tar.getAttribute('policy')||tar.policy||'');!stuff&&(stuff=tar.getAttribute('stuff')||tar.stuff||'');!material&&(material=tar.getAttribute('material')||tar.material||'');!toUrl&&(toUrl=tar.getAttribute('tourl')||tar.tourl||'');}
if(tar.tagName=='A'){!toUrl&&(toUrl=tar.href);var arr=toUrl.toLowerCase().match(/ptag(=|,|%3d)(\d+\.\d+\.\d+)/);!pp&&arr&&(pp=arr[2]);var wgarr=toUrl.toLowerCase().match(/wgtag(=|,|%3d)(\d+\.\d+\.\d+\.\d+)/);!wg&&wgarr&&(wg=wgarr[2]);}
tar=tar.parentNode;}};var objMsg={p:"paipai.com"};pp&&(objMsg.ptag=pp);wg&&(objMsg.wgtag=wg);id&&(objMsg.id=id);name&&(objMsg.name=name);policy&&(objMsg.policy=policy);stuff&&(objMsg.stuff=stuff);material&&(objMsg.material=material);ECC.cloud.report.trace(objMsg);}});var loadPvCount=function(handle,type){if(type=='img'){handle=makeSendInfo(handle);};handle();};var makeSendInfo=function(_url){return function(){$report(_url);};};var paipai_pv={req_url:null,req_refer:null,req_host:null,req_host_ori:null,req_path:null,req_query:null,req_prot:null,doc:null,old_pageid:0,old_domainid:0,old_linkid:0,new_pageid:0,new_domainid:0,new_linkid:0,se_pageid:0,se_domainid:0,se_linkid:0,sc:'',url_encode:function(url)
{try{url=decodeURIComponent(url);}catch(e){}
return url.replace(/ /g,"%20").replace(/%/g,"%25").replace(/&/g,"%26").replace(/=/g,"%3D").replace(/\?/g,"%3F").replace(/\t/g,"%09").replace(/\r/g,"").replace(/\n/g,"").replace(/#/g,"%23").replace(/\+/g,"%20").replace(/\./g,"%2E").replace(/-/g,"%2D").replace(/;/g,"%3B").replace(/,/g,"%2C");},do_set_cookie:function(cookieName,cookieValue,expires,path,domain,secure)
{this.sc+=(this.sc==''?'':'^')+escape(cookieName)+';'+escape(cookieValue)+';'+(expires?parseInt(expires.getTime()/1000):'')+';';document.cookie=escape(cookieName)+'='+escape(cookieValue)+(expires?'; expires='+expires.toGMTString():'')+(path?'; path='+path:'')+(domain?'; domain='+domain:'')+(secure?'; secure':'');if(this.req_host.indexOf("qq.paipai.com")>=0)
document.cookie=escape(cookieName)+'='+escape(cookieValue)+(expires?'; expires='+expires.toGMTString():'')+(path?'; path='+path:'')+'; domain='+this.req_host_ori+(secure?'; secure':'');},do_get_cookie:function(cookieName)
{var arr,reg=new RegExp("(^| )"+cookieName+"=([^;]*)(;|$)");if(arr=document.cookie.match(reg))
{return unescape(arr[2]);}
else
{return null;}},get_pars:function()
{var win=window;try
{this.doc=win.document;this.req_url=win.document.URL;this.req_refer=win.document.referrer?win.document.referrer:"";this.req_host=win.location.hostname.toLowerCase();if(typeof(pp_req_url)=="string"&&pp_req_url!=null)
this.req_url=pp_req_url;if(typeof(pp_req_refer)=="string"&&pp_req_refer!=null)
this.req_refer=pp_req_refer;if(typeof(pp_req_host)=="string"&&pp_req_host!=null)
this.req_host=pp_req_host;this.req_host_ori=this.req_host;this.req_path=win.location.pathname?win.location.pathname:"";this.req_query=win.location.search?win.location.search:"";this.req_prot=win.location.protocol;if(null==this.req_url||""==this.req_url||null==this.req_host||""==this.req_host)
return-1;var shop_reg=/([1-9][0-9]{4,9})\.paipai\.com/gim;this.req_url=this.req_url.replace(shop_reg,"shop.paipai.com/$1");this.req_refer=this.req_refer.replace(shop_reg,"shop.paipai.com/$1");this.req_host=this.req_host.replace(shop_reg,"shop.paipai.com");if(typeof(shopData)!="undefined"&&typeof(shopData.pageId)!="undefined"&&typeof(shopData.qqUin)!="undefined")
{var shophost_reg1=/.*shop\.paipai\.com.*/;var shophost_reg2=/.*shop\.wanggou\.com.*/;if(shopData.pageId=="HOME_PAGE"&&(!shophost_reg1.exec(this.req_host)&&!shophost_reg2.exec(this.req_host)))
{var shophost_reg=/^http:\/\/[^/]*\.paipai\.com/;this.req_url=this.req_url.replace(shophost_reg,"http://shop.paipai.com/"+shopData.qqUin);this.req_host="shop.paipai.com";}}
var qq_reg=/paipai\.(.*\.)?qq\.com/gim;this.req_url=this.req_url.replace(qq_reg,"$1qq.paipai.com");this.req_refer=this.req_refer.replace(qq_reg,"$1qq.paipai.com");this.req_host=this.req_host.replace(qq_reg,"$1qq.paipai.com");this.req_url=this.req_url.replace("paipai.ellechina.com","ellechina.qq.paipai.com");this.req_refer=this.req_refer.replace("paipai.ellechina.com","ellechina.qq.paipai.com");this.req_host=this.req_host.replace("paipai.ellechina.com","ellechina.qq.paipai.com");this.req_url=this.req_url.replace("paipai.mrmodern.com","mrmodern.qq.paipai.com");this.req_refer=this.req_refer.replace("paipai.mrmodern.com","mrmodern.qq.paipai.com");this.req_host=this.req_host.replace("paipai.mrmodern.com","mrmodern.qq.paipai.com");this.req_url=this.req_url.replace("shop.qq.com","shop.qq.paipai.com");this.req_refer=this.req_refer.replace("shop.qq.com","shop.qq.paipai.com");this.req_host=this.req_host.replace("shop.qq.com","shop.qq.paipai.com");this.req_url=this.req_url.replace("buy.qq.com","buy.qq.paipai.com");this.req_refer=this.req_refer.replace("buy.qq.com","buy.qq.paipai.com");this.req_host=this.req_host.replace("buy.qq.com","buy.qq.paipai.com");this.req_url=this.req_url.replace("icson.com","icson.qq.paipai.com");this.req_refer=this.req_refer.replace("icson.com","icson.qq.paipai.com");this.req_host=this.req_host.replace("icson.com","icson.qq.paipai.com");this.req_url=this.req_url.replace("51buy.com","51buy.icson.qq.paipai.com");this.req_refer=this.req_refer.replace("51buy.com","51buy.icson.qq.paipai.com");this.req_host=this.req_host.replace("51buy.com","51buy.icson.qq.paipai.com");this.req_url=this.req_url.replace("etg.qq.com","etg.qq.paipai.com");this.req_refer=this.req_refer.replace("etg.qq.com","etg.qq.paipai.com");this.req_host=this.req_host.replace("etg.qq.com","etg.qq.paipai.com");this.req_url=this.req_url.replace("chong.qq.com","chong.qq.paipai.com");this.req_refer=this.req_refer.replace("chong.qq.com","chong.qq.paipai.com");this.req_host=this.req_host.replace("chong.qq.com","chong.qq.paipai.com");return 0;}
catch(e)
{return-1;}},handle_old_rd:function()
{try
{var oldrd_reg=/[AR]DTAG=(\d+)\.(\d+)\.(\d+)\D?/gim;var arr=oldrd_reg.exec(this.req_url);if(null==arr||arr.length!=4)
return;this.old_pageid=parseInt(arr[1]);this.old_domainid=parseInt(arr[2]);this.old_linkid=parseInt(arr[3]);if(this.old_pageid<=0||this.old_domainid<=0||this.old_linkid<=0)
return;switch(this.old_pageid)
{case 201:this.old_pageid=601;break;case 202:this.old_pageid=602;break;case 701:this.old_pageid=380;break;default:break;}}
catch(e)
{}},set_search_abtest_pprd_p_cookie:function(val)
{try
{var ret=true;var regs=/^\d+$/;if(!regs.exec(val))
{ret=false;}
else
{this.set_pprd_p_cookie('SEAB',val);}}catch(e)
{ret=false;}
return ret;},set_pprd_p_cookie:function(prefix,val)
{try
{var rd=prefix+"."+val;var pprd_p=this.do_get_cookie("PPRD_P");if(null==pprd_p)
pprd_p="";var regs={EA:/EA\.(\d+)\.(\d+)\.(\d+)(\D?)/gim,IA:/IA\.(\d+)\.(\d+)\.(\d+)(\D?)/gim,CT:/CT\.(\d+)\.(\d+)\.(\d+)(\D?)/gim,PD:/PD\.(\d+)\.(\d+)\.(\d+)(\D?)/gim,SEM:/SEM\.([%a-zA-Z0-9]+)(\-?)/gim,QZSNS:/QZSNS\.([\d\_]+)(\D?)/gim,QZZTC:/QZZTC\.([\w\!]+)([^\w\!]?)/gim,SEAB:/SEAB\.(\d+)(\D?)/gim,QQX:/QQX\.(\w+)(\W?)/gim,DISCUZ:/DISCUZ\.(\w+)(\W?)/gim,QZGDT:/QZGDT\.([\w\!]+)([^\w\!]?)/gim,CTZTC:/CTZTC\.([^&#]*)(&|$|#)/gim,MART:/MART\.([^&#]*)(&|$|#)/gim,CPS:/CPS\.([^&#]*)(&|$|#)/gi,FOCUS:/FOCUS\.([^&#]*)(&|$|#)/gi,CPC:/CPC\.([^&#]*)(&|$|#)/gim,SC:/SC\.([\d,]+)([^\d,]?)/gim,QT:/QT\.([\w\!\_\$\|]+)(\W?)/gim,VB2CTAG:/VB2CTAG\.([\w\!\_\$\|]+)(\W?)/gim};var reg=regs[prefix];if(!reg.test(pprd_p))
pprd_p+=(0==pprd_p.length?rd:"-"+rd);else
{if("EA"==prefix||"IA"==prefix||"CT"==prefix||"PD"==prefix)
pprd_p=pprd_p.replace(reg,rd+"$4");else
pprd_p=pprd_p.replace(reg,rd+"$2");}
this.do_set_cookie("PPRD_P",pprd_p,new Date((new Date()).getTime()+86400000),"/","paipai.com",0);}catch(e)
{}},set_pprd_s_cookie:function(prefix,val)
{try
{var pprd_s=this.do_get_cookie("PPRD_S");if(null==pprd_s)
pprd_s="";var regs={TJWC:/TJWC\.\d+\.\d+\.\d+(-?)/gim,PVS:/PVS\.[\.\w]+(-?)/gim,PVSE:/PVSE\.[\.\w]+(-?)/gim,QQS:/QQS\.[\.\w]+(-?)/gim};var reg=regs[prefix];if(!reg.test(pprd_s)&&val.length>0)
pprd_s+=(0==pprd_s.length?prefix+"."+val:"-"+prefix+"."+val);else
{if(val.length>0)
pprd_s=pprd_s.replace(reg,prefix+"."+val+"$1");else
pprd_s=pprd_s.replace(reg,"");}
this.do_set_cookie("PPRD_S",pprd_s,new Date((new Date()).getTime()+1800000),"/","paipai.com",0);}catch(e)
{}},set_pprd_t_cookie:function(prefix,val)
{try
{var pprd_t=this.do_get_cookie("PPRD_T");if(null==pprd_t)
pprd_t="";var regs={AS:/AS\.[^\^]*(\^?)/gim};var reg=regs[prefix];if(!reg.test(pprd_t)&&val.length>0)
pprd_t+=(0==pprd_t.length?prefix+"."+val:"^"+prefix+"."+val);else
{if(val.length>0)
pprd_t=pprd_t.replace(reg,prefix+"."+val+"$1");else
pprd_t=pprd_t.replace(reg,"");}
this.do_set_cookie("PPRD_T",pprd_t,null,"/","paipai.com",0);}catch(e)
{}},handle_new_rd:function()
{try
{var newrd_reg=/PTAG[=,](\d+)\.(\d+)\.(\d+)\D?/gim;var arr=newrd_reg.exec(this.req_url);if(null!=arr&&arr.length==4)
{this.new_pageid=parseInt(arr[1]);this.new_domainid=parseInt(arr[2]);this.new_linkid=parseInt(arr[3]);}
switch(this.new_pageid)
{case 201:this.new_pageid=30018;break;case 202:this.new_pageid=30019;break;case 603:this.new_pageid=30020;break;case 701:this.new_pageid=30025;break;default:break;}
if("auction1.paipai.com"==this.req_host)
{if(this.new_pageid<=0||this.new_domainid<=0||this.new_linkid<=0)
this.set_pprd_s_cookie("TJWC","");else
{if(!(this.new_pageid==40006&&1==this.new_domainid&&this.new_linkid>=1&&this.new_linkid<=3)&&!(this.new_pageid==40006&&2==this.new_domainid&&this.new_linkid>=2&&this.new_linkid<=4))
this.set_pprd_s_cookie("TJWC",this.new_pageid+"."+this.new_domainid+"."+this.new_linkid);}}
if(this.new_pageid<=0||this.new_domainid<=0||this.new_linkid<=0)
return;var val=this.new_pageid+"."+this.new_domainid+"."+this.new_linkid;if(this.new_pageid>=10001&&this.new_pageid<=20000)
this.set_pprd_p_cookie("EA",val);else if(this.new_pageid>=20001&&this.new_pageid<=30000)
this.set_pprd_p_cookie("IA",val);else if(this.new_pageid>=30001&&this.new_pageid<=40000)
this.set_pprd_p_cookie("CT",val);else if(this.new_pageid>=40001&&this.new_pageid<=50000)
this.set_pprd_p_cookie("PD",val);}
catch(e)
{}},handle_se_refer:function()
{try
{if(null==this.req_refer||""==this.req_refer)
return;var reg=/\.?(\w+)\.(com|cn)/gim;var arr=reg.exec(this.req_refer);if(null==arr||arr.length<2)
return;var se_domain=arr[1].toLowerCase();var se_map={baidu:1,google:2,soso:3,3721:4,sogou:5,msn:6,yisou:7,yahoo:8,live:9,yodao:10,iask:11,zhongsou:12,qikoo:13,aol:14,naver:15,yandex:16,ask:17,vnet:18};if(se_map[se_domain]!=null&&!(this.new_pageid>=40001&&this.new_pageid<=50000))
{this.se_pageid=40007;this.se_domainid=1;this.se_linkid=se_map[se_domain];this.set_pprd_p_cookie("PD","40007.1."+this.se_linkid);}}
catch(e)
{}},handle_pv_src:function()
{try
{if(this.new_pageid>0&&this.new_domainid>0&&this.new_linkid>0)
{var pageids={10069:1,10071:1,40036:1,40031:1,40030:1,10047:1,10001:1,10048:1,10050:1,20029:1,10049:1,10028:1,40026:1,30747:1,30547:1,10025:1,10005:1,10006:1,10007:1,10008:1,10012:1,10020:1,10021:1,30053:1,40016:1,40017:1,40012:1,20023:1,10011:1,10026:1,40021:1,40019:1,30039:1,10029:1,10030:1,10031:1,10032:1,10033:1,10038:1,40005:1,40006:1,40024:1,40018:1,40004:1,40009:1,5:1,1020:1,30661:1,10035:1,20036:1,20040:1};if(pageids[this.new_pageid]!=null||(31463==this.new_pageid&&(2==this.new_domainid||13==this.new_domainid)))
{this.set_pprd_s_cookie("PVS","NR."+this.new_pageid+"."+this.new_domainid+"."+this.new_linkid);this.set_pprd_s_cookie("PVSE","1");return;}}
if((114==this.old_pageid||199==this.old_pageid||119==this.old_pageid)&&this.old_domainid>0&&this.old_linkid>0)
{this.set_pprd_s_cookie("PVS","OR."+this.old_pageid+"."+this.old_domainid+"."+this.old_linkid);this.set_pprd_s_cookie("PVSE","1");return;}
var reg1=/^http:\/\/(\w+\.)*paipai\.com.*$/gi;var reg2=/^http:\/\/miniportal.paipai\.com.*$/gi;if(reg2.test(this.req_refer))
{this.set_pprd_s_cookie("PVS","MINIPORTAL");this.set_pprd_s_cookie("PVSE","1");return;}
if(reg1.test(this.req_refer))
{var pprd_s=this.do_get_cookie("PPRD_S");if(pprd_s!=null&&pprd_s.indexOf("PVS.")>=0)
{this.set_pprd_s_cookie("PVSE","0");return;}
else
{this.set_pprd_s_cookie("PVS","PAIPAI");this.set_pprd_s_cookie("PVSE","1");return;}}
if(40007==this.se_pageid)
{this.set_pprd_s_cookie("PVS","SE."+this.se_pageid+"."+this.se_domainid+"."+this.se_linkid);this.set_pprd_s_cookie("PVSE","1");return;}
if(null==this.req_refer||""==this.req_refer)
{if(this.req_url!=null&&(this.req_url.indexOf("&ft=1&")>=0||this.req_url.indexOf("?ft=1&")>=0))
{this.set_pprd_s_cookie("PVS","AUTOLOGIN");this.set_pprd_s_cookie("PVSE","1");return;}
var pprd_s=this.do_get_cookie("PPRD_S");if(pprd_s!=null&&pprd_s.indexOf("PVS.")>=0)
{this.set_pprd_s_cookie("PVSE","0");return;}
this.set_pprd_s_cookie("PVS","USER");this.set_pprd_s_cookie("PVSE","1");return;}
var reg=/\/\/([\.\w]+)/gim;var arr=reg.exec(this.req_refer);if(arr!=null&&arr.length>1)
{var domainname=arr[1].toLowerCase();if(""==domainname)
return;reg=/^(\w+\.)+qq\.com/gi;if(reg.test(domainname))
this.set_pprd_s_cookie("PVS","QW."+domainname);else
this.set_pprd_s_cookie("PVS","OW."+domainname);this.set_pprd_s_cookie("PVSE","1");}}
catch(e)
{}},handle_paipai_qq_com_pv_src:function()
{try
{if(this.req_host.indexOf("lady.qq.paipai.com")>=0||this.req_host.indexOf("digi.qq.paipai.com")>=0||this.req_host.indexOf("games.qq.paipai.com")>=0||this.req_host.indexOf("ellechina.qq.paipai.com")>=0||this.req_host.indexOf("mrmodern.qq.paipai.com")>=0)
{if(this.req_url.indexOf("http://lady.qq.paipai.com/aio/aio_")>=0)
return;if(this.req_refer!=null&&((this.req_refer.indexOf("lady.qq.paipai.com")>=0&&this.req_refer.indexOf("http://lady.qq.paipai.com/aio/aio_")<0)||(this.req_refer.indexOf("digi.qq.paipai.com")>=0)||(this.req_refer.indexOf("games.qq.paipai.com")>=0)||(this.req_refer.indexOf("ellechina.qq.paipai.com")>=0)||(this.req_refer.indexOf("mrmodern.qq.paipai.com")>=0)))
return;if(this.new_pageid>0&&this.new_domainid>0&&this.new_linkid>0)
{this.set_pprd_s_cookie("QQS","NR."+this.new_pageid+"."+this.new_domainid+"."+this.new_linkid);}
else
{this.set_pprd_s_cookie("QQS","USER");}}
else
{if(this.new_pageid>0&&this.new_domainid>0&&this.new_linkid>0)
{var pageids={10035:1,10026:1,20023:1,20036:1,31166:1};if(pageids[this.new_pageid]!=null)
{this.set_pprd_s_cookie("QQS","NR."+this.new_pageid+"."+this.new_domainid+"."+this.new_linkid);}}}}
catch(e)
{}},handle_sem_src:function()
{if(40007!=this.se_pageid||1!=this.se_domainid||1!=this.se_linkid)
return;try
{var reg=/((wd)|(word))=([^\&\?\=\#]+)[\&\?\=\#]?/gim;var arr=reg.exec(this.req_refer);if(arr==null||arr.length<5)
return;var kw=this.url_encode(arr[4].toUpperCase());this.set_pprd_p_cookie("SEM",kw);}catch(e){}},ramble:function()
{return"";},tps:function()
{if(typeof(timePoints)!="object"||null==timePoints)
return"";try
{if(0==timePoints.length)
return"";timePoints.push({a:"t",b:new Date()});var s=timePoints[0].b.getTime();var r="&tps=";for(var i=1;i<timePoints.length;i++)
{if(i>1)
r+="|"+timePoints[i].a+"_"+(timePoints[i].b.getTime()-s);else
r+=timePoints[i].a+"_"+(timePoints[i].b.getTime()-s);}
return r;}
catch(e)
{return"";}},handle_ping_report:function()
{try
{var euin=this.do_get_cookie("uin_cookie");if((null==euin||""==euin)&&(typeof(UIN_PAIPAI_PV)=="string"||typeof(UIN_PAIPAI_PV)=="number")&&UIN_PAIPAI_PV!=null)
{euin=UIN_PAIPAI_PV;}
if(null==euin||""==euin||"0"==euin)
{var tmpuin=this.do_get_cookie("pt2gguin");if(null!=tmpuin&&""!=tmpuin)
{euin=tmpuin.replace("o0","");}}
var url_data="r="+(encodeURIComponent(this.req_refer).substring(0,512))+"&u=http://"+this.req_host+"&fu="+encodeURIComponent(this.req_url)+"&resolution="+window.screen.width+"*"+window.screen.height+"&color="+window.screen.colorDepth+"&cookiesup="+((typeof(navigator.cookieEnabled)!="undefined"&&navigator.cookieEnabled)?"1":"0")+"&pageId="+this.old_pageid+"&domainId="+this.old_domainid+"&linkId="+this.old_linkid+"&fpageId="+this.new_pageid+"&fdomainId="+this.new_domainid+"&flinkId="+this.new_linkid+"&sepageid="+this.se_pageid+"&sedomainid="+this.se_domainid+"&selinkid="+this.se_linkid+"&euin="+(euin!=null?euin:'')+"&sc="+this.sc+this.ramble()+this.tps();try
{var reg=/^auction\d?\.paipai\.com$/gim;var reg2=/^item\d?\.wanggou\.com$/gim;if(typeof(pageMess)=="object"&&(reg.test(this.req_host)||reg2.test(this.req_host)))
url_data+="&aa="+pageMess.commodityClassId+","+pageMess.userCredit+","+pageMess.userAuth+","+pageMess.userProprety+","+pageMess.userProprety1+","+pageMess.userProprety2+","+parseInt(parseFloat(pageMess.commodityPrice)*100+"")+","+pageMess.commodityState;}
catch(e){}
try
{var reg=/^shop\.paipai\.com$/gim;var reg2=/^shop\.wanggou\.com$/gim;if(shopData!=null&&typeof(shopData)=="object"&&(reg.test(this.req_host)||reg2.test(this.req_host)))
url_data+="&aa="+shopData.userCredit+","+shopData.userAuth+","+shopData.userProprety1+","+shopData.userProprety2+","+shopData.userProprety3+","+(typeof(shopData.shopType)=="string"?shopData.shopType:"");}
catch(e){}
loadPvCount(function(){$loadScript("http://service.paipai.com/cgi-bin/ping?rand="+Math.round(Math.random()*100000)+"&"+url_data);window.getPingDataCallBack=function(pingData){var visitkey=$getCookie("visitkey");if(!visitkey||visitkey!=pingData.visitkey){var domain="";if(document.domain=="buy.qq.com"){domain="buy.qq.com";}else if(/^(\w+\.)?wanggou\.com$/.test(document.domain)){domain="wanggou.com";}else if(/^(\w+\.)?51buy\.com$/.test(document.domain)){domain="51buy.com";}
if(domain){$setCookie("visitkey",pingData.visitkey,parseInt((new Date(2099,11,31)-new Date())/(1000*60)),"/",domain);$pubsub.publish("visitkeyPlanted",pingData.visitkey);}}
ECC.cloud.report.pv(objMsg);}});}
catch(e){}},handle_speed_report:function()
{if(typeof(timePoints)!="object"||null==timePoints||null==this.req_host)
return;try
{if(timePoints.length<2)
return;var r=parseInt(Math.random()*1000);var d=this.req_host;if(d=="www.paipai.com"||d=="my.paipai.com"||d=="miniportal.paipai.com"||d=="pay.paipai.com"||d=="member.paipai.com"||d=="ext.paipai.com")
{if(r>=500)
{return;}}
else if(d=="auction1.paipai.com"||d=="auction2.paipai.com"||d=="shop.paipai.com"||d.indexOf("list")>=0||d.indexOf("search")>=0||d.indexOf("sse")>=0)
{if(r>=50)
{return;}}
else;if(typeof(stName)=="string"&&stName.length>0)
d=escape(stName);var u="http://pagespeed.report.qq.com/r.cgi?name="+d;for(i=1;i<timePoints.length;i++)
u+="&"+i+"="+(timePoints[i].b.getTime()-timePoints[i-1].b.getTime());loadPvCount(u,'img');}
catch(e)
{}},handle_auction_refer:function()
{try
{var r1=/^auction[1-9]\.paipai\.com.*$/gim;if(!r1.test(this.req_host))
return;var ref="NA";if(this.req_refer!=null&&this.req_refer.length>0)
{if(this.req_url==this.req_refer)
return;var r2=/:\/\/([^\?\#\&\=]*)/gim;var arr=r2.exec(this.req_refer);if(arr!=null&&arr.length==2&&arr[1].length>0)
ref=arr[1];}
if(ref!='NA'&&ref.substr(ref.length-1)=='/')
ref=ref.substr(0,ref.length-1);if(ref!='NA')
this.set_pprd_t_cookie('AS',ref);}
catch(e)
{}},handle_qzone_src:function()
{try
{var newrd_reg=/qz_snsclick=([\d\_]+)\D?/gim;var arr=newrd_reg.exec(this.req_url);if(null!=arr&&arr.length==2)
{var sValue=arr[1];this.set_pprd_p_cookie('QZSNS',arr[1]);}}
catch(e)
{}},handle_qzone_ztc:function()
{try
{var newrd_reg=/qz_express=([\w\!]+)[^\w\!]?/gim;var arr=newrd_reg.exec(this.req_url);if(null!=arr&&arr.length==2)
{this.set_pprd_p_cookie('QZZTC',arr[1]);}}
catch(e)
{}},handle_qqshow_flag:function()
{try
{var reg=/qqx=([\w]+)\W?/gim;var arr=reg.exec(this.req_url);if(null!=arr&&arr.length==2)
{this.set_pprd_p_cookie('QQX',arr[1]);}}
catch(e)
{}},handle_vb2ctag_flag:function()
{try
{var reg=/VB2CTAG=([\w]+)\W?/gim;var arr=reg.exec(this.req_url);var d=new Date(),s=(d.getFullYear()+"_"+(d.getMonth()+1)+"_"+d.getDate().toString()+"_"+d.getHours()+"_"+d.getMinutes()+"_").replace(/_(\d)_/g,"_0$1_").replace(/_(\d)_/g,"_0$1_").replace(/_(\d)_/g,"_0$1_").replace(/_(\d)_/g,"_0$1_").replace(/_/g,"")
if(null!=arr&&arr.length==2)
{this.set_pprd_p_cookie('VB2CTAG',s+"_"+arr[1]);}}
catch(e)
{}},handle_discuz_flag:function()
{try
{var reg=/discuz=([\w]+)\W?/gim;var arr=reg.exec(this.req_url);if(null!=arr&&arr.length==2)
{this.set_pprd_p_cookie('DISCUZ',arr[1]);}}
catch(e)
{}},handle_qzone_gdt:function()
{try
{var newrd_reg=/qz_gdt=([\w\!]+)[^\w\!]?/gim;var arr=newrd_reg.exec(this.req_url);if(null!=arr&&arr.length==2)
{this.set_pprd_p_cookie('QZGDT',arr[1]);}}
catch(e)
{}},handle_paipai_ct:function()
{try
{var newrd_reg=/pps=exp\.([^&#]*)(&|$|#)/gim;var arr=newrd_reg.exec(this.req_url);if(null!=arr&&arr.length>=2)
{this.set_pprd_p_cookie('CTZTC',arr[1]);}}
catch(e)
{}},handle_paipai_mart:function()
{try
{var newrd_reg=/pps=mart\.([^&#]*)(&|$|#)/gim;var arr=newrd_reg.exec(this.req_url);if(null!=arr&&arr.length>=2)
{this.set_pprd_p_cookie('MART',arr[1]);}}
catch(e)
{}},handle_paipai_cpc:function()
{try
{var newrd_reg=/pps=cpc\.([^&#]*)(&|$|#)/gim;var arr=newrd_reg.exec(this.req_url);if(null!=arr&&arr.length>=2)
{this.set_pprd_p_cookie('CPC',arr[1]);}}
catch(e)
{}},handle_paipai_cps:function()
{try
{var newrd_reg=/pps=cps\.([^&#]*)(&|$|#)/gi;var arr=newrd_reg.exec(this.req_url);if(null!=arr&&arr.length>=2)
{this.set_pprd_p_cookie('CPS',arr[1]);}}
catch(e)
{}},handle_paipai_focus:function()
{try
{var newrd_reg=/pps=focus\.([^&#]*)(&|$|#)/gi;var arr=newrd_reg.exec(this.req_url);if(null!=arr&&arr.length>=2)
{this.set_pprd_p_cookie('FOCUS',arr[1]);}}
catch(e)
{}},handle_shopcoupon:function()
{try
{var shopcoupon=0;var reg=/shopcoupon=(\d+)\D?/gim;var arr=reg.exec(this.req_url);if(null!=arr&&arr.length==2)
{shopcoupon=arr[1];}
if((typeof(SHOPCOUPON_ACTIVE)=="string"||typeof(SHOPCOUPON_ACTIVE)=="number")&&SHOPCOUPON_ACTIVE!=null)
{shopcoupon=SHOPCOUPON_ACTIVE;}
if(0==shopcoupon)
return;var val=shopcoupon;var pprd_p=this.do_get_cookie("PPRD_P");if(null==pprd_p)
pprd_p="";var reg=/SC\.([\d,]+)([^\d,]?)/gim;var arr=reg.exec(pprd_p);if(null!=arr&&arr.length>=2)
{var arr2=arr[1].split(',');var j=1;for(var i=0;i<arr2.length&&j<=4;i++)
{if(arr2[i]>0&&arr2[i]!=shopcoupon)
{val+=","+arr2[i];j++;}}}
this.set_pprd_p_cookie('SC',val);}
catch(e)
{}},handle_qqtuan_flag:function()
{try
{var reg=/tuantg=([\w\!\_\$\|]+)\W?/gim;var arr=reg.exec(this.req_url);if(null!=arr&&arr.length==2)
{this.set_pprd_p_cookie('QT',arr[1]);}}
catch(e)
{}},handle_crm_report:function(){var curHref=window.location.href;var ptagArray=['20036.58.2','20036.58.3','20029.9.12'];var ptag=$getQuery("PTAG",curHref);if($inArray(ptag,ptagArray)>=0){var reportCgi="http://my.paipai.com/crm/u/crmclick.xhtml",uin=$getQuery("uin",curHref),buin=$getQuery("buin",curHref),mktid=$getQuery("mktid",curHref),did=$getQuery("did",curHref),reportUrl;if(/^\d+$/.test(uin)&&/^\d+$/.test(buin)&&/^\d+$/.test(mktid)){if(did){reportUrl=reportCgi+"?uin="+uin+"&buin="+buin+"&mktid="+mktid+"&did="+did+"&t="+Math.random();}else{reportUrl=reportCgi+"?uin="+uin+"&buin="+buin+"&mktid="+mktid+"&t="+Math.random();}
$loadScript(reportUrl);}}},main:function()
{try
{if(this.get_pars()!=0)
return;this.handle_old_rd();this.handle_new_rd();this.handle_se_refer();this.handle_speed_report();this.handle_qzone_src();this.handle_qzone_ztc();this.handle_qzone_gdt();this.handle_paipai_ct();this.handle_paipai_mart();this.handle_paipai_cpc();this.handle_paipai_cps();this.handle_qqshow_flag();this.handle_discuz_flag();this.handle_shopcoupon();this.handle_paipai_focus();this.handle_qqtuan_flag();this.handle_vb2ctag_flag();this.handle_ping_report();this.handle_crm_report();}
catch(e)
{}}};paipai_pv.main();function do_ping()
{if(typeof(pgvMain)!='function')
return;var urlInfo=["","","","","",""];try{var doc=top?top:window;urlInfo[0]=doc.location.hostname.toLowerCase();urlInfo[1]=doc.location.pathname.toLowerCase();if(typeof(shopData)!="undefined"&&typeof(shopData.pageId)!="undefined"&&typeof(shopData.qqUin)!="undefined")
{var shophost_reg1=/.*shop\.paipai\.com.*/;if(shopData.pageId=="HOME_PAGE"&&!shophost_reg1.exec(urlInfo[0]))
{urlInfo[0]="shop.paipai.com";urlInfo[1]="/"+shopData.qqUin+urlInfo[1];}}
urlInfo[2]=doc.location.search.toLowerCase();urlInfo[3]=doc.document.referrer.toLowerCase();urlInfo[4]=((new RegExp("http://([^\/]*)[\/].*","ig")).exec(urlInfo[3]))?RegExp.$1:"";urlInfo[5]="http://"+urlInfo[0]+urlInfo[1];if(urlInfo[4]=="auction1.paipai.com"||urlInfo[4]=="auction2.paipai.com")
{urlInfo[6]=urlInfo[4]+"/";}
else if(urlInfo[4]=="shop.paipai.com"||/^[1-9][0-9]{4,9}\.paipai\.com$/gi.test(urlInfo[4]))
{urlInfo[6]="shop.paipai.com/";}
else
{urlInfo[6]=/http[s]?:\/\/([^\?]*).*/gim.exec(urlInfo[3])?RegExp.$1:"";}}catch(e){return;}
while(true)
{try
{if(urlInfo[0]=="shop.qq.com"||urlInfo[0].indexOf("icson.com")>=0||urlInfo[0].indexOf("51buy.com")>=0||urlInfo[0]=="etg.qq.com")
{break;}
pvCSTM="";if(urlInfo[0]=="auction1.paipai.com"||urlInfo[0]=="auction2.paipai.com"||urlInfo[0]=="auction1.3c.paipai.com")
{try
{try
{pvCSTM=pageMess.rootClassId;}
catch(e)
{try
{pvCSTM=pageMess.shopType;}
catch(e)
{}}
pvCurDomain="";pgvMain("pathtrace",{reserved1Param:"extUrl="+paipai_pv.url_encode(urlInfo[5])+"&extPageType=3&extArg="+paipai_pv.url_encode(urlInfo[2])+"&extShopID="+pageMess.qqUin+"&extFeatureID="+pageMess.commodityId,originalReferer:urlInfo[6],virtualURL:"/"+pvCSTM,virtualTitle:"商品详情",repeatApplay:"true",tagParamName:"PTAG"});break;}catch(e){break;}}else if(urlInfo[0]=="shop.paipai.com"||/^[1-9][0-9]{4,9}\.paipai\.com$/gi.test(urlInfo[0]))
{try
{try
{pvCSTM=shopData.shopType;}
catch(e)
{}
if(shopData.pageId=="HOME_PAGE")
{pvCurDomain="";pgvMain("pathtrace",{reserved1Param:"extUrl="+paipai_pv.url_encode(urlInfo[5])+"&extPageType=1&extArg="+paipai_pv.url_encode(urlInfo[2])+"&extShopID="+shopData.qqUin+"&extFeatureID=",originalReferer:urlInfo[6],virtualDomain:"shop.paipai.com",virtualURL:"/"+pvCSTM,virtualTitle:"店铺详情",repeatApplay:"true",tagParamName:"PTAG"});}
else if(shopData.pageId=="CATEGORY_PAGE")
{pvCurDomain="";pgvMain("pathtrace",{reserved1Param:"extUrl="+paipai_pv.url_encode(urlInfo[5])+"&extPageType=2&extArg="+paipai_pv.url_encode(urlInfo[2])+"&extShopID="+shopData.qqUin+"&extFeatureID="+shopData.classId,originalReferer:urlInfo[6],virtualDomain:"shop.paipai.com",virtualURL:"/"+pvCSTM,virtualTitle:"店铺详情",repeatApplay:"true",tagParamName:"PTAG"});}
else
{pvCurDomain="";pgvMain("",{originalReferer:urlInfo[6],virtualDomain:"shop.paipai.com",virtualURL:"/"+pvCSTM,virtualTitle:"店铺详情",repeatApplay:"true",tagParamName:"PTAG"});}
break;}
catch(e){break;}}
else if(/^sse.*\.paipai\.com$/gi.test(urlInfo[0])||/^list.*\.paipai\.com$/gi.test(urlInfo[0])||/^search.*\.paipai\.com$/gi.test(urlInfo[0]))
{try
{pvCSTM=document.form2.sClassid1.value;}
catch(e)
{}}
pvCurDomain="";pgvMain("",{originalReferer:urlInfo[6],repeatApplay:"true",tagParamName:"PTAG"});break;}catch(e){break;}}
while(true)
{break;if(window['$vipshop']||urlInfo[0].indexOf("icson.com")>=0||urlInfo[0].indexOf("51buy.com")>=0||urlInfo[0]=="etg.qq.com")
{break;}
try
{r=/http[s]?:\/\/([^\?#=&]*).*/gim;var req_refer=(r.exec(urlInfo[3]))?RegExp.$1:"";r=/http[s]?:\/\/([^\?#=&]*).*/gim;var req_url=(r.exec(urlInfo[5]))?RegExp.$1:"";var shop_reg=/([1-9][0-9]{4,9})\.paipai\.com/gim;req_url=req_url.replace(shop_reg,"shop.paipai.com/$1");req_refer=req_refer.replace(shop_reg,"shop.paipai.com/$1");var qq_reg=/paipai\.(.*\.)?qq\.com/gim;req_url=req_url.replace(qq_reg,"$1qq.paipai.com");req_refer=req_refer.replace(qq_reg,"$1qq.paipai.com");var r1=/((auction1)|(auction2)|(shop)|(sse1)|(list1)|(sse2)|(list2)|(sseld))\.paipai\.com.*/gim;req_url=req_url.replace(r1,"$1.paipai.com");req_refer=req_refer.replace(r1,"$1.paipai.com");req_url=req_url.replace("shop.qq.com","shop.qq.paipai.com");req_refer=req_refer.replace("shop.qq.com","shop.qq.paipai.com");req_url=req_url.replace("buy.qq.com","buy.qq.paipai.com");req_refer=req_refer.replace("buy.qq.com","buy.qq.paipai.com");var r2=/(.*)\.paipai\.com/gim;var v_virtualRefDomain="";if(r2.test(req_refer))
{req_refer=req_refer.replace(r2,"/$1");v_virtualRefDomain="tcss.paipai.com";}
req_url=req_url.replace(r2,"/$1");var v_virtualDomain="tcss.paipai.com";pvCurDomain="";pvCSTM="";if(""==v_virtualRefDomain)
pgvMain("pathtrace",{virtualDomain:v_virtualDomain,virtualURL:req_url,useCookie:"false",useRefUrl:true,override:true,careSameDomainRef:true,repeatApplay:"true",tagParamName:"PTAG"});else
pgvMain("pathtrace",{virtualDomain:v_virtualDomain,virtualURL:req_url,virtualRefDomain:v_virtualRefDomain,virtualRefURL:req_refer,useCookie:"false",useRefUrl:true,override:true,careSameDomainRef:true,repeatApplay:"true",tagParamName:"PTAG"});break;}catch(e)
{break;}}}
try{loadPvCount(do_ping);}catch(e){}
(function(){if(paipai_pv.req_url&&(paipai_pv.req_url.indexOf("sse1.paipai.com")>-1||paipai_pv.req_url.indexOf("list1.paipai.com")>-1)){var ab=paipai_pv.do_get_cookie("ABT"),vkey=paipai_pv.do_get_cookie("visitkey"),pprd;if(ab!=null&&ab==1){pprd=1;}else{vkey=(vkey)?vkey.substring(vkey.length-1,vkey.length):0;pprd=((vkey)==1)?1:0;if(ab!=null&&ab==2){pprd=0;}
else{paipai_pv.do_set_cookie("ABT",pprd);};};paipai_pv.set_search_abtest_pprd_p_cookie(pprd);}})();(function(){var oBoard=$id("noticeBoard");if(oBoard){var date=new Date();$loadScript("http://static.paipaiimg.com/js/pp.noticeBoard.js?t="+date.getMonth()+date.getDate()+date.getHours());window.showGonggao=function(o){var opt={noticeId:"",noticeType:"1",template:"<p attr='{#id#}'>{#content#}</p>",starTime:"",endTime:"",nowTime:(new Date()).getTime(),domain:"",level:"0",content:""};var noticeList=[],curNotice,listLen,tempRe,noticeFlag=$getCookie("noticeFlag");var curUrl=window.location.href,strArr=[],tempHtml="";var cancleNotice=function(){var tId=this.getAttribute("attr"),tempStr=",",date=(new Date());var intervalMin,H=date.getHours();if(noticeFlag){tempStr=noticeFlag;}
tempStr=tempStr+tId+",";intervalMin=(24-H)*60;$setCookie("noticeFlag",tempStr,intervalMin,'/','paipai.com');showGonggao(showGonggao.noticeList);};for(var i=0;i<o.length;i++){noticeList[i]=opt;for(var n in o[i]){noticeList[i][n]=o[i][n]}
if(noticeList[i]["domain"].length>0){tempRe=new RegExp(noticeList[i]["domain"],"i");if(tempRe.test(curUrl)){if(noticeList[i]["nowTime"]>noticeList[i]["starTime"]&&noticeList[i]["nowTime"]<noticeList[i]["endTime"]){if(!noticeFlag||noticeFlag.indexOf(","+noticeList[i]["noticeId"]+",")==-1){if(!curNotice){curNotice={};for(var m in noticeList[i]){curNotice[m]=noticeList[i][m];}}else{if(parseInt(noticeList[i]["level"],10)<parseInt(curNotice["level"],10)){for(var m in noticeList[i]){curNotice[m]=noticeList[i][m];}}}}}}}}
showGonggao["noticeList"]=noticeList;if(curNotice){if(curNotice["noticeType"]=="1"){strArr.push(curNotice["template"].replace("{#id#}",curNotice["noticeId"]).replace("{#content#}",curNotice["content"]));}else{strArr.push(curNotice["content"]);}
strArr.push("<span class='alert_ico'></span><span class='close_ico' id='cancleBtn' attr='"+curNotice["noticeId"]+"'></span>");tempHtml=strArr.join("");}
if(tempHtml.length>0){oBoard.innerHTML=tempHtml
if(curNotice["noticeType"]=="1"){oBoard.className=oBoard.className.replace(" h","");}else{oBoard.className="spread_img";}
$id("cancleBtn").onclick=cancleNotice;}else{if(oBoard.className.indexOf(" h")==-1){oBoard.className+=" h";}}};}})();setTimeout(function(){if(location.href.indexOf("shop.qq.com")>=0)return;var rate=1;if(!window.speedTimePoint)return;if(speedTimePoint.length<2)return;var s=[],sp=speedTimePoint;for(var i=1;i<sp.length;i++){if(!!sp[i])s.push(i+"="+(sp[i]-sp[0][0]));}
var url="http://isdspeed.qq.com/cgi-bin/r.cgi?flag1="+sp[0][1]+"&flag2="+sp[0][2]+"&flag3="+sp[0][3]+"&"+s.join("&");if(sp[sp.length-1]-sp[1]>8000){url="";}
if(Math.random()<rate)
$report(url);},1000);function reportCountTjw(){var countTjwView=window.countTjwView||[],itemList=document.getElementsByName("countTjwView"),countList={};for(var i=0,len=countTjwView.length;i<len;i++){var oPush=$id("countTjwView"+countTjwView[i][0]);if(null!==oPush){var index=$getYP(oPush);countList[index]?countList[index].push(countTjwView[i]):countList[index]=[countTjwView[i]];}}
for(var i=0,len=itemList.length;i<len;i++){var cur=itemList[i],index=$getYP(cur),countTjwInfo=[cur.id.replace("countTjwView",""),cur.getAttribute("data")&&"",cur.href];countList[index]?countList[index].push(countTjwInfo):countList[index]=[countTjwInfo];}
for(var k in countList){$scroll({height:k,data:countList[k],func:report});}
function report(opt){var ptag=[],imgurl=[],desturl=[];for(var i=0,len=opt.data.length;i<len;i++){ptag.push(opt.data[i][0]);imgurl.push(escape(opt.data[i][1]));desturl.push(escape(opt.data[i][2]));}
$loadScript("http://service.paipai.com/cgi-bin/ad_exposure_rate?ptag="+ptag.join("{||}")+"&imgurl="+imgurl.join("{||}")+"&desturl="+desturl.join("{||}")+"&t="+Math.random());}};setTimeout(reportCountTjw,2000);window.setTimingRpt=function(f1,f2,f3_ie,f3_c){var _t,f3,_t0,_tmp,_p=window.webkitPerformance||window.performance,_da=[],_ta=["navigationStart","unloadEventStart","unloadEventEnd","redirectStart","redirectEnd","fetchStart","domainLookupStart","domainLookupEnd","connectStart","connectEnd","requestStart","responseStart","responseEnd","domLoading","domInteractive","domContentLoadedEventStart","domContentLoadedEventEnd","domComplete","loadEventStart","loadEventEnd"];if(_p&&(_t=_p.timing)){f3=$isBrowser("ie")?f3_ie:f3_c;_t0=_t[_ta[0]];for(var i=1,l=_ta.length;i<l;i++){_tmp=_t[_ta[i]];_tmp=(_tmp?(_tmp-_t0):0);_tmp>0&&_da.push(i+'='+_tmp);}
var url='http://isdspeed.qq.com/cgi-bin/r.cgi?flag1='+f1+'&flag2='+f2+'&flag3='+f3+'&'+_da.join('&');setTimeout(function(){$report(url);},0);}};if(window.performanceTimePoint){$addEvent(window,"load",function(){var p=window.performanceTimePoint;window.setTimingRpt(p[0],p[1],p[2],p[3]);});}
window.imTalk=function(uin,tid,sigT,sigP){var url=(tid)?("tencent://message/?uin="+uin+"&fromuserid="+tid+"&touserid="+tid+"&unionid=72000106&WebSiteName=拍拍网&Service=19&sigT="+sigT+"&sigU="+sigP):"tencent://message/?uin="+uin+"&fromuserid=no&touserid=no&unionid=72000106&WebSiteName=拍拍网&Service=19&sigT="+sigT+"&sigU="+sigP;var ua=window.navigator.userAgent.toLowerCase();if(ua.indexOf("msie")!=-1){try{window.location.href=url;$countRd('1050.1.1');}catch(e){$countRd('1050.1.2');showError(3);}}else if(/(firefox|safari|opera|chrome)/i.test(ua)||window.opera){window.location.href=url;$countRd('1050.1.5');}else{$countRd('1050.1.4');showError(1);}
function showError(type){switch(type){case 1:alert("拍拍网温馨提示：\r\n　　您使用的浏览器不支持QQ临时会话功能，请使用IE/TT浏览器访问。");break;case 2:alert("拍拍网温馨提示：\r\n　　您使用的QQ版本不支持临时会话功能，请您访问http://im.qq.com/下载最新版本QQ。");window.open("http://im.qq.com/");break;case 3:alert("拍拍网温馨提示：\r\n　　您没有安装QQ或您的浏览器设置禁止了QQ临时会话功能，请点击查看操作方法。");window.target="_top";window.open("http://help.paipai.com/learn/aqkj/");break;}};};window.CheckInstall_TM_Hummer=window.imTalk;(function(){if(window.__g_tj_ptag){return;}
var statistics=$getQuery("g_tj");if(statistics){var domain=document.domain;domain=domain.split(".");while(domain.length>2){domain.shift()};if(statistics=="ptag"){$setCookie("g_tj","ptag",0,"/",domain.join("."));statistics=1;}else if(statistics=="none"){$delCookie("g_tj","/",domain.join("."));statistics=0;}else{statistics=0;}}else{var cookie=$getCookie("g_tj");if(cookie=="ptag"){statistics=1;}}
if(statistics){try{var path="http://static.paipaiimg.com/js/version/2011/11/pp.market.rdstatistics.20111110.js?t="+new Date().getTime();var callback=function(){window.__g_tj_ptag=true;PP.market.rdstatistics.find("",true,false);}
var script=document.createElement('script');script.src=path;script.type="text/javascript";document.getElementsByTagName("head")[0].appendChild(script);if(script.addEventListener){script.addEventListener("load",callback,false);}else if(script.attachEvent){script.attachEvent("onreadystatechange",function(){if(script.readyState==4||script.readyState=='complete'||script.readyState=='loaded'){callback();}});}}catch(e){}}})();(function(){setTimeout(function(){window["$picSpeed"]&&$picSpeed();},5000);})();if("-webkit-transition"in document.createElement('div').style){$addEvent(document,"keyup",_egg_play_trick);function _egg_play_reset(){_egg_play_codes=[83,68,79,79,71,69,72,84,69,77,87,79,72,83];}
_egg_play_reset();function _egg_play_trick(evt){var t=_egg_play_codes.pop();try{if((evt.keyCode-t)==0){if(_egg_play_codes.length==0){if(document.getElementById("remixJs")){pfEggPlay();return};_egg_play_reset();var d=document,s=d.createElement('script');s.id='remixJs';s.src='http://static.paipaiimg.com/js/version/2013/02/pp.foot.eggPlay.20130227.js';(d.body||d.getElementsByTagName('head')[0]).appendChild(s);}}else{_egg_play_reset();}}catch(e){}}}
function include_login(){$login();}
(function(){setTimeout(function(){if($getCookie("fontStat")){return;}
var a=createDom("Tahoma"),b=createDom("微软雅黑,Tahoma");var exist=a.offsetWidth!=b.offsetWidth;var retCode=$returnCode({url:"http://buy.qq.com/test_font",frequence:10});retCode.report(exist,exist?0:1);document.body.removeChild(a);document.body.removeChild(b);setReportTag();},5000);function createDom(fontName){var n=document.createElement("A");n.href="#";n.style.fontFamily=fontName;n.style.position="absolute";n.innerHTML="TEst雅黑字体是否存在";document.body.appendChild(n);return n;}
function setReportTag(){var domain="";if(document.domain=="buy.qq.com"){domain="buy.qq.com";}else if(/^(\w+\.)?paipai\.com$/.test(document.domain)){domain="paipai.com";}
if(domain){$setCookie("fontStat","1",parseInt((new Date("2013/6/16")-new Date())/(60*1000)),"/",domain);};}})();})();
window['PP.foot']='1023:20130820:20130823173036';
window['PP.foot.time'] && window['PP.foot.time'].push(new Date());/*  |xGv00|d19e9b477f269c9b41703b5d5c5dbee1 */