// 轮播
;
(function ($) {
    class Index {
        constructor() {
            this.$banner = $('.banner-content');
            this.$bannerli = $('.banner-content ul li');
            this.$btnli = $('.nav-tab ul li');
            this.num = 0;
            this.timer = null;
            this.$piclilength = this.$bannerli.size();
        }
        init() {
            this.$btnli.on('click', () => {
                this.num = $(this).index();
                tabswitch();
            });

            function tabswitch() {
                this.$btnli.eq(this.num).addClass('tabActive').siblings().removeClass('tabActive');
                this.$bannerli.eq(this.num).animate({
                    opacity: 1
                }).siblings(this.$bannerli).animate({
                    opacity: 0
                });
            }
            this.timer = setInterval(() => {
                this.num++;
                if (this.num > this.$piclilength - 1) {
                    this.num = 0;
                }
                tabswitch();
            }, 6000);

            this.$banner.hover(() => {
                clearInterval(this.timer);
            }, () => {
                this.timer = setInterval(() => {
                    this.num++;
                    if (this.num > this.$piclilength - 1) {
                        this.num = 0;
                    }
                    tabswitch();
                }, 6000);
            });
        }
    }
    new Index().init();
})(jQuery);