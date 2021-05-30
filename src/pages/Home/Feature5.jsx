import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Tabs, Row, Col } from 'antd';
import { Icon } from '@ant-design/compatible';
import { getChildrenToRender } from './utils';
import request from "umi-request";
import '@/common/config';
import {Link} from 'umi';

const TabPane = Tabs.TabPane;

class Content7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      guides:[],
      stuffs:[],
      activitys:[],
      dynamics:[],
      withness:[],
    };
  }

  componentDidMount(){
    this.handleSelectGuide();
    this.handleSelectStuff();
    this.handleSelectActivity();
    this.handleSelectDynamic();
    this.handleSelectWitness();
  }
  //装修指南
  handleSelectGuide(){
    request.get("/api/system/sysArticle/grid",{
      params:{
        keycode:'guide'
      }
    })
    .then(response=>{
      console.log(response);
      this.setState({ guides:response.data.pageData});
    })
    .catch(error=>{
      console.log(error);
    });
  }
  //硬装知识
  handleSelectStuff(){
    request.get("/api/system/sysArticle/grid",{
      params:{
        keycode:'stuff'
      }
    })
    .then(response=>{
      console.log(response);
      this.setState({ stuffs:response.data.pageData});
    })
    .catch(error=>{
      console.log(error);
    });
  }
  //最新活动
  handleSelectActivity(){
    request.get("/api/system/sysArticle/grid",{
      params:{
        keycode:'activity'
      }
    })
    .then(response=>{
      console.log(response);
      this.setState({ activitys:response.data.pageData});
    })
    .catch(error=>{
      console.log(error);
    });
  }
  //公司动态
  handleSelectDynamic(){
    request.get("/api/system/sysArticle/grid",{
      params:{
        keycode:'dynamic'
      }
    })
    .then(response=>{
      console.log(response);
      this.setState({ dynamics:response.data.pageData});
    })
    .catch(error=>{
      console.log(error);
    });
  }
  //客户见证
  handleSelectWitness(){
    request.get("/api/system/sysArticle/grid",{
      params:{
        keycode:'witness'
      }
    })
    .then(response=>{
      console.log(response);
      this.setState({ withness:response.data.pageData});
    })
    .catch(error=>{
      console.log(error);
    });
  }

  onChange = (key) => {
    this.setState({ current: parseFloat(key) });
    if(key==0){

    }
  };

  getBlockChildren = (item, i) => {
    const {name, tag} = item;
    const { icon } = tag;
    var content=[];
    if(name=='block0'){
      this.state.guides.map(guide=>{
        let contentItem={
          id:guide.id,
          className: 'content7-content',
          date: {
            className: 'content7-date',
            children:guide.update_time,
          },
          title: {
            className: 'content7-title',
            children: guide.title,
          },
          img: {
            className: 'content7-img',
            children:
            global.constants.imgurl+guide.img_url,
          },
          content: {
            className: 'content7-content',
            children: guide.description,
          },
        };
        content.push(contentItem);
      })
      console.log(content);
    }
    if(name=='block1'){
      this.state.stuffs.map(guide=>{
        let contentItem={
          id:guide.id,
          className: 'content7-content',
          date: {
            className: 'content7-date',
            children:guide.update_time,
          },
          title: {
            className: 'content7-title',
            children: guide.title,
          },
          img: {
            className: 'content7-img',
            children:
            global.constants.imgurl+guide.img_url,
          },
          content: {
            className: 'content7-content',
            children: guide.description,
          },
        };
        content.push(contentItem);
      })
      console.log(content);
    }
    if(name=='block2'){
      this.state.activitys.map(guide=>{
        let contentItem={
          id:guide.id,
          className: 'content7-content',
          date: {
            className: 'content7-date',
            children:guide.update_time,
          },
          title: {
            className: 'content7-title',
            children: guide.title,
          },
          img: {
            className: 'content7-img',
            children:
            global.constants.imgurl+guide.img_url,
          },
          content: {
            className: 'content7-content',
            children: guide.description,
          },
        };
        content.push(contentItem);
      })
      console.log(content);
    }
    if(name=='block3'){
      this.state.dynamics.map(guide=>{
        let contentItem={
          id:guide.id,
          className: 'content7-content',
          date: {
            className: 'content7-date',
            children:guide.update_time,
          },
          title: {
            className: 'content7-title',
            children: guide.title,
          },
          img: {
            className: 'content7-img',
            children:
            global.constants.imgurl+guide.img_url,
          },
          content: {
            className: 'content7-content',
            children: guide.description,
          },
        };
        content.push(contentItem);
      })
      console.log(content);
    }
    if(name=='block4'){
      this.state.withness.map(guide=>{
        let contentItem={
          id:guide.id,
          className: 'content7-content',
          date: {
            className: 'content7-date',
            children:guide.update_time,
          },
          title: {
            className: 'content7-title',
            children: guide.title,
          },
          img: {
            className: 'content7-img',
            children:
            global.constants.imgurl+guide.img_url,
          },
          content: {
            className: 'content7-content',
            children: guide.description,
          },
        };
        content.push(contentItem);
      })
      console.log(content);
    }
    const iconChildren = icon.children;
    const tagText = tag.text;
    return (
      <TabPane
        key={i + 1}
        tab={
          <div className={tag.className}>
            <Icon type={iconChildren} className={icon.className} />
            <div {...tagText}>{tagText.children}</div>
          </div>
        }
        className={item.className}
      >
        <TweenOne.TweenOneGroup
          enter={{
            y: 30,
            delay: 300,
            opacity: 0,
            type: 'from',
            ease: 'easeOutQuad',
          }}
          leave={null}
          component=""
        >
          {this.state.current === i + 1 && (
            <div class="bd swiper-container swiper-container-horizontal">
              <div class="swiper-wrapper" >
                <ul class="swiper-slide ul1 active">
                  {
                    content.map(item=>{
                      return(
                        <Link to={'/gba?id='+item.id}>
                          <li class="">
                            <a title={item.title.children} target="_blank" class="imga scale">
                              <div class="date">{item.date.children}</div>
                              <h3 class="ellipsis title">{item.title.children}</h3>
                              <div class="imgh imgh43">
                                <img src={item.img.children} class="swiper-lazy swiper-lazy-loaded"/>
                              </div>
                              <p class="note clamp">{item.content.children}</p>
                              <i class="icon"></i>
                            </a>
                          </li>
                        </Link>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          )}
          {/* {this.state.current === i + 1 && (
            <Row
              key="content"
              className={content.className}
              gutter={content.gutter}
            >
              <Col className={text.className} xs={text.xs} md={text.md}>
                {textChildren}
              </Col>
              <Col className={img.className} xs={img.xs} md={img.md}>
                <img src={img.children} width="100%" alt="img" />
              </Col>
            </Row>
          )} */}
        </TweenOne.TweenOneGroup>
      </TabPane>
    );
  };

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const tabsChildren = dataSource.block.children.map(this.getBlockChildren);
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>

          <OverPack {...dataSource.OverPack}>
            <TweenOne.TweenOneGroup
              key="tabs"
              enter={{
                y: 30,
                opacity: 0,
                delay: 200,
                type: 'from',
              }}
              leave={{ y: 30, opacity: 0 }}
              {...dataSource.tabsWrapper}
            >
              <Tabs
                key="tabs"
                onChange={this.onChange}
                activeKey={`${this.state.current}`}
                {...dataSource.block}
              >
                {tabsChildren}
              </Tabs>
            </TweenOne.TweenOneGroup>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content7;
