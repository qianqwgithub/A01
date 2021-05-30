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
import {Link} from 'umi';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class TEAMDETAIL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
      team:{},
      case:[],
      cases:[],
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
    this.handleSelectById();
    request.get("/api/fitment/fitmentStylist/grid",{
      params: {
        page:1,
        size:4,
      }
    })
    .then(response=>{
      this.setState({
        cases: response.data.pageData,
      });
      console.log(this.state);
    })
    .catch(error=>{
      console.log(error);
    });
  }
  handleSelectById(){
    request.get("/api/fitment/fitmentStylist/"+this.props.location.query.id,{
    })
    .then(response=>{
      this.setState({
        team: response.data,
      });
      request.get("/api/fitment/fitmentCase/grid",{
        params: {
          page:1,
          size:6,
          stylistId:response.data.id,
        }
      })
      .then(response=>{
        console.log(response);
        this.setState({
          case: response.data.pageData,
        });
      })
      .catch(error=>{
        console.log(error);
      });
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
      <div class="Wrap ztTeamDetail ztPage">
        <div class="TeamInfo">
          <div class="Column">
            <div class="photo">
            <div class="imgh">
              <img src={global.constants.imgurl+this.state.team.imgUrl} data-original={require('@/static/picture/82ab393fbd8836e2.png')} alt="s" />
            </div>
            </div>
            <div class="info"> 
            <div class="workday">
            {this.state.team.stylistAge}年
            </div> 
            <div class="job">
              {this.state.team.stylistLabel}
            </div>
            <h3 class="title">{this.state.team.title}</h3>
            <div class="line"></div>
            <div class="ziZhi">
              <div class="ht">
              行业资质
              </div>
              <ul>
                <pre>
                  {this.state.team.description}
                </pre>
              </ul>
            </div>
            <a href="javascript:;" onclick="javascript:J_ajaxOrderWin('为我设计','/indent?ajax=1&amp;designer=30&amp;subject=设计名师-为我设计-廖智琴')" title="为我设计" class="inline btn">为我设计</a>
            </div>
          </div>
          </div>
          <div class="CasesList Column">
          <div class="HouseHt clearfix">
            <Link to='/cases'><a href="team.html" title="查看更多" class="more inline"><span>+</span>查看更多</a></Link>
            <h3 class="CaseTit ove">TA的案例</h3>
          </div>
          <ul class="clearfix">
            {
              this.state.case.map(item=>{
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
          </ul>
          </div>
          <div class="TeamList Column">
          <div class="HouseHt clearfix">
            <Link to='/team'><a title="查看更多" class="more inline"><span>+</span>查看更多</a></Link>
            <h3 class="CaseTit ove">推荐设计师</h3>
          </div>
          <ul class="clearfix">
            {
              this.state.cases.map(item=>{
                return(
                  <Link  to={'/team/detail?id='+item.id} target="_blank" class="inline">
                    <li><a title={item.title} class="imga scale">
                      <div class="photo">
                      <div class="imgh imgh11">
                        <img src={global.constants.imgurl+item.img_url} alt={item.title} />
                      </div>
                      </div>
                      <div class="info"> 
                      <div class="job">
                        {item.stylist_label}
                      </div>
                      <h3 class="title">{item.title}</h3>
                      <div class="line"></div>

                      <div class="btn">
                        VIEW MORE
                      </div>
                      </div></a></li>
                  </Link>
                )
                })
            }
            {/* <li><a href="357.html" title="程 林" class="imga scale">
              <div class="photo">
              <div class="imgh imgh11">
                <img src={require('@/static/picture/thumb_1792.jpg')} alt="程 林" />
              </div>
              </div>
              <div class="info"> 
              <div class="job">
                大/宅/设/计/师
              </div>
              <h3 class="title">程 林</h3>
              <div class="line"></div>
              <div class="btn">
                VIEW MORE
              </div>
              </div></a></li>
            <li><a href="342.html" title="黄磊" class="imga scale">
              <div class="photo">
              <div class="imgh imgh11">
                <img src={require('@/static/picture/thumb_1783.jpg')} alt="黄磊" />
              </div>
              </div>
              <div class="info"> 
              <div class="job">
                大/宅/设/计/师
              </div>
              <h3 class="title">黄磊</h3>
              <div class="line"></div>
              <div class="btn">
                VIEW MORE
              </div>
              </div></a></li>
            <li id="end"><a href="138.html" title="张付江" class="imga scale">
              <div class="photo">
              <div class="imgh imgh11">
                <img src={require('@/static/picture/thumb_485.png')} alt="张付江" />
              </div>
              </div>
              <div class="info"> 
              <div class="job">
                大/宅/设/计/师
              </div>
              <h3 class="title">张付江</h3>
              <div class="line"></div>
              <div class="btn">
                VIEW MORE
              </div>
              </div></a></li> */}
          </ul>
          </div>,
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
