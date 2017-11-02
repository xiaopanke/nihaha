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
    let jsondata={}
    jsondata[abc]=val
    this.setState(jsondata)
    // this.setState({
    //   [abc]:val
    // })
    //[abc]  json里的变量

  }
  handlesubmit=(e) =>{
     e.preventDefault()
     console.log(this.state);
  }
  render(){
    return(
      <form onSubmit={this.handlesubmit} >
      用户名：<input type='text' data-abc='username' onChange={this.handlechange} value={this.state.username} /> <br />
        密码：<input type='text'  data-abc='password'  onChange={this.handlechange}  value={this.state.password}  /> <br />
        个人简介：<textarea  data-abc='dec' value={this.state.dec} onChange={this.handlechange} ></textarea>
        <select  onChange={this.handlechange} data-abc="fruit" value={this.state.fruit}>
          <option value="apple0">苹果</option>
          <option value="apple1">苹果2</option>
          <option value="apple2">苹果2</option>
        </select>
        <input type='submit'/>
      </form>
    )
  }
}


ReactDOM.render(
  <RegForm  />,
  document.querySelector('#root')
)
