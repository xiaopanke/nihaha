import React from 'react';
import ReactDOM from 'react-dom';

/*
function Welcome(props) {
  return <h1>{props.name}</h1>
}
*/

//一个普通的类只要继承了React组件类，就成为一个自定义组件
class Welcome extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <h1>{this.props.name}</h1>
  }
}
//一个组件可以像React元素标签一样使用
//{name:'panke',age:'17'}
//渲染函数式组件的时候，会先把传入组件的属性包装成一个对象，传入组件函数，返回一个React元素,然后把返回的React元素渲染到页面上
//组件首字母大写
ReactDOM.render(
  <Welcome name='panke' age='17' />,
  document.querySelector('#root')
)
