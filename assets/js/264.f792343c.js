(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{690:function(_,v,e){"use strict";e.r(v);var s=e(6),t=Object(s.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"添加新用户"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#添加新用户"}},[_._v("#")]),_._v(" 添加新用户")]),_._v(" "),v("p",[_._v("输入"),v("code",[_._v("sudo adduser xxx")]),_._v("命令,回车,根据提示,输入密码,验证密码输入信息.\n命令选项\n"),v("code")]),_._v(" "),v("blockquote",[v("ul",[v("li",[_._v("-b, --base-dir BASE_DIR   新账户的主目录的基目录")]),_._v(" "),v("li",[_._v("-c, --comment COMMENT         新账户的 GECOS 字段")]),_._v(" "),v("li",[_._v("-d, --home-dir HOME_DIR       新账户的主目录")]),_._v(" "),v("li",[_._v("-D, --defaults        显示或更改默认的 useradd 配置")]),_._v(" "),v("li",[_._v("-e, --expiredate EXPIRE_DATE  新账户的过期日期")]),_._v(" "),v("li",[_._v("-f, --inactive INACTIVE       新账户的密码不活动期")]),_._v(" "),v("li",[_._v("-g, --gid GROUP       新账户主组的名称或 ID")]),_._v(" "),v("li",[_._v("-G, --groups GROUPS   新账户的附加组列表")]),_._v(" "),v("li",[_._v("-h, --help                    显示此帮助信息并推出")]),_._v(" "),v("li",[_._v("-k, --skel SKEL_DIR   使用此目录作为骨架目录")]),_._v(" "),v("li",[_._v("-K, --key KEY=VALUE           不使用 /etc/login.defs 中的默认值")]),_._v(" "),v("li",[_._v("-l, --no-log-init 不要将此用户添加到最近登录和登录失败数据库")]),_._v(" "),v("li",[_._v("-m, --create-home 创建用户的主目录")]),_._v(" "),v("li",[_._v("-M, --no-create-home      不创建用户的主目录")]),_._v(" "),v("li",[_._v("-N, --no-user-group   不创建同名的组")]),_._v(" "),v("li",[_._v("-o, --non-unique      允许使用重复的 UID 创建用户")]),_._v(" "),v("li",[_._v("-p, --password PASSWORD       加密后的新账户密码")]),_._v(" "),v("li",[_._v("-r, --system                  创建一个系统账户")]),_._v(" "),v("li",[_._v("-s, --shell SHELL     新账户的登录 shell")]),_._v(" "),v("li",[_._v("-u, --uid UID         新账户的用户 ID")]),_._v(" "),v("li",[_._v("-U, --user-group      创建与用户同名的组")]),_._v(" "),v("li",[_._v("-Z, --selinux-user SEUSER     为 SELinux 用户映射使用指定 SEUSER  `")])])]),_._v(" "),v("h2",{attrs:{id:"赋予用户管理员权限"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#赋予用户管理员权限"}},[_._v("#")]),_._v(" 赋予用户管理员权限")]),_._v(" "),v("h3",{attrs:{id:"_1-命令行赋予"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令行赋予"}},[_._v("#")]),_._v(" (1)命令行赋予")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[_._v("sudo adduser xxx sudo\n")])])]),v("h3",{attrs:{id:"_2-修改配置文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改配置文件"}},[_._v("#")]),_._v(" (2)修改配置文件")]),_._v(" "),v("p",[_._v("打开"),v("code",[_._v("/etc/sudoers")]),_._v("文件\n添加：xxx ALL=(ALL:ALL) ALL")]),_._v(" "),v("h2",{attrs:{id:"切换用户"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#切换用户"}},[_._v("#")]),_._v(" 切换用户")]),_._v(" "),v("p",[v("code",[_._v("sudo su")]),_._v("根据提示输入用户名,密码,登录.\n可以看到新用户xxx所在的目录默认是/home/xxx")]),_._v(" "),v("Badge",{attrs:{text:"注",type:"error",vertical:"middle"}}),_._v(":所有用户的资料是共享的，可以通过su 用户名切换\n")],1)}),[],!1,null,null,null);v.default=t.exports}}]);