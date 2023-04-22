export const data = JSON.parse("{\"key\":\"v-28d90276\",\"path\":\"/computer-science/data-structure/04.%E6%A0%91/4.3%E7%BA%BF%E7%B4%A2%E4%BA%8C%E5%8F%89%E6%A0%91.html\",\"title\":\"4.3 线索二叉树\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"4.3 线索二叉树 4.3.1 线索二叉树定义 背景：为解决遍历只能从根结点开始这个问题，因为普通二叉树找前驱和后继很麻烦 线索二叉树在二叉树的结点上加上线索的二叉树。 4.3.2 线索二叉树的存储结构 由二叉树的链式存储改进而来 二叉树的类型表述 typedef struct TreeNode{ \\tElemtype data; //数据域 \\tstruct BiTNode *lchide, *rchild; //左、右孩子指针 }BiTNode, *BiTree;\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/xiangweizeng/damone-blog/computer-science/data-structure/04.%E6%A0%91/4.3%E7%BA%BF%E7%B4%A2%E4%BA%8C%E5%8F%89%E6%A0%91.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Damone's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"4.3 线索二叉树\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"4.3 线索二叉树 4.3.1 线索二叉树定义 背景：为解决遍历只能从根结点开始这个问题，因为普通二叉树找前驱和后继很麻烦 线索二叉树在二叉树的结点上加上线索的二叉树。 4.3.2 线索二叉树的存储结构 由二叉树的链式存储改进而来 二叉树的类型表述 typedef struct TreeNode{ \\tElemtype data; //数据域 \\tstruct BiTNode *lchide, *rchild; //左、右孩子指针 }BiTNode, *BiTree;\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"damone\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"4.3 线索二叉树\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"damone\\\",\\\"url\\\":\\\"https://github.com/xiangweizeng\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"4.3.1 线索二叉树定义\",\"slug\":\"_4-3-1-线索二叉树定义\",\"link\":\"#_4-3-1-线索二叉树定义\",\"children\":[]},{\"level\":2,\"title\":\"4.3.2 线索二叉树的存储结构\",\"slug\":\"_4-3-2-线索二叉树的存储结构\",\"link\":\"#_4-3-2-线索二叉树的存储结构\",\"children\":[{\"level\":3,\"title\":\"二叉树的类型表述\",\"slug\":\"二叉树的类型表述\",\"link\":\"#二叉树的类型表述\",\"children\":[]},{\"level\":3,\"title\":\"线索二叉树的类型表述\",\"slug\":\"线索二叉树的类型表述\",\"link\":\"#线索二叉树的类型表述\",\"children\":[]}]},{\"level\":2,\"title\":\"4.3.3 线索二叉树的分类\",\"slug\":\"_4-3-3-线索二叉树的分类\",\"link\":\"#_4-3-3-线索二叉树的分类\",\"children\":[]},{\"level\":2,\"title\":\"4.3.4 二叉树线索化\",\"slug\":\"_4-3-4-二叉树线索化\",\"link\":\"#_4-3-4-二叉树线索化\",\"children\":[{\"level\":3,\"title\":\"中序线索化\",\"slug\":\"中序线索化\",\"link\":\"#中序线索化\",\"children\":[]},{\"level\":3,\"title\":\"先序线索化\",\"slug\":\"先序线索化\",\"link\":\"#先序线索化\",\"children\":[]},{\"level\":3,\"title\":\"后续线索化\",\"slug\":\"后续线索化\",\"link\":\"#后续线索化\",\"children\":[]}]},{\"level\":2,\"title\":\"4.3.5 线索二叉树找前驱和后继\",\"slug\":\"_4-3-5-线索二叉树找前驱和后继\",\"link\":\"#_4-3-5-线索二叉树找前驱和后继\",\"children\":[{\"level\":3,\"title\":\"中序线索二叉树找中序后继\",\"slug\":\"中序线索二叉树找中序后继\",\"link\":\"#中序线索二叉树找中序后继\",\"children\":[{\"level\":4,\"title\":\"应用：中序线索二叉树的中序遍历\",\"slug\":\"应用-中序线索二叉树的中序遍历\",\"link\":\"#应用-中序线索二叉树的中序遍历\",\"children\":[]}]},{\"level\":3,\"title\":\"中序线索二叉树找中序前驱\",\"slug\":\"中序线索二叉树找中序前驱\",\"link\":\"#中序线索二叉树找中序前驱\",\"children\":[{\"level\":4,\"title\":\"应用：中序线索二叉树的逆向中序遍历\",\"slug\":\"应用-中序线索二叉树的逆向中序遍历\",\"link\":\"#应用-中序线索二叉树的逆向中序遍历\",\"children\":[]}]},{\"level\":3,\"title\":\"先序线索二叉树找先序后继\",\"slug\":\"先序线索二叉树找先序后继\",\"link\":\"#先序线索二叉树找先序后继\",\"children\":[]},{\"level\":3,\"title\":\"先序线索二叉树找先序前驱\",\"slug\":\"先序线索二叉树找先序前驱\",\"link\":\"#先序线索二叉树找先序前驱\",\"children\":[]},{\"level\":3,\"title\":\"后序线索二叉树找后序后继\",\"slug\":\"后序线索二叉树找后序后继\",\"link\":\"#后序线索二叉树找后序后继\",\"children\":[]},{\"level\":3,\"title\":\"后序线索二叉树找后序前驱\",\"slug\":\"后序线索二叉树找后序前驱\",\"link\":\"#后序线索二叉树找后序前驱\",\"children\":[]}]}],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":7.05,\"words\":2115},\"filePathRelative\":\"computer-science/data-structure/04.树/4.3线索二叉树.md\",\"excerpt\":\"<h1> 4.3 线索二叉树</h1>\\n<h2> 4.3.1 线索二叉树定义</h2>\\n<p>背景：为解决遍历只能从根结点开始这个问题，因为普通二叉树找前驱和后继很麻烦</p>\\n<p><code>线索二叉树</code>在二叉树的结点上加上<code>线索</code>的二叉树。</p>\\n<h2> 4.3.2 线索二叉树的存储结构</h2>\\n<p>由二叉树的链式存储改进而来</p>\\n<h3> 二叉树的类型表述</h3>\\n<div class=\\\"language-c line-numbers-mode\\\" data-ext=\\\"c\\\"><pre class=\\\"language-c\\\"><code><span class=\\\"token keyword\\\">typedef</span> <span class=\\\"token keyword\\\">struct</span> <span class=\\\"token class-name\\\">TreeNode</span><span class=\\\"token punctuation\\\">{</span>\\n\\tElemtype data<span class=\\\"token punctuation\\\">;</span>                   <span class=\\\"token comment\\\">//数据域</span>\\n\\t<span class=\\\"token keyword\\\">struct</span> <span class=\\\"token class-name\\\">BiTNode</span> <span class=\\\"token operator\\\">*</span>lchide<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token operator\\\">*</span>rchild<span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">//左、右孩子指针</span>\\n<span class=\\\"token punctuation\\\">}</span>BiTNode<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token operator\\\">*</span>BiTree<span class=\\\"token punctuation\\\">;</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
