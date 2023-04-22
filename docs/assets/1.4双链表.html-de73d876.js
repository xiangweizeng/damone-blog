import{_ as n,N as s,S as a,Z as p}from"./framework-72158890.js";const t="/damone-blog/images/datastruct/20210418102417468.png",e="/damone-blog/images/datastruct/20210418105409128.jpg",o="/damone-blog/images/datastruct/20210418104109509.png",c="/damone-blog/images/datastruct/20210418142232335.png",l={},i=p(`<h3 id="_1-4-1-单链表的定义" tabindex="-1"><a class="header-anchor" href="#_1-4-1-单链表的定义" aria-hidden="true">#</a> 1.4.1 单链表的定义</h3><p>单链表的结点中只有一个指向其后继的指针，使得单链表要访问某个结点的前驱结点时，只能从头开始遍历，访问后驱结点的复杂度为O(1)，访问前驱结点的复杂度为O(n)。为了克服上述缺点，引入了双链表。</p><p><code>双链表</code>的结点中有两个指针<code>prior</code>和<code>next</code>，分别指向前驱结点和后继结点。</p><h3 id="_1-4-2-双链表的实现方式" tabindex="-1"><a class="header-anchor" href="#_1-4-2-双链表的实现方式" aria-hidden="true">#</a> 1.4.2 双链表的实现方式</h3><p>实现方式：<code>不带头结点</code>和<code>带头结点</code>，一般带头结点比不带头结点好</p><p>带头结点：写操作代码方便，一般用带头结点，不明确的都是带头结点的</p><p>不带头结点：写操作代码麻烦，要区分第一个数据和后续数据的处理</p><h3 id="_1-4-3-双链表上的操作-带头结点" tabindex="-1"><a class="header-anchor" href="#_1-4-3-双链表上的操作-带头结点" aria-hidden="true">#</a> 1.4.3 双链表上的操作（带头结点）</h3><h4 id="双链表的类型描述" tabindex="-1"><a class="header-anchor" href="#双链表的类型描述" aria-hidden="true">#</a> 双链表的类型描述</h4><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>typedef struct DNode{
    int data;  //数据域
    struct DNode *prior,*next;  //前驱和后继指针
}DNode, *DLinkList;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h4><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//初始化</span>
bool <span class="token function">InitList</span><span class="token punctuation">(</span>DLinkList <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    L <span class="token operator">=</span> <span class="token punctuation">(</span>LNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>DLinkList<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>L <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token keyword">return</span> false<span class="token punctuation">;</span>
    L<span class="token operator">-&gt;</span>prior <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    L<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="判空" tabindex="-1"><a class="header-anchor" href="#判空" aria-hidden="true">#</a> 判空</h4><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//判空操作</span>
bool <span class="token function">Empty</span><span class="token punctuation">(</span>DLinkList L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>L<span class="token operator">-&gt;</span>next <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> true<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> false<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="建立双链表" tabindex="-1"><a class="header-anchor" href="#建立双链表" aria-hidden="true">#</a> 建立双链表</h4><h5 id="头插法建立双链表" tabindex="-1"><a class="header-anchor" href="#头插法建立双链表" aria-hidden="true">#</a> 头插法建立双链表</h5><p>用于链表的逆置</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//头插法建立双链表</span>
DLinkList <span class="token function">HeadInsert</span><span class="token punctuation">(</span>DLinkList <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">InitList</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//初始化</span>
    <span class="token keyword">int</span> x<span class="token punctuation">;</span>
    cin<span class="token operator">&gt;&gt;</span>x<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>x<span class="token operator">!=</span><span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        DNode <span class="token operator">*</span>s <span class="token operator">=</span> <span class="token punctuation">(</span>DNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>DNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s<span class="token operator">-&gt;</span>data <span class="token operator">=</span> x<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>L<span class="token operator">-&gt;</span>next <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            s<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
            s<span class="token operator">-&gt;</span>prior <span class="token operator">=</span> L<span class="token punctuation">;</span>
            L<span class="token operator">-&gt;</span>next <span class="token operator">=</span> s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            s<span class="token operator">-&gt;</span>next <span class="token operator">=</span> L<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
            L<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>prior <span class="token operator">=</span> s<span class="token punctuation">;</span>
            s<span class="token operator">-&gt;</span>prior <span class="token operator">=</span> L<span class="token punctuation">;</span>
            L<span class="token operator">-&gt;</span>next <span class="token operator">=</span> s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cin<span class="token operator">&gt;&gt;</span>x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> L<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="尾插法建立单链表" tabindex="-1"><a class="header-anchor" href="#尾插法建立单链表" aria-hidden="true">#</a> 尾插法建立单链表</h5><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//尾插法建立双链表</span>
DLinkList <span class="token function">TailInsert</span><span class="token punctuation">(</span>DLinkList <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">InitList</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
    DNode <span class="token operator">*</span>s<span class="token punctuation">,</span><span class="token operator">*</span>r<span class="token operator">=</span>L<span class="token punctuation">;</span>
    <span class="token keyword">int</span> x<span class="token punctuation">;</span>
    cin<span class="token operator">&gt;&gt;</span>x<span class="token punctuation">;</span><span class="token comment">/// 相当于scanf</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>x<span class="token operator">!=</span><span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        s <span class="token operator">=</span> <span class="token punctuation">(</span>DNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>DNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s<span class="token operator">-&gt;</span>data <span class="token operator">=</span> x<span class="token punctuation">;</span>
        s<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
        s<span class="token operator">-&gt;</span>prior <span class="token operator">=</span> r<span class="token punctuation">;</span>
        r<span class="token operator">-&gt;</span>next <span class="token operator">=</span> s<span class="token punctuation">;</span>
        r <span class="token operator">=</span> s<span class="token punctuation">;</span>
        cin<span class="token operator">&gt;&gt;</span>x<span class="token punctuation">;</span><span class="token comment">/// 相当于scanf</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> L<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="插入" tabindex="-1"><a class="header-anchor" href="#插入" aria-hidden="true">#</a> 插入</h4><p><code>时间复杂度</code>=O(1)</p><figure><img src="`+e+`" alt="插入操作" tabindex="0" loading="lazy"><figcaption>插入操作</figcaption></figure><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//将x插入到双链表L中*p结点的下一个结点</span>
bool <span class="token function">Insert</span><span class="token punctuation">(</span>DNode <span class="token operator">*</span>p<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    DNode <span class="token operator">*</span>s <span class="token operator">=</span> <span class="token punctuation">(</span>DNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>DNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token operator">||</span>s<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token keyword">return</span> false<span class="token punctuation">;</span>
    s<span class="token operator">-&gt;</span>data <span class="token operator">=</span> x<span class="token punctuation">;</span>
    s<span class="token operator">-&gt;</span>next <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>  <span class="token comment">//1</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token operator">-&gt;</span>next <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> p<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>prior <span class="token operator">=</span> s<span class="token punctuation">;</span> <span class="token comment">//2</span>
    s<span class="token operator">-&gt;</span>prior <span class="token operator">=</span> p<span class="token punctuation">;</span>  <span class="token comment">//3</span>
    p<span class="token operator">-&gt;</span>next <span class="token operator">=</span> s<span class="token punctuation">;</span> <span class="token comment">//4</span>
    <span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//在双链表L中*p结点后插入s结点</span>
bool <span class="token function">Insert</span><span class="token punctuation">(</span>DNode <span class="token operator">*</span>p<span class="token punctuation">,</span> DNode <span class="token operator">*</span>s<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token operator">||</span>s<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token keyword">return</span> false<span class="token punctuation">;</span>
    s<span class="token operator">-&gt;</span>next <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>  <span class="token comment">//1</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token operator">-&gt;</span>next <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> p<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>prior <span class="token operator">=</span> s<span class="token punctuation">;</span> <span class="token comment">//2</span>
    s<span class="token operator">-&gt;</span>prior <span class="token operator">=</span> p<span class="token punctuation">;</span>  <span class="token comment">//3</span>
    p<span class="token operator">-&gt;</span>next <span class="token operator">=</span> s<span class="token punctuation">;</span> <span class="token comment">//4</span>
    <span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h4><h5 id="按位序删除" tabindex="-1"><a class="header-anchor" href="#按位序删除" aria-hidden="true">#</a> 按位序删除</h5><p><code>时间复杂度</code>=O(n)</p><figure><img src="`+o+`" alt="删除操作" tabindex="0" loading="lazy"><figcaption>删除操作</figcaption></figure><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//删除操作:将双链表中的第i个结点删除</span>
bool <span class="token function">Delete</span><span class="token punctuation">(</span>DLinkList <span class="token operator">&amp;</span>L<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">1</span> <span class="token operator">||</span> i<span class="token operator">&gt;</span><span class="token function">Length</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> false<span class="token punctuation">;</span>
    DNode <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token function">GetElem</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token keyword">return</span> false<span class="token punctuation">;</span>
    DNode <span class="token operator">*</span>q <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    p<span class="token operator">-&gt;</span>next <span class="token operator">=</span> q<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span> <span class="token comment">//1</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token operator">-&gt;</span>next <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> q<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>prior <span class="token operator">=</span> p<span class="token punctuation">;</span> <span class="token comment">//2</span>
    <span class="token function">free</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="指定结点的删除" tabindex="-1"><a class="header-anchor" href="#指定结点的删除" aria-hidden="true">#</a> 指定结点的删除</h5><p><code>时间复杂度</code>=O(1)</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//删除操作:删除双链表中的p结点的后继结点</span>
<span class="token keyword">void</span> <span class="token function">DeleteNextNode</span><span class="token punctuation">(</span>DNode <span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token keyword">return</span> false<span class="token punctuation">;</span>
    DNode <span class="token operator">*</span>q <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>q <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token keyword">return</span> false<span class="token punctuation">;</span>
    p<span class="token operator">-&gt;</span>next <span class="token operator">=</span> q<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span> <span class="token comment">//1</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token operator">-&gt;</span>next <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> q<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>prior <span class="token operator">=</span> p<span class="token punctuation">;</span> <span class="token comment">//2</span>
    <span class="token function">free</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查找-与单链表完全一样" tabindex="-1"><a class="header-anchor" href="#查找-与单链表完全一样" aria-hidden="true">#</a> 查找(与单链表完全一样)</h4><h5 id="按位查找" tabindex="-1"><a class="header-anchor" href="#按位查找" aria-hidden="true">#</a> 按位查找</h5><p><code>平均时间复杂度</code>=O(n)</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//按位查找：查找在单链表L中第i个位置的结点</span>
DNode <span class="token operator">*</span><span class="token function">GetElem</span><span class="token punctuation">(</span>DLinkList L<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    DNode <span class="token operator">*</span>p <span class="token operator">=</span> L<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p <span class="token operator">&amp;&amp;</span> j<span class="token operator">&lt;</span>i<span class="token punctuation">)</span><span class="token punctuation">{</span>
        p <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        j<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> p<span class="token punctuation">;</span> <span class="token comment">//如果i大于表长，p=NULL,直接返回p即可</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="按值查找" tabindex="-1"><a class="header-anchor" href="#按值查找" aria-hidden="true">#</a> 按值查找</h5><p><code>平均时间复杂度</code>=O(n)</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//按值查找：查找e在L中的位置</span>
DNode <span class="token operator">*</span><span class="token function">LocateElem</span><span class="token punctuation">(</span>DLinkList L<span class="token punctuation">,</span> <span class="token keyword">int</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    DNode <span class="token operator">*</span>p <span class="token operator">=</span> L<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p <span class="token operator">&amp;&amp;</span> p<span class="token operator">-&gt;</span>data <span class="token operator">!=</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
        p <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="求表长-与单链表完全一样" tabindex="-1"><a class="header-anchor" href="#求表长-与单链表完全一样" aria-hidden="true">#</a> 求表长(与单链表完全一样)</h4><p><code>平均时间复杂度</code>=O(n)</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//求表的长度</span>
<span class="token keyword">int</span> <span class="token function">Length</span><span class="token punctuation">(</span>DLinkList L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    DNode <span class="token operator">*</span>p <span class="token operator">=</span> L<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>P<span class="token operator">-&gt;</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span>
        p <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        len<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> len<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="遍历-与单链表完全一样" tabindex="-1"><a class="header-anchor" href="#遍历-与单链表完全一样" aria-hidden="true">#</a> 遍历(与单链表完全一样)</h4><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//遍历操作</span>
<span class="token keyword">void</span> <span class="token function">PrintList</span><span class="token punctuation">(</span>DLinkList L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    DNode <span class="token operator">*</span>p <span class="token operator">=</span> L<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">{</span>
        cout<span class="token operator">&lt;&lt;</span>p<span class="token operator">-&gt;</span>data<span class="token operator">&lt;&lt;</span><span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
        p <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    cout<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="销毁" tabindex="-1"><a class="header-anchor" href="#销毁" aria-hidden="true">#</a> 销毁</h4><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//销毁操作</span>
<span class="token keyword">void</span> <span class="token function">DestoryList</span><span class="token punctuation">(</span>DLinkList L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//循环释放各点的数据结点</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>L<span class="token operator">-&gt;</span>next <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">DeleteNextNode</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">free</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//释放头结点</span>
    L <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-4-完整代码" tabindex="-1"><a class="header-anchor" href="#_1-4-4-完整代码" aria-hidden="true">#</a> 1.4.4 完整代码</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h&gt;</span></span>
using namespace std<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">DNode</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">DNode</span> <span class="token operator">*</span>prior<span class="token punctuation">,</span><span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>DNode<span class="token punctuation">,</span> <span class="token operator">*</span>DLinkList<span class="token punctuation">;</span>

<span class="token comment">//初始化</span>
<span class="token keyword">void</span> <span class="token function">InitList</span><span class="token punctuation">(</span>DLinkList <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    L <span class="token operator">=</span> <span class="token punctuation">(</span>DNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>DLinkList<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    L<span class="token operator">-&gt;</span>prior <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    L<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//遍历操作</span>
<span class="token keyword">void</span> <span class="token function">PrintList</span><span class="token punctuation">(</span>DLinkList L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    DNode <span class="token operator">*</span>p <span class="token operator">=</span> L<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">{</span>
        cout<span class="token operator">&lt;&lt;</span>p<span class="token operator">-&gt;</span>data<span class="token operator">&lt;&lt;</span><span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
        p <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    cout<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//求双链表的长度</span>
<span class="token keyword">int</span> <span class="token function">Length</span><span class="token punctuation">(</span>DLinkList L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    DNode <span class="token operator">*</span>p <span class="token operator">=</span> L<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">{</span>
        len<span class="token operator">++</span><span class="token punctuation">;</span>
        p <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> len<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//头插法建立双链表</span>
DLinkList <span class="token function">HeadInsert</span><span class="token punctuation">(</span>DLinkList <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">InitList</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//初始化</span>
    <span class="token keyword">int</span> x<span class="token punctuation">;</span>
    cin<span class="token operator">&gt;&gt;</span>x<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>x<span class="token operator">!=</span><span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        DNode <span class="token operator">*</span>s <span class="token operator">=</span> <span class="token punctuation">(</span>DNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>DNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s<span class="token operator">-&gt;</span>data <span class="token operator">=</span> x<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>L<span class="token operator">-&gt;</span>next <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            s<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
            s<span class="token operator">-&gt;</span>prior <span class="token operator">=</span> L<span class="token punctuation">;</span>
            L<span class="token operator">-&gt;</span>next <span class="token operator">=</span> s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            s<span class="token operator">-&gt;</span>next <span class="token operator">=</span> L<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
            L<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>prior <span class="token operator">=</span> s<span class="token punctuation">;</span>
            s<span class="token operator">-&gt;</span>prior <span class="token operator">=</span> L<span class="token punctuation">;</span>
            L<span class="token operator">-&gt;</span>next <span class="token operator">=</span> s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cin<span class="token operator">&gt;&gt;</span>x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> L<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//尾插法建立双链表</span>
DLinkList <span class="token function">TailInsert</span><span class="token punctuation">(</span>DLinkList <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">InitList</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
    DNode <span class="token operator">*</span>s<span class="token punctuation">,</span><span class="token operator">*</span>r<span class="token operator">=</span>L<span class="token punctuation">;</span>
    <span class="token keyword">int</span> x<span class="token punctuation">;</span>
    cin<span class="token operator">&gt;&gt;</span>x<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>x<span class="token operator">!=</span><span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        s <span class="token operator">=</span> <span class="token punctuation">(</span>DNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>DNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s<span class="token operator">-&gt;</span>data <span class="token operator">=</span> x<span class="token punctuation">;</span>
        s<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
        s<span class="token operator">-&gt;</span>prior <span class="token operator">=</span> r<span class="token punctuation">;</span>
        r<span class="token operator">-&gt;</span>next <span class="token operator">=</span> s<span class="token punctuation">;</span>
        r <span class="token operator">=</span> s<span class="token punctuation">;</span>
        cin<span class="token operator">&gt;&gt;</span>x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> L<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//按值查找：查找x在L中的位置</span>
DNode <span class="token operator">*</span><span class="token function">LocateElem</span><span class="token punctuation">(</span>DLinkList L<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    DNode <span class="token operator">*</span>p <span class="token operator">=</span> L<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p <span class="token operator">&amp;&amp;</span> p<span class="token operator">-&gt;</span>data <span class="token operator">!=</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
        p <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//按位查找：查找在双链表L中第i个位置的结点</span>
DNode <span class="token operator">*</span><span class="token function">GetElem</span><span class="token punctuation">(</span>DLinkList L<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    DNode <span class="token operator">*</span>p <span class="token operator">=</span> L<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token keyword">return</span> L<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p <span class="token operator">&amp;&amp;</span> j<span class="token operator">&lt;</span>i<span class="token punctuation">)</span><span class="token punctuation">{</span>
        p <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        j<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> p<span class="token punctuation">;</span> <span class="token comment">//如果i大于表长，p=NULL,直接返回p即可</span>
<span class="token punctuation">}</span>

<span class="token comment">//将x插入到双链表L中*p结点的下一个结点</span>
<span class="token keyword">void</span> <span class="token function">Insert</span><span class="token punctuation">(</span>DLinkList <span class="token operator">&amp;</span>L<span class="token punctuation">,</span> DNode <span class="token operator">*</span>p<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    DNode <span class="token operator">*</span>s <span class="token operator">=</span> <span class="token punctuation">(</span>DNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>DNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    s<span class="token operator">-&gt;</span>data <span class="token operator">=</span> x<span class="token punctuation">;</span>
    s<span class="token operator">-&gt;</span>next <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    p<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>prior <span class="token operator">=</span> s<span class="token punctuation">;</span>
    s<span class="token operator">-&gt;</span>prior <span class="token operator">=</span> p<span class="token punctuation">;</span>
    p<span class="token operator">-&gt;</span>next <span class="token operator">=</span> s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//删除操作:将双链表中的第i个结点删除</span>
<span class="token keyword">void</span> <span class="token function">Delete</span><span class="token punctuation">(</span>DLinkList <span class="token operator">&amp;</span>L<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">1</span> <span class="token operator">||</span> i<span class="token operator">&gt;</span><span class="token function">Length</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;delete failed: index is wrong.&quot;</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    DNode <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token function">GetElem</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    DNode <span class="token operator">*</span>q <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    p<span class="token operator">-&gt;</span>next <span class="token operator">=</span> q<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    q<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>prior <span class="token operator">=</span> p<span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//判空操作</span>
bool <span class="token function">Empty</span><span class="token punctuation">(</span>DLinkList L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>L<span class="token operator">-&gt;</span>next <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;L is null&quot;</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
        <span class="token keyword">return</span> true<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;L is not null&quot;</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
        <span class="token keyword">return</span> false<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//尾插法建立双链表，并遍历单链表</span>
    DLinkList L <span class="token operator">=</span> <span class="token function">TailInsert</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;L: &quot;</span><span class="token punctuation">;</span>
    <span class="token function">PrintList</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    DNode <span class="token operator">*</span>p<span class="token punctuation">;</span>
    <span class="token comment">//按值查找</span>
    p <span class="token operator">=</span> <span class="token function">LocateElem</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;值为2的结点的下一个结点值是：&quot;</span><span class="token operator">&lt;&lt;</span>p<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>data<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;值为2的结点的上一个结点值是：&quot;</span><span class="token operator">&lt;&lt;</span>p<span class="token operator">-&gt;</span>prior<span class="token operator">-&gt;</span>data<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    <span class="token comment">//按位查找</span>
    p <span class="token operator">=</span> <span class="token function">GetElem</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;第三个结点值是：&quot;</span><span class="token operator">&lt;&lt;</span>p<span class="token operator">-&gt;</span>data<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    
    <span class="token comment">//插入操作</span>
    <span class="token function">Insert</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span>p<span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;在第三个结点后面插入值为7的结点后L： &quot;</span><span class="token punctuation">;</span>
    <span class="token function">PrintList</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">//删除操作</span>
    <span class="token function">Delete</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;删除第五个结点后L： &quot;</span><span class="token punctuation">;</span>
    <span class="token function">PrintList</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">//求表长</span>
    cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;表长为：&quot;</span><span class="token operator">&lt;&lt;</span><span class="token function">Length</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span><span class="token punctuation">;</span>
    
    <span class="token comment">//判空</span>
    <span class="token function">Empty</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="运行结果" tabindex="-1"><a class="header-anchor" href="#运行结果" aria-hidden="true">#</a> 运行结果：</h4><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',51),u=[i];function r(k,d){return s(),a("div",null,u)}const m=n(l,[["render",r],["__file","1.4双链表.html.vue"]]);export{m as default};
