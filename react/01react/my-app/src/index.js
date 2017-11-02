import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Panel extends Component{
  render(){
    return(
      <div style={{border:'1px solid red'}}>
        {this.props.children}
      </div>
    )
  }
}
//{this.props.children} 子元素
ReactDOM.render(
  <Panel>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </Panel>,
  document.querySelector('#root')
)
