
//创建一个仓库，其实是一个函数作用域
let createStore=() => {
  var appState={
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
    //创建新数据 ，保存所有的箭头函数
  let listeners=[];
  //定义一个更新数据的方法，只有通过他才能更新数据
  //action是用来描述更改的动作的 {type:'',payload:{}}
  function dispatch(action){
    switch(action.type){
      case 'UPDATE_TITLE_TEXT':
        appState.title.text=action.payload.text;
        break;
      case 'UPDATE_TITLE_COLOR':
        appState.title.color=action.payload.color;
        break;
      default:
          break;
    }
    listeners.forEach(l=>l())
  }

  //在监听的时候就是把监听函数存放到监听函数数组里面

  let subscribte=(listener) => {
    listeners.push(listener)
  }
  //获取仓库中的状态对象
  let getState=()=>appState;
  return {getState,dispatch,subscribte}
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
