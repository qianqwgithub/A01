import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import BannerAnim, { Element } from 'rc-banner-anim';
import { Row, Col } from 'antd';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import { getChildrenToRender } from './utils';
import 'rc-banner-anim/assets/index.css';
import '@/common/config';
import request from "umi-request";
import {Link} from 'umi';

class Teams extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list:[],
    };
  }
  componentDidMount(){
    this.handleSelectAll();
  }
  handleSelectAll(){
    request.get("/api/fitment/fitmentStylist/grid",{
      params: {
        page:1,
        size:4,
      }
    })
    .then(response=>{
      console.log(response);
      var list=response.data.pageData;
      list.map(listItem=>{
        request.get("/api/fitment/fitmentCase/grid",{
          params: {
            page:1,
            size:3,
            stylistId:listItem.id,
          }
        })
        .then(cases=>{
          console.log(cases);
          listItem['cases']=cases.data.pageData;
          console.log(list);
          this.setState({
            list:[...list],
          });
        })
        .catch(error=>{
          console.log(error);
        });
      })
    })
    .catch(error=>{
      console.log(error);
    });
  }
  getChildrenToRender = (children) => {
    console.log(children);
    return children.map((item, i) => {
      return (
        <Element
          key={i.toString()}
          prefixCls="banner-user-elem"
        >
          <QueueAnim
            type={['bottom', 'top']}
            delay={200}
            key="text"
          >
            <Row className='content'>
              <Col span={4} className='text'>
                <div className='name'>
                  <div className='userName'>{item.title}</div>
                  <div className='cut'>/</div>
                  <div className='pose'>{item.stylist_label}</div>
                </div>
                <Row>
                  <div className='pose'>设计理念:</div>
                  <div className=''>{item.designidea}</div>
                  {/* <button className='userButton'>预约设计</button> */}
                </Row>
              </Col>
              <Col span={9}>
                <img className='image' src={global.constants.imgurl+item.img_url}></img>
              </Col>
              <Col span={11} className='images'>
                <div className='imageTop'>
                  {item.cases&&item.cases[0]&&item.cases[0].img_url?
                      <div>
                        <Link to={'/cases/detail?id='+item.cases[0].id}>
                          <img className='image1'src={item.cases&&item.cases[0]&&item.cases[0].img_url?global.constants.imgurl+item.cases[0].img_url:''} width="100%" alt="img" />
                        </Link>
                      </div>
                    :''
                  }
                  {item.cases&&item.cases[1]&&item.cases[1].img_url?
                      <div>
                    <Link to={'/cases/detail?id='+item.cases[1].id}>
                        <img className='image1' src={item.cases&&item.cases[1]&&item.cases[1].img_url?global.constants.imgurl+item.cases[1].img_url:''} width="100%" alt="img" />
                    </Link>
                      </div>
                    :''
                  }
                </div>
                  {item.cases&&item.cases[2]&&item.cases[2].img_url?
                      <div>
                    <Link to={'/cases/detail?id='+item.cases[2].id}>
                        <img className='image2' src={item.cases&&item.cases[2]&&item.cases[2].img_url?global.constants.imgurl+item.cases[2].img_url:''} width="100%" alt="img" />
                    </Link>
                      </div>
                    :''
                  }
              </Col>
            </Row>
          </QueueAnim>
        </Element>
      );
    });
  };

  render() {
    const { ...tagProps } = this.props;
    const { dataSource, isMobile } = tagProps;
    delete tagProps.dataSource;
    delete tagProps.isMobile;
    var content=this.state.list;
    return (
      <div {...tagProps} {...dataSource.wrapper}>
        <div class="title-wrapper">
          <h1 class="title-h1">{dataSource.title}</h1>
          <div>{dataSource.content}</div>
        </div>
        <OverPack {...dataSource.OverPack}>
          <TweenOne
            key="wrapper"
            animation={
              isMobile
                ? {
                    scaleY: '+=0.3',
                    opacity: 0,
                    type: 'from',
                    ease: 'easeOutQuad',
                  }
                : {
                    y: '+=30',
                    opacity: 0,
                    type: 'from',
                    ease: 'easeOutQuad',
                  }
            }
            resetStyle
            component=""
          >
            <BannerAnim
              type="across"
              arrow={true}
              // autoPlay
              {...dataSource.BannerAnim}
            >
              {this.getChildrenToRender(content)}
            </BannerAnim>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Teams;
