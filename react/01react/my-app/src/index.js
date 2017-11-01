import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class RegForm extends Component{
  constructor(){
    super()
    this.state={
      username:'',
      password:''
    }
  }
  handlechange=(n,event) => {
    //let username=event.target.value //取得输入框的值
    console.log(n)
    if(n=='password'){
      this.setState({
        password:event.target.value
      })
    }else{
      this.setState({
          username:event.target.value
      })
    }

  }
  handlesubmit=(e) =>{
     e.preventDefault()
     console.log(this.state);
  }
  render(){
    return(
      <form onSubmit={this.handlesubmit} >
      用户名：<input type='text' onChange={this.handlechange.bind(this,'username')} value={this.state.username} /> <br />
        密码：<input type='text'  onChange={this.handlechange.bind(this,'password')}  value={this.state.password}  /> <br />
        <input type='submit'/>
      </form>
    )
  }
}


ReactDOM.render(
  <RegForm  />,
  document.querySelector('#root')
)
