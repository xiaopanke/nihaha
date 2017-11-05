import React,{Component} from 'react' ;
import ReactDom,{render} from 'react-dom';
import PropTypes from 'prop-types'

class Users extends Component{
  constructor(){
    super();//调用父类构造函数，是用来继承父类的私有属性
    this.state={
      users:[
        { username: 'Jerry', age: 21, gender: 'male' },
        { username: 'Tomy', age: 22, gender: 'male' },
        { username: 'Lily', age: 19, gender: 'female' },
        { username: 'Lucy', age: 20, gender: 'female' }
      ]
    }
  }
  render(){
    return(
        <div>
            {this.state.users.map((item,index) =>(
              <li key={index}>{item.username} {item.age} {item.gender}</li>
            ))}
        </div>
    )
  }
}
render(<Users />,document.querySelector('#root'))
