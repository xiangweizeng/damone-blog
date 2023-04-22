<template><div><h1 id="_7-6-简单选择排序" tabindex="-1"><a class="header-anchor" href="#_7-6-简单选择排序" aria-hidden="true">#</a> 7.6 简单选择排序</h1>
<figure><img src="/images/datastruct/uTools_1638453625935.png" alt="uTools_1638453625935" tabindex="0" loading="lazy"><figcaption>uTools_1638453625935</figcaption></figure>
<figure><img src="/images/datastruct/uTools_1638453702968.png" alt="uTools_1638453702968" tabindex="0" loading="lazy"><figcaption>uTools_1638453702968</figcaption></figure>
<p><code v-pre>选择排序</code>是一种简单直观的排序算法。它的工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。</p>
<h2 id="_7-6-1-算法思想" tabindex="-1"><a class="header-anchor" href="#_7-6-1-算法思想" aria-hidden="true">#</a> 7.6.1 算法思想：</h2>
<p>n个记录的直接选择排序可经过n-1趟直接选择排序得到有序结果。具体算法描述如下：</p>
<ul>
<li>初始状态：无序区为R[1..n]，有序区为空；</li>
<li>第i趟排序(i=1,2,3…n-1)开始时，当前有序区和无序区分别为R[1..i-1]和R(i..n）。该趟排序从当前无序区中-选出关键字最小的记录 R[k]，将它与无序区的第1个记录R交换，使R[1..i]和R[i+1..n)分别变为记录个数增加1个的新有序区和记录个数减少1个的新无序区；</li>
<li>n-1趟结束，数组有序化了。</li>
</ul>
<figure><img src="/images/datastruct/849589-20171015224719590-1433219824.gif" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="_7-6-2-代码实现" tabindex="-1"><a class="header-anchor" href="#_7-6-2-代码实现" aria-hidden="true">#</a> 7.6.2 代码实现：</h3>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token comment">//简单选择排序</span>
<span class="token keyword">void</span> <span class="token function">SelectSort</span><span class="token punctuation">(</span><span class="token keyword">int</span> A<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> min <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>n<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>A<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">&lt;</span>A<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span> min <span class="token operator">=</span> j<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>min<span class="token operator">!=</span>i<span class="token punctuation">)</span> <span class="token function">swap</span><span class="token punctuation">(</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>A<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-6-3-算法效率分析" tabindex="-1"><a class="header-anchor" href="#_7-6-3-算法效率分析" aria-hidden="true">#</a> 7.6.3 算法效率分析</h2>
<p><code v-pre>空间复杂度</code>=$$O(1)$$，因为需要的辅助变量为int i，j</p>
<p>时间复杂度=$$(n-1)+(n-2)+\cdots+2+1=\frac{n(n-1)}{2}$$，<code v-pre>时间复杂度</code>=$$O(n^2)$$</p>
<p>算法稳定性：<code v-pre>不稳定</code></p>
<p>顺序表和链表都可以</p>
</div></template>


