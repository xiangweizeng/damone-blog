<template><div><h1 id="_7-9-基数排序" tabindex="-1"><a class="header-anchor" href="#_7-9-基数排序" aria-hidden="true">#</a> 7.9 基数排序</h1>
<figure><img src="/images/datastruct/uTools_1638539983688.png" alt="uTools_1638539983688" tabindex="0" loading="lazy"><figcaption>uTools_1638539983688</figcaption></figure>
<p><code v-pre>基数排序</code>是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。</p>
<p><code v-pre>r为基数</code>，基数是每一位可以取的数的范围，例如10进制的一位数可以取0~9，则<code v-pre>十进制的基数r=10</code>。</p>
<p>d为关键字个数，也是趟数，例如<code v-pre>10进制的一位数为一个d</code>。</p>
<p>n为元素个数</p>
<p>基数排序擅长树立d小，r小，n大的元素序列进行排序。</p>
<figure><img src="/images/datastruct/uTools_1638540152741.png" alt="uTools_1638540152741" tabindex="0" loading="lazy"><figcaption>uTools_1638540152741</figcaption></figure>
<h2 id="_7-9-1-算法思想" tabindex="-1"><a class="header-anchor" href="#_7-9-1-算法思想" aria-hidden="true">#</a> 7.9.1 算法思想：</h2>
<ul>
<li>取得数组中的最大数，并取得位数；</li>
<li>arr为原始数组，从最低位开始取每个位组成radix数组；</li>
<li>对radix进行计数排序（利用计数排序适用于小范围数的</li>
</ul>
<figure><img src="/images/datastruct/849589-20171015232453668-1397662527.gif" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h2 id="_7-9-2-代码实现" tabindex="-1"><a class="header-anchor" href="#_7-9-2-代码实现" aria-hidden="true">#</a> 7.9.2 代码实现：</h2>
<p>需一个辅助链队列来实现</p>
<figure><img src="/images/datastruct/uTools_1638540352134.png" alt="uTools_1638540352134" tabindex="0" loading="lazy"><figcaption>uTools_1638540352134</figcaption></figure>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-9-3-算法效率分析" tabindex="-1"><a class="header-anchor" href="#_7-9-3-算法效率分析" aria-hidden="true">#</a> 7.9.3 算法效率分析</h2>
<p>空间、时间复杂度<code v-pre>取决于基数r</code></p>
<p><code v-pre>空间复杂度</code>=<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>r</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(r)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mclose">)</span></span></span></span>，
因为需要r个辅助队列，链队列是增加指针域，则每个链队列的空间复杂度=<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span></span></span></span></p>
<p><code v-pre>时间复杂度</code>=<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>d</mi><mo stretchy="false">(</mo><mi>n</mi><mo>+</mo><mi>r</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(d(n+r))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">d</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mclose">))</span></span></span></span></p>
<p>算法稳定性：<code v-pre>稳定</code></p>
<h3 id="_7-9-4-基数排序的应用" tabindex="-1"><a class="header-anchor" href="#_7-9-4-基数排序的应用" aria-hidden="true">#</a> 7.9.4 基数排序的应用</h3>
<figure><img src="/images/datastruct/uTools_1638541177922.png" alt="uTools_1638541177922" tabindex="0" loading="lazy"><figcaption>uTools_1638541177922</figcaption></figure>
</div></template>


