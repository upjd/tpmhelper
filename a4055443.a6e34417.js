(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{510:function(t,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return c})),e.d(n,"metadata",(function(){return u})),e.d(n,"rightToc",(function(){return s})),e.d(n,"default",(function(){return p}));var r=e(1),i=e(9),a=(e(0),e(720)),o=e(721),c={},u={id:"version-4.0.2/\u7cfb\u7edf\u6269\u5c55\u6307\u5357/\u4e3b\u9875\u5b9a\u5236\u6269\u5c55\u4f8b\u5b50",title:"\u4e3b\u9875\u5b9a\u5236\u6269\u5c55\u4f8b\u5b50",description:"## \u67f1\u72b6\u56fe\u5c55\u793a\u6d3b\u52a8\u4e2d\u4f5c\u4e1a\u7ec4\u6570\r",source:"@site/versioned_docs\\version-4.0.2\\\u7cfb\u7edf\u6269\u5c55\u6307\u5357\\\u4e3b\u9875\u5b9a\u5236\u6269\u5c55\u4f8b\u5b50.md",permalink:"/docs/\u7cfb\u7edf\u6269\u5c55\u6307\u5357/\u4e3b\u9875\u5b9a\u5236\u6269\u5c55\u4f8b\u5b50",editUrl:"https://www.rockwellautomation.com.cn/support.html/edit/master/versioned_docs\\version-4.0.2\\\u7cfb\u7edf\u6269\u5c55\u6307\u5357\\\u4e3b\u9875\u5b9a\u5236\u6269\u5c55\u4f8b\u5b50.md",version:"4.0.2",lastUpdatedAt:1613647399},s=[{value:"\u67f1\u72b6\u56fe\u5c55\u793a\u6d3b\u52a8\u4e2d\u4f5c\u4e1a\u7ec4\u6570",id:"\u67f1\u72b6\u56fe\u5c55\u793a\u6d3b\u52a8\u4e2d\u4f5c\u4e1a\u7ec4\u6570",children:[{value:"\u9700\u8981\u63cf\u8ff0",id:"\u9700\u8981\u63cf\u8ff0",children:[]},{value:"\u81ea\u5b9a\u4e49\u5904\u7406",id:"\u81ea\u5b9a\u4e49\u5904\u7406",children:[]},{value:"\u6548\u679c\u56fe",id:"\u6548\u679c\u56fe",children:[]}]}],l={rightToc:s};function p(t){var n=t.components,e=Object(i.a)(t,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,e,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u67f1\u72b6\u56fe\u5c55\u793a\u6d3b\u52a8\u4e2d\u4f5c\u4e1a\u7ec4\u6570"},"\u67f1\u72b6\u56fe\u5c55\u793a\u6d3b\u52a8\u4e2d\u4f5c\u4e1a\u7ec4\u6570"),Object(a.b)("h3",{id:"\u9700\u8981\u63cf\u8ff0"},"\u9700\u8981\u63cf\u8ff0"),Object(a.b)("p",null,"\u4ee5\u7ec4\u7ec7\u5355\u5143\u4e3a\u7ef4\u5ea6\uff0c\u7edf\u8ba1\u6d3b\u52a8\u4e2d\u4f5c\u4e1a\u7ec4\u6570"),Object(a.b)("h3",{id:"\u81ea\u5b9a\u4e49\u5904\u7406"},"\u81ea\u5b9a\u4e49\u5904\u7406"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'// \u83b7\u53d6\u6240\u6709\u7ec4\u7ec7\u5355\u5143\nvar orgUnits = [];\n_.each(newData.rowList, function(item) {\n    var str = item.OrgUnit;\n    var arr = str.split(\';\');\n    _.each(arr, function(name) {\n        if (!~orgUnits.indexOf(name)) {\n            orgUnits.push(name);\n        }\n    })\n});\nvar data = {};\ndata.colList = [\n    {\n        "Field": "OrgUnit",\n        "Title": "\u7ec4\u7ec7\u5355\u5143",\n        "Width": 125,\n        "Type": "dimension",\n        "Visiable": true\n    }, \n    {\n        "Field": "Count",\n        "Title": "\u6570\u91cf",\n        "Width": 125,\n        "Type": "kpi",\n        "Visiable": true\n    }\n];\ndata.rowList = [];\n_.each(orgUnits,function(orgUnit){\n    var item = {\n        "OrgUnit": orgUnit,\n        "Count": 0\n    }\n    _.each(newData.rowList,function(row){\n        if(~row["OrgUnit"].indexOf(orgUnit)){\n            item.Count++;\n        }\n    });\n    // \u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32\n    item.Count += "";\n    data.rowList.push(item);\n});\ndata.selectKpi = "\u6570\u91cf";\nreturn data;\n')),Object(a.b)("h3",{id:"\u6548\u679c\u56fe"},"\u6548\u679c\u56fe"),Object(a.b)("img",{alt:" ",src:Object(o.a)("docimg/\u4e3b\u9875sample1.png")}))}p.isMDXComponent=!0},719:function(t,n,e){"use strict";var r=e(0),i=e(52);n.a=function(){return Object(r.useContext)(i.a)}},720:function(t,n,e){"use strict";e.d(n,"a",(function(){return p})),e.d(n,"b",(function(){return b}));var r=e(0),i=e.n(r);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function u(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var s=i.a.createContext({}),l=function(t){var n=i.a.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):c({},n,{},t)),e},p=function(t){var n=l(t.components);return i.a.createElement(s.Provider,{value:n},t.children)},f={inlineCode:"code",wrapper:function(t){var n=t.children;return i.a.createElement(i.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(t,n){var e=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),p=l(e),d=r,b=p["".concat(o,".").concat(d)]||p[d]||f[d]||a;return e?i.a.createElement(b,c({ref:n},s,{components:e})):i.a.createElement(b,c({ref:n},s))}));function b(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var a=e.length,o=new Array(a);o[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var s=2;s<a;s++)o[s]=e[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,e)}d.displayName="MDXCreateElement"},721:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));e(722);var r=e(719);function i(t){var n=(Object(r.a)().siteConfig||{}).baseUrl,e=void 0===n?"/":n;if(!t)return t;return/^(https?:|\/\/)/.test(t)?t:t.startsWith("/")?e+t.slice(1):e+t}},722:function(t,n,e){"use strict";var r=e(12),i=e(24),a=e(723),o="".startsWith;r(r.P+r.F*e(724)("startsWith"),"String",{startsWith:function(t){var n=a(this,t,"startsWith"),e=i(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),r=String(t);return o?o.call(n,r,e):n.slice(e,e+r.length)===r}})},723:function(t,n,e){var r=e(77),i=e(25);t.exports=function(t,n,e){if(r(n))throw TypeError("String#"+e+" doesn't accept regex!");return String(i(t))}},724:function(t,n,e){var r=e(2)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,!"/./"[t](n)}catch(i){}}return!0}}}]);