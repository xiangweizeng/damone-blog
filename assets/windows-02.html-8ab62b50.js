const e=JSON.parse(`{"key":"v-73d848f2","path":"/blog/operation-system/windows-02.html","title":"透明加密系统设计及实现-绪论","lang":"zh-CN","frontmatter":{"title":"透明加密系统设计及实现-绪论","category":["工作总结","透明加密"],"description":"随着信息时代的到来，计算机成为了人们日常生活的必备之物。大量的桌面计算机和移动终端设备给人们带来了极大的方便，但是也增加的个人的机密信息泄密的可能性。特别是对于机密部门的机密资料和企业公司的核心技术等更容易通过信息技术的通道泄密，信息技术安全面临着前所未有的挑战。通常的网络隔离及网络防火墙很难再满足需求，因为最好的防火墙永远也抵不过社会工程学的釜底抽薪，人事的问题在目前的网络技术下是一个永生的话题。 那么这样才能更好地解决这个问题呢，一切问题的解决思路都要归根到事物的本源。信息是根本，而信息本身的载体更是依托，把握住电子信息的主要信息的载体就是文件保护的关键。文件作为电子信息的主要载体，文件的泄漏就代表了信息的泄漏。解决文件泄密的最为主要的方法是对文件进行加密，但是静态的加密是一种不可控的方法，是一种非实时的，可用性极低的技术。而动态加密是解决这个问题的最根本的方法，动态加密也称透明加密，是在文件使用时加密，是一种使用时加密技术，具有很强的控制能力，文件在脱离了布置透明加密的系统时是无法使用的，具有很强的控制性。","head":[["meta",{"property":"og:url","content":"https://github.com/xiangweizeng/damone-blog/blog/operation-system/windows-02.html"}],["meta",{"property":"og:site_name","content":"Damone's Blog"}],["meta",{"property":"og:title","content":"透明加密系统设计及实现-绪论"}],["meta",{"property":"og:description","content":"随着信息时代的到来，计算机成为了人们日常生活的必备之物。大量的桌面计算机和移动终端设备给人们带来了极大的方便，但是也增加的个人的机密信息泄密的可能性。特别是对于机密部门的机密资料和企业公司的核心技术等更容易通过信息技术的通道泄密，信息技术安全面临着前所未有的挑战。通常的网络隔离及网络防火墙很难再满足需求，因为最好的防火墙永远也抵不过社会工程学的釜底抽薪，人事的问题在目前的网络技术下是一个永生的话题。 那么这样才能更好地解决这个问题呢，一切问题的解决思路都要归根到事物的本源。信息是根本，而信息本身的载体更是依托，把握住电子信息的主要信息的载体就是文件保护的关键。文件作为电子信息的主要载体，文件的泄漏就代表了信息的泄漏。解决文件泄密的最为主要的方法是对文件进行加密，但是静态的加密是一种不可控的方法，是一种非实时的，可用性极低的技术。而动态加密是解决这个问题的最根本的方法，动态加密也称透明加密，是在文件使用时加密，是一种使用时加密技术，具有很强的控制能力，文件在脱离了布置透明加密的系统时是无法使用的，具有很强的控制性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-22T14:43:24.000Z"}],["meta",{"property":"article:author","content":"damone"}],["meta",{"property":"article:modified_time","content":"2023-04-22T14:43:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"透明加密系统设计及实现-绪论\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-22T14:43:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"damone\\",\\"url\\":\\"https://github.com/xiangweizeng\\"}]}"]]},"headers":[{"level":2,"title":"1 背景知识","slug":"_1-背景知识","link":"#_1-背景知识","children":[]},{"level":2,"title":"2 国内外研究现状","slug":"_2-国内外研究现状","link":"#_2-国内外研究现状","children":[]},{"level":2,"title":"3 主要内容","slug":"_3-主要内容","link":"#_3-主要内容","children":[]},{"level":2,"title":"4 系列文章的整体结构","slug":"_4-系列文章的整体结构","link":"#_4-系列文章的整体结构","children":[]}],"git":{"createdTime":1682174604000,"updatedTime":1682174604000,"contributors":[{"name":"damone","email":"826127212@qq.com","commits":1}]},"readingTime":{"minutes":34.05,"words":10216},"filePathRelative":"blog/operation-system/windows-02.md","localizedDate":"2023年4月22日","excerpt":"<p>随着信息时代的到来，计算机成为了人们日常生活的必备之物。大量的桌面计算机和移动终端设备给人们带来了极大的方便，但是也增加的个人的机密信息泄密的可能性。特别是对于机密部门的机密资料和企业公司的核心技术等更容易通过信息技术的通道泄密，信息技术安全面临着前所未有的挑战。通常的网络隔离及网络防火墙很难再满足需求，因为最好的防火墙永远也抵不过社会工程学的釜底抽薪，人事的问题在目前的网络技术下是一个永生的话题。</p>\\n<p>那么这样才能更好地解决这个问题呢，一切问题的解决思路都要归根到事物的本源。信息是根本，而信息本身的载体更是依托，把握住电子信息的主要信息的载体就是文件保护的关键。文件作为电子信息的主要载体，文件的泄漏就代表了信息的泄漏。解决文件泄密的最为主要的方法是对文件进行加密，但是静态的加密是一种不可控的方法，是一种非实时的，可用性极低的技术。而动态加密是解决这个问题的最根本的方法，动态加密也称透明加密，是在文件使用时加密，是一种使用时加密技术，具有很强的控制能力，文件在脱离了布置透明加密的系统时是无法使用的，具有很强的控制性。</p>","autoDesc":true}`);export{e as data};
