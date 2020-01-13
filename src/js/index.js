// 轮播
(function($) {
    var $banner = $('.banner-content');
    var $bannerli = $('.banner-content ul li');
    var $btnli = $('.nav-tab ul li');
    var num = 0; 
    $btnli.on('click', function() {
        num = $(this).index();
        tabswitch();
    });
    function tabswitch() {
        $btnli.eq(num).addClass('tabActive').siblings().removeClass('tabActive');
        $bannerli.eq(num).animate({ opacity: 1 }).siblings($bannerli).animate({ opacity: 0 });
    }
})(jQuery);