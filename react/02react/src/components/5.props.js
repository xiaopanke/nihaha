import React,{Component} from 'react' ;
import ReactDom,{render} from 'react-dom';
import PropTypes from 'prop-types'


class LikeButton extends Component{
  constructor(){
    super();//调用父类构造函数，是用来继承父类的私有属性
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
        <button onClick={this.handleClick}>{this.state.isLiked ? this.props.unLikeText : this.props.likeText}</button>
    )
  }
}
//默认属性对象
LikeButton.defaultProps={
  likeText:'点赞',
  unLikeText:'取消'
}
//验证组件参数的合法性和有效性 ,用来检查属性的名称和类型的
LikeButton.propTypes={
  likeText:PropTypes.string.isRequired, //要求是必填的
  unLikeText:PropTypes.string,

}
/*
1.先把传入这个组件的属性封装成一个对象{likeText:'赞',unLikeText:'已赞'}
2.先创建一个LikeButton的实例，创建的时候要把属性对象会给构造函数

*/
render(<LikeButton  unLikeText="已赞" />,document.querySelector('#root'))
