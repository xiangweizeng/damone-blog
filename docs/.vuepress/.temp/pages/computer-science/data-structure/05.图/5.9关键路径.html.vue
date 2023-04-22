<template><div><h1 id="_5-9-关键路径" tabindex="-1"><a class="header-anchor" href="#_5-9-关键路径" aria-hidden="true">#</a> 5.9 关键路径</h1>
<h2 id="_5-9-1-aoe网" tabindex="-1"><a class="header-anchor" href="#_5-9-1-aoe网" aria-hidden="true">#</a> 5.9.1 AOE网</h2>
<p><code v-pre>AOE网</code>（Activity On Edge NetWork，用<code v-pre>边表示活动</code>的网）：
<code v-pre>带权有向图</code>中，<code v-pre>顶点表示事件</code>，<code v-pre>有向边表示活动</code>，<code v-pre>边上的权值表示完成该活动的开销</code>。</p>
<figure><img src="/images/datastruct/uTools_1638194800008.png" alt="uTools_1638194800008" tabindex="0" loading="lazy"><figcaption>uTools_1638194800008</figcaption></figure>
<p>AOE网具有以下两个性质：</p>
<ul>
<li>①只有在某顶点所代表的事件发生后，从该顶点出发的各有向边所代表的活动才能开始；</li>
<li>② 只有在进入某顶点的各有向边所代表的活动都已结束时，该顶点所代表的事件才能发生。
另外，有些活动是可以并行进行的</li>
</ul>
<p>在AOE网中仅有一个入度为0的顶点，称为<code v-pre>开始顶点（源点）</code>，它表示整个工程的开始；
也仅有一个出度为0的顶点，称为<code v-pre>结束顶点（汇点）</code>，它表示整个工程的结束。</p>
<h2 id="_5-9-2-关键路径" tabindex="-1"><a class="header-anchor" href="#_5-9-2-关键路径" aria-hidden="true">#</a> 5.9.2 关键路径</h2>
<p><code v-pre>从源点到汇点</code>的<code v-pre>有向路径</code>可能有多条，所有路径中，具有<code v-pre>最大路径长度</code>的路径称为
<code v-pre>关键路径</code>，而把<code v-pre>关键路径上的活动</code>称为<code v-pre>关键活动</code></p>
<p><code v-pre>特性</code>：</p>
<ul>
<li>若关键活动耗时增加，则整个工程的工期将增长</li>
<li>缩短关键活动的时间，可以缩短整个工程的工期</li>
<li>当缩短到一定程度时，关键活动可能会变成非关键活动</li>
</ul>
<p>可能有多条关键路径，只提高一条关键路径上的关键活动速度并不能缩短整个工程的工期，只有加快那些包括在所有关键路径上的关键活动才能达到缩短工期的目的。</p>
<p><code v-pre>计算</code>：</p>
<ul>
<li>事件最早、最迟发生时间</li>
<li>活动最早、最迟开始时间</li>
<li>活动的时间余量=活动最迟开始-最早开始</li>
</ul>
<figure><img src="/images/datastruct/uTools_1638195067535.png" alt="uTools_1638195067535" tabindex="0" loading="lazy"><figcaption>uTools_1638195067535</figcaption></figure>
<figure><img src="/images/datastruct/uTools_1638195535394.png" alt="uTools_1638195535394" tabindex="0" loading="lazy"><figcaption>uTools_1638195535394</figcaption></figure>
<figure><img src="/images/datastruct/uTools_1638195638068.png" alt="uTools_1638195638068" tabindex="0" loading="lazy"><figcaption>uTools_1638195638068</figcaption></figure>
<figure><img src="/images/datastruct/uTools_1638195751296.png" alt="uTools_1638195751296" tabindex="0" loading="lazy"><figcaption>uTools_1638195751296</figcaption></figure>
<figure><img src="/images/datastruct/uTools_1638195723961.png" alt="uTools_1638195723961" tabindex="0" loading="lazy"><figcaption>uTools_1638195723961</figcaption></figure>
<figure><img src="/images/datastruct/uTools_1638195438535.png" alt="uTools_1638195438535" tabindex="0" loading="lazy"><figcaption>uTools_1638195438535</figcaption></figure>
</div></template>


