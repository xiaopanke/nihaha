
//import有声明的功能
/*
import {b,str,c,d} from './a.js'
console.log(str)
b();
console.log(c);
d()


import  * as panke from './a.js'

console.log(panke)

panke.b();

 */
//必须在有域名的情况下才能成功
import b from './b.js'
console.log(b.name,b.age);
