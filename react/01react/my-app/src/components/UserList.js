import React,{Component} from 'react';
import {Link} from 'react-router-dom'
export default class UserList extends Component{
  constructor(){
    super();
    this.state={
      users:[]
    }
  }
  componentWillMount(){
    let userstr=localStorage.getItem('users');
    let users=userstr ? JSON.parse(userstr) :[];
    this.setState({users})
  }
  render(){
    return(
      <ul className='list-group'>
        {
          this.state.users.map((item,index) =>
              <li className='list-group-item' key={index}>
                <Link to={'/user/detail/'+item.id}>{item.name}</Link>
              </li>
          )
        }

      </ul>
    )
  }
}
