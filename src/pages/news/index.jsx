/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
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
import '@/common/config';
import { Pagination } from 'antd';
import {Link} from 'umi';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class NEWS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
      tabs:0,
      list:[],
      current:1,
      pageSize:12,
      pageCount:0,
    };
  }
  componentWillReceiveProps(nextProps) {
    const { tabs } = nextProps.location.query;
    const  tabs1 = this.state.tabs;
    if (tabs && tabs1 && tabs !== tabs1) {
      location.reload();
      // console.log(11111111)
      // this.setState({
      //   tabs:tabs
      // })
      // if(tabs==1){
      //   this.handleClickTabs(1);
      // }else if(tabs==2){
      //   this.handleClickTabs(2);
      // }else if(tabs==3){
      //   this.handleClickTabs(3);
      // }else if(tabs==4){
      //   this.handleClickTabs(4);
      // }else{
      //   this.handleClickTabs(0);
      // }
    }
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   //该方法内禁止访问this
  //   const { tabs } = nextProps.location.query;
  //   if (tabs !== prevState.tabs) {
  //     //通过对比nextProps和prevState，返回一个用于更新状态的对象
  //     return {
  //       tabs: tabs
  //     }
    
  //   }
  //   //不需要更新状态，返回null
  //   return null
  // }

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
    console.log(this.props.location.query.tabs);
    if(this.props.location&&this.props.location.query&&this.props.location.query.tabs==1){
      this.handleClickTabs(1);
    }else if(this.props.location&&this.props.location.query&&this.props.location.query.tabs==2){
      this.handleClickTabs(2);
    }else if(this.props.location&&this.props.location.query&&this.props.location.query.tabs==3){
      this.handleClickTabs(3);
    }else if(this.props.location&&this.props.location.query&&this.props.location.query.tabs==4){
      this.handleClickTabs(4);
    }else{
      this.handleClickTabs(0);
    }
  }
  //装修指南
  handleSelectGuide(){
    request.get("/api/system/sysArticle/grid",{
      params:{
        page:this.state.current,
        size:this.state.pageSize,
        keycode:'guide'
      }
    })
    .then(response=>{
      console.log(response);
      this.setState({
        list:response.data.pageData,
        pageCount:response.data.pageCount,
        current:response.data.pageNum,
      });
    })
    .catch(error=>{
      console.log(error);
    });
  }
  //硬装知识
  handleSelectStuff(){
    request.get("/api/system/sysArticle/grid",{
      params:{
        page:this.state.current,
        size:this.state.pageSize,
        keycode:'stuff'
      }
    })
    .then(response=>{
      console.log(response);
      this.setState({
        list:response.data.pageData,
        pageCount:response.data.pageCount,
        current:response.data.pageNum,
      });
    })
    .catch(error=>{
      console.log(error);
    });
  }
  //最新活动
  handleSelectActivity(){
    request.get("/api/system/sysArticle/grid",{
      params:{
        page:this.state.current,
        size:this.state.pageSize,
        keycode:'activity'
      }
    })
    .then(response=>{
      console.log(response);
      this.setState({
        list:response.data.pageData,
        pageCount:response.data.pageCount,
        current:response.data.pageNum,
      });
    })
    .catch(error=>{
      console.log(error);
    });
  }
  //公司动态
  handleSelectDynamic(){
    request.get("/api/system/sysArticle/grid",{
      params:{
        page:this.state.current,
        size:this.state.pageSize,
        keycode:'dynamic'
      }
    })
    .then(response=>{
      console.log(response);
      console.log(this.state.tabs);
      this.setState({
        list:response.data.pageData,
        pageCount:response.data.pageCount,
        current:response.data.pageNum,
      });
    })
    .catch(error=>{
      console.log(error);
    });
  }
  //客户见证
  handleSelectWitness(){
    request.get("/api/system/sysArticle/grid",{
      params:{
        page:this.state.current,
        size:this.state.pageSize,
        keycode:'witness'
      }
    })
    .then(response=>{
      console.log(response);
      this.setState({
        list:response.data.pageData,
        pageCount:response.data.pageCount,
        current:response.data.pageNum,
      });
    })
    .catch(error=>{
      console.log(error);
    });
  }
  handleClickTabs(value){
    this.setState({
      current:1,
      pageSize:12,
      pageCount:0,
      list:[],
      tabs:value,
    },() => {
      if(value==0){
        this.handleSelectGuide();
      }else if(value==1){
        this.handleSelectStuff();
      }else if(value==2){
        this.handleSelectActivity();
      }else if(value==3){
        this.handleSelectDynamic();
      }else if(value==4){
        this.handleSelectWitness();
      }
    })
  }
  onChangeList(page,pageSize){
    console.log(page);
    this.setState(state=>({
      current:page,
    }),()=>{
      if(this.state.tabs==0){
        this.handleSelectGuide();
      }else if(this.state.tabs==1){
        this.handleSelectStuff();
      }else if(this.state.tabs==2){
        this.handleSelectActivity();
      }else if(this.state.tabs==3){
        this.handleSelectDynamic();
      }else if(this.state.tabs==4){
        this.handleSelectWitness();
      }
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
      <div class="Wrap ztNews ztPack">
        <div class="Wrap listNewsBanner" data="halfSlide" data-view="1" data-auto="5" data-space="0" data-loop="0">
          <div class="bd swiper-container">
            <ul class="swiper-wrapper">
            <li class="swiper-slide"><a href="javascript:void(0)" title="banner01" class="imga">
              <div class="imgh">
                <img src={require('@/static/picture/b3ac73dc9e41fd04.jpg')} data-src={require('@/static/picture/b3ac73dc9e41fd04.jpg')} alt="banner01" class="swiper-lazy" />
              </div></a></li>
            </ul>
          </div>
          <div class="hd"></div>
          <div class="infoBox">
            <div class="Column">
            <div class="leader fl">
              <a href="index.html" class="">首页</a>
              <span class="">&gt;</span>
              <a href="">装修攻略</a>
            </div>
            </div>
          </div>
          <a href="javascript:void(0);" class="sbtn prev"><i class="icon2"></i></a>
          <a href="javascript:void(0);" class="sbtn next"><i class="icon2"></i></a>
          </div>
          <div class="Column moduleCate">
          <ul class="list">
            <li><a onClick={()=>this.handleClickTabs(0)} className={this.state.tabs==0?'tabsOn':''}>装修指南<i>|</i></a></li>
            <li><a onClick={()=>this.handleClickTabs(1)} className={this.state.tabs==1?'tabsOn':''}>软装知识<i>|</i></a></li>
            <li><a onClick={()=>this.handleClickTabs(2)} className={this.state.tabs==2?'tabsOn':''}>最新活动<i>|</i></a></li>
            <li><a onClick={()=>this.handleClickTabs(3)} className={this.state.tabs==3?'tabsOn':''}>公司动态<i>|</i></a></li>
            <li><a onClick={()=>this.handleClickTabs(4)} className={this.state.tabs==4?'tabsOn':''}>客户见证<i>|</i></a></li>
            <Link to='/baoJia'><li><a>0元报价<i>|</i></a></li></Link>
            {/* <li><a >在线预约<i>|</i></a></li> */}
          </ul>
          </div>
          <div class="Column NewsList">
          <ul class="clearfix" id="PageLoadBox">
            {
              this.state.list.length>0?
              this.state.list.map(item=>{
                return(
                  <Link  to={'/gba?id='+item.id} target="_blank" class="inline">
                    <li>
                      <div class="date">
                        {item.update_time}
                      </div><h3 class="title ellipsis">{item.title}</h3>
                      <div class="imgh imgh43">
                      <img src={global.constants.imgurl+item.img_url} alt={item.title} />
                      </div>
                      <div class="info">
                      <div class="note clamp">
                        {item.description}
                      </div>
                      <i class="icon2"></i>
                      </div>
                    </li>
                  </Link>
                )
              })
              :''
            }
            {/* <li><a href="180.html" title="昆明选购沙发实用vs美观那个更加重要？" class="imga scale">
              <div class="date">
              2020-06-13
              </div><h3 class="title ellipsis">昆明选购沙发实用vs美观那个更加重要？</h3>
              <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1004.jpg')} alt="昆明选购沙发实用vs美观那个更加重要？" />
              </div>
              <div class="info">
              <div class="note clamp">
                现在客厅担任的角色不必古代知识单纯的待客的地方，我觉得现代客厅用起居室更加适合。所以一个客厅的沙发就显得尤其重要。尤其是我们日常生活基本上 50% 时间是在课题，而客厅的沙发在这个时间段使用率基本是 100% ，说是
              </div>
              <i class="icon2"></i>
              </div></a></li>
            <li><a href="179.html" title="昆明软装和硬装有什么区别？" class="imga scale">
              <div class="date">
              2020-06-13
              </div><h3 class="title ellipsis">昆明软装和硬装有什么区别？</h3>
              <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_772.jpg')} alt="昆明软装和硬装有什么区别？" />
              </div>
              <div class="info">
              <div class="note clamp">
                对于经常关注装修行业的朋友们想必经常听说很多有关装修的词汇，比如什么全包、半包、软装、硬装、整装等等....很多业主根本听不懂是什么意思，那么我们今天就来讲讲硬装和软装的的区别吧。
              </div>
              <i class="icon2"></i>
              </div></a></li>
            <li id="end"><a href="178.html" title="昆明软装色彩搭配技巧" class="imga scale">
              <div class="date">
              2020-06-12
              </div><h3 class="title ellipsis">昆明软装色彩搭配技巧</h3>
              <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1083.jpg')} alt="昆明软装色彩搭配技巧" />
              </div>
              <div class="info">
              <div class="note clamp">
                在室内装修设计中，无论是什么风格和户型的装修都离不开昆明软装。色彩搭配是最终呈现室内效果的关键所在，因此，家居色彩的搭配原则，首先要考虑到使用者的目的，再根据空间特点和功能需求进行合理搭配。只有这样，才能满足房主的使用功能和审美情趣，使人感到身心愉悦。
              </div>
              <i class="icon2"></i>
              </div></a></li>
            <li><a href="176.html" title="办公室装修细节有哪些需要注意的细节" class="imga scale">
              <div class="date">
              2020-06-08
              </div><h3 class="title ellipsis">办公室装修细节有哪些需要注意的细节</h3>
              <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1077.jpg')} alt="办公室装修细节有哪些需要注意的细节" />
              </div>
              <div class="info">
              <div class="note clamp">
                现在的人们越来越注重生活质量，所以办公室这样一个我们白天待的最久的地方装修一点都不能马虎，这直接关系到办公环境。往小的方面讲影响工作人员积极性，往大的方面讲直接和公司形象挂钩，影响企业的发展，他关系到其他合作
              </div>
              <i class="icon2"></i>
              </div></a></li>
            <li><a href="175.html" title="装修简单流程" class="imga scale">
              <div class="date">
              2020-06-08
              </div><h3 class="title ellipsis">装修简单流程</h3>
              <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_763.jpg')} alt="装修简单流程" />
              </div>
              <div class="info">
              <div class="note clamp">
                这几天在抖音上刷到一个叫小如如的女孩，以前因为表演胸口碎大石而走红网络，最近她发抖音也是在说装修遇到不开心的事情，因为没有经验，被装修师傅装到一半不加价不施工。小如如气得不知道找谁说理去。做为粉丝的我也给她
              </div>
              <i class="icon2"></i>
              </div></a></li>
            <li><a href="174.html" title="小户型客厅装修应该注意什么？" class="imga scale">
              <div class="date">
              2020-06-08
              </div><h3 class="title ellipsis">小户型客厅装修应该注意什么？</h3>
              <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1064.jpg')} alt="小户型客厅装修应该注意什么？" />
              </div>
              <div class="info">
              <div class="note clamp">
                客厅不仅是向外人展示家里装修风格的一个平台，也能体现出主人的审美和品味，所以一个客厅的软装就显得尤为重要了。那么小户型的 室内软装设计 应该注意哪些东西呢？ 1. 沙发 沙发的选择和摆放需要注意。布艺沙发造型和颜
              </div>
              <i class="icon2"></i>
              </div></a></li>
            <li id="end"><a href="127.html" title="中式软装 &middot; 无法拒绝的美" class="imga scale">
              <div class="date">
              2020-05-10
              </div><h3 class="title ellipsis">中式软装 &middot; 无法拒绝的美</h3>
              <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_411.jpg')} alt="中式软装 &middot; 无法拒绝的美" />
              </div>
              <div class="info">
              <div class="note clamp">
                新中式风格，是传统中式风格 在现代背景下的全新演绎。 它强调将现代材质与传统元素紧密融合， 但不是盲目的照搬照抄， 也不是一味的自我扬弃， 而是对传统元素加以提炼和丰富， 以现代人的审美需求去营造传统韵味， 体现出一种
              </div>
              <i class="icon2"></i>
              </div></a></li>
            <li><a href="126.html" title="软装是什么？软装包括哪些？" class="imga scale">
              <div class="date">
              2020-05-10
              </div><h3 class="title ellipsis">软装是什么？软装包括哪些？</h3>
              <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_406.jpg')} alt="软装是什么？软装包括哪些？" />
              </div>
              <div class="info">
              <div class="note clamp">
                业主深爱欧式风格，强调追求身临其境的感觉，设计师综合业主所需，精心设计、布局，全心打造了280平米、超大规模的欧式空间，得到业主的高度认可。客厅的吊灯、沙发、茶几、窗帘、背景墙等布局彰显欧式房屋的雍容华贵和典雅，正如业主所求，让人足不出户，仿佛置身于欧洲贵族豪华的家里，自鸣得意！
              </div>
              <i class="icon2"></i>
              </div></a></li>
            <li><a href="125.html" title="这5个软装搭配，好高！大！上！" class="imga scale">
              <div class="date">
              2020-05-10
              </div><h3 class="title ellipsis">这5个软装搭配，好高！大！上！</h3>
              <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_408.jpg')} alt="这5个软装搭配，好高！大！上！" />
              </div>
              <div class="info">
              <div class="note clamp">
                现如今家居装修的要求越来越高，家装风格彰显着主人的性格特点或是精神追求，主要是体现在软装搭配方面。软装是指通过家具、布艺、灯具等可移动的装饰物进行装修摆放，那么室内软装搭配有哪些技巧能让家瞬间高大上呢?
              </div>
              <i class="icon2"></i>
              </div></a></li>
            <li><a href="124.html" title="如何搭配软装更显奢华大气？" class="imga scale">
              <div class="date">
              2020-05-10
              </div><h3 class="title ellipsis">如何搭配软装更显奢华大气？</h3>
              <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_404.jpg')} alt="如何搭配软装更显奢华大气？" />
              </div>
              <div class="info">
              <div class="note clamp">
                作者：轨迹 链接：https://www.zhihu.com/question/56841217/answer/372540971 来源：知乎 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 amp;lt;img data-rawwidth=&quot;960&quot; data-rawheight=&quot;720
              </div>
              <i class="icon2"></i>
              </div></a></li>
            <li id="end"><a href="123.html" title="家居软装包括哪些？家居软装全面解析" class="imga scale">
              <div class="date">
              2020-05-10
              </div><h3 class="title ellipsis">家居软装包括哪些？家居软装全面解析</h3>
              <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_398.jpg')} alt="家居软装包括哪些？家居软装全面解析" />
              </div>
              <div class="info">
              <div class="note clamp">
                这是个欧式风格完美呈现的经典案例，是设计师替业主圆梦的真实写照！ 设计户型：昆明呈贡区渔园星浦欧式风格家装案例
              </div>
              <i class="icon2"></i>
              </div></a></li> */}
          </ul>
          </div>
          <div class="clearfix"></div>
          <div class="Pagelist">
            <Pagination onChange={(current,pageSize)=>{this.onChangeList(current,pageSize)}} defaultCurrent={1} total={this.state.pageCount} current={this.state.current} pageSize={this.state.pageSize}/>
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
