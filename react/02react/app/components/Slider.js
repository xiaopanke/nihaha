import React,{Component} from 'react';
import SliderItem from './SliderItem'
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
              <SliderItem index={this.state.index}  images={this.props.images} speed={this.props.speed}  />
            </div>
        )
    }
}
