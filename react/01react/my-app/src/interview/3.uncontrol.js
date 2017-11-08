import React,{Component} from 'react';
export default class Form extends Component{

  haha=(event) => {
    event.preventDefault();
    let username=this.username.value;
    let password=this.password.value;
    console.log({username,password})

  }
  render(){
    return(
      <form onSubmit={this.haha}>
        用户名：<input type="text" ref={input=>this.username=input} /><br />
        密码：<input type="password" ref={input=>this.password=input}  /><br />
        <input type="submit" /><br />
      </form>
    )
  }
}
