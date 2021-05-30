/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav0 from './Nav0';
import Banner1 from './Banner1';
import Feature0 from './Feature0';
import Pricing0 from './Pricing0';
import Content5 from './Content5';
import Pricing1 from './Pricing1';
import Pricing2 from './Pricing2';
import Teams0 from './Teams0';
import Feature5 from './Feature5';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import Content12 from './Content12';
import Footer1 from './Footer1';

import {
  Nav00DataSource,
  Banner10DataSource,
  Feature00DataSource,
  Pricing00DataSource,
  Content50DataSource,
  Pricing10DataSource,
  Pricing20DataSource,
  Teams00DataSource,
  Feature01DataSource,
  Feature50DataSource,
  Feature10DataSource,
  Feature20DataSource,
  Content120DataSource,
  Footer10DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
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

      //首页轮播
      <Banner1
        id="Banner1_0"
        key="Banner1_0"
        dataSource={Banner10DataSource}
        isMobile={this.state.isMobile}
      />,

      //服务介绍
      <Feature0
        id="Feature0_0"
        key="Feature0_0"
        dataSource={Feature00DataSource}
        isMobile={this.state.isMobile}
      />,
      <ul>
        <li ><img src={require('@/static/img/实景案例.png')} alt="" /></li>
        <li ><img src={require('@/static/img/设计师.png')} alt="" /></li>
        <li ><img src={require('@/static/img/VR全景.png')} alt="" /></li>
        <li ><img src={require('@/static/img/热卖楼盘.png')} alt="" /></li>
        <li ><img src={require('@/static/img/天森品牌.png')} alt="" /></li>
        <li ><img src={require('@/static/img/建材.png')} alt="" /></li>
        <li ><img src={require('@/static/img/攻略.png')} alt="" /></li>
      </ul>,
      // <Pricing0
      //   id="Pricing0_0"
      //   key="Pricing0_0"
      //   dataSource={Pricing00DataSource}
      //   isMobile={this.state.isMobile}
      // />,

      // //案例赏析
      // <Content5
      //   id="Content5_0"
      //   key="Content5_0"
      //   dataSource={Content50DataSource}
      //   isMobile={this.state.isMobile}
      // />,

      // //大宅
      // <Pricing1
      //   id="Pricing1_0"
      //   key="Pricing1_0"
      //   dataSource={Pricing10DataSource}
      //   isMobile={this.state.isMobile}
      // />,
      // //设计师
      // <Teams0
      //   id="Teams0_0"
      //   key="Teams0_0"
      //   dataSource={Teams00DataSource}
      //   isMobile={this.state.isMobile}
      // />,

      // //工艺保障
      // <Feature0
      //   id="Feature0_1"
      //   key="Feature0_1"
      //   dataSource={Feature01DataSource}
      //   isMobile={this.state.isMobile}
      // />,

      // //尊享家
      // <Pricing2
      //   id="Pricing1_2"
      //   key="Pricing1_2"
      //   dataSource={Pricing20DataSource}
      //   isMobile={this.state.isMobile}
      // />,

      // //装修攻略
      // <Feature5
      //   id="Feature5_0"
      //   key="Feature5_0"
      //   dataSource={Feature50DataSource}
      //   isMobile={this.state.isMobile}
      // />,

      // //数据
      // <Feature2
      //   id="Feature2_0"
      //   key="Feature2_0"
      //   dataSource={Feature20DataSource}
      //   isMobile={this.state.isMobile}
      // />,

      // //合作伙伴
      // <Content12
      //   id="Content12_0"
      //   key="Content12_0"
      //   dataSource={Content120DataSource}
      //   isMobile={this.state.isMobile}
      // />,

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
