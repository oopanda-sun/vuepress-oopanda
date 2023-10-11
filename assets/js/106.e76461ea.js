(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{532:function(t,v,a){"use strict";a.r(v);var e=a(6),_=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"django简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#django简介"}},[t._v("#")]),t._v(" Django简介")]),t._v(" "),v("h3",{attrs:{id:"背景介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#背景介绍"}},[t._v("#")]),t._v(" 背景介绍")]),t._v(" "),v("div",{attrs:{align:"center"}},[v("img",{attrs:{src:"/img/logo/django.webp",alt:"Django",width:"400"}})]),t._v(" "),v("p",[v("strong",[t._v("Django是一个python Web框架,最初被设计用于具有快速开发需求的新闻类站点,目的是要实现简单快捷的网站开发,于2008年发布第一个正式版本.")]),t._v(" "),v("strong",[t._v("Django采用MVT框架")])]),t._v(" "),v("h4",{attrs:{id:"优点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),v("blockquote",[v("ul",[v("li",[v("strong",[t._v("强大的数据库功能")]),t._v(":"),v("code",[t._v("支持多种数据库,几行代码就可建表,同时支持SQL语句ORM.")])]),t._v(" "),v("li",[v("strong",[t._v("自带强大的后台功能")]),t._v(":"),v("code",[t._v("自带admin后台管理系统,减少后台管理系统开发时间.")])]),t._v(" "),v("li",[v("strong",[t._v("优雅的网址")]),t._v(":"),v("code",[t._v("在urls.py中用正则匹配网址，传递到对应的函数.")])]),t._v(" "),v("li",[v("strong",[t._v("具有模板系统")]),t._v(":"),v("code",[t._v("模板系统大大的增加了开发的规范,减少了错误出现的概率.")])]),t._v(" "),v("li",[v("strong",[t._v("缓存系统")]),t._v(":"),v("code",[t._v("Django采用memcached、redis等多种的缓存系统,提高了页面的加载速度.")])]),t._v(" "),v("li",[v("strong",[t._v("国际化")]),t._v(":"),v("code",[t._v("只在setting.py文件中的设置相应的LANGUAGES。就可以读取本地的语言文件.")])])])]),t._v(" "),v("h4",{attrs:{id:"版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#版本"}},[t._v("#")]),t._v(" 版本")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Django版本")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Python版本")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1.11")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2.7, 3.4, 3.5, 3.6, 3.7 (1.11.17 添加)")])]),t._v(" "),v("tr",[v("td",[t._v("2.0")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("3.4，3.5，3.6，3.7")])]),t._v(" "),v("tr",[v("td",[t._v("2.1")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("3.5，3.6，3.7")])]),t._v(" "),v("tr",[v("td",[t._v("2.2")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("3.5, 3.6, 3.7, 3.8 (2.2.8 添加)")])]),t._v(" "),v("tr",[v("td",[t._v("3.0")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("3.6, 3.7, 3.8")])])])]),t._v(" "),v("h2",{attrs:{id:"拓展"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#拓展"}},[t._v("#")]),t._v(" 拓展")]),t._v(" "),v("h3",{attrs:{id:"mvc与-mtv模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mvc与-mtv模型"}},[t._v("#")]),t._v(" MVC与 MTV模型")]),t._v(" "),v("h4",{attrs:{id:"mvc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mvc"}},[t._v("#")]),t._v(" MVC")]),t._v(" "),v("p",[t._v("MVC 模式（Model–view–controller）是软件工程中的一种软件架构模式，把软件系统分为三个基本部分：模型（Model）、\n视图（View）和控制器（Controller)三个部分,大部分开发语言中都有MVC框架.")]),t._v(" "),v("p",[t._v("MVC框架的核心思想是：解耦,以便降低各功能模块之间的耦合性，方便变更，更容易重构代码，最大程度上实现代码的重用.")]),t._v(" "),v("blockquote",[v("ul",[v("li",[t._v("m表示model，主要用于对数据库层的封装")]),t._v(" "),v("li",[t._v("v表示view，用于向用户展示结果")]),t._v(" "),v("li",[t._v("c表示controller，是核心，用于处理请求、获取数据、返回结果")])])]),t._v(" "),v("p",[v("img",{attrs:{src:"/img/blog/20210618170255.webp",alt:"MVC框架"}})]),t._v(" "),v("h4",{attrs:{id:"mvt"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mvt"}},[t._v("#")]),t._v(" MVT")]),t._v(" "),v("p",[t._v("Django的MTV模式本质上和MVC是一样的，也是为了各组件间保持松耦合关系，只是定义上有些许不同，Django的MTV分别是指：")]),t._v(" "),v("blockquote",[v("ul",[v("li",[t._v("m表示model,负责与数据库交互")]),t._v(" "),v("li",[t._v("v表示view,是核心内容,负责接收请求,获取数据,返回结果等")]),t._v(" "),v("li",[t._v("template,负责呈现内容到网页")])])]),t._v(" "),v("p",[t._v("除了以上三层之外，还需要一个路由Router,也就是URL分发器，它的作用是将一个个URL的页面请求分发给不同的 View处理，View 再调用相应的 Model和Template，")]),t._v(" "),v("p",[v("img",{attrs:{src:"/img/blog/20210618170156.webp",alt:"MVT框架"}})])])}),[],!1,null,null,null);v.default=_.exports}}]);