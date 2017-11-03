import React,{Component} from 'react';
import {Prompt} from 'react-router-dom'
export default class UserAdd extends Component{
  constructor(){
    super();
    this.state={
      blocking:false
    }
  }
  handleSubmit=(event) => {
    let name=this.name.value;
    let userstr=localStorage.getItem('users');
    let users=userstr ? JSON.parse(userstr) : [];
    users.push({
      id:Date.now(),
      name
    })
    localStorage.setItem('users',JSON.stringify(users))
    this.setState({
        blocking:false
    },() => {
        this.props.history.push('/user/list');
    })

  }
  handleChange=(event) => {
    this.setState({
        blocking:event.target.value && event.target.value.length>0
    })
  }
  render(){
    return(
      <div>
        <Prompt
          when={this.state.blocking}
          message={(location) => (`你确定你要跳转到${location.pathname}吗`)}
         />
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor="name">姓名</label>
            <input type="text" onChange={this.handleChange} className="form-control" ref={ref=>this.name=ref} />
          </div>
          <div className='form-group'>
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
