import React,{Component} from 'react';
import ReactDOM from 'react-dom'

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
    console.log('组件将要挂载到页面上');
  }
  haha=() => {
    this.setState({
      number:this.state.number+1
    })
  }
  render(){
    console.log('组件的挂载');
    return(
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.haha}> +</button>
      </div>
    )
  }
  //组件挂载完成 如果你要进行DOM操作的话，必须在这里进行
  componentDidMount(){
    console.log('组件挂载完成');
  }
  //组件是否需要更新
  //newProps新的属性对象 ，newState 新的状态对象
  shouldComponentUpdate(newProps,newState){
    console.log('组件是否需要更新');
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
    console.log('组件将要更新');
  }
}

ReactDOM.render(<Counter />,document.querySelector('#root'))
