import React from 'react';
import ReactDOM from 'react-dom';

function MyNumber(props) {
    return <div>{props.number}</div>
}
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
        <MyNumber number={this.state.counts} />
        {this.state.counts}
        <button onClick={this.add}>+{this.state.n}</button>
        <button onClick={this.reduce}>-{this.state.n}</button>
      </div>
    )
  }
  add=()=>{
    this.setState({
      counts:this.state.counts+=this.state.n
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
