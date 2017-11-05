import React,{Component} from 'react' ;
import ReactDom,{render} from 'react-dom';

class LikeButton extends Component{
  constructor(){
    super();
    this.state={isLiked:false}
  }
  handleClick=() => {
    //setState有两层含义，1 是把新的状态对象合并到老的状态对象上  2  重新执行render方法返回新的React元素，把这个新的元素渲染到页面上
    //setState 是异步方法  会合并执行 是批量
    console.log(this.state.isLiked);
    this.setState({isLiked:!this.state.isLiked})
    this.setState({isLiked:!this.state.isLiked})
    this.setState({isLiked:!this.state.isLiked})
    //因为setState 是异步的，所以有回调函数，当更改完状态后会执行这个回调函数
    this.setState({isLiked:!this.state.isLiked},() => {
        console.log(this.state.isLiked+'回调');
    })
    console.log(this.state.isLiked);
  }
  render(){
    console.log('render');
    return(
        <button onClick={this.handleClick}>{this.state.isLiked ? '取消' : '点赞'}</button>
    )
  }
}

render(<LikeButton />,document.querySelector('#root'))
