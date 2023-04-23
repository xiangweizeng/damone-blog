const e=JSON.parse(`{"key":"v-6d04e676","path":"/blog/operation-system/windows-04.html","title":"透明加密系统设计及实现-透明加密的关键技术","lang":"zh-CN","frontmatter":{"title":"透明加密系统设计及实现-透明加密的关键技术","category":["工作总结","透明加密"],"description":"在第一章已经详细地介绍了透明解密系统的主要发展状况，目前市面上的透明加密系统，大多存在兼容性差和移植麻烦的情况。最为主要的是目前的透明加密系统，缺乏有效的身份认证机制，导致透明加密系统的安全性受到了极大的影响。本章结合 Minifilter 和 LayerBSD 设计思想，详细地分析了透明加密系统的基本结构和原理，给出了有效的关键信息标识的方法。研究了内核模式与用户模式便捷的通信模型，详细给出了多种透明加密系统核心部分的结构并分析它们之间的优缺点，最后综合透明加密系统的整个架构，给出了一套高度可信的身份验证机制。 1 文件透明加密系统的基本原理 文件透明加密是指用户在操作的时候，虽然后台在自动的进行加解密，但是用户根本不知道加密及解密的存在，就像中间的隔了一层屏幕辐射过滤膜一样，用户感觉到不到它的存在。如图 1，在布置了透明加密的系统中，在进行文件 I/O 操作时，文件透明加密系统进行透明加解密，上层的已经授权的进程能够获取到文件的明文，非授权的进程仍然无法获取到文件的明文，故而防止了通过其它的进程获取文件明文并将其通过网络将文件传递到系统之外。在文件 I/O 过程中，文件透明加密及解密驱动会进行文件 I/O 进行过滤，拦截满足策略的 I/O 进行文件的加密及解密等相关的操作。","head":[["meta",{"property":"og:url","content":"https://github.com/xiangweizeng/damone-blog/blog/operation-system/windows-04.html"}],["meta",{"property":"og:site_name","content":"Damone's Blog"}],["meta",{"property":"og:title","content":"透明加密系统设计及实现-透明加密的关键技术"}],["meta",{"property":"og:description","content":"在第一章已经详细地介绍了透明解密系统的主要发展状况，目前市面上的透明加密系统，大多存在兼容性差和移植麻烦的情况。最为主要的是目前的透明加密系统，缺乏有效的身份认证机制，导致透明加密系统的安全性受到了极大的影响。本章结合 Minifilter 和 LayerBSD 设计思想，详细地分析了透明加密系统的基本结构和原理，给出了有效的关键信息标识的方法。研究了内核模式与用户模式便捷的通信模型，详细给出了多种透明加密系统核心部分的结构并分析它们之间的优缺点，最后综合透明加密系统的整个架构，给出了一套高度可信的身份验证机制。 1 文件透明加密系统的基本原理 文件透明加密是指用户在操作的时候，虽然后台在自动的进行加解密，但是用户根本不知道加密及解密的存在，就像中间的隔了一层屏幕辐射过滤膜一样，用户感觉到不到它的存在。如图 1，在布置了透明加密的系统中，在进行文件 I/O 操作时，文件透明加密系统进行透明加解密，上层的已经授权的进程能够获取到文件的明文，非授权的进程仍然无法获取到文件的明文，故而防止了通过其它的进程获取文件明文并将其通过网络将文件传递到系统之外。在文件 I/O 过程中，文件透明加密及解密驱动会进行文件 I/O 进行过滤，拦截满足策略的 I/O 进行文件的加密及解密等相关的操作。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-22T14:43:24.000Z"}],["meta",{"property":"article:author","content":"damone"}],["meta",{"property":"article:modified_time","content":"2023-04-22T14:43:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"透明加密系统设计及实现-透明加密的关键技术\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-22T14:43:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"damone\\",\\"url\\":\\"https://github.com/xiangweizeng\\"}]}"]]},"headers":[{"level":2,"title":"1 文件透明加密系统的基本原理","slug":"_1-文件透明加密系统的基本原理","link":"#_1-文件透明加密系统的基本原理","children":[]},{"level":2,"title":"2 透明加密系统的结构的研究","slug":"_2-透明加密系统的结构的研究","link":"#_2-透明加密系统的结构的研究","children":[]},{"level":2,"title":"3 关键对象的有效标识的研究","slug":"_3-关键对象的有效标识的研究","link":"#_3-关键对象的有效标识的研究","children":[{"level":3,"title":"3.1 进程的有效标识","slug":"_3-1-进程的有效标识","link":"#_3-1-进程的有效标识","children":[]},{"level":3,"title":"3.2 加密文件的有效标识","slug":"_3-2-加密文件的有效标识","link":"#_3-2-加密文件的有效标识","children":[]},{"level":3,"title":"3.3 用户及卷的有效标识","slug":"_3-3-用户及卷的有效标识","link":"#_3-3-用户及卷的有效标识","children":[]}]},{"level":2,"title":"4 用户模式与内核模式数据通信的研究","slug":"_4-用户模式与内核模式数据通信的研究","link":"#_4-用户模式与内核模式数据通信的研究","children":[]},{"level":2,"title":"5 透明加密的关键技术的研究","slug":"_5-透明加密的关键技术的研究","link":"#_5-透明加密的关键技术的研究","children":[{"level":3,"title":"5.1 文件 I/O 的详细分析","slug":"_5-1-文件-i-o-的详细分析","link":"#_5-1-文件-i-o-的详细分析","children":[]},{"level":3,"title":"5.2 文件缓存的处理","slug":"_5-2-文件缓存的处理","link":"#_5-2-文件缓存的处理","children":[]},{"level":3,"title":"5.3 文件 I/O 请求缓冲区的替换","slug":"_5-3-文件-i-o-请求缓冲区的替换","link":"#_5-3-文件-i-o-请求缓冲区的替换","children":[]},{"level":3,"title":"5.4  结合透明加密驱动后的 I/O 流程分析","slug":"_5-4-结合透明加密驱动后的-i-o-流程分析","link":"#_5-4-结合透明加密驱动后的-i-o-流程分析","children":[]}]},{"level":2,"title":"6 高度可信的身份验证的研究","slug":"_6-高度可信的身份验证的研究","link":"#_6-高度可信的身份验证的研究","children":[]},{"level":2,"title":"7 本章小结","slug":"_7-本章小结","link":"#_7-本章小结","children":[]}],"git":{"createdTime":1682174604000,"updatedTime":1682174604000,"contributors":[{"name":"damone","email":"826127212@qq.com","commits":1}]},"readingTime":{"minutes":105.77,"words":31731},"filePathRelative":"blog/operation-system/windows-04.md","localizedDate":"2023年4月22日","excerpt":"<p>在第一章已经详细地介绍了透明解密系统的主要发展状况，目前市面上的透明加密系统，大多存在兼容性差和移植麻烦的情况。最为主要的是目前的透明加密系统，缺乏有效的身份认证机制，导致透明加密系统的安全性受到了极大的影响。本章结合 Minifilter 和 LayerBSD 设计思想，详细地分析了透明加密系统的基本结构和原理，给出了有效的关键信息标识的方法。研究了内核模式与用户模式便捷的通信模型，详细给出了多种透明加密系统核心部分的结构并分析它们之间的优缺点，最后综合透明加密系统的整个架构，给出了一套高度可信的身份验证机制。</p>\\n<h2> 1 文件透明加密系统的基本原理</h2>\\n<p>文件透明加密是指用户在操作的时候，虽然后台在自动的进行加解密，但是用户根本不知道加密及解密的存在，就像中间的隔了一层屏幕辐射过滤膜一样，用户感觉到不到它的存在。如图 1，在布置了透明加密的系统中，在进行文件 I/O 操作时，文件透明加密系统进行透明加解密，上层的已经授权的进程能够获取到文件的明文，非授权的进程仍然无法获取到文件的明文，故而防止了通过其它的进程获取文件明文并将其通过网络将文件传递到系统之外。在文件 I/O 过程中，文件透明加密及解密驱动会进行文件 I/O 进行过滤，拦截满足策略的 I/O 进行文件的加密及解密等相关的操作。</p>","autoDesc":true}`);export{e as data};
