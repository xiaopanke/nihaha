import React,{Component} from 'react' ;
import ReactDom from 'react-dom';

class Title extends Component{
  handleClick(word,event){
    console.log(this);
    console.log(word);
    console.log(event);
  }
  //用来表示在界面上这个组件应该长成什么样子
  render(){
    return(
        //<div>hello Title <span onClick={this.handleClick.bind(this)}>点击</span></div>
        <div>hello Title <span onClick={(event)=>{this.handleClick('word',event)}}>点击</span></div>
    )
  }
}

class Header extends Component{
  //用来表示在界面上这个组件应该长成什么样子
  render(){
    return(
        <h1>
          hello Header
          <Title />
          <Title />
          <Title />
        </h1>
    )
  }
}

class Main extends Component{
  //用来表示在界面上这个组件应该长成什么样子
  render(){
    return(
        <div>hello Main</div>
    )
  }
}
class Footer extends Component{
  //用来表示在界面上这个组件应该长成什么样子
  render(){
    return(
        <div>hello Footer1231</div>
    )
  }
}
class Index extends Component{
  //用来表示在界面上这个组件应该长成什么样子
  render(){
    return(
        <div>
          <div>hello Index</div>
          <Header/>
          <Main/>
          <Footer/>
        </div>
    )
  }
}
ReactDom.render(<Index />,document.querySelector('#root'))
