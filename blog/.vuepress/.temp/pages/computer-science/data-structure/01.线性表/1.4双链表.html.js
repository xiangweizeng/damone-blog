export const data = JSON.parse("{\"key\":\"v-11eb1c27\",\"path\":\"/computer-science/data-structure/01.%E7%BA%BF%E6%80%A7%E8%A1%A8/1.4%E5%8F%8C%E9%93%BE%E8%A1%A8.html\",\"title\":\"1.4 双链表\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"1.4 双链表\",\"category\":[\"计算机科学\",\"数据结构\"],\"description\":\"1.4.1 单链表的定义 单链表的结点中只有一个指向其后继的指针，使得单链表要访问某个结点的前驱结点时，只能从头开始遍历，访问后驱结点的复杂度为O(1)，访问前驱结点的复杂度为O(n)。为了克服上述缺点，引入了双链表。 双链表的结点中有两个指针prior和next，分别指向前驱结点和后继结点。 1.4.2 双链表的实现方式 实现方式：不带头结点和带头结点，一般带头结点比不带头结点好 带头结点：写操作代码方便，一般用带头结点，不明确的都是带头结点的\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/xiangweizeng/computer-science/data-structure/01.%E7%BA%BF%E6%80%A7%E8%A1%A8/1.4%E5%8F%8C%E9%93%BE%E8%A1%A8.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Damone's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"1.4 双链表\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"1.4.1 单链表的定义 单链表的结点中只有一个指向其后继的指针，使得单链表要访问某个结点的前驱结点时，只能从头开始遍历，访问后驱结点的复杂度为O(1)，访问前驱结点的复杂度为O(n)。为了克服上述缺点，引入了双链表。 双链表的结点中有两个指针prior和next，分别指向前驱结点和后继结点。 1.4.2 双链表的实现方式 实现方式：不带头结点和带头结点，一般带头结点比不带头结点好 带头结点：写操作代码方便，一般用带头结点，不明确的都是带头结点的\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"damone\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"1.4 双链表\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"damone\\\",\\\"url\\\":\\\"https://github.com/xiangweizeng\\\"}]}\"]]},\"headers\":[{\"level\":3,\"title\":\"1.4.1 单链表的定义\",\"slug\":\"_1-4-1-单链表的定义\",\"link\":\"#_1-4-1-单链表的定义\",\"children\":[]},{\"level\":3,\"title\":\"1.4.2 双链表的实现方式\",\"slug\":\"_1-4-2-双链表的实现方式\",\"link\":\"#_1-4-2-双链表的实现方式\",\"children\":[]},{\"level\":3,\"title\":\"1.4.3 双链表上的操作（带头结点）\",\"slug\":\"_1-4-3-双链表上的操作-带头结点\",\"link\":\"#_1-4-3-双链表上的操作-带头结点\",\"children\":[{\"level\":4,\"title\":\"双链表的类型描述\",\"slug\":\"双链表的类型描述\",\"link\":\"#双链表的类型描述\",\"children\":[]},{\"level\":4,\"title\":\"初始化\",\"slug\":\"初始化\",\"link\":\"#初始化\",\"children\":[]},{\"level\":4,\"title\":\"判空\",\"slug\":\"判空\",\"link\":\"#判空\",\"children\":[]},{\"level\":4,\"title\":\"建立双链表\",\"slug\":\"建立双链表\",\"link\":\"#建立双链表\",\"children\":[]},{\"level\":4,\"title\":\"插入\",\"slug\":\"插入\",\"link\":\"#插入\",\"children\":[]},{\"level\":4,\"title\":\"删除\",\"slug\":\"删除\",\"link\":\"#删除\",\"children\":[]},{\"level\":4,\"title\":\"查找(与单链表完全一样)\",\"slug\":\"查找-与单链表完全一样\",\"link\":\"#查找-与单链表完全一样\",\"children\":[]},{\"level\":4,\"title\":\"求表长(与单链表完全一样)\",\"slug\":\"求表长-与单链表完全一样\",\"link\":\"#求表长-与单链表完全一样\",\"children\":[]},{\"level\":4,\"title\":\"遍历(与单链表完全一样)\",\"slug\":\"遍历-与单链表完全一样\",\"link\":\"#遍历-与单链表完全一样\",\"children\":[]},{\"level\":4,\"title\":\"销毁\",\"slug\":\"销毁\",\"link\":\"#销毁\",\"children\":[]}]},{\"level\":3,\"title\":\"1.4.4 完整代码\",\"slug\":\"_1-4-4-完整代码\",\"link\":\"#_1-4-4-完整代码\",\"children\":[{\"level\":4,\"title\":\"运行结果：\",\"slug\":\"运行结果\",\"link\":\"#运行结果\",\"children\":[]}]}],\"git\":{},\"readingTime\":{\"minutes\":5.48,\"words\":1643},\"filePathRelative\":\"computer-science/data-structure/01.线性表/1.4双链表.md\",\"excerpt\":\"<h3> 1.4.1 单链表的定义</h3>\\n<p>单链表的结点中只有一个指向其后继的指针，使得单链表要访问某个结点的前驱结点时，只能从头开始遍历，访问后驱结点的复杂度为O(1)，访问前驱结点的复杂度为O(n)。为了克服上述缺点，引入了双链表。</p>\\n<p><code>双链表</code>的结点中有两个指针<code>prior</code>和<code>next</code>，分别指向前驱结点和后继结点。</p>\\n<h3> 1.4.2 双链表的实现方式</h3>\\n<p>实现方式：<code>不带头结点</code>和<code>带头结点</code>，一般带头结点比不带头结点好</p>\\n<p>带头结点：写操作代码方便，一般用带头结点，不明确的都是带头结点的</p>\",\"autoDesc\":true}")
