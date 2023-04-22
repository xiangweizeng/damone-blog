<template><div><figure><img src="/images/datastruct/1.png" alt="线性表" tabindex="0" loading="lazy"><figcaption>线性表</figcaption></figure>
<h3 id="一、线性表的定义" tabindex="-1"><a class="header-anchor" href="#一、线性表的定义" aria-hidden="true">#</a> 一、线性表的定义:</h3>
<p><code v-pre>线性表</code>是n个具有相同特性的数据元素的有限序列。</p>
<h3 id="二、线性表的基本操作" tabindex="-1"><a class="header-anchor" href="#二、线性表的基本操作" aria-hidden="true">#</a> 二、线性表的基本操作</h3>
<p><code v-pre>注</code>：参数代“&amp;”表示引用，作用相当于指针，但更安全</p>
<p>对数据的操作：创销，增删查改</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token function">InitList</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//初始化表：构造一个空的线性表L，分配内存空间</span>
<span class="token function">DestoryList</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//销毁操作：销毁线性表，并释放线性表L所占用的内存空间</span>

<span class="token function">ListInsert</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>L<span class="token punctuation">,</span>i<span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//插入操作：在表L中第i个位置上查入指定元素e</span>
<span class="token function">ListDelete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>L<span class="token punctuation">,</span>i<span class="token punctuation">,</span><span class="token operator">&amp;</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//删除操作：删除表L中第i个位置的元素，/*并用e反回删除元素的值*/</span>

<span class="token function">LocateElem</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//按值查找操作</span>
<span class="token function">GetElem</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//按位查找操作</span>

<span class="token comment">//其它常用操作</span>
<span class="token function">Length</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//求表长</span>
<span class="token function">Print</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//输出操作</span>
<span class="token function">Empty</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//判空操作</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、存储结构" tabindex="-1"><a class="header-anchor" href="#三、存储结构" aria-hidden="true">#</a> 三、存储结构</h3>
<p><code v-pre>顺序存储</code>和<code v-pre>链式存储</code></p>
<h3 id="四、线性表分类" tabindex="-1"><a class="header-anchor" href="#四、线性表分类" aria-hidden="true">#</a> 四、线性表分类</h3>
<ul>
<li>线性表的顺序存储：顺序表</li>
<li>线性表的链式存储：单双链表、循环链表</li>
<li>静态链表比较特殊：逻辑上离散，物理上连续</li>
</ul>
</div></template>


