(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{704:function(a,s,t){"use strict";t.r(s);var e=t(6),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"出现情景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#出现情景"}},[a._v("#")]),a._v(" 出现情景")]),a._v(" "),s("p",[a._v("使用Android studio 真机调试flutter项目时候，发现怎么都跑不起来，报错如下:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("\nException: Gradle build failed to produce an .apk file.\nIt"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'s likely that this file was generated under XX/XX/XX/build, but the tool couldn'")]),a._v("t "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" it.\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),a._v(" "),s("h2",{attrs:{id:"原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[a._v("#")]),a._v(" 原因:")]),a._v(" "),s("p",[a._v("flavor渠道配置错误或者未配置,编译完成后，找不到相应的渠道包下面生成的apk")]),a._v(" "),s("h2",{attrs:{id:"解决方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[a._v("#")]),a._v(" 解决方法:")]),a._v(" "),s("p",[a._v("配置对应的渠道的apk")]),a._v(" "),s("p",[a._v("以下面配置的渠道为例")]),a._v(" "),s("div",{staticClass:"language-gherkin line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-gherkin"}},[s("code",[a._v("productFlavors {\n        beta {}\n        ali {}\n        huawei {}\n        xiaomi {}\n        oppo {}\n        vivo {}\n  }\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h3",{attrs:{id:"_1-执行命令加上渠道号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-执行命令加上渠道号"}},[a._v("#")]),a._v(" 1.执行命令加上渠道号")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("\nflutter run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--flavor")]),a._v(" beta "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--profile")]),a._v("\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h3",{attrs:{id:"_2-android-studio修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-android-studio修改"}},[a._v("#")]),a._v(" 2,Android Studio修改")]),a._v(" "),s("p",[s("code",[a._v("Edit Configurations --\x3e Build flavor --\x3e Edit --\x3eBuild flavor")]),a._v("中添加渠道号.")]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/blog/al9mo-7mo33.webp",alt:"BuglyFileProvider"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/blog/a8bhz-3gswg.webp",alt:"BuglyFileProvider"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);