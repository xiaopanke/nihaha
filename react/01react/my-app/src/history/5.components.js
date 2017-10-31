import React from 'react';
import ReactDOM from 'react-dom';

//复合组件
function Person(props){
    return <h1>{props.name}</h1>
}

//{...props}表示批量
function Welcome(props) {
  return  <div><Person {...props} /></div>
}

function App(){
  return (
    <div>
      <Welcome name='panke1' />
      <Welcome name='panke2' />
      <Welcome name='panke3' />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
