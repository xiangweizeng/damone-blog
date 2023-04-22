<template><div><blockquote>
<p>本文由 <a href="http://ksria.com/simpread/" target="_blank" rel="noopener noreferrer">简悦 SimpRead<ExternalLinkIcon/></a> 转码， 原文地址 <a href="https://my.oschina.net/zengxiaangwei/blog/474598" target="_blank" rel="noopener noreferrer">my.oschina.net<ExternalLinkIcon/></a></p>
</blockquote>
<blockquote>
<p>M5 模拟器对 MIPS 指令集的支持限制为 32 位、小字节序，因此在制作交叉编译工具 链时需要注意正确的字节序。</p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    M5模拟器对MIPS指令集的支持限制为32位、小字节序，因此在制作交叉编译工具
链时需要注意正确的字节序。文中的工具链基于linux-2.6.32、binutils-2.22、glibc-2.13、
glibc-ports-2.13、gcc-4.4.6、gmp-5.0.0、mpfr-3.0.1构建。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>创建宿主机编译环境</li>
</ol>
<hr>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    执行su命令，切换至root权限。执行以下命令，将相关配置信息写入到环境变量。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># export CROSSROOT=/opt/mips-cross
# export TARGET=mipsel-unknown-linux-gnu
# export PREFIX=${CROSSROOT}/tools
# export TARGET_PREFIX=${PREFIX}/${TARGET}
# export PATH=${PREFIX}/bin:${PATH}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    接下来在用户根目录为软件的编译建立相关的文件夹，build-binutils、
build-boot-gcc、build-glibc和build-gcc


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>安装内核头文件</li>
</ol>
<hr>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    内核头文件安装是建立工具链的第一步。从网站http:
源代码包linux-2.6.32.tar.bz2并解压。进入解压出的内核文件夹linux-2.6.32，使用
安装内核头文件


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<h1 id="make-install-hdr-path-prefix-arch-mips-headers-install" tabindex="-1"><a class="header-anchor" href="#make-install-hdr-path-prefix-arch-mips-headers-install" aria-hidden="true">#</a> make INSTALL_HDR_PATH=${PREFIX} ARCH=mips headers_install</h1>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>变量INSTALL_HDR_PATH指定了安装的目标目录，变量ARCH指定了目标架构为MIPS。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>安装 binutils</li>
</ol>
<hr>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    binutils包中的工具常用来操作二进制目标文件，GNU汇编器as和链接器ld是该包
中最重要的两个工具。从网站http:
并解压。进入build-binutils目录，进行binutils的配置。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<h1 id="binutils-2-22-configure-–target-prefix" tabindex="-1"><a class="header-anchor" href="#binutils-2-22-configure-–target-prefix" aria-hidden="true">#</a> ../binutils-2.22/configure –target=<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi>T</mi><mi>A</mi><mi>R</mi><mi>G</mi><mi>E</mi><mi>T</mi></mrow><mtext>–</mtext><mi>p</mi><mi>r</mi><mi>e</mi><mi>f</mi><mi>i</mi><mi>x</mi><mo>=</mo></mrow><annotation encoding="application/x-tex">{TARGET} –prefix=</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.13889em;">RGET</span></span><span class="mord">–</span><span class="mord mathnormal">p</span><span class="mord mathnormal">re</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">i</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span></span></span></span>{PREFIX} \</h1>
<p>–disable-nls</p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>--target指出了编译的目标系统是mipsel-unknown-linux-gnu，--prefix指出了binutils
的安装目录。完成配置后进行编译、安装。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>安装 gcc 引导编译器</li>
</ol>
<hr>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    本阶段将建立引导编译器。因为这时还没有MIPS的glibc库可以使用，只能编
译一个最简单的gcc，用这个gcc编译出glibc后再重新编译完整在安装前从
http://ftp.gnu.org和http://www.mpfr.org网站下载源代码文件gcc-4.4.6.tar.gz、
gmp-5.0.0.tar.gz和gmp并移动到文件夹gcc-4.4.6内，同样将mpfr-3.0.1文件夹重命名为
build-boot-gcc目录完成对gcc引导编译器的配置。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<h1 id="gcc-4-4-6-configure-–target-prefix" tabindex="-1"><a class="header-anchor" href="#gcc-4-4-6-configure-–target-prefix" aria-hidden="true">#</a> ../gcc-4.4.6/configure –target=<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi>T</mi><mi>A</mi><mi>R</mi><mi>G</mi><mi>E</mi><mi>T</mi></mrow><mtext>–</mtext><mi>p</mi><mi>r</mi><mi>e</mi><mi>f</mi><mi>i</mi><mi>x</mi><mo>=</mo></mrow><annotation encoding="application/x-tex">{TARGET} –prefix=</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.13889em;">RGET</span></span><span class="mord">–</span><span class="mord mathnormal">p</span><span class="mord mathnormal">re</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">i</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span></span></span></span>{PREFIX} \</h1>
<p>–disable-nls –disable-shared –without-headers –enable-languages=c \ 
–disable-multilib –disable-libmudflap –disable-libstdcxx-pch \ 
–disable-decimal-float –disable-threads –disable-libssp –disable-libgomp \ 
–disable-libffi –disable-libquadmath –disable-libitm</p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    此配置信息禁用了自举编译器不需要的特性支持，指定生成一个最小化的gcc编译器。
在编译时，会发生以下错误：


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>error: header files gmp-impl.h and longlong.h not found</p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    这是由于在build-boot-gcc/gmp目录下找不到这两个头文件，解决方法是将
gcc-4.4.6/gmp文件夹内的头文件目录下。然后继续编译，完成引导编译器的安装。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>安装 glibc</li>
</ol>
<hr>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    glibc是gnu发布的libc库，即C运行库，是linux系统中最底层的api。glibc
除了封装linux操作系统所提供的系统服务外，它本身也提供了许多其它一些必要功能服务的
实现。
    安装glibc还需要相应glibc-ports的支持，下载相应源代码glibc-2.13.tar.gz
和glibc-ports-2.13.tar.gz并解压，将解压出的glibc-ports-2.13文件夹重命名为ports
并移动到文件夹glibc-2.13内。进入build-glibc目录完成对glibc的配置。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<h1 id="glibc-2-13-configure-–host-prefix" tabindex="-1"><a class="header-anchor" href="#glibc-2-13-configure-–host-prefix" aria-hidden="true">#</a> ../glibc-2.13/configure –host=<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi>T</mi><mi>A</mi><mi>R</mi><mi>G</mi><mi>E</mi><mi>T</mi></mrow><mtext>–</mtext><mi>p</mi><mi>r</mi><mi>e</mi><mi>f</mi><mi>i</mi><mi>x</mi><mo>=</mo></mrow><annotation encoding="application/x-tex">{TARGET} –prefix=</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.13889em;">RGET</span></span><span class="mord">–</span><span class="mord mathnormal">p</span><span class="mord mathnormal">re</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">i</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span></span></span></span>{PREFIX} \</h1>
<p>–enable-kernel=2.4.3 –with-headers=${PREFIX}/include –disable-profile \ 
–disable-multi-arch libc_cv_forced_unwind=yes libc_cv_ctors_header=yes \ 
libc_cv_c_cleanup=yes</p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>在编译时会出现“cannot find -lgcc_eh”错误，解决方法如下：


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<h1 id="ln-s-target-4-4-6-libgcc-a" tabindex="-1"><a class="header-anchor" href="#ln-s-target-4-4-6-libgcc-a" aria-hidden="true">#</a> ln -s <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi>P</mi><mi>R</mi><mi>E</mi><mi>F</mi><mi>I</mi><mi>X</mi></mrow><mi mathvariant="normal">/</mi><mi>l</mi><mi>i</mi><mi>b</mi><mi mathvariant="normal">/</mi><mi>g</mi><mi>c</mi><mi>c</mi><mi mathvariant="normal">/</mi></mrow><annotation encoding="application/x-tex">{PREFIX}/lib/gcc/</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">PREF</span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span><span class="mord">/</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">ib</span><span class="mord">/</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mord mathnormal">cc</span><span class="mord">/</span></span></span></span>{TARGET}/4.4.6/libgcc.a \</h1>
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi>P</mi><mi>R</mi><mi>E</mi><mi>F</mi><mi>I</mi><mi>X</mi></mrow><mi mathvariant="normal">/</mi><mi>l</mi><mi>i</mi><mi>b</mi><mi mathvariant="normal">/</mi><mi>g</mi><mi>c</mi><mi>c</mi><mi mathvariant="normal">/</mi></mrow><annotation encoding="application/x-tex">{PREFIX}/lib/gcc/</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">PREF</span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span><span class="mord">/</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">ib</span><span class="mord">/</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mord mathnormal">cc</span><span class="mord">/</span></span></span></span>{TARGET}/4.4.6/libgcc_eh.a</p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>继续编译并完成安装。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>安装 gcc 编译器</li>
</ol>
<hr>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    安装glibc后，就可以安装支持C、C++的完整编译器。在安装引导编译器时已获得gcc
的源代码，同样，复制gmp的头文件gmp-impl.h和longlong.h到build-gcc/gmp目录下避免
错误的发生。
    进入到build-gcc文件夹，执行以下配置命令：


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<h1 id="gcc-4-4-6-configure-–target-prefix-1" tabindex="-1"><a class="header-anchor" href="#gcc-4-4-6-configure-–target-prefix-1" aria-hidden="true">#</a> ../gcc-4.4.6/configure –target=<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi>T</mi><mi>A</mi><mi>R</mi><mi>G</mi><mi>E</mi><mi>T</mi></mrow><mtext>–</mtext><mi>p</mi><mi>r</mi><mi>e</mi><mi>f</mi><mi>i</mi><mi>x</mi><mo>=</mo></mrow><annotation encoding="application/x-tex">{TARGET} –prefix=</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.13889em;">RGET</span></span><span class="mord">–</span><span class="mord mathnormal">p</span><span class="mord mathnormal">re</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">i</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span></span></span></span>{PREFIX} \</h1>
<p>–disable-multilib –disable-nls –disable-libstdcxx-pch –disable-shared \ 
–with-headers=${PREFIX}/include –enable-symvers=gnu –enable-c99 \ 
–enable-threads=posix –enable-languages=c,c++ –enable-long-long \ 
–enable-__cxa_atexit</p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    在完成gcc的配置后，开始编译，最后完成完整编译器的安装。
    至此，整个跨平台开发工具链都已设置好，可以直接在PC平台上编写、编译和链接基于
MIPS指令集的程序了。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>版权声明：本文为博主原创文章，未经博主允许不得转载。</p>
</div></template>


