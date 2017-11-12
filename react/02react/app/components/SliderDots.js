import React,{Component} from 'react';
//默认导出一个Slider
export default class SliderDots extends Component{

    render(){

        return (
            <div className='dots'>
              {
                this.props.images.map((item,index) => (
                  <span key={index} onClick={()=>{this.props.turn(index-this.props.index)}} className={(this.props.index==index)||(this.props.index==this.props.images.length&&index==0)?"active":""}></span>
                ))
              }
            </div>
        )
    }
}
