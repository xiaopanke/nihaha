import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import {connect} from 'react-redux';
import actions from '../store/actions'
//mapStateToProps 把仓库中的状态树映射为属性对象，负责输入，把仓库中的状态取再来给组件渲染使用
//mapDispatchToProps 把仓库的dispath方法映射为属性对象，负责输出，把组件里用户操作发射到仓库中去

//@connect(mapStateToProps,mapDispatchToProps)
@connect(
  state=>state,
  actions
)
export default  class CommentApp extends React.Component{
  constructor(){
    super();
  }
  addComment=(comment) => {
    comment.id= Date.now();
    comment.createAt=new Date();
    // this.setState({
    //   comments:[...this.state.comments,comment]
    // })
    this.props.addComment(comment)
  }
  delComment=(id) => {
    let comments=this.props.comments.filter((item)=>item.id!==id)
    // this.setState({
    //   comments
    // })
    this.props.delComment(id)
  }
  render(){
    return (
      <div className="container" style={{marginTop:'30px'}}>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="text-center">盼珂留言板</h3>
              </div>
              <div className="panel-body">
                <CommentList comments={this.props.comments} delComment={this.delComment} />
              </div>
              <div className="panel-footer">
                <CommentInput addComment={this.addComment} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
