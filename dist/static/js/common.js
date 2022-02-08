AOS.init({disable: 'mobile'});
$(window).on('scroll', function() {
    var $this = $(this),
        $header = $('.header');
    var sectionStep = $('#step').offset().top - 100;
    if ($this.scrollTop() >= sectionStep) {
        $('.tab-item__media').addClass('media-animation');
    }
    if ($this.scrollTop() > 1) {
        $header.addClass('scroll-nav');
    }
    else{
        $header.removeClass('scroll-nav');
    }
});
$('.header-logo a, .footer-logo a').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});
$(document).mouseup(function (e){
    var div = $('.header-phone');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('.header-phone ul').removeClass('is-open');
    }
});
$(function() {
    var headerHeight = $('header').outerHeight(); // Target your header navigation here
    $('.header-nav a').click(function(e) {
        var targetHref   = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(targetHref).offset().top - headerHeight // Add it to the calculation here
        }, 1000);
        $('.header-nav__button').find('.icon').toggleClass('hidden');
        $('.header-nav, .header-overlay').toggleClass('is-hidden');
        $('body').toggleClass('scroll');
        e.preventDefault();
    });
});
$('.header-nav__button').on('click', function () {
   var $this = $(this);
    $this.find('.icon').toggleClass('hidden');
    $('.header-nav, .header-overlay').toggleClass('is-hidden');
    $('body').toggleClass('scroll');
});
$('.footer-nav').on('click', function () {
    $('.header-nav__button').find('.icon').toggleClass('hidden');
    $('.header-nav, .header-overlay').toggleClass('is-hidden');
    $('body').toggleClass('scroll');
});
$('.header-overlay').on('click', function () {
    $('.header-nav__button').find('.icon').toggleClass('hidden');
    $('.header-nav, .header-overlay').toggleClass('is-hidden');
    $('body').toggleClass('scroll');
});
$('.header-phone__btn').on('click', function () {
    var $this = $(this);
    $this.next().toggleClass('is-open');
});
function popupOpen() {
    var $popupButton = $('.btn-popup');
    $popupButton.on('click', function (e) {
        var $this = $(this);
        var popupButtonData = $this.data('popup');
        $('.popup').removeClass('active');
        $('div[data-popup = '+popupButtonData+']').addClass('active');
        $('body').addClass('scroll');
    });
}
popupOpen();
$('.popup-close').on('click', function (e) {
    var $this = $(this);
    $this.parent().parent().removeClass('active');
    $('.popup-overlay').removeClass('active');
    $('body').removeClass('scroll');
});
$('.popup-overlay').on('click', function (e) {
    var $this = $(this);
    $this.removeClass('active');
    $('.popup').removeClass('active');
    $('body').removeClass('scroll');
});
function tabsInner(){
    var tabItemNav = $('.tab-nav a');
    var tabItem = $('.tab-item' );
    tabItemNav.on('click', function(e){
        e.preventDefault();
        var $this = $(this),
            tabItemId = $this.attr('href');
        tabItemNav.removeClass('active');
        $this.addClass('active');
        tabItem.removeClass('active');
        $('.tab-item__media').removeClass('media-animation');
        $(tabItemId).addClass('active');
        function explode(){
            $('.tab-item__media').addClass('media-animation');
        }
        setTimeout(explode, 500);
    });
}
tabsInner();

if ($('.reviews-item').length > 3) {
    $('.reviews-item:gt(2)').hide().removeClass('aos-init aos-animate');
    $('.show-more').show();
}
$('.reviews-wrapper .show-more').on('click', function (e) {
    var $this = $(this);
    $this.find('span').toggleClass('hidden');
    $('.reviews-item:gt(2)').toggle();
});
if ($('.product-item').length > 3) {
    $('.product-item:gt(2)').hide().removeClass('aos-init aos-animate');
    $('.show-more').show();
}
$('.catalog-wrapper .show-more').on('click', function (e) {
    var $this = $(this);
    $this.find('span').toggleClass('hidden');
    $('.product-item:gt(2)').toggle();
});