<?php

include "loginconn.php";
//--------登录接口-------

//接口地址http://localhost/objectname/php/login.php

if(isset($_POST['user']) && isset($_POST['pass'])){
    $user=$_POST['user'];
    $pass=$_POST['pass'];

    $result=$conn->query("select * from usertable where username='$user' and password='$pass' ");

    if($result->fetch_assoc()){//匹配
        echo true;
    }else{//不匹配
        echo false;
    }

}
?>