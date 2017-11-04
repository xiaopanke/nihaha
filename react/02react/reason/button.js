class LikeButton{
  constructor(){
    //在构造函数中初始化一个状态对象，这是一个私有变量
    this.state={
      isLiked:false
    }
    //把事件处理器的this绑定为当前组件的实例
    console.log(this)
    this.handleClick=this.handleClick.bind(this)
    this.setState=this.setState.bind(this)
  }
  createDOMFromString (domstr) {
    let div=document.createElement('div');
    div.innerHTML=domstr;
    //返回这个DIV的第一个子元素
    return div.firstElementChild
  }
  setState(newState){
    //合并旧的状态和新的状态为一个新的状态，再把新的状态赋值给this.state
    this.state=Object.assign({},this.stare,newState)
  }
  handleClick(){
    this.state.isLiked=!this.state.isLiked
    let likeText=document.querySelector('.like-text');
    likeText.innerHTML=this.state.isLiked ? '取消' : '点赞'
  }
  render(){
    console.log('render')
    this.element=this.createDOMFromString(`<button type="button" name="button" class="like-btn">
      <span class="like-text">点赞</span>
    </button>`);
    this.element.addEventListener('click',this.handleClick)
    return this.element
  }
}
