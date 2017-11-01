import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      n:2,
      counts:0
    };
  }
  render(){
    return (
      <div>
        <p>{this.state.counts}</p>
        <button onClick={this.add.bind(this,2)}>+{this.state.n}</button>
        <button onClick={this.reduce}>-{this.state.n}</button>
      </div>
    )
  }
  add=(b)=>{
    this.setState({
      counts:this.state.counts+=(b*this.state.n)
    })
  }
  reduce=()=>{
    this.setState({
      counts:this.state.counts-=this.state.n
    })
  }
}

ReactDOM.render(
  <Counter  />,
  document.querySelector('#root')
)
