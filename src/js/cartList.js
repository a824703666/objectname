;
(function ($) {
    class Cartlist {
        constructor() {
            this.itemlist = $('.J_goods_item');
        }
        init() {
            //1.获取本地存储
            if (localStorage.getItem('cartsid') && localStorage.getItem('cartnum')) {
                console.log(localStorage.getItem('cartsid').split(','));
                console.log(localStorage.getItem('cartnum').split(','));
                let csid = localStorage.getItem('cartsid').split(','); //sid
                let cnum = localStorage.getItem('cartnum').split(','); //数量
                for (let i = 0; i < csid.length; i++) {
                    this.render(csid[i], cnum[i]);
                }
            }
            //值的改变
            this.valuechange();
            //删除调用
            this.delgoods();
        }
        //2.渲染一条数据的方法
        render(sid, num) { //sid:当前渲染的购物车列表的编号，num:数量。

            $.ajax({
                url: 'http://localhost/objectname/php/vipcart.php',
                dataType: 'json'
            }).done((data) => {
                $.each(data, (index, value) => {
                    if (sid == value.sid) {
                        let $clonebox = $('.J_goods_item').clone(true, true);
                        $clonebox.find('.img-url').attr('src', value.url); 
                        $clonebox.find('.J_goods_item img').attr('sid', value.sid);                       
                        $clonebox.find('.product-title a').html(value.title);
                        $clonebox.find('.b-price').html(value.price);
                        $clonebox.find('.amount-num input').val(num);
                        $clonebox.find('.subtotal-price strong').html((value.price * num).toFixed(2));
                        $clonebox.show();
                        $('.orders-table tbody').append($clonebox);
                        this.allprice();
                    }
                });
            });
        }

        //计算总价
        allprice() {
            let $goodsnum = 0; //商品的件数
            let $goodsprice = 0; //商品的总价
            $('.J_goods_item').each(function (index, element) {
                $goodsnum += parseInt($(element).find('.amount-num input').val());
                $goodsprice += parseFloat($(element).find('.price-num strong').html());
            });
            $('.J_info_numTotal').html($goodsnum);
            $('.J_info_goodsTotal').html('￥' + $goodsprice);
        }
        //文本框值的改变
        valuechange() {
            //++
            $('.quantity-add').on('click', function () {
                let $num = $(this).prev().find('input').val();
                $num++;
                $(this).prev().find('input').val($num);
                $(this).parents('.J_goods_item').find('.subtotal-item strong').html(singleprice($(this))); //求单个总价
                local($(this).parents('.J_goods_item').find('img').attr('sid'), $num); //存储数量
            });
            //--
            $('.quantity-down').on('click', function () {
                let $num = $(this).next().find('input').val();
                $num--;
                if ($num < 1) {
                    $num = 1;
                }
                $(this).next().find('input').val($num);
                $(this).parents('.J_goods_item').find('.subtotal-item strong').html(singleprice($(this)));
                local($(this).parents('.J_goods_item').find('img').attr('sid'), $num);
            });
            //直接输入
            $('.amount-num input').on('input', function () {
                let $reg = /^\d+$/;
                let $inputvlaue = $(this).val();
                if ($reg.test($(this).val())) {
                    if ($inputvlaue < 1) {
                        $(this).val(1)
                    } else {
                        $(this).val($(this).val())
                    }
                } else {
                    $(this).val(1);
                }
                $(this).parents('.J_goods_item').find('.subtotal-item strong').html(singleprice($(this)));
                local($(this).parents('.J_goods_item').find('img').attr('sid'), $(this).val());
            });
            //封装计算单价
            function singleprice(obj) {
                let $dj = parseFloat(obj.parents('.J_goods_item').find('.price-num strong').html());
                let $count = parseFloat(obj.parents('.J_goods_item').find('.amount-num input').val());
                return $dj * $count.toFixed(2);
            }

            //改变数量--重新本地存储。
            //通过sid获取数量的位置，将当前改变的值存放到对应的位置。
            function local(sid, value) { //sid:当前的索引   value：数量
                if (localStorage.getItem('cartsid') && localStorage.getItem('cartnum')) {
                    let arrsid = localStorage.getItem('cartsid').split(',');
                    let arrnum = localStorage.getItem('cartnum').split(',');
                    let index = $.inArray(sid, arrsid); //sid在数组中的位置索引。
                    arrnum[index] = value;
                    localStorage.setItem('cartnum', arrnum.toString());
                }
            }
        }
        //删除
        delgoods() {
            let arrsid = [];
            let arrnum = [];
            let _this = this;

            function getstorage() {
                if (localStorage.getItem('cartsid') && localStorage.getItem('cartnum')) {
                    arrsid = localStorage.getItem('cartsid').split(',');
                    arrnum = localStorage.getItem('cartnum').split(',');
                }
            }


            //删除本地存储数组项的值。确定删除的索引。
            function delstorage(sid, arrsid) { //sid:删除的索引，sidarr:数组   delstorage(3,[2,3,4,5])
                let $index = -1;
                $.each(arrsid, function (index, value) {
                    if (sid === value) {
                        $index = index; //接收索引值。  
                    }
                });

                arrsid.splice($index, 1);
                arrnum.splice($index, 1);
                localStorage.setItem('cartsid', arrsid.toString());
                localStorage.setItem('cartnum', arrnum.toString());
            }

            //单条删除
            $('.J_goods_item').on('click', '.c-order-button-del', function () {
                getstorage(); //取出本地存储，转换成数组。
                if (window.confirm('你确定要删除吗?')) {
                    $(this).parents('.J_goods_item').remove();
                }
                delstorage($(this).parents('J_goods_item').find('.goods-pic img').attr('sid'), arrsid);
                _this.allprice();
            });


            //删除选中
            $('.operation a').on('click', function () {
                getstorage(); //取出本地存储，转换成数组。
                if (window.confirm('你确定要删除吗?')) {
                    $('.goods-item:visible').each(function (index, element) {
                        if ($(this).find('input:checkbox').is(':checked')) {
                            $(this).remove();
                        }
                        delstorage($(this).find('.goods-pic img').attr('sid'), arrsid);
                    });
                }
                _this.allprice();
            });
        }



    }

    new Cartlist().init();

})(jQuery);