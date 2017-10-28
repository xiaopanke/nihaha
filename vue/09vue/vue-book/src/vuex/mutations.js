import * as Types from './mutation-types'
export default{ //[]会将里面的内容作为变量
	[Types.ADD_COLLECT](state,book){ //{id:,book:}
		//判断当前state中的collects中是否包含id和我要添加的id相同的如果 有则取消push
		let flag =state.collects.some((a)=>a.id==book.id)
		if(flag)return;
		if(!flag)state.collects.push(book)
    localStorage.setItem('c',JSON.stringify(state.collects))
	},
	[Types.REMOVE_COLLECT](state,book){ //删除
		state.collects=state.collects.filter(a=>(a.id!==book.id))
    localStorage.setItem('c',JSON.stringify(state.collects))
	}
}
