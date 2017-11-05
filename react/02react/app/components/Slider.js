import React,{Component} from 'react';
//默认导出一个Slider
export default class Slider extends Component{
    constructor(){
      super();
      this.state={
        index:0
      }
    }
    turn=(step) => {
      let index=this.state.index; //先取得老的index值
      index+=step;//让老的值加上步长
      if(index>=this.props.images.length){
        index=0;
      }
      this.setState({ //修改状态中的index值为新的index值
        index
      })
    }
    go=() => {
      setInterval(() => {
        this.turn(1);
      },this.props.delay*1000)
    }
    componentDidMount(){
      this.go();
    }
    render(){
        let style={
          left:this.state.index*-300,
          width:this.props.images.length*300,
          transitionDuration:this.props.speed + 's',//每次动画的持续时间
        }
        return (
            <div className='slider-wrapper'>
              <ul className="sliders" style={style}>
                {this.props.images.map((item,index) => (
                  <li key={index} className="slider">
                    <img src={item} />
                  </li>
                ))}
              </ul>
            </div>
        )
    }
}
