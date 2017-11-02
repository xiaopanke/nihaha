import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//非受控组件  非受控元素 不受组件控制
class Sum extends Component{
  changefn=(event) => {
    let a=parseInt(this.refs.a.value) || 0
    let b=parseInt(this.refs.b.value) || 0;
    this.refs.s.value=a+b
  }
  render(){
    return(
      <div  onChange={this.changefn} >
        <input type="text" ref="a"/>+
        <input type="text" ref="b" />=
        <input type="text" ref="s"  />
      </div>
    )
  }
}


ReactDOM.render(
  <Sum  />,
  document.querySelector('#root')
)
