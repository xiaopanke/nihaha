import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Child extends Component{
  componentWillUpdate(){
    
  }
  render(){
    return (
      <div>
        <input type="text" value={this.props.val} onChange={(event) => {
          this.props.haha(event.target.value)
        }} />
      </div>
    )
  }
}
class Parent extends Component{
  constructor(){
    super();
    this.state={
      val:''
    }
  }
  haha=(val) => {
    this.setState({
      val
    })
  }
  render(){
    return (
        <div>
            <Child val={this.state.val} haha={this.haha} />
            <Child val={this.state.val} haha={this.haha} />
            <Child val={this.state.val} haha={this.haha} />
        </div>
    )
  }
}
ReactDOM.render(<Parent />,document.querySelector('#root'))
