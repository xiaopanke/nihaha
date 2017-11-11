import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CommentInput from './CommentInput'
import CommentList from './CommentList'
export default class CommentApp extends React.Component{
  constructor(){
    super();
    this.state={
      comments:[
        {id:1,username:'张三',content:'你好啊',createAt:new Date()},
        {id:2,username:'李',content:'你好啊',createAt:new Date()},
        {id:3,username:'张三',content:'你好啊',createAt:new Date()},
      ]
    }
  }
  addComment=(comment) => {
    comment.id= Date.now();
    comment.createAt=new Date();
    this.setState({
      comments:[...this.state.comments,comment]
    })
  }
  delComment=(id) => {
    let comments=this.state.comments.filter((item)=>item.id!==id)
    this.setState({
      comments
    })
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
                <CommentList comments={this.state.comments} delComment={this.delComment} />
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
