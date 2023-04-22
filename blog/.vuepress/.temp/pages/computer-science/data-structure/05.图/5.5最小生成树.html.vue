<template><div><h1 id="_5-5-最小生成树" tabindex="-1"><a class="header-anchor" href="#_5-5-最小生成树" aria-hidden="true">#</a> 5.5 最小生成树</h1>
<h2 id="_5-5-1-最小生成树的概念" tabindex="-1"><a class="header-anchor" href="#_5-5-1-最小生成树的概念" aria-hidden="true">#</a> 5.5.1 最小生成树的概念</h2>
<p>连通图生成树，非连通图生成森林</p>
<p><code v-pre>生成树</code>是包含图中全部顶点的一个<code v-pre>极小连通子图</code>
<code v-pre>特性</code>：图中有n个顶点，则它的生成树含有n-1条边。
去除一条边会变成非连通图；加上一条边会变成一个回路</p>
<p>之前学过<code v-pre>广度优先生成树</code>和<code v-pre>深度优先生成树</code>。</p>
<p><code v-pre>最小生成树</code>，也叫<code v-pre>最小代价树</code>。在带权连通无向图的所有生成树中，所有边的代价和最小。</p>
<p>最小生成树可能很多，但边的权值之和总是唯一且最小的。</p>
<p><code v-pre>最小生成的边=顶点数-1</code></p>
<figure><img src="/images/datastruct/20160714130435508.png" alt="这里写图片描述" tabindex="0" loading="lazy"><figcaption>这里写图片描述</figcaption></figure>
<h2 id="_5-5-2-prim算法-普利姆算法" tabindex="-1"><a class="header-anchor" href="#_5-5-2-prim算法-普利姆算法" aria-hidden="true">#</a> 5.5.2 Prim算法（普利姆算法）</h2>
<p>此算法可以称为<code v-pre>“加点法”</code>，每次迭代选择代价最小的边对应的点，加入到最小生成树中。算法从某一个顶点s开始，逐渐长大覆盖整个连通网的所有顶点。</p>
<p>实现思想：以最低代价加入<code v-pre>点</code>。
用两个数组：</p>
<ul>
<li>①<code v-pre>isJoin数组</code>：标记<code v-pre>各结点</code>是否已加入树。</li>
<li>②<code v-pre>lowCost数组</code>：各节点加入树的最低代价。</li>
</ul>
<p>每轮遍历<strong>isJoin</strong>数组，第一遍找到<strong>lowCost</strong>最低的顶点，然后加入；第二遍循环遍历更新各点的<strong>lowCost</strong>值。
则<code v-pre>时间复杂度</code>=<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi mathvariant="normal">∣</mi><mi>V</mi><msup><mi mathvariant="normal">∣</mi><mn>2</mn></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(|V|^2)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mord"><span class="mord">∣</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>，适合<code v-pre>边稠密图</code></p>
<figure><img src="/images/datastruct/1638175026761.png" alt="1638175026761" tabindex="0" loading="lazy"><figcaption>1638175026761</figcaption></figure>
<figure><img src="/images/datastruct/1638175026757.png" alt="1638175026757" tabindex="0" loading="lazy"><figcaption>1638175026757</figcaption></figure>
<h3 id="_5-5-3-kruskal算法-克鲁斯卡尔算法" tabindex="-1"><a class="header-anchor" href="#_5-5-3-kruskal算法-克鲁斯卡尔算法" aria-hidden="true">#</a> 5.5.3 Kruskal算法（克鲁斯卡尔算法）</h3>
<p>此算法可以称为<code v-pre>“加边法”</code>，初始最小生成树边数为0，每迭代一次就选择一条满足条件的最小代价边，加入到最小生成树的边集合里。</p>
<p>实现思想：以最低代价加入<code v-pre>边</code>。
用一个表：
（weight（边权），Vertex1（点1），Vertex2（点2））
用<code v-pre>并查集</code>检查下一个边的两个点是否已连接。</p>
<p>判断两个点是否已连接需要<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>l</mi><mi>o</mi><msub><mi>g</mi><mn>2</mn></msub><mi mathvariant="normal">∣</mi><mi>E</mi><mi mathvariant="normal">∣</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(log_2|E|)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">o</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mord">∣</span><span class="mclose">)</span></span></span></span>，工执行e轮。
则<code v-pre>时间复杂度</code>=<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi mathvariant="normal">∣</mi><mi>E</mi><mi mathvariant="normal">∣</mi><mi>l</mi><mi>o</mi><msub><mi>g</mi><mn>2</mn></msub><mi mathvariant="normal">∣</mi><mi>E</mi><mi mathvariant="normal">∣</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(|E|log_2|E|)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">o</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mord">∣</span><span class="mclose">)</span></span></span></span>，适合<code v-pre>边稀疏图</code></p>
</div></template>


