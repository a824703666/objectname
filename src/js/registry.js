! function ($) {
    let $user = $('input[name="username"]'); //用户名
    let $password = $('input[name="password"]'); //密码
    let $againPassword = $('.again-password'); //再次输入密码
    let $userflag = true;
    $user.on('blur', function () {
        if ($user.val() == '') {
            $('.username-text').html('账号/邮箱不能为空');
        }else{
            $.ajax({
                type: 'post',
                url: 'http://localhost/objectname/php/login.php',
                data: {
                    username: $user.val()
                }
            }).done(function (result) {
                if (!result) { 
                    $userflag = true;
                    $('.username-text').html('');
                } else {
                    $('.username-text').html('该用户名已经存在');
                    $userflag = false;
                }
            });
        }
    });
    $password.on('blur', function () {
        if ($password.val() == '') {
            $('.password-text').html('密码不能为空');
        }else{
            $('.password-text').html('');
        }
    });
    $againPassword.on('blur', function () {
        if ($againPassword.val() != $password.val()) {
            $('.again-password-text').html('两次密码输入不一致');
        } else if ($againPassword.val()=='') {
             $('.again-password-text').html('请再次输入上面的密码');
        }else{
            $('.again-password-text').html('');
        }
    });
    $('form').on('submit', function () {
        if ($user.val() == '') {
            $('.username-text').html('账号/邮箱不能为空');
            $userflag = false;
        };
        if ($password.val() == '') {
             $('.password-text').html('密码不能为空');
            $userflag = false;
        };
        if ($againPassword.val() == '') {
           $('.again-password-text').html('两次密码输入不一致');
            $userflag = false;
        };
        if (!$userflag) {
            return false;
        }
    });
}(jQuery);