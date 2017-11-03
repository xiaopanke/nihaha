import React,{Component} from 'react';
export default class UserDetail extends Component{
  render(){
    let userstr=localStorage.getItem('users');
    let users=userstr ? JSON.parse(userstr) :[];
    let user=users.find((item) => item.id==this.props.match.params.id)
    return(

      <div>{this.props.match.params.id} {user.name}</div>
    )
  }
}
