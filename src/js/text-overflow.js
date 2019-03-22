(function ($) {
    $.fn.smallText = function (options) {
        let settings = $.extend({
            max: 50,
            dots: true,
            dotsSpan: '<span class="dots">...</span>',
            showHide: false,
            showHideMoreText: 'more',
            showHideLessText: 'less',
            showHideLinkColor: '#5D81E2',
            showHideLinkFontSize: 14,
            showTextSpeed: 100,
            showTextOnClick: false,
            showTextOnClickClass: '',
            showTextParent: ''

        }, options);
        return this.each(function () {
            let elem = $(this);
            let moreText = elem.html().trim();

            elem.text(function (i, text) {
                if (text.length >= settings.max) {
                    text = text.trim().substring(0, settings.max);
                    let lastIndex = text.lastIndexOf(" "),
                        textShow = text.substr(0, lastIndex),
                        textHide = moreText.substr(lastIndex, moreText.length - lastIndex),
                        spanShow = '<span class="show">' + textShow + '</span>';

                    if (settings.dots === true) {
                        elem.html(spanShow + settings.dotsSpan + '<span class="hide">' + textHide + '</span>');
                        showOrHide();
                    }

                    if (settings.showHide === true) {
                        elem.html(spanShow + settings.dotsSpan + '<a class="link more">' + settings.showHideMoreText + '</a>' +
                            '<span class="hide">' + textHide +
                            '<a class="link less">' + settings.showHideLessText + '</a>' + '</span>');
                        showOrHide();
                        moreLess();
                    }
                }

                function showOrHide() {
                    let spanHideClass = elem.find('.hide');
                    spanHideClass.css({
                        'display': 'none'
                    });
                }

                function moreLess() {
                    let link = elem.find('.link');
                    let linkMore = elem.find('.more');
                    let linkLess = elem.find('.less');
                    let textHide = elem.find('.hide');
                    let dots = elem.find('.dots');
                    link.css({
                        'color': settings.showHideLinkColor,
                        'cursor': 'pointer',
                        'font-size': settings.showHideLinkFontSize + 'px'
                    });
                    linkLess.css({
                        'display': 'block',
                        'text-align': 'right',
                        'line-height': '1em'
                    });
                    linkMore.on('click', function (e) {
                        e.preventDefault();
                        textHide.slideDown(settings.showTextSpeed);
                        dots.fadeOut(20);
                        linkMore.fadeOut(20);
                    });
                    linkLess.on('click', function (e) {
                        e.preventDefault();
                        textHide.slideUp(settings.showTextSpeed);
                        dots.fadeIn(20);
                        linkMore.fadeIn(20);
                    });
                }

            });
            if(settings.showTextOnClick === true) {
                textShowOnClick();
            }
            function textShowOnClick() {
                $(settings.showTextOnClickClass).on('click', function () {
                    let showText = $(settings.showTextParent).find('.hide');
                    let showTextDots = $(settings.showTextParent).find('.dots');
                    showTextDots.fadeOut(20);
                    showText.fadeIn(20);
                });
            }
        });
    }
})(jQuery);