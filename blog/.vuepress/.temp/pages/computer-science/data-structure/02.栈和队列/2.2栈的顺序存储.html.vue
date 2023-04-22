<template><div><h1 id="_2-2-栈的顺序存储" tabindex="-1"><a class="header-anchor" href="#_2-2-栈的顺序存储" aria-hidden="true">#</a> 2.2 栈的顺序存储</h1>
<h2 id="_2-2-1-顺序栈的定义" tabindex="-1"><a class="header-anchor" href="#_2-2-1-顺序栈的定义" aria-hidden="true">#</a> 2.2.1 顺序栈的定义</h2>
<p><code v-pre>顺序栈</code>：栈的<code v-pre>顺序存储</code>。</p>
<h2 id="_2-2-2-顺序栈的实现方式" tabindex="-1"><a class="header-anchor" href="#_2-2-2-顺序栈的实现方式" aria-hidden="true">#</a> 2.2.2 顺序栈的实现方式</h2>
<p>实现方式：<code v-pre>静态分配</code>和<code v-pre>动态分配</code></p>
<h2 id="_2-2-3-静态分配的顺序栈上的操作" tabindex="-1"><a class="header-anchor" href="#_2-2-3-静态分配的顺序栈上的操作" aria-hidden="true">#</a> 2.2.3 静态分配的顺序栈上的操作</h2>
<h2 id="顺序栈的类型描述" tabindex="-1"><a class="header-anchor" href="#顺序栈的类型描述" aria-hidden="true">#</a> 顺序栈的类型描述</h2>
<div class="language-C line-numbers-mode" data-ext="C"><pre v-pre class="language-C"><code>#define MaxSize 10
typedef struct{
	Elemtype data[MaxSize];//静态数组存放栈中元素
	int top;               //栈顶指针
}SqStack;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token comment">//初始化一个栈</span>
<span class="token keyword">void</span> <span class="token function">InitStack</span><span class="token punctuation">(</span>SqStack <span class="token operator">&amp;</span>S<span class="token punctuation">)</span><span class="token punctuation">{</span>
	S<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>   <span class="token comment">//初始化栈顶指针</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="判栈空" tabindex="-1"><a class="header-anchor" href="#判栈空" aria-hidden="true">#</a> 判栈空</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code>bool <span class="token function">StackEmpty</span><span class="token punctuation">(</span>SqStack S<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>S<span class="token punctuation">.</span>top <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> true<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> false<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="入栈" tabindex="-1"><a class="header-anchor" href="#入栈" aria-hidden="true">#</a> 入栈</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token comment">//向栈中压入元素e</span>
bool <span class="token function">Push</span><span class="token punctuation">(</span>SqStack <span class="token operator">&amp;</span>S<span class="token punctuation">,</span>Elemtype e<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>S<span class="token punctuation">.</span>Top <span class="token operator">==</span> MaxSize<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> false<span class="token punctuation">;</span>
	S<span class="token punctuation">.</span>Top <span class="token operator">=</span> S<span class="token punctuation">.</span>Top <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">//栈顶指针向上移动</span>
    S<span class="token punctuation">.</span>data<span class="token punctuation">[</span>S<span class="token punctuation">.</span>top<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
	<span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="出栈" tabindex="-1"><a class="header-anchor" href="#出栈" aria-hidden="true">#</a> 出栈</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token comment">//栈顶元素出栈</span>
bool <span class="token function">Pop</span><span class="token punctuation">(</span>Stack <span class="token operator">&amp;</span>S<span class="token punctuation">,</span>Elemtype <span class="token operator">&amp;</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>S<span class="token punctuation">.</span>Top <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> false<span class="token punctuation">;</span>
	e <span class="token operator">=</span> S<span class="token punctuation">.</span>data<span class="token punctuation">[</span>S<span class="token punctuation">.</span>Top<span class="token punctuation">]</span><span class="token punctuation">;</span>   <span class="token comment">//x为栈顶元素，栈顶指针下移一个位置</span>
	S<span class="token punctuation">.</span>Top <span class="token operator">=</span> S<span class="token punctuation">.</span>Top <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取栈顶元素" tabindex="-1"><a class="header-anchor" href="#获取栈顶元素" aria-hidden="true">#</a> 获取栈顶元素</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token comment">//获取栈顶元素e</span>
bool <span class="token function">GetTop</span><span class="token punctuation">(</span>Stack <span class="token operator">&amp;</span>S<span class="token punctuation">,</span>Elemtype <span class="token operator">&amp;</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>S<span class="token punctuation">.</span>Top<span class="token operator">==</span>S<span class="token punctuation">.</span>Base<span class="token punctuation">)</span> <span class="token keyword">return</span> false<span class="token punctuation">;</span>
	e <span class="token operator">=</span> S<span class="token punctuation">.</span>data<span class="token punctuation">[</span>S<span class="token punctuation">.</span>Top<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-4-动态分配的顺序栈上的操作" tabindex="-1"><a class="header-anchor" href="#_2-2-4-动态分配的顺序栈上的操作" aria-hidden="true">#</a> 2.2.4 动态分配的顺序栈上的操作</h2>
<h2 id="顺序栈的类型描述-1" tabindex="-1"><a class="header-anchor" href="#顺序栈的类型描述-1" aria-hidden="true">#</a> 顺序栈的类型描述</h2>
<div class="language-C line-numbers-mode" data-ext="C"><pre v-pre class="language-C"><code>typedef struct Stack{
	Elemtype *Top;//指向栈顶元素的上一个
	Elemtype *Base;//指向栈底
	int stacksize;//当前栈的空间大小
}SqStack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化-1" tabindex="-1"><a class="header-anchor" href="#初始化-1" aria-hidden="true">#</a> 初始化</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token comment">//初始化一个栈</span>
bool <span class="token function">InitStack</span><span class="token punctuation">(</span>SqStack <span class="token operator">&amp;</span>S<span class="token punctuation">)</span><span class="token punctuation">{</span>
	S<span class="token punctuation">.</span>Base<span class="token operator">=</span><span class="token punctuation">(</span>Elemtype <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span>MAXSIZE<span class="token operator">*</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Elemtype<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>S<span class="token punctuation">.</span>Base<span class="token punctuation">)</span> <span class="token keyword">return</span> false<span class="token punctuation">;</span>
	S<span class="token punctuation">.</span>Top<span class="token operator">=</span>S<span class="token punctuation">.</span>Base<span class="token punctuation">;</span>
	S<span class="token punctuation">.</span>stacksize<span class="token operator">=</span>MAXSIZE<span class="token punctuation">;</span>
	<span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="判栈空-1" tabindex="-1"><a class="header-anchor" href="#判栈空-1" aria-hidden="true">#</a> 判栈空</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code>bool <span class="token function">StackEmpty</span><span class="token punctuation">(</span>SqStack S<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>S<span class="token punctuation">.</span>Top <span class="token operator">==</span> S<span class="token punctuation">.</span>Base<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> true<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> false<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="入栈-1" tabindex="-1"><a class="header-anchor" href="#入栈-1" aria-hidden="true">#</a> 入栈</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token comment">//向栈中压入元素e</span>
bool <span class="token function">Push</span><span class="token punctuation">(</span>SqStack <span class="token operator">&amp;</span>S<span class="token punctuation">,</span>Elemtype e<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>S<span class="token punctuation">.</span>Top<span class="token operator">-</span>S<span class="token punctuation">.</span>Base<span class="token operator">==</span>S<span class="token punctuation">.</span>stacksize<span class="token punctuation">)</span> <span class="token keyword">return</span> false<span class="token punctuation">;</span>
	<span class="token operator">*</span>S<span class="token punctuation">.</span>Top<span class="token operator">=</span>e<span class="token punctuation">;</span>
	S<span class="token punctuation">.</span>Top<span class="token operator">++</span><span class="token punctuation">;</span>	<span class="token comment">//栈顶指针向上移动</span>
	<span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="出栈-1" tabindex="-1"><a class="header-anchor" href="#出栈-1" aria-hidden="true">#</a> 出栈</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token comment">//栈顶元素出栈</span>
bool <span class="token function">Pop</span><span class="token punctuation">(</span>Stack <span class="token operator">&amp;</span>S<span class="token punctuation">,</span>Eletype <span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>S<span class="token punctuation">.</span>Top<span class="token operator">==</span>S<span class="token punctuation">.</span>Base<span class="token punctuation">)</span> <span class="token keyword">return</span> false<span class="token punctuation">;</span>
	x<span class="token operator">=</span><span class="token operator">*</span><span class="token operator">--</span>S<span class="token punctuation">.</span>Top<span class="token punctuation">;</span>		<span class="token comment">//x为栈顶元素，栈顶指针下移一个位置</span>
	<span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取栈顶元素-1" tabindex="-1"><a class="header-anchor" href="#获取栈顶元素-1" aria-hidden="true">#</a> 获取栈顶元素</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token comment">//获取栈顶元素e</span>
bool <span class="token function">GetTop</span><span class="token punctuation">(</span>Stack <span class="token operator">&amp;</span>S<span class="token punctuation">,</span>Elemtype <span class="token operator">&amp;</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>S<span class="token punctuation">.</span>Top<span class="token operator">==</span>S<span class="token punctuation">.</span>Base<span class="token punctuation">)</span> <span class="token keyword">return</span> false<span class="token punctuation">;</span>
	e <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>S<span class="token punctuation">.</span>Top<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


