/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import {Input,message } from 'antd';
import './index.less';
import '@/static/css/style.css';
import '@/static/css/style_public.css';
import '@/static/css/minify.css';
import '@/static/css/minify1.css';
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

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class PACK extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
      name:'',
      phone:'',
      name1:'',
      phone1:'',
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
  nameChange=e=>{
    console.log(e.target.value);
    this.setState({
      name:e.target.value
    })
  }
  phoneChange=e=>{
    console.log(e.target.value);
    this.setState({
      phone:e.target.value
    })
  }
  baomingClick=()=>{
    request.put("/api/fitment/fitmentOrder/save",{
      data: {
        datatype:2,
        linkName: this.state.name,
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
  nameChange1=e=>{
    console.log(e.target.value);
    this.setState({
      name1:e.target.value
    })
  }
  phoneChange1=e=>{
    console.log(e.target.value);
    this.setState({
      phone1:e.target.value
    })
  }
  baomingClick1=()=>{
    request.put("/api/fitment/fitmentOrder/save",{
      data: {
        datatype:2,
        linkName: this.state.name1,
        linkPhone: this.state.phone1,
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

  render() {
    const children = [
      //导航条
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      <div class="Wrap ztPage ztServant">
        <div class="ztSec">
        <div class="ztWrap secbanner">
          <img src={require('@/static/picture/secBanner.jpg')} />
        </div>
        </div>
        <div class="ztCon secService1">
        <div class="ztTitle">
          <h2>为你带来<span>8大私享服务</span></h2>
          <p>专职为您打造健康品质新生活</p>
        </div>
        <ul class="clearfix">
          <li><h3 class="title clamp">私化服务<br />多对一监管</h3>
          <div class="note clamp">
            设计交底、隐蔽验收、中期验收、竣工验收、售后服务每一阶段都有专业负责工作人员监管，实现工程私人定制化一对一服务。
          </div>
          <div class="ico">
            <div class="imgh imgh11">
            <img src={require('@/static/picture/secService1_01.png')} />
            </div>
          </div></li>
          <li><h3 class="title clamp">多位一体工地<br />督查服务</h3>
          <div class="note clamp">
            工地设置施工展示牌，工程监理每天更新监察日志，项目经理每日签到，设计师每周巡查，督查人员定期电话回访。多位一体服务，职责分明监察及时
          </div>
          <div class="ico">
            <div class="imgh imgh11">
            <img src={require('@/static/picture/secService1_02.png')} />
            </div>
          </div></li>
          <li><h3 class="title clamp">五星级工地<br />文明标准</h3>
          <div class="note clamp">
            工地环境标准化，每位工人上工身着工服，禁止抽烟，文明用语，擅长与客户交流，工地卫生日清日毕，保证工地整洁。
          </div>
          <div class="ico">
            <div class="imgh imgh11">
            <img src={require('@/static/picture/secService1_03.png')} />
            </div>
          </div></li>
          <li id="end"><h3 class="title clamp">EPR 质量<br />信息登记</h3>
          <div class="note clamp">
            工程每一阶段、每一施工节点，都有专业 EPR 系统进行记录，及时传递质量信息给每一个施工监控人员。
          </div>
          <div class="ico">
            <div class="imgh imgh11">
            <img src={require('@/static/picture/secService1_04.png')} />
            </div>
          </div></li>
          <li><h3 class="title clamp">8S 体系分段单项<br />验收施工管理体系</h3>
          <div class="note clamp">
            5 阶段 10 项验收机制，从原房验收，到材料、拆砌墙、水电、乳胶漆、木工等 10 余项验收机制，全流程阶段验收，确保材料和施工质量。
          </div>
          <div class="ico">
            <div class="imgh imgh11">
            <img src={require('@/static/picture/secService1_05.png')} />
            </div>
          </div></li>
          <li><h3 class="title clamp">全流程<br />高效服务</h3>
          <div class="note clamp">
            工程施工的每一个阶段都有专业人员协助督查。及时处理问题，两小时内给予回复，24 小时内给予解决方案。
          </div>
          <div class="ico">
            <div class="imgh imgh11">
            <img src={require('@/static/picture/secService1_06.png')} />
            </div>
          </div></li>
          <li><h3 class="title clamp">售后回访<br />服务</h3>
          <div class="note clamp">
            从工程开工到售后保修都有专人回访及意见跟进，保证最大程度满足客户需求。
          </div>
          <div class="ico">
            <div class="imgh imgh11">
            <img src={require('@/static/picture/secService1_07.png')} />
            </div>
          </div></li>
          <li id="end"><h3 class="title clamp">行业内率先<br />与客户签订</h3>
          <div class="note clamp">
            我们在与每一位客户签订《材料保真协议》和《室内装修环保协议》，承诺每一样材料都是正品，每一个家健康环保，环保不达标，全额赔。
          </div>
          <div class="ico">
            <div class="imgh imgh11">
            <img src={require('@/static/picture/secService1_08.png')} />
            </div>
          </div></li>
        </ul>
        </div>
        <div class="ztCon secService2">
        <div class="ztTitle">
          <h2>为你带来<span>超长质保服务</span></h2>
          <p>专职为您打造健康品质新生活</p>
        </div>
        <ul class="clearfix">
          <li class="scale">
          <div class="imgh imgh43">
            <img src={require('@/static/picture/secService2_01.jpg')} />
          </div><h3 class="title ellipsis">水电质保<span>50</span>年</h3></li>
          <li class="scale">
          <div class="imgh imgh43">
            <img src={require('@/static/picture/secService2_02.jpg')} />
          </div><h3 class="title ellipsis">防水质保<span>10</span>年</h3></li>
          <li id="end" class="scale">
          <div class="imgh imgh43">
            <img src={require('@/static/picture/secService2_03.jpg')} />
          </div><h3 class="title ellipsis"><span>终身</span>维护</h3></li>
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
        className="templates-wrapper packBg"
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
