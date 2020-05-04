/*eslint no-undef: */
$( document ).on( "DOMNodeInserted", function( e ) {
	$(".slider").not('.slick-initialized').slick({
        centerMode: true,
        slidesToShow: 3,
        prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right"></i></div>'
    });
});
