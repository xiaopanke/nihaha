import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Avatar(props) {
  return(
    <img className="Avatar"
      src={props.avatarUrl}
      alt={props.name}
    />
  )
}
function UserInfo(props){
  return(
    <div className="UserInfo">
      <Avatar {...props.author} />
      <div className="UserInfo-name">
        {props.author.name}
      </div>
    </div>
  )
}
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo author={props.author} />
      <div className="Comment-info">
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {props.date.toLocaleString()}
        </div>
      </div>
    </div>
  );
}
let props={
  author:{
    name:'panke',
    avatarUrl:'https://www.baidu.com/img/wanshengdoodle_677234cad70a5974a64e4665c6485c71.gif'
  },
  text:'今天天气不错',
  date:new Date()
}
ReactDOM.render(
  <Comment {...props} />,
  document.querySelector('#root')
)
