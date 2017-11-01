import React,{Component} from 'react';
import ReactDOM from 'react-dom';

function NumberList(props) {
    return (
      <ul>
          {
            props.numbers.map((item,index)=>(<li key={index}>{item} || {index}</li>))
          }
      </ul>
    )
}
//数组或者迭代器
ReactDOM.render(
  <NumberList numbers={[1,2,3,4,5]} />,
  document.querySelector('#root')
)
