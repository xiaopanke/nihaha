import React,{Component} from 'react';
export default function (props) {
    return <button className="btn btn-primary" onClick={
      () => {
        localStorage.setItem('login',true);
        props.history.push(props.location.state.from)
      }
    }>登陆</button>
}
