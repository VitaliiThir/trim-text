let scrollBtn;
function scrollBtn(){
    scrollBtn = '.scroll-button';
    let bodyScroll = $('html, body').scrollTop();
    if(bodyScroll > 300) {
        $(scrollBtn).addClass('active');
    } else {
        $(scrollBtn).removeClass('active');
    }
}
$(scrollBtn).on('click', function(){
    $('html, body').animate({
        scrollTop: 0
    }, 600);
});