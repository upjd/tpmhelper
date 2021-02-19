const versions = require('./versions.json');

module.exports = {
  title: 'rockwelltpm',
  tagline: '让每一个服务/运维商，都成为智慧的团队',
  url: 'https://upjd.github.io/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'upjd', // Usually your GitHub org/user name.
  projectName: 'upjd.github.io', // Usually your repo name.  
  scripts: [
    'https://unpkg.com/vanilla-back-to-top@7.2.1/dist/vanilla-back-to-top.min.js',
    '/js/index.js',
  ],  
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
  ],
  themeConfig: {    
    algolia: {
      apiKey: 'aff3850791f74b7f4fd85e758696b6c7',
      indexName: 'idongmobility_userguide',
      algoliaOptions: {
        facetFilters: [`version:${versions[0]}`],
      },
    },
    navbar: {
      title: 'rockwelltpm',
      logo: {
        alt: 'rockwelltpm Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/简介/概述',
          activeBasePath: 'docs',
          label: '文档',
          position: 'left',
          items: [
            {
              label: '开发中（待发布）',
              to: 'docs/next/简介/概述',
            },
            {
              label: `${versions[0]}（最新版）`,
              to: 'docs/简介/概述',
            },
            ...versions.slice(1).map((version) => ({
              label: version,
              to: `docs/${version}/简介/概述`,
            })),            
          ],
        },
        {
          to: 'blog', 
          label: '博客', 
          position: 'left'
        },
        {
          to: 'docs/发布说明/发布记录',
          label: `发布记录`,
          position: 'right',
        },
        {
          href: "https://www.rockwellautomation.com.cn/",
          label: "罗克韦尔官网",
          position: "right"
        },
        {
          href: 'https://www.rockwellautomation.com.cn/support.html',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '安装',
              to: 'docs/安装/系统要求',
            },
            {
              label: '用户使用手册',
              to: 'docs/用户使用手册/网页端/登录',
            },
            {
              label: '系统配置手册',
              to: 'docs/系统配置手册/授权管理/授权管理',
            },
            {
              label: '系统维护指南',
              to: 'docs/系统维护指南/运行监控和维护',
            },
            {
              label: '系统扩展指南',
              to: 'docs/系统扩展指南/主页定制扩展开发',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Gitter',
              href: 'https://gitter.im/',
            },
            {
              label: '微博',
              href: 'https://weibo.com/rockwellchina',
            },
            {
              label: '微信',
              href: 'https://mp.weixin.qq.com/s/GjVBpx3pfqCPD2VqzC6L5Q',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/rockwell-automation/',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '客户故事',
              href: 'https://www.rockwellautomation.com.cn/company/news/case-studies.html',
            },
            {
              label: '联系我们',
              href: 'https://www.rockwellautomation.com.cn/company/about-us/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 罗克韦尔自动化 Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://www.rockwellautomation.com.cn/support.html/edit/master/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,          
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://www.rockwellautomation.com.cn/support.html/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
