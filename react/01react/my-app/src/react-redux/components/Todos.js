import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as types from  '../store/action-types';
 class Todos extends Component{
   haha=(event) => {
     if(event.keyCode == 13){
            this.props.add(event.target.value);
        }
   }
  render(){
    return(
      <div>
        <input type="text" onKeyDown={this.haha} />
        <ul>
          {
            this.props.todos.map((item,index) =>{
                return <li key={index}>{item}</li>
              }
            )
          }
        </ul>
      </div>
    )
  }
}


let mapStateToProps = state => state.todos;

let mapDispatchToProps = {
    add:(payload)=>({type:types.ADD_TODO,payload})
}
export default connect(mapStateToProps,mapDispatchToProps)(Todos)
