(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{695:function(s,e,a){"use strict";a.r(e);var r=a(6),t=Object(r.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_1-卸载docker及其自动安装时的配置软件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-卸载docker及其自动安装时的配置软件"}},[s._v("#")]),s._v(" 1.卸载docker及其自动安装时的配置软件")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" autoremove "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" docker-ce docker-engine  docker.io  containerd runc\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),s._v(" "),e("h2",{attrs:{id:"_2-卸载docker相关软件包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-卸载docker相关软件包"}},[s._v("#")]),s._v(" 2.卸载docker相关软件包")]),s._v(" "),e("h3",{attrs:{id:"_1-查看docker相关软件包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看docker相关软件包"}},[s._v("#")]),s._v(" (1).查看docker相关软件包")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("dpkg "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_2-卸载docker相关软件包-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-卸载docker相关软件包-2"}},[s._v("#")]),s._v(" (2).卸载docker相关软件包")]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/logo/20210721174109.webp",alt:"卸载docker相关软件包"}})]),s._v(" "),e("p",[s._v("根据查询出来的docker相关软件包,进行删除")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" autoremove docker-ce-*\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_3-删除docker相关配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-删除docker相关配置"}},[s._v("#")]),s._v(" 3.删除docker相关配置")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /etc/systemd/system/docker.service.d\n "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /var/lib/docker\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"_4-确定docker卸载完毕"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-确定docker卸载完毕"}},[s._v("#")]),s._v(" 4.确定docker卸载完毕")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);