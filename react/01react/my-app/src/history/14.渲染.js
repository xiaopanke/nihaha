import React,{Component} from 'react';
import ReactDOM from 'react-dom';


function WarningBanner(props) {
   return props.warn ? <div className='warn'>{props.message}</div> : null
}

class Page extends Component{
  constructor(){
    super();
    this.state={
      showWarning:false
    }
  }
  change=() => {
    this.setState({
      showWarning:!this.state.showWarning
    })
  }
  render(){
    return(
      <div>
        <WarningBanner warn={this.state.showWarning} message='Warning' />
        <button onClick={this.change}>
          {this.state.showWarning ? '隐藏' : '显示'}
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <Page />,
  document.querySelector('#root')
)
