import React from 'react';
export default class CommentApp extends React.Commponent{
  render(){
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="username" className="control-label col-md-3">用户名</label>
          <div className="col-md-3">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="content" className="control-label col-md-3">内容</label>
          <div className="col-md-3">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <div>
            <input type="submit" className="btn btn-primary" />
          </div>
        </div>
      </form>
    )
  }
}
