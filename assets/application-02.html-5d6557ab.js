const e=JSON.parse(`{"key":"v-77596967","path":"/blog/application/application-02.html","title":"程序终端升级管理客户端","lang":"zh-CN","frontmatter":{"title":"程序终端升级管理客户端","category":["工作总结","Android","应用升级"],"description":"系统总体可看成两部分组成，升级管理后台及车载终端系统，二者通过网络进行交互。终端部分又包括终端升级管理程序及终端运行程序，本文档主要针对终端升级管理程序的设计及实现, 终端升级管理程序主要包括，APP 升级， 协议升级，升级管理及跟踪，终端运行监控。 2.1&nbsp;&nbsp; 终端模块详细设计图 2.2&nbsp;&nbsp; 终端升级管理详细流程图","head":[["meta",{"property":"og:url","content":"https://github.com/xiangweizeng/damone-blog/blog/application/application-02.html"}],["meta",{"property":"og:site_name","content":"Damone's Blog"}],["meta",{"property":"og:title","content":"程序终端升级管理客户端"}],["meta",{"property":"og:description","content":"系统总体可看成两部分组成，升级管理后台及车载终端系统，二者通过网络进行交互。终端部分又包括终端升级管理程序及终端运行程序，本文档主要针对终端升级管理程序的设计及实现, 终端升级管理程序主要包括，APP 升级， 协议升级，升级管理及跟踪，终端运行监控。 2.1&nbsp;&nbsp; 终端模块详细设计图 2.2&nbsp;&nbsp; 终端升级管理详细流程图"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-22T15:28:22.000Z"}],["meta",{"property":"article:author","content":"damone"}],["meta",{"property":"article:modified_time","content":"2023-04-22T15:28:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"程序终端升级管理客户端\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-22T15:28:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"damone\\",\\"url\\":\\"https://github.com/xiangweizeng\\"}]}"]]},"headers":[{"level":2,"title":"2.1   终端模块详细设计图","slug":"_2-1-终端模块详细设计图","link":"#_2-1-终端模块详细设计图","children":[]},{"level":2,"title":"2.2   终端升级管理详细流程图","slug":"_2-2-终端升级管理详细流程图","link":"#_2-2-终端升级管理详细流程图","children":[]},{"level":2,"title":"2.3   升级过程活动图","slug":"_2-3-升级过程活动图","link":"#_2-3-升级过程活动图","children":[]},{"level":2,"title":"3.1   综合服务详细类图","slug":"_3-1-综合服务详细类图","link":"#_3-1-综合服务详细类图","children":[]},{"level":2,"title":"3.2   数据访问层模块设计","slug":"_3-2-数据访问层模块设计","link":"#_3-2-数据访问层模块设计","children":[{"level":3,"title":"3.2.1 数据访问操作类图","slug":"_3-2-1-数据访问操作类图","link":"#_3-2-1-数据访问操作类图","children":[]},{"level":3,"title":"3.2.2 数据实体设计类图","slug":"_3-2-2-数据实体设计类图","link":"#_3-2-2-数据实体设计类图","children":[]}]},{"level":2,"title":"3.3   日志服务设计","slug":"_3-3-日志服务设计","link":"#_3-3-日志服务设计","children":[{"level":3,"title":"3.3.1 日志服务类图详细设计","slug":"_3-3-1-日志服务类图详细设计","link":"#_3-3-1-日志服务类图详细设计","children":[]},{"level":3,"title":"3.4.1 事件服务类图","slug":"_3-4-1-事件服务类图","link":"#_3-4-1-事件服务类图","children":[]},{"level":3,"title":"3.4.2 终端事件报送流程","slug":"_3-4-2-终端事件报送流程","link":"#_3-4-2-终端事件报送流程","children":[]},{"level":3,"title":"3.4.3 终端数据发送监控流程","slug":"_3-4-3-终端数据发送监控流程","link":"#_3-4-3-终端数据发送监控流程","children":[]}]},{"level":2,"title":"3.5   版本及配置管理","slug":"_3-5-版本及配置管理","link":"#_3-5-版本及配置管理","children":[{"level":3,"title":"3.5.1 版本信及配置管理详细类图","slug":"_3-5-1-版本信及配置管理详细类图","link":"#_3-5-1-版本信及配置管理详细类图","children":[]},{"level":3,"title":"3.5.2 版本信息维护管理","slug":"_3-5-2-版本信息维护管理","link":"#_3-5-2-版本信息维护管理","children":[]},{"level":3,"title":"3.5.3 文件下载及追踪","slug":"_3-5-3-文件下载及追踪","link":"#_3-5-3-文件下载及追踪","children":[]}]},{"level":2,"title":"4.1 设计理念","slug":"_4-1-设计理念","link":"#_4-1-设计理念","children":[]},{"level":2,"title":"4.2   服务客户端模块整体类图","slug":"_4-2-服务客户端模块整体类图","link":"#_4-2-服务客户端模块整体类图","children":[]},{"level":2,"title":"4.3   异常类图关系","slug":"_4-3-异常类图关系","link":"#_4-3-异常类图关系","children":[]},{"level":2,"title":"4.4   日志提交详细类图","slug":"_4-4-日志提交详细类图","link":"#_4-4-日志提交详细类图","children":[]},{"level":2,"title":"4.5   事件提交详细类图","slug":"_4-5-事件提交详细类图","link":"#_4-5-事件提交详细类图","children":[]},{"level":2,"title":"4.6   版本信息交互详细类图","slug":"_4-6-版本信息交互详细类图","link":"#_4-6-版本信息交互详细类图","children":[]},{"level":2,"title":"4.7   工具类详细类图","slug":"_4-7-工具类详细类图","link":"#_4-7-工具类详细类图","children":[{"level":3,"title":"4.8.1 终端插件机制详细类图","slug":"_4-8-1-终端插件机制详细类图","link":"#_4-8-1-终端插件机制详细类图","children":[]},{"level":3,"title":"4.8.2 插件机制运行活动图","slug":"_4-8-2-插件机制运行活动图","link":"#_4-8-2-插件机制运行活动图","children":[]}]},{"level":2,"title":"5.1   终端和远程服务的通信接口","slug":"_5-1-终端和远程服务的通信接口","link":"#_5-1-终端和远程服务的通信接口","children":[]},{"level":2,"title":"5.2   应用程序开发接口","slug":"_5-2-应用程序开发接口","link":"#_5-2-应用程序开发接口","children":[{"level":3,"title":"5.2.1 客户端初始化及释放","slug":"_5-2-1-客户端初始化及释放","link":"#_5-2-1-客户端初始化及释放","children":[]},{"level":3,"title":"5.2.2 提交日志","slug":"_5-2-2-提交日志","link":"#_5-2-2-提交日志","children":[]},{"level":3,"title":"5.2.3 提交事件及关键业务报告","slug":"_5-2-3-提交事件及关键业务报告","link":"#_5-2-3-提交事件及关键业务报告","children":[]},{"level":3,"title":"5.2.4 版本信息管理","slug":"_5-2-4-版本信息管理","link":"#_5-2-4-版本信息管理","children":[]}]}],"git":{"createdTime":1682174604000,"updatedTime":1682177302000,"contributors":[{"name":"damone","email":"826127212@qq.com","commits":2}]},"readingTime":{"minutes":155.96,"words":46789},"filePathRelative":"blog/application/application-02.md","localizedDate":"2023年4月22日","excerpt":"<p>系统总体可看成两部分组成，升级管理后台及车载终端系统，二者通过网络进行交互。终端部分又包括终端升级管理程序及终端运行程序，本文档主要针对终端升级管理程序的设计及实现, 终端升级管理程序主要包括，APP 升级， 协议升级，升级管理及跟踪，终端运行监控。</p>\\n<figure><figcaption></figcaption></figure>\\n<h2> 2.1&nbsp;&nbsp; 终端模块详细设计图</h2>\\n<figure><figcaption></figcaption></figure>\\n<h2> 2.2&nbsp;&nbsp; 终端升级管理详细流程图</h2>\\n<figure><figcaption></figcaption></figure>","autoDesc":true}`);export{e as data};
