export default {
  "plugins": [
    [
      "@docusaurus/plugin-ideal-image",
      {
        "quality": 70,
        "max": 1030,
        "min": 640,
        "steps": 2
      }
    ]
  ],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "algolia": {
      "apiKey": "aff3850791f74b7f4fd85e758696b6c7",
      "indexName": "idongmobility_userguide",
      "algoliaOptions": {
        "facetFilters": [
          "version:4.0.2"
        ]
      }
    },
    "navbar": {
      "title": "rockwelltpm",
      "logo": {
        "alt": "rockwelltpm Logo",
        "src": "img/logo.png"
      },
      "links": [
        {
          "to": "docs/简介/概述",
          "activeBasePath": "docs",
          "label": "文档",
          "position": "left",
          "items": [
            {
              "label": "开发中（待发布）",
              "to": "docs/next/简介/概述"
            },
            {
              "label": "4.0.2（最新版）",
              "to": "docs/简介/概述"
            },
            {
              "label": "4.0.0",
              "to": "docs/4.0.0/简介/概述"
            },
            {
              "label": "3.8.2",
              "to": "docs/3.8.2/简介/概述"
            }
          ]
        },
        {
          "to": "blog",
          "label": "博客",
          "position": "left"
        },
        {
          "to": "docs/发布说明/发布记录",
          "label": "发布记录",
          "position": "right"
        },
        {
          "href": "https://www.rockwellautomation.com.cn/",
          "label": "罗克韦尔官网",
          "position": "right"
        },
        {
          "href": "https://www.rockwellautomation.com.cn/support.html",
          "position": "right",
          "className": "header-github-link",
          "aria-label": "GitHub repository"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "文档",
          "items": [
            {
              "label": "安装",
              "to": "docs/安装/系统要求"
            },
            {
              "label": "用户使用手册",
              "to": "docs/用户使用手册/网页端/登录"
            },
            {
              "label": "系统配置手册",
              "to": "docs/系统配置手册/授权管理/授权管理"
            },
            {
              "label": "系统维护指南",
              "to": "docs/系统维护指南/运行监控和维护"
            },
            {
              "label": "系统扩展指南",
              "to": "docs/系统扩展指南/主页定制扩展开发"
            }
          ]
        },
        {
          "title": "社区",
          "items": [
            {
              "label": "Gitter",
              "href": "https://gitter.im/"
            },
            {
              "label": "微博",
              "href": "https://weibo.com/rockwellchina"
            },
            {
              "label": "微信",
              "href": "https://mp.weixin.qq.com/s/GjVBpx3pfqCPD2VqzC6L5Q"
            },
            {
              "label": "LinkedIn",
              "href": "https://www.linkedin.com/company/rockwell-automation/"
            }
          ]
        },
        {
          "title": "更多",
          "items": [
            {
              "label": "客户故事",
              "href": "https://www.rockwellautomation.com.cn/company/news/case-studies.html"
            },
            {
              "label": "联系我们",
              "href": "https://www.rockwellautomation.com.cn/company/about-us/"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 罗克韦尔自动化 Built with Docusaurus."
    }
  },
  "title": "rockwelltpm",
  "tagline": "让每一个服务/运维商，都成为智慧的团队",
  "url": "https://upjd.github.io/",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "upjd",
  "projectName": "tpmhelper",
  "scripts": [
    "https://unpkg.com/vanilla-back-to-top@7.2.1/dist/vanilla-back-to-top.min.js",
    "/js/index.js"
  ],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "C:\\UPJD\\Developer\\tpmhelper\\sidebars.js",
          "editUrl": "https://www.rockwellautomation.com.cn/support.html/edit/master/",
          "showLastUpdateAuthor": false,
          "showLastUpdateTime": true
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://www.rockwellautomation.com.cn/support.html/edit/master/blog/"
        },
        "theme": {
          "customCss": "C:\\UPJD\\Developer\\tpmhelper\\src\\css\\custom.css"
        }
      }
    ]
  ]
};