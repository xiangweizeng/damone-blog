import{_ as n}from"./uTools_1638450353573-2c966b1f.js";import{_ as t,N as l,S as e,Z as p,U as s,a0 as a}from"./framework-b23b3642.js";const o="/images/datastruct/uTools_1638451646054.png",c="/images/datastruct/849589-20171015230936371-1413523412.gif",i={},m=p('<h1 id="_7-5-快速排序" tabindex="-1"><a class="header-anchor" href="#_7-5-快速排序" aria-hidden="true">#</a> 7.5 快速排序</h1><figure><img src="'+n+'" alt="uTools_1638450353573" tabindex="0" loading="lazy"><figcaption>uTools_1638450353573</figcaption></figure><figure><img src="'+o+'" alt="uTools_1638451646054" tabindex="0" loading="lazy"><figcaption>uTools_1638451646054</figcaption></figure><p><code>快速排序</code>的基本思想：通过一趟排序将待排记录<code>分隔成独立的两部分</code>，其中一部分记录的关键字均比另一部分的关键字小，则<code>可分别对这两部分记录继续进行排序</code>，以达到整个序列有序。</p><p><code>确定中间数的位置</code></p><h2 id="_7-5-1-算法思想" tabindex="-1"><a class="header-anchor" href="#_7-5-1-算法思想" aria-hidden="true">#</a> 7.5.1 算法思想：</h2><p>快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：</p><ul><li>从数列中挑出一个元素，称为 “基准”（pivot）；</li><li>重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；</li><li>递归地（recursive）把小于基准值元素的子数列和大于</li></ul><figure><img src="'+c+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="_7-5-2-代码实现" tabindex="-1"><a class="header-anchor" href="#_7-5-2-代码实现" aria-hidden="true">#</a> 7.5.2 代码实现：</h2><p>将第一个作为枢轴，后面的元素与枢轴比较，一此low，一high比较，low的大则放到high处，high的小则放到low处，直到low=high，找到枢轴位置。</p><p>按枢轴分成两部分，分别做上面的方法，以此类推（递归）。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//用第一个元素将待排序序列划分成左右两个部分</span>
<span class="token keyword">int</span> <span class="token function">Partition</span><span class="token punctuation">(</span><span class="token keyword">int</span> A<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">int</span> low<span class="token punctuation">,</span><span class="token keyword">int</span> high<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> pivot <span class="token operator">=</span> A<span class="token punctuation">[</span>Low<span class="token punctuation">]</span><span class="token punctuation">;</span>    <span class="token comment">//第一个元素作为枢轴</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>low <span class="token operator">&lt;</span> high<span class="token punctuation">)</span><span class="token punctuation">{</span>     <span class="token comment">//用10w、high搜索枢轴的最终位置</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>low<span class="token operator">&lt;</span>high <span class="token operator">&amp;&amp;</span> A<span class="token punctuation">[</span>high<span class="token punctuation">]</span><span class="token operator">&gt;=</span>pivot <span class="token punctuation">)</span> <span class="token operator">--</span>high<span class="token punctuation">;</span>
        A<span class="token punctuation">[</span>Low<span class="token punctuation">]</span> <span class="token operator">=</span> A<span class="token punctuation">[</span>high<span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">//比枢轴小的元素移动到左端</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>low<span class="token operator">&lt;</span>high <span class="token operator">&amp;&amp;</span> A<span class="token punctuation">[</span>Low<span class="token punctuation">]</span><span class="token operator">&lt;=</span>pivot）<span class="token operator">++</span>low<span class="token punctuation">;</span>
        A<span class="token punctuation">[</span>high<span class="token punctuation">]</span> <span class="token operator">=</span> A<span class="token punctuation">[</span>low<span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">//比枢轴大的元素移动到右端</span>
	<span class="token punctuation">}</span>
	A<span class="token punctuation">[</span>low<span class="token punctuation">]</span> <span class="token operator">=</span> pivot<span class="token punctuation">;</span>        <span class="token comment">//枢轴元素存放到最终位置</span>
	<span class="token keyword">return</span> low<span class="token punctuation">;</span>            <span class="token comment">//返回存放枢轴的最终位置</span>
<span class="token punctuation">}</span>
<span class="token comment">//快速排序</span>
<span class="token keyword">void</span> <span class="token function">QuickSort</span><span class="token punctuation">(</span><span class="token keyword">int</span> A<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">int</span> low<span class="token punctuation">,</span><span class="token keyword">int</span> high<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>low<span class="token operator">&lt;</span>high<span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//递归跳出的条件</span>
		<span class="token keyword">int</span> pivotpos <span class="token operator">=</span><span class="token function">Partition</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span>Low<span class="token punctuation">,</span>high<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//划分</span>
		<span class="token function">QuickSort</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span>low<span class="token punctuation">,</span>pivotpos<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//划分左子表</span>
		<span class="token function">QuickSort</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span>pivotpos<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>high<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//划分右子表</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-5-3-算法效率分析" tabindex="-1"><a class="header-anchor" href="#_7-5-3-算法效率分析" aria-hidden="true">#</a> 7.5.3 算法效率分析</h2><p>与递归深度有关</p>`,15),r=s("p",null,[s("code",null,"空间复杂度"),a("="),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mtext",null,"递归深度"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(递归深度)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord cjk_fallback"},"递归深度"),s("span",{class:"mclose"},")")])])])],-1),u=s("ul",null,[s("li",null,[a("最好空间复杂度="),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"l"),s("mi",null,"o"),s("msub",null,[s("mi",null,"g"),s("mn",null,"2")]),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(log_2n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])])]),s("li",null,[a("最坏 空间复杂度="),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])])])],-1),h=s("p",null,[s("code",null,"时间复杂度"),a("="),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",null,"∗"),s("mtext",null,"递归深度"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n*递归深度)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord cjk_fallback"},"递归深度"),s("span",{class:"mclose"},")")])])])],-1),d=s("ul",null,[s("li",null,[a("最好时间复杂度="),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mi",null,"l"),s("mi",null,"o"),s("msub",null,[s("mi",null,"g"),s("mn",null,"2")]),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(nlog_2n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])])]),s("li",null,[a("最坏时间复杂度="),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n^2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")")])])])]),s("li",null,[a("平均时间复杂度="),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mi",null,"l"),s("mi",null,"o"),s("msub",null,[s("mi",null,"g"),s("mn",null,"2")]),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(nlog_2n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])])])],-1),k=s("p",null,[a("算法稳定性："),s("code",null,"不稳定")],-1),g=[m,r,u,h,d,k];function v(w,y){return l(),e("div",null,g)}const f=t(i,[["render",v],["__file","7.5快速排序（不稳定）.html.vue"]]);export{f as default};
