/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import './index.less';
import '@/static/css/style.css';
import '@/static/css/style_public.css';
import '@/static/css/minify.css';
import '@/static/css/minify7.css';
import '@/static/js/minify.js';
import '@/static/js/z_stat-1278941601_1278941601.js';
import '@/static/js/z_stat-1279235047_1279235047.js';
import '@/pages/Home/less/antMotionStyle.less';
import Nav0 from '@/pages/Home/Nav0';
import Footer1 from '@/pages/Home/Footer1';
import BannerAnim, { Element } from 'rc-banner-anim';
import {
  Nav00DataSource,
  Footer10DataSource,
} from '@/pages/Home/data.source';
import {Modal,message,Input} from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import request from "umi-request";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class BIGHOUSE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
      name:'',
      phone:'',
      area:'',
      name1:'',
      phone1:'',
      area1:'',
      name2:'',
      phone2:'',
      area2:'',
      isModalVisible:false,
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
  nameChange2=e=>{
    console.log(e.target.value);
    this.setState({
      name2:e.target.value
    })
  }
  phoneChange2=e=>{
    console.log(e.target.value);
    this.setState({
      phone2:e.target.value
    })
  }
  areaChange2=e=>{
    console.log(e.target.value);
    this.setState({
      area2:e.target.value
    })
  }
  lingquClick=()=>{
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
  }
  lingquClick1=()=>{
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
  }
  showModal = () => {
    this.setState({
      isModalVisible:true,
    })
  };

  handleOk = () => {
    request.put("/api/fitment/fitmentOrder/save",{
      data: {
        datatype:2,
        linkName: this.state.name2,
        linkPhone: this.state.phone2,
        area: this.state.area2,
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
  render() {
    const children = [
      //导航条
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      <div class="Wrap ztBigHouse ztPage bigHouse">
        {/* //Banner--> */}
        <div class="ztSec secBanner">
        <div class="ztWrap">
          <div class="imga">
          <img src={require('@/static/picture/secBanner3.jpg')} />
          </div>
        </div>
        </div>
        <div class="Wrap ztBg">
        {/* <!--//Nav--> */}
        <div class="Wrap secNav">
          <ul class="Column">
          {/* <li><a href="#secDesign" title="个性化设计">个性化设计</a></li>
          <li><a href="#secCustom" title="定制化搭配">定制化搭配</a></li>
          <li><a href="#secBrand" title="一线品牌主材辅材">一线品牌主材辅材</a></li>
          <li><a href="#secBaojia" title="清单式报价">清单式报价</a></li>
          <li><a href="#secCases" title="高性价比">高性价比</a></li>
          <li><a href="#secService" title="管家式服务">管家式服务</a></li>
          <li id="end"><a href="#secControl" title="投资可控">投资可控</a></li> */}
          <li><a title="个性化设计">个性化设计</a></li>
          <li><a title="定制化搭配">定制化搭配</a></li>
          <li><a title="一线品牌主材辅材">一线品牌主材辅材</a></li>
          <li><a title="清单式报价">清单式报价</a></li>
          <li><a title="高性价比">高性价比</a></li>
          <li><a title="管家式服务">管家式服务</a></li>
          <li id="end"><a title="投资可控">投资可控</a></li>
          </ul>
        </div>
        {/* <!--//Indent--> */}
        <div class="Wrap secIndent" id="secIndent">
          <div class="Column">
          <div class="box clearfix">
            <img src={require('@/static/picture/secIndentHt.png')} />
            <form class="form usePlace formField clearfix" action="?c=post&amp;f=setok&amp;module_id=119" method="post" onsubmit="return pub_submit(this);" validator="contact,phone,area" field="contact,phone,area,button" autocomplete="off">
            <div class="table ext cls_contact">
              <div class="left">
              <span class="red">*</span> 您的姓名：
              </div>
              <div class="right">
              <div>
                <table cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                  <td><input onChange={this.nameChange} placeholder='请输入您的姓名' type="text" class="input-text" name="contact" id="contact"  /></td>
                  <td class="clue_on">&nbsp;请输入您的姓名</td>
                  </tr>
                </tbody>
                </table>
              </div>
              </div>
              <div class="clear"></div>
            </div>
            <div class="table ext cls_phone">
              <div class="left">
              <span class="red">*</span> 您的手机：
              </div>
              <div class="right">
              <div>
                <table cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                  <td><input  onChange={this.phoneChange} placeholder='请输入您的手机号码' type="text" class="input-text" name="phone" id="phone"  /></td>
                  <td class="clue_on">&nbsp;请输入您的手机号码</td>
                  </tr>
                </tbody>
                </table>
              </div>
              </div>
              <div class="clear"></div>
            </div>
            <div class="table ext cls_area">
              <div class="left">
              房屋面积：
              </div>
              <div class="right">
              <div>
                <table cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                  <td><input  onChange={this.areaChange} placeholder='请输入您的面积' type="text" class="input-text" name="area" id="area"  /></td>
                  <td class="clue_on">&nbsp;请输入您的面积</td>
                  </tr>
                </tbody>
                </table>
              </div>
              </div>
              <div class="clear"></div>
            </div>
            <div class="table cls_button" id="end">
              <div class="right">
              <div onClick={this.lingquClick} class="button submit" id="_phpok_submit"><span>领取设计方案</span></div>
              </div>
            </div>
            </form>
          </div>
          </div>
        </div>
        {/* <!--//1.个性化设计--> */}
        <div class="ztCon secDesign" data="halfSlide" data-view="1" data-auto="999" data-space="0" id="secDesign">
          <div class="ztTitle">
          <h2>个性化设计</h2>
          <p>细致的设计从材料到尺寸一目了然，细致到分毫，施工为你精打细算</p>
          </div>
          <div class="box">
          <div class="bd swiper-container">
            <ul class="swiper-wrapper">
              <BannerAnim
                type="across"
                arrow={true}
                autoPlay
                >
                <Element
                  prefixCls="banner-user-elem"
                  key="0"
                >
                  <li class="swiper-slide clearfix">
                    <div class="photo">
                    <div class="imgh">
                      <img src={require('@/static/picture/secDesign_01.jpg')} />
                    </div>
                    </div>
                    <div class="info">
                    <h3 class="title ellipsis">豪华大户型<i class="icon"></i></h3>
                    <div class="noteBox">
                      <p class="note clamp">五房一厅/230㎡<br />开放式通透大厨房</p>
                    </div>
                    <div class="unit">
                      <div class="imgh">
                      <img src={require('@/static/picture/secDesignUnit_01.png')} />
                      </div>
                    </div>
                    <a href="javascript:;" onClick={this.showModal} title="领取设计方案" class="imga btn">领取设计方案</a>
                    </div>
                  </li>
              
                </Element>
                <Element
                  prefixCls="banner-user-elem"
                  key="1"
                >
                  <li class="swiper-slide clearfix">
                    <div class="photo">
                    <div class="imgh">
                      <img src={require('@/static/picture/secDesign_02.jpg')} />
                    </div>
                    </div>
                    <div class="info">
                    <h3 class="title ellipsis">独立别墅<i class="icon"></i></h3>
                    <div class="noteBox">
                      <p class="note clamp">双层三房一厅/200㎡<br />客餐厅一体化设计</p>
                    </div>
                    <div class="unit">
                      <div class="imgh">
                      <img src={require('@/static/picture/secDesignUnit_02.png')} />
                      </div>
                    </div>
                    <a href="javascript:;" onClick={this.showModal} title="领取设计方案" class="imga btn">领取设计方案</a>
                    </div>
                  </li>
                </Element>
                <Element
                  prefixCls="banner-user-elem"
                  key="2"
                >
                  <li class="swiper-slide clearfix">
                    <div class="photo">
                    <div class="imgh">
                      <img src={require('@/static/picture/secDesign_01.jpg')} />
                    </div>
                    </div>
                    <div class="info">
                    <h3 class="title ellipsis">豪华大户型<i class="icon"></i></h3>
                    <div class="noteBox">
                      <p class="note clamp">五房一厅/230㎡<br />开放式通透大厨房</p>
                    </div>
                    <div class="unit">
                      <div class="imgh">
                      <img src={require('@/static/picture/secDesignUnit_01.png')} />
                      </div>
                    </div>
                    <a href="javascript:;" onClick={this.showModal} title="领取设计方案" class="imga btn">领取设计方案</a>
                    </div></li>
              
                </Element>
                <Element
                  prefixCls="banner-user-elem"
                  key="3"
                >
                  <li class="swiper-slide clearfix">
                    <div class="photo">
                    <div class="imgh">
                      <img src={require('@/static/picture/secDesign_02.jpg')} />
                    </div>
                    </div>
                    <div class="info">
                    <h3 class="title ellipsis">独立别墅<i class="icon"></i></h3>
                    <div class="noteBox">
                      <p class="note clamp">双层三房一厅/200㎡<br />客餐厅一体化设计</p>
                    </div>
                    <div class="unit">
                      <div class="imgh">
                      <img src={require('@/static/picture/secDesignUnit_02.png')} />
                      </div>
                    </div>
                    <a href="javascript:;" onClick={this.showModal} title="领取设计方案" class="imga btn">领取设计方案</a>
                    </div></li>
             
                </Element>
                <Element
                  prefixCls="banner-user-elem"
                  key="4"
                >
                  <li class="swiper-slide clearfix">
                    <div class="photo">
                    <div class="imgh">
                      <img src={require('@/static/picture/secDesign_03.jpg')} />
                    </div>
                    </div>
                    <div class="info">
                    <h3 class="title ellipsis">超大平层<i class="icon"></i></h3>
                    <div class="noteBox">
                      <p class="note clamp">六房一厅/300㎡<br />开放式大空间设计</p>
                    </div>
                    <div class="unit">
                      <div class="imgh">
                      <img src={require('@/static/picture/secDesignUnit_03.png')} />
                      </div>
                    </div>
                    <a href="javascript:;" onClick={this.showModal} title="领取设计方案" class="imga btn">领取设计方案</a>
                    </div></li>
             
                </Element>
                <Element
                  prefixCls="banner-user-elem"
                  key="5"
                >
                  <li class="swiper-slide clearfix">
                    <div class="photo">
                    <div class="imgh">
                      <img src={require('@/static/picture/secDesign_04.jpg')} />
                    </div>
                    </div>
                    <div class="info">
                    <h3 class="title ellipsis">温馨平层<i class="icon"></i></h3>
                    <div class="noteBox">
                      <p class="note clamp">三房一厅/230㎡<br />居家舒适客厅</p>
                    </div>
                    <div class="unit">
                      <div class="imgh">
                      <img src={require('@/static/picture/secDesignUnit_04.png')} />
                      </div>
                    </div>
                    <a href="javascript:;" onClick={this.showModal} title="领取设计方案" class="imga btn">领取设计方案</a>
                    </div></li>
              
                </Element>
                <Element
                  prefixCls="banner-user-elem"
                  key="6"
                >
                  <li class="swiper-slide clearfix">
                    <div class="photo">
                    <div class="imgh">
                      <img src={require('@/static/picture/secDesign_05.jpg')} />
                    </div>
                    </div>
                    <div class="info">
                    <h3 class="title ellipsis">轻奢跃层<i class="icon"></i></h3>
                    <div class="noteBox">
                      <p class="note clamp">六房一厅/280㎡<br />客厅空间的合理利用</p>
                    </div>
                    <div class="unit">
                      <div class="imgh">
                      <img src={require('@/static/picture/secDesignUnit_05.png')} />
                      </div>
                    </div>
                    <a href="javascript:;" onClick={this.showModal} title="领取设计方案" class="imga btn">领取设计方案</a>
                    </div></li>
    
                </Element>
              </BannerAnim>
            </ul>
          </div>
          {/* <a href="javascript:void(0);" class="sbtn prev"><i class="icon"></i></a>
          <a href="javascript:void(0);" class="sbtn next"><i class="icon"></i></a> */}
          </div>
        </div>
        <div class="Wrap ztBg3 wrapZtBg3">
          {/* <!--//2.定制化搭配--> */}
          <div class="ztCon secCustom" id="secCustom">
          <div class="ztTitle">
            <h2>定制化搭配</h2>
            <p>主材+基材+软装+家居，真正的拎包入住</p>
          </div>
          <ul class="clearfix">
            <li class="scale">
            <div class="photo">
              <div class="imgh">
              <img src={require('@/static/picture/secCustom_01.jpg')} />
              </div>
            </div>
            <div class="info">
              <p class="ellipsis EnTit">Decoration materials</p>
              <h3 class="ellipsis title">定制主材</h3>
            </div></li>
            <li class="scale">
            <div class="photo">
              <div class="imgh">
              <img src={require('@/static/picture/secCustom_02.jpg')} />
              </div>
            </div>
            <div class="info">
              <p class="ellipsis EnTit">Decoration base material</p>
              <h3 class="ellipsis title">定制基材</h3>
            </div></li>
            <li class="scale">
            <div class="photo">
              <div class="imgh">
              <img src={require('@/static/picture/secCustom_03.jpg')} />
              </div>
            </div>
            <div class="info">
              <p class="ellipsis EnTit">Soft decoration</p>
              <h3 class="ellipsis title">定制软装</h3>
            </div></li>
            <li id="end" class="scale">
            <div class="photo">
              <div class="imgh">
              <img src={require('@/static/picture/secCustom_04.jpg')} />
              </div>
            </div>
            <div class="info">
              <p class="ellipsis EnTit">Home Furnishing</p>
              <h3 class="ellipsis title">定制家居</h3>
            </div></li>
          </ul>
          </div>
          <div class="ztCon" id="secBrand" data="halfSlide" data-auto="999" data-space="0" data-view="1">
          <div class="ztTitle">
            <h2>一线品牌主材辅材</h2>
            <p>主材+基材+软装+家居，真正的拎包入住</p>
          </div>
          <div class="bd swiper-container">
            <div class="swiper-wrapper"> 
            <ul class="swiper-slide clearfix brandUl"> 
              <li>
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/thumb_1082.png')} data-src={require('@/static/picture/thumb_1082.png')} alt="tata木门" class="swiper-lazy" />
                </div>
              </div></li> 
              <li>
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/thumb_1042.jpg')} data-src={require('@/static/picture/thumb_1042.jpg')} alt="加拿大喜加漆涂料（兰舍硅藻泥水性涂料）" class="swiper-lazy" />
                </div>
              </div></li> 
              <li>
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/thumb_1037.jpg')} data-src={require('@/static/picture/thumb_1037.jpg')} alt="LAFARGE" class="swiper-lazy" />
                </div>
              </div></li> 
              <li>
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/thumb_1036.jpg')} data-src={require('@/static/picture/thumb_1036.jpg')} alt="鹏龙" class="swiper-lazy" />
                </div>
              </div></li> 
              <li>
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/thumb_1043.jpg')} data-src={require('@/static/picture/thumb_1043.jpg')} alt="喜加" class="swiper-lazy" />
                </div>
              </div></li> 
              <li>
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/thumb_1040.jpg')} data-src={require('@/static/picture/thumb_1040.jpg')} alt="东方雨虹" class="swiper-lazy" />
                </div>
              </div></li> 
              <li>
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/thumb_1039.jpg')} data-src={require('@/static/picture/thumb_1039.jpg')} alt="昆电工" class="swiper-lazy" />
                </div>
              </div></li> 
              <li>
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/thumb_1038.jpg')} data-src={require('@/static/picture/thumb_1038.jpg')} alt="大自然地板" class="swiper-lazy" />
                </div>
              </div></li> 
              <li>
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/thumb_76.jpg')} data-src={require('@/static/picture/thumb_76.jpg')} alt="eiei" class="swiper-lazy" />
                </div>
              </div></li> 
              <li>
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/thumb_70.jpg')} data-src={require('@/static/picture/thumb_70.jpg')} alt="风尚宅配" class="swiper-lazy" />
                </div>
              </div></li> 
              <li>
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/thumb_75.jpg')} data-src={require('@/static/picture/thumb_75.jpg')} alt="方太灶具" class="swiper-lazy" />
                </div>
              </div></li> 
              <li>
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/thumb_74.jpg')} data-src={require('@/static/picture/thumb_74.jpg')} alt="方太灶具" class="swiper-lazy" />
                </div>
              </div></li> 
              <li>
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/thumb_72.jpg')} data-src={require('@/static/picture/thumb_72.jpg')} alt="方太灶具" class="swiper-lazy" />
                </div>
              </div></li> 
              <li>
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/thumb_71.jpg')} data-src={require('@/static/picture/thumb_71.jpg')} alt="冠珠陶瓷" class="swiper-lazy" />
                </div>
              </div></li> 
              <li>
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/thumb_1080.png')} data-src={require('@/static/picture/thumb_1080.png')} alt="马可波罗瓷砖" class="swiper-lazy" />
                </div>
              </div></li> 
            </ul> 
            </div>
          </div>
          <div class="hd"></div>
          <div class="sofa sofaSit">
            <img src={require('@/static/picture/secBrandSofa.png')} />
          </div>
          </div>
        </div>
        {/* <!--//4.高性价比--> */}
        <div class="ztCon secCases" id="secCases">
          <div class="ztTitle">
          <h2>高性价比</h2>
          <p>顶尖设计师10年以上设计经验，每个楼盘至少10套户型方案，只为你设计舒适的家</p>
          </div>
          <ul class="clearfix">
          <li><a class="imga scale">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_16.jpg')} data-original={require('@/static/picture/thumb_16.jpg')} alt="保利&middot;玺樾" />
            </div><h3 class="title ellipsis"><span></span>保利&middot;玺樾</h3>
            <div class="info trbl">
              <p class="tags"> 洋房 / 200m&sup2; / 新古典 </p>
              <h3 class="tit">保利&middot;玺樾</h3>
              <i class="icon"></i>
            </div></a></li>
          <li><a class="imga scale">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1743.jpg')} data-original={require('@/static/picture/thumb_1743.jpg')} alt="昆明东风东路水均大街地中海风格案例实景欣赏" />
            </div><h3 class="title ellipsis"><span></span>昆明东风东路水均大街地中海风格案例实景欣赏</h3>
            <div class="info trbl">
              <p class="tags"> 三室两厅 / 地中海 </p>
              <h3 class="tit">昆明东风东路水均大街地中海风格案例实景欣赏</h3>
              <i class="icon"></i>
            </div></a></li>
          <li id="end"><a class="imga scale">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1728.jpg')} data-original={require('@/static/picture/thumb_1728.jpg')} alt="昆明润城45平米小户型" />
            </div><h3 class="title ellipsis"><span></span>昆明润城45平米小户型</h3>
            <div class="info trbl">
              <p class="tags"> 小户型 / 45m&sup2; / 现代简约 </p>
              <h3 class="tit">昆明润城45平米小户型</h3>
              <i class="icon"></i>
            </div></a></li>
          <li><a class="imga scale">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1711.jpg')} data-original={require('@/static/picture/thumb_1711.jpg')} alt="昆明恒大名都128平米" />
            </div><h3 class="title ellipsis"><span></span>昆明恒大名都128平米</h3>
            <div class="info trbl">
              <p class="tags"> 三室一厅 / 128m&sup2; / 混搭 </p>
              <h3 class="tit">昆明恒大名都128平米</h3>
              <i class="icon"></i>
            </div></a></li>
          <li><a class="imga scale">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1697.jpg')} data-original={require('@/static/picture/thumb_1697.jpg')} alt="昆明海伦国际110平米现代简约风格" />
            </div><h3 class="title ellipsis"><span></span>昆明海伦国际110平米现代简约风格</h3>
            <div class="info trbl">
              <p class="tags"> 两室两厅 / 110m&sup2; / 现代简约 </p>
              <h3 class="tit">昆明海伦国际110平米现代简约风格</h3>
              <i class="icon"></i>
            </div></a></li>
          <li id="end"><a class="imga scale">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1687.jpg')} data-original={require('@/static/picture/thumb_1687.jpg')} alt="碧桂园凤凰湾" />
            </div><h3 class="title ellipsis"><span></span>碧桂园凤凰湾</h3>
            <div class="info trbl">
              <p class="tags"> 复式 / 218m&sup2; / 欧式古典 </p>
              <h3 class="tit">碧桂园凤凰湾</h3>
              <i class="icon"></i>
            </div></a></li>
          </ul>
          <div class="ztBtn">
          <a href="javascript:;" onClick={this.showModal} title="领取设计方案" class="inline">领取设计方案</a>
          </div>
        </div>
        </div>
        <div class="Wrap ztBg2">
        {/* <!--//5.清单式报价--> */}
        <div class="ztCon secBaojia" id="secBaojia">
          <div>
          <h2><span>5</span>清单式报价</h2>
          <p>让您知道您的每一分钱花在什么地方</p>
          </div>
          <div class="jsj">
          <div class="imgh">
            <img src={require('@/static/picture/secBaojia_jsj.png')} />
          </div>
          </div>
          <div class="info">
          <h3 class="hTit">透明详细报价，挤干装修水分</h3>
          <p class="hSubTit">低价不低质，一线品牌，精湛工艺，全程质检，把控质量，打造优质的装修体验</p>
          <ul class="clearfix">
            <li>
            <div class="pick ellipsis">
              标配
            </div>
            <div class="ico">
              <div class="imgh imgh11">
              <img src={require('@/static/picture/secBaojia_011.png')} />
              </div>
            </div><h3 class="title">全屋硬装</h3></li>
            <li>
            <div class="pick ellipsis">
              选配
            </div>
            <div class="ico">
              <div class="imgh imgh11">
              <img src={require('@/static/picture/secBaojia_021.png')} />
              </div>
            </div><h3 class="title">全屋软装</h3></li>
            <li>
            <div class="pick ellipsis">
              选配
            </div>
            <div class="ico">
              <div class="imgh imgh11">
              <img src={require('@/static/picture/secBaojia_031.png')} />
              </div>
            </div><h3 class="title">定制包</h3></li>
            <li id="end">
            <div class="pick ellipsis">
              入住
            </div>
            <div class="ico">
              <div class="imgh imgh11">
              <img src={require('@/static/picture/secBaojia_041.png')} />
              </div>
            </div><h3 class="title">您的新家</h3></li>
          </ul>
          </div>
        </div>
        {/* <!--//6.管家式服务--> */}
        <div class="ztCon secService" id="secService">
          <div class="ztTitle">
          <h2>管家式服务</h2>
          <p>5+1+1+1定制精装服务团队强强联手</p>
          </div>
          <a href="javascript:;"  onClick={this.showModal} title="领取设计方案" class="imga"><img src={require('@/static/picture/secService_00.png')} /></a>
        </div>
        {/* <!--//7.投资可控--> */}
        <div class="secControl ztCon" id="secControl">
          <div class="ztTitle">
          <h2>投资可控</h2>
          <p>品质让客户放心，服务让客户省心，价格让客户实惠</p>
          </div>
          <ul class="clearfix">
          <li>
            <div class="imga">
            <div class="imgh">
              <img src={require('@/static/picture/secControl_01.jpg')} />
            </div>
            <div class="text tran">
              <h3 class="tran">家庭<br />套房</h3>
              <h4 class="tran">family suite</h4>
              <a href="cases01.html" target="_blank" title="查看案例" class="view tran">查看案例</a>
            </div>
            </div></li>
          <li id="end">
            <div class="imga">
            <div class="imgh">
              <img src={require('@/static/picture/secControl_02.jpg')} />
            </div>
            <div class="text tran">
              <h3 class="tran">别墅<br />私宅</h3>
              <h4 class="tran">private villa</h4>
              <a href="cases02.html" target="_blank" title="查看案例" class="view tran">查看案例</a>
            </div>
            </div></li>
          <li>
            <div class="imga">
            <div class="imgh">
              <img src={require('@/static/picture/secControl_03.jpg')} />
            </div>
            <div class="text tran">
              <h3 class="tran">酒店<br />会所</h3>
              <h4 class="tran">hotel club</h4>
              <a href="cases03.html" target="_blank" title="查看案例" class="view tran">查看案例</a>
            </div>
            </div></li>
          <li id="end">
            <div class="imga">
            <div class="imgh">
              <img src={require('@/static/picture/secControl_04.jpg')} />
            </div>
            <div class="text tran">
              <h3 class="tran">样板间<br />工程</h3>
              <h4 class="tran">sample room</h4>
              <a href="cases.html" target="_blank" title="查看案例" class="view tran">查看案例</a>
            </div>
            </div></li>
          </ul>
        </div>
        </div>
        <div class="secIndent2 ztCon">
        <img src={require('@/static/picture/secIndentHt2.png')} />
        <form class="form usePlace formField clearfix" action="?c=post&amp;f=setok&amp;module_id=119" method="post" onsubmit="return pub_submit(this);" validator="contact,phone,area" field="contact,phone,area,button" autocomplete="off">
          <div class="table ext cls_contact">
          <div class="left">
            <span class="red">*</span> 您的姓名：
          </div>
          <div class="right">
            <div>
            <table cellpadding="0" cellspacing="0">
              <tbody>
              <tr>
                <td><input  onChange={this.nameChange} placeholder='请输入您的姓名' type="text" class="input-text" name="contact" id="contact" /></td>
                <td class="clue_on">&nbsp;请输入您的姓名</td>
              </tr>
              </tbody>
            </table>
            </div>
          </div>
          <div class="clear"></div>
          </div>
          <div class="table ext cls_phone">
          <div class="left">
            <span class="red">*</span> 您的手机：
          </div>
          <div class="right">
            <div>
            <table cellpadding="0" cellspacing="0">
              <tbody>
              <tr>
                <td><input  onChange={this.phoneChange} placeholder='请输入您的手机号码' type="text" class="input-text" name="phone" id="phone"  /></td>
                <td class="clue_on">&nbsp;请输入您的手机号码</td>
              </tr>
              </tbody>
            </table>
            </div>
          </div>
          <div class="clear"></div>
          </div>
          <div class="table ext cls_area">
          <div class="left">
            房屋面积：
          </div>
          <div class="right">
            <div>
            <table cellpadding="0" cellspacing="0">
              <tbody>
              <tr>
                <td><input  onChange={this.areaChange} placeholder='请输入您的面积' type="text" class="input-text" name="area" id="area"  /></td>
                <td class="clue_on">&nbsp;请输入您的面积</td>
              </tr>
              </tbody>
            </table>
            </div>
          </div>
          <div class="clear"></div>
          </div>
          <div class="table cls_button" id="end">
          <div class="right">
            <div type="submit" onClick={this.lingquClick1} class="button submit" id="_phpok_submit"><span>领取设计方案</span></div>
          </div>
          </div>
        </form>
        </div>
      </div>,
      //底部
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Modal title="领取你的设计方案" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} className='modal'>
        <Input placeholder='您的姓名'   onChange={this.nameChange2}></Input>
        <Input placeholder='您的手机号' onChange={this.phoneChange2}></Input>
        <Input placeholder='房屋面积'   onChange={this.areaChange2}></Input>
      </Modal>
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
