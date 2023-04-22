<template><div><h1 id="_5-1-图" tabindex="-1"><a class="header-anchor" href="#_5-1-图" aria-hidden="true">#</a> 5.1 图</h1>
<h2 id="_5-1-1-图的定义" tabindex="-1"><a class="header-anchor" href="#_5-1-1-图的定义" aria-hidden="true">#</a> 5.1.1 图的定义</h2>
<p><code v-pre>图G</code>由<code v-pre>顶点集V</code>和<code v-pre>边集E</code>组成，记<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>G</mi><mo>=</mo><mo stretchy="false">(</mo><mi>V</mi><mtext>，</mtext><mi>E</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">G=(V，E)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">G</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mord cjk_fallback">，</span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mclose">)</span></span></span></span>。</p>
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∣</mi><mi>V</mi><mi mathvariant="normal">∣</mi></mrow><annotation encoding="application/x-tex">|V|</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mord">∣</span></span></span></span>表示图G中顶点的个数，也称图G的阶。</p>
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∣</mi><mi>E</mi><mi mathvariant="normal">∣</mi></mrow><annotation encoding="application/x-tex">|E|</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mord">∣</span></span></span></span>表示图G中边的条数。</p>
<p>注：线性表可以是空表，树可以是空树，但<code v-pre>图不可以为空</code>，即V一定是非空集</p>
<h2 id="_5-1-2-图的分类" tabindex="-1"><a class="header-anchor" href="#_5-1-2-图的分类" aria-hidden="true">#</a> 5.1.2 图的分类</h2>
<p>①有向图和无向图。</p>
<figure><img src="/images/datastruct/1637762644688.png" alt="1637762644688" tabindex="0" loading="lazy"><figcaption>1637762644688</figcaption></figure>
<p>②简单图和多重图</p>
<figure><img src="/images/datastruct/1637762901031.png" alt="1637762901031" tabindex="0" loading="lazy"><figcaption>1637762901031</figcaption></figure>
<h2 id="_5-1-3-顶点的度-入度、出度" tabindex="-1"><a class="header-anchor" href="#_5-1-3-顶点的度-入度、出度" aria-hidden="true">#</a> 5.1.3 顶点的度，入度、出度</h2>
<p>无向图：
顶点的度=连该顶点的边的条数
无入度出度概念</p>
<p>有向图：
入度=指向该点的边的条数
出度=从该点指向其它点的边的条数
顶点的度=连该顶点的边的条数=入度出度之和</p>
<h2 id="_5-1-4-顶点与顶点之间的关系" tabindex="-1"><a class="header-anchor" href="#_5-1-4-顶点与顶点之间的关系" aria-hidden="true">#</a> 5.1.4 顶点与顶点之间的关系</h2>
<figure><img src="/images/datastruct/1637763340772.png" alt="1637763340772" tabindex="0" loading="lazy"><figcaption>1637763340772</figcaption></figure>
<h2 id="_5-1-5-连通图、强连通图" tabindex="-1"><a class="header-anchor" href="#_5-1-5-连通图、强连通图" aria-hidden="true">#</a> 5.1.5 连通图、强连通图</h2>
<figure><img src="/images/datastruct/1637763511883.png" alt="1637763511883" tabindex="0" loading="lazy"><figcaption>1637763511883</figcaption></figure>
<h2 id="_5-1-6-子图、生成子图" tabindex="-1"><a class="header-anchor" href="#_5-1-6-子图、生成子图" aria-hidden="true">#</a> 5.1.6 子图、生成子图</h2>
<p>子图：点集是子集，边集是子集
生成子图：点集不变，边集是子集。</p>
<h2 id="_5-1-7-连通分量、强连通分量" tabindex="-1"><a class="header-anchor" href="#_5-1-7-连通分量、强连通分量" aria-hidden="true">#</a> 5.1.7 连通分量、强连通分量</h2>
<p>连通分量：无向图的极大连通子图
强连通分量：有向图的极大连通子图</p>
<h2 id="_5-1-8-生成树、生成森林" tabindex="-1"><a class="header-anchor" href="#_5-1-8-生成树、生成森林" aria-hidden="true">#</a> 5.1.8 生成树、生成森林</h2>
<p>连通图可以生成树
非连通图可以生成森林</p>
<h2 id="_5-1-9-特殊的图" tabindex="-1"><a class="header-anchor" href="#_5-1-9-特殊的图" aria-hidden="true">#</a> 5.1.9 特殊的图</h2>
<p>①无向完全图、有向完全图</p>
<ul>
<li>无向完全图：无向图中任意两个顶点之间都存在边</li>
<li>有向完全图：有向图中任意两个顶点之间都存在相反的两条弧</li>
</ul>
<p>②稀疏图、稠密图</p>
<ul>
<li>稀疏图：边很少的图</li>
<li>稠密图：边很多的图</li>
</ul>
<p>③树、有向树</p>
<ul>
<li>树：不存在回路、且连通的无向图</li>
<li>有向树：一个顶点的入度为0，其余顶点的入度为1 的有向图</li>
</ul>
</div></template>


