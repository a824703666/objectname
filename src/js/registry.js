(function ($) {
    class Registry {
        constructor() {
             this.$user = $('input[name="username"]'); //用户名
             this.$password = $('input[name="password"]'); //密码
             this.$againPassword = $('.again-password'); //再次输入密码
             this.$userflag = true;
        }
        init() {
            this.$user.on('blur',()=> {
                if (this.$user.val() == '') {
                    $('.username-text').html('账号/邮箱不能为空');
                } else {
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost/objectname/php/registry.php',
                        data: {
                            username: this.$user.val()
                        }
                    }).done((result)=> {
                        if (!result) {
                            this.$userflag = true;
                            $('.username-text').html('');
                        } else {
                            $('.username-text').html('该用户名已经存在');
                            this.$userflag = false;
                        }
                    });
                }
            });
            this.$password.on('blur',()=> {
                if (this.$password.val() == '') {
                    $('.password-text').html('密码不能为空');
                } else {
                    $('.password-text').html('');
                }
            });
            this.$againPassword.on('blur',()=> {
                if (this.$againPassword.val() != this.$password.val()) {
                    $('.again-password-text').html('两次密码输入不一致');
                } else if (this.$againPassword.val() == '') {
                    $('.again-password-text').html('请再次输入上面的密码');
                } else {
                    $('.again-password-text').html('');
                }
            });
            $('form').on('submit',()=> {                
                if (this.$user.val() == '') {
                    $('.username-text').html('账号/邮箱不能为空');
                    this.$userflag = false;
                };
                if (this.$password.val() == '') {
                    $('.password-text').html('密码不能为空');
                    this.$userflag = false;
                };
                if (this.$againPassword.val() == '') {
                    $('.again-password-text').html('两次密码输入不一致');
                    this.$userflag = false;
                };
                if (!this.$userflag) {
                    return false;
                }
            });
        }

    }
    new Registry().init();

})(jQuery);