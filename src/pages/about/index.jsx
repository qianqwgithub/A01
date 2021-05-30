/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import './index.less';
import '@/static/css/style.css';
import '@/static/css/style_public.css';
import '@/static/css/minify.css';
import '@/static/css/minify11.css';
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
      tabs:'tab1',
    };
  }

  componentWillReceiveProps(nextProps) {
      console.log(nextProps);
    const { tab } = nextProps.location.query;
    const  tabs1 = this.state.tabs;
    console.log(tab);
    console.log(tabs1);
    if (tab && tabs1 && tab !== tabs1) {
      console.log(tab);
      this.setState({
        tabs:tab,
      })
      this.scrollToAnchor(tab);
    }
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
    if(this.props.location.query.tab==1){
      this.scrollToAnchor('tab1');
    }else if(this.props.location.query.tab==2){
      this.scrollToAnchor('tab2');
    }else if(this.props.location.query.tab==3){
      this.scrollToAnchor('tab3');
    }else if(this.props.location.query.tab==4){
      this.scrollToAnchor('tab4');
    }else if(this.props.location.query.tab==5){
      this.scrollToAnchor('tab5');
    }
  }

  scrollToAnchor(value){
    if (value) {
      console.log(value);
      let element = document.getElementById(value);
      console.log(element);
      if(element) {
        element.scrollIntoView(
          {behavior: 'smooth'}
        );
      }
    }
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
            <div id='tab1' class="Wrap ztPage ztAbout">
            <div class="ztSec secBanner">
              <div class="ztWrap">
              <div class="imga photo">
                <img src={require('@/static/picture/secBanner6.jpg')} />
              </div>
              </div>
            </div>
            <pre class="secAbout ztCon"><a href="index.html" class="logo inline"><img src='https://qingfan1.oss-cn-hangzhou.aliyuncs.com/logo.png' alt="圆色装饰集团【官网】" /></a><pre class="txt">云南圆色装饰工程有限公司旗下设有圆色装饰集团
                圆色装饰集团于2020年3月15日落地于春城昆明核心地段巫家坝，主要以圆色装饰集团、大宅设计为主，致力于打造以软装搭配、软装设计，大宅设计、灯光设计、风水设计、人文设计为主的家居居住环境为目标，也为昆明装饰行业注入新血液，圆色装饰集团怀着创新、创造和敢为天下先的勇气，始终坚持“服务至上，品质为王”的企业使命，相信圆色装饰集团会在昆明创造软装行业的新标杆。
                其总部位于设计之都广州，总部于2006年成立广州圆色高端设计工作室，是一家集全案设计、软装设计、大宅设计、酒店设计、办公空间设计、为一体的高端国际设计工作室，一直服务于广州人民至今，过去的15年里获得 中国软装协会理事单位、2012年荣获广东省“岭南杯”奖、2014年全国室内设计优秀设计奖、2016广东省室内设计最佳创意奖等等。
          昆明最专业的软装高端定制公司—“圆色装饰集团
                圆色装饰集团是目前昆明唯一一家专业的软装设计、软装个性定制为一体的装饰公司，圆色装饰集团的核心团队是由米兰设计学院毕业2个设计总监组建而成，设计师团队则由昆明设计界知名的首席设计师组建而成，首席设计师以及设计师多半有在各个装饰公司担任设计总监的履历，圆色装饰集团也秉着“一次体验，一生朋友”的价值观，引领行业新方向。
                圆色装饰集团是一家集家具、定制、窗帘、饰品挂画、灯具、墙纸、为一体的一站式家居个性化体验馆，品牌合作商120余家，所有产品均为集采，从原厂直接送到业主家，实现无缝对接，直接省去了中间商，销售商的费用，从根源上就做到了为业主省钱、省时、省心、省力。
                3800平超强实景软装体验馆
          圆色装饰集团有3800㎡超大实景软装体验馆，拥有10个当下最流行的装修风格软装样板房，让客户一次性体验到不同风格的搭配，也让客户真正感受到专业软装设计的与众不同，从而升华客户的体验感与参与感，真正替业主做到所见即所得。
                  我们的售后
          圆色装饰拥有庞大售后体系，从家具到装饰品，每个版块都相应的售后人员跟进，做到实时跟踪，及时报备、有问题马上处理，绝不超过24小时的服务准则，致力打造一个工地一个管家的原则，做到把问题从根源上解决，让业主随时都知道、都看到、都放心的状态。
            我们的服务
          圆色装饰集团以匠心树立行业标杆，始终坚持“服务至上，品质为王”的企业使命，把服务做到极致，融在企业的血液里，真正做到6对1的星级服务，一个业主六个负责人（首席设计师、色彩设计师、灯光设计师、风水设计师、金牌监理管家、首席软装顾问、金牌监理管家、设计总监），各个环节都有相关负责人把控，客户的事就是公司的事，全力以赴做到完善的服务。</pre>
              <div class="inline">
              <img src={require('@/static/picture/sofa.png')} alt="沙发" />
              </div></pre>
            </div>
            <div id='tab2' class="ztCon secCulture">
            <div class="ztTitle">
              <h2>企业文化<span>&middot;</span><small>Idea</small></h2>
              <div class="line"></div>
            </div>
            <ul class="clearfix">
              <li>
              <div class="box">
                <div class="num">
                01
                </div>
                <div class="line"></div>
                <h3 class="title ellipsis">企业价值观</h3>
                <div class="subTit">
                Sense
                </div>
                <pre class="clamp note">拥有感恩的心，勇于承担责任，
          不断开拓创新，协作共赢未来。</pre>
              </div></li>
              <li>
              <div class="box">
                <div class="num">
                02
                </div>
                <div class="line"></div>
                <h3 class="title ellipsis">企业使命</h3>
                <div class="subTit">
                Mission
                </div>
                <pre class="clamp note">让客户选择我们骄傲
          让员工加入我们自豪</pre>
              </div></li>
              <li>
              <div class="box">
                <div class="num">
                03
                </div>
                <div class="line"></div>
                <h3 class="title ellipsis">企业服务宗旨</h3>
                <div class="subTit">
                Service
                </div>
                <pre class="clamp note">温馨舒适我们的责任
          质量过硬我们的责任</pre>
              </div></li>
              <li id="end">
              <div class="box">
                <div class="num">
                04
                </div>
                <div class="line"></div>
                <h3 class="title ellipsis">企业愿景</h3>
                <div class="subTit">
                vision
                </div>
                <pre class="clamp note">让昆明家庭快乐装修</pre>
              </div></li>
            </ul>
            </div>
            <div id='tab3' class="wrap secHonour"  data="halfSlide" data-auto="999" data-loop="0" data-space="0">
            <div class="ztTitle">
              <h2>企业荣誉<span>&middot;</span><small>Honor</small></h2>
              <div class="line"></div>
            </div>
            <div class="bd swiper-container">
              <div class="swiper-wrapper"> 
              <ul class="swiper-slide clearfix"> 
                <li>
                <div class="box">
                  <div class="photo">
                  <div class="imgh imgh43">
                    <img src={require('@/static/picture/4174c3d096ec6f46.jpg')} />
                  </div>
                  </div>
                  <div class="info">
                  <div class="near">
                    <span>2011</span>年&nbsp;圆色装饰集团荣获：
                  </div>
                  <h3 class="title ellipsis">中国室内装饰协会会员</h3>
                  </div>
                </div></li> 
                <li>
                <div class="box">
                  <div class="photo">
                  <div class="imgh imgh43">
                    <img src={require('@/static/picture/4174c3d096ec6f46.jpg')} />
                  </div>
                  </div>
                  <div class="info">
                  <div class="near">
                    <span>2012</span>年&nbsp;圆色装饰集团荣获：
                  </div>
                  <h3 class="title ellipsis">中国建筑装饰协会会员单位</h3>
                  </div>
                </div></li> 
                <li>
                <div class="box">
                  <div class="photo">
                  <div class="imgh imgh43">
                    <img src={require('@/static/picture/4174c3d096ec6f46.jpg')} />
                  </div>
                  </div>
                  <div class="info">
                  <div class="near">
                    <span>2013</span>年&nbsp;圆色装饰集团荣获：
                  </div>
                  <h3 class="title ellipsis">最具发展里典范装饰企业</h3>
                  </div>
                </div></li> 
                <li>
                <div class="box">
                  <div class="photo">
                  <div class="imgh imgh43">
                    <img src={require('@/static/picture/4174c3d096ec6f46.jpg')} />
                  </div>
                  </div>
                  <div class="info">
                  <div class="near">
                    <span>2014</span>年&nbsp;圆色装饰集团荣获：
                  </div>
                  <h3 class="title ellipsis">中国室内装饰协会会员</h3>
                  </div>
                </div></li> 
                <li>
                <div class="box">
                  <div class="photo">
                  <div class="imgh imgh43">
                    <img src={require('@/static/picture/4174c3d096ec6f46.jpg')} />
                  </div>
                  </div>
                  <div class="info">
                  <div class="near">
                    <span>2015</span>年&nbsp;圆色装饰集团荣获：
                  </div>
                  <h3 class="title ellipsis">中国室内装饰协会会员</h3>
                  </div>
                </div></li> 
              </ul> 
              <ul class="swiper-slide clearfix"> 
                <li>
                <div class="box">
                  <div class="photo">
                  <div class="imgh imgh43">
                    <img src={require('@/static/picture/4174c3d096ec6f46.jpg')} />
                  </div>
                  </div>
                  <div class="info">
                  <div class="near">
                    <span></span>年&nbsp;圆色装饰集团荣获：
                  </div>
                  <h3 class="title ellipsis">中国室内装饰协会会员</h3>
                  </div>
                </div></li> 
              </ul> 
              </div>
            </div> 
            <div class="hd"></div>
            </div>
            <div id='tab4' class="ztCon secJob" >
            <div class="ztTitle">
              <h2>人才招聘<span>&middot;</span><small>Recruit</small></h2>
              <div class="line"></div>
            </div>
            <ul class="clearfix">
              <li>
              <div class="En">
                personnel
              </div><h3 class="title">助理设计师/</h3>
              <div class="txtBox">
                <div class="nano ove txt" data="nanoScroll">
                <div class="nano-content">
                  <div class="sheight">
                  <div class="ht">
                    招聘人数：1人&nbsp;&nbsp;&nbsp;应聘待遇：面议
                    <br />工作经验：应届 
                  </div>
                  <pre>1.协助配合室内设计师完成项目的设计任务
          2.根据设计方案辅助设计师进行设计深化、完善节点及详图设计，能独立完成施工图的设计；</pre>
                  </div>
                </div>
                </div>
              </div></li>
              <li id="end">
              <div class="En">
                personnel
              </div><h3 class="title">助理设计师/</h3>
              <div class="txtBox">
                <div class="nano ove txt" data="nanoScroll">
                <div class="nano-content">
                  <div class="sheight">
                  <div class="ht">
                    招聘人数：1人&nbsp;&nbsp;&nbsp;应聘待遇：面议
                    <br />工作经验：应届 
                  </div>
                  <pre>1.协助配合室内设计师完成项目的设计任务
          2.根据设计方案辅助设计师进行设计深化、完善节点及详图设计，能独立完成施工图的设计；</pre>
                  </div>
                </div>
                </div>
              </div></li>
              <li>
              <div class="En">
                personnel
              </div><h3 class="title">助理设计师/</h3>
              <div class="txtBox">
                <div class="nano ove txt" data="nanoScroll">
                <div class="nano-content">
                  <div class="sheight">
                  <div class="ht">
                    招聘人数：1人&nbsp;&nbsp;&nbsp;应聘待遇：面议
                    <br />工作经验：应届 
                  </div>
                  <pre>1.协助配合室内设计师完成项目的设计任务
          2.根据设计方案辅助设计师进行设计深化、完善节点及详图设计，能独立完成施工图的设计；</pre>
                  </div>
                </div>
                </div>
              </div></li>
              <li id="end">
              <div class="En">
                personnel
              </div><h3 class="title">助理设计师/</h3>
              <div class="txtBox">
                <div class="nano ove txt" data="nanoScroll">
                <div class="nano-content">
                  <div class="sheight">
                  <div class="ht">
                    招聘人数：1人&nbsp;&nbsp;&nbsp;应聘待遇：面议
                    <br />工作经验：应届 
                  </div>
                  <pre>1.协助配合室内设计师完成项目的设计任务
          2.根据设计方案辅助设计师进行设计深化、完善节点及详图设计，能独立完成施工图的设计；</pre>
                  </div>
                </div>
                </div>
              </div></li>
            </ul>
            </div>
            <div id='tab5' class="Column secContact" >
            <div class="baiduMap" id="baiduMap"></div>
            <div class="clearfix tags"> 
              <div class="phone">
              软装定制电话&nbsp;
              <span>0873—3666900</span>
              </div> 
              <div class="addr">
              地址：云南省昆明市官渡区鑫港家居建材城
              </div> 
              {/* <a href="javascript:;" onclick="javascript:J_ajaxOrderWin('发送位置到手机','/indent?ajax=1&amp;designer=17&amp;subject=关于我们-发送位置到手机-关于圆色')" title="发送位置到手机" class="inline">发送位置到手机</a> */}
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
