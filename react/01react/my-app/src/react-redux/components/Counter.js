import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as types from '../store/action-types';
import actions from '../store/actions'
class Counter extends Component{
  render(){
    return(
      <div>
        <p>{this.props.number}</p>
        <button  onClick={this.props.add}>+</button>
        <button  onClick={this.props.sub}>-</button>
      </div>
    )
  }
}
/*
connect是一个函数，执行后又返回一个函数
此方法其实是在做链接和映射，是把仓库和组件连接在一起
第一次执行需要传两个参数
(mapStateToProps)把仓库的状态对象映射为当前组件的属性
把仓库的状态输入组件，让组件可以读取仓库的状态进行渲染
(mapDispatchToProps) 把仓库的dispatch方法映射为当前组件的属性
*/
//参数是仓库中的合并后的状态对象，返回值 是一个对象，它会成为当前组件的属性对象
let mapStateToProps = state => state.counter
// let mapDispatchToProps = dispatch => ({
//     add:()=>dispatch({type:types.ADD}),
//     sub:()=>dispatch({type:types.SUB})
// })
//export default connect(mapStateToProps,mapDispatchToProps)(Counter)
export default connect(mapStateToProps,actions)(Counter)
