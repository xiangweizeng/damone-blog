<template><div><figure><img src="/images/datastruct/uTools_1638266668727.png" alt="uTools_1638266668727" tabindex="0" loading="lazy"><figcaption>uTools_1638266668727</figcaption></figure>
<h2 id="_6-5-1-b树的定义" tabindex="-1"><a class="header-anchor" href="#_6-5-1-b树的定义" aria-hidden="true">#</a> 6.5.1 B树的定义</h2>
<p><code v-pre>B树</code>，又名<code v-pre>多路平衡查找树</code>（<code v-pre>m叉查找树</code>）</p>
<p>数据库索引技术里大量使用者B树和B+树的数据结构.</p>
<p>B树是由<code v-pre>二叉排序树</code>升级为<code v-pre>m叉查找树</code></p>
<figure><img src="/images/datastruct/uTools_1638263634505.png" alt="uTools_1638263634505" tabindex="0" loading="lazy"><figcaption>uTools_1638263634505</figcaption></figure>
<figure><img src="/images/datastruct/uTools_1638263678360.png" alt="uTools_1638263678360" tabindex="0" loading="lazy"><figcaption>uTools_1638263678360</figcaption></figure>
<figure><img src="/images/datastruct/1638263378425.png" alt="1638263378425" tabindex="0" loading="lazy"><figcaption>1638263378425</figcaption></figure>
<h3 id="核心特征" tabindex="-1"><a class="header-anchor" href="#核心特征" aria-hidden="true">#</a> 核心特征</h3>
<figure><img src="/images/datastruct/uTools_1638263546216.png" alt="uTools_1638263546216" tabindex="0" loading="lazy"><figcaption>uTools_1638263546216</figcaption></figure>
<h2 id="_6-5-2-b树的实现" tabindex="-1"><a class="header-anchor" href="#_6-5-2-b树的实现" aria-hidden="true">#</a> 6.5.2 B树的实现</h2>
<h4 id="二叉排序树的类型表述-与二叉树一样-二叉树的链式存储" tabindex="-1"><a class="header-anchor" href="#二叉排序树的类型表述-与二叉树一样-二叉树的链式存储" aria-hidden="true">#</a> 二叉排序树的类型表述（与二叉树一样）（二叉树的链式存储）</h4>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> data<span class="token punctuation">;</span>                   <span class="token comment">//数据域</span>
	<span class="token keyword">struct</span> <span class="token class-name">BiTNode</span> <span class="token operator">*</span>lchide<span class="token punctuation">,</span> <span class="token operator">*</span>rchild<span class="token punctuation">;</span> <span class="token comment">//左、右孩子指针</span>
<span class="token punctuation">}</span>BSTNode<span class="token punctuation">,</span> <span class="token operator">*</span>BSTree<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="b树的类型表述-m叉查找树" tabindex="-1"><a class="header-anchor" href="#b树的类型表述-m叉查找树" aria-hidden="true">#</a> B树的类型表述（m叉查找树）</h3>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> datas<span class="token punctuation">[</span>m<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>                   <span class="token comment">//zui</span>
	<span class="token keyword">struct</span> <span class="token class-name">BiTNode</span> <span class="token operator">*</span>child<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">;</span>         <span class="token comment">//左、右孩子指针</span>
<span class="token punctuation">}</span>BSTNode<span class="token punctuation">,</span> <span class="token operator">*</span>BSTree<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5叉查找树" tabindex="-1"><a class="header-anchor" href="#_5叉查找树" aria-hidden="true">#</a> 5叉查找树</h3>
<figure><img src="/images/datastruct/uTools_1638262837463.png" alt="uTools_1638262837463" tabindex="0" loading="lazy"><figcaption>uTools_1638262837463</figcaption></figure>
<h2 id="_6-5-3-查找效率分析" tabindex="-1"><a class="header-anchor" href="#_6-5-3-查找效率分析" aria-hidden="true">#</a> 6.5.3 查找效率分析</h2>
<h3 id="保证查找效率" tabindex="-1"><a class="header-anchor" href="#保证查找效率" aria-hidden="true">#</a> 保证查找效率：</h3>
<p>每个结点的关键字太少，导致树变高，查找效率就会下降。</p>
<figure><img src="/images/datastruct/uTools_1638262966104.png" alt="uTools_1638262966104" tabindex="0" loading="lazy"><figcaption>uTools_1638262966104</figcaption></figure>
<figure><img src="/images/datastruct/uTools_1638263106933.png" alt="uTools_1638263106933" tabindex="0" loading="lazy"><figcaption>uTools_1638263106933</figcaption></figure>
<h3 id="b树的高度" tabindex="-1"><a class="header-anchor" href="#b树的高度" aria-hidden="true">#</a> B树的高度</h3>
<p>最小高度：</p>
<figure><img src="/images/datastruct/uTools_1638263978037.png" alt="uTools_1638263978037" tabindex="0" loading="lazy"><figcaption>uTools_1638263978037</figcaption></figure>
<p>最大高度：</p>
<figure><img src="/images/datastruct/uTools_1638264247752.png" alt="uTools_1638264247752" tabindex="0" loading="lazy"><figcaption>uTools_1638264247752</figcaption></figure>
<p>综上，高度为：</p>
<figure><img src="/images/datastruct/uTools_1638264294898.png" alt="uTools_1638264294898" tabindex="0" loading="lazy"><figcaption>uTools_1638264294898</figcaption></figure>
<h2 id="_6-5-4-b树的插入" tabindex="-1"><a class="header-anchor" href="#_6-5-4-b树的插入" aria-hidden="true">#</a> 6.5.4 B树的插入</h2>
<p>插入满一个结点后，从中间拆开，让中间位置（<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">⌈</mo><mi>m</mi><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">⌉</mo></mrow><annotation encoding="application/x-tex">\lceil m/2 \rceil</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">⌈</span><span class="mord mathnormal">m</span><span class="mord">/2</span><span class="mclose">⌉</span></span></span></span>）向上产生父结点，两边成为其孩子结点，依次类推</p>
<figure><img src="/images/datastruct/290047064066682.png" alt="B tree" tabindex="0" loading="lazy"><figcaption>B tree</figcaption></figure>
<figure><img src="/images/datastruct/btreebuild.gif" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="_6-5-5-b树的删除" tabindex="-1"><a class="header-anchor" href="#_6-5-5-b树的删除" aria-hidden="true">#</a> 6.5.5 B树的删除</h3>
<p>情况一：删除<code v-pre>非终端结点</code>中的关键字</p>
<figure><img src="/images/datastruct/1638265769766.png" alt="1638265769766" tabindex="0" loading="lazy"><figcaption>1638265769766</figcaption></figure>
<figure><img src="/images/datastruct/1638265769770.png" alt="1638265769770" tabindex="0" loading="lazy"><figcaption>1638265769770</figcaption></figure>
<p>情况一：删除<code v-pre>终端结点</code>中的关键字</p>
<p>①删除33时右边结点够借：</p>
<figure><img src="/images/datastruct/1638265769762.png" alt="1638265769762" tabindex="0" loading="lazy"><figcaption>1638265769762</figcaption></figure>
<figure><img src="/images/datastruct/1638265769749.jpg" alt="1638265769749" tabindex="0" loading="lazy"><figcaption>1638265769749</figcaption></figure>
<figure><img src="/images/datastruct/1638265769758.png" alt="1638265769758" tabindex="0" loading="lazy"><figcaption>1638265769758</figcaption></figure>
<figure><img src="/images/datastruct/1638265769753.png" alt="1638265769753" tabindex="0" loading="lazy"><figcaption>1638265769753</figcaption></figure>
<p>②删除49时，右边的结点不够借：</p>
<p>解决方法：将<code v-pre>父结点中夹的关键字</code>取下与左右孩子<code v-pre>合并</code>。</p>
<figure><img src="/images/datastruct/1638265769745.jpg" alt="1638265769745" tabindex="0" loading="lazy"><figcaption>1638265769745</figcaption></figure>
</div></template>


