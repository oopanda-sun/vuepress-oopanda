(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{521:function(v,_,t){"use strict";t.r(_);var a=t(6),e=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"编码解码encoding-decoding"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#编码解码encoding-decoding"}},[v._v("#")]),v._v(" 编码解码Encoding&Decoding")]),v._v(" "),_("p",[v._v("在介绍"),_("code",[v._v("编码规范")]),v._v("之前,我们先了解几个概念")]),v._v(" "),_("p",[_("RouterLink",{attrs:{to:"/pages/886118/"}},[v._v("编码解码Encoding&Decoding")])],1),v._v(" "),_("h2",{attrs:{id:"字符和字节"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字符和字节"}},[v._v("#")]),v._v(" 字符和字节")]),v._v(" "),_("h3",{attrs:{id:"字节"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字节"}},[v._v("#")]),v._v(" 字节")]),v._v(" "),_("ul",[_("li",[_("blockquote",[_("p",[_("code",[v._v("字节")]),v._v(":是计算机存储的一种计量单位.我们知道计算机只能识别0和1组成的二进制数,一个数据就是一bit(位),为了统一计算,我们规定8个bit(位)就是一个字节,也就是我们常用的byte.\n")])])])]),v._v(" "),_("h3",{attrs:{id:"字符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字符"}},[v._v("#")]),v._v(" 字符")]),v._v(" "),_("ul",[_("li",[_("blockquote",[_("p",[_("code",[v._v("字符")]),v._v(":可以理解我们现实中见到的每个单个英文,中文,数字,特殊符号,emoji表情等我们能用输入法打出的东西就是字符.")])])])]),v._v(" "),_("p",[v._v("需要注意的是英文,中文,数字,特殊符号,emoji在每种编码中占的字节数可能不一致,同一个字符在不同的编码中也不一样,\n如在GBK编码中一个汉字占2个字节,在UTF-8编码中一个汉字占3个字节.")]),v._v(" "),_("p",[v._v("随着技术的发展,我们越来越多的需要计算机现实字符,但是计算机只能识别0和1二进制数,于是就出现了"),_("code",[v._v("编码规范")])]),v._v(" "),_("h2",{attrs:{id:"编码规范"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#编码规范"}},[v._v("#")]),v._v(" 编码规范")]),v._v(" "),_("p",[v._v("为了现实字符,国际组织就制定了"),_("code",[v._v("编码规范")]),v._v(",希望使用不同的二进制数代表不同的规范,这样支持编码规范的计算机就能根据二进制数显示出字符了.\n每套编码规范都有其使用场景,比如,GBK(国标)就是为了解决早期计算机不支持中文,由中华人民共和国全国信息技术标准化技术委员会1995年12月1日制订的一套编码规范。\n为了更好的了解编码规范,下面我们介绍下"),_("code",[v._v("编码规范")]),v._v("中的2个子概念")]),v._v(" "),_("h3",{attrs:{id:"字符集"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字符集"}},[v._v("#")]),v._v(" 字符集")]),v._v(" "),_("p",[_("code",[v._v("字符集")]),v._v(":就是很多个字符集合,例如 GB2312是简体中文的字符集,它收录了六千多个常用的简体汉字及一些符号,数字,拼音等字符.")]),v._v(" "),_("h3",{attrs:{id:"字符编码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字符编码"}},[v._v("#")]),v._v(" 字符编码")]),v._v(" "),_("p",[_("code",[v._v("字符编码")]),v._v(":是字符集的一种实现方式,把"),_("code",[v._v("字符集")]),v._v("中的的字符映射为特定的字节或者字节序列.\n如Unicode是"),_("code",[v._v("字符集")]),v._v(",UTF-8,UTF-16,UTF-32是"),_("code",[v._v("字符编码")]),v._v("规则")]),v._v(" "),_("p",[v._v("常见的字符集有 ASCII,GBK,Unicode\n常见的字符编码有 UTF-8,UTF-16 EUC-CN等")]),v._v(" "),_("p",[v._v("下面简单介绍写ASCII")]),v._v(" "),_("h3",{attrs:{id:"ascii"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ascii"}},[v._v("#")]),v._v(" ASCII")]),v._v(" "),_("p",[_("code",[v._v("ASCII (American Standard Code for Information Interchange)")]),v._v(":美国信息交换标准代码是基于拉丁字母的一套电脑编码系统,主要用于显示现代英语和其他西欧语言.它是最通用的信息交换标准,并等同于国际标准\nISO/IEC 646,ASCII第一次以规范标准的类型发表是在1967年.最后一次更新则是在1986年,到目前为止共定义了128个字符.")]),v._v(" "),_("p",[v._v("标准ASCII 码也叫基础ASCII码,使用7 位二进制数"),_("code",[v._v("（剩下的1位二进制为0）")]),v._v("来表示所有的大写和小写字母,\n数字0 到9、标点符号,以及在美式英语中使用的特殊控制字符.")]),v._v(" "),_("ul",[_("li",[_("blockquote",[_("p",[v._v("0～31及127(共33个)是控制字符或通信专用字符（其余为可显示字符）.")])])]),v._v(" "),_("li",[_("blockquote",[_("p",[v._v("在英语中,用128个符号编码便可以表示所有,但是用来表示其他语言,128个符号是不够的,这样一来,这些欧洲国家使用的编码体系,可以表示最多256个符号.")])])]),v._v(" "),_("li",[_("blockquote",[_("p",[v._v("所有引申的ASCII编码方式中,0--127表示的符号是一样的,不一样的只是128--255的这一段.")])])]),v._v(" "),_("li",[_("blockquote",[_("p",[v._v("ASCII中一个字节对应一个字符]")])]),v._v(" "),_("p",[_("img",{attrs:{src:"/img/blog/ASCII.png",alt:"ASCII字符代码表"}})])])]),v._v(" "),_("h3",{attrs:{id:"unicode"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#unicode"}},[v._v("#")]),v._v(" Unicode")]),v._v(" "),_("p",[v._v("Unicode是为了解决不同国家,不同的文字系统就要使用不同的编码标准过多,处理混乱的问题,\n是现在最通用的一种编码规范,也称万国码.")]),v._v(" "),_("p",[v._v("现在大家最常用的是utf8,")]),v._v(" "),_("Badge",{attrs:{text:"注",type:"error",vertical:"middle"}}),v._v(":不同字符编码规则不一样,字节范围也不一样,如果随便指定byte数组进行编码然后解码,则最终结果不一定如预期,产生乱码.\n"),_("h3",{attrs:{id:"base64"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#base64"}},[v._v("#")]),v._v(" Base64")]),v._v(" "),_("p",[v._v("Base64就是一种基于64个可打印字符来表示二进制数据的编码方法.Base设计的初衷是为了满足某些场景(如电子邮件等)不能直接使用ASCII码字符的情况,现在主要是在http\n协议上传输较长的文本信息,他是将用户输入的二进制文件打包成一种安全的格式.")]),v._v(" "),_("p",[v._v("Base64要求把每三个8Bit的字节转换为四个6Bit的字节（3"),_("em",[v._v("8 = 4")]),v._v("6 = 24,然后把6Bit再添两位高位0,组成四个8Bit的字节,也就是说,转换后的字符串理论上将要比原来的长1/3.")]),v._v(" "),_("p",[v._v("Base64编码的规则:")]),v._v(" "),_("blockquote",[_("ul",[_("li",[v._v("把3个字节变成4个字节")]),v._v(" "),_("li",[v._v("每76个字符加一个换行符")]),v._v(" "),_("li",[v._v("最后的结束符也要处理")]),v._v(" "),_("li",[v._v('其实还有一个垫字的"=",实际上是65个字符')])])]),v._v(" "),_("p",[v._v("Base64编码的用途:")]),v._v(" "),_("blockquote",[_("ul",[_("li",[v._v("1,让二进制数据可以通过字符串表达和传输等,如图片")]),v._v(" "),_("li",[v._v("2,简单的加密")])])]),v._v(" "),_("h3",{attrs:{id:"url编码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#url编码"}},[v._v("#")]),v._v(" URL编码")]),v._v(" "),_("p",[v._v("使用URL在网络中定位资源,就需要兼容不同协议和语言,因此需要统一URL的命名规范,以避免在传输过程中发生数据丢失问题,这就出现了URL编码")]),v._v(" "),_("p",[v._v("URL编码遵循下列规则:\n每对name/value由&；符分开；每对来自表单的name/value由=符分开.如果用户没有输入值给这个name,那么这个name还是出现,只是无值.任何特殊的字符（就是那些不是简单的七位ASCII,如汉字）将以百分符%用十六进制编码,当然也包括象 =,&；,和 % 这些特殊的字符.其实url编码就是一个字符ascii码的十六进制.不过稍微有些变动,需要在前面加上“%”.比如“\\”,它的ascii码是92,92的十六进制是5c,所以“\\”的url编码就是%5c")]),v._v(" "),_("p",[v._v("URL编码作用:")]),v._v(" "),_("blockquote",[_("ul",[_("li",[v._v("1,消除歧义,避免解析错误.如:搜索的字符中包含&")]),v._v(" "),_("li",[v._v("2,兼容不同语言,对非英文的字符进行转换,防止不同地区的语言识别不了.")])])])],1)}),[],!1,null,null,null);_.default=e.exports}}]);