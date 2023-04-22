const l=JSON.parse(`{"key":"v-0b4d529c","path":"/computer-science/data-structure/summary/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E6%A0%B8%E5%BF%83%E8%80%83%E7%82%B9.html","title":"数据结构核心考点","lang":"zh-CN","frontmatter":{"title":"数据结构核心考点","category":["计算机科学","数据结构"],"description":"1. 常见的逻辑结构 线性结构：一般线性表、受限线性表（栈和队列）、线性表推广（数组） 非线性结构：集合结构、树结构、图结构 2.常见的存储结构 存储结构 定义 优点 缺点 顺序存储 把逻辑上相邻的元素存储在物理位置上也相邻的存储单元中，元素之间的关系由存储单元的邻接关系来体现 随机存取，占用空间少 使用一整块相邻的存储单元，产生较多碎片 链式存储 不要求逻辑上相邻的元素在物理位置上也相邻，借助指示元素存储地址的指针来表示元素之间的逻辑关系 不会出现碎片，充分利用所有存储单元 需要额外空间，只能顺序存取 索引存储 在存储元素信息的同时，还建立附加的索引表。 检索速度快 附加的索引表需要额外空间。增删数据修改索引表时花费时间 散列存储 根据元素的关键字直接计算出该元素的存储地址，又称哈希(Hash)存储。 检索、增加和删除结点的操作很快 可能出现元素存储单元的冲突，解决冲突会增加时间和空间开销","head":[["meta",{"property":"og:url","content":"https://github.com/xiangweizeng/computer-science/data-structure/summary/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E6%A0%B8%E5%BF%83%E8%80%83%E7%82%B9.html"}],["meta",{"property":"og:site_name","content":"Damone's Blog"}],["meta",{"property":"og:title","content":"数据结构核心考点"}],["meta",{"property":"og:description","content":"1. 常见的逻辑结构 线性结构：一般线性表、受限线性表（栈和队列）、线性表推广（数组） 非线性结构：集合结构、树结构、图结构 2.常见的存储结构 存储结构 定义 优点 缺点 顺序存储 把逻辑上相邻的元素存储在物理位置上也相邻的存储单元中，元素之间的关系由存储单元的邻接关系来体现 随机存取，占用空间少 使用一整块相邻的存储单元，产生较多碎片 链式存储 不要求逻辑上相邻的元素在物理位置上也相邻，借助指示元素存储地址的指针来表示元素之间的逻辑关系 不会出现碎片，充分利用所有存储单元 需要额外空间，只能顺序存取 索引存储 在存储元素信息的同时，还建立附加的索引表。 检索速度快 附加的索引表需要额外空间。增删数据修改索引表时花费时间 散列存储 根据元素的关键字直接计算出该元素的存储地址，又称哈希(Hash)存储。 检索、增加和删除结点的操作很快 可能出现元素存储单元的冲突，解决冲突会增加时间和空间开销"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"damone"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据结构核心考点\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"damone\\",\\"url\\":\\"https://github.com/xiangweizeng\\"}]}"]]},"headers":[{"level":2,"title":"1. 常见的逻辑结构","slug":"_1-常见的逻辑结构","link":"#_1-常见的逻辑结构","children":[]},{"level":2,"title":"2.常见的存储结构","slug":"_2-常见的存储结构","link":"#_2-常见的存储结构","children":[]},{"level":2,"title":"3. 算法复杂度分析步","slug":"_3-算法复杂度分析步","link":"#_3-算法复杂度分析步","children":[]},{"level":2,"title":"4. 线性表的顺序实现要点","slug":"_4-线性表的顺序实现要点","link":"#_4-线性表的顺序实现要点","children":[]},{"level":2,"title":"5. 线性表的单链表形式","slug":"_5-线性表的单链表形式","link":"#_5-线性表的单链表形式","children":[{"level":3,"title":"单链表的头插法及尾插法","slug":"单链表的头插法及尾插法","link":"#单链表的头插法及尾插法","children":[]},{"level":3,"title":"按位序删除","slug":"按位序删除","link":"#按位序删除","children":[]},{"level":3,"title":"指定结点的删除","slug":"指定结点的删除","link":"#指定结点的删除","children":[]}]},{"level":2,"title":"6. 双链表的结构，其操作类似单链表，注意别漏掉相关的指针设置","slug":"_6-双链表的结构-其操作类似单链表-注意别漏掉相关的指针设置","link":"#_6-双链表的结构-其操作类似单链表-注意别漏掉相关的指针设置","children":[]},{"level":2,"title":"7. 循环链表初始条件及判空条件的变化","slug":"_7-循环链表初始条件及判空条件的变化","link":"#_7-循环链表初始条件及判空条件的变化","children":[]},{"level":2,"title":"8. 静态链表","slug":"_8-静态链表","link":"#_8-静态链表","children":[]},{"level":2,"title":"9. N个不同元素进栈出栈，出栈的序列个数为：","slug":"_9-n个不同元素进栈出栈-出栈的序列个数为","link":"#_9-n个不同元素进栈出栈-出栈的序列个数为","children":[]},{"level":2,"title":"10 顺序栈的实现，关键标识的设置","slug":"_10-顺序栈的实现-关键标识的设置","link":"#_10-顺序栈的实现-关键标识的设置","children":[]},{"level":2,"title":"11. 共享栈的改进","slug":"_11-共享栈的改进","link":"#_11-共享栈的改进","children":[]},{"level":2,"title":"12. 栈的链式存储结构， 一般为了方便，没有头节点","slug":"_12-栈的链式存储结构-一般为了方便-没有头节点","link":"#_12-栈的链式存储结构-一般为了方便-没有头节点","children":[]},{"level":2,"title":"13. 队列的顺序存储及问题","slug":"_13-队列的顺序存储及问题","link":"#_13-队列的顺序存储及问题","children":[]},{"level":2,"title":"14. 队列的顺序存储的改进，循环队列的相关操作步骤及指针的设置","slug":"_14-队列的顺序存储的改进-循环队列的相关操作步骤及指针的设置","link":"#_14-队列的顺序存储的改进-循环队列的相关操作步骤及指针的设置","children":[]},{"level":2,"title":"15. 队列的链式存储结构，通常带有头结点","slug":"_15-队列的链式存储结构-通常带有头结点","link":"#_15-队列的链式存储结构-通常带有头结点","children":[]},{"level":2,"title":"16. 双端队列","slug":"_16-双端队列","link":"#_16-双端队列","children":[]},{"level":2,"title":"17. 栈在括号匹配中的应用","slug":"_17-栈在括号匹配中的应用","link":"#_17-栈在括号匹配中的应用","children":[]},{"level":2,"title":"18. 后续表达式计算方式","slug":"_18-后续表达式计算方式","link":"#_18-后续表达式计算方式","children":[]},{"level":2,"title":"19. 中缀表达式转换为后缀表达式","slug":"_19-中缀表达式转换为后缀表达式","link":"#_19-中缀表达式转换为后缀表达式","children":[{"level":3,"title":"手工做法","slug":"手工做法","link":"#手工做法","children":[]},{"level":3,"title":"算法思路","slug":"算法思路","link":"#算法思路","children":[]}]},{"level":2,"title":"20. 队列在层次遍历中的应用","slug":"_20-队列在层次遍历中的应用","link":"#_20-队列在层次遍历中的应用","children":[]},{"level":2,"title":"21. 广义的存储结构及获取表头表尾操作的组合","slug":"_21-广义的存储结构及获取表头表尾操作的组合","link":"#_21-广义的存储结构及获取表头表尾操作的组合","children":[]},{"level":2,"title":"22. KMP 模式匹配","slug":"_22-kmp-模式匹配","link":"#_22-kmp-模式匹配","children":[{"level":3,"title":"基础概念","slug":"基础概念","link":"#基础概念","children":[]},{"level":3,"title":"算法原理","slug":"算法原理","link":"#算法原理","children":[]},{"level":3,"title":"KMP 算法的进一步优化","slug":"kmp-算法的进一步优化","link":"#kmp-算法的进一步优化","children":[]}]},{"level":2,"title":"23. 树的常用性质","slug":"_23-树的常用性质","link":"#_23-树的常用性质","children":[]},{"level":2,"title":"24. 二叉树的主要特性","slug":"_24-二叉树的主要特性","link":"#_24-二叉树的主要特性","children":[]},{"level":2,"title":"25. 二叉树的遍历","slug":"_25-二叉树的遍历","link":"#_25-二叉树的遍历","children":[{"level":3,"title":"递归遍历算法","slug":"递归遍历算法","link":"#递归遍历算法","children":[]},{"level":3,"title":"非递归遍历算法","slug":"非递归遍历算法","link":"#非递归遍历算法","children":[]}]},{"level":2,"title":"26. 由遍历序列构造二叉树","slug":"_26-由遍历序列构造二叉树","link":"#_26-由遍历序列构造二叉树","children":[]},{"level":2,"title":"27. 线索二叉树的基本结构及线索化","slug":"_27-线索二叉树的基本结构及线索化","link":"#_27-线索二叉树的基本结构及线索化","children":[{"level":3,"title":"中序线索二叉树的构造","slug":"中序线索二叉树的构造","link":"#中序线索二叉树的构造","children":[]},{"level":3,"title":"中序线索二叉树的遍历","slug":"中序线索二叉树的遍历","link":"#中序线索二叉树的遍历","children":[]},{"level":3,"title":"先序线索二叉树和后序线索二叉树","slug":"先序线索二叉树和后序线索二叉树","link":"#先序线索二叉树和后序线索二叉树","children":[]}]},{"level":2,"title":"28 树的存储结构","slug":"_28-树的存储结构","link":"#_28-树的存储结构","children":[{"level":3,"title":"双亲表示法（顺序存储）","slug":"双亲表示法-顺序存储","link":"#双亲表示法-顺序存储","children":[]},{"level":3,"title":"孩子表示法（顺序+链式存储）","slug":"孩子表示法-顺序-链式存储","link":"#孩子表示法-顺序-链式存储","children":[]},{"level":3,"title":"孩子兄弟表示法（顺序+链式存储）","slug":"孩子兄弟表示法-顺序-链式存储","link":"#孩子兄弟表示法-顺序-链式存储","children":[]}]},{"level":2,"title":"29. 树转换为二叉树","slug":"_29-树转换为二叉树","link":"#_29-树转换为二叉树","children":[]},{"level":2,"title":"28. 森林转换二叉树","slug":"_28-森林转换二叉树","link":"#_28-森林转换二叉树","children":[]},{"level":2,"title":"29. 二叉树转换为森林","slug":"_29-二叉树转换为森林","link":"#_29-二叉树转换为森林","children":[]},{"level":2,"title":"30. 树和森林的遍历","slug":"_30-树和森林的遍历","link":"#_30-树和森林的遍历","children":[]},{"level":2,"title":"31. 二叉排序树的查找、插入、构造及删除","slug":"_31-二叉排序树的查找、插入、构造及删除","link":"#_31-二叉排序树的查找、插入、构造及删除","children":[{"level":3,"title":"二叉排序树的剔除","slug":"二叉排序树的剔除","link":"#二叉排序树的剔除","children":[]},{"level":3,"title":"二叉排序树的查找效率分析","slug":"二叉排序树的查找效率分析","link":"#二叉排序树的查找效率分析","children":[]}]},{"level":2,"title":"32. 平衡二叉树的插入、构建及查找","slug":"_32-平衡二叉树的插入、构建及查找","link":"#_32-平衡二叉树的插入、构建及查找","children":[{"level":3,"title":"平衡二叉树的插入","slug":"平衡二叉树的插入","link":"#平衡二叉树的插入","children":[]},{"level":3,"title":"平衡二叉树的查找","slug":"平衡二叉树的查找","link":"#平衡二叉树的查找","children":[]}]},{"level":2,"title":"33. 哈夫曼树和哈夫曼编码","slug":"_33-哈夫曼树和哈夫曼编码","link":"#_33-哈夫曼树和哈夫曼编码","children":[{"level":3,"title":"哈夫曼树的构造","slug":"哈夫曼树的构造","link":"#哈夫曼树的构造","children":[]},{"level":3,"title":"特点","slug":"特点","link":"#特点","children":[]},{"level":3,"title":"哈夫曼编码","slug":"哈夫曼编码","link":"#哈夫曼编码","children":[]}]},{"level":2,"title":"34. 图的存储及存储方式间的相互转换","slug":"_34-图的存储及存储方式间的相互转换","link":"#_34-图的存储及存储方式间的相互转换","children":[{"level":3,"title":"邻接矩阵法","slug":"邻接矩阵法","link":"#邻接矩阵法","children":[]},{"level":3,"title":"邻接表法","slug":"邻接表法","link":"#邻接表法","children":[]},{"level":3,"title":"十字链表","slug":"十字链表","link":"#十字链表","children":[]},{"level":3,"title":"邻接多重表","slug":"邻接多重表","link":"#邻接多重表","children":[]}]},{"level":2,"title":"35. 图的广度优先算法及深度优先搜索","slug":"_35-图的广度优先算法及深度优先搜索","link":"#_35-图的广度优先算法及深度优先搜索","children":[{"level":3,"title":"广度优先搜索","slug":"广度优先搜索","link":"#广度优先搜索","children":[]},{"level":3,"title":"深度优先搜索","slug":"深度优先搜索","link":"#深度优先搜索","children":[{"level":4,"title":"性能","slug":"性能","link":"#性能","children":[]}]}]},{"level":2,"title":"36. 最小生成树","slug":"_36-最小生成树","link":"#_36-最小生成树","children":[{"level":3,"title":"Prim 算法","slug":"prim-算法","link":"#prim-算法","children":[]},{"level":3,"title":"Kruskal 算法","slug":"kruskal-算法","link":"#kruskal-算法","children":[]}]},{"level":2,"title":"37. 最短路径","slug":"_37-最短路径","link":"#_37-最短路径","children":[{"level":3,"title":"Dijkstra 算法求单源最短路径","slug":"dijkstra-算法求单源最短路径","link":"#dijkstra-算法求单源最短路径","children":[{"level":4,"title":"辅助数组","slug":"辅助数组","link":"#辅助数组","children":[]},{"level":4,"title":"算法步骤","slug":"算法步骤","link":"#算法步骤","children":[]},{"level":4,"title":"案例：","slug":"案例","link":"#案例","children":[]}]},{"level":3,"title":"Floyd 算法求个定点之间最短路径","slug":"floyd-算法求个定点之间最短路径","link":"#floyd-算法求个定点之间最短路径","children":[]}]},{"level":2,"title":"38. 拓扑排序","slug":"_38-拓扑排序","link":"#_38-拓扑排序","children":[]},{"level":2,"title":"39. 关键路径","slug":"_39-关键路径","link":"#_39-关键路径","children":[]},{"level":2,"title":"39. 折半查找","slug":"_39-折半查找","link":"#_39-折半查找","children":[]},{"level":2,"title":"40. 分块查找","slug":"_40-分块查找","link":"#_40-分块查找","children":[{"level":3,"title":"用折半查找索引表：","slug":"用折半查找索引表","link":"#用折半查找索引表","children":[]},{"level":3,"title":"查找效率分析","slug":"查找效率分析","link":"#查找效率分析","children":[]},{"level":3,"title":"时间复杂度评价","slug":"时间复杂度评价","link":"#时间复杂度评价","children":[]}]},{"level":2,"title":"41. B 树及其基本操作","slug":"_41-b-树及其基本操作","link":"#_41-b-树及其基本操作","children":[{"level":3,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":3,"title":"B 树的高度","slug":"b-树的高度","link":"#b-树的高度","children":[]},{"level":3,"title":"B 树的查找","slug":"b-树的查找","link":"#b-树的查找","children":[]},{"level":3,"title":"B 树的插入","slug":"b-树的插入","link":"#b-树的插入","children":[]},{"level":3,"title":"B 树的删除","slug":"b-树的删除","link":"#b-树的删除","children":[]}]},{"level":2,"title":"42. 散列表","slug":"_42-散列表","link":"#_42-散列表","children":[{"level":3,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":3,"title":"散列函数的构造方法","slug":"散列函数的构造方法","link":"#散列函数的构造方法","children":[]},{"level":3,"title":"散列函数的要求","slug":"散列函数的要求","link":"#散列函数的要求","children":[]},{"level":3,"title":"处理冲突的方法","slug":"处理冲突的方法","link":"#处理冲突的方法","children":[]},{"level":3,"title":"散列查找及性能分析","slug":"散列查找及性能分析","link":"#散列查找及性能分析","children":[]}]},{"level":2,"title":"43. 直接插入排序","slug":"_43-直接插入排序","link":"#_43-直接插入排序","children":[]},{"level":2,"title":"44. 折半插入排序","slug":"_44-折半插入排序","link":"#_44-折半插入排序","children":[]},{"level":2,"title":"45. 希尔排序","slug":"_45-希尔排序","link":"#_45-希尔排序","children":[]},{"level":2,"title":"46. 交换排序","slug":"_46-交换排序","link":"#_46-交换排序","children":[{"level":4,"title":"7.3.1 冒泡排序","slug":"_7-3-1-冒泡排序","link":"#_7-3-1-冒泡排序","children":[]}]},{"level":2,"title":"46. 快速排序","slug":"_46-快速排序","link":"#_46-快速排序","children":[]},{"level":2,"title":"47. 简单选择排序","slug":"_47-简单选择排序","link":"#_47-简单选择排序","children":[]},{"level":2,"title":"48. 堆排序","slug":"_48-堆排序","link":"#_48-堆排序","children":[]},{"level":2,"title":"49. 归并排序","slug":"_49-归并排序","link":"#_49-归并排序","children":[]},{"level":2,"title":"50. 基数排序","slug":"_50-基数排序","link":"#_50-基数排序","children":[]},{"level":2,"title":"51. 各种内部排序算法比较及应用","slug":"_51-各种内部排序算法比较及应用","link":"#_51-各种内部排序算法比较及应用","children":[{"level":3,"title":"内部排序算法的比较","slug":"内部排序算法的比较","link":"#内部排序算法的比较","children":[]},{"level":3,"title":"选取排序方法需要考虑的因素","slug":"选取排序方法需要考虑的因素","link":"#选取排序方法需要考虑的因素","children":[]}]},{"level":2,"title":"52. 外部排序的方法","slug":"_52-外部排序的方法","link":"#_52-外部排序的方法","children":[{"level":3,"title":"多路平衡归并与败者树","slug":"多路平衡归并与败者树","link":"#多路平衡归并与败者树","children":[]},{"level":3,"title":"置换 - 选择排序（生成初始归并段）","slug":"置换-选择排序-生成初始归并段","link":"#置换-选择排序-生成初始归并段","children":[]},{"level":3,"title":"最佳归并树","slug":"最佳归并树","link":"#最佳归并树","children":[]}]}],"git":{},"readingTime":{"minutes":52.4,"words":15721},"filePathRelative":"computer-science/data-structure/summary/数据结构核心考点.md","excerpt":"<h2> 1. 常见的逻辑结构</h2>\\n<ul>\\n<li>线性结构：一般线性表、受限线性表（栈和队列）、线性表推广（数组）</li>\\n<li>非线性结构：集合结构、树结构、图结构</li>\\n</ul>\\n<h2> 2.常见的存储结构</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>存储结构</th>\\n<th>定义</th>\\n<th>优点</th>\\n<th>缺点</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>顺序存储</td>\\n<td>把逻辑上相邻的元素存储在物理位置上也相邻的存储单元中，元素之间的关系由存储单元的邻接关系来体现</td>\\n<td>随机存取，占用空间少</td>\\n<td>使用一整块相邻的存储单元，产生较多碎片</td>\\n</tr>\\n<tr>\\n<td>链式存储</td>\\n<td>不要求逻辑上相邻的元素在物理位置上也相邻，借助指示元素存储地址的指针来表示元素之间的逻辑关系</td>\\n<td>不会出现碎片，充分利用所有存储单元</td>\\n<td>需要额外空间，只能顺序存取</td>\\n</tr>\\n<tr>\\n<td>索引存储</td>\\n<td>在存储元素信息的同时，还建立附加的索引表。</td>\\n<td>检索速度快</td>\\n<td>附加的索引表需要额外空间。增删数据修改索引表时花费时间</td>\\n</tr>\\n<tr>\\n<td>散列存储</td>\\n<td>根据元素的关键字直接计算出该元素的存储地址，又称哈希(Hash)存储。</td>\\n<td>检索、增加和删除结点的操作很快</td>\\n<td>可能出现元素存储单元的冲突，解决冲突会增加时间和空间开销</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}`);export{l as data};
