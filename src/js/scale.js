(function ($) {
    class Scale {
        constructor() {
            this.wrap = $('.pic-sliderwrap');
            this.spic = $('#spic');
            this.sf = $('#sf');
            this.bf = $('#bf');
            this.bpic = $('#bpic');
            this.left = $('#left');
            this.right = $('#right');
            this.ulmove = $('#J-sImg-wrap');
            this.list = $('#J-sImg-wrap .pic-slider-items');
        }
        init() {
            //1.鼠标移入移出显示隐藏小放和大放。
            let _this = this;
            this.spic.hover(() => {
                $('#sf,#bf').css('visibility', 'visible');

                //3.求小放的尺寸和比例
                this.sf.css({
                    width: this.spic.outerWidth() * this.bf.outerWidth() / this.bpic.outerWidth(),
                    height: this.spic.outerHeight() * this.bf.outerHeight() / this.bpic.outerHeight()
                });
                //求比例 outerWidth()$().outerHieght()$().innerWidth()$().width()
                this.biliw = this.bpic.outerWidth() / this.spic.outerWidth();
                this.bilih = this.bpic.outerHeight() / this.spic.outerHeight();



                //2.鼠标在小图中移动，小放跟随鼠标   offset().left  offset().top
                this.spic.on('mousemove', (e) => {
                    let $l = e.pageX - this.wrap.offset().left - this.sf.width() / 2;
                    let $t = e.pageY - this.wrap.offset().top - this.sf.height() / 2;
                    if ($l < 0) {
                        $l = 0;
                    } else if ($l >= this.spic.outerWidth() - this.sf.outerWidth()) {
                        $l = this.spic.outerWidth() - this.sf.outerWidth() - 2;
                    }

                    if ($t < 0) {
                        $t = 0;
                    } else if ($t >= this.spic.outerHeight() - this.sf.outerHeight()) {
                        $t = this.spic.outerHeight() - this.sf.outerHeight() - 2;
                    }

                    this.sf.css({
                        left: $l,
                        top: $t
                    });
                    // this.sf.css({
                    //     left:$l,
                    //     top:$t
                    // });

                    // 大图进行赋值
                    this.bpic.css({
                        left: -$l * this.biliw,
                        top: -$t * this.bilih
                    });
                });
            }, () => {
                $('#sf,#bf').css('visibility', 'hidden');
            });


            //点击对应的li切换缩放的图片
            this.ulmove.on('click', '.pic-slider-items', function () {
                let $imgurl = $(this).find('img').attr('src');
                _this.spic.find('img').attr('src', $imgurl);
                _this.bpic.attr('src', $imgurl);
            });
        }
    }

    new Scale().init();
})(jQuery);