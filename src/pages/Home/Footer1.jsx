import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import { getChildrenToRender } from './utils';
import { isImg } from './utils';
import {MyIcon} from '@/common/MyIcon'

class Footer extends React.Component {
  static defaultProps = {
    className: 'footer1',
  };

  getLiChildren = (data) =>
    data.map((item, i) => {
      const { title, childWrapper, ...itemProps } = item;
      return (
        <Col key={i.toString()} {...itemProps} title={null} content={null}>
          <h2 {...title}>
            {typeof title.children === 'string' &&
            title.children.match(isImg) ? (
              <img src={title.children} width="100%" alt="img" />
            ) : (
              title.children
            )}
          </h2>
          <div {...childWrapper}>
            {childWrapper.children.map(getChildrenToRender)}
          </div>
        </Col>
      );
    });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = this.getLiChildren(dataSource.block.children);
    return (
      <div {...props} {...dataSource.wrapper}>
        <img src={require('@/static/img/fotter.png')} alt="" />
        {/* <OverPack {...dataSource.OverPack}>
          <QueueAnim
            type="bottom"
            key="ul"
            leaveReverse
            component={Row}
            {...dataSource.block}
          >
            {childrenToRender}
            <div className='info'>
              <div className='phone'>
                <MyIcon type=''></MyIcon>
                <div>{dataSource.phone}</div>
              </div>
              <div className='statistics'>
                <div>
                  <div className='number'>{dataSource.live_action}张</div>
                  <div>高品质实景装修图片</div>
                </div>
                <div>
                  <div className='number'>{dataSource.case}张</div>
                  <div>高品质装修案例</div>
                </div>
              </div>
            </div>
          </QueueAnim>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            key="copyright"
            {...dataSource.copyrightWrapper}
          >
            <div {...dataSource.copyrightPage}>
              <div {...dataSource.copyright}>
                {dataSource.copyright.children}
              </div>
            </div>
          </TweenOne>
          <div className='qrCode1'>
            <img src={require('@/static/picture/ec7004f55af79d09.jpg')} alt="官方微信"></img>
          </div>
          <div className='qrCode2'>
            <img src={require('@/static/picture/6177680bb3092174.jpg')} alt="官方微信"></img>
          </div>
        </OverPack> */}
      </div>
    );
  }
}

export default Footer;
