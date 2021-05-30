import React from 'react';
import TweenOne from 'rc-tween-one';
import { Menu,Modal} from 'antd';
import { getChildrenToRender } from './utils';

const { Item, SubMenu } = Menu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined,
      isModalWechat:false,
      isModalMini:false,
    };
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
    });
  };

  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const { phoneOpen } = this.state;
    const navData = dataSource.Menu.children;
    const navChildren = navData.map((item) => {
      const { children: a, subItem, ...itemProps } = item;
      if (subItem) {
        return (
          <SubMenu
            key={item.name}
            {...itemProps}
            title={
              <a
                {...a}
                className={`header0-item-block ${a.className}`.trim(),"menuText"}
              >
                {a.children.map(getChildrenToRender)}
              </a>
            }
            popupClassName="header0-item-child"
          >
            {subItem.map(($item, ii) => {
              const { children: childItem } = $item;
              const child = childItem.href ? (
                <a {...childItem}>
                  {childItem.children.map(getChildrenToRender)}
                </a>
              ) : (
                <div {...childItem}>
                  {childItem.children.map(getChildrenToRender)}
                </div>
              );
              return (
                <Item key={$item.name || ii.toString()} {...$item}>
                  {child}
                </Item>
              );
            })}
          </SubMenu>
        );
      }
      return (
        <Item key={item.name} {...itemProps}>
          <a {...a} className={`header0-item-block ${a.className}`.trim()}>
            {a.children.map(getChildrenToRender)}
          </a>
        </Item>
      );
    });
    const moment = phoneOpen === undefined ? 300 : null;
    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        {...dataSource.wrapper}
        {...props}
      >
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
        >
          <TweenOne
            animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
            {...dataSource.logo}
          >
            <img width="100%" src={require('@/static/img/logo.png')} alt="img" />
          </TweenOne>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
              onClick={() => {
                this.phoneClick();
              }}
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            {...dataSource.Menu}
            animation={
              isMobile
                ? {
                    height: 0,
                    duration: 300,
                    onComplete: (e) => {
                      if (this.state.phoneOpen) {
                        e.target.style.height = 'auto';
                      }
                    },
                    ease: 'easeInOutQuad',
                  }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
          >
            <Menu
              mode={isMobile ? 'inline' : 'horizontal'}
              defaultSelectedKeys={['sub']}
              theme="dark"
            >
              {navChildren}
            </Menu>
          </TweenOne>
          <TweenOne className='phone'>
            <span>0871-67367365</span>
          </TweenOne>
        </div>
        <Modal footer={[]} title="微信扫码关注" visible={this.state.isModalWechat} onCancel={()=>{this.setState({isModalWechat:false})}} className='modal'>
          <div class="imga">
            <img src={require('@/static/picture/ec7004f55af79d09.jpg')} alt="微信扫码关注"></img>
          </div>
        </Modal>
        <Modal footer={[]}  title="微信扫码关注" visible={this.state.isModalMini} onCancel={()=>{this.setState({isModalMini:false})}} className='modal'>
          <div class="imga">
            <img src={require('@/static/picture/6177680bb3092174.jpg')} alt="微信扫码关注"></img>
          </div>
        </Modal>
      </TweenOne>
    );
  }
}

export default Header;
