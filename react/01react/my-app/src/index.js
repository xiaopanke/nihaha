import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

//复合组件
class Panel extends Component{
  render(){
    return(
      <div className="panel panel-default">
        <PanelHead head={this.props.head} />
        <PanelBody body={this.props.body} />
        <PanelFooter foot={this.props.foot} />
      </div>
    )
  }
}
class PanelHead extends Component{
    render(){
      return(
        <div className="panel-heading">{this.props.head}</div>
      )
    }
}
class PanelBody extends Component{
  render(){
    return(
      <div className="panel-body">{this.props.body}</div>
    )
  }
}
class PanelFooter extends Component{
  render(){
    return(
      <div className="panel-footer">{this.props.foot}</div>
    )
  }
}



ReactDOM.render(
  <Panel head="头" body="体" foot="尾巴"  />,
  document.querySelector('#root')
)
