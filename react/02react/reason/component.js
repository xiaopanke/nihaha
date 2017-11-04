class Commponent{
  constructor(props){
    this.props=props;
  }
  createDOMFromString (domstr) {
    let div=document.createElement('div');
    div.innerHTML=domstr;
    //返回这个DIV的第一个子元素
    return div.firstElementChild
  }
  setState(newState){
    //合并旧的状态和新的状态为一个新的状态，再把新的状态赋值给this.state
    //this.state=Object.assign({},this.stare,newState); //es6
    this.state={...this.stare,...newState}; //es7
    console.log(this.state)
    //先获取这个button的父级节点
    let parent=this.element.parentNode;
    //备份一下老节点
    let oldEle=this.element;
    this.render(); //render之后会得到一个新的节点
    //删除老节点
    parent.removeChild(oldEle)
    //添加新节点
    parent.appendChild(this.element)
  }
  //挂载
  mount(container){
    //把当前的元素挂载到父容器内部
    container.appendChild(this.render())
  }
}
