import React from 'react';
import ReactDOM from 'react-dom';

class ActionLink extends React.Component{
  render(){
    return(
      <div>
        <a href="" onClick={this.handleClick}>点我</a>
      </div>
    )
  }
  handleClick=(event) => {
    event.preventDefault()
    console.log('click me');
  }
}

class Toggle extends React.Component{
  constructor(){
    super();
    this.state={
      on:true
    }
  }
  render(){
    return (
      <button onClick={this.toggleClick.bind(this)}>{this.state.on ? '开' : '关'}</button>
    )
  }
  /* 解决this指向问题
    1.箭头函数
    2.bind
    3.直接在构造函数中绑定 this.toggleClick=this.toggleClick.bind(this)
  */
  toggleClick(){
    this.setState({
      on:!this.state.on
    })
  }
}

ReactDOM.render(
  <Toggle  />,
  document.querySelector('#root')
)
