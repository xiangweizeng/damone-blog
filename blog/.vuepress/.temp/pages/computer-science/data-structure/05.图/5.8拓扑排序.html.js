export const data = JSON.parse("{\"key\":\"v-c8dd49c2\",\"path\":\"/computer-science/data-structure/05.%E5%9B%BE/5.8%E6%8B%93%E6%89%91%E6%8E%92%E5%BA%8F.html\",\"title\":\"5.8 拓扑排序\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"5.8 拓扑排序 5.8.1 AOV网 AOV网（Activity On Vertex NetWork，用顶点表示活动的网）： 用DAG图（有向无环图）表示一个工程。 顶点表示活动，边&lt;Vi​,Vj​&gt;表示活动Vi​必须先于活动Vj​进行\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/xiangweizeng/damone-blog/computer-science/data-structure/05.%E5%9B%BE/5.8%E6%8B%93%E6%89%91%E6%8E%92%E5%BA%8F.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Damone's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"5.8 拓扑排序\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"5.8 拓扑排序 5.8.1 AOV网 AOV网（Activity On Vertex NetWork，用顶点表示活动的网）： 用DAG图（有向无环图）表示一个工程。 顶点表示活动，边&lt;Vi​,Vj​&gt;表示活动Vi​必须先于活动Vj​进行\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"damone\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"5.8 拓扑排序\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"damone\\\",\\\"url\\\":\\\"https://github.com/xiangweizeng\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"5.8.1 AOV网\",\"slug\":\"_5-8-1-aov网\",\"link\":\"#_5-8-1-aov网\",\"children\":[]},{\"level\":2,\"title\":\"5.8.2 拓扑排序\",\"slug\":\"_5-8-2-拓扑排序\",\"link\":\"#_5-8-2-拓扑排序\",\"children\":[{\"level\":3,\"title\":\"图的类型描述：\",\"slug\":\"图的类型描述\",\"link\":\"#图的类型描述\",\"children\":[]},{\"level\":3,\"title\":\"代码\",\"slug\":\"代码\",\"link\":\"#代码\",\"children\":[]}]}],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":1.97,\"words\":590},\"filePathRelative\":\"computer-science/data-structure/05.图/5.8拓扑排序.md\",\"excerpt\":\"<h1> 5.8 拓扑排序</h1>\\n<h2> 5.8.1 AOV网</h2>\\n<p><code>AOV网</code>（Activity On Vertex NetWork，用<code>顶点表示活动</code>的网）：\\n用DAG图（<code>有向无环图</code>）表示一个工程。\\n<code>顶点表示活动</code>，边<span class=\\\"katex\\\"><span class=\\\"katex-mathml\\\"></span><span class=\\\"katex-html\\\" aria-hidden=\\\"true\\\"><span class=\\\"base\\\"><span class=\\\"strut\\\" style=\\\"height:0.5782em;vertical-align:-0.0391em;\\\"></span><span class=\\\"mrel\\\">&lt;</span><span class=\\\"mspace\\\" style=\\\"margin-right:0.2778em;\\\"></span></span><span class=\\\"base\\\"><span class=\\\"strut\\\" style=\\\"height:0.9694em;vertical-align:-0.2861em;\\\"></span><span class=\\\"mord\\\"><span class=\\\"mord mathnormal\\\" style=\\\"margin-right:0.22222em;\\\">V</span><span class=\\\"msupsub\\\"><span class=\\\"vlist-t vlist-t2\\\"><span class=\\\"vlist-r\\\"><span class=\\\"vlist\\\" style=\\\"height:0.3117em;\\\"><span style=\\\"top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;\\\"><span class=\\\"pstrut\\\" style=\\\"height:2.7em;\\\"></span><span class=\\\"sizing reset-size6 size3 mtight\\\"><span class=\\\"mord mathnormal mtight\\\">i</span></span></span></span><span class=\\\"vlist-s\\\">​</span></span><span class=\\\"vlist-r\\\"><span class=\\\"vlist\\\" style=\\\"height:0.15em;\\\"><span></span></span></span></span></span></span><span class=\\\"mpunct\\\">,</span><span class=\\\"mspace\\\" style=\\\"margin-right:0.1667em;\\\"></span><span class=\\\"mord\\\"><span class=\\\"mord mathnormal\\\" style=\\\"margin-right:0.22222em;\\\">V</span><span class=\\\"msupsub\\\"><span class=\\\"vlist-t vlist-t2\\\"><span class=\\\"vlist-r\\\"><span class=\\\"vlist\\\" style=\\\"height:0.3117em;\\\"><span style=\\\"top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;\\\"><span class=\\\"pstrut\\\" style=\\\"height:2.7em;\\\"></span><span class=\\\"sizing reset-size6 size3 mtight\\\"><span class=\\\"mord mathnormal mtight\\\" style=\\\"margin-right:0.05724em;\\\">j</span></span></span></span><span class=\\\"vlist-s\\\">​</span></span><span class=\\\"vlist-r\\\"><span class=\\\"vlist\\\" style=\\\"height:0.2861em;\\\"><span></span></span></span></span></span></span><span class=\\\"mspace\\\" style=\\\"margin-right:0.2778em;\\\"></span><span class=\\\"mrel\\\">&gt;</span></span></span></span>表示活动<span class=\\\"katex\\\"><span class=\\\"katex-mathml\\\"></span><span class=\\\"katex-html\\\" aria-hidden=\\\"true\\\"><span class=\\\"base\\\"><span class=\\\"strut\\\" style=\\\"height:0.8333em;vertical-align:-0.15em;\\\"></span><span class=\\\"mord\\\"><span class=\\\"mord mathnormal\\\" style=\\\"margin-right:0.22222em;\\\">V</span><span class=\\\"msupsub\\\"><span class=\\\"vlist-t vlist-t2\\\"><span class=\\\"vlist-r\\\"><span class=\\\"vlist\\\" style=\\\"height:0.3117em;\\\"><span style=\\\"top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;\\\"><span class=\\\"pstrut\\\" style=\\\"height:2.7em;\\\"></span><span class=\\\"sizing reset-size6 size3 mtight\\\"><span class=\\\"mord mathnormal mtight\\\">i</span></span></span></span><span class=\\\"vlist-s\\\">​</span></span><span class=\\\"vlist-r\\\"><span class=\\\"vlist\\\" style=\\\"height:0.15em;\\\"><span></span></span></span></span></span></span></span></span></span>必须先于活动<span class=\\\"katex\\\"><span class=\\\"katex-mathml\\\"></span><span class=\\\"katex-html\\\" aria-hidden=\\\"true\\\"><span class=\\\"base\\\"><span class=\\\"strut\\\" style=\\\"height:0.9694em;vertical-align:-0.2861em;\\\"></span><span class=\\\"mord\\\"><span class=\\\"mord mathnormal\\\" style=\\\"margin-right:0.22222em;\\\">V</span><span class=\\\"msupsub\\\"><span class=\\\"vlist-t vlist-t2\\\"><span class=\\\"vlist-r\\\"><span class=\\\"vlist\\\" style=\\\"height:0.3117em;\\\"><span style=\\\"top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;\\\"><span class=\\\"pstrut\\\" style=\\\"height:2.7em;\\\"></span><span class=\\\"sizing reset-size6 size3 mtight\\\"><span class=\\\"mord mathnormal mtight\\\" style=\\\"margin-right:0.05724em;\\\">j</span></span></span></span><span class=\\\"vlist-s\\\">​</span></span><span class=\\\"vlist-r\\\"><span class=\\\"vlist\\\" style=\\\"height:0.2861em;\\\"><span></span></span></span></span></span></span></span></span></span>进行</p>\",\"autoDesc\":true}")
