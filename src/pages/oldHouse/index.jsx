/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import './index.less';
import '@/static/css/style.css';
import '@/static/css/style_public.css';
import '@/static/css/minify.css';
import '@/static/css/minify3.css';
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
import {Input,message,Button} from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import request from "umi-request";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class OLDHOUSE extends React.Component {
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
      name3:'',
      phone3:'',
      area3:'',
      display:1,
      disabledModel:false,
      bannerCurrent:0,
      bannerCurrent1:0,
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
  nameChange3=e=>{
    console.log(e.target.value);
    this.setState({
      name3:e.target.value
    })
  }
  phoneChange3=e=>{
    console.log(e.target.value);
    this.setState({
      phone3:e.target.value
    })
  }
  areaChange3=e=>{
    console.log(e.target.value);
    this.setState({
      area3:e.target.value
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
  lingquClick2=()=>{
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
  }
  lingquClick3=()=>{
    request.put("/api/fitment/fitmentOrder/save",{
      data: {
        datatype:2,
        linkName: this.state.name3,
        linkPhone: this.state.phone3,
        area: this.state.area3,
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
  roomClick=(e)=>{
    console.log(e);
    this.setState({
      display:e,
    })
  }
  bannerChange(type,current){
    console.log(current)
    this.setState({
      bannerCurrent:current,
    })
  }
  bannerChange1(type,current){
    console.log(current)
    this.setState({
      bannerCurrent1:current,
    })
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
      <div class="Wrap ztPage ztOldHouse">
        <div class="ztSec secBanner">
          <div class="ztWrap">
            <img src={require('@/static/picture/secBanner1.jpg')}/>
          </div>
        </div>
        <div class="Wrap secOrder secOrder01">
          <div class="ztCon">
            <div class="container">
            <div class="ht clearfix">
              <h3><em>预约设计，给老房<span>换<span>新颜</span></span></em><cite>为热爱生活的你提供旧房整装解决方案</cite></h3>
            </div>
            <form class="form usePlace clearfix" action="?c=post&amp;f=setok&amp;module_id=119" method="post" onsubmit="return zt_submit(this);">
              <div class="table ext cls_contact">
              <div class="left">
                <span class="red">*</span> 您的姓名：
              </div>
              <div class="right">
                <div>
                <table cellpadding="0" cellspacing="0">
                  <tbody>
                  <tr>
                    <td><input onChange={this.nameChange} placeholder='请输入您的姓名' type="text" class="input-text" name="contact" id="contact" /></td>
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
                <span class="red">*</span> 手机号码：
              </div>
              <div class="right">
                <div>
                <table cellpadding="0" cellspacing="0">
                  <tbody>
                  <tr>
                    <td><input onChange={this.phoneChange} placeholder='请输入您的手机号码' type="text" class="input-text" name="phone" id="phone" /></td>
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
                    <td><input onChange={this.areaChange} placeholder='请输入您的房屋面积' type="text" class="input-text" name="area" id="area" /></td>
                    <td class="clue_on">&nbsp;请输入您的房屋面积</td>
                  </tr>
                  </tbody>
                </table>
                </div>
              </div>
              <div class="clear"></div>
              </div>
              <div class="table cls_button" id="end">
              <div class="right">
                <div  onClick={this.lingquClick} type="submit" class="button" id="_phpok_submit">领取改造方案</div>
              </div>
              </div>
            </form>
            </div>
          </div>
          </div>
          <div class="Wrap secWorry">
          <div class="ztCon">
            <div class="ztTitle">
            <h2><span>这</span>些旧房问题你遇到了吗</h2>
            <br />
            <p>也许这些问题长期困扰着你</p>
            </div>
            <div class="worry">
            <div class="imga">
              <img src={require('@/static/picture/secWorry.png')} />
            </div>
            </div>
            <div class="scruple clearfix">
            <h3 class="ht"><span>说起旧房改造你可能还有这些<em>顾虑</em>：</span></h3>
            <ul class="clearfix">
              <li>
              <div class="imga">
                <div class="imgh">
                <img src={require('@/static/picture/secWorry_scruple_01.jpg')} />
                <h3 class="title ellipsis">拆改破坏承重墙</h3>
                </div>
              </div></li>
              <li>
              <div class="imga">
                <div class="imgh">
                <img src={require('@/static/picture/secWorry_scruple_02.jpg')} />
                <h3 class="title ellipsis">后期增项超出预算</h3>
                </div>
              </div></li>
              <li>
              <div class="imga">
                <div class="imgh">
                <img src={require('@/static/picture/secWorry_scruple_03.jpg')} />
                <h3 class="title ellipsis">材料污染危及健康</h3>
                </div>
              </div></li>
              <li>
              <div class="imga">
                <div class="imgh">
                <img src={require('@/static/picture/secWorry_scruple_04.jpg')} />
                <h3 class="title ellipsis">装修工期一拖再拖</h3>
                </div>
              </div></li>
            </ul>
            </div>
            <div class="order clearfix">
            <div class="list fl" data="ztSlideV" data-view="auto">
              <p class="ht">已有<span>230</span>业主成功领取方案</p>
              <div class="bd swiper-container">
              <div class="swiper-wrapper"> 
                <ul class="swiper-slide clearfix"> 
                  <li><em class="e1">郑女士</em><em class="e2">139****2511</em><em class="e3">领取了方案</em></li> 
                  <li><em class="e1">杨女士</em><em class="e2">181****8384</em><em class="e3">领取了方案</em></li> 
                </ul> 
                <ul class="swiper-slide clearfix"> 
                  <li><em class="e1">吕女士</em><em class="e2">187****4631</em><em class="e3">领取了方案</em></li> 
                  <li><em class="e1">施女士</em><em class="e2">187****3772</em><em class="e3">领取了方案</em></li> 
                </ul> 
                <ul class="swiper-slide clearfix"> 
                  <li><em class="e1">郑先生</em><em class="e2">184****7555</em><em class="e3">领取了方案</em></li> 
                  <li><em class="e1">卫女士</em><em class="e2">188****6958</em><em class="e3">领取了方案</em></li> 
                </ul> 
                <ul class="swiper-slide clearfix"> 
                  <li><em class="e1">曹先生</em><em class="e2">134****1163</em><em class="e3">领取了方案</em></li> 
                  <li><em class="e1">吕女士</em><em class="e2">187****1913</em><em class="e3">领取了方案</em></li> 
                </ul> 
                <ul class="swiper-slide clearfix"> 
                  <li><em class="e1">陈女士</em><em class="e2">152****1908</em><em class="e3">领取了方案</em></li> 
                  <li><em class="e1">陶女士</em><em class="e2">154****1272</em><em class="e3">领取了方案</em></li> 
                </ul> 
                <ul class="swiper-slide clearfix"> 
                  <li><em class="e1">施先生</em><em class="e2">138****4974</em><em class="e3">领取了方案</em></li> 
                  <li><em class="e1">许女士</em><em class="e2">136****7389</em><em class="e3">领取了方案</em></li> 
                </ul> 
                <ul class="swiper-slide clearfix"> 
                  <li><em class="e1">杨先生</em><em class="e2">138****5835</em><em class="e3">领取了方案</em></li> 
                  <li><em class="e1">施女士</em><em class="e2">186****8133</em><em class="e3">领取了方案</em></li> 
                </ul> 
                <ul class="swiper-slide clearfix"> 
                  <li><em class="e1">王先生</em><em class="e2">139****5076</em><em class="e3">领取了方案</em></li> 
                  <li><em class="e1">施女士</em><em class="e2">137****6108</em><em class="e3">领取了方案</em></li> 
                </ul> 
                <ul class="swiper-slide clearfix"> 
                  <li><em class="e1">孙女士</em><em class="e2">150****6191</em><em class="e3">领取了方案</em></li> 
                  <li><em class="e1">杨先生</em><em class="e2">184****1913</em><em class="e3">领取了方案</em></li> 
                </ul> 
                <ul class="swiper-slide clearfix"> 
                  <li><em class="e1">姜女士</em><em class="e2">133****7177</em><em class="e3">领取了方案</em></li> 
                  <li><em class="e1">孙女士</em><em class="e2">138****5975</em><em class="e3">领取了方案</em></li> 
                </ul> 
              </div>
            </div>
          </div>
            <form class="form usePlace ove" action="?c=post&amp;f=setok&amp;module_id=119" method="post" onsubmit="return zt_submit(this);">
              <div class="ht clearfix">
              0元方案剩
              <span>5</span>套
              </div>
              <input type="hidden" id="content" name="content" value="二居室改造方案" />
              <ul class="clearfix">
                <li className={this.state.display==1?"current":null} onClick={({e='1'})=>this.roomClick(e)}>一居室改造方案</li>
                <li className={this.state.display==2?"current":null} onClick={({e='2'})=>this.roomClick(e)}>二居室改造方案</li>
                <li className={this.state.display==3?"current":null} onClick={({e='3'})=>this.roomClick(e)}>三居室改造方案</li>
                <li className={this.state.display==4?"current":null} onClick={({e='4'})=>this.roomClick(e)}>四居室改造方案</li>
              </ul>
              <div class="table ext cls_contact">
              <div class="left">
                <span class="red">*</span> 您的姓名：
              </div>
              <div class="right">
                <div>
                <table cellpadding="0" cellspacing="0">
                  <tbody>
                  <tr>
                    <td><input onChange={this.nameChange1} placeholder='请输入您的姓名' type="text" class="input-text" name="contact" id="contact"  /></td>
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
                <span class="red">*</span> 手机号码：
              </div>
              <div class="right">
                <div>
                <table cellpadding="0" cellspacing="0">
                  <tbody>
                  <tr>
                    <td><input  onChange={this.phoneChange1} placeholder='请输入您的手机号码' type="text" class="input-text" name="phone" id="phone"  /></td>
                    <td class="clue_on">&nbsp;请输入您的手机号码</td>
                  </tr>
                  </tbody>
                </table>
                </div>
              </div>
              <div class="clear"></div>
              </div>
              <div class="table cls_button" id="end">
              <div class="right">
                <div  onClick={this.lingquClick} type="submit" class="button" id="_phpok_submit">领取改造方案</div>
              </div>
              </div>
            </form>
            </div>
          </div>
          </div>
          <div class="Wrap secService" data="halfSlide" data-view="1" data-auto="999" data-space="0">
          <div class="ztTitle ztCon">
            <h2><span>空</span>间的局部改造</h2>
            <br />
            <p>基础施工+全套主材产品</p>
          </div>
          <div class="hd">
            <ul class="hdli2">
                <li onClick={()=>this.banner.slickGoTo(0)} class="inline" className={this.state.bannerCurrent==0?'inline conPict':'inline'}><a href="javascript:void(0);" class="imga">
                  <div class="ico">
                    <div class="imgh imgh11">
                    <img src={require('@/static/picture/secServiceIco_01.png')} />
                    </div>
                  </div><h3 class="title">厨房改造</h3></a></li>
                <li onClick={()=>this.banner.slickGoTo(1)} className={this.state.bannerCurrent==1?'inline conPict':'inline'} class="inline"><a href="javascript:void(0);" class="imga">
                  <div class="ico">
                    <div class="imgh imgh11">
                    <img src={require('@/static/picture/secServiceIco_02.png')} />
                    </div>
                  </div><h3 class="title">卫生间改造</h3></a></li>
                <li onClick={()=>this.banner.slickGoTo(2)} className={this.state.bannerCurrent==2?'inline conPict':'inline'} class="inline"><a href="javascript:void(0);" class="imga">
                  <div class="ico">
                    <div class="imgh imgh11">
                    <img src={require('@/static/picture/secServiceIco_03.png')} />
                    </div>
                  </div><h3 class="title">墙面翻新</h3></a></li>
                <li onClick={()=>this.banner.slickGoTo(3)} className={this.state.bannerCurrent==3?'inline conPict':'inline'} class="inline"><a href="javascript:void(0);" class="imga">
                  <div class="ico">
                    <div class="imgh imgh11">
                    <img src={require('@/static/picture/secServiceIco_04.png')} />
                    </div>
                  </div><h3 class="title">地板翻新</h3></a></li>
            </ul>
            <ul class="pager none"></ul>
          </div>
          <div class="bd swiper-container">
            <ul class="swiper-wrapper">
              <BannerAnim
                type="across"
                arrow={true}
                autoPlay
                ref={(c) => { this.banner = c; }}
                onChange={(type,current)=>this.bannerChange(type,current)}
              >
                <Element
                  prefixCls="banner-user-elem"
                  key="0"
                >
              <li class="swiper-slide">
                <div class="imgh">
                <img src={require('@/static/picture/secService_01.jpg')} />
                </div>
                <div class="info">
                <div class="ht">
                  <i class="icon"></i>厨房改造套餐
                </div>
                <p>施工内容</p>
                <div class="txt">
                  <div class="nano ove" data="nanoScroll">
                  <div class="nano-content">
                    <div class="sheight">
                      1、土建改造:按照规划打好线槽、底盒及墙体拆除 2、水电隐蔽工程:把强弱电分管,分项,分槽布好,之后用钢丝穿线 3、泥作工程:防水做好之后,进行48关水试验,厨房、卫生间墙地砖的铺贴，地面找平，线管的暗敷 4、木作工程:局部吊顶,造型处理,柜体的制作 5、漆作工程:腻子找平三遍，用砂纸打磨处理后，滚一遍底漆，再刷两遍面漆，再打磨 6、安装工程:灯具,洁具,开关,面板,五金挂件的安装 7、清洁:开荒清洁做完之后通知验收 
                    </div>
                  </div>
                  </div>
                </div>
                <a href="javascript:;" onClick={()=>this.setState({disabledModel:true})} title="我家也要改造" class="ztBtn">我家也要改造<i class="icon"></i></a>
                </div></li>
                </Element>
                <Element
                  prefixCls="banner-user-elem"
                  key="1"
                >
              <li class="swiper-slide">
                <div class="imgh">
                <img src={require('@/static/picture/secService_02.jpg')} />
                </div>
                <div class="info">
                <div class="ht">
                  <i class="icon"></i>卫生间改造套餐
                </div>
                <p>施工内容</p>
                <div class="txt">
                  <div class="nano ove" data="nanoScroll">
                  <div class="nano-content">
                    <div class="sheight">
                      1、墙面：先将原有旧墙砖拆除，再利用水泥砂浆将墙面找平，目的是为了便于后期瓷砖铺贴平整，不易脱落。 2、水电：重新排布水管电管线路。水管和电线必须走墙面和顶面，特别是水管，这样的安装方式可以避免水管破裂，减轻维修的负担。 3、防水：墙面防水建议使用刚性防水，既能起到防水作用，又能避免墙砖空鼓。而地面可以使用柔性防水，防水涂料要涂刷均匀，地面与墙面的接缝处需要涂刷30cm，施工完后需要做24小时闭水试验。 4、贴砖：地砖最好选择防滑、易清洁的瓷砖，铺贴时，地漏处要低于整个地面，便于积水排出。 
                    </div>
                  </div>
                  </div>
                </div>
                <a href="javascript:;" onClick={()=>this.setState({disabledModel:true})} title="我家也要改造" class="ztBtn">我家也要改造<i class="icon"></i></a>
                </div></li>
                </Element>
                <Element
                  prefixCls="banner-user-elem"
                  key="2"
                >
              <li class="swiper-slide">
                <div class="imgh">
                <img src={require('@/static/picture/secService_03.jpg')} />
                </div>
                <div class="info">
                <div class="ht">
                  <i class="icon"></i>墙面翻新套餐
                </div>
                <p>施工内容</p>
                <div class="txt">
                  <div class="nano ove" data="nanoScroll">
                  <div class="nano-content">
                    <div class="sheight">
                      1、批灰：铲除墙面面漆，铲除腻子层（面积不限） 2、上新：批腻子，一遍粗腻子、两遍细腻子（马可波罗瓷砖） 3、找平:大墙面打磨找平 4、上漆：刷底漆，一遍，刷面漆，两遍。墙面情况严重还需贴网格布；渗水墙面还可做防水处理 
                    </div>
                  </div>
                  </div>
                </div>
                <a href="javascript:;" onClick={()=>this.setState({disabledModel:true})}  title="我家也要改造" class="ztBtn">我家也要改造<i class="icon"></i></a>
                </div></li>
                </Element>
                <Element
                prefixCls="banner-user-elem"
                key="3"
              >
            <li class="swiper-slide">
              <div class="imgh">
              <img src={require('@/static/picture/secService_04.jpg')} />
              </div>
              <div class="info">
              <div class="ht">
                <i class="icon"></i>地板翻新套餐
              </div>
              <p>施工内容</p>
              <div class="txt">
                <div class="nano ove" data="nanoScroll">
                <div class="nano-content">
                  <div class="sheight">
                    1、采用24目，60目和120目砂纸，砂带机和边缘，以确保地板的光滑表面。 2、刮腻子可以确保地板的真实颜色，并且不会刮擦地板。 3、地板漆，使用环保的水性地板漆，不会使房间产生异味，地板漆必须是特殊的地板漆，其耐磨性可以满足地板的要求。 4、使用特殊的木地板蜡和抛光机以及DCS灰尘收集系统，可确保实木地板的光泽。 5、使用特殊的透明腻子与地板漆匹配，在抛光地板上刮擦干燥（5--10）分钟。用木色的固体腻子填充地板和地板之间的间隙，然后使用360--600＃水纱纸进行摩擦干燥。 6、用360-600＃水砂纸仔细打磨第一道油漆，使表面光滑细腻，然后小心干燥，最后刷一次地板漆，效果更佳。 
                  </div>
                </div>
                </div>
              </div>
              <a href="javascript:;" onClick={()=>this.setState({disabledModel:true})}  title="我家也要改造" class="ztBtn">我家也要改造<i class="icon"></i></a>
              </div></li>
              </Element>
              </BannerAnim>
            </ul>
          </div>
          </div>
          <div class="Wrap secVS">
          <div class="ztCon">
            <div class="ztTitle">
            <h2><span>改</span>造前后对比图</h2>
            <br />
            <p>小改动大变化，让你的家焕然一新</p>
            </div>
            <div class="list" data="ztSlide" data-auto="3">
            <div class="hd">
              <div class="pager none"></div>
              <ul class="hdli2">
              <li onClick={()=>this.banner1.slickGoTo(0)} className={this.state.bannerCurrent1==0?'inline conPict':'inline'} class="inline">
                <div class="img inline">
                <img src={require('@/static/picture/secVS_icon_01.png')} />
                </div><em class="inline">改造<span>客厅</span></em></li>
              <li onClick={()=>this.banner1.slickGoTo(1)} className={this.state.bannerCurrent1==1?'inline conPict':'inline'} class="inline">
                <div class="img inline">
                <img src={require('@/static/picture/secVS_icon_02.png')} />
                </div><em class="inline">改造<span>厨房</span></em></li>
              <li onClick={()=>this.banner1.slickGoTo(2)} className={this.state.bannerCurrent1==2?'inline conPict':'inline'} class="inline">
                <div class="img inline">
                <img src={require('@/static/picture/secVS_icon_03.png')} />
                </div><em class="inline">改造<span>卫生间</span></em></li>
              <li onClick={()=>this.banner1.slickGoTo(3)} className={this.state.bannerCurrent1==3?'inline conPict':'inline'} class="inline">
                <div class="img inline">
                <img src={require('@/static/picture/secVS_icon_04.png')} />
                </div><em class="inline">改造<span>卧室</span></em></li>
              </ul>
            </div>
            <div class="bd swiper-container">
              <ul class="swiper-wrapper">
              <BannerAnim
                type="across"
                arrow={true}
                autoPlay
                ref={(c) => { this.banner1 = c; }}
                onChange={(type,current)=>this.bannerChange1(type,current)}
              >
                <Element
                  prefixCls="banner-user-elem"
                  key="0"
                >
              <li class="swiper-slide">
                <div class="after imgh">
                <img src={require('@/static/picture/secVS_01.jpg')} />
                <em>改造后</em>
                </div>
                <div class="info clearfix">
                <div class="before fl">
                  <div class="imgh">
                  <img src={require('@/static/picture/secVS_01_s.jpg')} />
                  </div>
                  <em>改造前</em>
                </div>
                <div class="text ove">
                  <h3 class="title">[&nbsp;客厅改造&nbsp;]</h3>
                  <p class="note"><span>旧房痛点：</span>①老式客厅电路设计不合理 ②电视和茶几沙发间距过小</p>
                  <p class="note"><span>改造完成：</span>完美线路布局，打造舒适家居，样板间家居预设，所见即所得</p>
                </div>
                </div></li>
                </Element>
                <Element
                  prefixCls="banner-user-elem"
                  key="1"
                >
              <li class="swiper-slide">
                <div class="after imgh">
                <img src={require('@/static/picture/secVS_02.jpg')} />
                <em>改造后</em>
                </div>
                <div class="info clearfix">
                <div class="before fl">
                  <div class="imgh">
                  <img src={require('@/static/picture/secVS_02_s.jpg')} />
                  </div>
                  <em>改造前</em>
                </div>
                <div class="text ove">
                  <h3 class="title">[&nbsp;厨房改造&nbsp;]</h3>
                  <p class="note"><span>旧房痛点：</span>①油烟重灾区乌烟瘴气 ②物品繁多，拥挤不堪</p>
                  <p class="note"><span>改造完成：</span>超强橱柜收纳，搭配智能厨房设备，告别油烟问题，让做饭不再是一种煎熬</p>
                </div>
                </div></li>
                </Element>
                <Element
                  prefixCls="banner-user-elem"
                  key="2"
                >
              <li class="swiper-slide">
                <div class="after imgh">
                <img src={require('@/static/picture/secVS_03.jpg')} />
                <em>改造后</em>
                </div>
                <div class="info clearfix">
                <div class="before fl">
                  <div class="imgh">
                  <img src={require('@/static/picture/secVS_03_s.jpg')} />
                  </div>
                  <em>改造前</em>
                </div>
                <div class="text ove">
                  <h3 class="title">[&nbsp;卫生间改造&nbsp;]</h3>
                  <p class="note"><span>旧房痛点：</span>①漏水不间断 ②排水难且返味</p>
                  <p class="note"><span>改造完成：</span>标准工艺，防水测试，漏水不再来;四大贴砖方法，整体坡度，告别反味和排水困难</p>
                </div>
                </div></li>
                </Element>
                <Element
                  prefixCls="banner-user-elem"
                  key="3"
                >
              <li class="swiper-slide">
                <div class="after imgh">
                <img src={require('@/static/picture/secVS_04.jpg')} />
                <em>改造后</em>
                </div>
                <div class="info clearfix">
                <div class="before fl">
                  <div class="imgh">
                  <img src={require('@/static/picture/secVS_04_s.jpg')} />
                  </div>
                  <em>改造前</em>
                </div>
                <div class="text ove">
                  <h3 class="title">[&nbsp;卧室改造&nbsp;]</h3>
                  <p class="note"><span>旧房痛点：</span>①风格老旧 ②隔音差,卧室门年久失修</p>
                  <p class="note"><span>改造完成：</span>换个风格体验生活,专业材料除去噪音,定制木门保证睡眠质量</p>
                </div>
                </div></li>
                </Element>
                </BannerAnim>
              </ul>
            </div>
            <a href="javascript:void(0)" class="btn prev"><i></i></a>
            <a href="javascript:void(0)" class="btn next"><i></i></a>
            </div>
            <a href="javascript:;" onClick={()=>this.setState({disabledModel:true})}  class="ztBtn">我家也要改造<i class="icon"></i></a>
          </div>
          </div>
          <div class="Wrap secBaojia">
          <div class="ztTitle ztCon">
            <h2><span>清</span>单式报价</h2>
            <br />
            <p>让您知道您的每一分钱花在什么地方</p>
          </div>
          <div class="ztCon">
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
                <img src={require('@/static/picture/secBaojia_01.png')} />
                </div>
              </div><h3 class="title">全屋硬装</h3></li>
              <li>
              <div class="pick ellipsis">
                选配
              </div>
              <div class="ico">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/secBaojia_02.png')} />
                </div>
              </div><h3 class="title">全屋软装</h3></li>
              <li>
              <div class="pick ellipsis">
                选配
              </div>
              <div class="ico">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/secBaojia_03.png')} />
                </div>
              </div><h3 class="title">定制包</h3></li>
              <li id="end">
              <div class="pick ellipsis">
                入住
              </div>
              <div class="ico">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/secBaojia_04.png')} />
                </div>
              </div><h3 class="title">您的新家</h3></li>
            </ul>
            </div>
          </div>
          <a href="javascript:;" onClick={()=>this.setState({disabledModel:true})} class="ztBtn" >我家也要改造<i class="icon"></i></a>
          </div>
          <div class="Wrap secPlan">
          <div class="ztCon">
            <div class="ztTitle">
            <h2><span>研</span>发老房改造居家解决方案</h2>
            <br />
            <p>分析10000+老房户型，户型居室整体扩容30%</p>
            </div>
            <div class="imga">
            <img src={require('@/static/picture/secPlan.png')} />
            </div>
          </div>
          </div>
          <div class="Wrap secReason">
          <div class="ztTitle ztCon">
            <h2><span>清</span>单式报价</h2>
            <br />
            <p>让您知道您的每一分钱花在什么地方</p>
          </div>
          <div class="ztSec">
            <div class="ztWrap">
            <img src={require('@/static/picture/secReason.jpg')} />
            </div>
          </div>
          <a href="javascript:;" onClick={()=>this.setState({disabledModel:true})}  class="ztBtn">我家也要改造<i class="icon"></i></a>
          </div>
          <div class="Wrap secPraise">
          <div class="ztCon">
            <div class="ztTitle">
            <h2><span>为</span>无数业主改造家 赢得群众好口碑</h2>
            <br />
            <p>获得众多业主一致好评</p>
            </div>
            <ul class="clearfix">
            <li>
              <div class="imga">
              <div class="icon">
                <img src={require('@/static/picture/secPraise_icon_01.png')} />
              </div>
              <div class="imgh">
                <img src={require('@/static/picture/secPraise_01.jpg')} />
              </div>
              <div class="text">
                <h3 class="title">等我房子拆迁还会来找你们</h3>
                <div class="line"></div>
                <p class="note">朋友推荐来的，很满意，感谢万泰装饰的客服经理，热情服务讲解很详细！</p>
              </div>
              </div></li>
            <li>
              <div class="imga">
              <div class="icon">
                <img src={require('@/static/picture/secPraise_icon_02.png')} />
              </div>
              <div class="imgh">
                <img src={require('@/static/picture/secPraise_02.jpg')} />
              </div>
              <div class="text">
                <h3 class="title">你们是一家有良心的公司</h3>
                <div class="line"></div>
                <p class="note">设计师非常负责任，项目管家进行到位，平时工作忙，这种模式很好！</p>
              </div>
              </div></li>
            <li>
              <div class="imga">
              <div class="icon">
                <img src={require('@/static/picture/secPraise_icon_03.png')} />
              </div>
              <div class="imgh">
                <img src={require('@/static/picture/secPraise_03.jpg')} />
              </div>
              <div class="text">
                <h3 class="title">期待装修后的美家</h3>
                <div class="line"></div>
                <p class="note">非常好的装修公司，设计和工作团队都很好，不错！值得信赖。</p>
              </div>
              </div></li>
            <li>
              <div class="imga">
              <div class="icon">
                <img src={require('@/static/picture/secPraise_icon_04.png')} />
              </div>
              <div class="imgh">
                <img src={require('@/static/picture/secPraise_04.jpg')} />
              </div>
              <div class="text">
                <h3 class="title">施工、服务、各方面都很好</h3>
                <div class="line"></div>
                <p class="note">装修完没验收，感谢质检细致验收，你们的匠人精神值得所有人学习！</p>
              </div>
              </div></li>
            </ul>
            <div class="secOrder">
            <div class="container">
              <div class="ht clearfix">
              <h3><em>预约设计，给老房<span>换<span>新颜</span></span></em><cite>为热爱生活的你提供旧房整装解决方案</cite></h3>
              </div>
              <form class="form usePlace clearfix" action="?c=post&amp;f=setok&amp;module_id=119" method="post" onsubmit="return zt_submit(this);">
              <div class="table ext cls_contact">
                <div class="left">
                <span class="red">*</span> 您的姓名：
                </div>
                <div class="right">
                <div>
                  <table cellpadding="0" cellspacing="0">
                  <tbody>
                    <tr>
                    <td><input onChange={this.nameChange2} placeholder='请输入您的姓名' type="text" class="input-text" name="contact" id="contact"  /></td>
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
                <span class="red">*</span> 手机号码：
                </div>
                <div class="right">
                <div>
                  <table cellpadding="0" cellspacing="0">
                  <tbody>
                    <tr>
                    <td><input  onChange={this.phoneChange2} placeholder='请输入您的手机号码' type="text" class="input-text" name="phone" id="phone"  /></td>
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
                    <td><input onChange={this.areaChange2} placeholder='请输入您的房屋面积' type="text" class="input-text" name="area" id="area"  /></td>
                    <td class="clue_on">&nbsp;请输入您的房屋面积</td>
                    </tr>
                  </tbody>
                  </table>
                </div>
                </div>
                <div class="clear"></div>
              </div>
              <div class="table cls_button" id="end">
                <div class="right">
                <div onClick={this.lingquClick2} class="button" id="_phpok_submit">领取改造方案</div>
                </div>
              </div>
              </form>
            </div>
            </div>
            </div>
          </div>
          {
            this.state.disabledModel?
                <div class="secOrder ztAjaxOrder" id="ztAjaxOrder">
                  <div class="container">
                    <Button type="primary" onClick={()=>this.setState({disabledModel:false})} shape="circle" icon={<CloseOutlined />} />
                    <div class="ht clearfix">
                    <h3><em>预约设计，给老房<span>换<span>新颜</span></span></em><cite>为热爱生活的你提供旧房整装解决方案</cite></h3>
                    </div>
                    <form class="form usePlace clearfix" action="?c=post&amp;f=setok&amp;module_id=119" method="post" onsubmit="return zt_submit(this);">
                    <input type="hidden" id="isvcode" name="isvcode" value="1" />
                    <input type="hidden" id="totype" name="totype" value="ajax" />
                    <input type="hidden" id="tourl" name="tourl" value="goback" />
                    <input type="hidden" id="tomsg" name="tomsg" value="提交成功，我们将第一时间与您取得联系！" />
                    <input type="hidden" id="subject" name="subject" data-subject="来源：PC-老房改造[Url:https://www.ysgjrz.com/oldhouse.html，IP:39.128.22.25]" value="来源：PC-老房改造[Url:https://www.ysgjrz.com/oldhouse.html，IP:39.128.22.25]" />
                    <div class="table ext cls_contact">
                      <div class="left">
                      <span class="red">*</span> 您的姓名：
                      </div>
                      <div class="right">
                      <div>
                        <table cellpadding="0" cellspacing="0">
                        <tbody>
                          <tr>
                          <td><input onChange={this.nameChange3} type="text" class="input-text" name="contact" id="contact"/></td>
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
                      <span class="red">*</span> 手机号码：
                      </div>
                      <div class="right">
                      <div>
                        <table cellpadding="0" cellspacing="0">
                        <tbody>
                          <tr>
                          <td><input onChange={this.phoneChange3}  type="text" class="input-text" name="phone" id="phone" /></td>
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
                          <td><input onChange={this.areaChange3}  type="text" class="input-text" name="area" id="area"  /></td>
                          <td class="clue_on">&nbsp;请输入您的房屋面积</td>
                          </tr>
                        </tbody>
                        </table>
                      </div>
                      </div>
                      <div class="clear"></div>
                    </div>
                    <div class="table cls_button" id="end">
                      <div class="right">
                      <div onClick={this.lingquClick3} type="submit" class="button" id="_phpok_submit">领取改造方案</div>
                      </div>
                    </div>
                  </form>
                </div>
                </div>
                :''
          }
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
        className="templates-wrapper oldHouseBg"
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
