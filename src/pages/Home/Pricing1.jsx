import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Row, Col, Button } from 'antd';
import { getChildrenToRender } from './utils';
import {Link} from 'umi';

class Pricing1 extends React.PureComponent {
  getChildrenToRender = (item) => {
    const {
      wrapper,
      topWrapper,
      name,
      buttonWrapper,
      line,
      content,
      money,
      image,
    } = item.children;
    return (
      <Col key={item.name} {...item}>
        {/* <QueueAnim type="bottom" {...wrapper}>
          <div {...topWrapper}>
            <div {...name} key="name">
              {name.children}
            </div>
            <h1 {...money} key="money">
              {money.children}
            </h1>
          </div>
          <div {...content} key="content">
            {content.children}
          </div>
          <i {...line} key="line" />
          <div {...buttonWrapper} key="button">
            <Button {...buttonWrapper.children.a}>
              {buttonWrapper.children.a.children}
            </Button>
          </div>
        </QueueAnim> */}
      </Col>
    );
  };

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const { block } = dataSource;
    const childrenToRender = block.children.map(this.getChildrenToRender);
    return (
      <div {...props} {...dataSource.wrapper} className="pricing1">
        <Link to='/bigHouse'>
          <img className='image1' src={dataSource.image1}/>
        </Link>
        <Link to='/oldHouse'>
          <img className='image2' src={dataSource.image2}/>
        </Link>
        {/* <div {...dataSource.page}>
          <div key="title" {...dataSource.titleWrapper}> */}
            {/* {dataSource.titleWrapper.children.map(getChildrenToRender)} */}
          {/* </div>
          <OverPack {...dataSource.OverPack}>
            <QueueAnim
              type="bottom"
              component={Row}
              leaveReverse
              ease={['easeOutQuad', 'easeInOutQuad']}
              key="content"
            >
              {childrenToRender}
            </QueueAnim>
          </OverPack> */}
        {/* </div> */}
      </div>
    );
  }
}

export default Pricing1;
