import React from 'react';
import Comment from './Comment';
export default class CommentList extends React.Component{
  componentDidMount(){
    setInterval(() => {
      console.log('setInterval');
      this.setState({})
    },1000)
  }
  render(){
    return(
      <ul className="list-group">
          {
            this.props.comments.map((item,index) =>(
              <Comment key={index} key2={index} comment={item} delComment={this.props.delComment} />
            ))
        }
      </ul>
    )
  }
}
