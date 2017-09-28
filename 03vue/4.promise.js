/*
function buypack() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           if(Math.random()>0.5){
               resolve('买')
           }else{
               reject('不买')
           }
        },Math.random()*10000)
    })
}

buypack().then((data)=>{console.log(data)},(err)=>{console.log(err)})
*/

function  buyback() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.5){
                resolve('买')
            }else{
                reject('不买')
            }
        },Math.random()*10000)
    })
}
buyback().then((res)=>{console.log(res)},(err)=>{console.log(err)})