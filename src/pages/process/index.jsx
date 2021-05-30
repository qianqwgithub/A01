/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import {Input,message } from 'antd';
import './index.less';
import '@/static/css/style.css';
import '@/static/css/style_public.css';
import '@/static/css/minify.css';
import '@/static/css/minify5.css';
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
      <div class="Wrap ztPage ztProcess">
        <div class="ztSec">
        <div class="ztWrap secBanner">
          <img src={require('@/static/picture/secBanner2.jpg')} />
        </div>
        </div>
        <div class="ztSec">
        <div class="ztWrap secYingHuan">
          <div class="ztTitle">
          <h2><span>装修隐患</span>您一定要提高警惕</h2>
          <p>以欧标工艺为基础，在结合国内建筑装饰验收规范，行业规范和国内目前装饰行业现状的基础上经过不断的研发和创新<br />形成了圆色装饰欧标6.0工艺体系。</p>
          </div>
          <img src={require('@/static/picture/secYingHuan.jpg')} />
        </div>
        </div>
        <div class="secProcess wrap">
        <div class="ztTitle">
          <h2><span>圆色欧标6.0工艺</span>专注系统化装修</h2>
          <p>以欧标工艺为基础，在结合国内建筑装饰验收规范，形成了圆色装饰欧标6.0工艺体系</p>
        </div>
        <div class="bg">
          <div class="ztCon">
          <ul class="clearfix">
            <li class="li_1">
            <div class="ico">
              <div class="imgh imgh11">
              <img src={require('@/static/picture/secProcess_01.png')} />
              </div>
            </div><h3 class="title ellipsis">开工交底</h3>
            <div class="num clearfix">
              <span>1</span>
              <i class="icon2"></i>
            </div></li>
            <li class="li_2">
            <div class="ico">
              <div class="imgh imgh11">
              <img src={require('@/static/picture/secProcess_02.png')} />
              </div>
            </div><h3 class="title ellipsis">水电验收</h3>
            <div class="num clearfix">
              <span>2</span>
              <i class="icon2"></i>
            </div></li>
            <li class="li_3">
            <div class="ico">
              <div class="imgh imgh11">
              <img src={require('@/static/picture/secProcess_03.png')} />
              </div>
            </div><h3 class="title ellipsis">防水验收</h3>
            <div class="num clearfix">
              <span>3</span>
              <i class="icon2"></i>
            </div></li>
            <li class="li_4">
            <div class="ico">
              <div class="imgh imgh11">
              <img src={require('@/static/picture/secProcess_04.png')} />
              </div>
            </div><h3 class="title ellipsis">木工验收</h3>
            <div class="num clearfix">
              <span>4</span>
              <i class="icon2"></i>
            </div></li>
            <li class="li_5">
            <div class="ico">
              <div class="imgh imgh11">
              <img src={require('@/static/picture/secProcess_05.png')} />
              </div>
            </div><h3 class="title ellipsis">油漆验收</h3>
            <div class="num clearfix">
              <span>5</span>
              <i class="icon2"></i>
            </div></li>
            <li class="li_6">
            <div class="ico">
              <div class="imgh imgh11">
              <img src={require('@/static/picture/secProcess_06.png')} />
              </div>
            </div><h3 class="title ellipsis">主材安装</h3>
            <div class="num clearfix">
              <span>6</span>
              <i class="icon2"></i>
            </div></li>
            <li class="li_7">
            <div class="ico">
              <div class="imgh imgh11">
              <img src={require('@/static/picture/secProcess_07.png')} />
              </div>
            </div><h3 class="title ellipsis">环保验收</h3>
            <div class="num clearfix">
              <span>7</span>
              <i class="icon2"></i>
            </div></li>
            <li class="li_8">
            <div class="ico">
              <div class="imgh imgh11">
              <img src={require('@/static/picture/secProcess_08.png')} />
              </div>
            </div><h3 class="title ellipsis">软装安装</h3>
            <div class="num clearfix">
              <span>8</span>
              <i class="icon2"></i>
            </div></li>
          </ul>
          {/* <div class="secOrder">
            <form class="form usePlace formField clearfix" action="?c=post&amp;f=setok&amp;module_id=119" method="post" onsubmit="return pub_submit(this);" validator="contact,phone,area" field="contact,phone,area,button" autocomplete="off">
            <input type="hidden" id="isvcode" name="isvcode" value="1" />
            <input type="hidden" id="totype" name="totype" value="ajax" />
            <input type="hidden" id="tourl" name="tourl" value="goback" />
            <input type="hidden" id="tomsg" name="tomsg" value="提交成功，我们将第一时间与您取得联系！" />
            <input type="hidden" id="subject" name="subject" value="来源：PC-工程工艺[Url:https://www.ysgjrz.com/process.html，IP:39.128.22.25]" />
            <div class="table ext cls_contact">
              <div class="left">
              <span class="red">*</span> 您的姓名：
              </div>
              <div class="right">
              <div>
                <table cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                  <td><input type="text" class="input-text" name="contact" id="contact" value="" /></td>
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
                  <td><input type="text" class="input-text" name="phone" id="phone" value="" /></td>
                  <td class="clue_on">&nbsp;手机号码</td>
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
                  <td><input type="text" class="input-text" name="area" id="area" value="" /></td>
                  <td class="clue_on">&nbsp;房屋面积</td>
                  </tr>
                </tbody>
                </table>
              </div>
              </div>
              <div class="clear"></div>
            </div>
            <div class="table cls_button" id="end">
              <div class="right">
              <button type="submit" class="button submit" id="_phpok_submit">立即订制</button>
              </div>
            </div>
            </form>
          </div> */}
          </div>
        </div>
        </div>
        {/* <div class="secElectrician wrap">
        <div class="ztTitle">
          <h2><span>圆色欧标6.0工艺</span>电工工艺</h2>
          <p>以欧标工艺为基础，在结合国内建筑装饰验收规范，形成了圆色装饰欧标6.0工艺体系</p>
        </div>
        <div class="ztCon" data="halfSlide" data-view="1" data-auto="999" data-space="0">
          <div class="hd">
          <div class="line"></div>
          <ul class="hdli2">
            <li class="inline"><a href="javascript:void(0);" class="imga">
              <div class="num">
              01
              </div><h3 class="title clamp">精确定位， 安全易维护 </h3></a></li>
            <li class="inline"><a href="javascript:void(0);" class="imga">
              <div class="num">
              02
              </div><h3 class="title clamp">强电暗敷工艺，开槽 精准定位，横平竖直</h3></a></li>
            <li class="inline"><a href="javascript:void(0);" class="imga">
              <div class="num">
              03
              </div><h3 class="title clamp">管内电线无接头、 专用接线端子连接器</h3></a></li>
            <li class="inline"><a href="javascript:void(0);" class="imga">
              <div class="num">
              04
              </div><h3 class="title clamp">一根管不超过 三个弯角、转角</h3></a></li>
            <li class="inline"><a href="javascript:void(0);" class="imga">
              <div class="num">
              05
              </div><h3 class="title clamp">线管内穿线 比40%</h3></a></li>
            <li class="inline"><a href="javascript:void(0);" class="imga">
              <div class="num">
              06
              </div><h3 class="title clamp">强弱电交叉铝 箔纸防干扰技术</h3></a></li>
            <li class="inline"><a href="javascript:void(0);" class="imga">
              <div class="num">
              07
              </div><h3 class="title clamp">标准PVC 阻燃管</h3></a></li>
            <li class="inline"><a href="javascript:void(0);" class="imga">
              <div class="num">
              08
              </div><h3 class="title clamp">厨房、卫生间、阳台 强弱电不允许沿地面施工</h3></a></li>
            <li class="inline"><a href="javascript:void(0);" class="imga">
              <div class="num">
              09
              </div><h3 class="title clamp">强弱电施工距离 墙体30CM</h3></a></li>
            <li class="inline"><a href="javascript:void(0);" class="imga">
              <div class="num">
              10
              </div><h3 class="title clamp">强电离煤气表、 煤气管道20CM</h3></a></li>
            <li class="inline" id="end"><a href="javascript:void(0);" class="imga">
              <div class="num">
              11
              </div><h3 class="title clamp">弱电单管 单线</h3></a></li>
          </ul>
          <ul class="pager none"></ul>
          </div>
          <div class="bd swiper-container">
          <ul class="swiper-wrapper">
            <li class="swiper-slide scale">
            <div class="photo">
              <div class="imgh imgh169">
              <img src={require('@/static/picture/secElectrician_01.jpg')} />
              </div>
            </div><h3 class="title ellipsis">精确定位， 安全易维护 </h3></li>
            <li class="swiper-slide scale">
            <div class="photo">
              <div class="imgh imgh169">
              <img src={require('@/static/picture/secElectrician_02.jpg')} />
              </div>
            </div><h3 class="title ellipsis">强电暗敷工艺，开槽 精准定位，横平竖直</h3></li>
            <li class="swiper-slide scale">
            <div class="photo">
              <div class="imgh imgh169">
              <img src={require('@/static/picture/secElectrician_03.jpg')} />
              </div>
            </div><h3 class="title ellipsis">管内电线无接头、 专用接线端子连接器</h3></li>
            <li class="swiper-slide scale">
            <div class="photo">
              <div class="imgh imgh169">
              <img src={require('@/static/picture/secElectrician_04.jpg')} />
              </div>
            </div><h3 class="title ellipsis">一根管不超过 三个弯角、转角</h3></li>
            <li class="swiper-slide scale">
            <div class="photo">
              <div class="imgh imgh169">
              <img src={require('@/static/picture/secElectrician_05.jpg')} />
              </div>
            </div><h3 class="title ellipsis">线管内穿线 比40%</h3></li>
            <li class="swiper-slide scale">
            <div class="photo">
              <div class="imgh imgh169">
              <img src={require('@/static/picture/secElectrician_06.jpg')} />
              </div>
            </div><h3 class="title ellipsis">强弱电交叉铝 箔纸防干扰技术</h3></li>
            <li class="swiper-slide scale">
            <div class="photo">
              <div class="imgh imgh169">
              <img src={require('@/static/picture/secElectrician_07.jpg')} />
              </div>
            </div><h3 class="title ellipsis">标准PVC 阻燃管</h3></li>
            <li class="swiper-slide scale">
            <div class="photo">
              <div class="imgh imgh169">
              <img src={require('@/static/picture/secElectrician_08.jpg')} />
              </div>
            </div><h3 class="title ellipsis">厨房、卫生间、阳台 强弱电不允许沿地面施工</h3></li>
            <li class="swiper-slide scale">
            <div class="photo">
              <div class="imgh imgh169">
              <img src={require('@/static/picture/secElectrician_09.jpg')} />
              </div>
            </div><h3 class="title ellipsis">强弱电施工距离 墙体30CM</h3></li>
            <li class="swiper-slide scale">
            <div class="photo">
              <div class="imgh imgh169">
              <img src={require('@/static/picture/secElectrician_10.jpg')} />
              </div>
            </div><h3 class="title ellipsis">强电离煤气表、 煤气管道20CM</h3></li>
            <li class="swiper-slide scale">
            <div class="photo">
              <div class="imgh imgh169">
              <img src={require('@/static/picture/secElectrician_11.jpg')} />
              </div>
            </div><h3 class="title ellipsis">弱电单管 单线</h3></li>
          </ul>
          <a href="javascript:void(0);" class="sbtn prev"><i class="icon2"></i></a>
          <a href="javascript:void(0);" class="sbtn next"><i class="icon2"></i></a>
          </div>
        </div>
        </div>
         */}
        <div class="secWaterway wrap">
        <div class="ztTitle">
          <h2><span>圆色欧标6.0工艺</span>水路工艺</h2>
          <div class="line">
          <span></span>
          <em></em>
          </div>
          <p>以欧标工艺为基础，在结合国内建筑装饰验收规范，形成了圆色装饰欧标6.0工艺体系</p>
        </div>
        <ul class="ztCon">
          <li>
          <div class="photo scale">
            <div class="imgh imgh169">
            <img src={require('@/static/picture/secWaterway_01.jpg')} />
            </div>
          </div><h3 class="title clamp">厨卫走顶，防凝水，消噪音，<br /> 安全耐用，功能独立</h3></li>
          <li>
          <div class="photo scale">
            <div class="imgh imgh169">
            <img src={require('@/static/picture/secWaterway_02.jpg')} />
            </div>
          </div><h3 class="title clamp">厨卫水路走顶更清晰</h3></li>
          <li>
          <div class="photo scale">
            <div class="imgh imgh169">
            <img src={require('@/static/picture/secWaterway_03.jpg')} />
            </div>
          </div><h3 class="title clamp">下水噪音处理更安静用水用电更安全</h3></li>
          <li id="end">
          <div class="photo scale">
            <div class="imgh imgh169">
            <img src={require('@/static/picture/secWaterway_04.jpg')} />
            </div>
          </div><h3 class="title clamp">居住起来更放心</h3></li>
        </ul>
        </div>
        <div class="secTieZhuang wrap">
        <div class="ztTitle">
          <h2><span>圆色欧标6.0工艺</span>贴砖工艺</h2>
          <p>以欧标工艺为基础，在结合国内建筑装饰验收规范，形成了圆色装饰欧标6.0工艺体系</p>
        </div>
        <div class="ztCon">
          <div class="photo scale">
          <div class="imgh">
            <img src={require('@/static/picture/secTieZhuang.jpg')} />
          </div>
          </div>
          <div class="info">
          <h3 class="ht">6.0贴砖工艺</h3>
          <p class="note"><span>1、</span>平整、持久美观；<br /><span>2、</span>基础水泥沙灰找平，配合比 2:1，垂直平整，2 米/3mm，阴阳角 90&deg;标准；<br /><span>3、</span>校准垂直平整，可升级瓷砖胶顶及铺贴工艺；<br /><span>4、</span>墙砖面平整度要求 2mm/2 米（国际标准 5mm/2 米）,铺贴平整，瓷缝对齐，整洁美观；<br /><span>5、</span>碰角工艺，尽显高端品质；<br /></p>
          </div>
        </div>
        </div>
        {/* <div class="secDiaoDing wrap" data="halfSlide" data-view="3" data-auto="999" data-space="240" data-center="1">
        <div class="ztTitle ztTitle2">
          <h2><span>圆色欧标6.0工艺</span>吊顶全轻钢龙骨工艺</h2>
          <p>以欧标工艺为基础，在结合国内建筑装饰验收规范，形成了圆色装饰欧标6.0工艺体系</p>
        </div>
        <div class="bd swiper-container">
          <ul class="swiper-wrapper">
          <li class="swiper-slide scale">
            <div class="photo">
            <div class="imgh imgh169">
              <img src={require('@/static/picture/secDiaoDing_01.jpg')} />
            </div>
            </div><h3 class="title ellipsis">牢固、安全美观</h3></li>
          <li class="swiper-slide scale">
            <div class="photo">
            <div class="imgh imgh169">
              <img src={require('@/static/picture/secDiaoDing_02.jpg')} />
            </div>
            </div><h3 class="title ellipsis">牢固、安全美观</h3></li>
          <li class="swiper-slide scale">
            <div class="photo">
            <div class="imgh imgh169">
              <img src={require('@/static/picture/secDiaoDing_03.jpg')} />
            </div>
            </div><h3 class="title ellipsis">牢固、安全美观</h3></li>
          <li class="swiper-slide scale">
            <div class="photo">
            <div class="imgh imgh169">
              <img src={require('@/static/picture/secDiaoDing_04.jpg')} />
            </div>
            </div><h3 class="title ellipsis">牢固、安全美观</h3></li>
          </ul>
          <a href="javascript:void(0);" class="sbtn prev"><i class="icon2"></i></a>
          <a href="javascript:void(0);" class="sbtn next"><i class="icon2"></i></a>
        </div>
        <div class="hd"></div>
        </div>
        */}
        <div class="secFangShui wrap">
        <div class="ztTitle">
          <h2><span>圆色欧标6.0工艺</span>防水工艺</h2>
          <p>以欧标工艺为基础，在结合国内建筑装饰验收规范，形成了圆色装饰欧标6.0工艺体系</p>
        </div>
        <div class="ztCon">
          <div class="photo scale">
          <div class="imgh">
            <img src={require('@/static/picture/secFangShui.jpg')} />
          </div>
          </div>
          <div class="info">
          <h3 class="ht">6.0防水工艺</h3>
          <p class="note"><span>1、</span>双重保护，永不渗透；<br /><span>2、</span>防水施工室内温度不低于 5 摄氏度；<br /><span>3、</span>做防水前处理基层表面应平整、坚实、无尖锐角、浮尘和明水，并做好防水节点处理；<br /><span>4、</span>油污须清除干净，低凹破损处修平；<br /><span>5、</span>在家装中只要有防水要求部位，都必须做防水处理；<br /><span>6、</span>除基层处理外，保证至少两遍防水处理，墙脚和管根等关键部位采用防水卷材附加层处理；<br /></p>
          </div>
        </div>
        </div>
        <div class="secRuJiaoQi wrap" data="halfSlide" data-view="1" data-auto="999" data-space="0">
        <div class="ztTitle">
          <h2><span>圆色欧标6.0工艺</span>乳胶漆工艺</h2>
          <p>以欧标工艺为基础，在结合国内建筑装饰验收规范，形成了圆色装饰欧标6.0工艺体系</p>
        </div>
        <div class="bd swiper-container">
          <div class="swiper-wrapper"> 
          <ul class="swiper-slide clearfix"> 
            <li>
            <div class="box scale">
              <div class="photo">
              <div class="imgh">
                <img src={require('@/static/picture/secRuJiaoQi_01.jpg')} />
              </div>
              </div>
              <h3 class="title clamp">8 道工序，防开裂，平整美观</h3>
            </div></li> 
            <li>
            <div class="box scale">
              <div class="photo">
              <div class="imgh">
                <img src={require('@/static/picture/secRuJiaoQi_02.jpg')} />
              </div>
              </div>
              <h3 class="title clamp">道墙面处理工艺，确保墙面质量合格， 从根本解决原基础墙面存在开裂隐患</h3>
            </div></li> 
            <li>
            <div class="box scale">
              <div class="photo">
              <div class="imgh">
                <img src={require('@/static/picture/secRuJiaoQi_03.jpg')} />
              </div>
              </div>
              <h3 class="title clamp">1 道墙面基层铲除，解决墙面质量隐患</h3>
            </div></li> 
            <li>
            <div class="box scale">
              <div class="photo">
              <div class="imgh">
                <img src={require('@/static/picture/secRuJiaoQi_04.jpg')} />
              </div>
              </div>
              <h3 class="title clamp">1道界面剂处理固化原始墙体</h3>
            </div></li> 
            <li>
            <div class="box scale">
              <div class="photo">
              <div class="imgh">
                <img src={require('@/static/picture/secRuJiaoQi_05.jpg')} />
              </div>
              </div>
              <h3 class="title clamp">2到基层处理更放心，墙面处理更平直</h3>
            </div></li> 
          </ul> 
          <ul class="swiper-slide clearfix"> 
            <li>
            <div class="box scale">
              <div class="photo">
              <div class="imgh">
                <img src={require('@/static/picture/secRuJiaoQi_06.jpg')} />
              </div>
              </div>
              <h3 class="title clamp">2到基层处理更放心，墙面处理更平直</h3>
            </div></li> 
            <li>
            <div class="box scale">
              <div class="photo">
              <div class="imgh">
                <img src={require('@/static/picture/secRuJiaoQi_07.jpg')} />
              </div>
              </div>
              <h3 class="title clamp">2到基层处理更放心，墙面处理更平直</h3>
            </div></li> 
            <li>
            <div class="box scale">
              <div class="photo">
              <div class="imgh">
                <img src={require('@/static/picture/secRuJiaoQi_08.jpg')} />
              </div>
              </div>
              <h3 class="title clamp">2到基层处理更放心，墙面处理更平直</h3>
            </div></li> 
            <li>
            <div class="box scale">
              <div class="photo">
              <div class="imgh">
                <img src={require('@/static/picture/secRuJiaoQi_09.jpg')} />
              </div>
              </div>
              <h3 class="title clamp">2到基层处理更放心，墙面处理更平直</h3>
            </div></li> 
            <li>
            <div class="box scale">
              <div class="photo">
              <div class="imgh">
                <img src={require('@/static/picture/secRuJiaoQi_10.jpg')} />
              </div>
              </div>
              <h3 class="title clamp">2到基层处理更放心，墙面处理更平直</h3>
            </div></li> 
          </ul> 
          </div>
        </div> 
        <div class="hd"></div>
        </div>
        <div class="secQTFG wrap">
        <div class="ztTitle">
          <h2><span>圆色欧标6.0工艺 </span>墙体封固工艺</h2>
          <p>以欧标工艺为基础，在结合国内建筑装饰验收规范，形成了圆色装饰欧标6.0工艺体系</p>
        </div>
        <div class="ztCon">
          <div class="photo">
          <div class="imgh">
            <img src={require('@/static/picture/secQTFG.jpg')} />
          </div>
          </div>
          <div class="info">
          <h3 class="ht">6.0墙体封固工艺</h3>
          <p class="note"><span>1、</span>原墙墙固滚涂；<br /><span>2、</span>增强抗碱性、墙体强度；<br /><span>3、</span>增强腻子附着力，延长墙体寿命；<br /></p>
          </div>
        </div>
        </div>
        <div class="secQiangTi wrap">
        <div class="ztTitle">
          <h2><span>圆色欧标6.0工艺</span>墙体工艺</h2>
          <p>以欧标工艺为基础，在结合国内建筑装饰验收规范，形成了圆色装饰欧标6.0工艺体系</p>
        </div>
        <ul class="ztCon">
          <li class="clearfix">
          <div class="photo scale">
            <div class="imgh">
            <img src={require('@/static/picture/secQiangTi_01.jpg')} />
            </div>
          </div>
          <div class="title">
            <div class="tabV">
            <div class="td">
              牢固、防开裂
            </div>
            </div>
          </div></li>
          <li id="end" class="clearfix">
          <div class="photo scale">
            <div class="imgh">
            <img src={require('@/static/picture/secQiangTi_02.jpg')} />
            </div>
          </div>
          <div class="title">
            <div class="tabV">
            <div class="td">
              新旧墙体和不同材质的接缝加挂钢丝网或尼龙网，为防裂措施确保 新墙体与老墙体之间不开裂
            </div>
            </div>
          </div></li>
          <li class="clearfix">
          <div class="photo scale">
            <div class="imgh">
            <img src={require('@/static/picture/secQiangTi_03.jpg')} />
            </div>
          </div>
          <div class="title">
            <div class="tabV">
            <div class="td">
              间隔 50㎝加 一道钢筋与 原墙体连接
            </div>
            </div>
          </div></li>
          <li id="end" class="clearfix">
          <div class="photo scale">
            <div class="imgh">
            <img src={require('@/static/picture/secQiangTi_04.jpg')} />
            </div>
          </div>
          <div class="title">
            <div class="tabV">
            <div class="td">
              红砖封闭更牢固，更隔音，厨卫贴砖更有保障
            </div>
            </div>
          </div></li>
        </ul>
        </div>
        {/* <div class="secXiaoYIn wrap">
        <div class="ztTitle">
          <h2><span>圆色欧标6.0工艺 </span>下水管消音工艺</h2>
          <p>以欧标工艺为基础，在结合国内建筑装饰验收规范，形成了圆色装饰欧标6.0工艺体系</p>
        </div>
        <div class="ztCon">
          <div class="photo">
          <div class="imgh">
            <img src={require('@/static/picture/secXiaoYIn.jpg')} />
          </div>
          </div>
          <div class="info">
          <h3 class="ht">6.0墙体封固工艺</h3>
          <p class="note"><span>1、</span>无干扰，高质量睡眠；<br /><span>2、</span>专有隔音技术，不让自己生活影响他人，也不让他人生活不影响自己 </p>
          </div>
        </div>
        </div>
         */}
        <div class="secXiuZheng wrap">
        <div class="ztTitle ztTitle2">
          <h2><span>圆色欧标6.0工艺 </span>乳胶漆墙角修正工艺</h2>
          <p>以欧标工艺为基础，在结合国内建筑装饰验收规范，形成了圆色装饰欧标6.0工艺体系</p>
        </div>
        <div class="ztCon">
          <ul class="clearfix">
          <li class="li1 scale">
            <div class="imgh">
            <img src={require('@/static/picture/secXiuZheng_01.jpg')} />
            </div></li>
          <li class="scale">
            <div class="imgh">
            <img src={require('@/static/picture/secXiuZheng_02.jpg')} />
            </div></li>
          <li class="scale" id="end">
            <div class="imgh">
            <img src={require('@/static/picture/secXiuZheng_03.jpg')} />
            </div></li>
          </ul>
          <p class="note">顺直，防碰撞，美观<br />工艺：先对原始阴阳角进行石膏提直，在对阴角和阳角位置使用 PVC 提直条进行处理，最后按照乳胶漆面处理工艺进行作业<br />特点：不会因为工人技术水平不同造成墙面处理效果不同；将 PVC 材料固化在墙里面，更加牢固，防止碰撞，更加美观</p>
        </div>
        </div>
        {/* <div class="secBrand wrap">
        <div class="ztTitle">
          <h2><span>圆色欧标6.0工艺</span>合作品牌</h2>
          <p>以欧标工艺为基础，在结合国内建筑装饰验收规范，形成了圆色装饰欧标6.0工艺体系</p>
        </div>
        <div class="ztCon posr" data="halfSlide" data-view="1" data-auto="999" data-space="0" dat-loop="0">
          <div class="hd">
          <ul class="hdli2">
            <li><a href="javascript:void(0);" class="imga"><img src={require('@/static/picture/px_02.png')} data-original='upfiles/2020/06/10/cc3ab2f30b31cff7.png' alt="tata木门" /></a></li>
            <li><a href="javascript:void(0);" class="imga"><img src={require('@/static/picture/px_07.png')} data-original='upfiles/2020/06/05/9304f762d9c42391.jpg' alt="加拿大喜加漆涂料（兰舍硅藻泥水性涂料）" /></a></li>
            <li><a href="javascript:void(0);" class="imga"><img src={require('@/static/picture/px_02.png')} data-original='upfiles/2020/06/05/683ac37387cd9de1.jpg' alt="LAFARGE" /></a></li>
            <li><a href="javascript:void(0);" class="imga"><img src={require('@/static/picture/px_02.png')} data-original='upfiles/2020/06/05/e310a601968e0674.jpg' alt="鹏龙" /></a></li>
            <li><a href="javascript:void(0);" class="imga"><img src={require('@/static/picture/px_09.png')} data-original='upfiles/2020/06/05/752cdc6d981c2d7d.jpg' alt="喜加" /></a></li>
            <li><a href="javascript:void(0);" class="imga"><img src={require('@/static/picture/px_08.png')} data-original='upfiles/2020/06/05/75a6bb19eba2732c.jpg' alt="东方雨虹" /></a></li>
            <li id="end"><a href="javascript:void(0);" class="imga"><img src={require('@/static/picture/px_05.png')} data-original='upfiles/2020/06/05/76f89f06fac3ac75.jpg' alt="昆电工" /></a></li>
          </ul>
          <ul class="pager none"></ul>
          </div>
          <div class="bd swiper-container">
          <ul class="swiper-wrapper">
            <li class="swiper-slide"><h3 class="title ellipsis">tata木门</h3>
            <div class="note ellipsis"></div></li>
            <li class="swiper-slide"><h3 class="title ellipsis">加拿大喜加漆涂料（兰舍硅藻泥水性涂料）</h3>
            <div class="note ellipsis">
              水性涂料，无放射性,不含有机溶剂，无透气结膜，密封性好
            </div></li>
            <li class="swiper-slide"><h3 class="title ellipsis">LAFARGE</h3>
            <div class="note ellipsis">
              水性涂料，无放射性,不含有机溶剂，无透气结膜，密封性好
            </div></li>
            <li class="swiper-slide"><h3 class="title ellipsis">鹏龙</h3>
            <div class="note ellipsis">
              水性涂料，无放射性,不含有机溶剂，无透气结膜，密封性好
            </div></li>
            <li class="swiper-slide"><h3 class="title ellipsis">喜加</h3>
            <div class="note ellipsis">
              水性涂料，无放射性,不含有机溶剂，无透气结膜，密封性好
            </div></li>
            <li class="swiper-slide"><h3 class="title ellipsis">东方雨虹</h3>
            <div class="note ellipsis"></div></li>
            <li class="swiper-slide"><h3 class="title ellipsis">昆电工</h3>
            <div class="note ellipsis"></div></li>
          </ul>
          </div>
        </div>
        </div>
       */}
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
