!function(t){var e;window.UIkit&&(e=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-nestable",["uikit"],function(){return e||t(UIkit)})}(function(t){"use strict";var e,s="ontouchstart"in window,i=t.$html,n=[],a=t.$win,l=function(){var t=document.createElement("div"),e=document.documentElement;if(!("pointerEvents"in t.style))return!1;t.style.pointerEvents="auto",t.style.pointerEvents="x",e.appendChild(t);var s=window.getComputedStyle&&"auto"===window.getComputedStyle(t,"").pointerEvents;return e.removeChild(t),!!s}(),o=s?"touchstart":"mousedown",h=s?"touchmove":"mousemove",d=s?"touchend":"mouseup",r=s?"touchcancel":"mouseup";return t.component("nestable",{defaults:{prefix:"uk-",listNodeName:"ul",itemNodeName:"li",listBaseClass:"{prefix}nestable",listClass:"{prefix}nestable-list",listitemClass:"{prefix}nestable-list-item",itemClass:"{prefix}nestable-item",dragClass:"{prefix}nestable-list-dragged",movingClass:"{prefix}nestable-moving",handleClass:"{prefix}nestable-handle",collapsedClass:"{prefix}collapsed",placeClass:"{prefix}nestable-placeholder",noDragClass:"{prefix}nestable-nodrag",emptyClass:"{prefix}nestable-empty",group:0,maxDepth:10,threshold:20},boot:function(){t.$html.on("mousemove touchmove",function(){if(e){var s=e.offset().top;s<t.$win.scrollTop()?t.$win.scrollTop(t.$win.scrollTop()-Math.ceil(e.height()/2)):s+e.height()>window.innerHeight+t.$win.scrollTop()&&t.$win.scrollTop(t.$win.scrollTop()+Math.ceil(e.height()/2))}}),t.ready(function(e){t.$("[data-uk-nestable]",e).each(function(){var e=t.$(this);if(!e.data("nestable")){t.nestable(e,t.Utils.options(e.attr("data-uk-nestable")))}})})},init:function(){var i=this;Object.keys(this.options).forEach(function(t){-1!=String(i.options[t]).indexOf("{prefix}")&&(i.options[t]=i.options[t].replace("{prefix}",i.options.prefix))}),this.tplempty='<div class="'+this.options.emptyClass+'"/>',this.find(">"+this.options.itemNodeName).addClass(this.options.listitemClass).end().find("ul:not(.ignore-list)").addClass(this.options.listClass).find(">li").addClass(this.options.listitemClass),this.element.children(this.options.itemNodeName).length||this.element.append(this.tplempty),this.element.data("nestable-id","ID"+(new Date).getTime()+"RAND"+Math.ceil(1e5*Math.random())),this.reset(),this.element.data("nestable-group",this.options.group),this.placeEl=t.$('<div class="'+this.options.placeClass+'"/>'),this.find(this.options.itemNodeName).each(function(){i.setParent(t.$(this))}),this.on("click","[data-nestable-action]",function(e){if(!i.dragEl&&(s||0===e.button)){e.preventDefault();var n=t.$(e.currentTarget),a=n.data("nestableAction"),l=n.closest(i.options.itemNodeName);"collapse"===a&&i.collapseItem(l),"expand"===a&&i.expandItem(l),"toggle"===a&&i.toggleItem(l)}});var n=function(e){var n=t.$(e.target);if(!n.hasClass(i.options.handleClass)){if(n.closest("."+i.options.noDragClass).length)return;n=n.closest("."+i.options.handleClass)}!n.length||i.dragEl||!s&&0!==e.button||s&&1!==e.touches.length||(e.preventDefault(),i.dragStart(s?e.touches[0]:e),i.trigger("start.uk.nestable",[i]))},l=function(t){i.dragEl&&(t.preventDefault(),i.dragMove(s?t.touches[0]:t),i.trigger("move.uk.nestable",[i]))},p=function(t){i.dragEl&&(t.preventDefault(),i.dragStop(s?t.touches[0]:t)),e=!1};s?(this.element[0].addEventListener(o,n,!1),window.addEventListener(h,l,!1),window.addEventListener(d,p,!1),window.addEventListener(r,p,!1)):(this.on(o,n),a.on(h,l),a.on(d,p))},serialize:function(){var e,s=0,i=this,n=function(e,s){var a=[],l=e.children(i.options.itemNodeName);return l.each(function(){var e=t.$(this),l=t.$.extend({},e.data()),o=e.children(i.options.listNodeName);o.length&&(l.children=n(o,s+1)),a.push(l)}),a};return e=n(i.element,s)},list:function(e){e=t.$.extend({},i.options,e);var s=[],i=this,n=0,a=function(i,n,l){var o=i.children(e.itemNodeName);o.each(function(i){var o=t.$(this),h=t.$.extend({parent_id:l?l:null,depth:n,order:i},o.data()),d=o.children(e.listNodeName);s.push(h),d.length&&a(d,n+1,o.data(e.idProperty||"id"))})};return a(i.element,n),s},reset:function(){this.mouse={offsetX:0,offsetY:0,startX:0,startY:0,lastX:0,lastY:0,nowX:0,nowY:0,distX:0,distY:0,dirAx:0,dirX:0,dirY:0,lastDirX:0,lastDirY:0,distAxX:0,distAxY:0},this.moving=!1,this.dragEl=null,this.dragRootEl=null,this.dragDepth=0,this.hasNewRoot=!1,this.pointEl=null;for(var t=0;t<n.length;t++)n[t].children().length||n[t].append(this.tplempty);n=[]},toggleItem:function(t){this[t.hasClass(this.options.collapsedClass)?"expandItem":"collapseItem"](t)},expandItem:function(t){t.removeClass(this.options.collapsedClass)},collapseItem:function(t){var e=t.children(this.options.listNodeName);e.length&&t.addClass(this.options.collapsedClass)},expandAll:function(){var e=this;this.find(e.options.itemNodeName).each(function(){e.expandItem(t.$(this))})},collapseAll:function(){var e=this;this.find(e.options.itemNodeName).each(function(){e.collapseItem(t.$(this))})},setParent:function(t){t.children(this.options.listNodeName).length&&t.addClass("uk-parent")},unsetParent:function(t){t.removeClass("uk-parent "+this.options.collapsedClass),t.children(this.options.listNodeName).remove()},dragStart:function(s){var n=this.mouse,a=t.$(s.target),l=a.closest(this.options.itemNodeName),o=l.offset();this.placeEl.css("height",l.height()),n.offsetX=s.pageX-o.left,n.offsetY=s.pageY-o.top,n.startX=n.lastX=o.left,n.startY=n.lastY=o.top,this.dragRootEl=this.element,this.dragEl=t.$(document.createElement(this.options.listNodeName)).addClass(this.options.listClass+" "+this.options.dragClass),this.dragEl.css("width",l.width()),e=this.dragEl,this.tmpDragOnSiblings=[l[0].previousSibling,l[0].nextSibling],l.after(this.placeEl),l[0].parentNode.removeChild(l[0]),l.appendTo(this.dragEl),t.$body.append(this.dragEl),this.dragEl.css({left:o.left,top:o.top});var h,d,r=this.dragEl.find(this.options.itemNodeName);for(h=0;h<r.length;h++)d=t.$(r[h]).parents(this.options.listNodeName).length,d>this.dragDepth&&(this.dragDepth=d);i.addClass(this.options.movingClass)},dragStop:function(){var t=this.dragEl.children(this.options.itemNodeName).first();t[0].parentNode.removeChild(t[0]),this.placeEl.replaceWith(t),this.dragEl.remove(),(this.hasNewRoot||this.tmpDragOnSiblings[0]!=t[0].previousSibling||this.tmpDragOnSiblings[1]&&this.tmpDragOnSiblings[1]!=t[0].nextSibling)&&(this.element.trigger("change.uk.nestable",[t,this.hasNewRoot?"added":"moved",this.dragRootEl]),this.hasNewRoot&&this.dragRootEl.trigger("change.uk.nestable",[t,"removed",this.dragRootEl])),this.trigger("stop.uk.nestable",[this,t]),this.reset(),i.removeClass(this.options.movingClass)},dragMove:function(e){var s,i,a,o,h,d=this.options,r=this.mouse;this.dragEl.css({left:e.pageX-r.offsetX,top:e.pageY-r.offsetY}),r.lastX=r.nowX,r.lastY=r.nowY,r.nowX=e.pageX,r.nowY=e.pageY,r.distX=r.nowX-r.lastX,r.distY=r.nowY-r.lastY,r.lastDirX=r.dirX,r.lastDirY=r.dirY,r.dirX=0===r.distX?0:r.distX>0?1:-1,r.dirY=0===r.distY?0:r.distY>0?1:-1;var p=Math.abs(r.distX)>Math.abs(r.distY)?1:0;if(!r.moving)return r.dirAx=p,void(r.moving=!0);r.dirAx!==p?(r.distAxX=0,r.distAxY=0):(r.distAxX+=Math.abs(r.distX),0!==r.dirX&&r.dirX!==r.lastDirX&&(r.distAxX=0),r.distAxY+=Math.abs(r.distY),0!==r.dirY&&r.dirY!==r.lastDirY&&(r.distAxY=0)),r.dirAx=p,r.dirAx&&r.distAxX>=d.threshold&&(r.distAxX=0,a=this.placeEl.prev(d.itemNodeName),r.distX>0&&a.length&&!a.hasClass(d.collapsedClass)&&(s=a.find(d.listNodeName).last(),h=this.placeEl.parents(d.listNodeName).length,h+this.dragDepth<=d.maxDepth&&(s.length?(s=a.children(d.listNodeName).last(),s.append(this.placeEl)):(s=t.$("<"+d.listNodeName+"/>").addClass(d.listClass),s.append(this.placeEl),a.append(s),this.setParent(a)))),r.distX<0&&(o=this.placeEl.next(d.itemNodeName),o.length||(i=this.placeEl.parent(),this.placeEl.closest(d.itemNodeName).after(this.placeEl),i.children().length||this.unsetParent(i.parent()))));var c=!1;if(l||(this.dragEl[0].style.visibility="hidden"),this.pointEl=t.$(document.elementFromPoint(e.pageX-document.body.scrollLeft,e.pageY-(window.pageYOffset||document.documentElement.scrollTop))),l||(this.dragEl[0].style.visibility="visible"),this.pointEl.hasClass(d.handleClass))this.pointEl=this.pointEl.closest(d.itemNodeName);else{var m=this.pointEl.closest("."+d.itemClass);m.length&&(this.pointEl=m.closest(d.itemNodeName))}if(this.pointEl.hasClass(d.emptyClass))c=!0;else if(this.pointEl.data("nestable")&&!this.pointEl.children().length)c=!0,this.pointEl=t.$(this.tplempty).appendTo(this.pointEl);else if(!this.pointEl.length||!this.pointEl.hasClass(d.listitemClass))return;var g=this.element,u=this.pointEl.closest("."+this.options.listBaseClass),f=g[0]!==this.pointEl.closest("."+this.options.listBaseClass)[0],E=u;if(!r.dirAx||f||c){if(f&&d.group!==E.data("nestable-group"))return;if(n.push(g),h=this.dragDepth-1+this.pointEl.parents(d.listNodeName).length,h>d.maxDepth)return;var v=e.pageY<this.pointEl.offset().top+this.pointEl.height()/2;i=this.placeEl.parent(),c?this.pointEl.replaceWith(this.placeEl):v?this.pointEl.before(this.placeEl):this.pointEl.after(this.placeEl),i.children().length||i.data("nestable")||this.unsetParent(i.parent()),this.dragRootEl.find(d.itemNodeName).length||this.dragRootEl.children().length||this.dragRootEl.append(this.tplempty),f&&(this.dragRootEl=u,this.hasNewRoot=this.element[0]!==this.dragRootEl[0])}}}),t.nestable});