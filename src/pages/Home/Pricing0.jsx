import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col,Input,message} from 'antd';
import { getChildrenToRender } from './utils';
import '@/static/css/style.css';
import '@/static/css/style_index.css';
import '@/static/css/minify.css';
import '@/pages/Home/less/pricing0.less';
import {
  Pricing00DataSource,
} from './data.source'
import request from "umi-request"

export default class Pricing0 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      phone:'',
      area:'',
    };
  }
  changeName=e=>{
    console.log(e)
    this.setState({
      name:e.target.value
    })
  }
  changePhone=e=>{
    this.setState({
      phone:e.target.value
    })
  }
  changeArea=e=>{
    this.setState({
      area:e.target.value
    })
  }
  handleClick=()=>{
    request.put("/api/fitment/fitmentOrder/save",{
      data: {
        datatype:0,
        linkName: this.state.name,
        linkPhone: this.state.phone,
        area: this.state.area,
      }
    })
    .then(response=>{
      console.log(response);
      console.log(response);
      if(response.msg=='请输入正确的手机号码！'){
        message.error('请输入正确的手机号码！');
      }else{
        message.success('提交成功');
      }
    })
    .catch(error=>{
      console.log(error);
      if(error.msg&&error.msg!=''){
        message.error(error.msg);
      }else{
        message.error('提交失败');
      }
    });
  }
  render(){
  const dataSource=Pricing00DataSource;
  return (
    <div  {...dataSource.wrapper}>
      <OverPack component={Row} {...dataSource.OverPack}>
        <TweenOne
          key="img"
          resetStyle
          {...dataSource.imgWrapper}
          component={Col}
          componentProps={{
            md: dataSource.imgWrapper.md,
            xs: dataSource.imgWrapper.xs,
          }}
        >
          <div class="indexIndent Wrap ztPricing0">
            <div class="Column">
              <div class="form">
              <div class="ht">
                <h3>定制专属搭配服务</h3>
                <p>圆色装饰集团丨拎包入住，一站式整体装修</p>
              </div>
              <form class="usePlace formField clearfix">
                <input type="hidden" id="isvcode" name="isvcode" value="1" />
                <input type="hidden" id="totype" name="totype" value="ajax" />
                <input type="hidden" id="tourl" name="tourl" value="goback" />
                <input type="hidden" id="yusuan" name="yusuan" />
                <input type="hidden" id="tomsg" name="tomsg" value="预约成功，我们将通过电话联系您！" />
                <input type="hidden" id="subject" name="subject" value="来源：PC-首页-定制专属搭配服务[Url:https://www.ysgjrz.com/，IP:39.128.22.25]" />
                <div className='row'>
                  <Input value={this.state.name} onChange={this.changeName} className="row_input"  placeholder="您的姓名" />
                  <Input value={this.state.phone} onChange={this.changePhone} className="row_input"  placeholder="手机号码" />
                </div>
                <div className='row'>
                  <Input value={this.state.area} onChange={this.changeArea} className="row_input"  placeholder="房屋面积" suffix="㎡" />
                  <div onClick={this.handleClick} className="row_button">立即定制</div>
                </div>
              </form>
              </div>
              <div class="info">
              <p>作为主人的你，<br />才是家的<span>主导者</span>，</p>
              <p>而我们只是你精致家居的<span>实现者</span>。</p>
              <h3>说出你对家的“感觉”，我们将为你1：1还原</h3>
              </div>
            </div>
          </div>
        </TweenOne>
        {/* <QueueAnim
          key="text"
          type={animType.queue}
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
          {...dataSource.childWrapper}
          component={Col}
          componentProps={{
            md: dataSource.childWrapper.md,
            xs: dataSource.childWrapper.xs,
          }}
        >
          {dataSource.childWrapper.children.map(getChildrenToRender)}
        </QueueAnim> */}
      </OverPack>
    </div>
  );
}
}