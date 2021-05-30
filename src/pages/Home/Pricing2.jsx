import React from 'react';

class Pricing2 extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    return (
      <div {...props} {...dataSource.wrapper}>
        <div class="title-wrapper">
          <h1 name="title" class="title-h1">{dataSource.titleWrapper.title}</h1>
          <div name="content">{dataSource.titleWrapper.content}</div>
        </div>
        <h6>{dataSource.titleExtent}</h6>
        <img src={dataSource.img.children} />
        <ima src={dataSource.imageRight} />
      </div>
    );
  }
}

export default Pricing2;
