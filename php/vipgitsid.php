<?php

//获取对应的sid

//接口地址http://localhost/objectname/php/vipgitsid.php
include "vipconn.php";
if(isset($_GET['sid'])){
    $sid=$_GET['sid'];
    $result=$conn->query("select * from vipcart where sid=$sid");
    echo json_encode($result->fetch_assoc());
}else{
    exit('非法操作');
}
?>