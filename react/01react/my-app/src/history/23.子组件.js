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
  console.log(props);
  return props.celsius >=100 ? (<div>水开了</div>) :(<div>水没开</div>)
}

class  TemperatureInput extends Component{

  render(){
    return(
      <div>
      请输入<span style={{color:'red'}}>{this.props.scale}</span>温度：<input value={this.props.temperature} scale={this.props.scale} onChange={(event)=>{this.props.onTemperatureChange(event)}} />
      </div>
    )
  }
}

class Calculator extends Component{
  constructor(){
    super()
    this.state={
      temperatureshe:0,
      temperaturehua:tryConvert(0,toFahrenheit)
    }
  }
  handletemperature=(event) => {
    let temperature=event.target.value;
    let scale=event.target.getAttribute('scale');

    if(scale=='摄氏'){
        this.setState({
          temperatureshe:temperature,
          temperaturehua:tryConvert(temperature,toFahrenheit)
        })
    }else{
      this.setState({
        temperatureshe:tryConvert(temperature,toCelsius),
        temperaturehua:temperature,
      })
    }

  }
  render(){
    return (
      <div>
        <TemperatureInput scale="摄氏" temperature={this.state.temperatureshe} onTemperatureChange={this.handletemperature} />
        <TemperatureInput scale="华氏" temperature={this.state.temperaturehua} onTemperatureChange={this.handletemperature} />
        <BoilingVerdict celsius={this.state.temperatureshe} />
      </div>
    )
  }
}

ReactDOM.render(
  <Calculator />,
  document.querySelector('#root')
)
