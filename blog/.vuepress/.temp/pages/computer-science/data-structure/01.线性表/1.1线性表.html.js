export const data = JSON.parse("{\"key\":\"v-17056428\",\"path\":\"/computer-science/data-structure/01.%E7%BA%BF%E6%80%A7%E8%A1%A8/1.1%E7%BA%BF%E6%80%A7%E8%A1%A8.html\",\"title\":\"1.1 线性表\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"1.1 线性表\",\"category\":[\"计算机科学\",\"数据结构\"],\"description\":\"线性表 一、线性表的定义: 线性表是n个具有相同特性的数据元素的有限序列。 二、线性表的基本操作 注：参数代“&amp;”表示引用，作用相当于指针，但更安全 对数据的操作：创销，增删查改 InitList(&amp;L); //初始化表：构造一个空的线性表L，分配内存空间 DestoryList(&amp;L); //销毁操作：销毁线性表，并释放线性表L所占用的内存空间 ListInsert(&amp;L,i,e); //插入操作：在表L中第i个位置上查入指定元素e ListDelete(&amp;L,i,&amp;e); //删除操作：删除表L中第i个位置的元素，/*并用e反回删除元素的值*/ LocateElem(L,e); //按值查找操作 GetElem(L,i); //按位查找操作 //其它常用操作 Length(L); //求表长 Print(L); //输出操作 Empty(L); //判空操作\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/xiangweizeng/damone-blog/computer-science/data-structure/01.%E7%BA%BF%E6%80%A7%E8%A1%A8/1.1%E7%BA%BF%E6%80%A7%E8%A1%A8.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Damone's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"1.1 线性表\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"线性表 一、线性表的定义: 线性表是n个具有相同特性的数据元素的有限序列。 二、线性表的基本操作 注：参数代“&amp;”表示引用，作用相当于指针，但更安全 对数据的操作：创销，增删查改 InitList(&amp;L); //初始化表：构造一个空的线性表L，分配内存空间 DestoryList(&amp;L); //销毁操作：销毁线性表，并释放线性表L所占用的内存空间 ListInsert(&amp;L,i,e); //插入操作：在表L中第i个位置上查入指定元素e ListDelete(&amp;L,i,&amp;e); //删除操作：删除表L中第i个位置的元素，/*并用e反回删除元素的值*/ LocateElem(L,e); //按值查找操作 GetElem(L,i); //按位查找操作 //其它常用操作 Length(L); //求表长 Print(L); //输出操作 Empty(L); //判空操作\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"damone\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"1.1 线性表\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"damone\\\",\\\"url\\\":\\\"https://github.com/xiangweizeng\\\"}]}\"]]},\"headers\":[{\"level\":3,\"title\":\"一、线性表的定义:\",\"slug\":\"一、线性表的定义\",\"link\":\"#一、线性表的定义\",\"children\":[]},{\"level\":3,\"title\":\"二、线性表的基本操作\",\"slug\":\"二、线性表的基本操作\",\"link\":\"#二、线性表的基本操作\",\"children\":[]},{\"level\":3,\"title\":\"三、存储结构\",\"slug\":\"三、存储结构\",\"link\":\"#三、存储结构\",\"children\":[]},{\"level\":3,\"title\":\"四、线性表分类\",\"slug\":\"四、线性表分类\",\"link\":\"#四、线性表分类\",\"children\":[]}],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":1.04,\"words\":312},\"filePathRelative\":\"computer-science/data-structure/01.线性表/1.1线性表.md\",\"excerpt\":\"<figure><img src=\\\"/images/datastruct/1.png\\\" alt=\\\"线性表\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption>线性表</figcaption></figure>\\n<h3> 一、线性表的定义:</h3>\\n<p><code>线性表</code>是n个具有相同特性的数据元素的有限序列。</p>\\n<h3> 二、线性表的基本操作</h3>\\n<p><code>注</code>：参数代“&amp;”表示引用，作用相当于指针，但更安全</p>\\n<p>对数据的操作：创销，增删查改</p>\\n<div class=\\\"language-c line-numbers-mode\\\" data-ext=\\\"c\\\"><pre class=\\\"language-c\\\"><code><span class=\\\"token function\\\">InitList</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token operator\\\">&amp;</span>L<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>     <span class=\\\"token comment\\\">//初始化表：构造一个空的线性表L，分配内存空间</span>\\n<span class=\\\"token function\\\">DestoryList</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token operator\\\">&amp;</span>L<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>  <span class=\\\"token comment\\\">//销毁操作：销毁线性表，并释放线性表L所占用的内存空间</span>\\n\\n<span class=\\\"token function\\\">ListInsert</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token operator\\\">&amp;</span>L<span class=\\\"token punctuation\\\">,</span>i<span class=\\\"token punctuation\\\">,</span>e<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>  <span class=\\\"token comment\\\">//插入操作：在表L中第i个位置上查入指定元素e</span>\\n<span class=\\\"token function\\\">ListDelete</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token operator\\\">&amp;</span>L<span class=\\\"token punctuation\\\">,</span>i<span class=\\\"token punctuation\\\">,</span><span class=\\\"token operator\\\">&amp;</span>e<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">//删除操作：删除表L中第i个位置的元素，/*并用e反回删除元素的值*/</span>\\n\\n<span class=\\\"token function\\\">LocateElem</span><span class=\\\"token punctuation\\\">(</span>L<span class=\\\"token punctuation\\\">,</span>e<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">//按值查找操作</span>\\n<span class=\\\"token function\\\">GetElem</span><span class=\\\"token punctuation\\\">(</span>L<span class=\\\"token punctuation\\\">,</span>i<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>    <span class=\\\"token comment\\\">//按位查找操作</span>\\n\\n<span class=\\\"token comment\\\">//其它常用操作</span>\\n<span class=\\\"token function\\\">Length</span><span class=\\\"token punctuation\\\">(</span>L<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>  <span class=\\\"token comment\\\">//求表长</span>\\n<span class=\\\"token function\\\">Print</span><span class=\\\"token punctuation\\\">(</span>L<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>   <span class=\\\"token comment\\\">//输出操作</span>\\n<span class=\\\"token function\\\">Empty</span><span class=\\\"token punctuation\\\">(</span>L<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>   <span class=\\\"token comment\\\">//判空操作</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
