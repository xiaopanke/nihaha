import React,{Component} from 'react';
export default class Form extends Component{

  haha=(event) => {
    event.preventDefault();
    let username=this.refs.username.value;
    let password=this.refs.password.value;
    console.log({username,password})

  }
  render(){
    return(
      <form onSubmit={this.haha}>
        用户名：<input type="text" ref="username" /><br />
        密码：<input type="password" ref="password" /><br />
        <input type="submit" /><br />
      </form>
    )
  }
}
