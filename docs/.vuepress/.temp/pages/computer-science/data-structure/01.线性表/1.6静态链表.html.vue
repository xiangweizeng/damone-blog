<template><div><h3 id="_1-6-1-静态链表的定义" tabindex="-1"><a class="header-anchor" href="#_1-6-1-静态链表的定义" aria-hidden="true">#</a> 1.6.1 静态链表的定义</h3>
<p><code v-pre>静态链表</code>借助<code v-pre>数组</code>来描述线性表的链式存储结构，结点也有<code v-pre>数据域data</code>和<code v-pre>指针域next</code>，这里的指针是结点的<code v-pre>相对地址（数组下标）</code>，又称<code v-pre>游标</code>。和顺序表一样，静态链表也需要预先分配一块连续的内存空间。</p>
<figure><img src="/images/datastruct/20210418162136494.png" alt="静态链表" tabindex="0" loading="lazy"><figcaption>静态链表</figcaption></figure>
<h3 id="_1-6-2-静态链表的特点" tabindex="-1"><a class="header-anchor" href="#_1-6-2-静态链表的特点" aria-hidden="true">#</a> 1.6.2 静态链表的特点</h3>
<p>顺序表：逻辑上连续，物理上连续</p>
<p>静态链表：逻辑上离散，物理上连续</p>
<p>单双链表：逻辑上离散，物理上离散</p>
<p>静态链表比顺序表好。比单双链表差</p>
<p><code v-pre>优点</code>：增加、删除操作不需要移动大量元素</p>
<p><code v-pre>缺点</code>：①不能随机存取。只能从头结点遍历找</p>
<p>​               ②容量不可变</p>
<h3 id="三、静态链表上的操作" tabindex="-1"><a class="header-anchor" href="#三、静态链表上的操作" aria-hidden="true">#</a> 三、静态链表上的操作</h3>
<h4 id="静态链表的类型描述" tabindex="-1"><a class="header-anchor" href="#静态链表的类型描述" aria-hidden="true">#</a> 静态链表的类型描述</h4>
<div class="language-C line-numbers-mode" data-ext="C"><pre v-pre class="language-C"><code>#define MaxSize 50  //静态链表的最大长度
typedef struct SLinkList{
	ElemType data;  //数据元素
	int next;  //下一个元素的数组下标
}SLinkList[MaxSize];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h4>
<p>a[0]的next设为-1</p>
<p>其它的next设为-2</p>
<h4 id="判空" tabindex="-1"><a class="header-anchor" href="#判空" aria-hidden="true">#</a> 判空</h4>
<p>它的next为-2</p>
<p>则此结点为空</p>
<h4 id="插入" tabindex="-1"><a class="header-anchor" href="#插入" aria-hidden="true">#</a> 插入</h4>
<p>①找一个空的结点，存入数据</p>
<p>②从头结点出发找到位序为i-1的结点</p>
<p>③修改新结点的next</p>
<p>④修改i-1号结点的next</p>
<h4 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h4>
<p>②从头结点出发找到前驱结点</p>
<p>③修改前驱结点的next</p>
<p>④被删除结点的next设为-2</p>
<h4 id="查找" tabindex="-1"><a class="header-anchor" href="#查找" aria-hidden="true">#</a> 查找</h4>
<p>从头结点出发挨个往后遍历结点</p>
<h4 id="求表长" tabindex="-1"><a class="header-anchor" href="#求表长" aria-hidden="true">#</a> 求表长</h4>
<p>从头结点出发挨个往后遍历结点</p>
<h4 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h4>
<p>从头结点出发挨个往后遍历结点</p>
</div></template>


