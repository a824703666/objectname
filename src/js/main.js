import "jquery";

// import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
//引入页面的css

import '../stylesheets/cartlist.css';
import '../stylesheets/compass-reset.css';
import '../stylesheets/details.css';
import '../stylesheets/index.css';
import '../stylesheets/login.css';
import '../stylesheets/shopList.css';


import { //加载模块
    Index
} from './index.js';
if($('script').attr('id')==='index1'){
    new Index().init();
}


import { //加载模块
    Louceng
} from './louceng.js'; //index1
if($('script').attr('id')==='index1'){
    new Louceng().init();
}

import { //加载模块
    Cartlist
} from './cartList.js';
if($('script').attr('id')==='cartlist'){
    new Cartlist().init();
}


import { //加载模块
    Details
} from './details.js';
 //details
if($('script').attr('id')==='details'){
    new Details().init();
}

import { //加载模块
    Login
} from './login.js'; //login
if($('script').attr('id')==='login'){
    new Login().init();
}

import { //加载模块
    Registry
} from './registry.js';
  //registry
if($('script').attr('id')==='registry'){
    new Registry().init();
}

import { //加载模块
    Scale
} from './scale.js';
if($('script').attr('id')==='details'){
    new Scale().init();
}

import { //加载模块
    ShopList
} from './shopList.js';
  //shopList
if($('script').attr('id')==='shopList'){
    new ShopList().init();
}