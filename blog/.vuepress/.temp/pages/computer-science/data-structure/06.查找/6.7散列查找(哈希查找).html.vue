<template><div><h1 id="_6-7-散列查找-哈希查找" tabindex="-1"><a class="header-anchor" href="#_6-7-散列查找-哈希查找" aria-hidden="true">#</a> 6.7 散列查找(哈希查找)</h1>
<figure><img src="/images/datastruct/uTools_1638349184596.png" alt="uTools_1638349184596" tabindex="0" loading="lazy"><figcaption>uTools_1638349184596</figcaption></figure>
<h2 id="_6-7-1-哈希查找的定义" tabindex="-1"><a class="header-anchor" href="#_6-7-1-哈希查找的定义" aria-hidden="true">#</a> 6.7.1 哈希查找的定义</h2>
<p><code v-pre>散列表</code>（Hash Table），又名<code v-pre>哈希表</code>，是一种数据结构。</p>
<p><code v-pre>特点</code>：数据元素的<code v-pre>关键字与其存储地址直接相关</code>。</p>
<p>通过<code v-pre>散列函数（哈希函数）</code>将关键字与存储地址一一映射。</p>
<p>散列查找是典型的<code v-pre>“用空间换时间”的算法</code></p>
<p><code v-pre>装填因子α</code> = 表中记录个数/散列表表长</p>
<p><code v-pre>查找效率</code>：取决于<code v-pre>散列函数</code>、<code v-pre>处理冲突的方法</code>、<code v-pre>装填因子α</code></p>
<figure><img src="/images/datastruct/1638281466946.jpg" alt="1638281466946" tabindex="0" loading="lazy"><figcaption>1638281466946</figcaption></figure>
<h2 id="_6-7-2-常见的散列函数-哈希函数" tabindex="-1"><a class="header-anchor" href="#_6-7-2-常见的散列函数-哈希函数" aria-hidden="true">#</a> 6.7.2 常见的散列函数（哈希函数）</h2>
<p>冲突是由散列函数导致的，<code v-pre>冲突越多，查找效率越低</code></p>
<p>散列函数的设计目的：让不同的关键字的冲突尽可能少。</p>
<ul>
<li>①除留余数法</li>
<li>②直接定址法</li>
<li>③数字分析法</li>
<li>④平方取中法</li>
</ul>
<h3 id="_1-除留余数法" tabindex="-1"><a class="header-anchor" href="#_1-除留余数法" aria-hidden="true">#</a> (1) 除留余数法</h3>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>H</mi><mo stretchy="false">(</mo><mi>k</mi><mi>e</mi><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>k</mi><mi>e</mi><mi>y</mi><mspace></mspace><mspace width="1em"/><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi></mrow><mtext> </mtext><mtext> </mtext><mi>p</mi></mrow><annotation encoding="application/x-tex">
H(key)=key\mod{p}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal" style="margin-right:0.03588em;">ey</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal" style="margin-right:0.03588em;">ey</span><span class="mspace allowbreak"></span><span class="mspace" style="margin-right:1em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord"><span class="mord mathrm">mod</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">p</span></span></span></span></span></p>
<p>除数p取法：散列表表长为m，取一个不大于m但最接近或等于m的<code v-pre>质数p</code></p>
<p>查找方法：当p=13时，查找66，66%13=1，则在a[1]下的链表中寻找。</p>
<p><code v-pre>查找效率分析</code>：</p>
<figure><img src="/images/datastruct/1638350479082.jpg" alt="1638350479082" tabindex="0" loading="lazy"><figcaption>1638350479082</figcaption></figure>
<h3 id="_2-直接定址法" tabindex="-1"><a class="header-anchor" href="#_2-直接定址法" aria-hidden="true">#</a> (2)直接定址法</h3>
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>H</mi><mo stretchy="false">(</mo><mi>k</mi><mi>e</mi><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>k</mi><mi>e</mi><mi>y</mi></mrow><annotation encoding="application/x-tex">H(key)=key</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal" style="margin-right:0.03588em;">ey</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal" style="margin-right:0.03588em;">ey</span></span></span></span> 或 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>H</mi><mo stretchy="false">(</mo><mi>k</mi><mi>e</mi><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>a</mi><mo>∗</mo><mi>k</mi><mi>e</mi><mi>y</mi><mo>+</mo><mi>b</mi></mrow><annotation encoding="application/x-tex">H(key)=a*key+b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal" style="margin-right:0.03588em;">ey</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4653em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal" style="margin-right:0.03588em;">ey</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span></p>
<p>这种计算最简单，适合<code v-pre>关键字分布连续</code>的情况</p>
<figure><img src="/images/datastruct/uTools_1638351041435.png" alt="uTools_1638351041435" tabindex="0" loading="lazy"><figcaption>uTools_1638351041435</figcaption></figure>
<h3 id="_3-数字分析法" tabindex="-1"><a class="header-anchor" href="#_3-数字分析法" aria-hidden="true">#</a> (3)数字分析法</h3>
<p>选取数码<code v-pre>分布较为均匀的若干位</code>作为散列地址。</p>
<figure><img src="/images/datastruct/1638351182580.png" alt="1638351182580" tabindex="0" loading="lazy"><figcaption>1638351182580</figcaption></figure>
<h3 id="_4-平方取中法" tabindex="-1"><a class="header-anchor" href="#_4-平方取中法" aria-hidden="true">#</a> (4) 平方取中法</h3>
<p>取<code v-pre>关键字的平方值的中间几位</code>作为散列地址。</p>
<p>具体取多少位要视实际情况而定。这种方法得到的<code v-pre>散列地址与关键字的每位都有关系</code>，因此使得散列地址分布比较均匀，适用于关键字的每位取值都不够均匀或均小于散列地址所需的位数。</p>
<figure><img src="/images/datastruct/uTools_1638351362463.png" alt="uTools_1638351362463" tabindex="0" loading="lazy"><figcaption>uTools_1638351362463</figcaption></figure>
<h2 id="_6-7-3-处理冲突的方法" tabindex="-1"><a class="header-anchor" href="#_6-7-3-处理冲突的方法" aria-hidden="true">#</a> 6.7.3 处理冲突的方法</h2>
<ul>
<li>①拉链法</li>
<li>②开放定址法</li>
<li>③再散列法</li>
</ul>
<p>处理冲突的方法：以拉链法为主。</p>
<h3 id="_1-拉链法" tabindex="-1"><a class="header-anchor" href="#_1-拉链法" aria-hidden="true">#</a> (1)拉链法</h3>
<figure><img src="/images/datastruct/uTools_1638349467195.png" alt="uTools_1638349467195" tabindex="0" loading="lazy"><figcaption>uTools_1638349467195</figcaption></figure>
<h3 id="_2-开放定址法" tabindex="-1"><a class="header-anchor" href="#_2-开放定址法" aria-hidden="true">#</a> (2)开放定址法</h3>
<figure><img src="/images/datastruct/uTools_1638353226182.png" alt="uTools_1638353226182" tabindex="0" loading="lazy"><figcaption>uTools_1638353226182</figcaption></figure>
<p><code v-pre>d的不同取法</code>：</p>
<h4 id="_1线性探测法" tabindex="-1"><a class="header-anchor" href="#_1线性探测法" aria-hidden="true">#</a> ①线性探测法</h4>
<figure><img src="/images/datastruct/uTools_1638352055034.png" alt="uTools_1638352055034" tabindex="0" loading="lazy"><figcaption>uTools_1638352055034</figcaption></figure>
<figure><img src="/images/datastruct/uTools_1638352323225.png" alt="uTools_1638352323225" tabindex="0" loading="lazy"><figcaption>uTools_1638352323225</figcaption></figure>
<figure><img src="/images/datastruct/uTools_1638352359885.png" alt="uTools_1638352359885" tabindex="0" loading="lazy"><figcaption>uTools_1638352359885</figcaption></figure>
<figure><img src="/images/datastruct/uTools_1638352393458.png" alt="uTools_1638352393458" tabindex="0" loading="lazy"><figcaption>uTools_1638352393458</figcaption></figure>
<h4 id="_2平方探测法" tabindex="-1"><a class="header-anchor" href="#_2平方探测法" aria-hidden="true">#</a> ②平方探测法</h4>
<p>散列表长必须是<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>4</mn><mi>j</mi><mo>+</mo><mn>3</mn></mrow><annotation encoding="application/x-tex">4j+3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.854em;vertical-align:-0.1944em;"></span><span class="mord">4</span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">3</span></span></span></span></p>
<figure><img src="/images/datastruct/uTools_1638352677985.png" alt="uTools_1638352677985" tabindex="0" loading="lazy"><figcaption>uTools_1638352677985</figcaption></figure>
<figure><img src="/images/datastruct/1638352873925.png" alt="1638352873925" tabindex="0" loading="lazy"><figcaption>1638352873925</figcaption></figure>
<h4 id="_3伪随机序列法" tabindex="-1"><a class="header-anchor" href="#_3伪随机序列法" aria-hidden="true">#</a> ③伪随机序列法</h4>
<p>d取随机值</p>
<h3 id="_3-再散列法" tabindex="-1"><a class="header-anchor" href="#_3-再散列法" aria-hidden="true">#</a> (3)再散列法</h3>
<figure><img src="/images/datastruct/uTools_1638353359841.png" alt="uTools_1638353359841" tabindex="0" loading="lazy"><figcaption>uTools_1638353359841</figcaption></figure>
</div></template>


