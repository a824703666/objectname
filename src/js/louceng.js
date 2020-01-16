;
(function ($) {
  class Louceng {
    constructor() {
      this.$box1 = $(".shopcard-box1");
      this.$box2 = $(".shopcard-box2");
      this.$box3 = $(".shopcard-box3");
      this.$box4 = $(".shopcard-box4");
      this.$box5 = $(".shopcard-box5");
      this.$box6 = $(".shopcard-box6");
    }
    init() {
      $.ajax({
        url: "http://localhost/objectname/php/louceng.php",
        dataType: "json"
      }).done((data) => {
        let strhtml = "";
        for (let value of data) {
          strhtml += `
                  <div class="shop-card">
          <div class="shop-box">
            <a href="shopList.html">
              <img class="shop-card-img" src="images/${value.src}" alt="" />
              <div class="info">
                <span class="info-name">${value.title}</span>
              </div>
              <div class="discount">
                <span class="brand-discount">
                  <span class="sale-count">${value.discount}</span>
                  折封顶
                </span>
                <span class="character">|</span>
                <div class="sale-detail">
                  ${value.detail}
                </div>
              </div>
            </a>
          </div>
        </div>
                  `;
        }

        this.$box1.html(strhtml);
        this.$box2.html(strhtml);
        this.$box3.html(strhtml);
        this.$box4.html(strhtml);
        this.$box5.html(strhtml);
        this.$box6.html(strhtml);
      });
      //1.获取楼梯，给楼梯添加点击事件。
      $("#fixed-left a").on("click", function () {
        //$(this).index():当前操作的元素的索引
        $(this)
          .addClass("active")
          .siblings("li")
          .removeClass("active");
        let $top = $(".special-sale")
          .eq($(this).index())
          .offset().top; //和楼梯对应的楼层的top值。
        $("html").animate({
          scrollTop: $top
        });
      });
      //3.触发滚轮，对应的楼梯背景样式发生改变。
      let $top = $(window).scrollTop();
      if ($top >= 600) {
        $("#fixed-left").show();
        //$('#loutinav').css('display', 'block');
      } else {
        $("#fixed-left").hide();
        //$('#loutinav').css('display', 'none');
      }
      $(window).on("scroll", function () {
        //显示隐藏楼梯
        $top = $(window).scrollTop();
        if ($top >= 600) {
          $("#fixed-left").show();
          //$('#loutinav').css('display', 'block');
        } else {
          $("#fixed-left").hide();
          //$('#loutinav').css('display', 'none');
        }

        $(".special-sale").each(function (index, element) {
          //触发滚轮，遍历一次。
          //每一个楼层的top值
          let $loucenttop =
            $(".special-sale")
            .eq(index)
            .offset().top +
            $(".special-sale")
            .eq(index)
            .height() /
            2;
          //每一次触发滚轮，用9个楼层的固有top和滚动条的top值进行比较
          //如果楼层的固有top>滚动条的top  添加active
          if ($loucenttop > $top) {
            //上面遍历一次，楼层比较9次，满足一次，立刻结束
            $("#fixed-left a")
              .not(".last")
              .removeClass("active"); //清空所有楼梯的样式。
            $("#fixed-left a")
              .not(".last")
              .eq(index)
              .addClass("active"); //给符合条件的第一个添加样式。
            return false; //结束
          }
        });
      });
    }
  }
  new Louceng().init();
})(jQuery);