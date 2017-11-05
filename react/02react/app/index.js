import React,{Component} from 'react' ;
import ReactDom,{render} from 'react-dom';
import Slider from './components/Slider.js'
import  './components/Slider.less'

let IMAGES=['http://g.hiphotos.baidu.com/image/w%3D500/sign=9441ccaeba7eca80120539e7a1229712/a6efce1b9d16fdfa8901ac63be8f8c5495ee7bc9.jpg','https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/w%3D500/sign=d2764c851530e924cfa49c317c096e66/0df3d7ca7bcb0a462761dab46163f6246a60aff8.jpg','https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/w%3D500/sign=94d6cad3d7c451daf6f60ceb86fc52a5/b64543a98226cffc9114ed3fb3014a90f603ea05.jpg'];

/*
auto 自动轮播
speed 每次切换图片动画持续的时间
delay  每次轮播的时间间隔
arrow 是否显示箭头导航
dots 是否显示点状导航
pause 是否当鼠标移动到轮播图上暂停轮播，移开之后继续轮播
*/
render(<Slider images={IMAGES} auto={true} speed={1} delay={2} arrow={true} dots={true} pause={true} />,document.querySelector('#root'))
