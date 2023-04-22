const e=JSON.parse(`{"key":"v-bba501d8","path":"/computer-science/data-structure/02.%E6%A0%88%E5%92%8C%E9%98%9F%E5%88%97/2.2%E6%A0%88%E7%9A%84%E9%A1%BA%E5%BA%8F%E5%AD%98%E5%82%A8.html","title":"2.2 栈的顺序存储","lang":"zh-CN","frontmatter":{"description":"2.2 栈的顺序存储 2.2.1 顺序栈的定义 顺序栈：栈的顺序存储。 2.2.2 顺序栈的实现方式 实现方式：静态分配和动态分配 2.2.3 静态分配的顺序栈上的操作 顺序栈的类型描述 #define MaxSize 10 typedef struct{ \\tElemtype data[MaxSize];//静态数组存放栈中元素 \\tint top; //栈顶指针 }SqStack;","head":[["meta",{"property":"og:url","content":"https://github.com/xiangweizeng/computer-science/data-structure/02.%E6%A0%88%E5%92%8C%E9%98%9F%E5%88%97/2.2%E6%A0%88%E7%9A%84%E9%A1%BA%E5%BA%8F%E5%AD%98%E5%82%A8.html"}],["meta",{"property":"og:site_name","content":"Damone's Blog"}],["meta",{"property":"og:title","content":"2.2 栈的顺序存储"}],["meta",{"property":"og:description","content":"2.2 栈的顺序存储 2.2.1 顺序栈的定义 顺序栈：栈的顺序存储。 2.2.2 顺序栈的实现方式 实现方式：静态分配和动态分配 2.2.3 静态分配的顺序栈上的操作 顺序栈的类型描述 #define MaxSize 10 typedef struct{ \\tElemtype data[MaxSize];//静态数组存放栈中元素 \\tint top; //栈顶指针 }SqStack;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"damone"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2.2 栈的顺序存储\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"damone\\",\\"url\\":\\"https://github.com/xiangweizeng\\"}]}"]]},"headers":[{"level":2,"title":"2.2.1 顺序栈的定义","slug":"_2-2-1-顺序栈的定义","link":"#_2-2-1-顺序栈的定义","children":[]},{"level":2,"title":"2.2.2 顺序栈的实现方式","slug":"_2-2-2-顺序栈的实现方式","link":"#_2-2-2-顺序栈的实现方式","children":[]},{"level":2,"title":"2.2.3 静态分配的顺序栈上的操作","slug":"_2-2-3-静态分配的顺序栈上的操作","link":"#_2-2-3-静态分配的顺序栈上的操作","children":[]},{"level":2,"title":"顺序栈的类型描述","slug":"顺序栈的类型描述","link":"#顺序栈的类型描述","children":[]},{"level":2,"title":"初始化","slug":"初始化","link":"#初始化","children":[]},{"level":2,"title":"判栈空","slug":"判栈空","link":"#判栈空","children":[]},{"level":2,"title":"入栈","slug":"入栈","link":"#入栈","children":[]},{"level":2,"title":"出栈","slug":"出栈","link":"#出栈","children":[]},{"level":2,"title":"获取栈顶元素","slug":"获取栈顶元素","link":"#获取栈顶元素","children":[]},{"level":2,"title":"2.2.4 动态分配的顺序栈上的操作","slug":"_2-2-4-动态分配的顺序栈上的操作","link":"#_2-2-4-动态分配的顺序栈上的操作","children":[]},{"level":2,"title":"顺序栈的类型描述","slug":"顺序栈的类型描述-1","link":"#顺序栈的类型描述-1","children":[]},{"level":2,"title":"初始化","slug":"初始化-1","link":"#初始化-1","children":[]},{"level":2,"title":"判栈空","slug":"判栈空-1","link":"#判栈空-1","children":[]},{"level":2,"title":"入栈","slug":"入栈-1","link":"#入栈-1","children":[]},{"level":2,"title":"出栈","slug":"出栈-1","link":"#出栈-1","children":[]},{"level":2,"title":"获取栈顶元素","slug":"获取栈顶元素-1","link":"#获取栈顶元素-1","children":[]}],"git":{},"readingTime":{"minutes":1.55,"words":466},"filePathRelative":"computer-science/data-structure/02.栈和队列/2.2栈的顺序存储.md","excerpt":"<h1> 2.2 栈的顺序存储</h1>\\n<h2> 2.2.1 顺序栈的定义</h2>\\n<p><code>顺序栈</code>：栈的<code>顺序存储</code>。</p>\\n<h2> 2.2.2 顺序栈的实现方式</h2>\\n<p>实现方式：<code>静态分配</code>和<code>动态分配</code></p>\\n<h2> 2.2.3 静态分配的顺序栈上的操作</h2>\\n<h2> 顺序栈的类型描述</h2>\\n<div class=\\"language-C line-numbers-mode\\" data-ext=\\"C\\"><pre class=\\"language-C\\"><code>#define MaxSize 10\\ntypedef struct{\\n\\tElemtype data[MaxSize];//静态数组存放栈中元素\\n\\tint top;               //栈顶指针\\n}SqStack;\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
