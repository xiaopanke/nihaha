import React,{Component} from 'react';
//默认导出一个Slider
export default class SliderArrow extends Component{

    render(){

        return (
            <div className='arrows'>
              <a href="javascript:;" onClick={()=>{this.props.turn(-1)}} className='arrow-left'><i className='iconfont icon-fanhui'></i></a>
              <a href="javascript:;" onClick={()=>{this.props.turn(1)}} className="arrow-right"><i className='iconfont icon-gengduo'></i></a>
            </div>
        )
    }
}
