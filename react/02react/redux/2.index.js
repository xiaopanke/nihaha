
//创建一个仓库，其实是一个函数作用域
let createStore=() => {
  var state;
    //创建新数据 ，保存所有的箭头函数
  let listeners=[];
  //定义一个更新数据的方法，只有通过他才能更新数据
  //action是用来描述更改的动作的 {type:'',payload:{}}
  function dispatch(action){
    state=reducer(state,action)
    listeners.forEach(l=>l())
  }

  //在监听的时候就是把监听函数存放到监听函数数组里面

  let subscribte=(listener) => {
    listeners.push(listener)
  }
  dispatch({})
  //获取仓库中的状态对象
  let getState=()=>state;
  return {getState,dispatch,subscribte}
}
//定义初始值
let initstate={
  defaultColor:'orange',
  title:{
      text:'标题',
      color:'red'
  },
  content:{
    text:'内容',
    color:'blue'
  }
}
//1，提供初始状态，2，从老状态 和action返回新的状态对象
function reducer(state=initstate,action) {
  switch(action.type){
    case 'UPDATE_TITLE_TEXT':
      return {...state,title:{
        ...state.title,
        text:action.payload.text
      }}
    case 'UPDATE_TITLE_COLOR':
      return {...state,color:{
        ...state.title,
        color:action.payload.color
      }}
    default:
      return state
        break;
  }
}
function renderApp(appState) {
  renderTitle(appState.title);
  renderContent(appState.content);
}
function renderTitle(data){
  let title=document.querySelector('#title');
  title.innerHTML=data.text;
  title.style.color=data.color;
}
function renderContent(data){
  let content=document.querySelector('#content');
  content.innerHTML=data.text;
  content.style.color=data.color;
}

let store=createStore();
renderApp(store.getState())
//订阅
store.subscribte(()=>{
  renderApp(store.getState())
})
console.log(store);
store.dispatch({type:'UPDATE_TITLE_TEXT',payload:{text:'新标题'}})
store.dispatch({type:'UPDATE_TITLE_COLOR',payload:{color:'pink'}})
