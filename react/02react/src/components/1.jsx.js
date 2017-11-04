import React,{Component} from 'react' ;
import ReactDom from 'react-dom';

class Header extends Component{
  //用来表示在界面上这个组件应该长成什么样子
  render(){
    return(
        <h1>hello</h1>
    )
  }
}

ReactDom.render(<Header />,document.querySelector('#root'))
