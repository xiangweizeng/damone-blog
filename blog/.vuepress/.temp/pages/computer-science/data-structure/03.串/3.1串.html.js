export const data = JSON.parse("{\"key\":\"v-f3ef2ce0\",\"path\":\"/computer-science/data-structure/03.%E4%B8%B2/3.1%E4%B8%B2.html\",\"title\":\"3.1. 串，即字符串\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"3.1. 串，即字符串 3.1.1 串的定义 串是一种特殊的线性表，串的数据对象限定为字符集 3.1.2 串的基本操作 注：参数代“&amp;”表示：方法运行完后，对参数修改的结果要“带回来” 对数据的操作：创销，增删查改 StrAssign(&amp;τ chars);//赋值操作。把串T赋值为chars StrCopy(&amp;TS); //复制操作。由串S复制得到串T。 StrEmpty(S); //判空操作。若S为空串,则返回TRUE,否则返回 FALSE。 StrEngth(S); //求串长。返回串S的元素个数 ClearString(&amp;S); //清空操作。将S清为空串。 Destroystring(&amp;S); //销毁串。将串S销毁(回收存储空间)。 Concat(&amp;TS1, S2); //串联接。用T返回由S1和S2联接而成的新串 SubString(&amp;sub,S, pos, len);\\t//求子串。用Sub返回串S的第pos个字符起长度为|en的子串。 ndex(S, T); //定位操作。若主串S中存在与串T值相同的子串,则返回它在主串S中第一次出现的位置;否则函数值为0。 StrCompare(S,T); //比较操作。若S&gt;T,则返回值&gt;0;若S=T,则返回值=0;若S&lt;T,则返回值&lt;0。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/xiangweizeng/damone-blog/computer-science/data-structure/03.%E4%B8%B2/3.1%E4%B8%B2.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Damone's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"3.1. 串，即字符串\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"3.1. 串，即字符串 3.1.1 串的定义 串是一种特殊的线性表，串的数据对象限定为字符集 3.1.2 串的基本操作 注：参数代“&amp;”表示：方法运行完后，对参数修改的结果要“带回来” 对数据的操作：创销，增删查改 StrAssign(&amp;τ chars);//赋值操作。把串T赋值为chars StrCopy(&amp;TS); //复制操作。由串S复制得到串T。 StrEmpty(S); //判空操作。若S为空串,则返回TRUE,否则返回 FALSE。 StrEngth(S); //求串长。返回串S的元素个数 ClearString(&amp;S); //清空操作。将S清为空串。 Destroystring(&amp;S); //销毁串。将串S销毁(回收存储空间)。 Concat(&amp;TS1, S2); //串联接。用T返回由S1和S2联接而成的新串 SubString(&amp;sub,S, pos, len);\\t//求子串。用Sub返回串S的第pos个字符起长度为|en的子串。 ndex(S, T); //定位操作。若主串S中存在与串T值相同的子串,则返回它在主串S中第一次出现的位置;否则函数值为0。 StrCompare(S,T); //比较操作。若S&gt;T,则返回值&gt;0;若S=T,则返回值=0;若S&lt;T,则返回值&lt;0。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"damone\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"3.1. 串，即字符串\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"damone\\\",\\\"url\\\":\\\"https://github.com/xiangweizeng\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"3.1.1 串的定义\",\"slug\":\"_3-1-1-串的定义\",\"link\":\"#_3-1-1-串的定义\",\"children\":[]},{\"level\":2,\"title\":\"3.1.2 串的基本操作\",\"slug\":\"_3-1-2-串的基本操作\",\"link\":\"#_3-1-2-串的基本操作\",\"children\":[]},{\"level\":2,\"title\":\"3.1.3 存储结构\",\"slug\":\"_3-1-3-存储结构\",\"link\":\"#_3-1-3-存储结构\",\"children\":[]}],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":1.06,\"words\":318},\"filePathRelative\":\"computer-science/data-structure/03.串/3.1串.md\",\"excerpt\":\"<h1> 3.1. 串，即字符串</h1>\\n<h2> 3.1.1 串的定义</h2>\\n<p><code>串</code>是一种特殊的<code>线性表</code>，串的<code>数据对象</code>限定为<code>字符集</code></p>\\n<h2> 3.1.2 串的基本操作</h2>\\n<p><code>注</code>：参数代“&amp;”表示：方法运行完后，对参数修改的结果要<code>“带回来”</code></p>\\n<p>对数据的操作：创销，增删查改</p>\\n<div class=\\\"language-c line-numbers-mode\\\" data-ext=\\\"c\\\"><pre class=\\\"language-c\\\"><code><span class=\\\"token function\\\">StrAssign</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token operator\\\">&amp;</span>τ chars<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span><span class=\\\"token comment\\\">//赋值操作。把串T赋值为chars</span>\\n<span class=\\\"token function\\\">StrCopy</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token operator\\\">&amp;</span>TS<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>       <span class=\\\"token comment\\\">//复制操作。由串S复制得到串T。</span>\\n<span class=\\\"token function\\\">StrEmpty</span><span class=\\\"token punctuation\\\">(</span>S<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>        <span class=\\\"token comment\\\">//判空操作。若S为空串,则返回TRUE,否则返回 FALSE。</span>\\n<span class=\\\"token function\\\">StrEngth</span><span class=\\\"token punctuation\\\">(</span>S<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>        <span class=\\\"token comment\\\">//求串长。返回串S的元素个数</span>\\n<span class=\\\"token function\\\">ClearString</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token operator\\\">&amp;</span>S<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>    <span class=\\\"token comment\\\">//清空操作。将S清为空串。</span>\\n<span class=\\\"token function\\\">Destroystring</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token operator\\\">&amp;</span>S<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>  <span class=\\\"token comment\\\">//销毁串。将串S销毁(回收存储空间)。</span>\\n<span class=\\\"token function\\\">Concat</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token operator\\\">&amp;</span>TS1<span class=\\\"token punctuation\\\">,</span> S2<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>   <span class=\\\"token comment\\\">//串联接。用T返回由S1和S2联接而成的新串</span>\\n<span class=\\\"token function\\\">SubString</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token operator\\\">&amp;</span>sub<span class=\\\"token punctuation\\\">,</span>S<span class=\\\"token punctuation\\\">,</span> pos<span class=\\\"token punctuation\\\">,</span> len<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\t<span class=\\\"token comment\\\">//求子串。用Sub返回串S的第pos个字符起长度为|en的子串。</span>\\n<span class=\\\"token function\\\">ndex</span><span class=\\\"token punctuation\\\">(</span>S<span class=\\\"token punctuation\\\">,</span> T<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>         <span class=\\\"token comment\\\">//定位操作。若主串S中存在与串T值相同的子串,则返回它在主串S中第一次出现的位置;否则函数值为0。</span>\\n<span class=\\\"token function\\\">StrCompare</span><span class=\\\"token punctuation\\\">(</span>S<span class=\\\"token punctuation\\\">,</span>T<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>    <span class=\\\"token comment\\\">//比较操作。若S&gt;T,则返回值&gt;0;若S=T,则返回值=0;若S&lt;T,则返回值&lt;0。</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
