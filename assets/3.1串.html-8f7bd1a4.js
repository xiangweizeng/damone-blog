import{_ as n,N as s,S as a,Z as t}from"./framework-b23b3642.js";const p={},c=t(`<h1 id="_3-1-串-即字符串" tabindex="-1"><a class="header-anchor" href="#_3-1-串-即字符串" aria-hidden="true">#</a> 3.1. 串，即字符串</h1><h2 id="_3-1-1-串的定义" tabindex="-1"><a class="header-anchor" href="#_3-1-1-串的定义" aria-hidden="true">#</a> 3.1.1 串的定义</h2><p><code>串</code>是一种特殊的<code>线性表</code>，串的<code>数据对象</code>限定为<code>字符集</code></p><h2 id="_3-1-2-串的基本操作" tabindex="-1"><a class="header-anchor" href="#_3-1-2-串的基本操作" aria-hidden="true">#</a> 3.1.2 串的基本操作</h2><p><code>注</code>：参数代“&amp;”表示：方法运行完后，对参数修改的结果要<code>“带回来”</code></p><p>对数据的操作：创销，增删查改</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token function">StrAssign</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>τ chars<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//赋值操作。把串T赋值为chars</span>
<span class="token function">StrCopy</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>TS<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//复制操作。由串S复制得到串T。</span>
<span class="token function">StrEmpty</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//判空操作。若S为空串,则返回TRUE,否则返回 FALSE。</span>
<span class="token function">StrEngth</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//求串长。返回串S的元素个数</span>
<span class="token function">ClearString</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//清空操作。将S清为空串。</span>
<span class="token function">Destroystring</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//销毁串。将串S销毁(回收存储空间)。</span>
<span class="token function">Concat</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>TS1<span class="token punctuation">,</span> S2<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//串联接。用T返回由S1和S2联接而成的新串</span>
<span class="token function">SubString</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>sub<span class="token punctuation">,</span>S<span class="token punctuation">,</span> pos<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//求子串。用Sub返回串S的第pos个字符起长度为|en的子串。</span>
<span class="token function">ndex</span><span class="token punctuation">(</span>S<span class="token punctuation">,</span> T<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//定位操作。若主串S中存在与串T值相同的子串,则返回它在主串S中第一次出现的位置;否则函数值为0。</span>
<span class="token function">StrCompare</span><span class="token punctuation">(</span>S<span class="token punctuation">,</span>T<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//比较操作。若S&gt;T,则返回值&gt;0;若S=T,则返回值=0;若S&lt;T,则返回值&lt;0。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-1-3-存储结构" tabindex="-1"><a class="header-anchor" href="#_3-1-3-存储结构" aria-hidden="true">#</a> 3.1.3 存储结构</h2><p><code>顺序存储</code>和<code>链式存储</code></p>`,9),e=[c];function o(i,u){return s(),a("div",null,e)}const d=n(p,[["render",o],["__file","3.1串.html.vue"]]);export{d as default};
