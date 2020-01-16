;
(function ($) {
  class Login {
    constructor() {
      // tab切换
      this.tabNav = $(".tab-nav-item");
      this.tabContent = $(".tab-panel-box");
    }
    init() {
      function tabFun(tab, tabContent) {
        for (var i = 0; i < tab.length; i++) {
          tab[i].index = i;
          tab[i].onclick = function () {
            for (var j = 0; j < tab.length; j++) {
              tab[j].classList.remove("tab-active");
              tabContent[j].style.display = "none";
              tab[this.index].classList.add("tab-active");
              tabContent[this.index].style.display = "block";
            }
          };
        }
      }
      tabFun(this.tabNav, this.tabContent);
      $(".username").blur(function (e) {
        e.preventDefault();
        if ($(".username").val() == "") {
          $(".name-text span").html("请输入登录名");
        } else {
          $(".name-text span").html("");
        }
      });
      $(".password").blur(function (e) {
        e.preventDefault();
        if ($(".password").val() == "") {
          $(".password-text span").html("请输入密码");
        } else {
          $(".password-text span").html("");
        }
      });
      //登录
      $(".u-submit-function").on("click", function () {
        console.log("登录")
        if ($(".username").val() == "" && $(".password").val() == "") {
          $(".name-text span").html("请输入登录名");
          $(".password-text span").html("请输入密码");
          return false;
        }
        $.ajax({
          type: "post",
          url: "http://localhost/objectname/php/login.php",
          data: {
            user: $(".username").val(),
            pass: hex_sha1($(".password").val())
          }
        }).done(function (result) {
          console.log(result)
          if (result) {
            window.Location.href="index1.html";
            localStorage.setItem("username", $(".username").val());
          } else {
            $('.error-text span').html("用户名或者密码错误");
          }
        });
      });
    }
  }
  new Login().init();
})(jQuery);