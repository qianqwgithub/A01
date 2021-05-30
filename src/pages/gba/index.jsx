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

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class GBA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
      new:{},
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
  }
  handleSelectById(){
    request.get("/api/system/sysArticle/"+this.props.location.query.id,{
    })
    .then(response=>{
      console.log(response);
      this.setState({
        new: response.data,
      });
      console.log(this.state);
    })
    .catch(error=>{
      console.log(error);
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
      <div class="casesImgSlide Wrap">
        <div class="box">
          <div class="CaseSlide" data="halfSlide" data-auto="999" data-loop="0">
            <div class="bd swiper-container">
              <ul class="swiper-wrapper">
                <li class="swiper-slide">
                  <div class="img">
                    <div class="trbl tabV">
                      <div class="td">
                        <img src={global.constants.imgurl+this.state.new.imgUrl} class="swiper-lazy"/>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <div class="infoTop">
              <div class="Column">
                <div class="leader fl">
                  <a href="index.html" class="">首页</a>
                  <span class="">&gt;</span>
                  <a href="news.html">装修攻略</a>
                  <span class="">&gt;</span>软装是什么？软装包括哪些？</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>,
      <div class="NewsInfo Column">
        {/* <div class="msgShare fr">
          <div class="shareTo share fl">
            <em class="txt fl">分享到</em>
            <a href="javascript:void(0);" class="bds_qzone qzone" data-cmd="qzone" title="分享到QQ空间">QQ空间</a>
            <a href="javascript:void(0);" class="bds_qq qq" data-cmd="sqq" title="分享到QQ">QQ</a>
            <a href="javascript:void(0);" class="bds_tsina tsina" data-cmd="tsina" title="分享到新浪微博">新浪微博</a>
            <a href="javascript:void(0);" class="bds_weixin weixin" data-cmd="weixin" title="分享到微信">微信</a>
          </div>
        </div> */}
        <h3 class="title">{this.state.new.title}</h3>
        <div class="tags">
          <span>TIME：{this.state.new.title}</span>
          {/* <span>READ：264</span> */}
        </div>
      </div>,
      <div class="Column">
        <div class="Column-L">
          <div class="msgContent">
          <div className='editor-wrapper' dangerouslySetInnerHTML={{__html: this.state.new.content }} />
            {/* {this.state.new.content} */}
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
