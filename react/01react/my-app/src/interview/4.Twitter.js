import React,{Component} from 'react';
import ReactDOM from 'react-dom'
function fetchUser(username) {
  return new Promise((reslove,reject) => {
    setTimeout(() => {
      reslove({username,password:'123'})
    },3000)
  })
}

class Twitter extends Component{
  constructor(){
    super()
    this.state={
      user:{}
    }
  }
  componentDidMount(){
    console.log('componentDidMount');
    fetchUser(this.props.username).then((user) => {
      this.setState({user})
    })
  }
  render(){
    console.log('render');
    return(
      this.props.children(this.state.user)
    )
  }
}


ReactDOM.render(<Twitter username='panke'>
  {
    user=><div>{user.username}{user.password}</div>
  }
</Twitter>,document.querySelector('#root'))
