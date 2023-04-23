import{_ as l,N as t,S as e,Z as n,U as s,a0 as a}from"./framework-b23b3642.js";const m="/damone-blog/images/data-structure/20180801094313847.jfif",c={},i=n('<h1 id="_4-1-树" tabindex="-1"><a class="header-anchor" href="#_4-1-树" aria-hidden="true">#</a> 4.1 树</h1><h2 id="_4-1-1-树的定义" tabindex="-1"><a class="header-anchor" href="#_4-1-1-树的定义" aria-hidden="true">#</a> 4.1.1 树的定义：</h2><p><code>树</code>是η(n≥0)个结点的有限集合,n≡o时,称为空树,这是一种特殊情况。在任意一棵非空树中应满足: ①有且仅有一个特定的称为根的<code>结点</code>。 ②当n&gt;1时,其余结点可分为m(m&gt;0)个互不相交的有限集合T1,T2…,Tn,其中每个集合本身又是一棵树,并且称为根结点的<code>子树</code>。</p><figure><img src="'+m+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="_4-1-2-树的术语" tabindex="-1"><a class="header-anchor" href="#_4-1-2-树的术语" aria-hidden="true">#</a> 4.1.2 树的术语</h2><p><code>父结点</code>：若一个结点含有子结点，则这个结点称为其子结点的父结点 <code>子结点</code>：一个结点含有的子树的根结点称为该结点的子结点 <code>兄弟结点</code>：拥有共同父结点的结点互称为兄弟结点 <code>祖先</code>：对任意结点x，从根结点到结点x的所有结点都是x的祖先（结点x也是自己的祖先） <code>后代</code>：对任意结点x，从结点x到叶子结点的所有结点都是x的后代（结点x也是自己的后代）</p><p><code>两结点的路径</code>：对任意结点x，从结点x到结点y的<code>从上到下</code>的路 <code>两结点的路径长度</code>：对任意结点x，从结点x到结点y经过的边数</p><p><code>结点的层次</code>：对任意结点x，从根结点到结点x的<code>从上到下</code>经过的边数 <code>结点高度</code>：对任意结点x，叶子结点到x结点的路径长度就是结点x的<code>高度</code><code>树的深度</code>：一棵树中结点的最大深度就是树的深度，也称为<code>高度</code></p><p><code>结点的度</code>：有几个子结点（分支） <code>树的度</code>：各结点的度的最大值 <code>叶子结点</code>：度为零的结点就是叶子结点</p><p><code>森林</code>：m颗互不相交的树构成的集合就是森林</p><h2 id="_4-2-3-树的分类" tabindex="-1"><a class="header-anchor" href="#_4-2-3-树的分类" aria-hidden="true">#</a> 4.2.3 树的分类</h2><p>有序树和无序树</p><p><code>有序树</code>一一逻辑上看，树中结点的各子树从左至右是有次序的，不能互换</p><p><code>无序树</code>一一逻辑上看，树中结点的各子树从左至右是无次序的，可以互换</p><h2 id="_4-2-4-树的性质" tabindex="-1"><a class="header-anchor" href="#_4-2-4-树的性质" aria-hidden="true">#</a> 4.2.4 树的性质</h2><p>考点1：结点数=总度数+1</p><p>考点2：度为m的树和m叉树 <code>度为m的树</code>：至少有一个结点度=m，一定是非空树 <code>m叉树</code>：允许所有结点的度都≤m，可以是空树</p>',17),p=s("p",null,[a("考点3：度为m的树第i层至多有几个结点？ "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"m"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"−"),s("mn",null,"1")])])]),s("annotation",{encoding:"application/x-tex"},"m^{i-1}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8247em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"m"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8247em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},"1")])])])])])])])])])])])],-1),o=s("p",null,[a("考点4：高度为h的m叉树至多有几个结点？ "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"m"),s("mi",null,"h")]),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mi",null,"m"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])])]),s("annotation",{encoding:"application/x-tex"},"\\frac{(m^{h}-1)}{(m-1)}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.6539em","vertical-align":"-0.52em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.1339em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mathnormal mtight"},"m"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},"1"),s("span",{class:"mclose mtight"},")")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.485em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"m"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.927em"}},[s("span",{style:{top:"-2.931em","margin-right":"0.0714em"}},[s("span",{class:"pstrut",style:{height:"2.5em"}}),s("span",{class:"sizing reset-size3 size1 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"h")])])])])])])])]),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},"1"),s("span",{class:"mclose mtight"},")")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.52em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])],-1),h=s("p",null,[a("考点5： 高度为h的m叉树至少有多少个结点？ "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"h")]),s("annotation",{encoding:"application/x-tex"},"h")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"h")])])])],-1),r=s("p",null,[a("高度为h、度为m的树至少有多少个结点？ "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"h"),s("mo",null,"+"),s("mi",null,"m"),s("mo",null,"−"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"h+m-1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7778em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"m"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])],-1),d=s("p",null,[a("考点6：具有n个结点的m叉树的最小高度为？ "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"l"),s("mi",null,"o"),s("msub",null,[s("mi",null,"g"),s("mi",null,"m")]),s("mo",{stretchy:"false"},"⌈"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},"("),s("mi",null,"m"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},"⌉")]),s("annotation",{encoding:"application/x-tex"},"log_m\\lceil (n(m-1)+1) \\rceil")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"m")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mopen"},"⌈("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"m"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")⌉")])])])],-1),g=[i,p,o,h,r,d];function u(x,y){return t(),e("div",null,g)}const f=l(c,[["render",u],["__file","4.1树.html.vue"]]);export{f as default};
