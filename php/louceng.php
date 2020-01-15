<?php
//楼层数据接口
header('content-type:text/html;charset=utf-8');
$data=array(
    array('src'=>'1.png','title'=>'韩都衣舍女装-新春特卖3折封顶','discount'=>'4.1','detail'=>'全场折上2.4折起'),
    array('src'=>'2.png','title'=>'韩都衣舍女装-新春特卖3折封顶','discount'=>'4.1','detail'=>'全场折上2.4折起'),
    array('src'=>'3.png','title'=>'韩都衣舍女装-新春特卖3折封顶','discount'=>'4.1','detail'=>'全场折上2.4折起'),
    array('src'=>'4.png','title'=>'韩都衣舍女装-新春特卖3折封顶','discount'=>'4.1','detail'=>'全场折上2.4折起'),
    array('src'=>'5.png','title'=>'韩都衣舍女装-新春特卖3折封顶','discount'=>'4.1','detail'=>'全场折上2.4折起'),
    array('src'=>'6.png','title'=>'韩都衣舍女装-新春特卖3折封顶','discount'=>'4.1','detail'=>'全场折上2.4折起')
); 
echo json_encode($data);
