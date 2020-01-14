<?php

include "loginconn.php";

//接口地址 http://localhost/objectname/php/login.php

//----------------注册接口---------------

if(isset($_POST['username'])){
    $user=$_POST['username'];
    //如果存在结果，注册的用户名存在。
    $result=$conn->query("select * from usertable where username='$user'");
    if($result->fetch_assoc()){//存在
        echo true;//显示1
    }else{
        echo false;//空隙
    }
}


if(isset($_POST['submit'])){
    $username=$_POST['username'];
    //后端加密
    $password=sha1($_POST['password']);
    $email=$_POST['email'];

    $conn->query("insert usertable values(null,'$username','$password','$email',NOW()) ");

    //注册完成跳转到登录页面http://localhost/objectname/src/login.html
    
    header('location:http://localhost/objectname/src/login.html');//php页面的跳转。
}  
?>