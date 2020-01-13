!function ($) {
    // tab切换
    var tabNav = $(".tab-nav-item");
    var tabContent = $(".tab-panel-box");

    function tabFun(tab, tabContent) {
        for (var i = 0; i < tab.length; i++) {
            tab[i].index = i;
            tab[i].onclick = function () {
                for (var j = 0; j < tab.length; j++) {
                    tab[j].classList.remove("tab-active")
                    tabContent[j].style.display = "none";
                    tab[this.index].classList.add("tab-active");
                    tabContent[this.index].style.display = "block";
                }
            }
        }
    }
    tabFun(tabNav, tabContent);
    //登录
    $('.login').on('click', function () {
        $.ajax({
            type: 'post',
            url: 'http://10.31.152.56/JS1912/Day%2030-31/loginregistry/php/login.php',
            data: {
                user: $('.username').val(),
                pass: $('.password').val()
            }
        }).done(function (result) {
            if (result) {
                history.go(-1);
                localStorage.setItem('username', $('.username').val());
            } else {
                $('.password').val('');
                alert('用户名或者密码错误');
            }
        });
    });
}(jQuery)