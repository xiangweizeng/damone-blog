import{_ as t,N as p,S as e,Z as a,U as n,a0 as s}from"./framework-72158890.js";const o="/damone-blog/images/datastruct/1638172106501.png",c="/damone-blog/images/datastruct/1638178148141.png",l="/damone-blog/images/datastruct/1638175026752.png",i="/damone-blog/images/datastruct/1638175026747.png",u={},r=a('<h1 id="_5-6-最短路径" tabindex="-1"><a class="header-anchor" href="#_5-6-最短路径" aria-hidden="true">#</a> 5.6 最短路径</h1><figure><img src="'+o+'" alt="1638172106501" tabindex="0" loading="lazy"><figcaption>1638172106501</figcaption></figure><figure><img src="'+c+`" alt="1638178148141" tabindex="0" loading="lazy"><figcaption>1638178148141</figcaption></figure><h2 id="_5-6-1-bfs算法-无权图" tabindex="-1"><a class="header-anchor" href="#_5-6-1-bfs算法-无权图" aria-hidden="true">#</a> 5.6.1 BFS算法（无权图）</h2><p>由<code>广度优先算法</code>求最短路径：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//图的广度优先搜索（用图的邻接矩阵、领接表都可以，只是FirstNeighbor和NextNeighbor函数实现不一样）</span>
bool visited<span class="token punctuation">[</span>MAX_VERTEX_NUM<span class="token punctuation">]</span><span class="token punctuation">;</span>     <span class="token comment">//访问标记数组</span>
<span class="token keyword">void</span> <span class="token function">BFSTraverse</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">)</span><span class="token punctuation">{</span>        <span class="token comment">//对图G进行广度优先搜索</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>v<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> v<span class="token operator">&lt;</span>G<span class="token punctuation">.</span>vexnum<span class="token punctuation">;</span> <span class="token operator">++</span>v<span class="token punctuation">)</span><span class="token punctuation">{</span>
        visited<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> false<span class="token punctuation">;</span>       <span class="token comment">//初始化访问标记数组</span>
    <span class="token punctuation">}</span>
    <span class="token function">InitQueue</span><span class="token punctuation">(</span>Q<span class="token punctuation">)</span><span class="token punctuation">;</span>                 <span class="token comment">//初始化辅助队列Q</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>v<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> v<span class="token operator">&lt;</span>G<span class="token punctuation">.</span>vexnum<span class="token punctuation">;</span> <span class="token operator">++</span>v<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>          <span class="token comment">//对每个连通分量调用一次BFS</span>
            <span class="token function">BFS</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>             <span class="token comment">//vi没访问过，从vi开始BFS</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">BFS</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">,</span> <span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">visit</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>             <span class="token comment">//访问初始顶点v</span>
    visited<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> true<span class="token punctuation">;</span>    <span class="token comment">//对v做已访问标记</span>
    <span class="token function">EnQueue</span><span class="token punctuation">(</span>Q<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//顶点v入队</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>Q<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>   <span class="token comment">//队列不空则循环</span>
        <span class="token function">DeQueue</span><span class="token punctuation">(</span>Q<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//顶点v出队</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>w<span class="token operator">=</span><span class="token function">FirstNeighbor</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span> w<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token punctuation">;</span> w<span class="token operator">=</span><span class="token function">NextNeighbor</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span>v<span class="token punctuation">,</span>w<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//检测v所有的邻接顶点</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">[</span>w<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>          <span class="token comment">//w为v尚未访问的邻接顶点</span>
				<span class="token function">visit</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">;</span>             <span class="token comment">//访问顶点w</span>
    			visited<span class="token punctuation">[</span>w<span class="token punctuation">]</span> <span class="token operator">=</span> true<span class="token punctuation">;</span>    <span class="token comment">//对w做已访问标记</span>
                <span class="token function">EnQueue</span><span class="token punctuation">(</span>Q<span class="token punctuation">,</span> w<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//顶点w入队</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现方式： 用两个数组： ①<code>d数组</code>：记录各点的路径长度。 ②<code>path数组</code>：记录各点的前驱。</p><p><code>时间复杂度</code>：</p>`,8),m=n("p",null,[n("code",null,"邻接矩阵"),s("="),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",{mathvariant:"normal"},"∣"),n("mi",null,"V"),n("msup",null,[n("mi",{mathvariant:"normal"},"∣"),n("mn",null,"2")]),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(|V|^2)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"∣"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"V"),n("span",{class:"mord"},[n("span",{class:"mord"},"∣"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"2")])])])])])])]),n("span",{class:"mclose"},")")])])]),s("，"),n("code",null,"邻接表"),s("="),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",{mathvariant:"normal"},"∣"),n("mi",null,"V"),n("mi",{mathvariant:"normal"},"∣"),n("mo",null,"+"),n("mi",{mathvariant:"normal"},"∣"),n("mi",null,"E"),n("mi",{mathvariant:"normal"},"∣"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(|V|+|E|)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"∣"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"V"),n("span",{class:"mord"},"∣"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"+"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord"},"∣"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"E"),n("span",{class:"mord"},"∣"),n("span",{class:"mclose"},")")])])])],-1),k=a(`<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//用BFS求顶点U到其它顶点的最短路径（只改了visit函数调用的两行）</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">INFINITY</span> <span class="token expression"><span class="token number">4294967295</span>       </span><span class="token comment">//宏定义常量“无穷”，4294967295为最大的int值</span></span>
bool visited<span class="token punctuation">[</span>MAX_VERTEX_NUM<span class="token punctuation">]</span><span class="token punctuation">;</span>     <span class="token comment">//访问标记数组</span>
<span class="token keyword">void</span> <span class="token function">BFS</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">,</span> <span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//d[i]表示从u到i结点的最短路径</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>G<span class="token punctuation">.</span>vexnum<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span><span class="token punctuation">{</span>
        d<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> INFINITY<span class="token punctuation">;</span>  <span class="token comment">//初始化路径长度</span>
        path<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>     <span class="token comment">//最短路径从哪个顶点过来</span>
    <span class="token punctuation">}</span>
    d<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>             <span class="token comment">//从u开始</span>
    visited<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> true<span class="token punctuation">;</span>    <span class="token comment">//对v做已访问标记</span>
    <span class="token function">EnQueue</span><span class="token punctuation">(</span>Q<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//顶点v入队</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>Q<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>   <span class="token comment">//队列不空则循环</span>
        <span class="token function">DeQueue</span><span class="token punctuation">(</span>Q<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//顶点v出队</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>w<span class="token operator">=</span><span class="token function">FirstNeighbor</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span> w<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token punctuation">;</span> w<span class="token operator">=</span><span class="token function">NextNeighbor</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span>v<span class="token punctuation">,</span>w<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//检测v所有的邻接顶点</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">[</span>w<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>          <span class="token comment">//w为v尚未访问的邻接顶点</span>
				d<span class="token punctuation">[</span>w<span class="token punctuation">]</span> <span class="token operator">=</span> d<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>      <span class="token comment">//路径长度加1</span>
                path<span class="token punctuation">[</span>w<span class="token punctuation">]</span> <span class="token operator">=</span> u<span class="token punctuation">;</span>          <span class="token comment">//最短路径应从u到w</span>
    			visited<span class="token punctuation">[</span>w<span class="token punctuation">]</span> <span class="token operator">=</span> true<span class="token punctuation">;</span>    <span class="token comment">//对w做已访问标记</span>
                <span class="token function">EnQueue</span><span class="token punctuation">(</span>Q<span class="token punctuation">,</span> w<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//顶点w入队</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-6-2-dijkstra算法-迪杰斯特拉算法-带权图、无权图" tabindex="-1"><a class="header-anchor" href="#_5-6-2-dijkstra算法-迪杰斯特拉算法-带权图、无权图" aria-hidden="true">#</a> 5.6.2 Dijkstra算法（迪杰斯特拉算法）（带权图、无权图）</h2><p><code>BFS算法的局限性：不适用带权图</code></p><p>实现方式： 用两个数组：</p><ul><li>①<code>final数组</code>：记录各顶点是否已找到最短路径。</li><li>②<code>dist数组</code>：记录各点的最短路径长度。</li><li>③<code>path数组</code>：记录各点路径上的前驱。</li></ul>`,5),d=n("p",null,[s("每轮遍历"),n("strong",null,"final"),s("数组，第一遍找到"),n("strong",null,"dist"),s("最低的顶点，然后加入；第二遍循环遍历更新各点的"),n("strong",null,"dist"),s("值和"),n("strong",null,"path"),s("值。 则"),n("code",null,"时间复杂度"),s("="),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",{mathvariant:"normal"},"∣"),n("mi",null,"V"),n("msup",null,[n("mi",{mathvariant:"normal"},"∣"),n("mn",null,"2")]),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(|V|^2)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"∣"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"V"),n("span",{class:"mord"},[n("span",{class:"mord"},"∣"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"2")])])])])])])]),n("span",{class:"mclose"},")")])])])],-1),v=a('<p><code>Dijkstra算法的局限性：不适用负权值带权图</code>。</p><figure><img src="'+l+'" alt="1638175026752" tabindex="0" loading="lazy"><figcaption>1638175026752</figcaption></figure><figure><img src="'+i+'" alt="1638175026747" tabindex="0" loading="lazy"><figcaption>1638175026747</figcaption></figure><h2 id="_5-6-3-floyd算法-弗洛伊德算法-带权图、无权图" tabindex="-1"><a class="header-anchor" href="#_5-6-3-floyd算法-弗洛伊德算法-带权图、无权图" aria-hidden="true">#</a> 5.6.3 Floyd算法（弗洛伊德算法）（带权图、无权图）</h2><p>实现方式： 用两个二维数组：</p><ul><li>①<code>A数组</code>：记录各顶点之间目前的最短路径长度</li><li>②<code>path数组</code>：记录两点之间的第一个中转点。</li></ul>',6),h=n("p",null,[s("以某一点为中转点遍历二维数组，更新两个数组，将所有点作为中转点都遍历一遍，形成三重循环 则"),n("code",null,"时间复杂度"),s("="),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",{mathvariant:"normal"},"∣"),n("mi",null,"V"),n("msup",null,[n("mi",{mathvariant:"normal"},"∣"),n("mn",null,"3")]),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(|V|^3)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"∣"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"V"),n("span",{class:"mord"},[n("span",{class:"mord"},"∣"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"3")])])])])])])]),n("span",{class:"mclose"},")")])])]),s("，"),n("code",null,"空间复杂度"),s("="),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",{mathvariant:"normal"},"∣"),n("mi",null,"V"),n("msup",null,[n("mi",{mathvariant:"normal"},"∣"),n("mn",null,"2")]),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(|V|^2)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"∣"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"V"),n("span",{class:"mord"},[n("span",{class:"mord"},"∣"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"2")])])])])])])]),n("span",{class:"mclose"},")")])])]),s("。")],-1),g=a(`<p><code>Floyd算法的局限性：不适用负权值带权图</code>。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//省略初始化A和path数组</span>
<span class="token comment">//Floyd算法的核心</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> k<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>          <span class="token comment">//考虑以Vk作为中转点</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>      <span class="token comment">//遍历整个矩阵，i为行号，j为列号</span>
    	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> ij<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        	<span class="token keyword">if</span><span class="token punctuation">(</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">+</span> A<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>    <span class="token comment">//以Vk作为中转点的路径更短</span>
                A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">+</span> A<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>    <span class="token comment">//更新最短路径长度</span>
                path<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> k<span class="token punctuation">;</span>                 <span class="token comment">//中转点</span>
            <span class="token punctuation">}</span>
    	<span class="token punctuation">}</span> 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),b=[r,m,k,d,v,h,g];function f(y,w){return p(),e("div",null,b)}const x=t(u,[["render",f],["__file","5.6最短路径.html.vue"]]);export{x as default};
