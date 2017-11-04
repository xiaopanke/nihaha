export default{
  render(element,container){
    let domele=document.createElement(element.type);
    for(let attr in element.attrs){
      domele.setAttribute(attr,element.attrs[attr])
    }
    domele.innerHTML=element.children;
    container.appendChild(domele)
  }
}
