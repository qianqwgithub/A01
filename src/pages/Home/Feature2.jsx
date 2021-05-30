import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

function Content2(props) {
  const { ...tagProps } = props;
  const { dataSource, isMobile } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;
  const animType = {
    queue: isMobile ? 'bottom' : 'left',
    one: isMobile
      ? {
          scaleY: '+=0.3',
          opacity: 0,
          type: 'from',
          ease: 'easeOutQuad',
        }
      : {
          x: '+=30',
          opacity: 0,
          type: 'from',
          ease: 'easeOutQuad',
        },
  };
  const img = (
    <TweenOne
      key="img"
      animation={animType.one}
      resetStyle
      {...dataSource.imgWrapper}
      component={Col}
      componentProps={{
        md: dataSource.imgWrapper.md,
        xs: dataSource.imgWrapper.xs,
      }}
    >
      <span {...dataSource.img}>
        <img src={dataSource.img.children} width="100%" alt="img" />
      </span>
    </TweenOne>
  );
  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <OverPack {...dataSource.OverPack} component={Row}>
        {isMobile && img}
        <QueueAnim
          type={animType.queue}
          key="text"
          leaveReverse
          ease={['easeOutCubic', 'easeInCubic']}
          {...dataSource.textWrapper}
          component={Col}
          componentProps={{
            md: dataSource.textWrapper.md,
            xs: dataSource.textWrapper.xs,
          }}
        >
          <h2 key="h1" {...dataSource.title}>
            {dataSource.title.children}
          </h2>
          <div key="p" {...dataSource.content}>
            {dataSource.content.children}
          </div>
        </QueueAnim>
        <ul class="Column">
          <li class="li2">
            <a href="javascript:void(0)" title="专注设计" class="imga">
              <h3 class="title ellipsis">专注设计</h3>
              <div class="num ellipsis">16<span>+</span></div>
              <div class="style ellipsis">年</div>
            </a>
          </li>
          <li class="li3">
            <a href="javascript:void(0)" title="设计师" class="imga">
              <h3 class="title ellipsis">设计师</h3>
              <div class="num ellipsis">60<span>+</span></div>
              <div class="style ellipsis">名</div>
            </a>
          </li>
          <li class="li4">
            <a href="javascript:void(0)" title="金牌项目经理" class="imga">
              <h3 class="title ellipsis">金牌项目经理</h3>
              <div class="num ellipsis">30<span>+</span></div>
              <div class="style ellipsis">名</div>
            </a>
          </li>
          <li class="li5">
            <a href="javascript:void(0)" title="服务家庭" class="imga">
              <h3 class="title ellipsis">服务家庭</h3>
              <div class="num ellipsis">9860<span>+</span></div>
              <div class="style ellipsis">户</div>
            </a>
          </li>
        </ul>
        {/* {!isMobile && img} */}
      </OverPack>
    </div>
  );
}

export default Content2;
