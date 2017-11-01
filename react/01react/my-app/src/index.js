import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  //组件将要挂载
  componentWillMount(){
      console.log(1,`组件将要挂载`)
  }
  //表示向当前的组件实例上添加一个属性，这样定义的函数无论在何时何地执行，里面的this永远是当前组件的实例
  tick=()=>{
    //setState方法可以用来修改状态，是从父类继承过来的
    //永远只能用setState方法来修改状态，因为一旦调用了setState方法，不但可以修改状态对象，还会自动重新调用render方法修改界面 的显示效果
    console.log(123);
    this.setState({
      date:new Date()
    })
    // function setState(state) {
    //   this.state=Object.assign({},this.state,state)
    //   this.render();
    // }
  }
  //组件挂载完成后
  componentDidMount(){
    console.log(3,`组件挂载完成后`)
    //在组件挂载完成后，开启了一个定时器
    this.timerID=setInterval(this.tick,1000)
  }
  //组件将要卸载
  componentWillUnmount(){
    console.log(4,`组件将要卸载`)
    clearInterval(this.timerID)
  }
  /*
  如果一个值或属性是不需要在render中使用的话，就不需要放在state里。可以放在实例上
  */
  //不能直接写{this.state.date}因为它是一个对象 ，对象不能直接在页面上使用
  render(){
    //挂载是用render挂载
    console.log(2,`挂载是用render挂载`)
    return (
      <div>
        <h1>panke</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <Clock  />,
  document.querySelector('#root')
)
