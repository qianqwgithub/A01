/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import './detail.less';
import '@/static/css/style.css';
import '@/static/css/style_public.css';
import '@/static/css/minify.css';
import '@/static/css/minify10.css';
import '@/static/js/minify.js';
import '@/static/js/z_stat-1278941601_1278941601.js';
import '@/static/js/z_stat-1279235047_1279235047.js';
import '@/pages/Home/less/antMotionStyle.less';
import Nav0 from '@/pages/Home/Nav0';
import Footer1 from '@/pages/Home/Footer1';
import {
  Nav00DataSource,
  Footer10DataSource,
} from '@/pages/Home/data.source';
import {Link} from 'umi';
import request from "umi-request";
import {Modal,message,Input} from 'antd';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class HOUSEDETAIL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
      house:{},
      isModalVisible:false,
      isModalVisible1:false,
      name:'',
      phone:'',
      area:'',
      name1:'',
      phone1:'',
      area1:'',
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
    this.handleSelectById();
  }
  handleSelectById(){
    request.get("/api/fitment/fitmentBuild/"+this.props.location.query.id,{
    })
    .then(response=>{
      console.log(response);
      this.setState({
        house: response.data,
      });
      console.log(this.state);
    })
    .catch(error=>{
      console.log(error);
    });
  }
  nameChange=e=>{
    console.log(e.target.value);
    this.setState({
      name:e.target.value
    })
  }
  phoneChange=e=>{
    console.log(e.target.value);
    this.setState({
      phone:e.target.value
    })
  }
  areaChange=e=>{
    console.log(e.target.value);
    this.setState({
      area:e.target.value
    })
  }
  nameChange1=e=>{
    console.log(e.target.value);
    this.setState({
      name1:e.target.value
    })
  }
  phoneChange1=e=>{
    console.log(e.target.value);
    this.setState({
      phone1:e.target.value
    })
  }
  areaChange1=e=>{
    console.log(e.target.value);
    this.setState({
      area1:e.target.value
    })
  }
  handleOk = () => {
    request.put("/api/fitment/fitmentOrder/save",{
      data: {
        datatype:2,
        linkName: this.state.name,
        linkPhone: this.state.phone,
        area: this.state.area,
      }
    })
    .then(response=>{
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
    this.setState({
      isModalVisible:false,
    })
  };

  handleCancel = () => {
    this.setState({
      isModalVisible:false,
    })
  };
  handleOk1 = () => {
    request.put("/api/fitment/fitmentOrder/save",{
      data: {
        datatype:2,
        linkName: this.state.name1,
        linkPhone: this.state.phone1,
        area: this.state.area1,
      }
    })
    .then(response=>{
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
    this.setState({
      isModalVisible:false,
    })
  };

  handleCancel1 = () => {
    this.setState({
      isModalVisible1:false,
    })
  };
  render() {
    const children = [
      //导航条
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      <div class="Wrap ztHouseDetail ztPage">
          <div class="casesImgSlide Wrap">
          <div class="box">
            <div class="CaseSlide" data="halfSlide" data-auto="999" data-loop="0">
            <div class="bd swiper-container">
              <ul class="swiper-wrapper">
              <li class="swiper-slide">
                <div class="img">
                <div class="trbl tabV">
                  <div class="td">
                  <img src={global.constants.imgurl+this.state.house.imgUrl} data-src={require('@/static/picture/cfcb87f45962587d.png')} alt={this.state.house.title} class="swiper-lazy" />
                  </div>
                </div>
                </div></li>
              </ul>
            </div>
            <div class="infoTop">
              <div class="Column">
              <div class="leader fl">
                <a href="index.html" class="">首页</a>
                <span class="">&gt;</span>
                <a href="house.html">热装楼盘</a>
              </div>
              </div>
            </div>
            </div>
          </div>
          </div>
          <div class="Column HouseInfo">
          <div class="btns">
            <a onClick={()=>this.setState({isModalVisible:true})} class="inline">申请户型规划</a>
            <a onClick={()=>this.setState({isModalVisible1:true})} class="inline">预约参观工地</a>
          </div>
          <div class="info">
            <div class="clearfix">
            <h3 class="title">{this.state.house.title}</h3>
            <div class="tags">
              <span>服务客户：<em>{this.state.house.clientNum}</em>户</span>
              <span>施工工地：<em>{this.state.house.buildNum}</em>套</span>
              <span>楼盘案例：<em>{this.state.house.caseNum}</em>套</span>
            </div>
            </div>
            <div class="nano ove note" data="nanoScroll">
            <div class="nano-content">
              <div class="sheight">
                {this.state.house.title}
              </div>
            </div>
            </div>
          </div>
          </div>
          <div class="CasesList Column">
          <div class="HouseHt clearfix">
            <Link  to='/house' target="_blank" class="more inline">查看更多</Link>
            <h3 class="CaseTit ove">楼盘推荐</h3>
          </div>
          <ul class="clearfix">
            <li class="swiper-slide">
              <div class="img">
                <div class="trbl tabV">
                  <div class="td">
                  <img src={require('@/static/picture/cfcb87f45962587d.png')} data-src={require('@/static/picture/cfcb87f45962587d.png')} alt="微信图片_20201016102946" class="swiper-lazy" />
                  <span>保利·玺樾</span>
                  </div>
                </div>
              </div>
            </li>
            <li class="swiper-slide">
              <div class="img">
                <div class="trbl tabV">
                  <div class="td">
                  <img src={require('@/static/picture/cfcb87f45962587d.png')} data-src={require('@/static/picture/cfcb87f45962587d.png')} alt="微信图片_20201016102946" class="swiper-lazy" />
                  <span>昆明东风东路水均大街地中海风格</span>
                  </div>
                </div>
              </div>
            </li>
            <li class="swiper-slide">
              <div class="img">
                <div class="trbl tabV">
                  <div class="td">
                  <img src={require('@/static/picture/cfcb87f45962587d.png')} data-src={require('@/static/picture/cfcb87f45962587d.png')} alt="微信图片_20201016102946" class="swiper-lazy" />
                  <span>昆明恒大名都128平米</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          </div>,
      </div>,
      //底部
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Modal title="申请户型规划" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} className='modal'>
        <Input placeholder='您的姓名'   onChange={this.nameChange}></Input>
        <Input placeholder='您的手机号' onChange={this.phoneChange}></Input>
        <Input placeholder='房屋面积'   onChange={this.areaChange}></Input>
      </Modal>,
      <Modal title="预约参观工地" visible={this.state.isModalVisible1} onOk={this.handleOk1} onCancel={this.handleCancel1} className='modal'>
        <Input placeholder='您的姓名'   onChange={this.nameChange1}></Input>
        <Input placeholder='您的手机号' onChange={this.phoneChange1}></Input>
        <Input placeholder='房屋面积'   onChange={this.areaChange1}></Input>
      </Modal>,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
