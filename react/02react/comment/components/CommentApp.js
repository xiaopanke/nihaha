import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CommentInput from './CommentInput'
import CommentList from './CommentList'
export default class CommentApp extends React.Component{
  render(){
    return (
      <div className="container" style={{marginTop:'30px'}}>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
              <div className="panel-heading">
                <h3 className="text-center">盼珂留言板</h3>
              </div>
              <div className="panel-body">
                <CommentList />
              </div>
              <div className="panel-footer">
                <CommentInput />
              </div>


          </div>

        </div>
      </div>
    )
  }
}
