import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Avatar(props) {
  return(
    <img className="Avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
    />
  )
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar author={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
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
