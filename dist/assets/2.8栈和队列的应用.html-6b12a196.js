const e=JSON.parse(`{"key":"v-60967cbc","path":"/computer-science/data-structure/02.%E6%A0%88%E5%92%8C%E9%98%9F%E5%88%97/2.8%E6%A0%88%E5%92%8C%E9%98%9F%E5%88%97%E7%9A%84%E5%BA%94%E7%94%A8.html","title":"2.8 栈和队列的应用","lang":"zh-CN","frontmatter":{"description":"2.8 栈和队列的应用 2.8.1 栈的应用 栈在括号匹配中的应用 初始设置一个空栈，顺序读入括号 若是右括号，则或者置于栈顶的最急迫期待得以消解，或者是不合法的情况 若是左括号，则作为一个新的更急迫的期待压入栈中 算法结束时，栈为空，否则括号序列不匹配 表达式求值(中缀表达式求值) 三种表达式：中缀表达式、后缀表达式、前缀表达式","head":[["meta",{"property":"og:url","content":"https://github.com/xiangweizeng/computer-science/data-structure/02.%E6%A0%88%E5%92%8C%E9%98%9F%E5%88%97/2.8%E6%A0%88%E5%92%8C%E9%98%9F%E5%88%97%E7%9A%84%E5%BA%94%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"Damone's Blog"}],["meta",{"property":"og:title","content":"2.8 栈和队列的应用"}],["meta",{"property":"og:description","content":"2.8 栈和队列的应用 2.8.1 栈的应用 栈在括号匹配中的应用 初始设置一个空栈，顺序读入括号 若是右括号，则或者置于栈顶的最急迫期待得以消解，或者是不合法的情况 若是左括号，则作为一个新的更急迫的期待压入栈中 算法结束时，栈为空，否则括号序列不匹配 表达式求值(中缀表达式求值) 三种表达式：中缀表达式、后缀表达式、前缀表达式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"damone"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2.8 栈和队列的应用\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"damone\\",\\"url\\":\\"https://github.com/xiangweizeng\\"}]}"]]},"headers":[{"level":2,"title":"2.8.1 栈的应用","slug":"_2-8-1-栈的应用","link":"#_2-8-1-栈的应用","children":[]},{"level":2,"title":"栈在括号匹配中的应用","slug":"栈在括号匹配中的应用","link":"#栈在括号匹配中的应用","children":[]},{"level":2,"title":"表达式求值(中缀表达式求值)","slug":"表达式求值-中缀表达式求值","link":"#表达式求值-中缀表达式求值","children":[{"level":3,"title":"方法一：中缀表达式转后缀表达式，再用后缀表达式求值","slug":"方法一-中缀表达式转后缀表达式-再用后缀表达式求值","link":"#方法一-中缀表达式转后缀表达式-再用后缀表达式求值","children":[]},{"level":3,"title":"方法二：中缀表达式转前缀表达式，再用前缀表达式求值","slug":"方法二-中缀表达式转前缀表达式-再用前缀表达式求值","link":"#方法二-中缀表达式转前缀表达式-再用前缀表达式求值","children":[]}]},{"level":2,"title":"递归","slug":"递归","link":"#递归","children":[]}],"git":{},"readingTime":{"minutes":2.24,"words":673},"filePathRelative":"computer-science/data-structure/02.栈和队列/2.8栈和队列的应用.md","excerpt":"<h1> 2.8 栈和队列的应用</h1>\\n<h2> 2.8.1 栈的应用</h2>\\n<h2> 栈在括号匹配中的应用</h2>\\n<ol>\\n<li>初始设置一个空栈，顺序读入括号</li>\\n<li>若是右括号，则或者置于栈顶的最急迫期待得以消解，或者是不合法的情况</li>\\n<li>若是左括号，则作为一个新的更急迫的期待压入栈中</li>\\n<li>算法结束时，栈为空，否则括号序列不匹配</li>\\n</ol>\\n<h2> 表达式求值(中缀表达式求值)</h2>\\n<p>三种表达式：<code>中缀表达式</code>、<code>后缀表达式</code>、<code>前缀表达式</code></p>\\n","autoDesc":true}`);export{e as data};
