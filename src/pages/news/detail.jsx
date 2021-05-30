/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import './detail.less';
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
import Column from 'antd/lib/table/Column';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class NEWSDETAIL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
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

  render() {
    const children = [
      //导航条
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      <div class="Wrap ztNewsDetail">
          <div class="casesImgSlide Wrap">
            <div class="box">
              <img src={require('@/static/picture/396ebd1aef0c55bc.jpg')} alt="昆明选购沙发实用vs美观那个更加重要？" />
              <div class="infoTop">
              <div class="Column">
                <div class="leader fl">
                <a href="index.html" class="">首页</a>
                <span class="">&gt;</span>
                <a href="news.html">装修攻略</a>
                <span class="">&gt;</span>
                <a href="news02.html">软装知识</a>
                <span class="">&gt;</span>昆明选购沙发实用vs美观那个更加重要？
                </div>
              </div>
              </div>
            </div>
            </div>
            <div class="NewsInfo Column">
            <h3 class="title">昆明选购沙发实用vs美观那个更加重要？</h3>
            <div class="tags">
              <span>TIME：2020-06-13</span>
              <span>READ：243</span>
            </div>
            </div>
            <div class="Column ColumnBg">
            <div class="Column-L">
              <div class="msgContent">
                <p class="MsoNormal" align="center">
                  <span>现在客厅担任的角色不必古代知识单纯的待客的地方，我觉得现代客厅用起居室更加适合。所以一个客厅的沙发就显得尤其重要。尤其是我们日常生活基本上</span>
                  <span>50%</span>
                  <span>时间是在课题，而客厅的沙发在这个时间段使用率基本是</span>
                  <span>100%</span>
                  <span>，说是我们的第二张床也不为过。下面就由小编来和大家探讨一下<a href="index2.html" target="_blank">昆明选购沙发</a>实用</span>
                  <span>vs</span>
                  <span>美观那个更加重要</span>
                </p>
                <p class="MsoNormal">
                  <span></span>
                </p>
              <p class="MsoNormal"></p>
              <div>
                <img src={require('@/static/picture/b33765382b477a34.jpg')} border="0" />
              </div>
              <br />
              <p></p>
              <p class="MsoNormal">
                <span>
                  <span>现在沙发的组合，材料，颜色风格等等因素较多，市面上的沙发品牌繁多，美观问题基本不用考虑太多。但是需要注意的是选购的沙发要和自己家的装修风格完全符合，这样才能不突兀。按照组合方式有：一字型组合式，转角型，</span>
                  L
                  <span>类型，对摆等组合方式。按照装修风格分现代简约风格装修，中式风格装修，欧式风格装修，田园风格装修，美式风格装修，地中海装修等等。安装材料粗分有实木的，真皮的，布艺的等等。品牌就不在这里一一介绍。总之搭配沙发组件，是一个审美考验，如果没有把握就交给专业的人士来做。</span>
                  </span><span>
                </span>
              </p>
              <p class="MsoNormal">
                <span>沙发的实用性</span>
                <span ></span>
              </p>
              <p class="MsoNormal"></p>
              <div>
                <img src={require('@/static/picture/f8a99a5c22e8e0ef.jpg')} border="0" />
              </div>
              <br />
              <p></p>
              <p class="MsoNormal">
                <span>沙发发展到现在功能齐全：收纳型，自带储物功能；耐用型，使用寿命长。折叠型，可以伸展节约空间，必要时可以代替床。懒人沙发，娱乐放松。沙发的功能不止于此，其他的就不一一举例了。总之挑选沙发还是根据自己需求选购合适的沙发。</span>
                <span></span>
              </p>
              <p class="MsoNormal" align="justify">
                <span>
                  <span>三、昆明选购沙发实用</span>
                  vs
                  <span>美观那个更加重要？</span>
                </span>
                <span></span>
              </p>
              <p class="MsoNormal">
                <span>仁者见仁，智者见智，关于昆明选购沙发是实用还是美观更加重要一点每个人都有不同的看法，关键在于自己的取舍。生活就像一门艺术，充满断舍离，如果所有的好的都想要，那样的不一定美满懂得取舍才是最合适的。</span>
                <span></span>
              </p>
              <p class="MsoNormal" align="justify">
                <span>
                  <span>今天关于<a href="index2.html" target="_blank">昆明选购沙发</a>实用</span>
                  vs
                  <span>美观那个更加重要？介绍就先到这里吧，如果想要了解更多关于软装搭配的知识可以联系我。</span>
                </span>
                <span>
                </span>
              </p>
              <p class="MsoNormal">
                <span>&nbsp;</span>
              </p>
              </div>
              <div class="msgPageNp clearfix">
              <a href="178.html" title="下一个：昆明软装色彩搭配技巧" class="np next fr ellipsis"><i class="icon2 fr"></i>下一个：昆明软装色彩搭配技巧</a>
            </div>
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
