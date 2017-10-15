/**
 * Created by Administrator on 2017/9/28.
 */
/*let arr=['haha','xixi','xixi','gaga','2','1','13']
let newarr=[];


console.log(arr.lastIndexOf('xixi'))
console.log(arr.indexOf('xixi'))


newarr=arr.map((item)=>(item+'a'))

arr.forEach(function (item,index) {
    console.log(item)
    console.log(index)
})

console.log(arr)
console.log(newarr)

let arr=[false,true,false,false,true]
let newarr=[];
newarr=arr.filter((item)=>(!item))
console.log(newarr)



let arr=[1,1,2,3,4]
let newarr=[];
newarr=arr.filter((item)=>(item!=1))
console.log(newarr)


let arr=[1,1,2,3,4]
console.log(arr.includes(8))


let arr=[1,2,3,4]
console.log(arr.some((item)=>(item==10)))



let arr=[1,2,3,4]
console.log(arr.every((item)=>(item<10)))


let arr=[1,2,3,4,5,6]
console.log(arr.reduce((prev,next)=>(prev+next)))


let arr=[{name:1,num:10},{name:2,num:30},{name:5,num:2}]
console.log(arr.reduce((prev,next)=>(prev+next.name*next.num),0))


let arr=[{name:1,num:10},{name:2,num:30},{name:5,num:2}]
console.log(arr.reduce((prev,next)=>(prev+next.num),0))



let newFunc = (a,...rest)=>{ //剩余运算符
    console.log(a)
    console.log(...rest) ;// 展开运算符
};
newFunc(1,2,3);


function a(n){
    return function b(m){
        return function c(p) {
            return n+m+p;
        }
    }
}

console.log(a(1)(2)(3))


function a(n){
    return function (m){
        return function (p) {
            return n+m+p;
        }
    }
}

console.log(a(1)(2)(3))

a=(n)=>(m)=> {
    return function (p) {
        return n + m + p;
    }
}


console.log(a(1)(2)(3))
 */

a=(n)=>(m)=> (p)=>(n + m + p)  //高阶函数


console.log(a(1)(2)(3))

