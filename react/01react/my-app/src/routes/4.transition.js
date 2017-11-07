import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group'


/*
  在一个组件进入或离开的时候添加一系列的类名
  比如在进行的时候example-enter example-enter-active
*/

class Todos extends Component{
  constructor(){
    super();
    this.state={
      todos:['a','b']
    }
  }
  addtodo=(event) => {
    let keyCode=event.keyCode;
    if(keyCode==13){
      let text=event.target.value;
      this.setState({
        todos:[...this.state.todos,text]
      })
      event.target.value=''
    }
  }
  render(){
    return(
      <div>
        <input type="text"  onKeyDown={this.addtodo} />

          <CSSTransition className='fade' timeout={500}>
            <ul>
              {
                this.state.todos.map((item,index) => (
                  <li key={index}>{item}</li>
                ))
              }
              </ul>
          </CSSTransition>

      </div>
    )
  }
}

ReactDOM.render(
    <Todos />
    ,document.querySelector('#root')
);
