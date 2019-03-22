function handler(event) {
    let hash = event.target.hash;

    if (hash) {
        let tag = $(hash);
        if ($(hash).length) {
            let offset = tag.offset().top;
            $('html, body').stop().animate({scrollTop: offset}, 900);
        }
    }
}
$('.header nav ul li a').on("click", handler);