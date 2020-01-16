(function($) {
  class Cartlist {
    constructor() {
      this.itemlist = $(".J_goods_item");
    }
    init() {
      //1.获取本地存储
      if (localStorage.getItem("cartsid") && localStorage.getItem("cartnum")) {
        let csid = localStorage.getItem("cartsid").split(","); //sid
        let cnum = localStorage.getItem("cartnum").split(","); //数量
        for (let i = 0; i < csid.length; i++) {
          this.render(csid[i], cnum[i]);
        }
      }
      //值的改变
      this.valuechange();
      //删除调用
      this.delgoods();
    }
    //2.渲染一条数据的方法，封装函数
    render(sid, num) {
      //sid:当前渲染的购物车列表的编号，num:数量。
      $.ajax({
        url: "http://localhost/objectname/php/vipcart.php",
        dataType: "json"
      }).done(data => {
        let strHtml = "";
        $.each(data, (index, value) => {
          if (sid == value.sid) {
            strHtml += `
                        <tr class="J_goods_item">
                                                <td class="product-item">
                                                    <div class="m-product  product-small">
                                                        <div class="product-pic product-pic-trigger J_tooltips_trigger">
                                                            <a href="">
                                                                <img class="img-url" src="${value.url}" alt="" width="58"
                                                                    height="74">
                                                            </a>
                                                        </div>
                                                        <h3 class="product-title">
                                                            <span class="u-saletype u-saletype-0">自营</span>
                                                            <a href="">${value.title}</a>
                                                        </h3>
                                                        <p class="product-size">尺码：38</p>
                                                        <div class="product-price-tip">
                                                            <span class="product-tip">折后价</span>
                                                            <span class="product-vip">超级VIP已省¥24</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="price-item">
                                                    <div class="m-price price-num">
                                                        <span class="u-yen">￥</span>
                                                        <strong class="u-price b-price">${value.price}</strong>
                                                    </div>
                                                    <del class="m-price  market-price">
                                                        <span class="u-yen">￥</span>
                                                        <strong class="u-price">1666</strong>
                                                    </del>
                                                </td>
                                                <td class="quantity-item">
                                                    <div class="m-amount J_confirm_box J_cart_amount_confirm_box">
                                                        <a href="javascript:;"
                                                            class="quantity-down amount-trigger amount-trigger-minus
                                                            J_cart_numSubtract J_fake_a z-amount-trigger-disabled">
                                                            <span class="line-horizontal"></span>
                                                        </a>
                                                        <div class="amount-num">
                                                            <input type="text" value="${num}" class="J_cart_num">
                                                        </div>
                                                        <a href="javascript:;"
                                                            class="quantity-add amount-trigger amount-trigger-plus
                                                            J_cart_numAdd J_fake_a">
                                                            <span class="line-horizontal"></span>
                                                            <span class="line-verticality"></span>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td class="subtotal-item">
                                                    <span class="m-price  subtotal-price">
                                                        <span class="u-yen">￥</span>
                                                        <strong class="u-price">${(value.price * num).toFixed(2)}</strong>
                                                    </span>
                                                </td>
                                                <td class="actions-item">
                                                    <div class="m-order-del J_confirm_box J_cart_del_confirm_box">
                                                        <a href="javascript:;"
                                                            class="c-order-button-del  J_fake_a  J_list_delLink">删除</a>
                                                    </div>
                                                </td>
                                            </tr>
                        `;
            $(".orders-table tbody").append(strHtml);
            this.allprice();
          }
        });
      });

      
    }

    //计算总价
    allprice() {
      let $goodsnum = 0; //商品的件数
      let $goodsprice = 0; //商品的总价
      $(".J_goods_item").each(function(index, element) {
        $goodsnum += parseInt(
          $(element)
            .find(".amount-num input")
            .val()
        );
        $goodsprice += parseFloat(
          $(element)
            .find(".price-num strong")
            .html()
        );
      });
      $(".J_info_numTotal").html($goodsnum);
      $(".J_info_goodsTotal").html("￥" + $goodsprice);
    }
    //文本框值的改变
    valuechange() {
      //++的实现
      $(".quantity-add").on("click", function() {
        let $num = $(this)
          .prev()
          .find("input")
          .val();
        $num++;
        $(this)
          .prev()
          .find("input")
          .val($num);
        $(this)
          .parents(".J_goods_item")
          .find(".subtotal-item strong")
          .html(singleprice($(this))); //求单个总价
        local(
          $(this)
            .parents(".J_goods_item")
            .find("img")
            .attr("sid"),
          $num
        ); //存储数量
      });
      //--的实现
      $(".quantity-down").on("click", function() {
        let $num = $(this)
          .next()
          .find("input")
          .val();
        $num--;
        if ($num < 1) {
          $num = 1;
        }
        $(this)
          .next()
          .find("input")
          .val($num);
        $(this)
          .parents(".J_goods_item")
          .find(".subtotal-item strong")
          .html(singleprice($(this)));
        local(
          $(this)
            .parents(".J_goods_item")
            .find("img")
            .attr("sid"),
          $num
        );
      });
      //直接输入数量
      $(".amount-num input").on("input", function() {
        let $reg = /^\d+$/;
        let $inputvlaue = $(this).val();
        if ($reg.test($(this).val())) {
          if ($inputvlaue < 1) {
            $(this).val(1);
          } else {
            $(this).val($(this).val());
          }
        } else {
          $(this).val(1);
        }
        $(this)
          .parents(".J_goods_item")
          .find(".subtotal-item strong")
          .html(singleprice($(this)));
        local(
          $(this)
            .parents(".J_goods_item")
            .find("img")
            .attr("sid"),
          $(this).val()
        );
      });
      //封装计算单价
      function singleprice(obj) {
        let $dj = parseFloat(
          obj
            .parents(".J_goods_item")
            .find(".price-num strong")
            .html()
        );
        let $count = parseFloat(
          obj
            .parents(".J_goods_item")
            .find(".amount-num input")
            .val()
        );
        return $dj * $count.toFixed(2);
      }

      //改变数量--重新本地存储。
      //通过sid获取数量的位置，将当前改变的值存放到对应的位置。
      function local(sid, value) {
        //sid:当前的索引   value：数量
        if (
          localStorage.getItem("cartsid") &&
          localStorage.getItem("cartnum")
        ) {
          let arrsid = localStorage.getItem("cartsid").split(",");
          let arrnum = localStorage.getItem("cartnum").split(",");
          let index = $.inArray(sid, arrsid); //sid在数组中的位置索引。
          arrnum[index] = value;
          localStorage.setItem("cartnum", arrnum.toString());
        }
      }
    }
    //删除
    delgoods() {
      let arrsid = [];
      let arrnum = [];
      let _this = this;

      function getstorage() {
        if (
          localStorage.getItem("cartsid") &&
          localStorage.getItem("cartnum")
        ) {
          arrsid = localStorage.getItem("cartsid").split(",");
          arrnum = localStorage.getItem("cartnum").split(",");
        }
      }

      //删除本地存储数组项的值。确定删除的索引。
      function delstorage(sid, arrsid) {
        //sid:删除的索引，sidarr:数组   delstorage(3,[2,3,4,5])
        let $index = -1;
        $.each(arrsid, function(index, value) {
          if (sid === value) {
            $index = index; //接收索引值。
          }
        });

        arrsid.splice($index, 1);
        arrnum.splice($index, 1);
        localStorage.setItem("cartsid", arrsid.toString());
        localStorage.setItem("cartnum", arrnum.toString());
      }

      //单条删除
      $(".J_goods_item").on("click", ".c-order-button-del", function() {
        getstorage(); //取出本地存储，转换成数组。
        if (window.confirm("你确定要删除吗?")) {
          $(this)
            .parents(".J_goods_item")
            .remove();
        }
        delstorage(
          $(this)
            .parents("J_goods_item")
            .find(".goods-pic img")
            .attr("sid"),
          arrsid
        );
        _this.allprice();
      });
    }
  }
  new Cartlist().init();
})(jQuery);
