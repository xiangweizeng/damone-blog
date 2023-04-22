<template><div><h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h1>
<Mermaid id="mermaid-3" code="eJxdkD1vwyAQhvf+ihudwaraqUPVpV66tJFSdT/D2aAaDsGRr18f5MSxnY3n4X1PHM567TA8AURmqaq/TNtIKW02RQH8ZAHuoOXjiAANdZgHATHk6OYAvnHfYrzjzmpacoPx37Ge8l8vb/523BFGZebiGhtWV/PeRnj+aE+AQ8+DxTHxmZOws+dp7O/qSZXhQNclALZD7q1P86ViF9iTlzRFinS6Jm/Qq3uvyGBYuE4HO08b++FUq7LS64OMtjeylB2RXnKyQuXDV4q44AVkU2O4"></Mermaid><h2 id="_1-特性及应用场景" tabindex="-1"><a class="header-anchor" href="#_1-特性及应用场景" aria-hidden="true">#</a> 1.特性及应用场景</h2>
<ul>
<li>
<p>特性
单线程
纯内存访问
支持数据持久化
非阻塞IO(epoll)</p>
</li>
<li>
<p>应用场景
缓存
队列
网站访问统计
分布式Session
应用排行榜
社交关系图
版本新特性
2.8
主从断线重连后采取部分复制(Psync)
Redis Sentinel Stable
3.0
Redis Cluster
3.2
GEO
4.0
提供模块系统方便第三方拓展
非阻塞del和flushall/flushdb功能
RDB和AOF混合持久化模式
Redis Cluster兼容NAT和Docker
2.数据结构及内部编码
基本数据类型
字符串(String)
整型(int)
embstr编码的简单动态字符串
简单动态字符串
列表(List)
链表(Linkedlist)
快速列表(Quicklist)
哈希(Hash)
哈希表(Hashtable)
压缩表(Ziplist)
集合(Set)
整型集合(intset)
哈希表(Hashtable)
有序集合(Zset)
压缩表(Ziplist)
跳跃表(Skiplist)
其他数据类型
 Bitmap
Hyperloglog
GEO
3.持久化
RDB
内存快照
将某个时间点的数据粗放到磁盘上
恢复速度快,持久化性能高.但是存在数据丢失风险
可以将快照复制到其它服务器从而实现创建具有相同数据的服务器副本
数据量较大时恢复时间长
AOF
日志文件追加记录
&lt;div&gt;实时持久化,数据安全性更高.持久化效率低&lt;/div&gt;
配置选项
always, 每个命令都同步刷新， 效率低
everysec, 每秒刷新， 丢失少量数据
no, 操作系统决定何时同步
4.复制
原理
同步RDB文件
复制缓冲区
类型
部分复制(Psync,2.8版本之后)
全量复制(Sync)
拓扑
星型
主 - 从(单节点)
主 -  从(多节点)
树型
主 - 从(主) - 从
具体情况
使用  slaveof  host port使得一个服务器成为另一个服务器的从服务器
一个服务器只能由一个主服务器， 并且不支持主主复制
连接过程
主服务器创建快照文件， 发给从服务器， 并在发送期间使用缓冲区记录执行的写命令。快照文件发送完毕之后，开始向从服务器发送存储缓冲区中的写命令
从服务器丢掉所有旧数据， 载入主服务器发送的快照文件， 之后从服务器开始接受主服务器发来的写命令
主服务器没执行一次写命令， 就向从服务器发送相同的写指令
5.高可用
Redis Sentinel
Redis Cluster(集群自带高可用)
Keepalived
6.分布式
方案
集群
Redis Cluster&lt;br&gt;
中间件分片
TwemProxy
CodisProxy
客户端分片
业务程序
原理
客户端分片
一致性哈希算法
Codis
虚拟槽分区(1024个槽)
集群内部数据节点独立运作,无需相互通信
Redis Cluster
Gossip协议 -- 集群数据节点内部相互通信&lt;br&gt;
Raft算法 -- 集群内选主
虚拟槽分区(16384个槽)
7.阻塞
持久化阻塞
Fork子进程&lt;br&gt;
RDB持久化
AOF文件重写&lt;br&gt;
命令阻塞
keys *
smembers&lt;br&gt;
lrange&lt;br&gt;
hgetall&lt;br&gt;
8.内存
内存消耗
对象内存
存储着所有数据
缓冲内存
客户端缓冲
通过参数client-output-buffer-limit控制
复制积压缓冲区
根据repl-backlog-size参数控制
AOF缓冲区
用于在Redis重写AOF文件期间保存最近的写入命令
内存碎片
&lt;div&gt;可采用数据对齐和安全重启等方式规避内存碎片的问题&lt;/div&gt;
内存回收策略
惰性删除
定时任务删除
内存优化
缩减键值对象的长度
共享对象池
字符串优化
编码优化(使用ziplist编码能节约内存但会提高耗时-空间换时间)
控制键的数量(如使用hash结构重构字符串结构)
9.客户端
Jedis
Redis-py
Redigo
10.辅助功能
慢查询(slowquery)
管道(pipeline)
11.缓存问题隐患
缓存无底洞
增加了大量的缓存节点， 但是性能不增反而下降
原因
使用hash函数进行映射， 导致数据分散
数据分散导致网络及数据交互代价增加，整体性能降低
解决方案
优化批量数据操作
减少网络通信次数
降低成本， 使用长连接/连接池，NIO等
缓存穿透
对不存在的数据进行请求，该请求直达数据库
解决方案
对不存在的数据缓存一个空数据
对该类请求进行过滤
缓存雪崩
数据没有加载到缓存中， 导致大面积失效， 或者宕机，请求直达数据库
解决方案
启动时，可以通过行为分析进行预缓存
防止宕机， 使用分布式缓存
防止大面积过期，需分析用户行为，设置合理的缓存过期时间
热点key倾斜
热点key重建</p>
</li>
</ul>
<ol start="12">
<li>事务
一个事务包括多个命令， 执行期间，不会改去执行其它客户端的命令请求
事务中的多个命令被一次性发送给服务器， 而不是一条条发送，流水线的模式， 可以提高性能
实现事务的方式
MULTI
EXEC
13.参数优化
vm.overcommit_memory=1
vm.swapiness=1
关闭THP特性
调大ulimit
调大TCP Backlog
数据淘汰策略
volatile-lru
已经设置过期时间数据集中选最近使用最少
volatile-ttl
volatile-random
从已经设置过期时间的数据集中任意选择
allkeys-lru
allkeys-random&lt;br&gt;
noeviction
禁止数据驱逐
redis4.0
volatile-lfu
allkeys-lfu
LRU通过统计访问评论， 选择访问频率低键淘汰
实际实现采用抽样的方式进行</li>
</ol>
</div></template>


