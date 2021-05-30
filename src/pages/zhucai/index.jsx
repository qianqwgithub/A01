/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import './index.less';
import '@/static/css/style.css';
import '@/static/css/style_public.css';
import '@/static/css/minify.css';
import '@/static/css/minify8.css';
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

export default class ZHUCAI extends React.Component {
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
      <div class="Wrap ztPage ztZhuCai">
        <div class="ztSec secBanner">
        <div class="ztWrap secbanner">
          <img src={require('@/static/picture/secBanner4.jpg')} />
        </div>
        </div>
        <div class="ztCon secDingZhi" data="halfSlide" data-view="1" data-auto="999" data-space="0">
        <div class="ztTitle">
          <h2>8大空间<span>品质定制</span></h2>
        </div>
        <div class="bd swiper-container">
          <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <div class="imgh">
            <img src={require('@/static/picture/secDingZhi_01.jpg')} />
            </div>
            <div class="info">
            <h3 class="title ellipsis">预定一个你，定制一个家</h3>
            <div class="note clamp">
              大大的落地窗，白色纯净的墙面，
              <br />造型简约的桌椅，舒适柔软的沙发，是对家最初的想象。
            </div>
            </div></li>
          <li class="swiper-slide">
            <div class="imgh">
            <img src={require('@/static/picture/secDingZhi_02.jpg')} />
            </div>
            <div class="info">
            <h3 class="title ellipsis">预定一个你，定制一个家</h3>
            <div class="note clamp">
              大大的落地窗，白色纯净的墙面，
              <br />造型简约的桌椅，舒适柔软的沙发，是对家最初的想象。
            </div>
            </div></li>
          <li class="swiper-slide">
            <div class="imgh">
            <img src={require('@/static/picture/secDingZhi_03.jpg')} />
            </div>
            <div class="info">
            <h3 class="title ellipsis">预定一个你，定制一个家</h3>
            <div class="note clamp">
              大大的落地窗，白色纯净的墙面，
              <br />造型简约的桌椅，舒适柔软的沙发，是对家最初的想象。
            </div>
            </div></li>
          <li class="swiper-slide">
            <div class="imgh">
            <img src={require('@/static/picture/secDingZhi_04.jpg')} />
            </div>
            <div class="info">
            <h3 class="title ellipsis">预定一个你，定制一个家</h3>
            <div class="note clamp">
              大大的落地窗，白色纯净的墙面，
              <br />造型简约的桌椅，舒适柔软的沙发，是对家最初的想象。
            </div>
            </div></li>
          <li class="swiper-slide">
            <div class="imgh">
            <img src={require('@/static/picture/secDingZhi_05.jpg')} />
            </div>
            <div class="info">
            <h3 class="title ellipsis">预定一个你，定制一个家</h3>
            <div class="note clamp">
              大大的落地窗，白色纯净的墙面，
              <br />造型简约的桌椅，舒适柔软的沙发，是对家最初的想象。
            </div>
            </div></li>
          <li class="swiper-slide">
            <div class="imgh">
            <img src={require('@/static/picture/secDingZhi_06.jpg')} />
            </div>
            <div class="info">
            <h3 class="title ellipsis">预定一个你，定制一个家</h3>
            <div class="note clamp">
              大大的落地窗，白色纯净的墙面，
              <br />造型简约的桌椅，舒适柔软的沙发，是对家最初的想象。
            </div>
            </div></li>
          <li class="swiper-slide">
            <div class="imgh">
            <img src={require('@/static/picture/secDingZhi_07.jpg')} />
            </div>
            <div class="info">
            <h3 class="title ellipsis">预定一个你，定制一个家</h3>
            <div class="note clamp">
              大大的落地窗，白色纯净的墙面，
              <br />造型简约的桌椅，舒适柔软的沙发，是对家最初的想象。
            </div>
            </div></li>
          <li class="swiper-slide">
            <div class="imgh">
            <img src={require('@/static/picture/secDingZhi_08.jpg')} />
            </div>
            <div class="info">
            <h3 class="title ellipsis">预定一个你，定制一个家</h3>
            <div class="note clamp">
              大大的落地窗，白色纯净的墙面，
              <br />造型简约的桌椅，舒适柔软的沙发，是对家最初的想象。
            </div>
            </div></li>
          </ul>
        </div>
        <div class="sbtns">
          <a href="javascript:void(0);" class="prev inline"><i class="icon2"></i></a>
          <a href="javascript:void(0);" class="next inline"><i class="icon2"></i></a>
        </div>
        <div class="hd">
          <ul class="hdli2">
          <li class="inline"><a href="javascript:void(0);" class="imga">客厅</a></li>
          <li class="inline"><a href="javascript:void(0);" class="imga">餐厅</a></li>
          <li class="inline"><a href="javascript:void(0);" class="imga">书房</a></li>
          <li class="inline"><a href="javascript:void(0);" class="imga">卧室</a></li>
          <li class="inline"><a href="javascript:void(0);" class="imga">衣帽间</a></li>
          <li class="inline"><a href="javascript:void(0);" class="imga">厨房</a></li>
          <li class="inline"><a href="javascript:void(0);" class="imga">卫生间</a></li>
          <li class="inline"><a href="javascript:void(0);" class="imga">阳台</a></li>
          </ul>
          <ul class="pager none"></ul>
        </div>
        </div>
        <div class="ztCon secFuCai">
        <div class="ztTitle">
          <h2>6大国际<span>品质辅材</span></h2>
        </div>
        <ul class="clearfix">
          <li class="clearfix ">
          <div class="info">
            <div class="clearfix">
            <div class="brand">
              <div class="imgh">
              <img src={require('@/static/picture/secFuCaiBrand_01.jpg')} />
              </div>
            </div>
            <div class="line"></div>
            <div class="ove">
              <div class="classify ellipsis">
              [水管]
              </div>
              <h3 class="title ellipsis">上海天力水管</h3>
            </div>
            </div>
            <div class="note">
            <p><span>&middot;</span>良好的焊接热熔特点达到永久性一体链接，使用寿命长达 100 年以上金属接头，采用最新欧洲标准，做到真正抗脱</p>
            <p><span>&middot;</span>不含镍和铬，不会对水造成二次污染</p>
            <p><span>&middot;</span>管壁以纳米防结垢处理，更好的清洁水质 高密度黄铜纯铜材质，无毒卫生，绿色环保</p>
            </div>
          </div>
          <div class="photo">
            <div class="imgh">
            <img src={require('@/static/picture/secFuCai_01.jpg')} />
            </div>
          </div></li>
          <li class="clearfix even">
          <div class="info">
            <div class="clearfix">
            <div class="brand">
              <div class="imgh">
              <img src={require('@/static/picture/secFuCaiBrand_02.jpg')} />
              </div>
            </div>
            <div class="line"></div>
            <div class="ove">
              <div class="classify ellipsis">
              [石膏板]
              </div>
              <h3 class="title ellipsis">拉法基石膏板</h3>
            </div>
            </div>
            <div class="note">
            <p><span>&middot;</span>采用高品质石膏矿（含石膏率达到 80%-90%以上） 尺寸精度高，板面平整，提高安装精度，防止开裂 耐碰撞，减少破损，握钉力高</p>
            <p><span>&middot;</span>质量稳定，耐久性高</p>
            <p><span>&middot;</span>质量轻，便于搬运，施工</p>
            <p><span>&middot;</span>健康环保，已通过绿色建材认证</p>
            </div>
          </div>
          <div class="photo">
            <div class="imgh">
            <img src={require('@/static/picture/secFuCai_02.jpg')} />
            </div>
          </div></li>
          <li class="clearfix ">
          <div class="info">
            <div class="clearfix">
            <div class="brand">
              <div class="imgh">
              <img src={require('@/static/picture/secFuCaiBrand_03.jpg')} />
              </div>
            </div>
            <div class="line"></div>
            <div class="ove">
              <div class="classify ellipsis">
              [轻钢龙骨]
              </div>
              <h3 class="title ellipsis">金隅鹏龙龙骨</h3>
            </div>
            </div>
            <div class="note">
            <p><span>&middot;</span>高含量镀锌层防锈，国际厚度侧翼加强筋设计，耐久性高 宽翼设计，打钉容易</p>
            <p><span>&middot;</span>微小的挠度，避免开裂造价合理，品质精良 </p>
            </div>
          </div>
          <div class="photo">
            <div class="imgh">
            <img src={require('@/static/picture/secFuCai_03.jpg')} />
            </div>
          </div></li>
          <li class="clearfix even">
          <div class="info">
            <div class="clearfix">
            <div class="brand">
              <div class="imgh">
              <img src={require('@/static/picture/secFuCaiBrand_04.jpg')} />
              </div>
            </div>
            <div class="line"></div>
            <div class="ove">
              <div class="classify ellipsis">
              [涂料]
              </div>
              <h3 class="title ellipsis">加拿大喜加漆涂料</h3>
            </div>
            </div>
            <div class="note">
            <p><span>&middot;</span>水性涂料，无放射性</p>
            <p><span>&middot;</span>不含有机溶剂，无透气结膜，密封性好</p>
            <p><span>&middot;</span>搅拌没有结块现象，阻力均匀丝滑，流平性强 耐酸抗碱耐刷洗，双向透气，防霉</p>
            <p><span>&middot;</span>TVOC 未检出，苯未检出，游离甲醛 5mg/kg</p>
            </div>
          </div>
          <div class="photo">
            <div class="imgh">
            <img src={require('@/static/picture/secFuCai_04.jpg')} />
            </div>
          </div></li>
          <li class="clearfix ">
          <div class="info">
            <div class="clearfix">
            <div class="brand">
              <div class="imgh">
              <img src={require('@/static/picture/secFuCaiBrand_05.jpg')} />
              </div>
            </div>
            <div class="line"></div>
            <div class="ove">
              <div class="classify ellipsis">
              [防水]
              </div>
              <h3 class="title ellipsis">雨虹防水</h3>
            </div>
            </div>
            <div class="note">
            <p><span>&middot;</span>&middot; 高性能材质组合，性能极佳</p>
            <p><span>&middot;</span>&middot; 高强度防水层，抵抗压力水能力强 耐低温、耐腐蚀、耐霉菌、耐候性好热熔法施工，施工性能好</p>
            </div>
          </div>
          <div class="photo">
            <div class="imgh">
            <img src={require('@/static/picture/secFuCai_05.jpg')} />
            </div>
          </div></li>
          <li class="clearfix even">
          <div class="info">
            <div class="clearfix">
            <div class="brand">
              <div class="imgh">
              <img src={require('@/static/picture/secFuCaiBrand_06.jpg')} />
              </div>
            </div>
            <div class="line"></div>
            <div class="ove">
              <div class="classify ellipsis">
              [电线]
              </div>
              <h3 class="title ellipsis">昆缆电工牌电线</h3>
            </div>
            </div>
            <div class="note">
            <p><span>&middot;</span>生产设备，生产技术，原材料全部来自低烟，无卤阻燃单芯铜线</p>
            <p><span>&middot;</span>表皮为聚烯烃材质，由绝缘，阻燃，抗拉伸三层表皮组成 全系线径达标，产品合格执行欧洲标准</p>
            </div>
          </div>
          <div class="photo">
            <div class="imgh">
            <img src={require('@/static/picture/secFuCai_06.jpg')} />
            </div>
          </div></li>
        </ul>
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
