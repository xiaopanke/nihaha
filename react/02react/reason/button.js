class LikeButton{
  createDOMFromString (domstr) {
    let div=document.createElement('div');
    div.innerHTML=domstr;
    //返回这个DIV的第一个子元素
    return div.firstElementChild
  }
  render(){
    this.element=this.createDOMFromString(`<button type="button" name="button" class="like-btn">
      <span class="like-text">点赞</span>
    </button>`);
    this.element.addEventListener('click',() => {
      alert(1);
    })
    return this.element
  }
}
