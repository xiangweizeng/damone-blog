export const data = JSON.parse("{\"key\":\"v-148476c4\",\"path\":\"/collect-data/test.html\",\"title\":\"Redis\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"Redis 1.特性及应用场景 特性 单线程 纯内存访问 支持数据持久化 非阻塞IO(epoll) 应用场景 缓存 队列 网站访问统计 分布式Session 应用排行榜 社交关系图 版本新特性 2.8 主从断线重连后采取部分复制(Psync) Redis Sentinel Stable 3.0 Redis Cluster 3.2 GEO 4.0 提供模块系统方便第三方拓展 非阻塞del和flushall/flushdb功能 RDB和AOF混合持久化模式 Redis Cluster兼容NAT和Docker 2.数据结构及内部编码 基本数据类型 字符串(String) 整型(int) embstr编码的简单动态字符串 简单动态字符串 列表(List) 链表(Linkedlist) 快速列表(Quicklist) 哈希(Hash) 哈希表(Hashtable) 压缩表(Ziplist) 集合(Set) 整型集合(intset) 哈希表(Hashtable) 有序集合(Zset) 压缩表(Ziplist) 跳跃表(Skiplist) 其他数据类型 &nbsp;Bitmap Hyperloglog GEO 3.持久化 RDB 内存快照 将某个时间点的数据粗放到磁盘上 恢复速度快,持久化性能高.但是存在数据丢失风险 可以将快照复制到其它服务器从而实现创建具有相同数据的服务器副本 数据量较大时恢复时间长 AOF 日志文件追加记录 &lt;div&gt;实时持久化,数据安全性更高.持久化效率低&lt;/div&gt; 配置选项 always, 每个命令都同步刷新， 效率低 everysec, 每秒刷新， 丢失少量数据 no, 操作系统决定何时同步 4.复制 原理 同步RDB文件 复制缓冲区 类型 部分复制(Psync,2.8版本之后) 全量复制(Sync) 拓扑 星型 主 - 从(单节点) 主 - &nbsp;从(多节点) 树型 主 - 从(主) - 从 具体情况 使用&nbsp; slaveof&nbsp; host port使得一个服务器成为另一个服务器的从服务器 一个服务器只能由一个主服务器， 并且不支持主主复制 连接过程 主服务器创建快照文件， 发给从服务器， 并在发送期间使用缓冲区记录执行的写命令。快照文件发送完毕之后，开始向从服务器发送存储缓冲区中的写命令 从服务器丢掉所有旧数据， 载入主服务器发送的快照文件， 之后从服务器开始接受主服务器发来的写命令 主服务器没执行一次写命令， 就向从服务器发送相同的写指令 5.高可用 Redis Sentinel Redis Cluster(集群自带高可用) Keepalived 6.分布式 方案 集群 Redis Cluster&lt;br&gt; 中间件分片 TwemProxy CodisProxy 客户端分片 业务程序 原理 客户端分片 一致性哈希算法 Codis 虚拟槽分区(1024个槽) 集群内部数据节点独立运作,无需相互通信 Redis Cluster Gossip协议 -- 集群数据节点内部相互通信&lt;br&gt; Raft算法 -- 集群内选主 虚拟槽分区(16384个槽) 7.阻塞 持久化阻塞 Fork子进程&lt;br&gt; RDB持久化 AOF文件重写&lt;br&gt; 命令阻塞 keys * smembers&lt;br&gt; lrange&lt;br&gt; hgetall&lt;br&gt; 8.内存 内存消耗 对象内存 存储着所有数据 缓冲内存 客户端缓冲 通过参数client-output-buffer-limit控制 复制积压缓冲区 根据repl-backlog-size参数控制 AOF缓冲区 用于在Redis重写AOF文件期间保存最近的写入命令 内存碎片 &lt;div&gt;可采用数据对齐和安全重启等方式规避内存碎片的问题&lt;/div&gt; 内存回收策略 惰性删除 定时任务删除 内存优化 缩减键值对象的长度 共享对象池 字符串优化 编码优化(使用ziplist编码能节约内存但会提高耗时-空间换时间) 控制键的数量(如使用hash结构重构字符串结构) 9.客户端 Jedis Redis-py Redigo 10.辅助功能 慢查询(slowquery) 管道(pipeline) 11.缓存问题隐患 缓存无底洞 增加了大量的缓存节点， 但是性能不增反而下降 原因 使用hash函数进行映射， 导致数据分散 数据分散导致网络及数据交互代价增加，整体性能降低 解决方案 优化批量数据操作 减少网络通信次数 降低成本， 使用长连接/连接池，NIO等 缓存穿透 对不存在的数据进行请求，该请求直达数据库 解决方案 对不存在的数据缓存一个空数据 对该类请求进行过滤 缓存雪崩 数据没有加载到缓存中， 导致大面积失效， 或者宕机，请求直达数据库 解决方案 启动时，可以通过行为分析进行预缓存 防止宕机， 使用分布式缓存 防止大面积过期，需分析用户行为，设置合理的缓存过期时间 热点key倾斜 热点key重建\"},\"headers\":[{\"level\":2,\"title\":\"1.特性及应用场景\",\"slug\":\"_1-特性及应用场景\",\"link\":\"#_1-特性及应用场景\",\"children\":[]}],\"readingTime\":{\"minutes\":5,\"words\":1500},\"filePathRelative\":\"collect-data/test.md\",\"excerpt\":\"<h1> Redis</h1>\\n<h2> 1.特性及应用场景</h2>\\n<ul>\\n<li>\\n<p>特性\\n单线程\\n纯内存访问\\n支持数据持久化\\n非阻塞IO(epoll)</p>\\n</li>\\n<li>\\n<p>应用场景\\n缓存\\n队列\\n网站访问统计\\n分布式Session\\n应用排行榜\\n社交关系图\\n版本新特性\\n2.8\\n主从断线重连后采取部分复制(Psync)\\nRedis Sentinel Stable\\n3.0\\nRedis Cluster\\n3.2\\nGEO\\n4.0\\n提供模块系统方便第三方拓展\\n非阻塞del和flushall/flushdb功能\\nRDB和AOF混合持久化模式\\nRedis Cluster兼容NAT和Docker\\n2.数据结构及内部编码\\n基本数据类型\\n字符串(String)\\n整型(int)\\nembstr编码的简单动态字符串\\n简单动态字符串\\n列表(List)\\n链表(Linkedlist)\\n快速列表(Quicklist)\\n哈希(Hash)\\n哈希表(Hashtable)\\n压缩表(Ziplist)\\n集合(Set)\\n整型集合(intset)\\n哈希表(Hashtable)\\n有序集合(Zset)\\n压缩表(Ziplist)\\n跳跃表(Skiplist)\\n其他数据类型\\n&nbsp;Bitmap\\nHyperloglog\\nGEO\\n3.持久化\\nRDB\\n内存快照\\n将某个时间点的数据粗放到磁盘上\\n恢复速度快,持久化性能高.但是存在数据丢失风险\\n可以将快照复制到其它服务器从而实现创建具有相同数据的服务器副本\\n数据量较大时恢复时间长\\nAOF\\n日志文件追加记录\\n&lt;div&gt;实时持久化,数据安全性更高.持久化效率低&lt;/div&gt;\\n配置选项\\nalways, 每个命令都同步刷新， 效率低\\neverysec, 每秒刷新， 丢失少量数据\\nno, 操作系统决定何时同步\\n4.复制\\n原理\\n同步RDB文件\\n复制缓冲区\\n类型\\n部分复制(Psync,2.8版本之后)\\n全量复制(Sync)\\n拓扑\\n星型\\n主 - 从(单节点)\\n主 - &nbsp;从(多节点)\\n树型\\n主 - 从(主) - 从\\n具体情况\\n使用&nbsp; slaveof&nbsp; host port使得一个服务器成为另一个服务器的从服务器\\n一个服务器只能由一个主服务器， 并且不支持主主复制\\n连接过程\\n主服务器创建快照文件， 发给从服务器， 并在发送期间使用缓冲区记录执行的写命令。快照文件发送完毕之后，开始向从服务器发送存储缓冲区中的写命令\\n从服务器丢掉所有旧数据， 载入主服务器发送的快照文件， 之后从服务器开始接受主服务器发来的写命令\\n主服务器没执行一次写命令， 就向从服务器发送相同的写指令\\n5.高可用\\nRedis Sentinel\\nRedis Cluster(集群自带高可用)\\nKeepalived\\n6.分布式\\n方案\\n集群\\nRedis Cluster&lt;br&gt;\\n中间件分片\\nTwemProxy\\nCodisProxy\\n客户端分片\\n业务程序\\n原理\\n客户端分片\\n一致性哈希算法\\nCodis\\n虚拟槽分区(1024个槽)\\n集群内部数据节点独立运作,无需相互通信\\nRedis Cluster\\nGossip协议 -- 集群数据节点内部相互通信&lt;br&gt;\\nRaft算法 -- 集群内选主\\n虚拟槽分区(16384个槽)\\n7.阻塞\\n持久化阻塞\\nFork子进程&lt;br&gt;\\nRDB持久化\\nAOF文件重写&lt;br&gt;\\n命令阻塞\\nkeys *\\nsmembers&lt;br&gt;\\nlrange&lt;br&gt;\\nhgetall&lt;br&gt;\\n8.内存\\n内存消耗\\n对象内存\\n存储着所有数据\\n缓冲内存\\n客户端缓冲\\n通过参数client-output-buffer-limit控制\\n复制积压缓冲区\\n根据repl-backlog-size参数控制\\nAOF缓冲区\\n用于在Redis重写AOF文件期间保存最近的写入命令\\n内存碎片\\n&lt;div&gt;可采用数据对齐和安全重启等方式规避内存碎片的问题&lt;/div&gt;\\n内存回收策略\\n惰性删除\\n定时任务删除\\n内存优化\\n缩减键值对象的长度\\n共享对象池\\n字符串优化\\n编码优化(使用ziplist编码能节约内存但会提高耗时-空间换时间)\\n控制键的数量(如使用hash结构重构字符串结构)\\n9.客户端\\nJedis\\nRedis-py\\nRedigo\\n10.辅助功能\\n慢查询(slowquery)\\n管道(pipeline)\\n11.缓存问题隐患\\n缓存无底洞\\n增加了大量的缓存节点， 但是性能不增反而下降\\n原因\\n使用hash函数进行映射， 导致数据分散\\n数据分散导致网络及数据交互代价增加，整体性能降低\\n解决方案\\n优化批量数据操作\\n减少网络通信次数\\n降低成本， 使用长连接/连接池，NIO等\\n缓存穿透\\n对不存在的数据进行请求，该请求直达数据库\\n解决方案\\n对不存在的数据缓存一个空数据\\n对该类请求进行过滤\\n缓存雪崩\\n数据没有加载到缓存中， 导致大面积失效， 或者宕机，请求直达数据库\\n解决方案\\n启动时，可以通过行为分析进行预缓存\\n防止宕机， 使用分布式缓存\\n防止大面积过期，需分析用户行为，设置合理的缓存过期时间\\n热点key倾斜\\n热点key重建</p>\\n</li>\\n</ul>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}