<template><div><h1 id="_2-1-栈" tabindex="-1"><a class="header-anchor" href="#_2-1-栈" aria-hidden="true">#</a> 2.1 栈</h1>
<h2 id="_2-1-1-栈的定义" tabindex="-1"><a class="header-anchor" href="#_2-1-1-栈的定义" aria-hidden="true">#</a> 2.1.1 栈的定义</h2>
<p><code v-pre>栈</code>是线性表结构的一种，但是栈结构的插入与删除操作都只能从同一端进行，所以栈结构是一种受限制的线性表结构，数据的插入与删除符合LIFO的原则（也就是<code v-pre>后进先出</code>，<code v-pre>先进后出</code>）。</p>
<figure><img src="/images/datastruct/20200317151355505.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_2-1-2-栈的基本操作" tabindex="-1"><a class="header-anchor" href="#_2-1-2-栈的基本操作" aria-hidden="true">#</a> 2.1.2 栈的基本操作</h2>
<p><code v-pre>注</code>：参数代“&amp;”表示：方法运行完后，对参数修改的结果要<code v-pre>“带回来”</code></p>
<p>对数据的操作：创销，增删查改</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token function">InitStack</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//初始化表：构造一个空的栈S，分配内存空间</span>
<span class="token function">DestoryStack</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//销毁操作：销毁栈，并释放栈S所占用的内存空间</span>

<span class="token function">Push</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>S<span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//进栈，若栈S未满，则将x加入使之成为新栈</span>
<span class="token function">Pop</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>S<span class="token punctuation">,</span><span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//出栈，若栈S非空，则弹出栈顶元素，并用x返回</span>

<span class="token function">GetTop</span><span class="token punctuation">(</span>S<span class="token punctuation">,</span><span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//读栈顶元素，若栈S非空，则将x返回栈顶元素</span>

<span class="token comment">//其它常用操作</span>
<span class="token function">StackEmpty</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//判空操作</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-1-3-存储结构" tabindex="-1"><a class="header-anchor" href="#_2-1-3-存储结构" aria-hidden="true">#</a> 2.1.3 存储结构</h2>
<p><code v-pre>顺序存储</code>和<code v-pre>链式存储</code></p>
<h2 id="_2-1-4-栈分类" tabindex="-1"><a class="header-anchor" href="#_2-1-4-栈分类" aria-hidden="true">#</a> 2.1.4 栈分类</h2>
<p>栈的顺序存储：顺序栈</p>
<p>栈的链式存储：链栈</p>
</div></template>


