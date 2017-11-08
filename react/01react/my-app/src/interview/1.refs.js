import React,{Component} from 'react';
export default class Form extends Component{
  constructor(){
    super();
    this.state={
      username:'',
      password:''
    }
  }
  haha=(event) => {
    event.preventDefault();
    console.log(this.state);
  }
  render(){
    return(
      <form onSubmit={this.haha}>
        用户名：<input type="text" value={this.state.username} onChange={(event) => this.setState({username:event.target.value})} /><br />
        密码：<input type="password" value={this.state.password}  onChange={(event) => this.setState({password:event.target.value})} /><br />
        <input type="submit" /><br />
      </form>
    )
  }
}
