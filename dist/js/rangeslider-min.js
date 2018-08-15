!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function($){"use strict";function t(){var t=document.createElement("input");return t.setAttribute("type","range"),"text"!==t.type}function i(t,i){var e=Array.prototype.slice.call(arguments,2);return setTimeout(function(){return t.apply(null,e)},i)}function e(t,i){return i=i||100,function(){if(!t.debouncing){var e=Array.prototype.slice.apply(arguments);t.lastReturnVal=t.apply(window,e),t.debouncing=!0}return clearTimeout(t.debounceTimeout),t.debounceTimeout=setTimeout(function(){t.debouncing=!1},i),t.lastReturnVal}}function n(t){return t&&(0===t.offsetWidth||0===t.offsetHeight||!1===t.open)}function s(t){for(var i=[],e=t.parentNode;n(e);)i.push(e),e=e.parentNode;return i}function o(t,i){function e(t){void 0!==t.open&&(t.open=!t.open)}var n=s(t),o=n.length,r=[],h=t[i];if(o){for(var a=0;a<o;a++)r[a]=n[a].style.cssText,n[a].style.setProperty?n[a].style.setProperty("display","block","important"):n[a].style.cssText+=";display: block !important",n[a].style.height="0",n[a].style.overflow="hidden",n[a].style.visibility="hidden",e(n[a]);h=t[i];for(var l=0;l<o;l++)n[l].style.cssText=r[l],e(n[l])}return h}function r(t,i){var e=parseFloat(t);return Number.isNaN(e)?i:e}function h(t){return t.charAt(0).toUpperCase()+t.substr(1)}function a(t,n){if(this.$window=$(window),this.$document=$(document),this.$element=$(t),this.options=$.extend({},p,n),this.polyfill=this.options.polyfill,this.orientation=this.$element[0].getAttribute("data-orientation")||this.options.orientation,this.onInit=this.options.onInit,this.onSlide=this.options.onSlide,this.onSlideEnd=this.options.onSlideEnd,this.DIMENSION=c.orientation[this.orientation].dimension,this.DIRECTION=c.orientation[this.orientation].direction,this.DIRECTION_STYLE=c.orientation[this.orientation].directionStyle,this.COORDINATE=c.orientation[this.orientation].coordinate,this.polyfill&&u)return!1;this.identifier="js-"+l+"-"+d++,this.startEvent=this.options.startEvent.join("."+this.identifier+" ")+"."+this.identifier,this.moveEvent=this.options.moveEvent.join("."+this.identifier+" ")+"."+this.identifier,this.endEvent=this.options.endEvent.join("."+this.identifier+" ")+"."+this.identifier,this.toFixed=(this.step+"").replace(".","").length-1,this.$fill=$('<div class="'+this.options.fillClass+'" />'),this.$handle=$('<div class="'+this.options.handleClass+'" />'),this.$range=$('<div class="'+this.options.rangeClass+" "+this.options[this.orientation+"Class"]+'" id="'+this.identifier+'" />').insertAfter(this.$element).prepend(this.$fill,this.$handle),this.$element.css({position:"absolute",width:"1px",height:"1px",overflow:"hidden",opacity:"0"}),this.handleDown=$.proxy(this.handleDown,this),this.handleMove=$.proxy(this.handleMove,this),this.handleEnd=$.proxy(this.handleEnd,this),this.init();var s=this;this.$window.on("resize."+this.identifier,e(function(){i(function(){s.update(!1,!1)},300)},20)),this.$document.on(this.startEvent,"#"+this.identifier+":not(."+this.options.disabledClass+")",this.handleDown),this.$element.on("change."+this.identifier,function(t,i){if(!i||i.origin!==s.identifier){var e=t.target.value,n=s.getPositionFromValue(e);s.setPosition(n)}})}Number.isNaN=Number.isNaN||function(t){return"number"==typeof t&&t!==t};var l="rangeslider",d=0,u=t(),p={polyfill:!0,orientation:"horizontal",rangeClass:"rangeslider",disabledClass:"rangeslider--disabled",activeClass:"rangeslider--active",horizontalClass:"rangeslider--horizontal",verticalClass:"rangeslider--vertical",fillClass:"rangeslider__fill",handleClass:"rangeslider__handle",startEvent:["mousedown","touchstart","pointerdown"],moveEvent:["mousemove","touchmove","pointermove"],endEvent:["mouseup","touchend","pointerup"]},c={orientation:{horizontal:{dimension:"width",direction:"left",directionStyle:"left",coordinate:"x"},vertical:{dimension:"height",direction:"top",directionStyle:"bottom",coordinate:"y"}}};return a.prototype.init=function(){this.update(!0,!1),this.onInit&&"function"==typeof this.onInit&&this.onInit()},a.prototype.update=function(t,i){t=t||!1,t&&(this.min=r(this.$element[0].getAttribute("min"),0),this.max=r(this.$element[0].getAttribute("max"),100),this.value=r(this.$element[0].value,Math.round(this.min+(this.max-this.min)/2)),this.step=r(this.$element[0].getAttribute("step"),1)),this.handleDimension=o(this.$handle[0],"offset"+h(this.DIMENSION)),this.rangeDimension=o(this.$range[0],"offset"+h(this.DIMENSION)),this.maxHandlePos=this.rangeDimension-this.handleDimension,this.grabPos=this.handleDimension/2,this.position=this.getPositionFromValue(this.value),this.$element[0].disabled?this.$range.addClass(this.options.disabledClass):this.$range.removeClass(this.options.disabledClass),this.setPosition(this.position,i)},a.prototype.handleDown=function(t){if(t.preventDefault(),this.$document.on(this.moveEvent,this.handleMove),this.$document.on(this.endEvent,this.handleEnd),this.$range.addClass(this.options.activeClass),!((" "+t.target.className+" ").replace(/[\n\t]/g," ").indexOf(this.options.handleClass)>-1)){var i=this.getRelativePosition(t),e=this.$range[0].getBoundingClientRect()[this.DIRECTION],n=this.getPositionFromNode(this.$handle[0])-e,s="vertical"===this.orientation?this.maxHandlePos-(i-this.grabPos):i-this.grabPos;this.setPosition(s),i>=n&&i<n+this.handleDimension&&(this.grabPos=i-n)}},a.prototype.handleMove=function(t){t.preventDefault();var i=this.getRelativePosition(t),e="vertical"===this.orientation?this.maxHandlePos-(i-this.grabPos):i-this.grabPos;this.setPosition(e)},a.prototype.handleEnd=function(t){t.preventDefault(),this.$document.off(this.moveEvent,this.handleMove),this.$document.off(this.endEvent,this.handleEnd),this.$range.removeClass(this.options.activeClass),this.$element.trigger("change",{origin:this.identifier}),this.onSlideEnd&&"function"==typeof this.onSlideEnd&&this.onSlideEnd(this.position,this.value)},a.prototype.cap=function(t,i,e){return t<i?i:t>e?e:t},a.prototype.setPosition=function(t,i){var e,n;void 0===i&&(i=!0),e=this.getValueFromPosition(this.cap(t,0,this.maxHandlePos)),n=this.getPositionFromValue(e),this.$fill[0].style[this.DIMENSION]=n+this.grabPos+"px",this.$handle[0].style[this.DIRECTION_STYLE]=n+"px",this.setValue(e),this.position=n,this.value=e,i&&this.onSlide&&"function"==typeof this.onSlide&&this.onSlide(n,e)},a.prototype.getPositionFromNode=function(t){for(var i=0;null!==t;)i+=t.offsetLeft,t=t.offsetParent;return i},a.prototype.getRelativePosition=function(t){var i=h(this.COORDINATE),e=this.$range[0].getBoundingClientRect()[this.DIRECTION],n=0;return void 0!==t.originalEvent["client"+i]?n=t.originalEvent["client"+i]:t.originalEvent.touches&&t.originalEvent.touches[0]&&void 0!==t.originalEvent.touches[0]["client"+i]?n=t.originalEvent.touches[0]["client"+i]:t.currentPoint&&void 0!==t.currentPoint[this.COORDINATE]&&(n=t.currentPoint[this.COORDINATE]),n-e},a.prototype.getPositionFromValue=function(t){var i,e;return i=(t-this.min)/(this.max-this.min),e=Number.isNaN(i)?0:i*this.maxHandlePos},a.prototype.getValueFromPosition=function(t){var i,e;return i=t/(this.maxHandlePos||1),e=this.step*Math.round(i*(this.max-this.min)/this.step)+this.min,Number(e.toFixed(this.toFixed))},a.prototype.setValue=function(t){t===this.value&&""!==this.$element[0].value||this.$element.val(t).trigger("input",{origin:this.identifier})},a.prototype.destroy=function(){this.$document.off("."+this.identifier),this.$window.off("."+this.identifier),this.$element.off("."+this.identifier).removeAttr("style").removeData("plugin_"+l),this.$range&&this.$range.length&&this.$range[0].parentNode.removeChild(this.$range[0])},$.fn[l]=function(t){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=$(this),n=e.data("plugin_"+l);n||e.data("plugin_"+l,n=new a(this,t)),"string"==typeof t&&n[t].apply(n,i)})},"rangeslider.js is available in jQuery context e.g $(selector).rangeslider(options);"});