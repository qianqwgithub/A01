import React from 'react';
import { Row, Col } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from './utils';
import request from "umi-request";
import '@/common/config';
import { Pagination } from 'antd';
import {Link} from 'umi'

class Content5 extends React.PureComponent {
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
    request.get("/api/fitment/fitmentCase/grid",{
      params: {
        page:1,
        size:5,
      }
    })
    .then(response=>{
      this.setState({
        list: response.data.pageData,
      });
    })
    .catch(error=>{
      console.log(error);
    });
  }

  getChildrenToRender = () =>
    this.state.list.map((item) => {
      return (
        <Col key={item.id} className='col'>
          <Link to={'/cases/detail?id='+item.id}>
          <a>
            <span>
              <img src={global.constants.imgurl+item.img_url} height="100%" alt="img" />
            </span>
            {/* <p>{item.title}</p> */}
          </a>
          </Link>
        </Col>
      );
    });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = this.getChildrenToRender(
      dataSource.block.children
    );
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div key="title" {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack
            className={`content-template ${props.className}`}
            {...dataSource.OverPack}
          >
            <TweenOneGroup
              component={Row}
              key="ul"
              enter={{
                y: '+=30',
                opacity: 0,
                type: 'from',
                ease: 'easeInOutQuad',
              }}
              leave={{ y: '+=30', opacity: 0, ease: 'easeInOutQuad' }}
              {...dataSource.block}
            >
              {childrenToRender}
            </TweenOneGroup>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content5;
