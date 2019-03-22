$(function (){
	let text = $('.t-text p');
	let modalText = $('.m-modal-text');
	let modalBtn = $('.m-modal-btn');

	text.smallText({
		max: 60,
		showHide: true
	});

	modalBtn.on('click', function () {
		modalText.popUp();
    });

    modalText.smallText({
        max: 80,
        showTextOnClick: true,
        showTextOnClickClass: '.m-modal-btn',
        showTextParent: '.modal-cont'
    });

});