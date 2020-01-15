(function($) {
   class shopList{
    constructor(){
        this.inner=$(".inner");
    }
    init (){
        $.ajax({
      url: "http://localhost/objectname/php/vipcart.php",
      dataType: "json"
    }).done(data => {
      let strhtml = "";
      for (let value of data) {
        strhtml += `
        <div class="goods-card">
                <div class="content">
                    <div class="goods-img">
                        <a href="details.html?sid=${value.sid}">
                            <img src="${value.url}" width="235" height="297" alt="">
                            
                    <div class="hot-tip"></div>
                        </a>
                    </div>
                    <div class="goods-price">
                        <div class="price-box">
                            疯抢价
                            <span>￥</span>
                            <span class="discount-price">${value.price}</span>
                        </div>
                    </div>
                </div>
                <div class="goods-footer">
                    <del class="origin-price">￥2000.00</del>
                    <span class="goods-discount">1.2折</span>
                </div>
                <h4 class="goods-title-info">
                    <a href="">${value.title}</a>
                </h4>
            </div> 
                `;
      }

      this.inner.html(strhtml);
    });
    }
   
   }
   new shopList().init();
  })(jQuery);