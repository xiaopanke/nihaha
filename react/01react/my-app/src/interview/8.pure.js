import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//如果不重写SCU的话，一直返回true  ->比较前后的差异

class App extends React.PureComponent{
  constructor(){
    super();
    this.state={
      todos:[],
      a:2
    }
  }
  shouldComponentUpdate(newProps,newState){

    if(newState==this.state){
      return false;
    }else{
      return true
    }
  }
  haha=() => {
    this.state.todos.push(1)
    this.setState({
      todos:this.state.todos
    })
  }
  render(){
    console.log('render');
    console.log(this.state);
    return (
      <div>
        <p>{this.state.todos.length}</p>
        <button onClick={this.haha}>按钮</button>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.querySelector('#root'))
