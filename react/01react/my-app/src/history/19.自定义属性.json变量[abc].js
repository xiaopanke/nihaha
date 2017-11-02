import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class RegForm extends Component{
  constructor(){
    super()
    this.state={
      username:'',
      password:'',
      dec:''
    }
  }
  handlechange=(event) => {
    //获取自定义属性
    let abc=event.target.dataset.abc;
    let val=event.target.value;
    this.setState({
      [abc]:val
    })
    //[abc]  json里的变量

  }
  handlesubmit=(e) =>{
     e.preventDefault()
     console.log(this.state);
  }
  render(){
    return(
      <form onSubmit={this.handlesubmit} >
      用户名：<input type='text' data-abc='username' onChange={this.handlechange.bind(this)} value={this.state.username} /> <br />
        密码：<input type='text'  data-abc='password'  onChange={this.handlechange.bind(this)}  value={this.state.password}  /> <br />
        个人简介：<textarea  data-abc='dec' value={this.state.dec} onChange={this.handlechange.bind(this)} ></textarea>
        <input type='submit'/>
      </form>
    )
  }
}


ReactDOM.render(
  <RegForm  />,
  document.querySelector('#root')
)
