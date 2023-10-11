(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{703:function(a,t,s){"use strict";s.r(t);var n=s(6),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"出现情景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#出现情景"}},[a._v("#")]),a._v(" 出现情景")]),a._v(" "),t("p",[a._v("项目本来运行好好的,周末回来再运行报了个错误.")]),a._v(" "),t("p",[t("code",[a._v('java.lang.RuntimeException: Unable to get provider : java.lang.ClassNotFoundException: Didn\'t find class "com.tencent.bugly.beta.utils.BuglyFileProvider" on path: DexPathList[[dex file')])]),a._v(" "),t("h2",{attrs:{id:"原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[a._v("#")]),a._v(" 原因:")]),a._v(" "),t("p",[a._v("使用Bugly应用升级的时候参考文档使用"),t("code",[a._v("late.release")]),a._v("没有指定版本,也没有配置BuglyFileProvider.")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("implementation 'com.tencent.bugly:crashreport_upgrade:late.release'\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"/img/blog/20210618165750.webp",alt:"BuglyFileProvider"}})]),a._v(" "),t("p",[t("strong",[a._v("而应用升级SDK在1.5.23版本之后适配Android X,之前没配置BuglyFileProvider就会产生问题")])]),a._v(" "),t("h2",{attrs:{id:"解决方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[a._v("#")]),a._v(" 解决方法:")]),a._v(" "),t("h3",{attrs:{id:"_1-指定1-3-1-1-5-23之间版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-指定1-3-1-1-5-23之间版本"}},[a._v("#")]),a._v(" 1. 指定1.3.1-1.5.23之间版本")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("implementation 'com.tencent.bugly:crashreport_upgrade:1.5.0'\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("a",{attrs:{href:"https://bugly.qq.com/docs/release-notes/release-android-beta/?v=20210608204227",target:"_blank",rel:"noopener noreferrer"}},[a._v("Bugly应用升级SDK版本"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"_2-配置buglyfileprovider"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置buglyfileprovider"}},[a._v("#")]),a._v(" 2. 配置BuglyFileProvider")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token import"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("android"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("support"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("v4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FileProvider")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n \n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BuglyFileProvider")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FileProvider")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("provider")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("android:")]),a._v("name")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v(".utils.BuglyFileProvider"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("android:")]),a._v("authorities")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("${applicationId}.fileProvider"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("android:")]),a._v("exported")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("false"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("android:")]),a._v("grantUriPermissions")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("true"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("tools:")]),a._v("replace")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("name,authorities,exported,grantUriPermissions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("meta-data")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("android:")]),a._v("name")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("android.support.FILE_PROVIDER_PATHS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("android:")]),a._v("resource")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("@xml/provider_paths"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("tools:")]),a._v("replace")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("name,resource"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("provider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token prolog"}},[a._v('<?xml version="1.0" encoding="utf-8"?>')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("paths")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("xmlns:")]),a._v("android")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://schemas.android.com/apk/res/android"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- /storage/emulated/0/Download/${applicationId}/.beta/apk--\x3e")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("external-path")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("beta_external_path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("path")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("Download/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!--/storage/emulated/0/Android/data/${applicationId}/files/apk/--\x3e")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("external-path")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("beta_external_files_path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("path")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("Android/data/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("paths")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[t("a",{attrs:{href:"https://bugly.qq.com/docs/user-guide/instruction-manual-android-upgrade/?v=20200622202242",target:"_blank",rel:"noopener noreferrer"}},[a._v("Bugly应用升级SDK使用指南"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);