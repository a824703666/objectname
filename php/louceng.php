<?php
//楼层数据接口
header('content-type:text/html;charset=utf-8');
$data=array(
    array('src'=>'1.jpg','title'=>'韩都衣舍女装-新春特卖3折封顶','discount'=>'4.1','detail'=>'全场折上2.4折起'),
    array('src'=>'2.jpg','title'=>'韩都衣舍女装-新春特卖3折封顶','discount'=>'4.1','detail'=>'全场折上2.4折起'),
    array('src'=>'3.jpg','title'=>'韩都衣舍女装-新春特卖3折封顶','discount'=>'4.1','detail'=>'全场折上2.4折起'),
    array('src'=>'4.jpg','title'=>'韩都衣舍女装-新春特卖3折封顶','discount'=>'4.1','detail'=>'全场折上2.4折起'),
    array('src'=>'5.jpg','title'=>'韩都衣舍女装-新春特卖3折封顶','discount'=>'4.1','detail'=>'全场折上2.4折起'),
    array('src'=>'6.jpg','title'=>'韩都衣舍女装-新春特卖3折封顶','discount'=>'4.1','detail'=>'全场折上2.4折起')
); 
echo json_encode($data);
