import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children:'@/static/img/logo.png',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '/',
          children: [{ children: '天森首页', name: 'text' }],
        },
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '/#/1',
          children: [{ children: '天森产品', name: 'text'},
          ],
        },
        subItem: [
          {
            name: "sub0",
            className: "item-sub",
            children: {
              className: "item-sub-item",
              children: [
                {
                  name: "title",
                  className: "item-title",
                  children: "别墅奢品",
                  href:'/#/1_1',
                },
              ]
            }
          },
        ]
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: '/#/2',
          children: [{ children: '实景案例', name: 'text' }],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '/#/3',
          children: [{ children: '设计团队', name: 'text' }],
        },
      },
      {
        name: 'item5',
        className: 'header0-item',
        children: {
          href: '/#/4',
          children: [{ children: '品质保障', name: 'text' }],
        },
      },
      {
        name: 'item6',
        className: 'header0-item',
        children: {
          href: '/#/5',
          children: [{ children: '天森品牌', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner10DataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        href:'/bighouse',
        BannerElement: { className: 'banner-user-elem knx65eki8d8-editor_css' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg0 knx5w3lr67e-editor_css' },
        title: {
          className: 'banner1-title',
          children: (
            <span>
              <span>
                {/* <p>Please enter...</p> */}
              </span>
            </span>
          ),
        },
        content: {
          className: 'banner1-content',
          // children: '一个高效的页面动画解决方案',
        },
        button: {
          className: 'banner1-button',
          // children: 'Learn More'
        },
      },
    ],
  },
};
export const Feature00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '天森装饰 高端私人定制' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        href:'/bighouse',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'text',
              className: 'content0-block-icon',
              children:
                '29年',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '全国一线品牌\n保证真实材料',
            },
            { name: 'content', children: '' },
          ],
        },
      },
      {
        name: 'block1',
        href:'/bighouse',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'icon',
              className: 'content0-block-icon',
              children:
                'icon-_fangzi',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '8大空间 216项配置',
            },
            {
              name: 'content',
              children: '豪华全包模式\n全部采用欧标德系工艺',
            },
          ],
        },
      },
      {
        name: 'block2',
        href:'/bighouse',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'icon ',
              className: 'content0-block-icon',
              children:
                'icontuandui',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '首席设计团队',
            },
            {
              name: 'content',
              children: '平均工作10年以上\n专业团队服务优势',
            },
          ],
        },
      },
      {
        name: 'block3',
        href:'/bighouse',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'icon',
              className: 'content0-block-icon',
              children:
                'icontubiaozhizuosvg-36 ',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '圆色全案设计',
            },
            { name: 'content', children: '设计+施工+主材 \n+辅材+硬装优搭+售后' },
          ],
        },
      },
      {
        name: 'block4',
        href:'/bighouse',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'icon',
              className: 'content0-block-icon',
              children:
                'icon65',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '五大承诺 三大保障',
            },
            {
              name: 'content',
              children: '承诺真材实料 \n保证施工质量',
            },
          ],
        },
      },
      {
        name: 'block5',
        href:'/bighouse',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'icon',
              className: 'content0-block-icon',
              children:
                'iconshoucang',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '无忧售后',
            },
            {
              name: 'content',
              children: '实时跟踪、及时报备 \n绝不超过24h小时服务准则 ',
            },
          ],
        },
      },
    ],
  },
};
export const Pricing00DataSource = {
  wrapper: { className: 'home-page-wrapper pricing0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page pricing0' },
  imgWrapper: { className: 'pricing0-img-wrapper', md: 12, xs: 24 },
  img: {
    className: 'pricing0-img',
    name: 'image',
    children:'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/made-bg.png'
  },
  // childWrapper: {
  //   className: 'pricing0-text-wrapper',
  //   md: 12,
  //   xs: 24,
  //   children: [
  //     {
  //       name: 'title',
  //       children: 'OceanBase 服务器',
  //       className: 'pricing0-title',
  //     },
  //     {
  //       name: 'content',
  //       children:
  //         '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。<br/>500-5Gbps，10 GB-50TB（含），1TB流量包，国内按峰值。',
  //       className: 'pricing0-content',
  //     },
  //     { name: 'pricing', children: '¥2,200', className: 'pricing0-pricing' },
  //     {
  //       name: 'button',
  //       children: {
  //         icon: 'shopping-cart',
  //         href: '#',
  //         type: 'primary',
  //         children: '立即购买',
  //       },
  //     },
  //   ],
  // },
};
export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '案例赏析 . Case Appreciation', className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: '缔造至美空间，承载温情的美好时光',
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/case1.png',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/case2.png',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/case3.png',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/case4.png',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/case5.png',
          },
          content: { children: 'Ant Design' },
        },
      },
    ],
  },
};
export const Pricing10DataSource = {
  wrapper: { className: 'home-page-wrapper pricing1-wrapper' },
  page: { className: 'home-page pricing1' },
  image1:'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/22ecdee9331bd228.png',
  image2:'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/a271eb168401aeb8.png',
  OverPack: { playScale: 0.3, className: 'pricing1-content-wrapper' },
  titleWrapper: {
    className: 'pricing1-title-wrapper',
    children: [
      { name: 'title', children: '价目表', className: 'pricing1-title-h1' },
    ],
  },
  block: {
    className: 'pricing1-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'pricing1-block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'pricing1-block-box ' },
          topWrapper: { className: 'pricing1-top-wrapper' },
          name: { className: 'pricing1-name', children: 'Free' },
          money: { className: 'pricing1-money', children: '¥0' },
          content: {
            className: 'pricing1-content',
            children: (
              <span>
                140-500Mbps<br /> 140 GB-50TB（含）<br /> 14500GB流量包<br />{' '}
                14国内按峰值宽带账单<br /> 14弹性计算<br /> 14云服务器 ECS{' '}
              </span>
            ),
          },
          line: { className: 'pricing1-line' },
          buttonWrapper: {
            className: 'pricing1-button-wrapper',
            children: {
              a: {
                className: 'pricing1-button',
                href: '#',
                children: '免费试用',
              },
            },
          },
        },
      },
      {
        name: 'block1',
        className: 'pricing1-block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'pricing1-block-box active' },
          topWrapper: { className: 'pricing1-top-wrapper' },
          name: { className: 'pricing1-name', children: 'Starter' },
          money: { className: 'pricing1-money', children: '¥199' },
          content: {
            className: 'pricing1-content',
            children: (
              <span>
                14500-5Gbps<br />1410 GB-50TB（含）<br />141TB流量包<br />14国内按峰值宽带账单<br />14弹性计算<br />云服务器
                ECS
              </span>
            ),
          },
          line: { className: 'pricing1-line' },
          buttonWrapper: {
            className: 'pricing1-button-wrapper',
            children: {
              a: {
                className: 'pricing1-button',
                href: '#',
                children: '立即购买',
              },
            },
          },
        },
      },
      {
        name: 'block2',
        className: 'pricing1-block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'pricing1-block-box ' },
          topWrapper: { className: 'pricing1-top-wrapper' },
          name: { className: 'pricing1-name', children: 'Pro' },
          money: { className: 'pricing1-money', children: '¥999' },
          content: {
            className: 'pricing1-content',
            children: (
              <span>
                14大于5Gbps<br />1450 GB-100TB（含）<br />145TB流量包<br />14国内按峰值宽带账单<br />14弹性计算<br />14云服务器
                ECS
              </span>
            ),
          },
          line: { className: 'pricing1-line' },
          buttonWrapper: {
            className: 'pricing1-button-wrapper',
            children: {
              a: {
                className: 'pricing1-button',
                href: '#',
                children: '立即购买',
              },
            },
          },
        },
      },
    ],
  },
};
export const Teams00DataSource = {
  title:'设计名师',
  content:'硬装+软装+收纳全案三设计服务，省心效果更好',
  wrapper: { className: 'home-page-wrapper teams0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page teams0' },
  BannerAnim: {
    className: 'banner-anim',
    children: [
      {
        name: 'elem0',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          userName:'程林',
          post:'大宅设计师',
          content:'人可以改变环境，环境可以影响人，而设计可以改变人和环境。现代极简，法式轻奢',
          image:'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/user1.png',
          image1:'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/useri1.png',
          image2:'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/useri2.png',
          image3:'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/useri3.png',
        },
      },
      {
        name: 'elem1',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          userName:'张三',
          post:'大宅设计师',
          content:'人可以改变环境，环境可以影响人，而设计可以改变人和环境。现代极简，法式轻奢',
          image:'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
          image1:'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
          image2:'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
          image3:'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
        },
      },
    ],
  },
};
export const Feature01DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '工艺保障' },
      { name: 'content', children: '精致的同时追求细节，对细微的环节同样执着' },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        href:'/zhucai',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'icon',
              className: 'content0-block-icon',
              children:
                'iconnoun__cc',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '圆色国际工程工艺',
            },
            { name: 'content', children: '工艺环节极尽严苛\n只为给你完美大宅' },
          ],
        },
      },
      {
        name: 'block1',
        href:'/zhucai',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'icon',
              className: 'content0-block-icon',
              children:
                'iconcailiaoziyuan',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '国色国际严选主材',
            },
            {
              name: 'content',
              children: '环保和耐用是基本\n满足空间无尽可能',
            },
          ],
        },
      },
      {
        name: 'block2',
        href:'/zhucai',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'icon',
              className: 'content0-block-icon',
              children:
                'iconfuwu',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '圆色国际品质服务',
            },
            {
              name: 'content',
              children: '强大专属的购买力\n只为全屋品质而生',
            },
          ],
        },
      },
      {
        name: 'block3',
        href:'/zhucai',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'icon',
              className: 'content0-block-icon',
              children:
                'iconweixiu',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '圆色国际在线报修',
            },
            {
              name: 'content',
              children: '全程完整服务体系\n让居家无后顾之忧',
            },
          ],
        },
      },
    ],
  },
};

export const Pricing20DataSource = {
  wrapper: { className: 'home-page-wrapper pricing2-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page pricing2' },
  imgWrapper: { className: 'pricing2-img-wrapper', md: 12, xs: 24 },
  titleWrapper: {
    title: '尊享家',
    content:'高颜值进口品质，每一寸都需要得到细心对待',
  },
  titleExtent:'',
  imgRight:'',
  img: {
    className: 'pricing0-img',
    name: 'image',
    children:'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/zunxiangjia%20.jpg'
  },
};

export const Feature50DataSource = {
  wrapper: { className: 'home-page-wrapper content7-wrapper' },
  page: { className: 'home-page content7' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '装修攻略',
        className: 'title-h1',
      },
      { name: 'content', children: '用我们的专业，实现你的理想生活' },
    ],
  },
  tabsWrapper: { className: 'content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: { children: '装修指南', className: 'content7-tag-name' },
          icon: { children: '' },
        },
        content:[
          {
            className: 'content7-content',
            date: {
              className: 'content7-date',
              children: '2020-05-10',
            },
            title: {
              className: 'content7-title',
              children: '中式硬装 · 无法拒绝的美',
            },
            img: {
              className: 'content7-img',
              children:
                'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/thumb_411.jpg',
            },
            content: {
              className: 'content7-content',
              children: '新中式风格，是传统中式风格 在现代背景下的全新演绎。 它强调将现代材质与传统元素紧密融合， 但不是盲目的照搬照抄， 也不是一味的自我扬弃， 而是对传统元素加以提炼和丰富， 以现代人的审美需求去营造传统韵味， 体现出一种',
            },
          },
          {
            className: 'content7-content',
            date: {
              className: 'content7-date',
              children: '2020-05-10',
            },
            title: {
              className: 'content7-title',
              children: '中式硬装 · 无法拒绝的美',
            },
            img: {
              className: 'content7-img',
              children:
                'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/thumb_406.jpg',
            },
            content: {
              className: 'content7-content',
              children: '新中式风格，是传统中式风格 在现代背景下的全新演绎。 它强调将现代材质与传统元素紧密融合， 但不是盲目的照搬照抄， 也不是一味的自我扬弃， 而是对传统元素加以提炼和丰富， 以现代人的审美需求去营造传统韵味， 体现出一种',
            },
          },
          {
            className: 'content7-content',
            date: {
              className: 'content7-date',
              children: '2020-05-10',
            },
            title: {
              className: 'content7-title',
              children: '中式硬装 · 无法拒绝的美',
            },
            img: {
              className: 'content7-img',
              children:
                'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/thumb_398.jpg',
            },
            content: {
              className: 'content7-content',
              children: '新中式风格，是传统中式风格 在现代背景下的全新演绎。 它强调将现代材质与传统元素紧密融合， 但不是盲目的照搬照抄， 也不是一味的自我扬弃， 而是对传统元素加以提炼和丰富， 以现代人的审美需求去营造传统韵味， 体现出一种',
            },
          },
          {
            className: 'content7-content',
            date: {
              className: 'content7-date',
              children: '2020-05-10',
            },
            title: {
              className: 'content7-title',
              children: '中式硬装 · 无法拒绝的美',
            },
            img: {
              className: 'content7-img',
              children:
                'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/thumb_389.png',
            },
            content: {
              className: 'content7-content',
              children: '新中式风格，是传统中式风格 在现代背景下的全新演绎。 它强调将现代材质与传统元素紧密融合， 但不是盲目的照搬照抄， 也不是一味的自我扬弃， 而是对传统元素加以提炼和丰富， 以现代人的审美需求去营造传统韵味， 体现出一种',
            },
          },
        ],
      },
      {
        name: 'block1',
        tag: {
          className: 'content7-tag',
          icon: { children: '' },
          text: { className: 'content7-tag-name', children: '硬装知识' },
        },
        content:[
          {
            className: 'content7-content',
            date: {
              className: 'content7-date',
              children: '2020-05-10',
            },
            title: {
              className: 'content7-title',
              children: '中式硬装 · 无法拒绝的美',
            },
            img: {
              className: 'content7-img',
              children:
                'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/thumb_408.jpg',
            },
            content: {
              className: 'content7-content',
              children: '新中式风格，是传统中式风格 在现代背景下的全新演绎。 它强调将现代材质与传统元素紧密融合， 但不是盲目的照搬照抄， 也不是一味的自我扬弃， 而是对传统元素加以提炼和丰富， 以现代人的审美需求去营造传统韵味， 体现出一种',
            },
          },
          {
            className: 'content7-content',
            date: {
              className: 'content7-date',
              children: '2020-05-10',
            },
            title: {
              className: 'content7-title',
              children: '中式硬装 · 无法拒绝的美',
            },
            img: {
              className: 'content7-img',
              children:
                'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/thumb_404.jpg',
            },
            content: {
              className: 'content7-content',
              children: '新中式风格，是传统中式风格 在现代背景下的全新演绎。 它强调将现代材质与传统元素紧密融合， 但不是盲目的照搬照抄， 也不是一味的自我扬弃， 而是对传统元素加以提炼和丰富， 以现代人的审美需求去营造传统韵味， 体现出一种',
            },
          },
          {
            className: 'content7-content',
            date: {
              className: 'content7-date',
              children: '2020-05-10',
            },
            title: {
              className: 'content7-title',
              children: '中式硬装 · 无法拒绝的美',
            },
            img: {
              className: 'content7-img',
              children:
                'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/thumb_403.jpg',
            },
            content: {
              className: 'content7-content',
              children: '新中式风格，是传统中式风格 在现代背景下的全新演绎。 它强调将现代材质与传统元素紧密融合， 但不是盲目的照搬照抄， 也不是一味的自我扬弃， 而是对传统元素加以提炼和丰富， 以现代人的审美需求去营造传统韵味， 体现出一种',
            },
          },
          {
            className: 'content7-content',
            date: {
              className: 'content7-date',
              children: '2020-05-10',
            },
            title: {
              className: 'content7-title',
              children: '中式硬装 · 无法拒绝的美',
            },
            img: {
              className: 'content7-img',
              children:
                'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/thumb_401.jpg',
            },
            content: {
              className: 'content7-content',
              children: '新中式风格，是传统中式风格 在现代背景下的全新演绎。 它强调将现代材质与传统元素紧密融合， 但不是盲目的照搬照抄， 也不是一味的自我扬弃， 而是对传统元素加以提炼和丰富， 以现代人的审美需求去营造传统韵味， 体现出一种',
            },
          },
        ],
      },
      {
        name: 'block2',
        tag: {
          className: 'content7-tag',
          text: { children: '最新活动', className: 'content7-tag-name' },
          icon: { children: '' },
        },
        content:[
          {
            className: 'content7-content',
            date: {
              className: 'content7-date',
              children: '2020-05-10',
            },
            title: {
              className: 'content7-title',
              children: '中式硬装 · 无法拒绝的美',
            },
            img: {
              className: 'content7-img',
              children:
                'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/thumb_404.jpg',
            },
            content: {
              className: 'content7-content',
              children: '新中式风格，是传统中式风格 在现代背景下的全新演绎。 它强调将现代材质与传统元素紧密融合， 但不是盲目的照搬照抄， 也不是一味的自我扬弃， 而是对传统元素加以提炼和丰富， 以现代人的审美需求去营造传统韵味， 体现出一种',
            },
          },
          {
            className: 'content7-content',
            date: {
              className: 'content7-date',
              children: '2020-05-10',
            },
            title: {
              className: 'content7-title',
              children: '中式硬装 · 无法拒绝的美',
            },
            img: {
              className: 'content7-img',
              children:
                'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/thumb_1004.jpg',
            },
            content: {
              className: 'content7-content',
              children: '新中式风格，是传统中式风格 在现代背景下的全新演绎。 它强调将现代材质与传统元素紧密融合， 但不是盲目的照搬照抄， 也不是一味的自我扬弃， 而是对传统元素加以提炼和丰富， 以现代人的审美需求去营造传统韵味， 体现出一种',
            },
          },
          // {
          //   className: 'content7-content',
          //   date: {
          //     className: 'content7-date',
          //     children: '2020-05-10',
          //   },
          //   title: {
          //     className: 'content7-title',
          //     children: '中式硬装 · 无法拒绝的美',
          //   },
          //   img: {
          //     className: 'content7-img',
          //     children:
          //       'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          //   },
          //   content: {
          //     className: 'content7-content',
          //     children: '新中式风格，是传统中式风格 在现代背景下的全新演绎。 它强调将现代材质与传统元素紧密融合， 但不是盲目的照搬照抄， 也不是一味的自我扬弃， 而是对传统元素加以提炼和丰富， 以现代人的审美需求去营造传统韵味， 体现出一种',
          //   },
          // },
          // {
          //   className: 'content7-content',
          //   date: {
          //     className: 'content7-date',
          //     children: '2020-05-10',
          //   },
          //   title: {
          //     className: 'content7-title',
          //     children: '中式硬装 · 无法拒绝的美',
          //   },
          //   img: {
          //     className: 'content7-img',
          //     children:
          //       'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          //   },
          //   content: {
          //     className: 'content7-content',
          //     children: '新中式风格，是传统中式风格 在现代背景下的全新演绎。 它强调将现代材质与传统元素紧密融合， 但不是盲目的照搬照抄， 也不是一味的自我扬弃， 而是对传统元素加以提炼和丰富， 以现代人的审美需求去营造传统韵味， 体现出一种',
          //   },
          // },
        ],
      },
      {
        name: 'block1',
        tag: {
          className: 'content7-tag',
          icon: { children: '' },
          text: { className: 'content7-tag-name', children: '公司动态' },
        },
        content:[
          {
            className: 'content7-content',
            date: {
              className: 'content7-date',
              children: '2020-05-10',
            },
            title: {
              className: 'content7-title',
              children: '中式硬装 · 无法拒绝的美',
            },
            img: {
              className: 'content7-img',
              children:
                'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/thumb_34.jpg',
            },
            content: {
              className: 'content7-content',
              children: '新中式风格，是传统中式风格 在现代背景下的全新演绎。 它强调将现代材质与传统元素紧密融合， 但不是盲目的照搬照抄， 也不是一味的自我扬弃， 而是对传统元素加以提炼和丰富， 以现代人的审美需求去营造传统韵味， 体现出一种',
            },
          },
          {
            className: 'content7-content',
            date: {
              className: 'content7-date',
              children: '2020-05-10',
            },
            title: {
              className: 'content7-title',
              children: '中式硬装 · 无法拒绝的美',
            },
            img: {
              className: 'content7-img',
              children:
                'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/thumb_33.jpg',
            },
            content: {
              className: 'content7-content',
              children: '新中式风格，是传统中式风格 在现代背景下的全新演绎。 它强调将现代材质与传统元素紧密融合， 但不是盲目的照搬照抄， 也不是一味的自我扬弃， 而是对传统元素加以提炼和丰富， 以现代人的审美需求去营造传统韵味， 体现出一种',
            },
          },
          {
            className: 'content7-content',
            date: {
              className: 'content7-date',
              children: '2020-05-10',
            },
            title: {
              className: 'content7-title',
              children: '中式硬装 · 无法拒绝的美',
            },
            img: {
              className: 'content7-img',
              children:
                'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/thumb_32.jpg',
            },
            content: {
              className: 'content7-content',
              children: '新中式风格，是传统中式风格 在现代背景下的全新演绎。 它强调将现代材质与传统元素紧密融合， 但不是盲目的照搬照抄， 也不是一味的自我扬弃， 而是对传统元素加以提炼和丰富， 以现代人的审美需求去营造传统韵味， 体现出一种',
            },
          },
          {
            className: 'content7-content',
            date: {
              className: 'content7-date',
              children: '2020-05-10',
            },
            title: {
              className: 'content7-title',
              children: '中式硬装 · 无法拒绝的美',
            },
            img: {
              className: 'content7-img',
              children:
                'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/thumb_31.jpg',
            },
            content: {
              className: 'content7-content',
              children: '新中式风格，是传统中式风格 在现代背景下的全新演绎。 它强调将现代材质与传统元素紧密融合， 但不是盲目的照搬照抄， 也不是一味的自我扬弃， 而是对传统元素加以提炼和丰富， 以现代人的审美需求去营造传统韵味， 体现出一种',
            },
          },
        ],
      },
      {
        name: 'block2',
        tag: {
          className: 'content7-tag',
          text: { children: '客户见证', className: 'content7-tag-name' },
          icon: { children: '' },
        },
        content:[
          {
            className: 'content7-content',
            date: {
              className: 'content7-date',
              children: '2020-05-10',
            },
            title: {
              className: 'content7-title',
              children: '中式硬装 · 无法拒绝的美',
            },
            img: {
              className: 'content7-img',
              children:
                'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/thumb_34.jpg',
            },
            content: {
              className: 'content7-content',
              children: '新中式风格，是传统中式风格 在现代背景下的全新演绎。 它强调将现代材质与传统元素紧密融合， 但不是盲目的照搬照抄， 也不是一味的自我扬弃， 而是对传统元素加以提炼和丰富， 以现代人的审美需求去营造传统韵味， 体现出一种',
            },
          },
          {
            className: 'content7-content',
            date: {
              className: 'content7-date',
              children: '2020-05-10',
            },
            title: {
              className: 'content7-title',
              children: '中式硬装 · 无法拒绝的美',
            },
            img: {
              className: 'content7-img',
              children:
                'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/thumb_33.jpg',
            },
            content: {
              className: 'content7-content',
              children: '新中式风格，是传统中式风格 在现代背景下的全新演绎。 它强调将现代材质与传统元素紧密融合， 但不是盲目的照搬照抄， 也不是一味的自我扬弃， 而是对传统元素加以提炼和丰富， 以现代人的审美需求去营造传统韵味， 体现出一种',
            },
          },
          {
            className: 'content7-content',
            date: {
              className: 'content7-date',
              children: '2020-05-10',
            },
            title: {
              className: 'content7-title',
              children: '中式硬装 · 无法拒绝的美',
            },
            img: {
              className: 'content7-img',
              children:
                'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/thumb_32.jpg',
            },
            content: {
              className: 'content7-content',
              children: '新中式风格，是传统中式风格 在现代背景下的全新演绎。 它强调将现代材质与传统元素紧密融合， 但不是盲目的照搬照抄， 也不是一味的自我扬弃， 而是对传统元素加以提炼和丰富， 以现代人的审美需求去营造传统韵味， 体现出一种',
            },
          },
          {
            className: 'content7-content',
            date: {
              className: 'content7-date',
              children: '2020-05-10',
            },
            title: {
              className: 'content7-title',
              children: '中式硬装 · 无法拒绝的美',
            },
            img: {
              className: 'content7-img',
              children:
                'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/thumb_31.jpg',
            },
            content: {
              className: 'content7-content',
              children: '新中式风格，是传统中式风格 在现代背景下的全新演绎。 它强调将现代材质与传统元素紧密融合， 但不是盲目的照搬照抄， 也不是一味的自我扬弃， 而是对传统元素加以提炼和丰富， 以现代人的审美需求去营造传统韵味， 体现出一种',
            },
          },
        ],
      },
    ],
  },
};
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: { className: 'content1-title', children: '企业资源管理' },
  content: {
    className: 'content1-content',
    children:
      '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
  },
};
export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/tvQTfCupGUFKSfQ.png',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: { className: 'content2-title', children: '圆色装饰集团' },
  content: {
    className: 'content2-content',
    children:
      '圆色国际硬装于2020年3月15日落地于春城昆明核心地段巫家坝，主要以圆色国际硬装、大宅设计为主，致力于打造以硬装搭配、硬装设计，大宅设计、灯光设计、风水设计、人文设计为主的家居居住环境为目标，也为昆明装饰行业注入新血液，圆色国际硬装怀着创新、创造和敢为天下先的勇气，始终坚持“服务至上，品质为王”的企业使命，相信圆色国际硬装会在昆明创造硬装行业的新标杆。 其总部位于设计之都广州，总部于2006年成立广州圆色高端设计工作室，是一家集全案设计、硬装设计、大宅设计、酒店设计、办公空间设计、为一体的高端国际设计工',
  },
};
export const Content120DataSource = {
  wrapper: { className: 'home-page-wrapper content12-wrapper' },
  page: { className: 'home-page content12' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          '',
        className: 'title-image',
      },
      { name: 'title', children: '合作伙伴', className: 'title-h1' },
    ],
  },
  block: {
    className: 'img-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/cc3ab2f30b31cff7.png',
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/9304f762d9c42391.jpg',
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/683ac37387cd9de1.jpg',
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/e310a601968e0674.jpg',
          },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/752cdc6d981c2d7d.jpg',
          },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/75a6bb19eba2732c.jpg',
          },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/76f89f06fac3ac75.jpg',
          },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/bdbea24c0d0f3be0.jpg',
          },
        },
      },
      {
        name: 'block8',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/03e8b6b0d54361a4.jpg',
          },
        },
      },
      {
        name: 'block9',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/0d07380d05040420.jpg',
          },
        },
      },
      {
        name: 'block10',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/c98895a195185190.jpg',
          },
        },
      },
      {
        name: 'block11',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/c557d744cef7eb38.jpg',
          },
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  phone:'0873—3666900',
  live_action:'16942',
  case:'1016',
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'https://qingfan1.oss-cn-hangzhou.aliyuncs.com/logo.png',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: '',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '关于我们' },
        childWrapper: {
          children: [
            { name: 'link0', href: '#/about?tab=tab1', children: '关于圆色' },
            { name: 'link1', href: '#/about?tab=tab2', children: '企业文化' },
            { name: 'link2', href: '#/about?tab=tab3', children: '企业荣誉' },
            { name: 'link3', href: '#/about?tab=tab4', children: '人才招聘' },
            { name: 'link4', href: '#/about?tab=tab5', children: '联系我们' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '装修攻略' },
        childWrapper: {
          children: [
            { href: '#/news?tabs=0', name: 'link0', children: '装修指南' },
            { href: '#/news?tabs=1', name: 'link1', children: '硬装知识' },
            { href: '#/news?tabs=2', name: 'link1', children: '最新活动' },
            { href: '#/news?tabs=3', name: 'link1', children: '公司动态' },
            { href: '#/news?tabs=4', name: 'link1', children: '客户见证' },
            { href: '#/baoJia', name: 'link1', children: '0元报价' },
            // { href: '#', name: 'link1', children: '在线预约' },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '工艺保障' },
        childWrapper: {
          children: [
            { href: '#/process', name: 'link0', children: '工程工艺' },
            { href: '#/zhucai', name: 'link1', children: '严选主材' },
            { href: '#/servant', name: 'link0', children: '品质服务' },
            // { href: '#/zhucai', name: 'link1', children: '在线报修' },
          ],
        },
      },
      {
        name: 'block4',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '设计名师' },
        childWrapper: {
          children: [
            // { href: '#/team', name: 'link0', children: '硬装设计师' },
            { href: '#/team', name: 'link1', children: '全屋设计师' },
            { href: '#/team', name: 'link1', children: '大宅设计师' },
          ],
        },
      },
      {
        name: 'block5',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '案例赏析' },
        childWrapper: {
          children: [
            // { href: '#/cases', name: 'link0', children: '全屋软包装' },
            { href: '#/cases', name: 'link1', children: '图片案例' },
            { href: '#/cases', name: 'link1', children: '全景案例' },
            // { href: '#/cases', name: 'link1', children: '硬装案例' },
            // { href: '#/cases', name: 'link1', children: '工装案例' },
            { href: '#/house', name: 'link1', children: '热装楼盘' },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        云南圆色装饰工程有限公司版权所有  ICP备案：滇ICP备20003086号-1  公司地址：蒙自市文澜镇学海路天德中兴四楼  手机版 联系我们 网站地图 网站建设：cash
        {/* <a href="https://motion.ant.design">Ant Motion</a> All Rights Reserved */}
      </span>
    ),
  },
};
