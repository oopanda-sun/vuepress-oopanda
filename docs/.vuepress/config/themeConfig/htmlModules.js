/** 插入自定义html模块 (可用于插入广告模块等)
 * {
 *   homeSidebarB: htmlString, 首页侧边栏底部
 *
 *   sidebarT: htmlString, 全局左侧边栏顶部
 *   sidebarB: htmlString, 全局左侧边栏底部
 *
 *   pageT: htmlString, 全局页面顶部
 *   pageB: htmlString, 全局页面底部
 *   pageTshowMode: string, 页面顶部-显示方式：未配置默认全局；'article' => 仅文章页①； 'custom' => 仅自定义页①
 *   pageBshowMode: string, 页面底部-显示方式：未配置默认全局；'article' => 仅文章页①； 'custom' => 仅自定义页①
 *
 *   windowLB: htmlString, 全局窗口左下角②
 *   windowRB: htmlString, 全局窗口右下角②
 * }
 *
 * ①注：在.md文件front matter配置`article: false`的页面是自定义页，未配置的默认是文章页（首页除外）。
 * ②注：windowLB 和 windowRB：1.展示区块宽高最大是200*200px。2.请给自定义元素定一个不超过200px的固定宽高。3.在屏宽小于960px时无论如何都不会显示。
 */

module.exports = {
    homeSidebarB:
        `<!-- 右侧边栏底部 -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <ins class="adsbygoogle"
        style="display:block;padding: 0.95rem;"
        data-ad-client="ca-pub-9224233515711708"
        data-ad-slot="6808683170"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script>`,
    sidebarT:
        `<!--  左侧边栏顶部-->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
   <ins class="adsbygoogle"
     style="display:inline-block;width:200px;height:200px"
     data-ad-client="ca-pub-9224233515711708"
     data-ad-slot="1696506035"></ins>
      <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
      </script>`,
    sidebarB:
        `<!-- 左侧栏底部 -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <ins class="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-9224233515711708"
          data-ad-slot="2156984118"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
      <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
      </script>`,
    pageT:
        `<!-- 文章顶部-->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
     <ins class="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-9224233515711708"
          data-ad-slot="1387715973"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
      <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
      </script>`,
    // pageTshowMode: 'article',
    pageB:
        `<!-- 文章底部 -->
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <ins class="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-9224233515711708"
          data-ad-slot="7196244720"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
      <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
      </script>`,
    pageBshowMode: 'article',
    windowLB: // 会遮挡部分侧边栏
        `<!-- 左侧底部悬浮 -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <ins class="adsbygoogle"
          style="display:inline-block;width:200px;height:200px"
          data-ad-client="ca-pub-9224233515711708"
          data-ad-slot="7051940349"></ins>
      <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
      </script>`,
    windowRB:
        `<!-- 右侧底部悬浮 -->
     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
     <ins class="adsbygoogle"
     style="display:inline-block;width:200px;height:200px"
     data-ad-client="ca-pub-9224233515711708"
     data-ad-slot="9719779363"></ins>
      <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
      <script type="text/javascript">document.write(unescape("%3Cspan id='cnzz_stat_icon_1279350766'%3E%3C/span%3E%3Cscript src='https://s9.cnzz.com/z_stat.php%3Fid%3D1279350766%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));</script>
      `,
}


// module.exports = {
//     homeSidebarB: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试1</div>`,
//     sidebarT: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试2</div>`,
//     sidebarB: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试3</div>`,
//     pageT: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试4</div>`,
//     pageB: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试5</div>`,
//     windowLB: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试6</div>`,
//     windowRB: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试7</div>`,
// }
