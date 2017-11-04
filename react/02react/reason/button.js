class LikeButton extends Commponent{
  constructor(props){
    //在构造函数中初始化一个状态对象，这是一个私有变量
    super(props);
    this.state={
      isLiked:false
    }
    //把事件处理器的this绑定为当前组件的实例
    console.log(this)
    this.handleClick=this.handleClick.bind(this)
    this.setState=this.setState.bind(this)
  }

  handleClick(){
    this.setState({isLiked:!this.state.isLiked})
  }
  render(){
    console.log(this.state.isLiked ? '取消' : '点赞')
    this.element=this.createDOMFromString(`<button style="color:${this.props.color};background:${this.props.backgroundColor}" type="button" name="button" class="like-btn">
      <span class="like-text">${this.state.isLiked ? '取消' : '点赞'}</span>
    </button>`);
    this.element.addEventListener('click',this.handleClick)
    return this.element
  }
}
