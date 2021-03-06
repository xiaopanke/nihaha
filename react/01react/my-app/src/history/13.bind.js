import React,{Component} from 'react';
import ReactDOM from 'react-dom';

function UserGreeting() {
    return <h1>欢迎</h1>
}
function GuestGreet() {
  return <h1>请登陆</h1>
}

function Greeting(props) {
    let isLogin=props.isLogin
    return isLogin ? <UserGreeting /> : <GuestGreet />
}

function LoginButton(props) {
    return <button onClick={props.onClick}>登陆</button>
}
function LogoutButton(props) {
    return <button onClick={props.onClick}>退出</button>
}

class LoginCtrl extends Component{
  constructor(){
    super();
    this.state={isLogin:false}
  }
  render(){
    let {isLogin}=this.state; //结构赋值
    console.log(this.state)
    console.log({isLogin})
    console.log(isLogin)
    let button=isLogin ? <LogoutButton onClick={()=>this.setState({isLogin:false})} /> :<LoginButton onClick={()=>this.setState({isLogin:true})} />
    return(
      <div>
        <Greeting isLogin={this.state.isLogin}  />
        {button}
      </div>
    )
  }
}

function MailBox(props){
  return(
    <div>
      <h1>Hello</h1>
      {
        props.unreadMessages.length>0 && <h2>你有{props.unreadMessages.length}条未读消息</h2>
      }
    </div>
  )
}
let unreadMessages=['1',2]
ReactDOM.render(
  <MailBox unreadMessages={unreadMessages} />,
  document.querySelector('#root')
)


/*
<button onClick={this.handleClick.bind(this, props0, props1, ...}></button>

handleClick(porps0, props1, ..., event) {
}

*/
