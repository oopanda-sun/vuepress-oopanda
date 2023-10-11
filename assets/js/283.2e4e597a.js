(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{710:function(s,a,e){"use strict";e.r(a);var r=e(6),t=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"出现情景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#出现情景"}},[s._v("#")]),s._v(" 出现情景")]),s._v(" "),a("p",[s._v("Mac升级到新版本使用"),a("code",[s._v("brew upgrade")]),s._v("出现.")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Error:\n   homebrew-core is a shallow clone.\n To "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("brew update"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(", first run:\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core fetch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--unshallow")]),s._v("\n This restriction has been made on GitHub"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s request because updating shallow \n clones is an extremely expensive operation due to the tree layout and traffic of\n Homebrew/homebrew-core and Homebrew/homebrew-cask. We don'")]),s._v("t "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" this "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" you\n automatically to avoid repeatedly performing an expensive unshallow operation "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n CI systems "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("which should instead be fixed to not use shallow clones"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(". Sorry "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v("\n the inconvenience"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),s._v(" "),a("h2",{attrs:{id:"原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[s._v("#")]),s._v(" 原因:")]),s._v(" "),a("p",[s._v("因为更新浅克隆(shallow clones)是一个相当消耗资源的操作，所以github请求被限制了")]),s._v(" "),a("h2",{attrs:{id:"解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[s._v("#")]),s._v(" 解决方法:")]),s._v(" "),a("p",[s._v("删除homebrew-core后再更新")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/Homebrew/Library/Taps/homebrew\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" homebrew-core\n\nbrew upgrade\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);