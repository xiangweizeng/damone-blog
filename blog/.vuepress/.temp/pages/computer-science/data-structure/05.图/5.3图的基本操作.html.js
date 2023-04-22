export const data = JSON.parse("{\"key\":\"v-5c08ab16\",\"path\":\"/computer-science/data-structure/05.%E5%9B%BE/5.3%E5%9B%BE%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C.html\",\"title\":\"5.3 图的基本操作\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"5.3 图的基本操作 //图的基本操作 Adjacent(G,x,y); //判断图G是否存在边&lt;x,y&gt;或(x,y)。 Neighbors(G,x); //列出图G中与结点x邻接的边。 InsertVertex(G,x); //在图G中插入顶点x。 DeleteVertex(G,x); //从图G中删除顶点x。 AddEdge(G,x,y); //若无向边(x,y)或有向边&lt;x,y&gt;不存在，则向图G中添加该边。 RemoveEdge(G,x,y); //若无向边(x,y)或有向边&lt;x,y&gt;存在，则从图G中删除该边。 FirstNeighbor(G,x); //求图G中顶点x的第一个邻接点，若有则返回顶点号。若x没有邻接点或图中不存在x，则返回-1。 NextNeighbor(G,x,y); //假设图G中顶点y是顶点x的一个邻接点，返回除y之外顶点x的下一个邻接点的顶点号，若y是x的最后一个邻接点，则返回-1。 Get_edge_value(G,x,y); //获取图G中边(x,y)或&lt;x,y&gt;对应的权值。 Set_edge_value(G,x,y,v); //设置图G中边(x,y)或&lt;x,y&gt;对应的权值为v。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/xiangweizeng/damone-blog/computer-science/data-structure/05.%E5%9B%BE/5.3%E5%9B%BE%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Damone's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"5.3 图的基本操作\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"5.3 图的基本操作 //图的基本操作 Adjacent(G,x,y); //判断图G是否存在边&lt;x,y&gt;或(x,y)。 Neighbors(G,x); //列出图G中与结点x邻接的边。 InsertVertex(G,x); //在图G中插入顶点x。 DeleteVertex(G,x); //从图G中删除顶点x。 AddEdge(G,x,y); //若无向边(x,y)或有向边&lt;x,y&gt;不存在，则向图G中添加该边。 RemoveEdge(G,x,y); //若无向边(x,y)或有向边&lt;x,y&gt;存在，则从图G中删除该边。 FirstNeighbor(G,x); //求图G中顶点x的第一个邻接点，若有则返回顶点号。若x没有邻接点或图中不存在x，则返回-1。 NextNeighbor(G,x,y); //假设图G中顶点y是顶点x的一个邻接点，返回除y之外顶点x的下一个邻接点的顶点号，若y是x的最后一个邻接点，则返回-1。 Get_edge_value(G,x,y); //获取图G中边(x,y)或&lt;x,y&gt;对应的权值。 Set_edge_value(G,x,y,v); //设置图G中边(x,y)或&lt;x,y&gt;对应的权值为v。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"damone\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"5.3 图的基本操作\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"damone\\\",\\\"url\\\":\\\"https://github.com/xiangweizeng\\\"}]}\"]]},\"headers\":[],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":1,\"words\":299},\"filePathRelative\":\"computer-science/data-structure/05.图/5.3图的基本操作.md\",\"excerpt\":\"<h1> 5.3 图的基本操作</h1>\\n<div class=\\\"language-c line-numbers-mode\\\" data-ext=\\\"c\\\"><pre class=\\\"language-c\\\"><code><span class=\\\"token comment\\\">//图的基本操作</span>\\n<span class=\\\"token function\\\">Adjacent</span><span class=\\\"token punctuation\\\">(</span>G<span class=\\\"token punctuation\\\">,</span>x<span class=\\\"token punctuation\\\">,</span>y<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>     <span class=\\\"token comment\\\">//判断图G是否存在边&lt;x,y&gt;或(x,y)。</span>\\n<span class=\\\"token function\\\">Neighbors</span><span class=\\\"token punctuation\\\">(</span>G<span class=\\\"token punctuation\\\">,</span>x<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>      <span class=\\\"token comment\\\">//列出图G中与结点x邻接的边。</span>\\n<span class=\\\"token function\\\">InsertVertex</span><span class=\\\"token punctuation\\\">(</span>G<span class=\\\"token punctuation\\\">,</span>x<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>   <span class=\\\"token comment\\\">//在图G中插入顶点x。</span>\\n<span class=\\\"token function\\\">DeleteVertex</span><span class=\\\"token punctuation\\\">(</span>G<span class=\\\"token punctuation\\\">,</span>x<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>   <span class=\\\"token comment\\\">//从图G中删除顶点x。</span>\\n<span class=\\\"token function\\\">AddEdge</span><span class=\\\"token punctuation\\\">(</span>G<span class=\\\"token punctuation\\\">,</span>x<span class=\\\"token punctuation\\\">,</span>y<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>      <span class=\\\"token comment\\\">//若无向边(x,y)或有向边&lt;x,y&gt;不存在，则向图G中添加该边。</span>\\n<span class=\\\"token function\\\">RemoveEdge</span><span class=\\\"token punctuation\\\">(</span>G<span class=\\\"token punctuation\\\">,</span>x<span class=\\\"token punctuation\\\">,</span>y<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>   <span class=\\\"token comment\\\">//若无向边(x,y)或有向边&lt;x,y&gt;存在，则从图G中删除该边。</span>\\n<span class=\\\"token function\\\">FirstNeighbor</span><span class=\\\"token punctuation\\\">(</span>G<span class=\\\"token punctuation\\\">,</span>x<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>  <span class=\\\"token comment\\\">//求图G中顶点x的第一个邻接点，若有则返回顶点号。若x没有邻接点或图中不存在x，则返回-1。</span>\\n<span class=\\\"token function\\\">NextNeighbor</span><span class=\\\"token punctuation\\\">(</span>G<span class=\\\"token punctuation\\\">,</span>x<span class=\\\"token punctuation\\\">,</span>y<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">//假设图G中顶点y是顶点x的一个邻接点，返回除y之外顶点x的下一个邻接点的顶点号，若y是x的最后一个邻接点，则返回-1。</span>\\n<span class=\\\"token function\\\">Get_edge_value</span><span class=\\\"token punctuation\\\">(</span>G<span class=\\\"token punctuation\\\">,</span>x<span class=\\\"token punctuation\\\">,</span>y<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>   <span class=\\\"token comment\\\">//获取图G中边(x,y)或&lt;x,y&gt;对应的权值。</span>\\n<span class=\\\"token function\\\">Set_edge_value</span><span class=\\\"token punctuation\\\">(</span>G<span class=\\\"token punctuation\\\">,</span>x<span class=\\\"token punctuation\\\">,</span>y<span class=\\\"token punctuation\\\">,</span>v<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">//设置图G中边(x,y)或&lt;x,y&gt;对应的权值为v。</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
