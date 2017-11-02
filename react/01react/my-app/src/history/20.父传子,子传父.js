import React,{Component} from 'react';
import ReactDOM from 'react-dom';


function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
function BoilingVerdict(props) {
  return props.celsius >=100 ? (<div>水开了</div>) :(<div>水没开</div>)
}

class  TemperatureInput extends Component{

  handlechange=(event) => {
    this.props.onTemperatureChange(event.target.value)
  }
  render(){
    return(
      <div>
      请输入<span style={{color:'red'}}>{this.props.scale}</span>温度：<input value={this.props.temperature} onChange={this.handlechange} />
      </div>
    )
  }
}

class Calculator extends Component{
  constructor(){
    super()
    this.state={
      temperature:0
    }
  }
  handletemperature=(temperature) => {
    this.setState({temperature})
  }
  render(){
    return (
      <div>
        <TemperatureInput scale="摄氏" temperature={this.state.temperature} onTemperatureChange={this.handletemperature} />
        <TemperatureInput scale="华氏" temperature={this.state.temperature} onTemperatureChange={this.handletemperature} />
        <BoilingVerdict />
      </div>
    )
  }
}

ReactDOM.render(
  <Calculator />,
  document.querySelector('#root')
)
