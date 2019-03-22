(function ($) {
        $.fn.popUp = function (options) {
            let settings = $.extend({
                borderRadius: null,
                preloader: false,
                preloaderPuth: '../img/modal-preloader.gif',
                speedFade: 350,
                background: '#ffffff',
                customClassParent: '',
                customClassGlobal: '',
                bodyOverlow: true
            }, options);

            return this.each(function () {
                let elem = $(this).clone();
                let modal = $('<div class="modal-overlay"><div class="modal-item-wrap"><div class="modal-item"><div class="modal-cont-wrap"><div class="modal-cont"></div></div><div class="modal-close"><span></span><span></span></div></div></div></div>');
                let body = $('body');
                let modalElem = modal.find('.modal-cont');
                body.append(modal);
                modalElem.append(elem);

                if (settings.bodyOverlow === true) {
                    body.addClass('overflow');
                }

                modal.fadeIn(settings.speedFade);

                if (settings.customClassParent !== undefined) {
                    customClassParent();
                }
                if (settings.customClassGlobal !== undefined) {
                    customClassGlobal();
                }

                modalElem.parents('.modal-item').addClass('active');

                if (settings.preloader === true) {
                    modPreloader();
                }

                elem.fadeIn(settings.speedFade);

                if (modalElem.find('video').length > 0) {
                    modalVideoUser();
                }
                if (modalElem.find("iframe").length > 0) {
                    modalYouTubeUser();
                }

                modal.find('.modal-cont-wrap').css('background', settings.background);
                modalElem.parent().css('border-radius', +settings.borderRadius + 'px');

                modalClose();

                function customClassParent() {
                    modalElem.addClass(settings.customClassParent);
                }

                function customClassGlobal() {
                    modalElem.parents('.modal-item-wrap').addClass(settings.customClassGlobal);
                }

                function modPreloader() {
                    let preloaderParent = modalElem.parents('.modal-item');
                    let modalPreloader = $('<div class="modal-preloader"><img src=" ' + settings.preloaderPuth + ' " alt="Loading"></div>');
                    let preloaderItem = modalPreloader.find('img');
                    preloaderParent.css('position', 'relative');
                    modalElem.parent().prepend(modalPreloader);
                    modalPreloader.css('display', 'block');
                    preloaderItem.css('display', 'block');
                    elem.ready(function () {
                        preloaderItem.fadeOut(settings.speedFade);
                        modalPreloader.delay(settings.speedFade).fadeOut('slow');
                        setTimeout(function () {
                            modalPreloader.remove();
                        }, settings.speedFade);
                    });
                }

                function modalClose() {
                    let overlay = elem.parents('.modal-overlay');
                    clickClose();
                    clickOverlay();

                    function clickClose() {
                        let close = elem.parents('.modal-cont-wrap').next();
                        close.on('click', function () {
                            overlay.fadeOut(settings.speedFade);
                            elem.fadeOut(settings.speedFade);
                            bodyOverflow();
                            setTimeOutRemoveModal();
                        });
                    }

                    function clickOverlay() {
                        let itemWrap = elem.parents('.modal-item');
                        overlay.on('click', function (e) {
                            if (!$(this).find(itemWrap).is(e.target) && $(this).find(itemWrap).has(e.target).length === 0) {
                                overlay.fadeOut(settings.speedFade);
                                elem.fadeOut(settings.speedFade);
                                bodyOverflow();
                                setTimeOutRemoveModal();
                            }
                        });
                    }

                    function setTimeOutRemoveModal() {
                        setTimeout(function () {
                            overlay.remove();
                        }, settings.speedFade);
                    }

                }

                function bodyOverflow() {
                    let bodyModal = body.find('.modal-overlay');
                    bodyModal.each(function () {
                        if (bodyModal.length < 2) {
                            body.removeClass('overflow');
                        }
                    });
                }

                function modalYouTubeUser() {
                    elem.parents('.modal-item-wrap').addClass('modal-video');
                    let youtubeIframe = modalElem.find('iframe');
                    youtubeIframe.removeAttr('width').removeAttr('height').removeAttr('frameborder');
                    modalElem.removeClass().addClass('modal-cont');
                    youtubeIframe[0].src += "?autoplay=1";
                }

                function modalVideoUser() {
                    elem.parents('.modal-item-wrap').addClass('modal-video');
                    let videoElem = modalElem.find('video');
                    modalElem.removeClass().addClass('modal-cont');
                    videoElem.get(0).play();
                    videoElem.prop("controls", true);
                }

            });

        };
    })(jQuery);