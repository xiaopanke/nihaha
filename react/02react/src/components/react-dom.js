export default{
  //把虚拟的DOM元素变成真实的DOM并插入容器内部
  render(element,container){
    console.log(element)
    let domele=document.createElement(element.type);
    for(let attr in element.attrs){
      domele.setAttribute(attr,element.attrs[attr])
    }

    if(typeof element.children == 'string'){
      domele.innerHTML=element.children;
    }else{
      this.render(element.children,domele)
    }
    container.appendChild(domele)
  }
}
