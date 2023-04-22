const e=JSON.parse(`{"key":"v-5d7230af","path":"/computer-science/data-structure/02.%E6%A0%88%E5%92%8C%E9%98%9F%E5%88%97/2.3%E6%A0%88%E7%9A%84%E9%93%BE%E5%BC%8F%E5%AD%98%E5%82%A8.html","title":"2.3 栈的链式存储","lang":"zh-CN","frontmatter":{"description":"2.3 栈的链式存储 2.3.1 链栈的定义 链栈：栈的链式存储。 2.3.2 链栈的实现方式 实现方式：不带头结点和带头结点，一般带头结点比不带头结点好 不带头结点：写操作代码麻烦，要区分第一个数据和后续数据的处理 带头结点：写操作代码方便，一般用带头结点，不明确的都是带头结点的 注：这两种方式：只有类型描述一样，初始化不一样， ​ 判空、入栈、出栈、取栈顶元素不一样，不带头节点是s，带头结点是s-&gt;next，因为链栈以链头为栈顶","head":[["meta",{"property":"og:url","content":"https://github.com/xiangweizeng/damone-blog/computer-science/data-structure/02.%E6%A0%88%E5%92%8C%E9%98%9F%E5%88%97/2.3%E6%A0%88%E7%9A%84%E9%93%BE%E5%BC%8F%E5%AD%98%E5%82%A8.html"}],["meta",{"property":"og:site_name","content":"Damone's Blog"}],["meta",{"property":"og:title","content":"2.3 栈的链式存储"}],["meta",{"property":"og:description","content":"2.3 栈的链式存储 2.3.1 链栈的定义 链栈：栈的链式存储。 2.3.2 链栈的实现方式 实现方式：不带头结点和带头结点，一般带头结点比不带头结点好 不带头结点：写操作代码麻烦，要区分第一个数据和后续数据的处理 带头结点：写操作代码方便，一般用带头结点，不明确的都是带头结点的 注：这两种方式：只有类型描述一样，初始化不一样， ​ 判空、入栈、出栈、取栈顶元素不一样，不带头节点是s，带头结点是s-&gt;next，因为链栈以链头为栈顶"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"damone"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2.3 栈的链式存储\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"damone\\",\\"url\\":\\"https://github.com/xiangweizeng\\"}]}"]]},"headers":[{"level":2,"title":"2.3.1 链栈的定义","slug":"_2-3-1-链栈的定义","link":"#_2-3-1-链栈的定义","children":[]},{"level":2,"title":"2.3.2 链栈的实现方式","slug":"_2-3-2-链栈的实现方式","link":"#_2-3-2-链栈的实现方式","children":[]},{"level":2,"title":"2.3.3 不带头结点的链栈上的操作（与不带头结点的单链表一样）","slug":"_2-3-3-不带头结点的链栈上的操作-与不带头结点的单链表一样","link":"#_2-3-3-不带头结点的链栈上的操作-与不带头结点的单链表一样","children":[]},{"level":2,"title":"链栈的类型描述","slug":"链栈的类型描述","link":"#链栈的类型描述","children":[]},{"level":2,"title":"初始化","slug":"初始化","link":"#初始化","children":[]},{"level":2,"title":"判栈空","slug":"判栈空","link":"#判栈空","children":[]},{"level":2,"title":"入栈（与单链表插入一样）","slug":"入栈-与单链表插入一样","link":"#入栈-与单链表插入一样","children":[]},{"level":2,"title":"出栈（与单链表删除一样）","slug":"出栈-与单链表删除一样","link":"#出栈-与单链表删除一样","children":[]},{"level":2,"title":"获取栈顶元素（与单链表删除一样）","slug":"获取栈顶元素-与单链表删除一样","link":"#获取栈顶元素-与单链表删除一样","children":[]},{"level":2,"title":"2.3.4 带头结点的链栈上的操作","slug":"_2-3-4-带头结点的链栈上的操作","link":"#_2-3-4-带头结点的链栈上的操作","children":[]},{"level":2,"title":"链栈的类型描述","slug":"链栈的类型描述-1","link":"#链栈的类型描述-1","children":[]},{"level":2,"title":"初始化","slug":"初始化-1","link":"#初始化-1","children":[]},{"level":2,"title":"判栈空","slug":"判栈空-1","link":"#判栈空-1","children":[]},{"level":2,"title":"入栈（与单链表插入一样）","slug":"入栈-与单链表插入一样-1","link":"#入栈-与单链表插入一样-1","children":[]},{"level":2,"title":"出栈（与单链表删除一样）","slug":"出栈-与单链表删除一样-1","link":"#出栈-与单链表删除一样-1","children":[]},{"level":2,"title":"获取栈顶元素","slug":"获取栈顶元素","link":"#获取栈顶元素","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.17,"words":650},"filePathRelative":"computer-science/data-structure/02.栈和队列/2.3栈的链式存储.md","excerpt":"<h1> 2.3 栈的链式存储</h1>\\n<h2> 2.3.1 链栈的定义</h2>\\n<p><code>链栈</code>：栈的<code>链式存储</code>。</p>\\n<h2> 2.3.2 链栈的实现方式</h2>\\n<p>实现方式：<code>不带头结点</code>和<code>带头结点</code>，一般带头结点比不带头结点好</p>\\n<p>不带头结点：写操作代码麻烦，要区分第一个数据和后续数据的处理</p>\\n<p>带头结点：写操作代码方便，一般用带头结点，不明确的都是带头结点的</p>\\n<p><code>注</code>：这两种方式：只有类型描述一样，初始化不一样，</p>\\n<p>​           判空、入栈、出栈、取栈顶元素不一样，不带头节点是s，带头结点是s-&gt;next，因为链栈以<code>链头</code>为<code>栈顶</code></p>","autoDesc":true}`);export{e as data};
