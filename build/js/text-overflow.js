!function(n){n.fn.smallText=function(s){var w=n.extend({max:50,dots:!0,dotsSpan:'<span class="dots">...</span>',showHide:!1,showHideMoreText:"more",showHideLessText:"less",showHideLinkColor:"#5D81E2",showHideLinkFontSize:14,showTextSpeed:100,showTextOnClick:!1,showTextOnClickClass:"",showTextParent:""},s);return this.each(function(){var f=n(this),x=f.html().trim();f.text(function(s,e){if(e.length>=w.max){var n=(e=e.trim().substring(0,w.max)).lastIndexOf(" "),t=e.substr(0,n),i=x.substr(n,x.length-n),o='<span class="show">'+t+"</span>";!0===w.dots&&(f.html(o+w.dotsSpan+'<span class="hide">'+i+"</span>"),r()),!0===w.showHide&&(f.html(o+w.dotsSpan+'<a class="link more">'+w.showHideMoreText+'</a><span class="hide">'+i+'<a class="link less">'+w.showHideLessText+"</a></span>"),r(),a=f.find(".link"),d=f.find(".more"),l=f.find(".less"),h=f.find(".hide"),c=f.find(".dots"),a.css({color:w.showHideLinkColor,cursor:"pointer","font-size":w.showHideLinkFontSize+"px"}),l.css({display:"block","text-align":"right","line-height":"1em"}),d.on("click",function(s){s.preventDefault(),h.slideDown(w.showTextSpeed),c.fadeOut(20),d.fadeOut(20)}),l.on("click",function(s){s.preventDefault(),h.slideUp(w.showTextSpeed),c.fadeIn(20),d.fadeIn(20)}))}var a,d,l,h,c;function r(){f.find(".hide").css({display:"none"})}}),!0===w.showTextOnClick&&n(w.showTextOnClickClass).on("click",function(){var s=n(w.showTextParent).find(".hide"),e=n(w.showTextParent).find(".dots");e.fadeOut(20),s.fadeIn(20)})})}}(jQuery);