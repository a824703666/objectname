class Details {
    constructor() {
        //接收sid
        this.sid = location.search.substring(1).split('=')[1];
        this.spic = $('#spic');
        this.bpic = $('#bpic');
        this.sf = $('#sf');
        this.bf = $('#bf');
        this.list_ul = $('#J-sImg-wrap');
        this.count = $('#count');
    }

    init() {
        //将接收的sid传给后端。
        $.ajax({
            url: 'http://localhost/objectname/php/vipgitsid.php',
            data: {
                sid: this.sid
            },
            dataType: 'json'
        }).done((objdata) => {
            $('#spic img').attr('src', objdata.url);
            $('#bpic').attr('src', objdata.url);
            $('.J_brandName,.pib-title-detail').html(objdata.title);
            $('.sp-price').html(objdata.price);
            let piclist = objdata.urls.split(',');
            let $strhtml = '';
            $.each(piclist, function (index, value) {
                $strhtml += `
                    <div class="pic-slider-items J-picSlider-items pic-slider-cur" data-index="0">
                                    <img src="${value}" alt="" width="62" class="J-mer-smallImg">
                                </div>
                                `;
            });

            this.list_ul.html($strhtml)

        });
        this.valuechange();
        //执行添加购物车操作
        this.addcart();

    }
    //文本框值的改变
    valuechange() {
        //++
        $('.quantity-add').on('click', function () {
            console.log(1)
            let $num = $(this).prev('input').val();
            $num++;
            $(this).prev().val($num);
            $(this).parent().find('.J-pro-num-txt').html($num);
        });
        //--
        $('.quantity-down').on('click', function () {
            let $num = $(this).parent().find('input').val();
            $num--;
            if ($num < 1) {
                $num = 1;
            }
            $(this).parent().find('input').val($num);
            $(this).parent().find('.J-pro-num-txt').html($num);
        });
    }
    //添加购物车操作
    addcart() {
        let goodsnum = []; //商品的数量
        let goodsid = []; //商品的编号
        //cartnum  cartsid:本地存储的key值
        function getcookie() {
            if (localStorage.getItem('cartnum') && localStorage.getItem('cartsid')) {
                goodsnum = localStorage.getItem('cartnum').split(',');
                goodsid = localStorage.getItem('cartsid').split(',');
            }
        }
        $('.cart-btn').on('click', () => {
            alert('添加成功')
            getcookie();
            if ($.inArray(this.sid, goodsid) === -1) { //第一次点击,将sid传入，取到数量直接传入
                goodsid.push(this.sid);
                localStorage.setItem('cartsid', goodsid); //存入sid
                goodsnum.push(this.count.val());
                localStorage.setItem('cartnum', goodsnum); //存入数量
            } else {
                let index = $.inArray(this.sid, goodsid); //当前sid在数组中对应的位置
                let newnum = parseInt(goodsnum[index]) + parseInt(this.count.val()); //原来存储的值+当前的值
                goodsnum[index] = newnum; //新的数量
                localStorage.setItem('cartnum', goodsnum); //存入数量
            }
        });
    }
}
export {
    Details
}