
export default {
  title:'圆色装饰集团',
  links:[{rel:'icon',href:'favicon.ico'}],
  // exportStatic: {
  //   htmlSuffix: true,
  //   dynamicRoot: true,
  // },
  publicPath:"./",
  history: {
    type: 'hash',
  },
  hash: true,
  targets: {
    ie: 11,
  },
  routes: [
    {path: '/', component: './index',title:'首页'},
    {path: '/pack', component:'./pack/index',title:'硬装优搭'},
    {path: '/oldhouse', component:'./oldHouse/index',title:'老宅改造'},
    {path: '/bighouse', component:'./bigHouse/index',title:'大宅设计'},
    {path: '/baojia', component:'./baoJia/index',title:'装修报价'},
    {path: '/cases', component:'./cases/index',title:'案例赏析'},
    {path: '/cases/detail', component:'./cases/detail',title:'案例详情'},
    {path: '/house', component:'./house/index',title:'热装楼盘'},
    {path: '/house/detail', component:'./house/detail',title:'楼盘详情'},
    {path: '/team', component:'./team',title:'设计师'},
    {path: '/team/detail', component:'./team/detail',title:'设计师详情'},
    {path: '/process', component:'./process/index',title:'工程工艺'},
    {path: '/zhucai', component:'./zhucai/index',title:'主材'},
    {path: '/servant', component:'./servant/index',title:'品质服务'},
    {path: '/news', component:'./news/index',title:'装修攻略'},
    {path: '/news/detail', component:'./news/detail',title:'装修攻略详情'},
    {path: '/about', component:'./about/index',title:'关于我们'},
    {path: '/gba', component:'./gba/index',title:'新闻'},
    {path: '/style', component:'./style/index',title:'搭配'},
    {path: '/1', component:'./tianseng/1',title:'天森产品'},
    {path: '/1_1', component:'./tianseng/1-1',title:'天森产品'},
    {path: '/2', component:'./tianseng/2',title:'案例实景'},
    {path: '/3', component:'./tianseng/3',title:'设计团队'},
    {path: '/4', component:'./tianseng/4',title:'品质保障'},
    {path: '/5', component:'./tianseng/5',title:'关于我们'},
  ],
  proxy: {
    "/api": {
      // "target": "http://api.ys.kmnzrj.com/",
      "target": "http://api.newys.kmnzrj.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
}
