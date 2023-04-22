<template><div><h2 id="_6-4-1-分块查找的定义" tabindex="-1"><a class="header-anchor" href="#_6-4-1-分块查找的定义" aria-hidden="true">#</a> 6.4.1 分块查找的定义</h2>
<p><code v-pre>分块查找</code>，又叫<code v-pre>索引顺序查找</code>。</p>
<h2 id="_6-4-2-分块查找的实现的实现" tabindex="-1"><a class="header-anchor" href="#_6-4-2-分块查找的实现的实现" aria-hidden="true">#</a> 6.4.2 分块查找的实现的实现</h2>
<p><code v-pre>算法思想</code>：用一个<code v-pre>索引表</code>给数据归类。</p>
<p>算法过程：
①在<code v-pre>索引表</code>中确定待查记录所属的分块（<code v-pre>可顺序、可折半</code>）
②在<code v-pre>块内顺序查找</code></p>
<figure><img src="/images/datastruct/uTools_1638257539381.png" alt="uTools_1638257539381" tabindex="0" loading="lazy"><figcaption>uTools_1638257539381</figcaption></figure>
<h3 id="用折半查找索引表" tabindex="-1"><a class="header-anchor" href="#用折半查找索引表" aria-hidden="true">#</a> 用折半查找索引表：</h3>
<p>若索引表中不包含目标关键字，则折半查找索引表<code v-pre>最终停在low&gt;high</code>，要<code v-pre>在low所指分块中查找</code></p>
<h2 id="_6-4-3-查找效率分析" tabindex="-1"><a class="header-anchor" href="#_6-4-3-查找效率分析" aria-hidden="true">#</a> 6.4.3 查找效率分析</h2>
<figure><img src="/images/datastruct/uTools_1638258212238.png" alt="uTools_1638258212238" tabindex="0" loading="lazy"><figcaption>uTools_1638258212238</figcaption></figure>
<figure><img src="/images/datastruct/uTools_1638258279430.png" alt="uTools_1638258279430" tabindex="0" loading="lazy"><figcaption>uTools_1638258279430</figcaption></figure>
<h2 id="_6-4-4-分块查找的优化" tabindex="-1"><a class="header-anchor" href="#_6-4-4-分块查找的优化" aria-hidden="true">#</a> 6.4.4 分块查找的优化</h2>
<p>上面的分块查找对插入删除不友好。</p>
<p>改进：索引表为顺序表，查找表为链表。</p>
<figure><img src="/images/datastruct/1638258852038.jpg" alt="1638258852038" tabindex="0" loading="lazy"><figcaption>1638258852038</figcaption></figure>
</div></template>


