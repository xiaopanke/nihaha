import React,{Component} from 'react';
import SliderItem from './SliderItem';
import SliderArrow from './SliderArrow'
import SliderDots from './SliderDots'
//默认导出一个Slider
export default class Slider extends Component{
    constructor(){
      super();
      this.state={
        index:0
      }
    }
    getSliders=(sliders) => {
      this.sliders=sliders
    }
    turn=(step) => {
      let index=this.state.index; //先取得老的index值
      index+=step;//让老的值加上步长
      if(index>this.props.images.length){
        //当最后一张要走到2的时候，需要马上拉到索引0的位置 ，再往下走
        this.sliders.style.transitionDuration=0;
        this.sliders.style.left=0;
        //强行让浏览器重新计算
        getComputedStyle(this.sliders,null).left
        index=1;
        this.sliders.style.transitionDuration=this.props.speed+'s';
        this.setState({index});
        return;
      }
      if(index<0){
        //当最后一张要走到2的时候，需要马上拉到索引0的位置 ，再往下走
        this.sliders.style.transitionDuration=0;
        this.sliders.style.left=(this.props.images.length)*-300+'px';
        //强行让浏览器重新计算
        getComputedStyle(this.sliders,null).left
        index=this.props.images.length-1;
        this.sliders.style.transitionDuration=this.props.speed+'s';
        this.setState({index});
        return;
      }
      this.setState({ //修改状态中的index值为新的index值
        index
      })
    }
    go=() => {
      clearInterval(this.timerID)
      this.timerID=setInterval(() => {
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
            <div onMouseOver={()=> {clearInterval(this.timerID)}}  onMouseOut={this.go} className='slider-wrapper'>
              <SliderItem
              getSliders={this.getSliders}
              index={this.state.index}  images={this.props.images} speed={this.props.speed}  />
              <SliderArrow turn={this.turn}  />
              <SliderDots turn={this.turn} images={this.props.images} index={this.state.index}  />
            </div>
        )
    }
}
