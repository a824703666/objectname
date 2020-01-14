<?php

include "vipconn.php";

//---------渲染shopList.html数据接口

//接口地址 http://localhost/objectname/php/vipcart.php

//输出接口
$arr=array();
$result=$conn->query("select * from vipcart");
for($i=0;$i<$result->num_rows;$i++){
    $arr[$i]=$result->fetch_assoc();
}
echo json_encode($arr);
?>