function generateStickyDebounce(s,n,a){var o;return function(){var t=this,e=arguments,i=a&&!o;clearTimeout(o),o=setTimeout(function(){o=null,a||s.apply(t,e)},n),i&&s.apply(t,e)}}!function(z,T,M){function e(t,e){function s(){var t=0<jQuery("#wpadminbar").length&&"fixed"==jQuery("#wpadminbar").css("position")?jQuery("#wpadminbar").outerHeight():0;return"auto"===U.topMargin?parseInt(t+v.css("marginTop")):isNaN(U.topMargin)&&0<U.topMargin.search("px")?parseInt(t+U.topMargin.replace("px","")):isNaN(parseInt(U.topMargin))?0:parseInt(t+U.topMargin)}function n(){H.remove(),v.removeClass(U.fixedClass).css({"max-width":"","margin-top":"","margin-left":"","margin-right":"",position:"",top:"",left:"",right:"",bottom:"",width:"",opacity:"",height:"",overflow:"","-webkit-transform":"","-ms-transform":"",transform:"","-webkit-transition":"","-ms-transition":"",transition:"",visibility:"","z-index":""}).removeClass("sticky-navigation-transition").removeClass("navigation-transition").removeClass("sticky-nav-scrolling-up"),"sticky-navigation"===v.attr("id")&&v.attr("id","site-navigation"),m=h=p=!1,v.trigger("stickUp:unStick")}function a(t){z(H).insertAfter(v).show().addClass(U.fixedClass);var e,i=H.offsetParent();t&&(v.css({position:"absolute"}),e=x.offset().top+x.outerHeight()-i.offset().top-g-parseInt(x.css("paddingBottom"))),v.css({position:"absolute",marginTop:C,bottom:"",left:H.position().left,top:t?e:v.offset().top-i.offset().top-C}),v.trigger("stickUp:holdIt")}function i(t){var e,i;U.disableOn()?(u=u&&!1,U.keepInWrapper&&!x.is(":visible")||(l=z(t.target).scrollTop(),c=r<=l?"down":"up",d=Math.abs(r-l),z(T).outerHeight(),r=l,b=v.offset().top,f=parseInt(v.outerHeight()+C)+parseInt(v.css("marginBottom")),p||m||h||(parseInt(v.outerHeight(!0)),h||m?(S.top=parseInt(H.offset().top),parseInt(v.offset().left)):S.top=parseInt(v.offset().top)),g=parseInt(v.outerHeight())+parseInt(v.css("margin-bottom"))+C,U.keepInWrapper?S.bottom=x.offset().top+x.outerHeight()-parseInt(x.css("paddingBottom")):S.bottom=z(M).outerHeight(),k=v.offset().top+g,I=U.scrollHide?f+U.lazyHeight:U.lazyHeight,"none"!==U.transition&&(w=2*v.outerHeight()),C=null!==U.topMargin?s():0,p&&C!==v.css("margin-top")&&v.css("margin-top",C),(!p&&!h&&l>=S.top-C+I+w||h&&m&&l<=b-C+I)&&(function(){p=!0,U.zIndex&&v.css("z-index",U.zIndex),"fade"==U.transition&&v.hide(),"slide"!=U.transition&&!U.scrollHide||v.css({height:"0",overflow:"hidden",visibility:"hidden"}),z(H).insertAfter(v).show().addClass(U.fixedClass),z(".gen-sidebar-nav").length&&H.css("height",v.outerHeight()),"left"!=v.css("float")&&"right"!=v.css("float")||(H.css("float",v.css("float")),H.attr("style",H.attr("style")+"width:auto !important;")),"slide"==U.transition&&"block"==H.css("display")&&v.css({"-webkit-transform":"translateY(-100%)","-ms-transform":"translateY(-100%)",transform:"translateY(-100%)","-webkit-transition":"transform 300ms ease-in-out","-ms-transition":"transform 300ms ease-in-out",transition:"transform 300ms ease-in-out"}),v.addClass(U.fixedClass),"site-navigation"===v.attr("id")&&v.attr("id","sticky-navigation");var t=-I;v.css({"margin-top":C,position:"fixed",top:t+"px",left:"",right:"",bottom:""}),v.trigger("stickUp:stickIt"),"fade"==U.transition&&v.fadeIn(300),"slide"==U.transition&&v.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(t){v.css({visibility:"",height:"",overflow:""}),setTimeout(function(){v.css({"-webkit-transform":"translateY(0)","-ms-transform":"translateY(0)",transform:"translateY(0)"})},10)}),U.scrollHide&&v.css({height:"",overflow:"",visibility:""})}(),m=h=!(p=!0)),p&&!h&&l>=S.top-C+I+v.outerHeight()/2&&(H.addClass("sticky-navigation-transition"),v.addClass("sticky-navigation-transition")),U.keepInWrapper&&parseInt(k-C)!==parseInt(S.bottom)&&l>=S.bottom-g+I&&(a(!0),m=h=!(p=!1)),p&&(e=parseInt(v.css("top")),"up"===c&&0!==e?(i=-e<d?0:e+d,v.css("top",i+"px"),v.addClass("sticky-nav-scrolling-up")):"down"===c&&-I<e&&(i=I+e<d?-I:e-d,v.css("top",i+"px"),v.removeClass("sticky-nav-scrolling-up"))),(p||m||h)&&l<=S.top-C&&n(),(p||m||h)&&H&&H.width()!==v.outerWidth()&&v.outerWidth(H.outerWidth()))):u||(n(),u=!0)}function o(t){m&&(a(),h=!1),i(t)}var r=0,l=0,c="",d=0,p=!1,h=!1,m=!1,u=!1,f=0,g=0,b=0,k=0,v=z(),y=z("body"),w=0,C=0,I=0,H=z(t).clone().css({visibility:"hidden",display:"none"}).attr({id:"sticky-placeholder","aria-hidden":!0,itemtype:null,itemscope:null}),x=z(),S={top:0,bottom:0,custom:[]},U={scrollHide:!1,lazyHeight:0,topMargin:"auto",keepInWrapper:!1,wrapperSelector:"",zIndex:1e4,namespaceClass:"stuckElement",fixedClass:"isStuck",disableOn:function(){return!0},transition:"none"};(function(t,e){(v=z(t)).addClass(U.namespaceClass),e&&z.extend(!0,U,e),C=null!==U.topMargin?s():0,U.lazyHeight&&(C+=U.lazyHeight),U.keepInWrapper?(""!==U.wrapperSelector&&(x=v.closest(U.wrapperSelector)),x.length||(x=v.parent())):x=y,z(T).on("scroll.stickUp",i),z(T).on("resize.stickUp",o),i({target:M})}).call(this,t,e),z(t).on("stickUp:detach",function(t){(v=z(this)).removeClass(U.namespaceClass),H.remove(),v.removeClass(U.fixedClass).css({maxWidth:"",marginTop:"",marginLeft:"",marginRight:"",position:"",top:"",left:"",right:"",bottom:"",width:""}),u=!(m=h=p=!1),z(T).off("scroll.stickUp",i),z(T).off("resize.stickUp",o)})}z.fn.stickUp=function(t){return this.each(function(){new e(this,t)})}}(jQuery,window,document),function(a){a.fn.GenerateSimpleSticky=function(t){var e=a.extend({menu:a(this),parent:!1,scrollHide:!1,offsetElement:"#wpadminbar",disableOn:function(){return!0},transition:"none"},t),i=a("body"),s=null,s=e.parent?e.parent:e.menu.parent();(0<e.menu.parents(".site-header").length||0<e.menu.parents(".generate-page-header").length||0<e.menu.parents(".header-wrap").length||0<e.menu.parents(".site-wrapper").length)&&(s=i),!i.hasClass("nav-right-sidebar")&&!i.hasClass("nav-left-sidebar")||a(".menu-toggle").is(":visible")||(e.menu=a(".gen-sidebar-nav"),s=a(".site-content"),e.menu.children().hasClass("auto-hide-sticky")),0<jQuery(e.offsetElement).length&&"fixed"==jQuery(e.offsetElement).css("position")&&jQuery(e.offsetElement).outerHeight();var n={scrollHide:e.scrollHide,keepInWrapper:!0,wrapperSelector:s,fixedClass:"is_stuck navigation-stick navigation-clone",topMargin:0,disableOn:e.disableOn,transition:e.transition};e.menu.stickUp(n)}}(jQuery),jQuery(function(s){window;var t,e,i,n=s("body"),a="none";n.hasClass("sticky-enabled")&&(t=s("#site-navigation"),n.hasClass("sticky-menu-fade")&&(a="fade"),n.hasClass("sticky-menu-slide")&&(a="slide"),e={transition:a,scrollHide:!!t.hasClass("auto-hide-sticky"),disableOn:function(){var t=s("body"),e=s("#mobile-header"),i=s(".menu-toggle");return(!t.hasClass("desktop-sticky-menu")||!i.is(":visible"))&&(!(t.hasClass("mobile-sticky-menu")&&!i.is(":visible"))&&(!t.hasClass("mobile-header")||!e.is(":visible")))}},s(t).GenerateSimpleSticky(e),n.on("generate_navigation_location_updated",function(){t.trigger("stickUp:detach"),setTimeout(function(){s(t).GenerateSimpleSticky(e)},250)})),n.hasClass("mobile-header")&&n.hasClass("mobile-header-sticky")&&(i=s("#mobile-header")).GenerateSimpleSticky({scrollHide:!(!i.data("auto-hide-sticky")&&""!==i.data("auto-hide-sticky")),disableOn:function(){return!!i.is(":visible")}});var o=s(".sidebar-nav-mobile"),r=s(".gen-sidebar-nav"),l=s(window).width(),c=generateStickyDebounce(function(){l!==s(window).width()&&(o.is(":visible")&&(r.trigger("stickUp:detach"),o.trigger("stickUp:detach"),o.GenerateSimpleSticky(e)),r.is(":visible")&&(o.trigger("stickUp:detach"),r.trigger("stickUp:detach"),r.GenerateSimpleSticky(e)))},250);s("body").hasClass("sticky-enabled")&&o.length&&(window.addEventListener("resize",c),window.addEventListener("orientationchange",c)),navigator.userAgent.match(/(iPod|iPhone|iPad)/)&&(n.hasClass("sticky-enabled")||n.hasClass("mobile-header")&&n.hasClass("mobile-header-sticky"))&&s(document).on("focus",".navigation-stick .search-field",function(){s("html, body").animate({scrollTop:0},"fast")});function d(t){var e=t,i=e.getAttribute("href");e.pathname===window.location.pathname&&"#"!==i&&e.closest("nav").classList.contains("toggled")&&(e.closest("nav").classList.remove("toggled"),s("html").hasClass("mobile-menu-open")&&s("html").removeClass("mobile-menu-open"))}(n.hasClass("both-sticky-menu")||n.hasClass("mobile-sticky-menu"))&&s(".main-navigation:not(#mobile-header) ul a[href*=\\#]").on("click",function(t){d(this)}),n.hasClass("mobile-header-sticky")&&s("#mobile-header ul a[href*=\\#]").on("click",function(t){d(this)})});