/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import {Input,message } from 'antd';
import './index.less';
import '@/static/css/style.css';
import '@/static/css/style_public.css';
import '@/static/css/minify.css';
import '@/static/css/minify9.css';
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
import request from "umi-request";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class PACK extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
      name:'',
      phone:'',
      name1:'',
      phone1:'',
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
  baomingClick=()=>{
    request.put("/api/fitment/fitmentOrder/save",{
      data: {
        datatype:2,
        linkName: this.state.name,
        linkPhone: this.state.phone,
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
  baomingClick1=()=>{
    request.put("/api/fitment/fitmentOrder/save",{
      data: {
        datatype:2,
        linkName: this.state.name1,
        linkPhone: this.state.phone1,
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

  render() {
    const children = [
      //导航条
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      <div class="Wrap ztPage ztPack">
        <div class="ztSec secBanner">
        <div class="ztWrap">
          <a href="javascript:;" onclick="javascript:openWin('kefu')" title="点击在线咨询" class="imga"><img src={require('@/static/picture/secBanner5.jpg')} /></a>
        </div>
        </div>
        <div class="secIndentWrap Wrap">
        <div class="ztCon">
          <ul class="clearfix">
          <li class="imga li1 clearfix"> 
            <div class="info">
            <h3 class="title ellipsis"><span class="num">01</span>一站购</h3>
            <div class="EnTit ellipsis">
              One stop shopping
            </div>
            <div class="subTit clamp">
              涵盖家具、灯具、窗帘、墙纸、挂画、饰品六大品类，全屋整体软装一站购齐
            </div>
            <p class="note clamp">专业化服务，<br />统筹、配送、安装一条龙服务</p>
            </div></li>
          <li class="imga li2 clearfix"> 
            <div class="info">
              <h3 class="title ellipsis"><span class="num">02</span>灵活搭 </h3>
              <div class="EnTit ellipsis">
                Flexible collocation
              </div>
              <div class="subTit clamp">
                6大品类，3000多种单品， 万种个性化设计配搭方案
              </div>
              <p class="note clamp">告别市场同质化套餐标配，<br />随心选、灵活搭，定制专属个性的家</p>
            </div>
          </li>
          <li class="imga li3 clearfix">
            <div class="info">
              <h3 class="title ellipsis"><span class="num">03</span>封顶价 </h3>
              <div class="EnTit ellipsis">
                Capped price
              </div>
              <div class="subTit clamp">
                只少不多封顶价，随心选
              </div>
              <p class="note clamp">拒绝[起始价]套路，以[最高价]封顶，<br />根据实际选择计价，价格透明</p>
            </div>
          </li>
          </ul>
          <div class="secOrder">
          <div class="ht">
            <p>报名前100名</p>
            <h3>免费软装设计</h3>
          </div>
          <form class="usePlace formField form clearfix">
            <div class="table ext cls_contact">
            <div class="left">
              <span class="red">*</span> 请输入您的称呼：
            </div>
            <div class="right">
              <div>
              <table cellpadding="0" cellspacing="0">
                <tbody>
                <tr>
                  <td><input type="text" onChange={this.nameChange} class="input-text" name="contact" id="contact" placeholder='请输入您的称呼'/></td>
                  <td class="clue_on">&nbsp;请输入您的称呼</td>
                </tr>
                </tbody>
              </table>
              </div>
            </div>
            <div class="clear"></div>
            </div>
            <div class="table ext cls_phone">
            <div class="left">
              <span class="red">*</span> 请输入您的手机号：
            </div>
            <div class="right">
              <div>
              <table cellpadding="0" cellspacing="0">
                <tbody>
                <tr>
                  <td><input type="text" onChange={this.phoneChange} class="input-text" name="phone" id="phone" placeholder='请输入您的手机号'/></td>
                  <td class="clue_on">&nbsp;请输入您的手机号</td>
                </tr>
                </tbody>
              </table>
              </div>
            </div>
            <div class="clear"></div>
            </div>
            <div class="table cls_button" id="end">
            <div class="right">
              <div onClick={this.baomingClick} class="button submit" id="_phpok_submit">立即报名</div>
            </div>
            </div>
          </form>
          <div class="tips">
            随后将把报名情况发送到您的手机
          </div>
          </div>
        </div>
        </div>
        <div class="secService Wrap">
        <div class="ztTitle">
          <h2 class="title"><span>国际化前沿设计</span><em>&middot;</em>美学与功能兼得</h2>
          <div class="">
            <p class="note">专业设计师一对一服务，定制专属你家的软装方案</p>
          </div>
        </div>
        <div class="bg">
          <ul class="ztCon">
          <li class="imga clearfix">
            <div class="photo scale">
            <div class="imgh imgh11">
              <img src={require('@/static/picture/secService_01.png')} />
            </div>
            </div>
            <div class="info">
            <h3 class="title ellipsis">全屋定制</h3>
            <p class="note clamp">鞋柜、衣柜、榻榻米、卡座、书柜、阳台柜</p>
            </div></li>
          <li class="imga clearfix">
            <div class="photo scale">
            <div class="imgh imgh11">
              <img src={require('@/static/picture/secService_02.png')} />
            </div>
            </div>
            <div class="info">
            <h3 class="title ellipsis">家居产品</h3>
            <p class="note clamp">活动家具、灯具、地毯、布艺、工艺品</p>
            </div></li>
          <li class="imga clearfix">
            <div class="photo scale">
            <div class="imgh imgh11">
              <img src={require('@/static/picture/secService_03.png')} />
            </div>
            </div>
            <div class="info">
            <h3 class="title ellipsis">墙面美化</h3>
            <p class="note clamp">墙纸、墙布、定制墙面、护墙板</p>
            </div></li>
          <li class="imga clearfix" id="end">
            <div class="photo scale">
            <div class="imgh imgh11">
              <img src={require('@/static/picture/secService_04.png')} />
            </div>
            </div>
            <div class="info">
            <h3 class="title ellipsis">硬装微改</h3>
            <p class="note clamp">灯位开关、局部造型、洗衣台、户外</p>
            </div></li>
          <li class="imga clearfix">
            <div class="photo scale">
            <div class="imgh imgh11">
              <img src={require('@/static/picture/secService_05.png')} />
            </div>
            </div>
            <div class="info">
            <h3 class="title ellipsis">全程托管</h3>
            <p class="note clamp">把控关键节点、全程过程监控</p>
            </div></li>
          <li class="imga clearfix">
            <div class="photo scale">
            <div class="imgh imgh11">
              <img src={require('@/static/picture/secService_06.png')} />
            </div>
            </div>
            <div class="info">
            <h3 class="title ellipsis">项目统筹</h3>
            <p class="note clamp">进度、配送、安装、保洁、售后等</p>
            </div></li>
          <li class="imga clearfix">
            <div class="photo scale">
            <div class="imgh imgh11">
              <img src={require('@/static/picture/secService_07.png')} />
            </div>
            </div>
            <div class="info">
            <h3 class="title ellipsis">专业团队</h3>
            <p class="note clamp">软装团队+项目管家团队</p>
            </div></li>
          <li class="imga clearfix" id="end">
            <div class="photo scale">
            <div class="imgh imgh11">
              <img src={require('@/static/picture/secService_08.png')} />
            </div>
            </div>
            <div class="info">
            <h3 class="title ellipsis">无忧售后</h3>
            <p class="note clamp">产品空间维护、全力协助</p>
            </div></li>
          </ul>
        </div>
        </div>
        <div class="secQuality Wrap">
        <div class="ztTitle">
          <h2 class="title"><span>全球好货甄选</span><em>&middot;</em>性价比与品质兼顾</h2>
          <p class="note">全球集采一手资源，跳过中间商，帮您节省30%费用</p>
        </div>
        <div class="bg">
          <ul class="ztCon">
          <li class="imga">
            <div class="photo">
              <div class="imgh">
                <img src={require('@/static/picture/secQuality_01.jpg')} />
              </div>
            </div>
            <div className='text'>
              <span>严选</span>
              <div class="line"></div>
              <pre class="note clamp">
                圆色软装有专业的甄选团队
                每年奔赴全球各地，严选一线品牌
                为高品质家装提供高品质材料
              </pre>
            </div>
          </li>
          <li class="imga">
            <div class="photo">
            <div class="imgh">
              <img src={require('@/static/picture/secQuality_02.jpg')} />
            </div>
            </div>
            <div className='text'>
              <span>采集</span>
              <div class="line"></div>
            <pre class="note clamp">
    圆色软装打通国内外家居通道
    实行全球采购，从工厂直接到家
    跳过中间商，直省30%费用
      </pre>
            </div>
      </li>
          <li class="imga">
            <div class="photo">
            <div class="imgh">
              <img src={require('@/static/picture/secQuality_03.jpg')} />
            </div>
            </div>
            <div className='text'>
              <span>仓储</span>
              <div class="line"></div>
            <pre class="note clamp">
    圆色软装自建高位立体仓库
    1个上海国际总仓，26个分仓
    强大货源保障，自有物流体系配送	
      </pre>
            </div>
      </li>
          <li class="imga" id="end">
            <div class="photo">
            <div class="imgh">
              <img src={require('@/static/picture/secQuality_04.jpg')} />
            </div>
            </div>
            <div className='text'>
              <span>配送</span>
              <div class="line"></div>
            <pre class="note clamp">
    圆色软装专业交付服务
    统筹、配送、安装一条龙
    轻松住进理想新家	
      </pre>
            </div>
      </li>
          </ul>
        </div>
        </div>
        <div class="secPackage Wrap">
        <div class="ztTitle">
          <h2 class="title"><span>全屋软装包</span><em>&middot;</em>精挑细选「真整配」</h2>
          <div class="">
            <p class="note">全面、细致、贴心的同时满足审美、省心与省钱</p>
          </div>
        </div>
        <ul class="ztCon">
          <li class="itemLi imga" data="ztHalfSlide" data-view="1" data-auto="999" data-space="0" data-loop="0">
          <div class="infoBox clearfix">
            {/* <div class="info" style="background: url(@/static/image/secPackageBg_01.jpg) center no-repeat;"> */}
            <div class="info" className='info1 infoLeft'>
            <h3 class="title ellipsis">圆色品质软装包</h3>
            <div class="subTit ellipsis">
              18件配套&middot;甄选主推
            </div>
            <div class="note">
              <i class="icon t"></i>
              <pre class="clamp">
    风格定位：北欧  现代
    材料亮点：原材料为国产木
          </pre>
              <i class="icon b"></i>
            </div>
            <div class="priceBox clearfix">
              <div class="price">
              <span>￥</span>35800
              </div>
              <a href="javascript:;" onclick="javascript:J_ajaxOrderWin('抢免费设计','/indent?ajax=1&amp;designer=148&amp;subject=单页管理-抢免费设计-全屋软装')" title="抢免费设计" class="inline btn">抢免费设计</a>
            </div>
            </div>
            <div class="photo">
            <div class="posr">
              <div class="hd">
              <ul class="hdli2">
                <li class="inline">客餐厅</li>
                <li class="inline">主卧</li>
                <li class="inline">次卧</li>
                <li class="inline">阳台</li>
                <li class="inline">收纳</li>
              </ul>
              <ul class="pager none"></ul>
              </div>
              <div class="bd swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                <div class="imgh">
                  <img src={require('@/static/picture/secPackage1_01.jpg')} />
                </div>
                <div class="imgInfo">
                  <span>家具</span>
                  <em>沙发（3+2+1）+茶几+电视柜+餐桌+餐椅x6</em> 
                  <span>窗帘</span> 
                  <span>灯具</span> 
                </div>
                </div>
                <div class="swiper-slide">
                <div class="imgh">
                  <img src={require('@/static/picture/secPackage1_02.jpg')} />
                </div>
                <div class="imgInfo">
                  <span>家具</span>
                  <em>床1.8m+床头柜x2</em> 
                  <span>墙纸</span> 
                  <span>窗帘</span> 
                  <span>灯具</span> 
                </div>
                </div>
                <div class="swiper-slide">
                <div class="imgh">
                  <img src={require('@/static/picture/secPackage1_03.jpg')} />
                </div>
                <div class="imgInfo">
                  <span>家具</span>
                  <em>床1.8m+床头柜x2</em> 
                  <span>墙纸</span> 
                  <span>窗帘</span> 
                  <span>灯具</span> 
                </div>
                </div>
                <div class="swiper-slide">
                <div class="imgh">
                  <img src={require('@/static/picture/secPackage1_04.jpg')} />
                </div>
                <div class="imgInfo">
                  <span>灯具</span> 
                </div>
                </div>
                <div class="swiper-slide">
                <div class="imgh">
                  <img src={require('@/static/picture/secPackage1_05.jpg')} />
                </div>
                <div class="imgInfo">
                  <span>定制</span>
                  <em>衣柜+鞋柜+酒柜+玄关柜</em> 
                </div>
                </div>
              </div>
              </div>
            </div>
            </div>
          </div>
          <div class="packagesBox clearfix">
            <div class="packages clearfix">
            <div class="boxL">
              <div class="ht">
              <div class="inline">
                全屋软装包
                <span>￥</span>
                <em>35888</em>
              </div>
              </div>
              <ol>
              <li><a href="javascript:void(0);" class="imga ellipsis" index="1"><b>客餐厅</b>配套 <span>家具</span><em>沙发（3+2+1）+茶几+电视柜+餐桌+餐椅x6</em> <span>窗帘</span> <span>灯具</span> </a></li>
              <li><a href="javascript:void(0);" class="imga ellipsis" index="2"><b>主卧</b>配套 <span>家具</span><em>床1.8m+床头柜x2</em> <span>墙纸</span> <span>窗帘</span> <span>灯具</span> </a></li>
              <li><a href="javascript:void(0);" class="imga ellipsis" index="3"><b>次卧</b>配套 <span>家具</span><em>床1.8m+床头柜x2</em> <span>墙纸</span> <span>窗帘</span> <span>灯具</span> </a></li>
              <li><a href="javascript:void(0);" class="imga ellipsis" index="4"><b>阳台</b>配套 <span>灯具</span> </a></li>
              </ol>
            </div>
            <div class="boxR">
              <div class="ht">
              <div class="inline">
                +定制包
              </div>
              </div>
              <a href="javascript:void(0);" class="imga" index="5"><b><i>收纳</i>配套</b><span>定制</span><br /><em>衣柜+鞋柜+酒柜+玄关柜</em> </a>
              <div class="priceDZ">
              一口价：￥
              <cite>52888</cite>
              </div>
            </div>
            </div>
            <div class="content ove">
            <div class="nano ove" data="nanoScroll">
              <div class="nano-content">
              <div class="sheight">
                高雅的深灰色成为统领空间的主体色，流畅的线条成了餐厅惊鸿一蹩的点缀，使得现代风格的生活美学在空间中充分发酵。 这个家，灰的太高级了！房屋通透明亮、设计简单大方，尤其是客厅和餐厅，特别喜欢。整体很符合我们的期望，不对，是超出了我们的期望，感谢圆色软装设计！ 
              </div>
              </div>
            </div>
            </div>
          </div></li>
          <li class="itemLi imga evenLi" data="ztHalfSlide" data-view="1" data-auto="999" data-space="0" data-loop="0">
          <div class="infoBox clearfix">
            {/* <div class="info" style="background: url(@/static/image/secPackageBg_02.jpg) center no-repeat;"> */}
            <div class="info"  className='info1 infoLeft'>
            <h3 class="title ellipsis">圆色奢华软装包</h3>
            <div class="subTit ellipsis">
              18件配套&middot;优质之选
            </div>
            <div class="line"></div>
            <div class="note">
              <i class="icon t"></i>
              <pre class="clamp">
    风格定位：简欧、轻奢、简中、极简
    材料亮点：原材料为国产木
        </pre>
              <i class="icon b"></i>
            </div>
            <div class="priceBox clearfix">
              <div class="price">
              <span>￥</span>51888
              </div>
              <a href="javascript:;" onclick="javascript:J_ajaxOrderWin('抢免费设计','/indent?ajax=1&amp;designer=148&amp;subject=单页管理-抢免费设计-全屋软装')" title="抢免费设计" class="inline btn">抢免费设计</a>
            </div>
            </div>
            <div class="photo">
            <div class="posr">
              <div class="hd">
              <ul class="hdli2">
                <li class="inline">客餐厅</li>
                <li class="inline">主卧</li>
                <li class="inline">次卧</li>
                <li class="inline">阳台</li>
                <li class="inline">收纳</li>
              </ul>
              <ul class="pager none"></ul>
              </div>
              <div class="bd swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                <div class="imgh">
                  <img src={require('@/static/picture/secPackage2_01.jpg')} />
                </div>
                <div class="imgInfo">
                  <span>家具</span>
                  <em>沙发（3+2+1）+茶几+电视柜+餐桌+餐椅x6</em> 
                  <span>窗帘</span> 
                  <span>灯具</span> 
                </div>
                </div>
                <div class="swiper-slide">
                <div class="imgh">
                  <img src={require('@/static/picture/secPackage2_02.jpg')} />
                </div>
                <div class="imgInfo">
                  <span>家具</span>
                  <em>床1.8m+床头柜x2</em> 
                  <span>墙纸</span> 
                  <span>窗帘</span> 
                  <span>灯具</span> 
                </div>
                </div>
                <div class="swiper-slide">
                <div class="imgh">
                  <img src={require('@/static/picture/secPackage2_03.jpg')} />
                </div>
                <div class="imgInfo">
                  <span>家具</span>
                  <em>床1.8m+床头柜x2</em> 
                  <span>墙纸</span> 
                  <span>窗帘</span> 
                  <span>灯具</span> 
                </div>
                </div>
                <div class="swiper-slide">
                <div class="imgh">
                  <img src={require('@/static/picture/secPackage2_04.jpg')} />
                </div>
                <div class="imgInfo">
                  <span>灯具</span> 
                </div>
                </div>
                <div class="swiper-slide">
                <div class="imgh">
                  <img src={require('@/static/picture/secPackage2_05.jpg')} />
                </div>
                <div class="imgInfo">
                  <span>定制</span>
                  <em>衣柜+鞋柜+酒柜+玄关柜</em> 
                </div>
                </div>
              </div>
              </div>
            </div>
            </div>
          </div>
          <div class="packagesBox clearfix">
            <div class="packages clearfix">
            <div class="boxL">
              <div class="ht">
              <div class="inline">
                全屋软装包
                <span>￥</span>
                <em>51888</em>
              </div>
              </div>
              <ol>
              <li><a href="javascript:void(0);" class="imga ellipsis" index="1"><b>客餐厅</b>配套 <span>家具</span><em>沙发（3+2+1）+茶几+电视柜+餐桌+餐椅x6</em> <span>窗帘</span> <span>灯具</span> </a></li>
              <li><a href="javascript:void(0);" class="imga ellipsis" index="2"><b>主卧</b>配套 <span>家具</span><em>床1.8m+床头柜x2</em> <span>墙纸</span> <span>窗帘</span> <span>灯具</span> </a></li>
              <li><a href="javascript:void(0);" class="imga ellipsis" index="3"><b>次卧</b>配套 <span>家具</span><em>床1.8m+床头柜x2</em> <span>墙纸</span> <span>窗帘</span> <span>灯具</span> </a></li>
              <li><a href="javascript:void(0);" class="imga ellipsis" index="4"><b>阳台</b>配套 <span>灯具</span> </a></li>
              </ol>
            </div>
            <div class="boxR">
              <div class="ht">
              <div class="inline">
                +定制包
              </div>
              </div>
              <a href="javascript:void(0);" class="imga" index="5"><b><i>收纳</i>配套</b><span>定制</span><br /><em>衣柜+鞋柜+酒柜+玄关柜</em> </a>
              <div class="priceDZ">
              一口价：￥
              <cite>68888</cite>
              </div>
            </div>
            </div>
            <div class="content ove">
            <div class="nano ove" data="nanoScroll">
              <div class="nano-content">
              <div class="sheight">
                高雅的深灰色成为统领空间的主体色，流畅的线条成了餐厅惊鸿一蹩的点缀，使得现代风格的生活美学在空间中充分发酵。 这个家，灰的太高级了！房屋通透明亮、设计简单大方，尤其是客厅和餐厅，特别喜欢。整体很符合我们的期望，不对，是超出了我们的期望，感谢圆色软装设 
              </div>
              </div>
            </div>
            </div>
          </div></li>
          <li class="itemLi imga" data="ztHalfSlide" data-view="1" data-auto="999" data-space="0" data-loop="0">
          <div class="infoBox clearfix">
            {/* <div class="info" style="background: url(@/static/image/secPackageBg_01.jpg) center no-repeat;"> */}
            <div class="info"  className='info1 infoLeft'>
            <h3 class="title ellipsis">圆色至尊软装</h3>
            <div class="subTit ellipsis">
              18件配套&middot;气质奢华
            </div>
            <div class="line"></div>
            <div class="note">
              <i class="icon t"></i>
              <pre class="clamp">
    风格定位：中式 、港式、欧式、美式
    材料亮点：进口真皮、进口原木
        </pre>
              <i class="icon b"></i>
            </div>
            <div class="priceBox clearfix">
              <div class="price">
              <span>￥</span>74988
              </div>
              <a href="javascript:;" onclick="javascript:J_ajaxOrderWin('抢免费设计','/indent?ajax=1&amp;designer=148&amp;subject=单页管理-抢免费设计-全屋软装')" title="抢免费设计" class="inline btn">抢免费设计</a>
            </div>
            </div>
            <div class="photo">
            <div class="posr">
              <div class="hd">
              <ul class="hdli2">
                <li class="inline">客餐厅</li>
                <li class="inline">主卧</li>
                <li class="inline">次卧</li>
                <li class="inline">阳台</li>
                <li class="inline">收纳</li>
              </ul>
              <ul class="pager none"></ul>
              </div>
              <div class="bd swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                <div class="imgh">
                  <img src={require('@/static/picture/secPackage3_01.jpg')} />
                </div>
                <div class="imgInfo">
                  <span>家具</span>
                  <em>沙发（3+2+1）+茶几+电视柜+餐桌+餐椅x6</em> 
                  <span>窗帘</span> 
                  <span>灯具</span> 
                </div>
                </div>
                <div class="swiper-slide">
                <div class="imgh">
                  <img src={require('@/static/picture/secPackage3_02.jpg')} />
                </div>
                <div class="imgInfo">
                  <span>家具</span>
                  <em>床1.8m+床头柜x2</em> 
                  <span>墙纸</span> 
                  <span>窗帘</span> 
                  <span>灯具</span> 
                </div>
                </div>
                <div class="swiper-slide">
                <div class="imgh">
                  <img src={require('@/static/picture/secPackage3_03.jpg')} />
                </div>
                <div class="imgInfo">
                  <span>家具</span>
                  <em>床1.8m+床头柜x2</em> 
                  <span>墙纸</span> 
                  <span>窗帘</span> 
                  <span>灯具</span> 
                </div>
                </div>
                <div class="swiper-slide">
                <div class="imgh">
                  <img src={require('@/static/picture/secPackage3_04.jpg')} />
                </div>
                <div class="imgInfo">
                  <span>灯具</span> 
                </div>
                </div>
                <div class="swiper-slide">
                <div class="imgh">
                  <img src={require('@/static/picture/secPackage3_05.jpg')} />
                </div>
                <div class="imgInfo">
                  <span>定制</span>
                  <em>衣柜+鞋柜+酒柜+玄关柜</em> 
                </div>
                </div>
              </div>
              </div>
            </div>
            </div>
          </div>
          <div class="packagesBox clearfix">
            <div class="packages clearfix">
            <div class="boxL">
              <div class="ht">
              <div class="inline">
                全屋软装包
                <span>￥</span>
                <em>74988</em>
              </div>
              </div>
              <ol>
              <li><a href="javascript:void(0);" class="imga ellipsis" index="1"><b>客餐厅</b>配套 <span>家具</span><em>沙发（3+2+1）+茶几+电视柜+餐桌+餐椅x6</em> <span>窗帘</span> <span>灯具</span> </a></li>
              <li><a href="javascript:void(0);" class="imga ellipsis" index="2"><b>主卧</b>配套 <span>家具</span><em>床1.8m+床头柜x2</em> <span>墙纸</span> <span>窗帘</span> <span>灯具</span> </a></li>
              <li><a href="javascript:void(0);" class="imga ellipsis" index="3"><b>次卧</b>配套 <span>家具</span><em>床1.8m+床头柜x2</em> <span>墙纸</span> <span>窗帘</span> <span>灯具</span> </a></li>
              <li><a href="javascript:void(0);" class="imga ellipsis" index="4"><b>阳台</b>配套 <span>灯具</span> </a></li>
              </ol>
            </div>
            <div class="boxR">
              <div class="ht">
              <div class="inline">
                +定制包
              </div>
              </div>
              <a href="javascript:void(0);" class="imga" index="5"><b><i>收纳</i>配套</b><span>定制</span><br /><em>衣柜+鞋柜+酒柜+玄关柜</em> </a>
              <div class="priceDZ">
              一口价：￥
              <cite>91988</cite>
              </div>
            </div>
            </div>
            <div class="content ove">
            <div class="nano ove" data="nanoScroll">
              <div class="nano-content">
              <div class="sheight">
                高雅的深灰色成为统领空间的主体色，流畅的线条成了餐厅惊鸿一蹩的点缀，使得现代风格的生活美学在空间中充分发酵。 这个家，灰的太高级了！房屋通透明亮、设计简单大方，尤其是客厅和餐厅，特别喜欢。整体很符合我们的期望，不对，是超出了我们的期望，感谢圆色软装设计！ 
              </div>
              </div>
            </div>
            </div>
          </div></li>
        </ul>
        </div>
        <div class="secBrand wrap">
        <div class="ztTitle">
          <h2 class="title"><span>品质服务商</span><em>&middot;</em>世界范围优选制造商</h2>
          <p class="note">汇集全球大牌，尽享品质生活</p>
        </div>
        <div class="ztCon" data="halfSlide" data-auto="999" data-space="70" data-view="6">
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
          <a href="javascript:void(0);" class="sbtn prev"><i class="icon"></i></a>
          <a href="javascript:void(0);" class="sbtn next"><i class="icon"></i></a>
        </div>


       
        </div>
        <div class="secCases Wrap" data="halfSlide" data-view="1" data-auto="999" data-space="0" data-loop="0">
        <div class="ztTitle">
          <h2 class="title"><span>真实案例</span><em>&middot;</em>为你所想为你所实现</h2>
          <p class="note">华丽转身，让别人惊叹你的家</p>
        </div>
        <div class="bd swiper-container ztCon">
          <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <div class="imgh">
            <img src={require('@/static/picture/secCases_01.jpg')} />
            </div>
            <div class="info clearfix">
            <div class="box1 box">
              <div class="ht">
              BEFORE / 改造
              <span>前</span>
              </div>
              <div class="note clamp">
              比较粗糙没有一个明确的装修定位
              </div>
            </div>
            <div class="box2 box">
              <div class="ht">
              AFTER / 改造
              <span>后</span>
              </div>
              <div class="note clamp">
              结合不同户型的大小及硬装效果，搭配大小适宜的家具，让家中的动线更随意、行动更舒适、更安全
              </div>
            </div>
            </div></li>
          <li class="swiper-slide">
            <div class="imgh">
            <img src={require('@/static/picture/secCases_02.jpg')} />
            </div>
            <div class="info clearfix">
            <div class="box1 box">
              <div class="ht">
              BEFORE / 改造
              <span>前</span>
              </div>
              <div class="note clamp">
              整体印象阴暗潮湿，风格老旧
              </div>
            </div>
            <div class="box2 box">
              <div class="ht">
              AFTER / 改造
              <span>后</span>
              </div>
              <div class="note clamp">
              通透明亮，结合了硬装和软装的搭配，更加舒适和放松
              </div>
            </div>
            </div></li>
          <li class="swiper-slide">
            <div class="imgh">
            <img src={require('@/static/picture/secCases_03.jpg')} />
            </div>
            <div class="info clearfix">
            <div class="box1 box">
              <div class="ht">
              BEFORE / 改造
              <span>前</span>
              </div>
              <div class="note clamp">
              洗漱台高低参差不齐，颜色搭配颜色差强人意
              </div>
            </div>
            <div class="box2 box">
              <div class="ht">
              AFTER / 改造
              <span>后</span>
              </div>
              <div class="note clamp">
              干净整洁，色彩搭配于整体空间融为一体
              </div>
            </div>
            </div></li>
          <li class="swiper-slide">
            <div class="imgh">
            <img src={require('@/static/picture/secCases_04.jpg')} />
            </div>
            <div class="info clearfix">
            <div class="box1 box">
              <div class="ht">
              BEFORE / 改造
              <span>前</span>
              </div>
              <div class="note clamp">
              空间利用不合理，风格老旧，家具陈旧，室内采光差
              </div>
            </div>
            <div class="box2 box">
              <div class="ht">
              AFTER / 改造
              <span>后</span>
              </div>
              <div class="note clamp">
              收纳更加简单，空间利用合理分配，室内宽敞明亮
              </div>
            </div>
            </div></li>
          </ul>
          <a href="javascript:void(0);" class="sbtn prev"><i class="icon"></i></a>
          <a href="javascript:void(0);" class="sbtn next"><i class="icon"></i></a>
        </div>
        <div class="hd"></div>
        </div>
        <div class="secProcess Wrap">
        <div class="ztTitle">
          <h2 class="title"><span>服务流程</span><em>&middot;</em>软装入住那些事儿</h2>
          <p class="note">一应俱全的美学软装解决方案</p>
        </div>
        <ul class="ztSec">
          <li class="ztWrap oddLi clearfix">
          <div class="photo">
            <div class="imgh">
            <img src={require('@/static/picture/secProcess_01.jpg')} />
            </div>
          </div>
          {/* <div class="info" style="background: url(@/static/image/secProcessBg_01.jpg) center no-repeat;"> */}
          <div class="info">
            <i class="icon"></i>
            <h3 class="title ellipsis">前期设计统筹</h3>
            <pre class="note clamp">沟通方案<br />报价预算</pre>
            <ol class="process clearfix">
            <li><h3 class="tit">了解咨询</h3>
              <div class="num">
              1
              </div></li>
            <li><h3 class="tit">签订合同</h3>
              <div class="num">
              2
              </div></li>
            <li><h3 class="tit">上门测量</h3>
              <div class="num">
              3
              </div></li>
            <li><h3 class="tit">设计师1v1沟通</h3>
              <div class="num">
              4
              </div></li>
            <li><h3 class="tit">软装设计</h3>
              <div class="num">
              5
              </div></li>
            <li id="end"><h3 class="tit">方案报价</h3>
              <div class="num">
              6
              </div></li>
            </ol>
          </div></li>
          <li class="imga evenLi">
          {/* <div class="info" style="background:url(@/static/image/secProcessBg_02.jpg) center no-repeat;"> */}
          <div class="info">
            <i class="icon"></i>
            <h3 class="title ellipsis">后期验货安装 </h3>
            <pre class="note clamp">送货安装<br />售后保修</pre>
            <ol class="process clearfix">
            <li><h3 class="tit">确认产品</h3>
              <div class="num">
              1
              </div></li>
            <li><h3 class="tit">服务管家</h3>
              <div class="num">
              2
              </div></li>
            <li><h3 class="tit">物流配送</h3>
              <div class="num">
              3
              </div></li>
            <li><h3 class="tit">产品安装</h3>
              <div class="num">
              4
              </div></li>
            <li><h3 class="tit">陈列摆放</h3>
              <div class="num">
              5
              </div></li>
            <li id="end"><h3 class="tit">验收入住</h3>
              <div class="num">
              6
              </div></li>
            </ol>
          </div>
          <div class="photo">
            <div class="imgh">
            <img src={require('@/static/picture/secProcess_02.jpg')} />
            </div>
          </div></li>
        </ul>
        </div>
        <div class="secOrder2 ztCon">
        <div class="bg">
          <div class="ht clearfix">
          <div class="tips">
            随后将把报名情况发送到您的手机
          </div>
          <p>报名前100名</p>
          <h3>免费软装设计</h3>
          </div>
          <form class="usePlace formField form clearfix" action="?c=post&amp;f=setok&amp;module_id=119" method="post" onsubmit="return pub_submit(this);" validator="contact,phone" field="contact,phone,button">
          <input type="hidden" id="isvcode" name="isvcode" value="1" />
          <input type="hidden" id="totype" name="totype" value="ajax" />
          <input type="hidden" id="tourl" name="tourl" value="goback" />
          <input type="hidden" id="tomsg" name="tomsg" value="提交成功，我们将第一时间与您取得联系！" />
          <input type="hidden" id="subject" name="subject" value="来源：PC-全屋软装[Url:https://www.ysgjrz.com/pack.html，IP:39.128.22.25]" />
          <div class="table ext cls_contact">
            <div class="left">
            <span class="red">*</span> 请输入您的称呼：
            </div>
            <div class="right">
            <div>
              <table cellpadding="0" cellspacing="0">
              <tbody>
                <tr>
                <td><input type="text" onChange={this.nameChange1} class="input-text" name="contact" id="contact" placeholder='请输入您的称呼'/></td>
                <td class="clue_on">&nbsp;请输入您的称呼</td>
                </tr>
              </tbody>
              </table>
            </div>
            </div>
            <div class="clear"></div>
          </div>
          <div class="table ext cls_phone">
            <div class="left">
            <span class="red">*</span> 请输入您的手机号：
            </div>
            <div class="right">
            <div>
              <table cellpadding="0" cellspacing="0">
              <tbody>
                <tr>
                <td><input type="text" onChange={this.phoneChange1} class="input-text" name="phone" id="phone" placeholder="请输入您的手机号"/></td>
                <td class="clue_on">&nbsp;请输入您的手机号</td>
                </tr>
              </tbody>
              </table>
            </div>
            </div>
            <div class="clear"></div>
          </div>
          <div class="table cls_button" id="end">
            <div class="right">
            <div onClick={this.baomingClick1} class="button submit" id="_phpok_submit">立即报名</div>
            </div>
          </div>
          </form>
        </div>
        </div>
      </div>,
      //底部
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper packBg"
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
