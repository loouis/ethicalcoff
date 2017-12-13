jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,i,n,s){return jQuery.easing[jQuery.easing.def](t,e,i,n,s)},easeInQuad:function(t,e,i,n,s){return n*(e/=s)*e+i},easeOutQuad:function(t,e,i,n,s){return-n*(e/=s)*(e-2)+i},easeInOutQuad:function(t,e,i,n,s){return(e/=s/2)<1?n/2*e*e+i:-n/2*(--e*(e-2)-1)+i},easeInCubic:function(t,e,i,n,s){return n*(e/=s)*e*e+i},easeOutCubic:function(t,e,i,n,s){return n*((e=e/s-1)*e*e+1)+i},easeInOutCubic:function(t,e,i,n,s){return(e/=s/2)<1?n/2*e*e*e+i:n/2*((e-=2)*e*e+2)+i},easeInQuart:function(t,e,i,n,s){return n*(e/=s)*e*e*e+i},easeOutQuart:function(t,e,i,n,s){return-n*((e=e/s-1)*e*e*e-1)+i},easeInOutQuart:function(t,e,i,n,s){return(e/=s/2)<1?n/2*e*e*e*e+i:-n/2*((e-=2)*e*e*e-2)+i},easeInQuint:function(t,e,i,n,s){return n*(e/=s)*e*e*e*e+i},easeOutQuint:function(t,e,i,n,s){return n*((e=e/s-1)*e*e*e*e+1)+i},easeInOutQuint:function(t,e,i,n,s){return(e/=s/2)<1?n/2*e*e*e*e*e+i:n/2*((e-=2)*e*e*e*e+2)+i},easeInSine:function(t,e,i,n,s){return-n*Math.cos(e/s*(Math.PI/2))+n+i},easeOutSine:function(t,e,i,n,s){return n*Math.sin(e/s*(Math.PI/2))+i},easeInOutSine:function(t,e,i,n,s){return-n/2*(Math.cos(Math.PI*e/s)-1)+i},easeInExpo:function(t,e,i,n,s){return 0==e?i:n*Math.pow(2,10*(e/s-1))+i},easeOutExpo:function(t,e,i,n,s){return e==s?i+n:n*(1-Math.pow(2,-10*e/s))+i},easeInOutExpo:function(t,e,i,n,s){return 0==e?i:e==s?i+n:(e/=s/2)<1?n/2*Math.pow(2,10*(e-1))+i:n/2*(2-Math.pow(2,-10*--e))+i},easeInCirc:function(t,e,i,n,s){return-n*(Math.sqrt(1-(e/=s)*e)-1)+i},easeOutCirc:function(t,e,i,n,s){return n*Math.sqrt(1-(e=e/s-1)*e)+i},easeInOutCirc:function(t,e,i,n,s){return(e/=s/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+i:n/2*(Math.sqrt(1-(e-=2)*e)+1)+i},easeInElastic:function(t,e,i,n,s){var o=1.70158,r=0,a=n;if(0==e)return i;if(1==(e/=s))return i+n;if(r||(r=.3*s),a<Math.abs(n)){a=n;var o=r/4}else var o=r/(2*Math.PI)*Math.asin(n/a);return-a*Math.pow(2,10*(e-=1))*Math.sin((e*s-o)*(2*Math.PI)/r)+i},easeOutElastic:function(t,e,i,n,s){var o=1.70158,r=0,a=n;if(0==e)return i;if(1==(e/=s))return i+n;if(r||(r=.3*s),a<Math.abs(n)){a=n;var o=r/4}else var o=r/(2*Math.PI)*Math.asin(n/a);return a*Math.pow(2,-10*e)*Math.sin((e*s-o)*(2*Math.PI)/r)+n+i},easeInOutElastic:function(t,e,i,n,s){var o=1.70158,r=0,a=n;if(0==e)return i;if(2==(e/=s/2))return i+n;if(r||(r=s*(.3*1.5)),a<Math.abs(n)){a=n;var o=r/4}else var o=r/(2*Math.PI)*Math.asin(n/a);return e<1?a*Math.pow(2,10*(e-=1))*Math.sin((e*s-o)*(2*Math.PI)/r)*-.5+i:a*Math.pow(2,-10*(e-=1))*Math.sin((e*s-o)*(2*Math.PI)/r)*.5+n+i},easeInBack:function(t,e,i,n,s,o){return void 0==o&&(o=1.70158),n*(e/=s)*e*((o+1)*e-o)+i},easeOutBack:function(t,e,i,n,s,o){return void 0==o&&(o=1.70158),n*((e=e/s-1)*e*((o+1)*e+o)+1)+i},easeInOutBack:function(t,e,i,n,s,o){return void 0==o&&(o=1.70158),(e/=s/2)<1?n/2*(e*e*((1+(o*=1.525))*e-o))+i:n/2*((e-=2)*e*((1+(o*=1.525))*e+o)+2)+i},easeInBounce:function(t,e,i,n,s){return n-jQuery.easing.easeOutBounce(t,s-e,0,n,s)+i},easeOutBounce:function(t,e,i,n,s){return(e/=s)<1/2.75?n*(7.5625*e*e)+i:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+i:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+i:n*(7.5625*(e-=2.625/2.75)*e+.984375)+i},easeInOutBounce:function(t,e,i,n,s){return e<s/2?.5*jQuery.easing.easeInBounce(t,2*e,0,n,s)+i:.5*jQuery.easing.easeOutBounce(t,2*e-s,0,n,s)+.5*n+i}}),function(t){var e={},n={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(s){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(s)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),c=function(){o.settings=t.extend({},n,s),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),d()},d=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),v(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:g()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({float:"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",f()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&E(),o.active.last=o.settings.startSlide==m()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&w(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&k(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),u(e,h)},u=function(e,i){var n=e.find("img, iframe").length;if(0==n)return void i();var s=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++s==n&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),n=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(n)}o.loader.remove(),b(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(p()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",B),o.settings.auto&&o.settings.autoStart&&_(),o.settings.ticker&&N(),o.settings.pager&&z(o.settings.startSlide),o.settings.controls&&H(),o.settings.touchEnabled&&!o.settings.ticker&&D()},p=function(){var e=0,n=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var s=1==o.settings.moveSlides?o.active.index:o.active.index*x();for(n=o.children.eq(s),i=1;i<=o.settings.maxSlides-1;i++)n=s+i>=o.children.length?n.add(o.children.eq(i-1)):n.add(o.children.eq(s+i))}else n=o.children.eq(o.active.index);else n=o.children;return"vertical"==o.settings.mode?(n.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,n.map(function(){return t(this).outerHeight(!1)}).get()),e},g=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},f=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},v=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},m=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/x();else for(var e=0,i=0;e<o.children.length;)++t,e=i+v(),i+=o.settings.moveSlides<=v()?o.settings.moveSlides:v();else t=Math.ceil(o.children.length/v());return t},x=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=v()?o.settings.moveSlides:v()},b=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();S(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();S(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*x()).position();o.active.index==m()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?S(-e.left,"reset",0):"vertical"==o.settings.mode&&S(-e.top,"reset",0))}},S=function(t,e,i,n){if(o.usingCSS){var s="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,s),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),A()})):"reset"==e?r.css(o.animProp,s):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,s),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(n.resetValue,"reset",0),W()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){A()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){S(n.resetValue,"reset",0),W()})}},y=function(){for(var e="",i=m(),n=0;i>n;n++){var s="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(s=o.settings.buildPager(n),o.pagerEl.addClass("bx-custom-pager")):(s=n+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+n+'" class="bx-pager-link">'+s+"</a></div>"}o.pagerEl.html(e)},w=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),y()),o.pagerEl.on("click","a",O)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",M),o.controls.prev.bind("click",T),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},k=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",I),o.controls.autoEl.on("click",".bx-stop",P),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),q(o.settings.autoStart?"stop":"start")},E=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},M=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},T=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},I=function(t){r.startAuto(),t.preventDefault()},P=function(t){r.stopAuto(),t.preventDefault()},O=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),n=parseInt(i.attr("data-slide-index"));n!=o.active.index&&r.goToSlide(n),e.preventDefault()},z=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),void o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i)):(o.pagerEl.find("a").removeClass("active"),void o.pagerEl.each(function(i,n){t(n).find("a").eq(e).addClass("active")}))},A=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==m()-1&&o.carousel?t=o.children.eq((m()-1)*x()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?S(-t.left,"reset",0):"vertical"==o.settings.mode&&S(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},q=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},H=function(){1==m()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==m()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},_=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},N=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}S(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,n="horizontal"==o.settings.mode?"left":"top",s=i*(e-Math.abs(parseInt(r.css(n))));W(s)}),W()},W=function(t){speed=t||o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var n="horizontal"==o.settings.mode?-e.left:-e.top,s="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:s};S(n,"ticker",speed,a)},D=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",Q)},Q=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",j),o.viewport.bind("touchend",L)}},j=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),n=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>n&&o.settings.preventDefaultSwipeX?t.preventDefault():3*n>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var s=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;s=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;s=o.touch.originalPos.top+r}S(s,"reset",0)}},L=function(t){o.viewport.unbind("touchmove",j);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var n=Math.abs(o.touch.start.x-o.touch.end.x);n>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var n=0;"horizontal"==o.settings.mode?(n=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(n=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&n>0||o.active.last&&0>n)?S(i,"reset",200):Math.abs(n)>=o.settings.swipeThreshold?(0>n?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):S(i,"reset",200)}o.viewport.unbind("touchend",L)},B=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?m()-1:e>=m()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=m()-1,o.settings.pager&&z(o.active.index),o.settings.controls&&H(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),A()});else{o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed);var n=0,s={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);s=a.position(),n=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;s=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var c=1==o.settings.moveSlides?o.settings.maxSlides-x():(m()-1)*x()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(c);s=a.position()}else if("next"==i&&0==o.active.index)s=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var d=e*x();s=o.children.eq(d).position()}if(void 0!==s){var u="horizontal"==o.settings.mode?-(s.left-n):-s.top;S(u,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&q("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&q("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(f()),o.viewport.css("height",p()),o.settings.ticker||b(),o.active.last&&(o.active.index=m()-1),o.active.index>=m()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(y(),z(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",B))},r.reloadSlider=function(t){void 0!=t&&(s=t),r.destroySlider(),c()},c(),this}}(jQuery),function(){var t,e;t=this.jQuery||window.jQuery,e=t(window),t.fn.stick_in_parent=function(i){var n,s,o,r,a,l,c,d,u,h,p;for(null==i&&(i={}),p=i.sticky_class,a=i.inner_scrolling,h=i.recalc_every,u=i.parent,d=i.offset_top,c=i.spacer,s=i.bottoming,null==d&&(d=0),null==u&&(u=void 0),null==a&&(a=!0),null==p&&(p="is_stuck"),n=t(document),null==s&&(s=!0),o=function(i,o,r,l,g,f,v,m){var x,b,S,y,w,C,k,E,M,T,I,P;if(!i.data("sticky_kit")){if(i.data("sticky_kit",!0),w=n.height(),k=i.parent(),null!=u&&(k=k.closest(u)),!k.length)throw"failed to find stick parent";if(x=S=!1,(I=null!=c?c&&i.closest(c):t("<div />"))&&I.css("position",i.css("position")),E=function(){var t,e,s;if(!m&&(w=n.height(),t=parseInt(k.css("border-top-width"),10),e=parseInt(k.css("padding-top"),10),o=parseInt(k.css("padding-bottom"),10),r=k.offset().top+t+e,l=k.height(),S&&(x=S=!1,null==c&&(i.insertAfter(I),I.detach()),i.css({position:"",top:"",width:"",bottom:""}).removeClass(p),s=!0),g=i.offset().top-(parseInt(i.css("margin-top"),10)||0)-d,f=i.outerHeight(!0),v=i.css("float"),I&&I.css({width:i.outerWidth(!0),height:f,display:i.css("display"),"vertical-align":i.css("vertical-align"),float:v}),s))return P()},E(),f!==l)return y=void 0,C=d,T=h,P=function(){var t,u,b,M;if(!m&&(b=!1,null!=T&&0>=--T&&(T=h,E(),b=!0),b||n.height()===w||E(),b=e.scrollTop(),null!=y&&(u=b-y),y=b,S?(s&&(M=b+f+C>l+r,x&&!M&&(x=!1,i.css({position:"fixed",bottom:"",top:C}).trigger("sticky_kit:unbottom"))),b<g&&(S=!1,C=d,null==c&&("left"!==v&&"right"!==v||i.insertAfter(I),I.detach()),t={position:"",width:"",top:""},i.css(t).removeClass(p).trigger("sticky_kit:unstick")),a&&(t=e.height(),f+d>t&&!x&&(C-=u,C=Math.max(t-f,C),C=Math.min(d,C),S&&i.css({top:C+"px"})))):b>g&&(S=!0,t={position:"fixed",top:C},t.width="border-box"===i.css("box-sizing")?i.outerWidth()+"px":i.width()+"px",i.css(t).addClass(p),null==c&&(i.after(I),"left"!==v&&"right"!==v||I.append(i)),i.trigger("sticky_kit:stick")),S&&s&&(null==M&&(M=b+f+C>l+r),!x&&M)))return x=!0,"static"===k.css("position")&&k.css({position:"relative"}),i.css({position:"absolute",bottom:o,top:"auto"}).trigger("sticky_kit:bottom")},M=function(){return E(),P()},b=function(){if(m=!0,e.off("touchmove",P),e.off("scroll",P),e.off("resize",M),t(document.body).off("sticky_kit:recalc",M),i.off("sticky_kit:detach",b),i.removeData("sticky_kit"),i.css({position:"",bottom:"",top:"",width:""}),k.position("position",""),S)return null==c&&("left"!==v&&"right"!==v||i.insertAfter(I),I.remove()),i.removeClass(p)},e.on("touchmove",P),e.on("scroll",P),e.on("resize",M),t(document.body).on("sticky_kit:recalc",M),i.on("sticky_kit:detach",b),setTimeout(P,0)}},r=0,l=this.length;r<l;r++)i=this[r],o(t(i));return this}}.call(this),function(t){"use strict";var e="ScrollIt",i="1.0.3",n={upKey:38,downKey:40,easing:"linear",scrollTime:600,activeClass:"active",onPageChange:null,topOffset:0};t.scrollIt=function(e){var i=t.extend(n,e),s=0,o=t("[data-scroll-index]:last").attr("data-scroll-index"),r=function(e){if(!(e<0||e>o)){var n=t("[data-scroll-index="+e+"]").offset().top+i.topOffset+1;t("html,body").animate({scrollTop:n,easing:i.easing},i.scrollTime)}},a=function(e){var i=t(e.target).closest("[data-scroll-nav]").attr("data-scroll-nav")||t(e.target).closest("[data-scroll-goto]").attr("data-scroll-goto");r(parseInt(i))},l=function(e){var n=e.which;return!(t("html,body").is(":animated")&&(n==i.upKey||n==i.downKey)||(n==i.upKey&&s>0?(r(parseInt(s)-1),1):n==i.downKey&&s<o&&(r(parseInt(s)+1),1)))},c=function(e){i.onPageChange&&e&&s!=e&&i.onPageChange(e),s=e,t("[data-scroll-nav]").removeClass(i.activeClass),t("[data-scroll-nav="+e+"]").addClass(i.activeClass)},d=function(){var e=t(window).scrollTop(),n=t("[data-scroll-index]").filter(function(n,s){return e>=t(s).offset().top+i.topOffset&&e<t(s).offset().top+i.topOffset+t(s).outerHeight()}),s=n.first().attr("data-scroll-index");c(s)};t(window).on("scroll",d).scroll(),t(window).on("keydown",l),t("body").on("click","[data-scroll-nav], [data-scroll-goto]",function(t){t.preventDefault(),a(t)})}}(jQuery),function(){var t,e,i,n,s,o=function(t,e){return function(){return t.apply(e,arguments)}},r=[].indexOf||function(t){for(var e=0,i=this.length;i>e;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var i,n;for(i in e)n=e[i],null==t[i]&&(t[i]=n);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,i,n){var s;return null==e&&(e=!1),null==i&&(i=!1),null==n&&(n=null),null!=document.createEvent?(s=document.createEvent("CustomEvent"),s.initCustomEvent(t,e,i,n)):null!=document.createEventObject?(s=document.createEventObject(),s.eventType=t):s.eventName=t,s},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,i){return null!=t.addEventListener?t.addEventListener(e,i,!1):null!=t.attachEvent?t.attachEvent("on"+e,i):t[e]=i},t.prototype.removeEvent=function(t,e,i){return null!=t.removeEventListener?t.removeEventListener(e,i,!1):null!=t.detachEvent?t.detachEvent("on"+e,i):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),i=this.WeakMap||this.MozWeakMap||(i=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,i,n,s,o;for(o=this.keys,e=n=0,s=o.length;s>n;e=++n)if((i=o[e])===t)return this.values[e]},t.prototype.set=function(t,e){var i,n,s,o,r;for(r=this.keys,i=s=0,o=r.length;o>s;i=++s)if((n=r[i])===t)return void(this.values[i]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),n=this.getComputedStyle||function(t){return this.getPropertyValue=function(e){var i;return"float"===e&&(e="styleFloat"),s.test(e)&&e.replace(s,function(t,e){return e.toUpperCase()}),(null!=(i=t.currentStyle)?i[e]:void 0)||null},this},s=/(\-([a-z]){1})/g,this.WOW=function(){function s(t){null==t&&(t={}),this.scrollCallback=o(this.scrollCallback,this),this.scrollHandler=o(this.scrollHandler,this),this.resetAnimation=o(this.resetAnimation,this),this.start=o(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),this.animationNameCache=new i,this.wowEvent=this.util().createEvent(this.config.boxClass)}return s.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},s.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},s.prototype.start=function(){var e,i,n,s;if(this.stopped=!1,this.boxes=function(){var t,i,n,s;for(n=this.element.querySelectorAll("."+this.config.boxClass),s=[],t=0,i=n.length;i>t;t++)e=n[t],s.push(e);return s}.call(this),this.all=function(){var t,i,n,s;for(n=this.boxes,s=[],t=0,i=n.length;i>t;t++)e=n[t],s.push(e);return s}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(s=this.boxes,i=0,n=s.length;n>i;i++)e=s[i],this.applyStyle(e,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new t(function(t){return function(e){var i,n,s,o,r;for(r=[],i=0,n=e.length;n>i;i++)o=e[i],r.push(function(){var t,e,i,n;for(i=o.addedNodes||[],n=[],t=0,e=i.length;e>t;t++)s=i[t],n.push(this.doSync(s));return n}.call(t));return r}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},s.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},s.prototype.sync=function(){return t.notSupported?this.doSync(this.element):void 0},s.prototype.doSync=function(t){var e,i,n,s,o;if(null==t&&(t=this.element),1===t.nodeType){for(t=t.parentNode||t,s=t.querySelectorAll("."+this.config.boxClass),o=[],i=0,n=s.length;n>i;i++)e=s[i],r.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),o.push(this.scrolled=!0)):o.push(void 0);return o}},s.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},s.prototype.applyStyle=function(t,e){var i,n,s;return n=t.getAttribute("data-wow-duration"),i=t.getAttribute("data-wow-delay"),s=t.getAttribute("data-wow-iteration"),this.animate(function(o){return function(){return o.customStyle(t,e,n,i,s)}}(this))},s.prototype.animate=function(){return"requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){
return t()}}(),s.prototype.resetStyle=function(){var t,e,i,n,s;for(n=this.boxes,s=[],e=0,i=n.length;i>e;e++)t=n[e],s.push(t.style.visibility="visible");return s},s.prototype.resetAnimation=function(t){var e;return t.type.toLowerCase().indexOf("animationend")>=0?(e=t.target||t.srcElement,e.className=e.className.replace(this.config.animateClass,"").trim()):void 0},s.prototype.customStyle=function(t,e,i,n,s){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",i&&this.vendorSet(t.style,{animationDuration:i}),n&&this.vendorSet(t.style,{animationDelay:n}),s&&this.vendorSet(t.style,{animationIterationCount:s}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},s.prototype.vendors=["moz","webkit"],s.prototype.vendorSet=function(t,e){var i,n,s,o;n=[];for(i in e)s=e[i],t[""+i]=s,n.push(function(){var e,n,r,a;for(r=this.vendors,a=[],e=0,n=r.length;n>e;e++)o=r[e],a.push(t[""+o+i.charAt(0).toUpperCase()+i.substr(1)]=s);return a}.call(this));return n},s.prototype.vendorCSS=function(t,e){var i,s,o,r,a,l;for(a=n(t),r=a.getPropertyCSSValue(e),o=this.vendors,i=0,s=o.length;s>i;i++)l=o[i],r=r||a.getPropertyCSSValue("-"+l+"-"+e);return r},s.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(i){e=n(t).getPropertyValue("animation-name")}return"none"===e?"":e},s.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},s.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},s.prototype.scrollHandler=function(){return this.scrolled=!0},s.prototype.scrollCallback=function(){var t;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,i,n,s;for(n=this.boxes,s=[],e=0,i=n.length;i>e;e++)(t=n[e])&&(this.isVisible(t)?this.show(t):s.push(t));return s}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},s.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},s.prototype.isVisible=function(t){var e,i,n,s,o;return i=t.getAttribute("data-wow-offset")||this.config.offset,o=window.pageYOffset,s=o+Math.min(this.element.clientHeight,this.util().innerHeight())-i,n=this.offsetTop(t),e=n+t.clientHeight,s>=n&&e>=o},s.prototype.util=function(){return null!=this._util?this._util:this._util=new e},s.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},s}()}.call(this),function($){var t=$("body"),e=$(".close-btn"),i=$(".lightbox"),n=$(".contact-btn"),s=$(".menu-btn"),o=$(".main-header"),r=$(".full-screen-nav"),a=$(window),l=a.height(),c=a.width(),d=$(".project-info__desc"),u=$(".scroll-down-btn"),h=$(".product-single-other-products-pager"),p=function(){$(".project-info").stick_in_parent({offset_top:-10,parent:".product-container"})};$(".project-info").on("sticky_kit:bottom",function(t){$(this).parent().css("position","static")}).on("sticky_kit:unbottom",function(t){$(this).parent().css("position","relative")}),$(".fancybox, fancybox.ajax").fancybox({type:"ajax"}),n.on("click",function(e){e.preventDefault(),console.log("clicked"),t.addClass("body--no-scroll"),i.addClass("lightbox--visible")});var g=function(){t.removeClass("body--no-scroll"),i.removeClass("lightbox--visible")},f=function(){t.removeClass("body--no-scroll"),r.removeClass("full-screen-nav--visible"),o.removeClass("main-header--full-nav-visible")};$(document).keyup(function(t){27===t.keyCode&&(g(),f())}),e.on("click",function(){g()}),s.on("click",function(){r.toggleClass("full-screen-nav--visible"),o.toggleClass("main-header--full-nav-visible"),t.hasClass("body--no-scroll")?t.removeClass("body--no-scroll"):t.toggleClass("body--no-scroll")}),$(".scroll-header-button").on("click",function(t){$("body, html").animate({scrollTop:l})}),$(window).bind("resize load",function(){c>=600&&($(".kwicks").kwicks({maxSize:"37%",behavior:"menu",spacing:0,easing:"easeOutCirc",duration:700}),p(),$(".fixed-scroll-title").stick_in_parent({offset_top:30}))});var v=$(".about-logo"),m=function(){$(document).scrollTop()>=300?v.removeClass("about-logo--not-scrolled"):v.addClass("about-logo--not-scrolled")},x=function(){u.toggleClass("scroll-down-btn--animate")};setInterval(x,1200);var b=function(){$(document).scrollTop()>=600?h.removeClass("product-single-other-products-pager--not-scrolled"):h.addClass("product-single-other-products-pager--not-scrolled")};d.on("scroll",function(){$(this).scrollTop()>=3?$(".text-wrapper").addClass("text-wrapper--scrolled"):$(".text-wrapper").removeClass("text-wrapper--scrolled")}),c>=600&&$(document).on("load scroll resize",function(){b(),m()});var S=$(".parallax"),a=$(window);$(window).scroll(function(){var t=-a.scrollTop()/S.data("speed"),e="50% "+t+"px";S.css({backgroundPosition:e})})}(jQuery);