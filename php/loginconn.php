<?php
header('content-type:text/html;charset=utf-8');
//----------------连接数据库接口----------------

//接口地址http://localhost/objectname/php/loginconn.php

define('HOST','localhost');
define('USERNAME','root');
define('PASSWORD','');
define('DBNAME','zhuce');
$conn=@new mysqli(HOST,USERNAME,PASSWORD,DBNAME);
//@符号：容错上面的错误，下面自定义了报错信息
if($conn->connect_error){
    //die函数：输出括号里面的内容，并退出。
    die('数据库连接失败:'.$conn->connect_error);
}
?>