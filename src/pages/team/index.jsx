/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import './index.less';
import '@/static/css/style.css';
import '@/static/css/style_public.css';
import '@/static/css/minify.css';
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

export default class TEAM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      list:[],
      current:1,
      pageSize:8,
      pageCount:0,
      styleId:'',
      styles:[],
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
    this.handleSelectStyle();
    this.handleSelectAll();
  }
  handleSelectStyle(){
    request.get("/api/fitment/fitmentStyle/list",{
      params: {
      }
    })
    .then(response=>{
      console.log(response);
      this.setState({ styles: response.data});
    })
    .catch(error=>{
      console.log(error);
    });
  }
  handleSelectAll(){
    request.get("/api/fitment/fitmentStylist/grid",{
      params: {
        page:this.state.current,
        size:this.state.pageSize,
        typeIds:this.state.styleId,
      }
    })
    .then(response=>{
      console.log(response);
      this.setState({
        list: response.data.pageData,
        pageCount:response.data.pageCount,
        current:response.data.pageNum,
      });
      console.log(this.state);
    })
    .catch(error=>{
      console.log(error);
    });
  }
  onChangeList(page,pageSize){
    console.log(page);
    this.setState(state=>({
      current:page,
    }),()=>{
      console.log(this.state.current);
      this.handleSelectAll();
    })
  }
  search(id){
    this.setState(state=>({
      current:1,
      styleId:id,
    }),()=>{
      this.handleSelectAll();
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
      <div class="Wrap ztTeam ztPage">
        <div class="Wrap moduleImg">
        <div class="Column">
          <div class="leader">
          <a href="index.html" class="">首页</a>
          <span class="">&gt;</span>
          <a href="">设计名师</a>
          </div>
        </div>
        </div>
        {/* <div class="Column moduleCate">
        <ul class="list">
          <li><a href="team01.html">软装设计师<i>|</i></a></li>
          <li><a href="team02.html">全屋设计师<i>|</i></a></li>
          <li><a href="team03.html">大宅设计师<i>|</i></a></li>
        </ul>
        </div> */}
        <div class="Column PubSearch CaseSearch">
        <div class="clearfix SearchBtnBox">
          <div class="SearchHas">
            已选条件：
          </div>
          <a onClick={({id=''})=>{this.search(id)}} class="ClearSearchBtn">清空筛选条件</a>
        </div>
        <div class="SearchListBox">
          <dl class="clearfix first">
          <dt>
            <em>擅长风格</em>:
          </dt>
          <dd class="clearfix">
            {
              this.state.styles.map(item=>{
                return <div onClick={({id=item.id})=>{this.search(id)}} className="break first current" className={item.id==this.state.styleId?"breakActive break first current":"break first current"} value={item.id}>{item.title}</div>
              })
            }
            {/* <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=11');" class="break first current" rel="nofollow">不限</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=11&amp;keywords=混搭');" class="break" rel="nofollow">混搭</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=11&amp;keywords=现代简约');" class="break" rel="nofollow">现代简约</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=11&amp;keywords=雅致');" class="break" rel="nofollow">雅致</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=11&amp;keywords=新中式');" class="break" rel="nofollow">新中式</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=11&amp;keywords=新古典');" class="break" rel="nofollow">新古典</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=11&amp;keywords=欧式古典');" class="break" rel="nofollow">欧式古典</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=11&amp;keywords=美式乡村');" class="break" rel="nofollow">美式乡村</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=11&amp;keywords=地中海');" class="break" rel="nofollow">地中海</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=11&amp;keywords=后现代风格');" class="break" rel="nofollow">后现代风格</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=11&amp;keywords=东南亚风格');" class="break" rel="nofollow">东南亚风格</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=11&amp;keywords=其他');" class="break" rel="nofollow">其他</a> */}
          </dd>
          </dl>
        </div>
        </div>
        <div class="Column TeamList">
        <ul class="clearfix" id="PageLoadBox">
          {
            this.state.list.map(item=>{
              return(
                <Link  to={'/team/detail?id='+item.id} target="_blank" class="inline">
                  <li>
                    <a title={item.title} class="imga scale">
                      <div class="photo">
                        <div class="imgh imgh11">
                          <img src={global.constants.imgurl+item.img_url} alt={item.title} />
                        </div>
                      </div>
                      <div class="info">
                        <div className='info1'>
                          <h3 class="title">{item.title}</h3>
                          <div class="workday">{item.stylist_age}年</div>
                          <div class="line">|</div>
                          <div class="job">{item.stylist_label}</div>
                        </div>
                        <div className='info2'>
                          <ul>
                          <li>擅长风格:</li>
                          {
                            this.state.styles.map(style=>{
                              if(item.type_ids.split(',').find(obj=>obj==style.id)){
                                return(
                                  <li>{style.title}</li>
                                )
                              }
                            })
                          }
                          </ul>
                        </div>
                      </div>
                    </a>
                </li>
              </Link>
              )
            })
          }
          {/* <li><a href="341.html" title="雷正鸣" class="imga scale">
            <div class="photo">
            <div class="imgh imgh11">
              <img src={require('@/static/picture/thumb_1780.jpg')} alt="雷正鸣" />
            </div>
            </div>
            <div class="info">
              <div className='info1'>
                <h3 class="title">雷正鸣</h3>
                <div class="workday">14年</div>
                <div class="line">|</div>
                <div class="job"> 大宅设计师</div>
              </div>
              <div className='info2'>
                <ul>
                  <li>擅长风格:</li>
                  <li>欧式</li>
                  <li>现代</li>
                  <li>地中海</li>
                </ul>
              </div>
            </div></a></li>
          <li><a href="30.html" title="廖智琴" class="imga scale">
            <div class="photo">
            <div class="imgh imgh11">
              <img src={require('@/static/picture/thumb_489.png')} alt="廖智琴" />
            </div>
            </div>
            <div class="info">
              <div className='info1'>
                <h3 class="title">廖智琴</h3>
                <div class="workday">6年</div>
                <div class="line">|</div>
                <div class="job"> 大宅设计师</div>
              </div>
              <div className='info2'>
                <ul>
                  <li>擅长风格:</li>
                  <li>欧式</li>
                  <li>现代</li>
                  <li>地中海</li>
                </ul>
              </div>
            </div>
            </a>
          </li>
          <li><a href="29.html" title="程燕军" class="imga scale">
            <div class="photo">
            <div class="imgh imgh11">
              <img src={require('@/static/picture/thumb_499.png')} alt="程燕军" />
            </div>
            </div>
            <div class="info">
              <div className='info1'>
                <h3 class="title">程燕军</h3>
                <div class="workday">5年</div>
                <div class="line">|</div>
                <div class="job"> 大宅设计师</div>
              </div>
              <div className='info2'>
                <ul>
                  <li>擅长风格:</li>
                  <li>欧式</li>
                  <li>现代</li>
                  <li>地中海</li>
                </ul>
              </div>
            </div></a></li>
          <li id="end"><a href="91.html" title="王莉艳" class="imga scale">
            <div class="photo">
            <div class="imgh imgh11">
              <img src={require('@/static/picture/thumb_492.png')} alt="王莉艳" />
            </div>
            </div>
            <div class="info">
              <div className='info1'>
                <h3 class="title">王莉艳</h3>
                <div class="workday">4年</div>
                <div class="line">|</div>
                <div class="job"> 大宅设计师</div>
              </div>
              <div className='info2'>
                <ul>
                  <li>擅长风格:</li>
                  <li>欧式</li>
                  <li>现代</li>
                  <li>地中海</li>
                </ul>
              </div>
            </div></a></li>
          <li><a href="83.html" title="黄红梅" class="imga scale">
            <div class="photo">
            <div class="imgh imgh11">
              <img src={require('@/static/picture/thumb_487.png')} alt="黄红梅" />
            </div>
            </div>
            <div class="info">
              <div className='info1'>
                <h3 class="title">黄红梅</h3>
                <div class="workday">4年</div>
                <div class="line">|</div>
                <div class="job"> 大宅设计师</div>
              </div>
              <div className='info2'>
                <ul>
                  <li>擅长风格:</li>
                  <li>欧式</li>
                  <li>现代</li>
                  <li>地中海</li>
                </ul>
              </div>
            </div></a></li>
          <li><a href="355.html" title="方俊" class="imga scale">
            <div class="photo">
            <div class="imgh imgh11">
              <img src={require('@/static/picture/thumb_1789.jpg')} alt="方俊" />
            </div>
            </div>
            <div class="info">
              <div className='info1'>
                <h3 class="title">方俊</h3>
                <div class="workday">8年</div>
                <div class="line">|</div>
                <div class="job"> 大宅设计师</div>
              </div>
              <div className='info2'>
                <ul>
                  <li>擅长风格:</li>
                  <li>欧式</li>
                  <li>现代</li>
                  <li>地中海</li>
                </ul>
              </div>
            </div></a></li>
          <li><a href="357.html" title="程 林" class="imga scale">
            <div class="photo">
            <div class="imgh imgh11">
              <img src={require('@/static/picture/thumb_1792.jpg')} alt="程 林" />
            </div>
            </div>
            <div class="info">
              <div className='info1'>
                <h3 class="title">程 林</h3>
                <div class="workday">9年</div>
                <div class="line">|</div>
                <div class="job"> 大宅设计师</div>
              </div>
              <div className='info2'>
                <ul>
                  <li>擅长风格:</li>
                  <li>欧式</li>
                  <li>现代</li>
                  <li>地中海</li>
                </ul>
              </div>
            </div></a></li>
          <li id="end"><a href="356.html" title="卢正良" class="imga scale">
            <div class="photo">
            <div class="imgh imgh11">
              <img src={require('@/static/picture/thumb_1791.jpg')} alt="卢正良" />
            </div>
            </div>
            <div class="info">
              <div className='info1'>
                <h3 class="title">卢正良</h3>
                <div class="workday">8年</div>
                <div class="line">|</div>
                <div class="job"> 大宅设计师</div>
              </div>
              <div className='info2'>
                <ul>
                  <li>擅长风格:</li>
                  <li>欧式</li>
                  <li>现代</li>
                  <li>地中海</li>
                </ul>
              </div>
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
