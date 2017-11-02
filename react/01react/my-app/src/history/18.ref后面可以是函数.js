import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//非受控组件  非受控元素 不受组件控制
class Sum extends Component{
  changefn=(event) => {
    let a=parseInt(this.a.value) || 0
    let b=parseInt(this.b.value) || 0;
    this.s.value=a+b
  }
  //ref 可以是字符串，也可以是一个函数
  render(){
    return(
      <div  onChange={this.changefn} >
        <input type="text" ref={ref=>this.a=ref}/>+
        <input type="text" ref={ref=>this.b=ref} />=
        <input type="text" ref={ref=>this.s=ref}  />
      </div>
    )
  }
}


ReactDOM.render(
  <Sum  />,
  document.querySelector('#root')
)
