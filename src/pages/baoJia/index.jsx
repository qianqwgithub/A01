/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import {Input,message } from 'antd';
import { enquireScreen } from 'enquire-js';
import './index.less';
import '@/static/css/style.css';
import '@/static/css/style_public.css';
import '@/static/css/minify.css';
import '@/static/css/minify4.css';
import '@/static/js/minify.js';
import '@/static/js/z_stat-1278941601_1278941601.js';
import '@/static/js/z_stat-1279235047_1279235047.js';
import '@/pages/Home/less/antMotionStyle.less';
import Nav0 from '@/pages/Home/Nav0';
import Footer1 from '@/pages/Home/Footer1';
import {MyIcon} from '@/common/MyIcon'
import {
  Nav00DataSource,
  Footer10DataSource,
} from '@/pages/Home/data.source';
import request from "umi-request";
import {Link} from 'umi';
import ReactDom from 'react-dom'


let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class BAOJIA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houseTypeId:'',
      houseTypes:[],
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
      name:'',
      phone:'',
      region:'',
      area:'',
      list:[],
      current:1,
      pageSize:6,
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
    this.handleSelectHouseTypes();
    this.handleSelectAll();
  }
  handleSelectAll(){
    request.get("/api/fitment/fitmentCase/grid",{
      params: {
        page:this.state.current,
        size:this.state.pageSize,
      }
    })
    .then(response=>{
      console.log(response);
      this.setState({
        list: response.data.pageData,
      });
      console.log(this.state);
    })
    .catch(error=>{
      console.log(error);
    });
  }
  handleSelectHouseTypes(){
    request.get("/api/fitment/fitmentHouseType/list",{
      params: {
      }
    })
    .then(response=>{
      console.log(response);
      this.setState({ houseTypes: response.data});
    })
    .catch(error=>{
      console.log(error);
    });
  }
  houseTypeChange=e=>{
    console.log(e.target.value);
    this.setState({
      houseTypeId:e.target.value
    })
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
  regionChange=e=>{
    console.log(e.target.value);
    this.setState({
      region:e.target.value
    })
  }
  areaChange=e=>{
    console.log(e.target.value);
    this.setState({
      area:e.target.value
    })
  }
  baojiaoClick=()=>{
    request.put("/api/fitment/fitmentOrder/save",{
      data: {
        datatype:1,
        linkName: this.state.name,
        linkPhone: this.state.phone,
        houseTypeId: this.state.phone,
        district:this.state.region,
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
  render() {
    const children = [
      //导航条
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      <div class="Wrap ztPage ztBaojia">
        <div class="Wrap secbaojia">
        <div class="ztCon">
          <div class="box clearfix">
          <div class="ct IArea_r fr" data="scrollVSlide" data-view="auto">
            <h3 class="ht">成功获取专属装修报价</h3>
            <div class="bd swiper-container"  id="scrollBox1"  ref="scrollBox1">
              <div class="swiper-wrapper"  ref="con11">
                <ul class="swiper-slide">
                <li><i class="icon2"></i><em class="e1">陈先生</em><em class="e2">182****9515</em><em class="e3 tr">成功获取报价</em></li>
                </ul>
                <ul class="swiper-slide">
                <li><i class="icon2"></i><em class="e1">姜女士</em><em class="e2">150****4416</em><em class="e3 tr">成功获取报价</em></li>
                </ul>
                <ul class="swiper-slide">
                <li><i class="icon2"></i><em class="e1">吕先生</em><em class="e2">131****7918</em><em class="e3 tr">成功获取报价</em></li>
                </ul>
                <ul class="swiper-slide">
                <li><i class="icon2"></i><em class="e1">张先生</em><em class="e2">155****1658</em><em class="e3 tr">成功获取报价</em></li>
                </ul>
                <ul class="swiper-slide">
                <li><i class="icon2"></i><em class="e1">冯先生</em><em class="e2">150****6486</em><em class="e3 tr">成功获取报价</em></li>
                </ul>
                <ul class="swiper-slide">
                <li><i class="icon2"></i><em class="e1">沈女士</em><em class="e2">138****3865</em><em class="e3 tr">成功获取报价</em></li>
                </ul>
                <ul class="swiper-slide">
                <li><i class="icon2"></i><em class="e1">陈女士</em><em class="e2">182****9428</em><em class="e3 tr">成功获取报价</em></li>
                </ul>
                <ul class="swiper-slide">
                <li><i class="icon2"></i><em class="e1">李女士</em><em class="e2">189****6032</em><em class="e3 tr">成功获取报价</em></li>
                </ul>
                <ul class="swiper-slide">
                <li><i class="icon2"></i><em class="e1">卫女士</em><em class="e2">180****7800</em><em class="e3 tr">成功获取报价</em></li>
                </ul>
                <ul class="swiper-slide">
                <li><i class="icon2"></i><em class="e1">尤先生</em><em class="e2">189****4283</em><em class="e3 tr">成功获取报价</em></li>
                </ul>
                <ul class="swiper-slide">
                <li><i class="icon2"></i><em class="e1">张先生</em><em class="e2">183****9216</em><em class="e3 tr">成功获取报价</em></li>
                </ul>
                <ul class="swiper-slide">
                <li><i class="icon2"></i><em class="e1">黄先生</em><em class="e2">159****3022</em><em class="e3 tr">成功获取报价</em></li>
                </ul>
                <ul class="swiper-slide">
                <li><i class="icon2"></i><em class="e1">陈女士</em><em class="e2">187****6132</em><em class="e3 tr">成功获取报价</em></li>
                </ul>
                <ul class="swiper-slide">
                <li><i class="icon2"></i><em class="e1">蒋女士</em><em class="e2">136****2583</em><em class="e3 tr">成功获取报价</em></li>
                </ul>
                <ul class="swiper-slide">
                <li><i class="icon2"></i><em class="e1">陶女士</em><em class="e2">152****9532</em><em class="e3 tr">成功获取报价</em></li>
                </ul>
                <ul class="swiper-slide">
                <li><i class="icon2"></i><em class="e1">钱女士</em><em class="e2">185****8017</em><em class="e3 tr">成功获取报价</em></li>
                </ul>
                <ul class="swiper-slide">
                <li><i class="icon2"></i><em class="e1">秦女士</em><em class="e2">134****8485</em><em class="e3 tr">成功获取报价</em></li>
                </ul>
                <ul class="swiper-slide">
                <li><i class="icon2"></i><em class="e1">张先生</em><em class="e2">187****9886</em><em class="e3 tr">成功获取报价</em></li>
                </ul>
                <ul class="swiper-slide">
                <li><i class="icon2"></i><em class="e1">钱先生</em><em class="e2">151****7401</em><em class="e3 tr">成功获取报价</em></li>
                </ul>
                <ul class="swiper-slide">
                <li><i class="icon2"></i><em class="e1">赵女士</em><em class="e2">180****7811</em><em class="e3 tr">成功获取报价</em></li>
                </ul>
              </div>
            
              <div class="swiper-wrapper" ref={(c) => { this.con22 = c; }}>
              <ul class="swiper-slide">
              <li><i class="icon2"></i><em class="e1">陈先生</em><em class="e2">182****9515</em><em class="e3 tr">成功获取报价</em></li>
              </ul>
              <ul class="swiper-slide">
              <li><i class="icon2"></i><em class="e1">姜女士</em><em class="e2">150****4416</em><em class="e3 tr">成功获取报价</em></li>
              </ul>
              <ul class="swiper-slide">
              <li><i class="icon2"></i><em class="e1">吕先生</em><em class="e2">131****7918</em><em class="e3 tr">成功获取报价</em></li>
              </ul>
              <ul class="swiper-slide">
              <li><i class="icon2"></i><em class="e1">张先生</em><em class="e2">155****1658</em><em class="e3 tr">成功获取报价</em></li>
              </ul>
              <ul class="swiper-slide">
              <li><i class="icon2"></i><em class="e1">冯先生</em><em class="e2">150****6486</em><em class="e3 tr">成功获取报价</em></li>
              </ul>
              <ul class="swiper-slide">
              <li><i class="icon2"></i><em class="e1">沈女士</em><em class="e2">138****3865</em><em class="e3 tr">成功获取报价</em></li>
              </ul>
              <ul class="swiper-slide">
              <li><i class="icon2"></i><em class="e1">陈女士</em><em class="e2">182****9428</em><em class="e3 tr">成功获取报价</em></li>
              </ul>
              <ul class="swiper-slide">
              <li><i class="icon2"></i><em class="e1">李女士</em><em class="e2">189****6032</em><em class="e3 tr">成功获取报价</em></li>
              </ul>
              <ul class="swiper-slide">
              <li><i class="icon2"></i><em class="e1">卫女士</em><em class="e2">180****7800</em><em class="e3 tr">成功获取报价</em></li>
              </ul>
              <ul class="swiper-slide">
              <li><i class="icon2"></i><em class="e1">尤先生</em><em class="e2">189****4283</em><em class="e3 tr">成功获取报价</em></li>
              </ul>
              <ul class="swiper-slide">
              <li><i class="icon2"></i><em class="e1">张先生</em><em class="e2">183****9216</em><em class="e3 tr">成功获取报价</em></li>
              </ul>
              <ul class="swiper-slide">
              <li><i class="icon2"></i><em class="e1">黄先生</em><em class="e2">159****3022</em><em class="e3 tr">成功获取报价</em></li>
              </ul>
              <ul class="swiper-slide">
              <li><i class="icon2"></i><em class="e1">陈女士</em><em class="e2">187****6132</em><em class="e3 tr">成功获取报价</em></li>
              </ul>
              <ul class="swiper-slide">
              <li><i class="icon2"></i><em class="e1">蒋女士</em><em class="e2">136****2583</em><em class="e3 tr">成功获取报价</em></li>
              </ul>
              <ul class="swiper-slide">
              <li><i class="icon2"></i><em class="e1">陶女士</em><em class="e2">152****9532</em><em class="e3 tr">成功获取报价</em></li>
              </ul>
              <ul class="swiper-slide">
              <li><i class="icon2"></i><em class="e1">钱女士</em><em class="e2">185****8017</em><em class="e3 tr">成功获取报价</em></li>
              </ul>
              <ul class="swiper-slide">
              <li><i class="icon2"></i><em class="e1">秦女士</em><em class="e2">134****8485</em><em class="e3 tr">成功获取报价</em></li>
              </ul>
              <ul class="swiper-slide">
              <li><i class="icon2"></i><em class="e1">张先生</em><em class="e2">187****9886</em><em class="e3 tr">成功获取报价</em></li>
              </ul>
              <ul class="swiper-slide">
              <li><i class="icon2"></i><em class="e1">钱先生</em><em class="e2">151****7401</em><em class="e3 tr">成功获取报价</em></li>
              </ul>
              <ul class="swiper-slide">
              <li><i class="icon2"></i><em class="e1">赵女士</em><em class="e2">180****7811</em><em class="e3 tr">成功获取报价</em></li>
              </ul>
            </div>
            </div>
            <p class="tips">注：报价仅供参考，具体报价根据实际量房确定</p>
          </div>
          <div class="IArea_l fl">
            <div class="secOrder">
            <h3 class="ht">请正确填写您的真实信息</h3>
            <form class="form formField">
              <div class="table ext cls_contact">
              <div class="left">
                <span class="red">*</span> 您的姓名：
              </div>
              <div class="right">
                <div>
                <table cellpadding="0" cellspacing="0">
                  <tbody>
                  <tr>
                    <td><input onChange={this.nameChange} type="text" class="input-text"   placeholder='您的姓名'/></td>
                    <td class="clue_on">&nbsp;您的姓名</td>
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
                    <td><input onChange={this.phoneChange} type="text" class="input-text"  placeholder='手机号码'/></td>
                    <td class="clue_on">&nbsp;手机号码</td>
                  </tr>
                  </tbody>
                </table>
                </div>
              </div>
              <div class="clear"></div>
              </div>
              <div class="table ext cls_addr">
              <div class="left">
                小区名称：
              </div>
              <div class="right">
                <div>
                <table cellpadding="0" cellspacing="0">
                  <tbody>
                  <tr>
                    <td><input onChange={this.regionChange} type="text" class="input-text" placeholder='小区名称'/></td>
                    <td class="clue_on">&nbsp;小区名称</td>
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
                    <td>
                      <input onChange={this.areaChange} type="text" class="input-text" placeholder='房屋面积'/>
                    </td>
                    <td class="clue_on">&nbsp;房屋面积</td>
                  </tr>
                  </tbody>
                </table>
                </div>
              </div>
              <div class="clear"></div>
              </div>
              <div class="table cls_unit">
              <div class="right">
                <select class="input-text" onChange={this.houseTypeChange}>
                  <option>请选择房屋户型</option>
                  {
                    this.state.houseTypes.map(item=>{
                      return <option value={item.id}>{item.title}</option>
                    })
                  }
                  {/* <option value="hx01">小户型</option>
                  <option value="hx02">两室一厅</option>
                  <option value="hx03">两室两厅</option>
                  <option value="hx04">三室一厅</option>
                  <option value="hx05">三室两厅</option>
                  <option value="hx06">大平层</option>
                  <option value="hx07">复式</option>
                  <option value="hx08">别墅</option>
                  <option value="hx09">洋房</option>
                  <option value="hx10">其他</option> */}
                </select>
              </div>
              </div>
              <div class="table cls_button" >
              <div class="right">
                <div class="button submit" onClick={this.baojiaoClick}><span>我要报价</span></div>
              </div>
              </div>
            </form>
            <p class="tips">已有<span>152</span>人成功获取报价</p>
            </div>
          </div>
          <div class="photo">
            <img src={require('@/static/picture/baojia.gif')} />
          </div>
          </div>
        </div>
        </div>
        <div class="pubCasesB CasesList Column baojiaCases">
        <div class="indexTitle">
          <h2>案例赏析<small><span>&middot;</span>Case Appreciation</small></h2>
          <p>缔造至美空间，承载温情的美好时光</p>
          <div class="line"></div>
        </div>
        <ul class="clearfix">
          {
            this.state.list.map(item=>{
              return(
                <Link  to={'/cases/detail?id='+item.id} target="_blank" class="inline">
                  <li>
                    <a title={item.title} class="imga scale photo">
                      <div class="imgh imgh43">
                        <img src={global.constants.imgurl+item.img_url} alt={item.title} />
                      </div>
                      <div class="trbl bg">
                        <i class="icon2"></i>
                      </div>
                    </a>
                    <div class="info clearfix">
                      <a title={item.stylisttitle} target="_blank" class="imga designer">
                      <div class="imgh imgh11">
                        <img src={global.constants.imgurl+item.stylistimg} alt={item.stylisttitle} />
                      </div></a>
                      <div class="ove">
                      <p class="tags ellipsis"> {item.typetitle} / {item.area}m&sup2; /  {item.styletitle} </p>
                      <a title={item.title} class="imga"><h3 class="title ellipsis">{item.title}</h3></a>
                      </div>
                    </div>
                  </li>
                </Link>
              )
            })
          }
          {/* <li class="li_1 show"><a href="24.html" title="保利&middot;玺樾" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_16.jpg')} alt="保利&middot;玺樾" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 洋房 / 200m&sup2; / 新古典 </p>
            <h3 class="title ellipsis">保利&middot;玺樾</h3>
            </div></a></li>
          <li class="li_2 show"><a href="255.html" title="昆明东风东路水均大街地中海风格案例实景欣赏" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1743.jpg')} alt="昆明东风东路水均大街地中海风格案例实景欣赏" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 三室两厅 / 地中海 </p>
            <h3 class="title ellipsis">昆明东风东路水均大街地中海风格案例实景欣赏</h3>
            </div></a></li>
          <li class="li_3 show"><a href="233.html" title="昆明恒大名都128平米" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1711.jpg')} alt="昆明恒大名都128平米" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 三室一厅 / 128m&sup2; / 混搭 </p>
            <h3 class="title ellipsis">昆明恒大名都128平米</h3>
            </div></a></li>
          <li class="li_4 show"><a href="232.html" title="昆明海伦国际110平米现代简约风格" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1697.jpg')} alt="昆明海伦国际110平米现代简约风格" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 两室两厅 / 110m&sup2; / 现代简约 </p>
            <h3 class="title ellipsis">昆明海伦国际110平米现代简约风格</h3>
            </div></a></li>
          <li class="li_5 show"><a href="223.html" title="碧桂园凤凰湾" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1687.jpg')} alt="碧桂园凤凰湾" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 复式 / 218m&sup2; / 欧式古典 </p>
            <h3 class="title ellipsis">碧桂园凤凰湾</h3>
            </div></a></li>
          <li class="li_6 show"><a href="220.html" title="绿地海珀澜庭" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1636.jpg')} alt="绿地海珀澜庭" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 三室两厅 / 168m&sup2; / 欧式古典 </p>
            <h3 class="title ellipsis">绿地海珀澜庭</h3>
            </div></a></li>
           */}
          {/* <li class="li_7" style="display: none;"><a href="218.html" title="滇池俊府98㎡" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1605.jpg')} alt="滇池俊府98㎡" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 三室一厅 / 160m&sup2; / 混搭 </p>
            <h3 class="title ellipsis">滇池俊府98㎡</h3>
            </div></a></li>
          <li class="li_8" style="display: none;"><a href="217.html" title="筑友双河湾及第苑" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1616.jpg')} alt="筑友双河湾及第苑" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 三室两厅 / 168m&sup2; / 新古典 </p>
            <h3 class="title ellipsis">筑友双河湾及第苑</h3>
            </div></a></li>
          <li class="li_9" style="display: none;"><a href="216.html" title="万彩城市花园" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1557.jpg')} alt="万彩城市花园" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 三室一厅 / 118m&sup2; / 现代简约 </p>
            <h3 class="title ellipsis">万彩城市花园</h3>
            </div></a></li>
          <li class="li_10" style="display: none;"><a href="215.html" title="风华俊园113㎡混搭风格" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1555.jpg')} alt="风华俊园113㎡混搭风格" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 小户型 / 113m&sup2; / 混搭 </p>
            <h3 class="title ellipsis">风华俊园113㎡混搭风格</h3>
            </div></a></li>
          <li class="li_11" style="display: none;"><a href="214.html" title="万科城市之光" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1539.jpg')} alt="万科城市之光" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 三室一厅 / 118m&sup2; / 现代简约 </p>
            <h3 class="title ellipsis">万科城市之光</h3>
            </div></a></li>
          <li class="li_12" style="display: none;"><a href="213.html" title="华龙人家85㎡现代简约" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1532.jpg')} alt="华龙人家85㎡现代简约" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 小户型 / 85m&sup2; / 现代简约 </p>
            <h3 class="title ellipsis">华龙人家85㎡现代简约</h3>
            </div></a></li>
          <li class="li_13" style="display: none;"><a href="212.html" title="银海泊岸" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1522.jpg')} alt="银海泊岸" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 三室一厅 / 118m&sup2; / 新古典 </p>
            <h3 class="title ellipsis">银海泊岸</h3>
            </div></a></li>
          <li class="li_14" style="display: none;"><a href="210.html" title="华润中央公园简约大空间" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1497.jpg')} alt="华润中央公园简约大空间" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 大平层 / 188m&sup2; / 欧式古典 </p>
            <h3 class="title ellipsis">华润中央公园简约大空间</h3>
            </div></a></li>
          <li class="li_15" style="display: none;"><a href="209.html" title="万科魅力之城-120平米-美式" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1488.jpg')} alt="万科魅力之城-120平米-美式" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 三室两厅 / 120m&sup2; / 美式乡村 </p>
            <h3 class="title ellipsis">万科魅力之城-120平米-美式</h3>
            </div></a></li>
          <li class="li_16" style="display: none;"><a href="208.html" title="公园1903圣维望98平米" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1482.jpg')} alt="公园1903圣维望98平米" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 两室两厅 / 98m&sup2; / 混搭 </p>
            <h3 class="title ellipsis">公园1903圣维望98平米</h3>
            </div></a></li>
          <li class="li_17" style="display: none;"><a href="206.html" title="颐明园-128平米-北欧" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1454.jpg')} alt="颐明园-128平米-北欧" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 大平层 / 128m&sup2; / 其他 </p>
            <h3 class="title ellipsis">颐明园-128平米-北欧</h3>
            </div></a></li>
          <li class="li_18" style="display: none;"><a href="205.html" title="恒大云玺" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1464.jpg')} alt="恒大云玺" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 两室两厅 / 118m&sup2; </p>
            <h3 class="title ellipsis">恒大云玺</h3>
            </div></a></li>
          <li class="li_19" style="display: none;"><a href="204.html" title="英茂华府118平米" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1439.jpg')} alt="英茂华府118平米" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 三室一厅 / 118m&sup2; / 后现代风格 </p>
            <h3 class="title ellipsis">英茂华府118平米</h3>
            </div></a></li>
          <li class="li_20" style="display: none;"><a href="203.html" title="七彩云南第壹城102㎡现代简约" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1424.jpg')} alt="七彩云南第壹城102㎡现代简约" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 两室一厅 / 102m&sup2; / 现代简约 </p>
            <h3 class="title ellipsis">七彩云南第壹城102㎡现代简约</h3>
            </div></a></li>
          <li class="li_21" style="display: none;"><a href="202.html" title="枫丹白露-158平米-美式轻奢" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1407.jpg')} alt="枫丹白露-158平米-美式轻奢" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 三室两厅 / 158m&sup2; / 其他 </p>
            <h3 class="title ellipsis">枫丹白露-158平米-美式轻奢</h3>
            </div></a></li>
          <li class="li_22" style="display: none;"><a href="201.html" title="领秀星辰园" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1406.jpg')} alt="领秀星辰园" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 三室两厅 / 168m&sup2; / 新古典 </p>
            <h3 class="title ellipsis">领秀星辰园</h3>
            </div></a></li>
          <li class="li_23" style="display: none;"><a href="200.html" title="俊发城百合苑" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1397.jpg')} alt="俊发城百合苑" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 三室一厅 / 118m&sup2; / 现代简约 </p>
            <h3 class="title ellipsis">俊发城百合苑</h3>
            </div></a></li>
          <li class="li_24" style="display: none;"><a href="199.html" title="时光俊园-120平米北欧风格" target="_blank" class="imga scale">
            <div class="photo posr">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1362.jpg')} alt="时光俊园-120平米北欧风格" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info">
            <p class="tags ellipsis"> 三室一厅 / 120m&sup2; / 其他 </p>
            <h3 class="title ellipsis">时光俊园-120平米北欧风格</h3>
            </div></a></li> */}
        </ul>

        <div class="indexMoreBtn">
          <Link  to='/cases' target="_blank" class="inline">VIEW MORE</Link>
        </div>
        </div>

        <div class="indexProcess Wrap">
        <div class="indexTitle">
          <h2>工艺保障<small><span>&middot;</span>Process Guarantee</small></h2>
          <p>精致的同时追求细节，对细微的环节同样执着</p>
          <div class="line"></div>
        </div>
        <ul class="Column">
          <li><a href="javascript:void(0)" title="圆色国际工程工艺" class="imga">
            <div class="ico">
            <div class="imgh imgh11">
              {/* <MyIcon type="icon-_fangzi"></MyIcon> */}
              <img src={require('@/static/picture/7653c01d6f739164.png')} data-original={require('@/static/picture/7653c01d6f739164.png')} alt="圆色国际工程工艺" />
            </div>
            </div><h3 class="title ellipsis">圆色国际工程工艺</h3><pre class="note clamp">工艺环节极尽严苛
    只为给你完美大宅</pre></a></li>
          <li><a href="javascript:void(0)" title="圆色国际严选主材" class="imga">
            <div class="ico">
            <div class="imgh imgh11">
              <img src={require('@/static/picture/5fb015ebfff3a7dd.png')} data-original={require('@/static/picture/5fb015ebfff3a7dd.png')} alt="圆色国际严选主材" />
            </div>
            </div><h3 class="title ellipsis">圆色国际严选主材</h3><pre class="note clamp">环保和耐用是基本
    满足空间无尽可能</pre></a></li>
          <li><a href="javascript:void(0)" title="圆色国际品质服务" class="imga">
            <div class="ico">
            <div class="imgh imgh11">
              <img src={require('@/static/picture/9326106c01d528ca.png')} data-original={require('@/static/picture/9326106c01d528ca.png')} alt="圆色国际品质服务" />
            </div>
            </div><h3 class="title ellipsis">圆色国际品质服务</h3><pre class="note clamp">强大专属的购买力
    只为全屋品质而生</pre></a></li>
          <li id="end"><a href="javascript:void(0)" title="圆色国际在线报修" class="imga">
            <div class="ico">
            <div class="imgh imgh11">
              <img src={require('@/static/picture/09f44a805466f391.png')} data-original={require('@/static/picture/09f44a805466f391.png')} alt="圆色国际在线报修" />
            </div>
            </div><h3 class="title ellipsis">圆色国际在线报修</h3><pre class="note clamp">全程完整服务体系
    让居家无后顾之忧</pre></a></li>
        </ul>
        <div class="indexMoreBtn">
          <Link  to='/cases' target="_blank" class="inline">VIEW MORE</Link>
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
