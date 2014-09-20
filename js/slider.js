/* Slider Kit v1.9.2 - Sliding contents with jQuery http://www.kyrielles.net/sliderkit */
(function(b){SliderKit=function(){var a=this;this._init=function(c,d){this.options=b.extend({},this._settings,d);this.cssNames={selected:this.options.cssprefix+"-selected",panel:this.options.cssprefix+"-panel",panels:this.options.cssprefix+"-panels",panelActive:this.options.cssprefix+"-panel-active",panelOld:this.options.cssprefix+"-panel-old",panelsWrapper:this.options.cssprefix+"-panels-wrapper",nav:this.options.cssprefix+"-nav",navClip:this.options.cssprefix+"-nav-clip",navBtn:this.options.cssprefix+
"-nav-btn",navPrev:this.options.cssprefix+"-nav-prev",navNext:this.options.cssprefix+"-nav-next",btnDisable:this.options.cssprefix+"-btn-disable",btnPause:this.options.cssprefix+"-pause-btn",goPrev:this.options.cssprefix+"-go-prev",goNext:this.options.cssprefix+"-go-next",playBtn:this.options.cssprefix+"-play-btn",goBtns:this.options.cssprefix+"-go-btn"};this.domObj=b(c);this.panels=b("."+this.cssNames.panel,this.domObj);this.allItems=this.panels.size();this.nav=b("."+this.cssNames.nav,this.domObj);
this.navClip=b("."+this.cssNames.navClip,this.nav);this.arePanels=0<this.allItems?1:0;this.isNavClip=0<this.navClip.size()?1:0;!this.arePanels&&!this.isNavClip&&this._errorReport("Error #01",this.options.debug,1);this.domObjHeight=this.domObj.height();this.domObjWidth=this.domObj.width();!this.domObjHeight&&!this.options.freeheight&&(this.domObjHeight=this.options.height,this.domObj.css("height",this.domObjHeight),this._errorReport("Error #02",this.options.debug,0));this.domObjWidth||(this.domObjWidth=
this.options.width,this.domObj.css("width",this.domObjWidth),this._errorReport("Error #02",this.options.debug,0));this.domObj.css("display","block");this.newId=this.prevId=this.currId=0;this.currPanel=null;this.prevPanelStill=this.prevPanel=0;this.firstTime=1;this.scrollActive=0;this.isPlaying=null;this.changeOngoing=!1;this.currLine=1;this.animating=!1;this.panelAnteFns=[];this.panelPostFns=[];this.navAnteFns=[];this.navPostFns=[];this.runningScope=this.nav;this.isNavClip&&this._buildNav();this._buildControls();
this.arePanels&&(this.panelsBag=b("."+this.cssNames.panels,this.domObj),"sliding"==this.options.panelfx&&this._wrapPanels());this.lineScrollDo=!this.arePanels?1:0;this.options.mousewheel&&this.domObj.mousewheel(function(c,d){d>0?a.stepBackward():a.stepForward();return false});this.options.keyboard&&this.domObj.keyup(function(c){c.keyCode==37?a.stepBackward():c.keyCode==39&&a.stepForward()});this.options.panelclick&&this.arePanels&&this.panelsBag.click(function(){a.stepForward();return false});this.startId=
this.options.start>=this.allItems?this.allItems-1:0>this.options.start?0:this.options.start;if(this.options.counter)try{this.Counter()}catch(g){this._errorReport(g,this.options.debug,0)}if(this.imageFx)try{this.imageFx()}catch(f){this._errorReport(f,this.options.debug,0)}if(this.options.delaycaptions)try{this.DelayCaptions(this.options.delaycaptions)}catch(e){this._errorReport(e,this.options.debug,0)}this.changeWithId(this.startId,null);this.options.auto&&(this.autoScrollStart(),this._autoScrollHoverStop());
if(this.options.timer)try{this.Timer(this.options.timer)}catch(h){this._errorReport(h,this.options.debug,0)}this.arePanels&&!this.options.fastchange&&(this.runningScope=this.domObj.find("."+this.cssNames.panels,"."+this.cssNames.nav));return this};this._settings={cssprefix:"sliderkit",width:500,height:350,start:0,auto:!0,autospeed:4E3,autostill:!1,mousewheel:!1,keyboard:!1,circular:!1,shownavitems:5,navitemshover:!1,navclipcenter:!1,navcontinuous:!1,navscrollatend:!1,navpanelautoswitch:!0,navfx:"sliding",
navfxbefore:function(){},navfxafter:function(){},scroll:null,scrollspeed:600,scrolleasing:null,panelfx:"fading",panelfxspeed:700,panelfxeasing:null,panelfxfirst:"none",panelfxbefore:function(){},panelfxafter:function(){},panelbtnshover:!1,panelclick:!1,verticalnav:!1,verticalslide:!1,tabs:!1,freeheight:!1,fastchange:!0,counter:!1,delaycaptions:!1,timer:!1,imagefx:!1,debug:!1};this._errorReport=function(a,d,b){d&&alert("Slider Kit error!\nMessage = "+a+" (see doc for details)\nElement id = "+this.domObj.attr("id")+
"\nElement class = "+this.domObj.attr("class"));if(b)return!1};this._autoScrollHoverStop=function(){!this.isPlayBtn&&!this.options.autostill&&this.domObj.hover(function(){null!=a.isPlaying&&a.autoScrollStop()},function(){a.autoScrollStart()});this.options.autostill&&this.domObj.mouseleave(function(){null==a.isPlaying&&a.autoScrollStart()})};this._buildNav=function(){this.navUL=b("ul",this.navClip);this.navLI=b("li",this.navUL);this.navLINum=this.navLI.size();this.arePanels&&(this.navLINum!=this.allItems&&
1==this.nav.size())&&this._errorReport("Error #03",this.options.debug,1);if(this.options.tabs)this.options.shownavitems=this.allItems;else{var c=function(c){attrVal=a.navLI.css(c);return"auto"!=attrVal&&""!=c&&"0px"!=c?parseInt(attrVal):0},d=this.options.verticalnav?this.nav.height():this.nav.width(),g=this.navLI.outerWidth(!0),f=this.navLI.outerHeight(!0),e=c("margin-left")+c("margin-right"),c=c("margin-top")+c("margin-bottom");this.allItems=this.navLINum;this.options.shownavitems>this.allItems&&
(this.options.shownavitems=this.navLINum);this.navLIsize=this.options.verticalnav?f:g;this.navULSize=this.navLIsize*this.navLINum;this.navClipSize=this.options.shownavitems*this.navLIsize-(this.options.verticalnav?c:e);this.cssPosAttr=this.options.verticalnav?"top":"left";e=this.options.verticalnav?"height":"width";this.navLI.css({width:this.navLI.width(),height:this.navLI.height()});this.navUL.css(e,this.navULSize+"px");this.navClip.css({width:this.options.verticalnav?g:this.navClipSize,height:this.options.verticalnav?
this.navClipSize:f});this.options.navclipcenter&&this.navClip.css(this.cssPosAttr,(d-this.navClipSize)/2).css("margin","0");if(this.allItems>this.options.shownavitems&&(this.scrollActive=!0,null==this.options.scroll||0>this.options.scroll||this.options.scroll>this.allItems))this.options.scroll=this.options.shownavitems;this.navBtns=b("."+this.cssNames.navBtn,this.nav);0<this.navBtns.size()&&this._buildNavButtons()}this.options.navitemshover&&this.arePanels?this.navLI.mouseover(function(){a.changeWithId(b("li",
b(this).parent()).index(this),b(this))}):(this.arePanels||this.options.navscrollatend)&&this.navLI.click(function(){a.changeWithId(b("li",b(this).parent()).index(this),b(this));return!1})};this._buildNavButtons=function(){this.scrollActive?(this.scrollBtns=!0,this.navBtnPrev=b("."+this.cssNames.navPrev,this.nav),this.navBtnNext=b("."+this.cssNames.navNext,this.nav),this.navBtns.removeClass(this.cssNames.btnDisable),this.navBtnPrev.click(function(){a.navPrev();return!1}),this.navBtnNext.click(function(){a.navNext();
return!1}),this.options.navcontinuous&&(this.navBtnPrev.mouseover(function(){a.navPrev(!0)}),this.navBtnNext.mouseover(function(){a.navNext(!0)}),this.navBtns.mouseout(function(){a.navStopContinuous()})),this.options.circular||this.navBtnPrev.addClass(this.cssNames.btnDisable)):this.navBtns.addClass(this.cssNames.btnDisable)};this._getNavPos=function(){this.navPos=this.options.verticalnav?this.navUL.position().top:this.navUL.position().left;this.LIbefore=Math.ceil(Math.abs(this.navPos)/this.navLIsize);
this.LIafter=Math.floor((this.navULSize-Math.abs(this.navPos)-this.navClipSize)/this.navLIsize);0>this.LIafter&&(this.LIafter=0)};this._buildControls=function(){this.playBtn=b("."+this.cssNames.playBtn,this.domObj);this.gBtns=b("."+this.cssNames.goBtns,this.domObj);this.isPlayBtn=0<this.playBtn.size()?1:0;this.goBtns=0<this.gBtns.size()?1:0;this.isPlayBtn&&(this.options.auto&&this.playBtn.addClass(this.cssNames.btnPause),this.playBtn.click(function(){a.playBtn.hasClass(a.cssNames.btnPause)?a.playBtnPause():
a.playBtnStart();return!1}));this.goBtns&&(this.goBtnPrev=b("."+this.cssNames.goPrev,this.domObj),this.goBtnNext=b("."+this.cssNames.goNext,this.domObj),this.options.panelbtnshover&&(this.gBtns.hide(),b("."+this.cssNames.panels,this.domObj).hover(function(){a.gBtns.fadeIn()},function(){a.gBtns.fadeOut()})),this.goBtnPrev.click(function(){a.stepBackward(b(this));return false}),this.goBtnNext.click(function(){a.stepForward(b(this));return false}))};this._wrapPanels=function(){0==b("."+this.cssNames.panelsWrapper,
this.domObj).size()&&(this.panels.wrapAll('<div class="'+this.cssNames.panelsWrapper+'"></div>'),this.panelsWrapper=b("."+this.cssNames.panelsWrapper,this.panelsBag),this.panelsWrapper.css("position","relative"))};this._change=function(c,d,g,f,e){e&&null!=this.isPlaying&&(this.isPlayBtn&&this.playBtnPause(),this.options.autostill&&a.autoScrollStop());if(c&&c.hasClass(this.cssNames.btnDisable))return!1;e=0;if(!(0<b(":animated",this.runningScope).size())&&!this.animating){this.prevId=this.currId;if(null==
g&&!f)this.currId="-="==d?this.currId+1:this.currId-1;else if(null!=g){g=parseInt(g);this.currId=0>g?0:g>this.allItems-1?this.allItems-1:g;var h=c?c.parent().parent().hasClass(this.cssNames.navClip)?!1:!0:!0}this.goBtns&&this.gBtns.removeClass(this.cssNames.btnDisable);if(this.options.circular){if(!this.scrollActive&&(this.currId==this.allItems&&(this.currId=0),-1==this.currId))this.currId=this.allItems-1}else if(-1==this.currId&&(this.currId=0,e=1),0==this.currId&&this.goBtns&&this.goBtnPrev.addClass(this.cssNames.btnDisable),
this.currId==this.allItems&&(this.currId=this.allItems-1,e=1),this.currId==this.allItems-1)this.options.auto&&this.autoScrollStop(),this.goBtns&&this.goBtnNext.addClass(this.cssNames.btnDisable);this.scrollActive&&!e&&this._setNavScroll(f,d,h);this.isNavClip&&this.selectThumbnail(this.currId);(!f||this.options.navpanelautoswitch)&&this.arePanels&&this._animPanel(this.currId,d);this.firstTime&&(this.firstTime=0)}};this._setNavScroll=function(a,d,b){this._getNavPos();var f=a?!0:!1,e=0;if(!a){var a=
Math.abs(this.currId+1-this.LIbefore),h=this.options.shownavitems-a+1,i=0==this.currId||this.currId==this.allItems-1?1:0;if(this.options.navscrollatend&&(1==h||1==a)&&!this.firstTime&&!i)e=this.options.scroll-1,f=!0;if(0==h||0==a)f=!0;if(b&&(0>h&&(h=0),d=this.prevId<this.currId?"-=":"+=",b=Math.abs(this.prevId-this.currId),b-1>h&&"-="==d||b>a&&"+="==d))e=b,f=!0;""==d&&(d=this.prevId==this.currId&&!i?"-="==this.scrollWay?"+=":"-=":this.prevId<this.currId?"-=":"+=");this.scrollWay=d}if(f){f=0<e?e:this.options.scroll;
e="-="==d?this.LIafter:this.LIbefore;f=e<f?e:f;e=f*this.navLIsize;this.newId="-="==d?this.LIbefore+f:this.LIbefore-f+this.options.shownavitems-1;if("-="==d&&this.newId>this.currId||"+="==d&&this.newId<this.currId)this.currId=this.newId;this.options.circular&&(0>=this.LIbefore&&"+="==d?(d="-=",this.currId=this.allItems-1,e=this.LIafter/this.options.scroll*this.navLIsize*this.options.scroll):0==this.LIafter&&"-="==d&&(d="+=",this.currId=0,e=Math.abs(this.navPos)));this._animNav(d,e)}};this._animPanel=
function(c,d){this.currPanel=this.panels.eq(c);this.prevPanelStill=this.panels.eq(this.prevId);var g=function(){b.isFunction(a.options.panelfxafter)&&a.options.panelfxafter();a._runCallBacks(a.panelPostFns)};if(!this.currPanel.hasClass(this.cssNames.panelActive)){if(this.firstTime){this.panelTransition=this.options.panelfxfirst;var f=1}else{var e=this.options.freeheight&&"fading"==this.options.panelfx?"tabsfading":"none";this.panelTransition=this.options.freeheight?e:this.options.panelfx}b.isFunction(a.options.panelfxbefore)&&
a.options.panelfxbefore();this._runCallBacks(this.panelAnteFns);this._panelTransitions[this.panelTransition](d,f,g)}};this._animNav=function(c,d){b.isFunction(a.options.navfxbefore)&&a.options.navfxbefore();a._runCallBacks(a.navAnteFns);this._navTransitions[this.options.navfx](c,d,function(){!a.options.circular&&a.scrollBtns&&(a.navBtns.removeClass(a.cssNames.btnDisable),a._getNavPos(),0>=a.LIbefore?a.navBtnPrev.addClass(a.cssNames.btnDisable):0>=a.LIafter&&a.navBtnNext.addClass(a.cssNames.btnDisable));
a.scrollcontinue?setTimeout(function(){a.scrollcontinue=="-="?a.navPrev():a.navNext()},0):b.isFunction(a.options.navfxafter)&&a.options.navfxafter();a._runCallBacks(a.navPostFns)})};this._runCallBacks=function(a){b.each(a,function(a,c){b.isFunction(c)&&c()})};this._clearCallBacks=function(a){a.length=0};this._panelTransitions={none:function(c,b,g){a.panels.removeClass(a.cssNames.panelActive).hide();a.currPanel.addClass(a.cssNames.panelActive).show();g()},sliding:function(c,d,g){""==c&&(c=a.prevPanel<
a.currId?"-=":"+=");a.prevPanel=a.currId;var d="-="==c?"+":"-",f=a.options.verticalslide?"top":"left",e=a.options.verticalnav?a.domObjHeight:a.domObjWidth,c="top"==f?{top:c+e}:{left:c+e};a.oldPanel=b("."+a.cssNames.panelOld,a.domObj);a.activePanel=b("."+a.cssNames.panelActive,a.domObj);a.panels.css(f,"0");a.oldPanel.removeClass(a.cssNames.panelOld).hide();a.activePanel.removeClass(a.cssNames.panelActive).addClass(a.cssNames.panelOld);a.currPanel.addClass(a.cssNames.panelActive).css(f,d+e+"px").show();
a.panelsWrapper.stop(!0,!0).css(f,"0").animate(c,a.options.panelfxspeed,a.options.panelfxeasing,function(){g()})},fading:function(c,d,g){d?a.panels.hide():a.currPanel.css("display","none");b("."+a.cssNames.panelOld,a.domObj).removeClass(a.cssNames.panelOld);b("."+a.cssNames.panelActive,a.domObj).stop(!0,!0).removeClass(a.cssNames.panelActive).addClass(a.cssNames.panelOld);a.currPanel.addClass(a.cssNames.panelActive).animate({opacity:"show"},a.options.panelfxspeed,a.options.panelfxeasing,function(){g()})},
tabsfading:function(c,b,g){a.panels.removeClass(a.cssNames.panelActive).hide();a.currPanel.fadeIn(a.options.panelfxspeed,function(){g()})}};this._navTransitions={none:function(c,b,g){a.navUL.css(a.cssPosAttr,("-="==c?a.navPos-b:a.navPos+b)+"px");g()},sliding:function(c,b,g){a.navUL.animate("left"==a.cssPosAttr?{left:c+b}:{top:c+b},a.options.scrollspeed,a.options.scrolleasing,function(){g()})}};this.playBtnPause=function(){this.playBtn.removeClass(this.cssNames.btnPause);this.autoScrollStop()};this.playBtnStart=
function(){this.playBtn.addClass(a.cssNames.btnPause);this.autoScrollStart()};this.autoScrollStart=function(){var a=this;this.isPlaying=setInterval(function(){a._change(null,"-=",null,a.lineScrollDo,null)},a.options.autospeed)};this.autoScrollStop=function(){clearTimeout(this.isPlaying);this.isPlaying=null};this.changeWithId=function(a,b){this._change(b,"",a,0,1)};this.stepBackward=function(b){this._change(b,"+=",null,a.lineScrollDo,1)};this.stepForward=function(b){this._change(b,"-=",null,a.lineScrollDo,
1)};this.navPrev=function(b){b&&(a.scrollcontinue="-=");this._change(this.navBtnPrev,"+=",null,1,1)};this.navNext=function(b){b&&(a.scrollcontinue="+=");this._change(this.navBtnNext,"-=",null,1,1)};this.navStopContinuous=function(){a.scrollcontinue=""};this.selectThumbnail=function(a){b("."+this.cssNames.selected,this.navUL).removeClass(this.cssNames.selected);this.navLI.eq(a).addClass(this.cssNames.selected)}};b.fn.sliderkit=function(a){return this.each(function(){b(this).data("sliderkit",(new SliderKit)._init(this,
a))})}})(jQuery);
