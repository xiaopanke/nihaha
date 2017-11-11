import React from 'react';
export default class CommentApp extends React.Component{
  haha=(event) => {
    event.preventDefault()
    let username=this.username.value;//获取用户名
    let content=this.content.value;//获取内容
    this.props.addComment({username,content});
    this.content.value=''
  }
  hahaBlur=(event) => {
    let username=event.target.value;
    localStorage.setItem('username',username)
  }
  componentDidMount(){
    let username=localStorage.getItem('username') || '';
    this.username.value=username;
  }
  render(){
    return (
      <form onSubmit={this.haha} className="form-horizontal">
        <div className="form-group">
          <label htmlFor="username" className="control-label col-md-3">用户名</label>
          <div className="col-md-9">
            <input type="text" onBlur={this.hahaBlur} className="form-control" ref={(input)=>this.username=input} required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="content" className="control-label col-md-3">内容</label>
          <div className="col-md-9">
            <textarea autoFocus className="form-control" ref={(input)=>this.content=input} required></textarea>
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-offset-4">
            <input type="submit" className="btn btn-primary" value="发言" required />
          </div>
        </div>
      </form>
    )
  }
}
