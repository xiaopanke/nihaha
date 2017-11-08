import React,{Component} from 'react';
import ReactDOM from 'react-dom'

class SubCounter extends Component{
  //组件将要接收到新的属性
  //当父组件重新渲染的时候，重新render的时候会传入新的属性
  componentWillReceiveProps(){
    console.log('组件将要接收到新的属性componentWillReceiveProps');
  }
  shouldComponentUpdate(newProps,newState){
    if(newProps.number<15){
      return true;
    }else{
      return false;
    }
  }
  componentWillUnmount(){
    console.log('组件将要卸载componentWillUnmount');
  }
  render(){
    return(
      <div>
        <p>{this.props.number}</p>
      </div>
    )
  }
}

class Counter extends Component{
  //默认属性
  static defaultProps={
    name:'panke'
  }
  constructor(){
    super();
    //默认状态
    this.state={
      number:0
    }
  }
  //组件将要挂载到页面上
  componentWillMount(){
    console.log('组件将要挂载到页面上componentWillMount');
  }
  haha=() => {
    this.setState({
      number:this.state.number+1
    })
  }
  render(){
    console.log('组件的挂载render');
    return(
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.haha}> +</button>
        <hr />
        {
          this.state.number <10 ?  <SubCounter number={this.state.number} /> : null
        }

      </div>
    )
  }
  //组件挂载完成 如果你要进行DOM操作的话，必须在这里进行
  componentDidMount(){
    console.log('组件挂载完成componentDidMount');
  }
  //组件是否需要更新
  //newProps新的属性对象 ，newState 新的状态对象
  shouldComponentUpdate(newProps,newState){
    console.log('组件是否需要更新shouldComponentUpdate');
    //return true; //组件需要更新
    //return false; //组件不需要更新
    if(newState.number%5==0){
      return true;
    }else{
      return false;
    }
  }
  //组件将要更新
  componentWillUpdate(){
    console.log('组件将要更新componentWillUpdate');
  }
  //组件更新完成
  componentDidUpdate(){
    console.log('组件更新完成componentDidUpdate');
  }
}

ReactDOM.render(<Counter />,document.querySelector('#root'))
