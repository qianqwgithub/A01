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

export default class BIGHOUSE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      houseTypeId:'',
      houseTypes:[],
      styleId:'',
      styles:[],
      list:[],
      current:1,
      pageSize:9,
      pageCount:0,
      listTeam:[],
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
    this.handleSelectHouseTypes();
    this.handleSelectStyle();
    this.handleSelectAll();
  }
  handleSelectAll(){
    request.get("/api/fitment/fitmentCase/grid",{
      params: {
        page:this.state.current,
        size:this.state.pageSize,
        styleId:this.state.styleId,
        houseTypeId:this.state.houseTypeId,
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
  handleSelectHouseTypes(){
    request.get("/api/fitment/fitmentHouseType/list",{
      params: {
      }
    })
    .then(response=>{
      console.log(response);
      this.setState({ houseTypes: response.data});
    })
    .catch(error=>{
      console.log(error);
    });
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

  searchStyle(id){
    console.log(id);
    this.setState(state=>({
      current:1,
      styleId:id,
    }),()=>{
      this.handleSelectAll();
    })
  }
  searchHouseType(id){
    console.log(id);
    this.setState(state=>({
      current:1,
      houseTypeId:id,
    }),()=>{
      this.handleSelectAll();
    })
  }
  searchClean(){
    this.setState(state=>({
      current:1,
      styleId:'',
      houseTypeId:'',
    }),()=>{
      this.handleSelectAll();
    })
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

  render() {
    const children = [
      //导航条
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      <div class="Wrap ztCases ztPage">
          <div class="pubCases Wrap" data="halfSlide" data-view="1" data-auto="999" data-space="0" data-loop="0">
            <div class="bd swiper-container">
              <ul class="swiper-wrapper">
              <li class="swiper-slide"><a title="昆明恒大名都128平米" class="imga">
                <div class="imgh">
                  <img src={require('@/static/picture/6b9b85772c965244.jpg')} data-src={require('@/static/picture/6b9b85772c965244.jpg')} alt="昆明恒大名都128平米" class="swiper-lazy" />
                  {/* <div class="swiper-lazy-preloader"></div> */}
                </div></a>
                <div class="infoBox">
                <div class="Column">
                  <div class="info fr">
                  <a href="233.html" title="昆明恒大名都128平米" class="imga"><h3 class="title ellipsis">昆明恒大名都128平米</h3></a>
                  <p class="tags"> 三室一厅 / 128m&sup2; / 混搭 </p>
                  {/* <a href="233.html" title="昆明恒大名都128平米" class="inline more">查看详情</a> */}
                  </div>
                  {/* <div class="leader fl">
                  <a href="index.html" class="">首页</a>
                  <span class="">&gt;</span>
                  <a >案例赏析</a>
                  </div> */}
                </div>
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
        <div class="Column PubSearch CaseSearch">
          <div class="clearfix SearchBtnBox">
            <div class="SearchHas">
              已选条件： 
            </div>
          <a onClick={()=>{this.searchClean()}} class="ClearSearchBtn">清空筛选条件</a>
          </div>
          <div class="SearchListBox">
          <dl class="clearfix first">
          <dt>
            <em>户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型</em>：
          </dt>
          <dd class="clearfix">
            <div onClick={({id=''})=>{this.searchHouseType(id)}} className="break first current" className={''==this.state.houseTypeId?"breakActive break first current":"break first current"} >不限</div>
            {
              this.state.houseTypes.map(item=>{
                return <div onClick={({id=item.id})=>{this.searchHouseType(id)}} className="break first current" className={item.id==this.state.houseTypeId?"breakActive break first current":"break first current"} value={item.id}>{item.title}</div>
              })
            }
          </dd>
          </dl>
          <dl class="clearfix">
          <dt>
            <em>风&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</em>：
          </dt>
          <dd class="clearfix">
            <div onClick={({id=''})=>{this.searchStyle(id)}} className="break first current" className={''==this.state.styleId?"breakActive break first current":"break first current"} >不限</div>
            {
              this.state.styles.map(item=>{
                return <div onClick={({id=item.id})=>{this.searchStyle(id)}} className="break first current" className={item.id==this.state.styleId?"breakActive break first current":"break first current"} value={item.id}>{item.title}</div>
              })
            }
            {/* <a href="search.html" class="break first current" rel="nofollow">不限</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[dstyle]=fg01');" class="break" rel="nofollow">混搭</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[dstyle]=fg02');" class="break" rel="nofollow">现代简约</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[dstyle]=fg03');" class="break" rel="nofollow">雅致</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[dstyle]=fg04');" class="break" rel="nofollow">新中式</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[dstyle]=fg05');" class="break" rel="nofollow">新古典</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[dstyle]=fg06');" class="break" rel="nofollow">欧式古典</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[dstyle]=fg07');" class="break" rel="nofollow">美式乡村</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[dstyle]=fg08');" class="break" rel="nofollow">地中海</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[dstyle]=fg09');" class="break" rel="nofollow">后现代风格</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[dstyle]=fg10');" class="break" rel="nofollow">东南亚风格</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[dstyle]=fg13');" class="break" rel="nofollow">其他</a>
          */}
          </dd>
          </dl>
          <dl class="clearfix">
          {/* <dt>
            <em>面&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;积</em>：
          </dt>
          <dd class="clearfix">
            <a href="search.html" class="break first current" rel="nofollow">不限</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[areaselect]=mj01');" class="break" rel="nofollow">50-80平</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[areaselect]=mj02');" class="break" rel="nofollow">80-100平</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[areaselect]=mj03');" class="break" rel="nofollow">100-120平</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[areaselect]=mj04');" class="break" rel="nofollow">120-150平</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[areaselect]=mj05');" class="break" rel="nofollow">150-200平</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[areaselect]=mj06');" class="break" rel="nofollow">200平以上</a>
          </dd>
          </dl>
          <dl class="clearfix">
          <dt>
            <em>所属楼盘</em>：
          </dt>
          <dd class="clearfix">
            <a href="search.html" class="break first current" rel="nofollow">不限</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[houses]=346');" class="break" rel="nofollow">西城时代西锦里</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[houses]=345');" class="break" rel="nofollow">海伦国际7号地</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[houses]=344');" class="break" rel="nofollow">俊发城蔷薇苑</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[houses]=343');" class="break" rel="nofollow">新希望-白麓城</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[houses]=287');" class="break" rel="nofollow">万科白沙润园</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[houses]=286');" class="break" rel="nofollow">万科&middot;金域水岸</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[houses]=285');" class="break" rel="nofollow">昆明恒大&middot;昆海湖</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[houses]=284');" class="break" rel="nofollow">融创孔雀镇</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[houses]=283');" class="break" rel="nofollow">俊发城茉莉苑</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[houses]=271');" class="break" rel="nofollow">绿地&middot;滇池国际健康城</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[houses]=270');" class="break" rel="nofollow">金地&middot;悦天下</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[houses]=269');" class="break" rel="nofollow">万科&middot;金域水岸</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[houses]=268');" class="break" rel="nofollow">融创孔雀镇</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[houses]=250');" class="break" rel="nofollow">昆明恒大名都</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[houses]=249');" class="break" rel="nofollow">昆明保利&middot;玺樾</a>
            <a href="javascript:window.open('https://www.ysgjrz.com/search?cid=1&amp;ext[houses]=248');" class="break" rel="nofollow">昆明润城</a>
          </dd> */}
          </dl>
        </div>
        </div>
        <div class="Column CasesList">
          <ul class="clearfix" id="PageLoadBox">
            {
              this.state.list.map(item=>{
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
            {/* <li>
              <a href="24.html" title="保利&middot;玺樾" class="imga scale photo">
                <div class="imgh imgh43">
                  <img src={require('@/static/picture/thumb_16.jpg')} alt="保利&middot;玺樾" />
                </div>
                <div class="trbl bg">
                  <i class="icon2"></i>
                </div>
              </a>
              <div class="info clearfix">
                <a href="144.html" title="王咏琪" target="_blank" class="imga designer">
                <div class="imgh imgh11">
                  <img src={require('@/static/picture/px_02.png')} alt="王咏琪" />
                </div></a>
                <div class="ove">
                <p class="tags ellipsis"> 洋房 / 200m&sup2; / 新古典 </p>
                <a href="24.html" title="保利&middot;玺樾" class="imga"><h3 class="title ellipsis">保利&middot;玺樾</h3></a>
                </div>
              </div>
            </li>
            <li><a href="24.html" title="保利&middot;玺樾" class="imga scale photo">
              <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_16.jpg')} alt="保利&middot;玺樾" />
              </div>
              <div class="trbl bg">
              <i class="icon2"></i>
              </div></a>
            <div class="info clearfix">
              <a href="144.html" title="王咏琪" target="_blank" class="imga designer">
              <div class="imgh imgh11">
                <img src={require('@/static/picture/px_02.png')} alt="王咏琪" />
              </div></a>
              <div class="ove">
              <p class="tags ellipsis"> 洋房 / 200m&sup2; / 新古典 </p>
              <a href="24.html" title="保利&middot;玺樾" class="imga"><h3 class="title ellipsis">保利&middot;玺樾</h3></a>
              </div>
            </div></li>
            <li><a href="255.html" title="昆明东风东路水均大街地中海风格案例实景欣赏" class="imga scale photo">
              <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1743.jpg')} alt="昆明东风东路水均大街地中海风格案例实景欣赏" />
              </div>
              <div class="trbl bg">
              <i class="icon2"></i>
              </div></a>
            <div class="info clearfix">
              <div class="ove">
              <p class="tags ellipsis"> 三室两厅 / 地中海 </p>
              <a href="255.html" title="昆明东风东路水均大街地中海风格案例实景欣赏" class="imga"><h3 class="title ellipsis">昆明东风东路水均大街地中海风格案例实景欣赏</h3></a>
              </div>
            </div></li>
            <li id="end"><a href="234.html" title="昆明润城45平米小户型" class="imga scale photo">
              <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1728.jpg')} alt="昆明润城45平米小户型" />
              </div>
              <div class="trbl bg">
              <i class="icon2"></i>
              </div></a>
            <div class="info clearfix">
              <a href="25.html" title="王绪龙" target="_blank" class="imga designer">
              <div class="imgh imgh11">
                <img src={require('@/static/picture/px_05.png')}  alt="龙瑶" />
              </div></a>
              <div class="ove">
              <p class="tags ellipsis"> 三室一厅 / 128m&sup2; / 混搭 </p>
              <a href="233.html" title="昆明恒大名都128平米" class="imga"><h3 class="title ellipsis">昆明恒大名都128平米</h3></a>
              </div>
            </div></li>
            <li><a href="232.html" title="昆明海伦国际110平米现代简约风格" class="imga scale photo">
              <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1697.jpg')} alt="昆明海伦国际110平米现代简约风格" />
              </div>
              <div class="trbl bg">
              <i class="icon2"></i>
              </div></a>
            <div class="info clearfix">
              <a href="139.html" title="龙瑶" target="_blank" class="imga designer">
              <div class="imgh imgh11">
                <img src={require('@/static/picture/px_09.png')}  alt="龙瑶" />
              </div></a>
              <div class="ove">
              <p class="tags ellipsis"> 两室两厅 / 110m&sup2; / 现代简约 </p>
              <a href="232.html" title="昆明海伦国际110平米现代简约风格" class="imga"><h3 class="title ellipsis">昆明海伦国际110平米现代简约风格</h3></a>
              </div>
            </div></li>
            <li id="end"><a href="223.html" title="碧桂园凤凰湾" class="imga scale photo">
              <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1687.jpg')} alt="碧桂园凤凰湾" />
              </div>
              <div class="trbl bg">
              <i class="icon2"></i>
              </div></a>
            <div class="info clearfix">
              <a href="30.html" title="廖智琴" target="_blank" class="imga designer">
              <div class="imgh imgh11">
                <img src={require('@/static/picture/px_07.png')} alt="廖智琴" />
              </div></a>
              <div class="ove">
              <p class="tags ellipsis"> 复式 / 218m&sup2; / 欧式古典 </p>
              <a href="223.html" title="碧桂园凤凰湾" class="imga"><h3 class="title ellipsis">碧桂园凤凰湾</h3></a>
              </div>
            </div></li>
            <li><a href="222.html" title="山水润城雅园" class="imga scale photo">
              <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1663.jpg')} alt="山水润城雅园" />
              </div>
              <div class="trbl bg">
              <i class="icon2"></i>
              </div></a>
            <div class="info clearfix">
              <a href="25.html" title="王绪龙" target="_blank" class="imga designer">
              <div class="imgh imgh11">
                <img src={require('@/static/picture/px_09.png')}  alt="王绪龙" />
              </div></a>
              <div class="ove">
              <p class="tags ellipsis"> 三室一厅 / 118m&sup2; / 现代简约 </p>
              <a href="222.html" title="山水润城雅园" class="imga"><h3 class="title ellipsis">山水润城雅园</h3></a>
              </div>
            </div></li>
            <li><a href="221.html" title="恒大玖珑湾126㎡现代简约" class="imga scale photo">
              <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1650.jpg')} alt="恒大玖珑湾126㎡现代简约" />
              </div>
              <div class="trbl bg">
              <i class="icon2"></i>
              </div></a>
            <div class="info clearfix">
              <a href="26.html" title="龙瑶" target="_blank" class="imga designer">
              <div class="imgh imgh11">
                <img src={require('@/static/picture/px_08.png')} alt="龙瑶" />
              </div></a>
              <div class="ove">
              <p class="tags ellipsis"> 两室一厅 / 126m&sup2; / 现代简约 </p>
              <a href="221.html" title="恒大玖珑湾126㎡现代简约" class="imga"><h3 class="title ellipsis">恒大玖珑湾126㎡现代简约</h3></a>
              </div>
            </div></li>
            <li id="end"><a href="220.html" title="绿地海珀澜庭" class="imga scale photo">
              <div class="imgh imgh43">
              <img src={require('@/static/picture/thumb_1636.jpg')} alt="绿地海珀澜庭" />
              </div>
              <div class="trbl bg">
              <i class="icon2"></i>
              </div></a>
            <div class="info clearfix">
              <a href="78.html" title="王加旭" target="_blank" class="imga designer">
              <div class="imgh imgh11">
                <img src={require('@/static/picture/px_02.png')}  alt="王加旭" />
              </div></a>
              <div class="ove">
              <p class="tags ellipsis"> 三室两厅 / 168m&sup2; / 欧式古典 </p>
              <a href="220.html" title="绿地海珀澜庭" class="imga"><h3 class="title ellipsis">绿地海珀澜庭</h3></a>
              </div>
            </div></li>
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
