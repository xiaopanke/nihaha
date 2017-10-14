/*放在对象里导出了
    {
        str:'',
        b:function(){}
    }
*/
export let str='我很漂亮'

export function b(){
    console.log('这是b函数');
}

export let c=[1,2,3,4,5].map(s=>s+1)
export let d=()=>{console.log('dddd')}