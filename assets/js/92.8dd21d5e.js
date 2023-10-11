(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{518:function(t,e,a){"use strict";a.r(e);var s=a(6),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"什么是http"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是http"}},[t._v("#")]),t._v(" 什么是Http")]),t._v(" "),e("p",[e("code",[t._v("HTTP")]),t._v(":是英文"),e("code",[t._v("HyperText Transfer Protocol")]),t._v("的缩写，翻译过来就是"),e("code",[t._v("超文本传输协议")]),t._v(".\n"),t._v("\n但是翻译过来还是让人摸不着头脑,只能大概知道这是一种协议,因此我们进一步把"),e("code",[t._v("超文本传输协议")]),t._v("拆成"),e("code",[t._v("超文本")]),t._v(","),e("code",[t._v("传输")]),t._v(","),e("code",[t._v("协议")]),t._v("三个词来进行理解")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("超文本")]),t._v(":最早【文本】就是我们通常了解的字符文字,但是随着通讯技术的发展.图片,音频,视频甚至压缩包都纳入进来了,出现了【超文本】概念,\n它是一种将图片,音频,视频等【文本】内容混合在一起,并引入【超链接】,使不同的【文本】直接可以跳转的一种文本.HTML就是一种典型的超文本.")]),t._v(" "),e("li",[e("code",[t._v("传输")]),t._v(":传输比较容易理解，就是把东西从一端传到一端.")]),t._v(" "),e("li",[e("code",[t._v("协议")]),t._v(":这个也比较容易理解,就是咱们平常理解协议的意思,一种被双方都接受的规范.")])]),t._v(" "),e("p",[t._v("通过上面的解释,我们大概可以理解，HTTP就是一种能够传输文本,图片,音频,视频等资源一种协议规范.")]),t._v(" "),e("h2",{attrs:{id:"http的工作过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http的工作过程"}},[t._v("#")]),t._v(" Http的工作过程")]),t._v(" "),e("p",[t._v("我们程序员在平常的开发过程中,会经常接触到HTTP,下面我们简单举两个例来简单理解HTTP的工作过程")]),t._v(" "),e("ul",[e("li",[t._v("浏览器输入网址,打开网页")]),t._v(" "),e("li",[t._v("Android应用发送请求,返回对应内容")])]),t._v(" "),e("p",[t._v("以下是浏览器输入网址,打开网页的一个过程有以下步骤(只解释HTTP的流程,真实情况下还涉及到DNS的问题,暂时不讨论)")]),t._v(" "),e("blockquote",[e("ul",[e("li",[t._v("浏览器输入网址")]),t._v(" "),e("li",[t._v("浏览器发送请求到服务器")]),t._v(" "),e("li",[t._v("服务器处理浏览器请求,返回响应结果")]),t._v(" "),e("li",[t._v("浏览器接收到响应,渲染页面")])])]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/blog/http-flow.jpg",alt:"Http流程"}})]),t._v(" "),e("h2",{attrs:{id:"url和http报文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url和http报文"}},[t._v("#")]),t._v(" URL和HTTP报文")]),t._v(" "),e("h3",{attrs:{id:"url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" URL")]),t._v(" "),e("p",[t._v("根据上面的案例,我们在浏览器中输入一个短短的网址URL,怎么就获取到这么多东西呢,下面我们网址的URL进行下分析")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/blog/url-formation.jpg",alt:"URL组成"}})]),t._v(" "),e("p",[t._v("从上面我们可以看出URL由3部分组成,其实真实情况下应该有4部分组成,分别是"),e("code",[t._v("协议类型")]),t._v(","),e("code",[t._v("服务器主机")]),t._v(","),e("code",[t._v("端口")]),t._v(","),e("code",[t._v("路径path")]),t._v("\n其中http端口为80,https端口为443,在默认的情况下都是省略了，\nURL标准的请求应该为")]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("http"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("oopanda"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("auth"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("user"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("group"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"http报文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http报文"}},[t._v("#")]),t._v(" HTTP报文")]),t._v(" "),e("p",[t._v("使用网页或者使用postman调用接口的时候我们经常会看到以下这些东西,这些东西是什么呢?")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("Http/1.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" OK\nAccess-Control-Allow-Credentials:true\nAccess-Control-Allow-Origin:https://oopanda.cn\nCache-Control:no-cache, no-store, max-age"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", must-revalidate\nConnection:keep-alive\nContent-Length:967\nContent-Type:application/json"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("charset")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("UTF-8\nDate:Thu, 05 Jan "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2023")]),t._v(" 07:03:54 GMT\nExpires:0\nPragma:no-cache\nServer:nginx/1.13.3\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("p",[t._v("其实这些东西就是"),e("code",[t._v("HTTP报文")]),t._v(",就是http应用直接发送的数据块,分为"),e("code",[t._v("请求报文")]),t._v("和"),e("code",[t._v("响应报文")]),t._v(",下面是通过抓包工具wireshark抓取")]),t._v(" "),e("h4",{attrs:{id:"请求报文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求报文"}},[t._v("#")]),t._v(" 请求报文")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("GET /user?id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("group")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" HTTP/1.1\nAccept: */*\nReferer: http://oopanda.cn/auth\nAccept-Language: en-US\nUser-Agent: Mozilla/5.0 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Macintosh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Intel Mac OS X 10_15_7"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" AppleWebKit/537.36 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("KHTML, like Gecko"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Chrome/107.0.0.0 Safari/537.36\nAccept-Encoding: gzip, deflate\nHost: oopanda.cn\nConnection: Keep-Alive\nCookie: xxxxxxxxxxxxxxx\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("p",[e("img",{attrs:{src:"/img/blog/http-request-message.png",alt:"HTTP请求报文"}})]),t._v(" "),e("p",[t._v("HTTP的请求报文由四部分组成:"),e("code",[t._v("请求行")]),t._v(","),e("code",[t._v("请求头")]),t._v(","),e("code",[t._v("空格")]),t._v(","),e("code",[t._v("请求体")])]),t._v(" "),e("ul",[e("li",[e("blockquote",[e("p",[e("code",[t._v("请求行")]),t._v(":由请求方法,path,http版本组成")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("请求头")]),t._v(":由多个key-value值组成常见的有Host,Content-Type,User-Agent等,下面会具体介绍")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("空格")]),t._v(":请求报文使用空格将请求头和请求体分割开,无其他意义")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("请求体")]),t._v(":GET方法没有携带数据,POST/PUT方法会携带body数据")])])])]),t._v(" "),e("h4",{attrs:{id:"响应报文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应报文"}},[t._v("#")]),t._v(" 响应报文")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("HTTP/1.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" OK\nBdpagetype: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nBdqid: 0xacbbb9d800005133\nCache-Control: private\nConnection: Keep-Alive\nContent-Encoding: "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v("\nContent-Type: text/html\nCxy_all: baidu+f8b5e5b521b3644ef7f3455ea441c5d0\nDate: Fri, "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" Oct "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v(" 06:36:28 GMT\nExpires: Fri, "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" Oct "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v(" 06:36:26 GMT\nServer: BWS/1.1\nSet-Cookie: "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("delPer")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("path")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("domain")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(".baidu.com\nSet-Cookie: "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BDSVRTM")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("path")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/\nSet-Cookie: "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BD_HOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("path")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/\nSet-Cookie: "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("H_PS_PSSID")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1433_21112_18560_26350_27245_22158"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("path")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("domain")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(".baidu.com\nVary: Accept-Encoding\nX-Ua-Compatible: "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Edge,chrome"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nTransfer-Encoding: chunked\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("DOCTYPE html"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("--STATUS OK--"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br")])]),e("p",[e("img",{attrs:{src:"/img/blog/http-response-message.webp",alt:"HTTP请求报文"}})]),t._v(" "),e("p",[t._v("看上去"),e("code",[t._v("响应报文")]),t._v("和"),e("code",[t._v("请求报文")]),t._v("的接口差不多,其实两者的组成接口的确差不多,响应报文由四部分组成:"),e("code",[t._v("状态行")]),t._v(","),e("code",[t._v("响应头")]),t._v(","),e("code",[t._v("空格")]),t._v(","),e("code",[t._v("响应体")])]),t._v(" "),e("ul",[e("li",[e("blockquote",[e("p",[e("code",[t._v("状态行")]),t._v(":由协议版本,状态码,状态值组成")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("响应头")]),t._v(":由多个key-value值组成")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("空格")]),t._v(":用于将响应头和响应体分割开,无其他意义")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("请求体")]),t._v(":响应数据,可能是html,json,图片等")])])])]),t._v(" "),e("p",[t._v("在上面咱们已经简单了解了请求报文和响应报文的组成,下面咱们具体了解下其中的具体组成成分请求方法,头信息等")]),t._v(" "),e("h2",{attrs:{id:"http的请求方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http的请求方法"}},[t._v("#")]),t._v(" HTTP的请求方法")]),t._v(" "),e("ul",[e("li",[e("blockquote",[e("p",[e("code",[t._v("GET请求")]),t._v(":由path和params两种添加参数的方式,无body主要用于获取资源的接口,也是最常用的请求方法")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("POST请求")]),t._v(":增加或者修改资源的接口")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("PUT请求")]),t._v(":修改资源的接口,和POST的不同是PUT是幂等,也就是多次执行和一次执行是一样的效果")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("DELETE请求")]),t._v(":删除资源,没有body，是幂等")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("HEAD请求")]),t._v(":很少使用,不会返回body,主要是获取报文的头信息,可以用于下载")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("OPTIONS请求")]),t._v(":用于获取OPTIONS都支持哪些HTTP请求方法,爬虫的时候用过")])])])]),t._v(" "),e("h2",{attrs:{id:"状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),e("ul",[e("li",[e("blockquote",[e("p",[e("code",[t._v("1XX(临时响应)")]),t._v(":一种临时性的响应状态码")])])]),t._v(" "),e("li",[e("ul",[e("li",[e("blockquote",[e("p",[e("code",[t._v("100(继续)")]),t._v(":服务器收到一部分请求,告诉客户端继续请求")])])])])]),t._v(" "),e("li",[e("ul",[e("li",[e("blockquote",[e("p",[e("code",[t._v("101(切换协议)")]),t._v(":客户端要求服务器切换协议,服务端接收到，并且已经准备好了")])])])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("2XX(成功)")]),t._v(":表示成功处理了请求的状态码")])])]),t._v(" "),e("li",[e("ul",[e("li",[e("blockquote",[e("p",[e("code",[t._v("200(成功)")]),t._v(":服务器已经成功接收到请求并处理好了")])])])])]),t._v(" "),e("li",[e("ul",[e("li",[e("blockquote",[e("p",[e("code",[t._v("201(已创建)")]),t._v(":请求成功,并且创建了新数据,POST新增数据的时候会返回")])])])])]),t._v(" "),e("li",[e("ul",[e("li",[e("blockquote",[e("p",[e("code",[t._v("202(已接收)")]),t._v(":服务器已经接收了请求,但是还未处理")])])])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("3XX(重定向)")]),t._v(":重定向到新的网址")])])]),t._v(" "),e("li",[e("ul",[e("li",[e("blockquote",[e("p",[e("code",[t._v("300(多种选择)")]),t._v(":针对请求,服务器可执行多种操作,客户端可以根据UA或者其他方式告诉服务端")])])])])]),t._v(" "),e("li",[e("ul",[e("li",[e("blockquote",[e("p",[e("code",[t._v("301(永久移动)")]),t._v(":请求的网址已经被永久的移到了新网址,服务器返回此响应的时候会自动转到新网址")])])])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("4XX(请求错误)")]),t._v(":客户端出现的请求错误")])])]),t._v(" "),e("li",[e("ul",[e("li",[e("blockquote",[e("p",[e("code",[t._v("400(错误请求)")]),t._v(":客户端发送了服务器不理解的语法或者请求参数有错")])])])])]),t._v(" "),e("li",[e("ul",[e("li",[e("blockquote",[e("p",[e("code",[t._v("401(未授权)")]),t._v(":客户端没有或者发送了错误的认证信息返回的错误")])])])])]),t._v(" "),e("li",[e("ul",[e("li",[e("blockquote",[e("p",[e("code",[t._v("403(禁止)")]),t._v(":服务器接收了请求,但是它拒绝了,原因有很多种,可能是请求过于频繁")])])])])]),t._v(" "),e("li",[e("ul",[e("li",[e("blockquote",[e("p",[e("code",[t._v("404(未找到)")]),t._v(":服务器没找到资源，一半是url拼接错误")])])])])]),t._v(" "),e("li",[e("ul",[e("li",[e("blockquote",[e("p",[e("code",[t._v("405(方法禁止)")]),t._v(":请求方法错了,需要POST请求方法的,使用了GET")])])])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("5XX(服务器错误)")]),t._v(":服务器出现的错误")])])]),t._v(" "),e("li",[e("ul",[e("li",[e("blockquote",[e("p",[e("code",[t._v("500(服务器内部错误)")]),t._v(":服务器内部遇到错误")])])])])])]),t._v(" "),e("h2",{attrs:{id:"头信息-header"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#头信息-header"}},[t._v("#")]),t._v(" 头信息(Header)")]),t._v(" "),e("p",[e("code",[t._v("头信息")]),t._v("主要是用来传递http的元数据(metadata).")]),t._v(" "),e("h3",{attrs:{id:"常用头信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用头信息"}},[t._v("#")]),t._v(" 常用头信息")]),t._v(" "),e("h4",{attrs:{id:"host"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[t._v("#")]),t._v(" Host")]),t._v(" "),e("p",[e("code",[t._v("Host")]),t._v(":服务器主机地址,需要注意的是host不是用来ip寻址的,寻址是发送报文前通过DNS来完成的.\n为什么会还要这个host呢,是因为可能会存在1个ip多个虚拟服务器,如果没有host无法精确定位到具体的虚拟机服务器")]),t._v(" "),e("h4",{attrs:{id:"content-length-内容长度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#content-length-内容长度"}},[t._v("#")]),t._v(" Content-Length(内容长度)")]),t._v(" "),e("p",[e("code",[t._v("Content-Length")]),t._v(":用来标记发送内容的字节长度的,如果"),e("code",[t._v("Content-Length")]),t._v("小于实际内容的长度,则发送的内容将不完整,\n如果"),e("code",[t._v("Content-Length")]),t._v("大于实际内容的长度,服务器会响应超时报错,因为服务端/客户端读取到消息结尾后,会等待下一个字节,一直等待不到直至超时.")]),t._v(" "),e("p",[t._v("如果不确定"),e("code",[t._v("Content-Length")]),t._v("长度我们需要使用")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("Transfer-Encoding:chunked\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h4",{attrs:{id:"transfer-encoding-传输编码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transfer-encoding-传输编码"}},[t._v("#")]),t._v(" Transfer-Encoding(传输编码)")]),t._v(" "),e("p",[t._v("Http/1.0后引入了长链接的概念,通过"),e("code",[t._v("Connection: keep-alive")]),t._v(" 实现,服务端和客户端通过发送这个头部信息告诉对方不需要断开TCP连接,后面继续使用,\nHttp/1.1后改成默认规则,只要不发送"),e("code",[t._v("Connection: close")]),t._v(",默认保持长链接.")]),t._v(" "),e("p",[t._v("持续的长链接需要服务器/客户端在开始发送消息的时候就需要知道内容的长度定义好"),e("code",[t._v("Content-Length")]),t._v(",但是对于动态生成的内容来说,在内容完成之前这个"),e("code",[t._v("Content-Length")]),t._v("是不可知的,\n所以在Http/1.1就引入了"),e("code",[t._v("Transfer-Encoding:chunked(分块传输编码)")]),t._v("概念,消息内容会分成数量未定的块数,并以最后一个为0结束发送\n以下是Transfer-Encoding的几种定义方法:")]),t._v(" "),e("ul",[e("li",[e("blockquote",[e("p",[e("code",[t._v("Transfer-Encoding:chunked")]),t._v(":消息内容会分成数量未定的块数,并以最后一个为0结束发送,"),e("code",[t._v("Content-Length")]),t._v("在这种情况下不会被发送.")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("Transfer-Encoding:compress")]),t._v(":采用 Lempel-Ziv-Welch (LZW) 压缩算法,这种内容编码方式已经被大部分浏览器弃用.")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("Transfer-Encoding:deflate")]),t._v(":采用 zlib 结构 (在 RFC 1950 中规定),和 deflate 压缩算法(在 RFC 1951 中规定).")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("Transfer-Encoding:gzip")]),t._v(":采用 Lempel-Ziv coding (LZ77) 压缩算法,以及 32 位 CRC 校验的编码方式.这个编码方式最初由 UNIX 平台上的 gzip 程序采用.")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("Transfer-Encoding:identity")]),t._v(":指代未经过压缩和修改.")])])])]),t._v(" "),e("h4",{attrs:{id:"content-type-内容类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#content-type-内容类型"}},[t._v("#")]),t._v(" Content-Type(内容类型)")]),t._v(" "),e("p",[t._v("在Http中通过"),e("code",[t._v("Content-Type")]),t._v("表示消息内容的类型信息,被用来告诉服务端如何处理数据,以及告诉客户端如何解析数据,\n以下是"),e("code",[t._v("Content-Type")]),t._v("常用格式")]),t._v(" "),e("ul",[e("li",[e("blockquote",[e("p",[e("code",[t._v("Content-Type: text/html")]),t._v(":HTML格式,常用于浏览器页面响应")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("Content-Type: application/json")]),t._v(":JSON数据格式,用于web api的响应,或者post/put请求")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("Content-Type: application/x-www-form-urlencoded")]),t._v(":普通表单, encode URL格式 提交的body拼成name=q&url=2类型,只能传文本")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("Content-Type: multipart/form-data")]),t._v(":表单进行文件上传时，就需要使用该格式,将内容分多个部分传输每部分内容的形式,使用 boundary 对它们进行分隔")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("Content-Type: image/jpeg")]),t._v(":jpg图片格式")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("Content-Type: text/plain")]),t._v(":文本格式")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("Content-Type: text/XML")]),t._v(":XML格式")])])])]),t._v(" "),e("h3",{attrs:{id:"user-agent-用户代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#user-agent-用户代理"}},[t._v("#")]),t._v(" User-Agent(用户代理)")]),t._v(" "),e("p",[e("code",[t._v("User-Agent")]),t._v("(用户代理)，简称 UA,这是一个特殊字符,网站服务器通过识别UA,来确定用户使用的操作系统版本,CPU类型,浏览器版本信息等.\nH5常常通过UA判断设备是否是手机 ,爬虫也常用来修改UA绕过网站的反爬(只是爬虫和反爬的第一步).")]),t._v(" "),e("h3",{attrs:{id:"location-重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#location-重定向"}},[t._v("#")]),t._v(" Location(重定向)")]),t._v(" "),e("p",[t._v("告诉客户端加载另外一个url,通常是在301重定向的时候使用")]),t._v(" "),e("h3",{attrs:{id:"range-accept-range-content-range"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#range-accept-range-content-range"}},[t._v("#")]),t._v(" Range/Accept-Range/Content-Range")]),t._v(" "),e("ul",[e("li",[e("blockquote",[e("p",[e("code",[t._v("Range: bytes=<start>-<end>")]),t._v(":请求报文出现,表示要取哪段数据")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("Accept-Range: bytes")]),t._v(":响应报文出现,表示服务器支持按字节取范围数据")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("Content-Range:<start>-<end>/total")]),t._v(":响应报文出现,表示发送的是哪段数据")])])])]),t._v(" "),e("p",[t._v("以上头信息常用于断点上传,多线程下载等.")]),t._v(" "),e("h3",{attrs:{id:"accept"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accept"}},[t._v("#")]),t._v(" Accept")]),t._v(" "),e("p",[t._v("客户端能接受的数据类型,如 text/html")]),t._v(" "),e("h3",{attrs:{id:"accept-charset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accept-charset"}},[t._v("#")]),t._v(" Accept-Charset")]),t._v(" "),e("p",[t._v("客户端接受的字符集,如 utf-8")]),t._v(" "),e("h3",{attrs:{id:"accept-encoding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accept-encoding"}},[t._v("#")]),t._v(" Accept-Encoding")]),t._v(" "),e("p",[t._v("客户端接受的压缩编码类型,如 gzip")]),t._v(" "),e("h3",{attrs:{id:"content-encoding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#content-encoding"}},[t._v("#")]),t._v(" Content-Encoding")]),t._v(" "),e("p",[t._v("压缩类型,如 gzip")]),t._v(" "),e("h3",{attrs:{id:"cache-缓存-buffer-缓冲"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-缓存-buffer-缓冲"}},[t._v("#")]),t._v(" Cache(缓存)/Buffer(缓冲)")]),t._v(" "),e("p",[t._v("Cache用过的东西,待会可能还会用的,\nBuffer,针对工作流的,还没用过的东西,一定会用的,比如视频的缓冲")]),t._v(" "),e("ul",[e("li",[e("blockquote",[e("p",[e("code",[t._v("Cache-Control:no-cache")]),t._v(":可以缓冲")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("Cache-Control:no-store")]),t._v(":不要缓存")])])]),t._v(" "),e("li",[e("blockquote",[e("p",[e("code",[t._v("Cache-Control:max-age")]),t._v(":失效前使用缓存")])])])]),t._v(" "),e("p",[t._v("Last-Modified:最近什么时候改变的 if- Modified-Since\nCache-Control是http1.1为了弥补expires而产生的")]),t._v(" "),e("p",[e("code",[t._v("推荐阅读")])]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pages/5b9e4a/"}},[t._v("RESTful的简介")])],1)])}),[],!1,null,null,null);e.default=n.exports}}]);