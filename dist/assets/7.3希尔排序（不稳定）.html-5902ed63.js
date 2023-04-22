import{_ as a,N as t,S as p,U as s,a0 as n,Z as e}from"./framework-b23b3642.js";const o="/images/datastruct/uTools_1638366303933.png",l="/images/datastruct/849589-20180331170017421-364506073.gif",c="/images/datastruct/uTools_1638367624883.png",i={},u=s("h1",{id:"_7-3-希尔排序",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_7-3-希尔排序","aria-hidden":"true"},"#"),n(" 7.3 希尔排序")],-1),r=s("figure",null,[s("img",{src:o,alt:"uTools_1638366303933",tabindex:"0",loading:"lazy"}),s("figcaption",null,"uTools_1638366303933")],-1),m=s("p",null,[s("code",null,"希尔排序"),n("又叫"),s("code",null,"缩小增量排序"),n("。")],-1),d=s("p",null,[n("1959年Shell发明，第一个突破"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n^2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")")])])]),n("的排序算法，是"),s("code",null,"简单插入排序的改进版"),n("。它与插入排序的不同之处在于，它会"),s("code",null,"优先比较距离较远的元素"),n("。")],-1),k=e('<h2 id="_7-3-1-算法思想" tabindex="-1"><a class="header-anchor" href="#_7-3-1-算法思想" aria-hidden="true">#</a> 7.3.1 算法思想：</h2><p>先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，具体算法描述：</p><ul><li>选择一个增量序列t1，t2，…，tk，其中ti&gt;tj，tk=1；</li><li>按增量序列个数k，对序列进行k 趟排序；</li><li>每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。</li></ul><figure><img src="'+l+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="_7-3-2-代码实现" tabindex="-1"><a class="header-anchor" href="#_7-3-2-代码实现" aria-hidden="true">#</a> 7.3.2 代码实现：</h2><p>在简单插入排序外加了<code>步长变化</code></p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//希尔排序</span>
<span class="token keyword">void</span> <span class="token function">InsertSort</span><span class="token punctuation">(</span><span class="token keyword">int</span> A<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> d<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>d<span class="token operator">=</span>n<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span> d<span class="token operator">&gt;</span><span class="token number">1</span><span class="token punctuation">;</span> d<span class="token operator">=</span>d<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>     <span class="token comment">//步长变化</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span>d<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//将各元素插入已排好的序列中</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;</span>A<span class="token punctuation">[</span>i<span class="token operator">-</span>d<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>        <span class="token comment">//若A[i]的关键字小于前驱</span>
            A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>        <span class="token comment">//复制为哨兵，A[0]作为哨兵</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span>j<span class="token operator">=</span>i<span class="token operator">-</span>d<span class="token punctuation">;</span> j<span class="token operator">&gt;</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">&lt;</span>A<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span> j<span class="token operator">-=</span>d<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//从后往前查找待插入位置</span>
                A<span class="token punctuation">[</span>j<span class="token operator">+</span>d<span class="token punctuation">]</span> <span class="token operator">=</span> A<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">//所有大于A[0]的都后移</span>
            <span class="token punctuation">}</span>
            A<span class="token punctuation">[</span>j<span class="token operator">+</span>d<span class="token punctuation">]</span> <span class="token operator">=</span> A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>      <span class="token comment">//复制到插入位置</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-3-3-算法效率分析" tabindex="-1"><a class="header-anchor" href="#_7-3-3-算法效率分析" aria-hidden="true">#</a> 7.3.3 算法效率分析</h2>`,8),h=s("p",null,[s("code",null,"空间复杂度"),n("="),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])]),n("，因为需要的辅助变量为int d，i，j，")],-1),_=s("p",null,[n("时间复杂度: 无法计算，"),s("code",null,"时间复杂度"),n("大概为="),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"1.3")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n^{1.3})")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1.3")])])])])])])])]),s("span",{class:"mclose"},")")])])])],-1),g=s("p",null,[n("算法稳定性："),s("code",null,"不稳定")],-1),v=s("p",null,[s("code",null,"仅适用于顺序表，不适用于链表")],-1),b=s("figure",null,[s("img",{src:c,alt:"uTools_1638367624883",tabindex:"0",loading:"lazy"}),s("figcaption",null,"uTools_1638367624883")],-1),f=[u,r,m,d,k,h,_,g,v,b];function x(y,w){return t(),p("div",null,f)}const j=a(i,[["render",x],["__file","7.3希尔排序（不稳定）.html.vue"]]);export{j as default};
