<template><div><h1 id="_4-5-二叉排序树" tabindex="-1"><a class="header-anchor" href="#_4-5-二叉排序树" aria-hidden="true">#</a> 4.5 二叉排序树</h1>
<h2 id="_4-5-1-二叉排序树的定义" tabindex="-1"><a class="header-anchor" href="#_4-5-1-二叉排序树的定义" aria-hidden="true">#</a> 4.5.1 二叉排序树的定义</h2>
<p><code v-pre>二叉排序树</code>，又称<code v-pre>二叉查找树</code>(<code v-pre>BST</code>, <code v-pre>Binary Search Tree</code>)</p>
<p>定义：一棵二叉树或者是空二叉树，或者是具有如下性质的二叉树：
<code v-pre>左子树</code>上所有结点的关键字均<code v-pre>小于</code> <code v-pre>根结点</code>的关键字；
<code v-pre>右子树</code>上所有结点的关键字均<code v-pre>大于</code> <code v-pre>根结点</code>的关键字。
左子树和右子树又各是一棵二叉排序树。</p>
<p><code v-pre>左子树结点值&lt;根结点值&lt;右子树结点值</code>
进行<code v-pre>中序遍历</code>,可以得到一个<code v-pre>递增的有序序列</code></p>
<p><code v-pre>作用</code>：元素的有序组织、<code v-pre>搜索</code>。</p>
<figure><img src="/images/datastruct/94cad1c8a786c9179df9bed6c93d70cf3ac75763.jfif" alt="二叉排序树" tabindex="0" loading="lazy"><figcaption>二叉排序树</figcaption></figure>
<h2 id="_4-5-2-二叉排序树的存储结构-用链式存储" tabindex="-1"><a class="header-anchor" href="#_4-5-2-二叉排序树的存储结构-用链式存储" aria-hidden="true">#</a> 4.5.2 二叉排序树的存储结构（用链式存储）</h2>
<p>二叉排序树的类型表述（与二叉树一样）</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> data<span class="token punctuation">;</span>                   <span class="token comment">//数据域</span>
	<span class="token keyword">struct</span> <span class="token class-name">BiTNode</span> <span class="token operator">*</span>lchide<span class="token punctuation">,</span> <span class="token operator">*</span>rchild<span class="token punctuation">;</span> <span class="token comment">//左、右孩子指针</span>
<span class="token punctuation">}</span>BSTNode<span class="token punctuation">,</span> <span class="token operator">*</span>BSTree<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-5-3-二叉排序树的查找" tabindex="-1"><a class="header-anchor" href="#_4-5-3-二叉排序树的查找" aria-hidden="true">#</a> 4.5.3 二叉排序树的查找</h2>
<p>非递归好于递归</p>
<p>算法思想：
若树非空，目标值与根结点的值比较：
若相等，则查找成功。
若小于根结点,则在左子树上查找,否则在右子树上查找。
查找成功,返回结点指针;查找失败返回NULL。</p>
<h3 id="递归查找" tabindex="-1"><a class="header-anchor" href="#递归查找" aria-hidden="true">#</a> 递归查找</h3>
<p><code v-pre>最坏空间复杂度</code>=O(h)</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token comment">//在二叉排序树中查找值为key的结点（递归实现）</span>
BSTNode <span class="token operator">*</span><span class="token function">BST_Search</span><span class="token punctuation">(</span>BSTree T<span class="token punctuation">,</span><span class="token keyword">int</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>T <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>key <span class="token operator">==</span> T<span class="token operator">-></span>data<span class="token punctuation">)</span> <span class="token keyword">return</span> T<span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>key <span class="token operator">&lt;</span> T<span class="token operator">-></span>data<span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token function">BST_Search</span><span class="token punctuation">(</span> T<span class="token operator">-></span>lchild<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
    	<span class="token keyword">return</span> <span class="token function">BST_Search</span><span class="token punctuation">(</span> T<span class="token operator">-></span>rchild<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="非递归查找" tabindex="-1"><a class="header-anchor" href="#非递归查找" aria-hidden="true">#</a> 非递归查找</h3>
<p><code v-pre>最坏空间复杂度</code>=O(1)</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token comment">//在二叉排序树中查找值为key的结点</span>
BSTNode <span class="token operator">*</span><span class="token function">NoRBST_Search</span><span class="token punctuation">(</span>BSTree T<span class="token punctuation">,</span><span class="token keyword">int</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>T<span class="token operator">!=</span><span class="token constant">NULL</span> <span class="token operator">&amp;&amp;</span> key<span class="token operator">!=</span>T<span class="token operator">-></span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>key <span class="token operator">&lt;</span> T<span class="token operator">-></span>data<span class="token punctuation">)</span> T <span class="token operator">=</span> T<span class="token operator">-></span>lchild<span class="token punctuation">;</span>
        <span class="token keyword">else</span> T <span class="token operator">=</span> T<span class="token operator">-></span>rchild<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> T<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-5-4-二叉排序树的插入" tabindex="-1"><a class="header-anchor" href="#_4-5-4-二叉排序树的插入" aria-hidden="true">#</a> 4.5.4 二叉排序树的插入</h2>
<p>非递归好于递归</p>
<p>算法思想：
若原二叉排序树为空，则直接插入结点；
否则，若关键字k小于根结点值,则插入到左子树，若关键字k大于根结点值，则插入到右子树</p>
<h3 id="递归插入" tabindex="-1"><a class="header-anchor" href="#递归插入" aria-hidden="true">#</a> 递归插入</h3>
<p><code v-pre>最坏空间复杂度</code>=O(h)</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token comment">//在二叉排序树插入关键字为k的新结点(递归实现)</span>
<span class="token keyword">int</span> <span class="token function">BST_Insert</span><span class="token punctuation">(</span>BSTree <span class="token operator">&amp;</span>T<span class="token punctuation">,</span><span class="token keyword">int</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>T <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>                          <span class="token comment">//树为空，则插入根结点</span>
        T <span class="token operator">=</span> <span class="token punctuation">(</span>BSTree<span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>BSTNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        T<span class="token operator">-></span>data <span class="token operator">=</span> k<span class="token punctuation">;</span>
        T<span class="token operator">-></span>lchild <span class="token operator">=</span> T<span class="token operator">-></span>rchild <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>key <span class="token operator">==</span> T<span class="token operator">-></span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>                     <span class="token comment">//树中存在相同关键字的结点，插入失败</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>key <span class="token operator">&lt;</span> T<span class="token operator">-></span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">BST_Insert</span><span class="token punctuation">(</span> T<span class="token operator">-></span>lchild<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//插入到T的左子树</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">BST_Insert</span><span class="token punctuation">(</span> T<span class="token operator">-></span>rchild<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//插入到T的右子树</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>   	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="非递归插入" tabindex="-1"><a class="header-anchor" href="#非递归插入" aria-hidden="true">#</a> 非递归插入</h3>
<p><code v-pre>最坏空间复杂度</code>=O(1)</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token comment">//二叉排序树非递归插入，最坏空间复杂度Sn=O(1)</span>
<span class="token keyword">int</span> <span class="token function">NoRBST_Insert</span><span class="token punctuation">(</span>BSTree <span class="token operator">&amp;</span>T<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    BSTNode <span class="token operator">*</span>pre <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span><span class="token comment">//二叉树里最后一个结点</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>T <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//原来树为空，申请结点将其插入进去</span>
        T <span class="token operator">=</span> <span class="token punctuation">(</span>BSTree<span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>BSTNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        T<span class="token operator">-></span>data <span class="token operator">=</span> key<span class="token punctuation">;</span>
        T<span class="token operator">-></span>lchild <span class="token operator">=</span> T<span class="token operator">-></span>rchild <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>   <span class="token comment">//成功插入</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">//获取到最后一个结点</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>T <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>key <span class="token operator">==</span> T<span class="token operator">-></span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>   <span class="token comment">//二叉排序树里不可能存在相同的结点，插入失败</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>key <span class="token operator">&lt;</span> T<span class="token operator">-></span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pre <span class="token operator">=</span> T<span class="token punctuation">;</span>
            T <span class="token operator">=</span> T<span class="token operator">-></span>lchild<span class="token punctuation">;</span><span class="token comment">//遍历左孩子</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            pre <span class="token operator">=</span> T<span class="token punctuation">;</span>
            T <span class="token operator">=</span> T<span class="token operator">-></span>rchild<span class="token punctuation">;</span><span class="token comment">//遍历右孩子</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">//插入到左子树</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">&lt;</span> pre<span class="token operator">-></span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        T <span class="token operator">=</span> <span class="token punctuation">(</span>BSTree<span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>BSTNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        T<span class="token operator">-></span>data <span class="token operator">=</span> key<span class="token punctuation">;</span>
        pre<span class="token operator">-></span>lchild <span class="token operator">=</span> T<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>   <span class="token comment">//到了此步已经不存在等于的情况</span>
        <span class="token comment">//插入到右子树</span>
        T <span class="token operator">=</span> <span class="token punctuation">(</span>BSTree<span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>BSTNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        T<span class="token operator">-></span>data <span class="token operator">=</span> key<span class="token punctuation">;</span>
        pre<span class="token operator">-></span>rchild <span class="token operator">=</span> T<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-5-5-二叉排序树的构造" tabindex="-1"><a class="header-anchor" href="#_4-5-5-二叉排序树的构造" aria-hidden="true">#</a> 4.5.5 二叉排序树的构造</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token comment">//按照str[]中的关键字序建立二叉排序树</span>
<span class="token keyword">void</span> <span class="token function">Creat_BST</span><span class="token punctuation">(</span>BSTree <span class="token operator">&amp;</span>T<span class="token punctuation">,</span> <span class="token keyword">int</span> str<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    T<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">BST_Insert</span><span class="token punctuation">(</span>T<span class="token punctuation">,</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-5-6-二叉排序树的删除" tabindex="-1"><a class="header-anchor" href="#_4-5-6-二叉排序树的删除" aria-hidden="true">#</a> 4.5.6 二叉排序树的删除</h2>
<p>先搜索找到目标结点z：</p>
<p>①若被删除结点z是<code v-pre>叶子结点</code>，则<code v-pre>直接删除</code>，不会破坏二叉排序树的性质。</p>
<figure><img src="/images/datastruct/1636465960055.png" alt="1636465960055" tabindex="0" loading="lazy"><figcaption>1636465960055</figcaption></figure>
<p>②若结点z只有一颗左子树或右子树，则让z的子树分为z父结点的子树，代替z的位置</p>
<figure><img src="/images/datastruct/1636465960051.png" alt="1636465960051" tabindex="0" loading="lazy"><figcaption>1636465960051</figcaption></figure>
<p>③若结点z有左、右两棵子树，则令z的直接后继(或直接前驱)替代z，然后从二叉排序树中删去这个直接后继(或直接前驱)，这样就转换成了第一或第二种情况。</p>
<p>直接后继代替</p>
<figure><img src="/images/datastruct/1636465960047.png" alt="1636465960047" tabindex="0" loading="lazy"><figcaption>1636465960047</figcaption></figure>
<p>直接前驱代替</p>
<figure><img src="/images/datastruct/1636466293090.png" alt="1636466293090" tabindex="0" loading="lazy"><figcaption>1636466293090</figcaption></figure>
<h2 id="_4-5-7-查找效率的分析" tabindex="-1"><a class="header-anchor" href="#_4-5-7-查找效率的分析" aria-hidden="true">#</a> 4.5.7 查找效率的分析</h2>
<p>查找长度：对比关键字的次数，反映了查找操作的时间复杂度。</p>
<p>与高度h有关。高度越小，查找效率越高</p>
<p>平衡二叉树的查找效率最高，也是最好情况</p>
<p>最好情况，平均查找长度=O(log<sub>2</sub>n)</p>
<p>最坏情况，平均查找长度=O(n)</p>
<h3 id="平均查找长度计算" tabindex="-1"><a class="header-anchor" href="#平均查找长度计算" aria-hidden="true">#</a> 平均查找长度计算</h3>
<p>查找<code v-pre>成功</code>的平均查找长度：</p>
<figure><img src="/images/datastruct/1637587381063.png" alt="1637587381063" tabindex="0" loading="lazy"><figcaption>1637587381063</figcaption></figure>
<p>查找<code v-pre>失败</code>的平均查找长度：</p>
<figure><img src="/images/datastruct/1637587381058.png" alt="1637587381058" tabindex="0" loading="lazy"><figcaption>1637587381058</figcaption></figure>
</div></template>


