/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import './index.less';
import '@/static/css/style.css';
import '@/static/css/style_public.css';
import '@/static/css/minify.css';
import '@/static/css/minify6.css';
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
import { message, Button, Space } from 'antd';


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
      step:1,
      a:'',
      b:'',
      c:'',
      d:'',
      area:'',
      phone:'',
    };
  }
    areaChange=e=>{
      console.log(e.target.value);
      this.setState({
        area:e.target.value
      })
    }
    phoneChange=e=>{
      console.log(e.target.value);
      this.setState({
        phone:e.target.value
      })
    }
    handleClick=()=>{
      if(this.state.area==''){
        message.error('请输入面积！');
        return;
      }
      if(this.state.phone==''){
        message.error('请输入手机号！');
        return;
      }
      request.put("/api/fitment/fitmentOrder/save",{
        data: {
          datatype:2,
          area: this.state.area,
          linkPhone: this.state.phone,
        }
      })
      .then(response=>{
        console.log(response);
        if(response.msg=='请输入正确的手机号码！'){
          message.error('请输入正确的手机号码！');
        }else{
          message.success('提交成功');
        }
      })
      .catch(error=>{
        console.log(error);
        if(error.msg&&error.msg!=''){
          message.error(error.msg);
        }else{
          message.error('提交失败');
        }
      });
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
  goStep(e){
    if(e==2&&this.state.a==''){
      message.error('请选择装修类型');
      return;
    }
    if(e==3&&this.state.b==''){
      message.error('请选择户型');
      return;
    }
    if(e==4&&this.state.c==''){
      message.error('请选择装修风格');
      return;
    }
    if(e==5&&this.state.d==''){
      message.error('请选择关注重点');
      return;
    }
    this.setState({
      step:e,
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
      <div class="Wrap ztPage ztStyle ztBack">
        <div class="secPage ztCon">
          {
            this.state.step==1?
              <div class="page page1" >
                <div class="pageNum">
                  <span class="now icon">01</span>/
                  <span class="count">04</span>
                </div>
                <h3 class="ht ellipsis">选择您的软装类型</h3>
                <ul class="clearfix bd">
                  <li onClick={()=>this.setState({a:1})} class="li1"  data-field="ruanzhuang" data-val="经济适用">
                  <div class="box">
                    <div class="imgh imgh11">
                    <img src={require('@/static/picture/secRuangZhuang_01.jpg')} />
                    </div>
                    <h3 class="title ellipsis"><i class="icon" className={this.state.a==1?'icon iconPick':'icon'}></i>经济适用</h3>
                  </div></li>
                  <li onClick={()=>this.setState({a:2})} class="li2"  data-field="ruanzhuang" data-val="舒适理想">
                  <div class="box">
                    <div class="imgh imgh11">
                    <img src={require('@/static/picture/secRuangZhuang_02.jpg')} />
                    </div>
                    <h3 class="title ellipsis"><i className={this.state.a==2?'icon iconPick':'icon'} class="icon"></i>舒适理想</h3>
                  </div></li>
                  <li onClick={()=>this.setState({a:3})}  class="li3"  data-field="ruanzhuang" data-val="轻奢品质">
                  <div class="box">
                    <div class="imgh imgh11">
                    <img src={require('@/static/picture/secRuangZhuang_03.jpg')} />
                    </div>
                    <h3  class="title ellipsis"><i className={this.state.a==3?'icon iconPick':'icon'} class="icon"></i>轻奢品质</h3>
                  </div></li>
                </ul>
                <div class="ft">
                  <div class="btn prev icon" onclick="javascript:goPage(this)" data-page="page0"></div>
                  <div class="btn next icon" onClick={({e=2})=>this.goStep(e)} data-page="page2" data-validate="ruanzhuang"></div>
                </div>
              </div>
              :''
          }
          {
            this.state.step==2?
              <div class="page page2">
                <div class="pageNum">
                  <span class="now icon">02</span>/
                  <span class="count">04</span>
                </div>
                <h3 class="ht ellipsis">选择您的户型</h3>
                <ul class="clearfix bd">
                  <li onClick={()=>this.setState({b:1})} class="li1"  data-field="unit" data-val="二居室">
                  <div class="box">
                    <div class="imgh imgh11">
                    <img src={require('@/static/picture/secUnit_01.jpg')} />
                    </div>
                    <h3 class="title ellipsis"><i className={this.state.b==1?'icon iconPick':'icon'} class="icon"></i>二居室</h3>
                  </div></li>
                  <li onClick={()=>this.setState({b:2})} class="li2"  data-field="unit" data-val="三居室">
                  <div class="box">
                    <div class="imgh imgh11">
                    <img src={require('@/static/picture/secUnit_02.jpg')} />
                    </div>
                    <h3 class="title ellipsis"><i className={this.state.b==2?'icon iconPick':'icon'} class="icon"></i>三居室</h3>
                  </div></li>
                  <li onClick={()=>this.setState({b:3})} class="li3"  data-field="unit" data-val="四居室">
                  <div class="box">
                    <div class="imgh imgh11">
                    <img src={require('@/static/picture/secUnit_03.jpg')} />
                    </div>
                    <h3 class="title ellipsis"><i className={this.state.b==3?'icon iconPick':'icon'} class="icon"></i>四居室</h3>
                  </div></li>
                  <li onClick={()=>this.setState({b:4})} class="li4"  data-field="unit" data-val="别墅及其他">
                  <div class="box">
                    <div class="imgh imgh11">
                    <img src={require('@/static/picture/secUnit_04.jpg')} />
                    </div>
                    <h3 class="title ellipsis"><i className={this.state.b==4?'icon iconPick':'icon'} class="icon"></i>别墅及其他</h3>
                  </div></li>
                </ul>
                <div class="ft">
                  <div class="btn prev icon" onClick={()=>this.setState({step:1})} data-page="page1"></div>
                  <div class="btn next icon"  onClick={({e=3})=>this.goStep(e)} data-page="page3" data-validate="unit"></div>
                </div>
                </div>
              :''
          }
          {
            this.state.step==3?
            <div class="page page3">
            <div class="pageNum">
              <span class="now icon">03</span>/
              <span class="count">04</span>
            </div>
            <h3 class="ht ellipsis">选择您喜欢的软装风格</h3>
            <ul class="clearfix bd">
              <li onClick={()=>this.setState({c:1})} class="li1"  data-field="dstyle" data-val="现代">
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/secStyle_01.jpg')} />
                </div>
                <h3 class="title ellipsis"><i className={this.state.c==1?'icon iconPick':'icon'} class="icon"></i>现代</h3>
              </div></li>
              <li onClick={()=>this.setState({c:2})} class="li2"  data-field="dstyle" data-val="北欧">
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/secStyle_02.jpg')} />
                </div>
                <h3 class="title ellipsis"><i className={this.state.c==2?'icon iconPick':'icon'} class="icon"></i>北欧</h3>
              </div></li>
              <li onClick={()=>this.setState({c:3})} class="li3"  data-field="dstyle" data-val="简欧">
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/secStyle_03.jpg')} />
                </div>
                <h3 class="title ellipsis"><i className={this.state.c==3?'icon iconPick':'icon'} class="icon"></i>简欧</h3>
              </div></li>
              <li onClick={()=>this.setState({c:4})} class="li4"  data-field="dstyle" data-val="新中式">
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/secStyle_04.jpg')} />
                </div>
                <h3 class="title ellipsis"><i className={this.state.c==4?'icon iconPick':'icon'} class="icon"></i>新中式</h3>
              </div></li>
              <li onClick={()=>this.setState({c:5})} class="li5"  data-field="dstyle" data-val="美式">
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/secStyle_05.jpg')} />
                </div>
                <h3 class="title ellipsis"><i className={this.state.c==5?'icon iconPick':'icon'} class="icon"></i>美式</h3>
              </div></li>
              <li onClick={()=>this.setState({c:6})} class="li6"  data-field="dstyle" data-val="其他风格">
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/secStyle_06.jpg')} />
                </div>
                <h3 class="title ellipsis"><i className={this.state.c==6?'icon iconPick':'icon'} class="icon"></i>其他风格</h3>
              </div></li>
            </ul>
            <div class="ft">
              <div class="btn prev icon" onClick={()=>this.setState({step:2})} data-page="page2"></div>
              <div class="btn next icon" onClick={({e=4})=>this.goStep(e)} data-page="page4" data-validate="dstyle"></div>
            </div>
            </div>
            :''
          }
          {
            this.state.step==4?
            <div class="page page4">
            <div class="pageNum">
              <span class="now icon">04</span>/
              <span class="count">04</span>
            </div>
            <h3 class="ht ellipsis">选择装修中您关注的重点</h3>
            <ul class="clearfix bd">
              <li onClick={()=>this.setState({d:1})} class="li1"  data-field="key" data-val="客厅">
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/secKey_01.jpg')} />
                </div>
                <h3 class="title ellipsis"><i className={this.state.d==1?'icon iconPick':'icon'} class="icon"></i>客厅</h3>
              </div></li>
              <li onClick={()=>this.setState({d:2})} class="li2"  data-field="key" data-val="卧室">
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/secKey_02.jpg')} />
                </div>
                <h3 class="title ellipsis"><i className={this.state.d==2?'icon iconPick':'icon'} class="icon"></i>卧室</h3>
              </div></li>
              <li onClick={()=>this.setState({d:3})} class="li3"  data-field="key" data-val="餐厅">
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/secKey_03.jpg')} />
                </div>
                <h3 class="title ellipsis"><i className={this.state.d==3?'icon iconPick':'icon'} class="icon"></i>餐厅</h3>
              </div></li>
              <li onClick={()=>this.setState({d:4})} class="li4"  data-field="key" data-val="我统统要">
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/secKey_04.jpg')} />
                </div>
                <h3 class="title ellipsis"><i className={this.state.d==4?'icon iconPick':'icon'} class="icon"></i>我统统要</h3>
              </div></li>
              <li onClick={()=>this.setState({d:5})} class="li5"  data-field="key" data-val="暂无需求">
              <div class="box">
                <div class="imgh imgh11">
                <img src={require('@/static/picture/secKey_05.jpg')} />
                </div>
                <h3 class="title ellipsis"><i className={this.state.d==5?'icon iconPick':'icon'} class="icon"></i>暂无需求</h3>
              </div></li>
            </ul>
            <div class="ft">
              <div class="btn prev icon" onClick={()=>this.setState({step:3})} data-page="page3"></div>
              <div class="btn next icon"  onClick={({e=5})=>this.goStep(e)} data-page="page5" data-validate="key"></div>
            </div>
            </div>
            :''
          }
          {
            this.state.step==5?
            <div class="page page5 pageResult">
            <div class="pageNum"></div>
            <h3 class="ht ellipsis">最后一步获取测试结果及详细预算清单</h3>
            <div class="area inputBox">
              <input onChange={this.areaChange}  type="number" name="area" class="input" id="area" placeholder="输入您家面积" autocomplete="off" />
            </div>
            <div class="phone inputBox">
              <input onChange={this.phoneChange} type="number" name="phone" class="input" id="phone" placeholder="输入您的手机号码，以便获取测试结果" autocomplete="off" />
            </div>
            <div class="ft">
              <div class="btn next icon" onClick={this.handleClick} data-page="pageResult" data-validate="indent" id="_phpok_submit"></div>
            </div>
            </div>
            :''
          }
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
