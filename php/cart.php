<?php
//购物车多个商品列表
header('content-type:text/html;charset=utf-8');
$data=array(
    array('sid'=>'0','src'=>'cart1.png','title'=>'【2020新款春季首发】连衣裙通勤小香风拼接粗花呢格纹裙子','price'=>'360','del'=>'2709','discount'=>'1.2'),
    array('sid'=>'1','src'=>'cart2.png','title'=>'【2020新款春季首发】连衣裙通勤小香风拼接粗花呢格纹裙子','price'=>'360','del'=>'2709','discount'=>'1.2'),
    array('sid'=>'2','src'=>'cart3.png','title'=>'【2020新款春季首发】连衣裙通勤小香风拼接粗花呢格纹裙子','price'=>'360','del'=>'2709','discount'=>'1.2'),
    array('sid'=>'3','src'=>'cart4.png','title'=>'【2020新款春季首发】连衣裙通勤小香风拼接粗花呢格纹裙子','price'=>'360','del'=>'2709','discount'=>'1.2'),
    array('sid'=>'4','src'=>'cart5.png','title'=>'【2020新款春季首发】连衣裙通勤小香风拼接粗花呢格纹裙子','price'=>'360','del'=>'2709','discount'=>'1.2'),
    array('sid'=>'5','src'=>'cart6.png','title'=>'【2020新款春季首发】连衣裙通勤小香风拼接粗花呢格纹裙子','price'=>'360','del'=>'2709','discount'=>'1.2'),
    array('sid'=>'6','src'=>'cart7.png','title'=>'【2020新款春季首发】连衣裙通勤小香风拼接粗花呢格纹裙子','price'=>'360','del'=>'2709','discount'=>'1.2'),
    array('sid'=>'7','src'=>'cart8.png','title'=>'【2020新款春季首发】连衣裙通勤小香风拼接粗花呢格纹裙子','price'=>'360','del'=>'2709','discount'=>'1.2'),
    array('sid'=>'8','src'=>'cart9.png','title'=>'【2020新款春季首发】连衣裙通勤小香风拼接粗花呢格纹裙子','price'=>'360','del'=>'2709','discount'=>'1.2'),
    array('sid'=>'9','src'=>'cart10.png','title'=>'【2020新款春季首发】连衣裙通勤小香风拼接粗花呢格纹裙子','price'=>'360','del'=>'2709','discount'=>'1.2'),
    array('sid'=>'10','src'=>'cart11.png','title'=>'【2020新款春季首发】连衣裙通勤小香风拼接粗花呢格纹裙子','price'=>'360','del'=>'2709','discount'=>'1.2'),
    array('sid'=>'11','src'=>'cart12.png','title'=>'【2020新款春季首发】连衣裙通勤小香风拼接粗花呢格纹裙子','price'=>'360','del'=>'2709','discount'=>'1.2')
); 
echo json_encode($data);