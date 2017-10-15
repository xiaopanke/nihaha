
let Sum=(...args)=>{
    return args.reduce((prev,next)=>(prev+next))
}

//exports.sum=Sum;
//module.exports=Sum;
global.sum=Sum;
