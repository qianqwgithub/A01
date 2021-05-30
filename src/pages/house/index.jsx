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
import { Pagination } from 'antd';
import {Link} from 'umi';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class HOUSE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
      region:[],
      regionId:'',
      list:[],
      current:1,
      pageSize:9,
      pageCount:0,
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
    this.handleSelectRegion();
    this.handleSelectHouse();
  }
  handleSelectRegion(){
    request.get("/api/system/sysDic/list",{
      params:{
        typekey:'region',
      }
    })
    .then(response=>{
      console.log(response);
      this.setState({
        region: response.data,
      });
      console.log(this.state);
    })
    .catch(error=>{
      console.log(error);
    });
  }
  handleSelectHouse(){
    request.get("/api/fitment/fitmentBuild/grid",{
      params: {
        page:this.state.current,
        size:this.state.pageSize,
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
  searchHouse(id){
    this.setState({
      regionId:id,
    })
    request.get("/api/fitment/fitmentBuild/grid",{
      params: {
        page:this.state.current,
        size:this.state.pageSize,
        regionId:id,
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
      this.handleSelectHouse();
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
      <div class="Wrap ztHouse ztPage">
        <div class="pubCases Wrap" data="halfSlide" data-view="1" data-auto="999" data-space="0" data-loop="0">
        <div class="bd swiper-container">
          <ul class="swiper-wrapper">
          <li class="swiper-slide"><a href="233.html" title="昆明恒大名都128平米" class="imga">
            <div class="imgh">
              <img src={require('@/static/picture/6b9b85772c965244.jpg')} data-src={require('@/static/picture/6b9b85772c965244.jpg')} alt="昆明恒大名都128平米" class="swiper-lazy" />
            </div></a>
            <div class="infoBox">
            {/* <div class="Column">
              <div class="info fr">
              <a href="233.html" title="昆明恒大名都128平米" class="imga"><h3 class="title ellipsis">昆明恒大名都128平米</h3></a>
              <p class="tags"> 三室一厅 / 128m&sup2; / 混搭 </p>
              <a href="233.html" title="昆明恒大名都128平米" class="inline more">查看详情</a>
              </div>
              <div class="leader fl">
              <a href="index.html" class="">首页</a>
              <span class="">&gt;</span>热装楼盘
              </div>
            </div> */}
            </div></li>
          </ul>
        </div>
        <a href="javascript:void(0);" class="sbtn prev"><i class="icon2"></i></a>
        <a href="javascript:void(0);" class="sbtn next"><i class="icon2"></i></a>
        {/* <div class="search">
          <div class="clearfix">
          <ul class="btns fl clearfix">
            <li class="cases current" data-mid="103"><i class="icon2"></i><em>案例</em></li>
            <li class="houses" data-mid="111"><i class="icon2"></i><em>楼盘</em></li>
          </ul>
          <div class="Total fr">
            收录了17217张实景软装图片/1016套软装案例
          </div>
          </div>
          <form method="get" action="/search" onsubmit="return searchSubmit(this,'请填写搜索词')" class="form clearfix">
          <input type="hidden" name="mid" id="mid" value="103" />
          <input type="text" name="keywords" id="keywords" value="" class="kws" placeholder="输入小区名称" />
          <button type="submit" class="submit"><i class="icon2"></i></button>
          </form>
        </div> */}
        </div>
        {/* <div class="Column moduleCate">
        <ul class="list">
          <li><a href="cases01.html">全屋软装包<i>|</i></a></li>
          <li><a href="cases02.html">图片案例<i>|</i></a></li>
          <li><a href="cases03.html">全景案例<i>|</i></a></li>
          <li><a href="cases04.html">软装案例<i>|</i></a></li>
          <li><a href="cases05.html">工装案例<i>|</i></a></li>
          <li><a href="" class="current">热装楼盘<i>|</i></a></li>
        </ul>
        </div> */}
        <div class="Column PubSearch CaseSearch">
        <div class="clearfix SearchBtnBox">
          <div class="SearchHas">
            已选条件： 
          </div>
          <a onClick={()=>{this.searchHouse('')}} className="ClearSearchBtn">清空筛选条件</a>
        </div>
        <div class="SearchListBox">
          <dl class="clearfix first">
          <dt>
            <em>区&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;域</em>：
          </dt>
          <dd class="clearfix">
            <div onClick={({id=''})=>{this.searchHouse(id)}} className="break first current" className={''==this.state.regionId?"breakActive break first current":"break first current"} >不限</div>
            {
              this.state.region.map(item=>{
                return <div onClick={({id=item.id})=>{this.searchHouse(id)}} className="break first current" className={item.id==this.state.regionId?"breakActive break first current":"break first current"} value={item.id}>{item.title}</div>
              })
            }
            {/* <a href="javascript:window.open('https://www.ysgjrz.com/search?mid=111');" class="break first current" rel="nofollow">不限</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?mid=111&amp;ext[addr]=tc01');" class="break" rel="nofollow">五华区</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?mid=111&amp;ext[addr]=tc02');" class="break" rel="nofollow">盘龙区</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?mid=111&amp;ext[addr]=tc03');" class="break" rel="nofollow">官渡区</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?mid=111&amp;ext[addr]=tc04');" class="break" rel="nofollow">西山区</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?mid=111&amp;ext[addr]=tc05');" class="break" rel="nofollow">东川区</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?mid=111&amp;ext[addr]=tc06');" class="break" rel="nofollow">呈贡区</a> */}
          </dd>
          </dl>
        </div>
        </div>
        <div class="Column CasesList">
        <ul class="clearfix" id="PageLoadBox">
        {
          this.state.list.map(item=>{
            return(
              <Link  to={'/house/detail?id='+item.id} target="_blank" class="inline">
                <li><a title={item.title} class="imga scale">
                  <div class="photo imga">
                  <div class="imgh imgh43">
                    <img src={global.constants.imgurl+item.img_url} alt={item.title} />
                  </div>
                  <div class="trbl bg">
                    <i class="icon2"></i>
                  </div>
                  </div>
                  <div class="info clearfix">
                  <p class="tags ellipsis"> </p>
                  <h3 class="title ellipsis">{item.title}</h3>
                  </div></a></li>
              </Link>
            )
          })
        }

          {/* <li><a href="345.html" title="海伦国际7号地" class="imga scale">
            <div class="photo imga">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1786.png')} alt="海伦国际7号地" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info clearfix">
            <p class="tags ellipsis"> </p>
            <h3 class="title ellipsis">海伦国际7号地</h3>
            </div></a></li>
          <li id="end"><a href="344.html" title="俊发城蔷薇苑" class="imga scale">
            <div class="photo imga">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1784.png')} alt="俊发城蔷薇苑" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info clearfix">
            <p class="tags ellipsis"> </p>
            <h3 class="title ellipsis">俊发城蔷薇苑</h3>
            </div></a></li>
          <li><a href="343.html" title="新希望-白麓城" class="imga scale">
            <div class="photo imga">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1787.png')} alt="新希望-白麓城" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info clearfix">
            <p class="tags ellipsis"> </p>
            <h3 class="title ellipsis">新希望-白麓城</h3>
            </div></a></li>
          <li><a href="287.html" title="万科白沙润园" class="imga scale">
            <div class="photo imga">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1778.jpg')} alt="万科白沙润园" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info clearfix">
            <p class="tags ellipsis"> 来咨询23户 | 已签约8户 </p>
            <h3 class="title ellipsis">万科白沙润园</h3>
            </div></a></li>
          <li id="end"><a href="286.html" title="万科&middot;金域水岸" class="imga scale">
            <div class="photo imga">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1777.jpg')} alt="万科&middot;金域水岸" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info clearfix">
            <p class="tags ellipsis"> 来咨询126户 | 已签约21户 </p>
            <h3 class="title ellipsis">万科&middot;金域水岸</h3>
            </div></a></li>
          <li><a href="285.html" title="昆明恒大&middot;昆海湖" class="imga scale">
            <div class="photo imga">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1774.jpg')} alt="昆明恒大&middot;昆海湖" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info clearfix">
            <p class="tags ellipsis"> 来咨询46户 | 已签约8户 </p>
            <h3 class="title ellipsis">昆明恒大&middot;昆海湖</h3>
            </div></a></li>
          <li><a href="284.html" title="融创孔雀镇" class="imga scale">
            <div class="photo imga">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1772.jpg')} alt="融创孔雀镇" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info clearfix">
            <p class="tags ellipsis"> 来咨询61户 | 已签约11户 </p>
            <h3 class="title ellipsis">融创孔雀镇</h3>
            </div></a></li>
          <li id="end"><a href="283.html" title="俊发城茉莉苑" class="imga scale">
            <div class="photo imga">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1771.jpeg')} alt="俊发城茉莉苑" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info clearfix">
            <p class="tags ellipsis"> 来咨询36户 | 已签约6户 </p>
            <h3 class="title ellipsis">俊发城茉莉苑</h3>
            </div></a></li>
          <li><a href="271.html" title="绿地&middot;滇池国际健康城" class="imga scale">
            <div class="photo imga">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1768.jpg')} alt="绿地&middot;滇池国际健康城" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info clearfix">
            <p class="tags ellipsis"> 来咨询35户 | 已签约9户 </p>
            <h3 class="title ellipsis">绿地&middot;滇池国际健康城</h3>
            </div></a></li>
          <li><a href="270.html" title="金地&middot;悦天下" class="imga scale">
            <div class="photo imga">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1766.jpg')} alt="金地&middot;悦天下" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info clearfix">
            <p class="tags ellipsis"> 来咨询66户 | 已签约20户 </p>
            <h3 class="title ellipsis">金地&middot;悦天下</h3>
            </div></a></li>
          <li id="end"><a href="269.html" title="万科&middot;金域水岸" class="imga scale">
            <div class="photo imga">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1764.jpg')} alt="万科&middot;金域水岸" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info clearfix">
            <p class="tags ellipsis"> 来咨询63户 | 已签约21户 </p>
            <h3 class="title ellipsis">万科&middot;金域水岸</h3>
            </div></a></li>
          <li><a href="268.html" title="融创孔雀镇" class="imga scale">
            <div class="photo imga">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1762.jpg')} alt="融创孔雀镇" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info clearfix">
            <p class="tags ellipsis"> </p>
            <h3 class="title ellipsis">融创孔雀镇</h3>
            </div></a></li>
          <li><a href="250.html" title="昆明恒大名都" class="imga scale">
            <div class="photo imga">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1739.jpg')} alt="昆明恒大名都" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info clearfix">
            <p class="tags ellipsis"> 来咨询11户 | 已竣工3户 | 已签约15户 </p>
            <h3 class="title ellipsis">昆明恒大名都</h3>
            </div></a></li>
          <li id="end"><a href="249.html" title="昆明保利&middot;玺樾" class="imga scale">
            <div class="photo imga">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1738.jpg')} alt="昆明保利&middot;玺樾" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info clearfix">
            <p class="tags ellipsis"> 来咨询51户 | 已竣工21户 | 已签约55户 </p>
            <h3 class="title ellipsis">昆明保利&middot;玺樾</h3>
            </div></a></li>
          <li><a href="248.html" title="昆明润城" class="imga scale">
            <div class="photo imga">
            <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1737.jpg')} alt="昆明润城" />
            </div>
            <div class="trbl bg">
              <i class="icon2"></i>
            </div>
            </div>
            <div class="info clearfix">
            <p class="tags ellipsis"> 来咨询12户 | 已竣工10户 | 已签约22户 </p>
            <h3 class="title ellipsis">昆明润城</h3>
            </div></a></li>
         */}
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
