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
import '@/common/config';
import request from "umi-request";
import BannerAnim, { Element } from 'rc-banner-anim';

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
      case:{
        imgJson:'[]'
      },
      caseDetail:[],
    };
  }

  componentDidMount() {
    console.log(this.props.location.query.id);
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
    this.handleSelectDetailById();
  }
  handleSelectById(){
    request.get("/api/fitment/fitmentCase/"+this.props.location.query.id,{
    })
    .then(response=>{
      console.log(response);
      this.setState({
        case: response.data,
      });
      console.log(this.state);
    })
    .catch(error=>{
      console.log(error);
    });
  }
  handleSelectDetailById(){
    request.get("/api/fitment/fitmentCasePhoto/grid",{
      params:{
        caseId:this.props.location.query.id,
        page:1,
        size:10000,
      }
    })
    .then(response=>{
      console.log(response);
      this.setState({
        caseDetail: response.data.pageData,
      });
      console.log(this.state);
    })
    .catch(error=>{
      console.log(error);
    });
  }
  // CaseNodeKj_item_woshi
  scrollToAnchor(value){
    if (value) {
        let element = document.getElementById(value);
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
      <div class="Wrap ztCasesDetail ztPage">
          <div class="casesImgSlide Wrap" data="halfSlide" data-big="1" data-loop="0" data-auto="999" data-space="0">
            <div class="box">
              {/* <div class="bHd">
              <ul class="hdli2"> 
                <li><a href="javascript:void(0);" class="imga">图片</a></li> 
                <li><a href="javascript:void(0);" class="imga">视频</a></li> 
                <li><a href="javascript:void(0);" class="imga">户型</a></li> 
              </ul>
              <ul class="pager none"></ul>
              </div> */}
              <div class="bBd swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                <div class="Wrap CaseSlide" data="halfSlide" data-auto="999" data-loop="0">
                  <div class="bd swiper-container">
                  <ul class="swiper-wrapper">
                  <BannerAnim
                    type="across"
                    arrow={true}
                    autoPlay
                  >
                    {JSON.parse(this.state.case.imgJson).map((item,index)=>{
                      return(
                      <Element
                        prefixCls="banner-user-elem"
                        key={index}
                      >
                      <li class="swiper-slide">
                        <div class="img">
                          <div class="trbl tabV">
                          <div class="td">
                            <img src={global.constants.imgurl+item.filePath}  class="swiper-lazy" />
                          </div>
                          </div>
                        </div>
                      </li>
                      </Element>
                      )
                    })}
                  </BannerAnim>
                  </ul>
                  </div>
                  <a href="javascript:;" class="sbtn prev"><i class="icon2"></i></a>
                  <a href="javascript:;" class="sbtn next"><i class="icon2"></i></a>
                </div>
                </div>
                <div class="swiper-slide">
                <div class="CasesIframe">
                  <iframe src="javascript:window.open('https://vr.justeasy.cn/view/6881687.html?from=singlemessage&amp;isappinstalled=0');"></iframe>
                </div>
                </div>
                <div class="swiper-slide">
                <div class="Wrap CaseSlide" data="halfSlide" data-auto="999" data-loop="0">
                  <div class="bd swiper-container">
                  <ul class="swiper-wrapper">
                    <li class="swiper-slide swiper-slide-li">
                    <div class="img">
                      <div class="trbl tabV">
                      <div class="td">
                        <img src={require('@/static/picture/b7209274b95f3929.jpg')} data-src={require('@/static/picture/b7209274b95f3929.jpg')} alt="msgCasesUnit" class="swiper-lazy" />
                        <div class="swiper-lazy-preloader"></div>
                      </div>
                      </div>
                    </div></li>
                  </ul>
                  </div>
                </div>
                </div>
              </div>
              </div>
            </div>
            <div class="infoTop">
              <div class="Column">
              {/* <div class="leader fl">
                <a href="index.html" class="">首页</a>
                <span class="">&gt;</span>
                <a href="cases.html">案例赏析</a>
                <span class="">&gt;</span>
                <a href="cases02.html">图片案例</a>
                <span class="">&gt;</span>保利&middot;玺樾
              </div> */}
              {/* <div class="designer clearfix fr">
                <div class="photo fl">
                <div class="imgh11 imgh">
                  <img src={require('@/static/picture/px_03.png')} data-original={require('@/static/picture/thumb_479.png')} alt="王咏琪" />
                </div>
                </div>
                <div class="info fl">
                <h3 class="tit">王咏琪</h3>
                <div class="job">
                  6年软装设计师
                </div>
                </div>
                <a href="javascript:;" onclick="javascript:J_ajaxOrderWin('为我设计','/indent?ajax=1&amp;designer=24&amp;subject=案例赏析-为我设计-保利&middot;玺樾')" title="为我设计" class="inline btn">为我设计</a>
              </div> */}
              </div>
            </div>
            </div>
            <div class="CaseInfo Column">
            <h1 class="title">{this.state.case.title}</h1>
            <div class="tags">
              / {this.state.case.typetitle} / {this.state.case.area}m&sup2; / {this.state.case.styletitle}
            </div>
            <div className='content' dangerouslySetInnerHTML={{__html: this.state.case.content}}></div>
            </div>
            <div class="CaseMsgWrap">
            <div class="CaseNodeKj Column">
              <div class="CaseNodeKjNav">
              <ul class="clearfix">
                <li class="line"></li>
                <li onClick={()=>this.scrollToAnchor("CaseNodeKj_item_keting")}><a href="javascript:void(0);" class="imga"><span><em></em></span>客厅</a></li>
                <li onClick={()=>this.scrollToAnchor("CaseNodeKj_item_chufang")}><a href="javascript:void(0);" class="imga"><span><em></em></span>厨房</a></li>
                <li onClick={()=>this.scrollToAnchor("CaseNodeKj_item_woshi")}><a class="imga"><span><em></em></span>卧室</a></li>
                <li onClick={()=>this.scrollToAnchor("CaseNodeKj_item_canting")}><a href="javascript:void(0);" class="imga"><span><em></em></span>餐厅</a></li>
              </ul>
              {/* <a href="javascript:void(0)" onclick="javascript:doPraise(this)" data-tid="24" class="praise doPraise imga">
                <div class="ico">
                <i class="icon2"></i>
                <div class="txt">
                  <span></span>为内容点赞
                </div>
                </div><em class="num">100</em><span>赞</span></a>
               */}
              </div>
              <div class="item" id="CaseNodeKj_item_keting">
              <h4 class="title">客厅空间</h4> 
              {/* <div class="txt">
                用多元化的颜色搭配拒绝无趣，灰蓝色系沙发，灰粉色系抱枕，黄色绿色跳跃色系灯具，黑框玻璃门+黑框谷仓门。简单明了无过多装饰，偏工业风的吊顶灯，复古绿的电视墙和皮质沙发，纯黑色大理石茶几，无一不彰显着业主放浪不羁的赤子心。
              </div>  */}
              <ul class="clearfix img">
                {
                  this.state.caseDetail.map(item=>{
                    if(item.datatype==0){
                      return(
                        <li>
                          <div class="imgh imgh43">
                            <img src={global.constants.imgurl+item.img_url} />
                          </div>
                          <div class="txt">
                            {item.title}
                          </div>
                        </li>
                      )
                    }
                  })
                }
              </ul>
              </div>
              <div class="item" id="CaseNodeKj_item_chufang">
              <h4 class="title">厨房空间</h4> 
              {/* <div class="txt">
                用多元化的颜色搭配拒绝无趣，灰蓝色系沙发，灰粉色系抱枕，黄色绿色跳跃色系灯具，黑框玻璃门+黑框谷仓门。简单明了无过多装饰，偏工业风的吊顶灯，复古绿的电视墙和皮质沙发，纯黑色大理石茶几，无一不彰显着业主放浪不羁的赤子心。
              </div>  */}
              <ul class="clearfix img">
                {
                  this.state.caseDetail.map(item=>{
                    if(item.datatype==1){
                      return(
                        <li>
                          <div class="imgh imgh43">
                            <img src={global.constants.imgurl+item.img_url} />
                          </div>
                          <div class="txt">
                            {item.title}
                          </div>
                        </li>
                      )
                    }
                  })
                }
              </ul>
              </div>
              
              <div class="item" id="CaseNodeKj_item_canting">
              <h4 class="title">餐厅空间</h4> 
              {/* <div class="txt">
                用多元化的颜色搭配拒绝无趣，灰蓝色系沙发，灰粉色系抱枕，黄色绿色跳跃色系灯具，黑框玻璃门+黑框谷仓门。简单明了无过多装饰，偏工业风的吊顶灯，复古绿的电视墙和皮质沙发，纯黑色大理石茶几，无一不彰显着业主放浪不羁的赤子心。
              </div>  */}
              <ul class="clearfix img">
                {
                  this.state.caseDetail.map(item=>{
                    if(item.datatype==3){
                      return(
                        <li>
                          <div class="imgh imgh43">
                            <img src={global.constants.imgurl+item.img_url} />
                          </div>
                          <div class="txt">
                            {item.title}
                          </div>
                        </li>
                      )
                    }
                  })
                }
              </ul>
              </div>
              <div class="item" id="CaseNodeKj_item_woshi" ref='CaseNodeKj_item_woshi'>
              <h4 class="title">卧室空间</h4> 
              {/* <div class="txt">
                用多元化的颜色搭配拒绝无趣，灰蓝色系沙发，灰粉色系抱枕，黄色绿色跳跃色系灯具，黑框玻璃门+黑框谷仓门。简单明了无过多装饰，偏工业风的吊顶灯，复古绿的电视墙和皮质沙发，纯黑色大理石茶几，无一不彰显着业主放浪不羁的赤子心。
              </div>  */}
              <ul class="clearfix img">
                {
                  this.state.caseDetail.map(item=>{
                    if(item.datatype==2){
                      return(
                        <li>
                          <div class="imgh imgh43">
                            <img src={global.constants.imgurl+item.img_url} />
                          </div>
                          <div class="txt">
                            {item.title}
                          </div>
                        </li>
                      )
                    }
                  })
                }
              </ul>
              </div>
            </div>
            </div>
            {/* <div class="Column moreCases" data="halfSlide" data-view="1" data-auto="999" data-space="0" data-loop="0" data-autoheight="1">
            <div class="hd">
              <div class="ht">
              案例推荐
              </div>
              <ul class="hdli2 clearfix"> 
              <li><a href="javascript:void(0);">同风格案例</a></li> 
              <li><a href="javascript:void(0);">同配套案例</a></li> 
              </ul>
              <ul class="pager none"></ul>
            </div>
            <div class="bd swiper-container CasesList">
              <div class="swiper-wrapper">
              <div class="item swiper-slide group CasesList">
                <a href="javascript:;" onclick="javascript:changeGroup(this,3)" class="imga btn"><i class="icon2"></i>换一换</a>
                <ul class="clearfix">
                <li class="li_1 show"><a href="217.html" title="筑友双河湾及第苑" class="imga scale photo">
                  <div class="imgh imgh43">
                    <img src={require('@/static/picture/thumb_1616.jpg')} alt="筑友双河湾及第苑" />
                  </div>
                  <div class="trbl bg">
                    <i class="icon2"></i>
                  </div></a>
                  <div class="info clearfix">
                  <a href="79.html" title="王向稳" target="_blank" class="imga designer">
                    <div class="imgh imgh11">
                    <img src={require('@/static/picture/thumb_493.png')} data-original={require('@/static/picture/thumb_493.png')} alt="王向稳" />
                    </div></a>
                  <div class="ove">
                    <p class="tags ellipsis"> 三室两厅 / 168m&sup2; / 新古典 </p>
                    <a href="217.html" title="筑友双河湾及第苑" class="imga"><h3 class="title ellipsis">筑友双河湾及第苑</h3></a>
                  </div>
                  </div></li>
                <li class="li_2 show"><a href="212.html" title="银海泊岸" class="imga scale photo">
                  <div class="imgh imgh43">
                    <img src={require('@/static/picture/thumb_1522.jpg')} alt="银海泊岸" />
                  </div>
                  <div class="trbl bg">
                    <i class="icon2"></i>
                  </div></a>
                  <div class="info clearfix">
                  <a href="84.html" title="李叶融" target="_blank" class="imga designer">
                    <div class="imgh imgh11">
                    <img src={require('@/static/picture/thumb_488.png')} data-original={require('@/static/picture/thumb_488.png')} alt="李叶融" />
                    </div></a>
                  <div class="ove">
                    <p class="tags ellipsis"> 三室一厅 / 118m&sup2; / 新古典 </p>
                    <a href="212.html" title="银海泊岸" class="imga"><h3 class="title ellipsis">银海泊岸</h3></a>
                  </div>
                  </div></li>
                <li class="li_3 show" id="end"><a href="201.html" title="领秀星辰园" class="imga scale photo">
                  <div class="imgh imgh43">
                    <img src={require('@/static/picture/thumb_1406.jpg')} alt="领秀星辰园" />
                  </div>
                  <div class="trbl bg">
                    <i class="icon2"></i>
                  </div></a>
                  <div class="info clearfix">
                  <a href="136.html" title="程囿林" target="_blank" class="imga designer">
                    <div class="imgh imgh11">
                    <img src={require('@/static/picture/thumb_480.png')} data-original={require('@/static/picture/thumb_480.png')} alt="程囿林" />
                    </div></a>
                  <div class="ove">
                    <p class="tags ellipsis"> 三室两厅 / 168m&sup2; / 新古典 </p>
                    <a href="201.html" title="领秀星辰园" class="imga"><h3 class="title ellipsis">领秀星辰园</h3></a>
                  </div>
                  </div></li>
                <li class="li_4" style="display: none;"><a href="" title="保利&middot;玺樾" class="imga scale photo">
                  <div class="imgh imgh43">
                    <img src={require('@/static/picture/thumb_16.jpg')} alt="保利&middot;玺樾" />
                  </div>
                  <div class="trbl bg">
                    <i class="icon2"></i>
                  </div></a>
                  <div class="info clearfix">
                  <a href="144.html" title="王咏琪" target="_blank" class="imga designer">
                    <div class="imgh imgh11">
                    <img src={require('@/static/picture/px_03.png')} data-original={require('@/static/picture/thumb_479.png')} alt="王咏琪" />
                    </div></a>
                  <div class="ove">
                    <p class="tags ellipsis"> 洋房 / 200m&sup2; / 新古典 </p>
                    <a href="" title="保利&middot;玺樾" class="imga"><h3 class="title ellipsis">保利&middot;玺樾</h3></a>
                  </div>
                  </div></li>
                </ul>
              </div>
              <div class="item swiper-slide group CasesList">
                <a href="javascript:;" onclick="javascript:changeGroup(this,3)" class="imga btn"><i class="icon2"></i>换一换</a>
                <ul class="clearfix">
                <li class="li_1 show"><a href="186.html" title="盛唐城 180㎡新中式" class="imga scale photo">
                  <div class="imgh imgh43">
                    <img src={require('@/static/picture/thumb_1190.jpg')} alt="盛唐城 180㎡新中式" />
                  </div>
                  <div class="trbl bg">
                    <i class="icon2"></i>
                  </div></a>
                  <div class="info clearfix">
                  <a href="83.html" title="黄红梅" target="_blank" class="imga designer">
                    <div class="imgh imgh11">
                    <img src={require('@/static/picture/px_05.png')} data-original={require('@/static/picture/thumb_487.png')} alt="黄红梅" />
                    </div></a>
                  <div class="ove">
                    <p class="tags ellipsis"> 洋房 / 180m&sup2; / 新中式 </p>
                    <a href="186.html" title="盛唐城 180㎡新中式" class="imga"><h3 class="title ellipsis">盛唐城 180㎡新中式</h3></a>
                  </div>
                  </div></li>
                <li class="li_2 show"><a href="188.html" title="昆明恒大名都-欧式风格" class="imga scale photo">
                  <div class="imgh imgh43">
                    <img src={require('@/static/picture/thumb_1226.jpg')} alt="昆明恒大名都-欧式风格" />
                  </div>
                  <div class="trbl bg">
                    <i class="icon2"></i>
                  </div></a>
                  <div class="info clearfix">
                  <a href="144.html" title="王咏琪" target="_blank" class="imga designer">
                    <div class="imgh imgh11">
                    <img src={require('@/static/picture/px_06.png')} data-original={require('@/static/picture/thumb_479.png')} alt="王咏琪" />
                    </div></a>
                  <div class="ove">
                    <p class="tags ellipsis"> 洋房 / 118m&sup2; / 欧式古典 </p>
                    <a href="188.html" title="昆明恒大名都-欧式风格" class="imga"><h3 class="title ellipsis">昆明恒大名都-欧式风格</h3></a>
                  </div>
                  </div></li>
                <li class="li_3 show" id="end"><a href="" title="保利&middot;玺樾" class="imga scale photo">
                  <div class="imgh imgh43">
                    <img src={require('@/static/picture/thumb_16.jpg')} alt="保利&middot;玺樾" />
                  </div>
                  <div class="trbl bg">
                    <i class="icon2"></i>
                  </div></a>
                  <div class="info clearfix">
                  <a href="144.html" title="王咏琪" target="_blank" class="imga designer">
                    <div class="imgh imgh11">
                    <img src={require('@/static/picture/px_02.png')} data-original={require('@/static/picture/thumb_479.png')} alt="王咏琪" />
                    </div></a>
                  <div class="ove">
                    <p class="tags ellipsis"> 洋房 / 200m&sup2; / 新古典 </p>
                    <a href="" title="保利&middot;玺樾" class="imga"><h3 class="title ellipsis">保利&middot;玺樾</h3></a>
                  </div>
                  </div></li>
                </ul>
              </div>
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
