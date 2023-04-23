import{_ as i,N as p,S as t,U as a,a0 as n,V as e,Z as l,D as c}from"./framework-b23b3642.js";const r={},o=l('<p>M5模拟器对MIPS指令集的支持限制为32位、小字节序，因此在制作交叉编译工具 链时需要注意正确的字节序。文中的工具链基于linux-2.6.32、binutils-2.22、glibc-2.13、 glibc-ports-2.13、gcc-4.4.6、gmp-5.0.0、mpfr-3.0.1构建。</p><h2 id="_1-创建宿主机编译环境" tabindex="-1"><a class="header-anchor" href="#_1-创建宿主机编译环境" aria-hidden="true">#</a> 1. 创建宿主机编译环境</h2><p>执行su命令，切换至root权限。执行以下命令，将相关配置信息写入到环境变量。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">CROSSROOT</span><span class="token operator">=</span>/opt/mips-cross\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">TARGET</span><span class="token operator">=</span>mipsel-unknown-linux-gnu\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span><span class="token variable">${CROSSROOT}</span>/tools\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">TARGET_PREFIX</span><span class="token operator">=</span><span class="token variable">${PREFIX}</span>/<span class="token variable">${TARGET}</span>\n<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">${PREFIX}</span>/bin:<span class="token variable">${<span class="token environment constant">PATH</span>}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来在用户根目录为软件的编译建立相关的文件夹，build-binutils、build-boot-gcc、build-glibc和build-gcc</p><h2 id="_2-安装内核头文件" tabindex="-1"><a class="header-anchor" href="#_2-安装内核头文件" aria-hidden="true">#</a> 2. 安装内核头文件</h2><p>内核头文件安装是建立工具链的第一步。从网站</p>',7),d={href:"http://ftp.gnu.org",target:"_blank",rel:"noopener noreferrer"},b={href:"http://www.mpfr.org",target:"_blank",rel:"noopener noreferrer"},u=l('<p>下载源代码包linux-2.6.32.tar.bz2并解压。进入解压出的内核文件夹linux-2.6.32，使用 安装内核头文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> <span class="token assign-left variable">INSTALL_HDR_PATH</span><span class="token operator">=</span><span class="token variable">${PREFIX}</span> <span class="token assign-left variable">ARCH</span><span class="token operator">=</span>mips headers_install\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>变量INSTALL_HDR_PATH指定了安装的目标目录，变量ARCH指定了目标架构为MIPS。</p><h2 id="_3-安装-binutils" tabindex="-1"><a class="header-anchor" href="#_3-安装-binutils" aria-hidden="true">#</a> 3. 安装 binutils</h2><p>binutils包中的工具常用来操作二进制目标文件，GNU汇编器as和链接器ld是该包 中最重要的两个工具。从网站http: 并解压。进入build-binutils目录，进行binutils的配置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">..</span>/binutils-2.22/configure –target<span class="token operator">=</span><span class="token variable">${TARGET}</span> –prefix<span class="token operator">=</span><span class="token variable">${PREFIX}</span>  –disable-nls\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>--target指出了编译的目标系统是mipsel-unknown-linux-gnu，--prefix指出了binutils 的安装目录。完成配置后进行编译、安装。</p><h2 id="_4-安装-gcc-引导编译器" tabindex="-1"><a class="header-anchor" href="#_4-安装-gcc-引导编译器" aria-hidden="true">#</a> 4. 安装 gcc 引导编译器</h2><p>本阶段将建立引导编译器。因为这时还没有MIPS的glibc库可以使用，只能编 译一个最简单的gcc，用这个gcc编译出glibc后再重新编译完整在安装前从</p>',9),g={href:"http://ftp.gnu.org",target:"_blank",rel:"noopener noreferrer"},v={href:"http://www.mpfr.org",target:"_blank",rel:"noopener noreferrer"},h=l(`<p>网站下载源代码文件gcc-4.4.6.tar.gz、 gmp-5.0.0.tar.gz和gmp并移动到文件夹gcc-4.4.6内，同样将mpfr-3.0.1文件夹重命名为 build-boot-gcc目录完成对gcc引导编译器的配置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">..</span>/gcc-4.4.6/configure –target<span class="token operator">=</span><span class="token variable">\${TARGET}</span> –prefix<span class="token operator">=</span><span class="token variable">\${PREFIX}</span> <span class="token punctuation">\\</span>  
–disable-nls –disable-shared –without-headers –enable-languages<span class="token operator">=</span>c <span class="token punctuation">\\</span>  
–disable-multilib –disable-libmudflap –disable-libstdcxx-pch <span class="token punctuation">\\</span>  
–disable-decimal-float –disable-threads –disable-libssp –disable-libgomp <span class="token punctuation">\\</span>  
–disable-libffi –disable-libquadmath –disable-libitm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此配置信息禁用了自举编译器不需要的特性支持，指定生成一个最小化的gcc编译器。 在编译时，会发生以下错误：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> error: header files gmp-impl.h and longlong.h not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是由于在build-boot-gcc/gmp目录下找不到这两个头文件，解决方法是将 gcc-4.4.6/gmp文件夹内的头文件目录下。然后继续编译，完成引导编译器的安装。</p><h2 id="_5-安装-glibc" tabindex="-1"><a class="header-anchor" href="#_5-安装-glibc" aria-hidden="true">#</a> 5. 安装 glibc</h2><p>glibc是gnu发布的libc库，即C运行库，是linux系统中最底层的api。glibc 除了封装linux操作系统所提供的系统服务外，它本身也提供了许多其它一些必要功能服务的 实现。</p><p>安装glibc还需要相应glibc-ports的支持，下载相应源代码glibc-2.13.tar.gz 和glibc-ports-2.13.tar.gz并解压，将解压出的glibc-ports-2.13文件夹重命名为ports 并移动到文件夹glibc-2.13内。进入build-glibc目录完成对glibc的配置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">..</span>/glibc-2.13/configure –host<span class="token operator">=</span><span class="token variable">\${TARGET}</span> –prefix<span class="token operator">=</span><span class="token variable">\${PREFIX}</span> <span class="token punctuation">\\</span>  

 –enable-kernel<span class="token operator">=</span><span class="token number">2.4</span>.3 –with-headers<span class="token operator">=</span><span class="token variable">\${PREFIX}</span>/include –disable-profile <span class="token punctuation">\\</span>  
 –disable-multi-arch <span class="token assign-left variable">libc_cv_forced_unwind</span><span class="token operator">=</span>yes <span class="token assign-left variable">libc_cv_ctors_header</span><span class="token operator">=</span>yes <span class="token punctuation">\\</span>  
 <span class="token assign-left variable">libc_cv_c_cleanup</span><span class="token operator">=</span>yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在编译时会出现“cannot find -lgcc_eh”错误，解决方法如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">ln</span> <span class="token parameter variable">-s</span> <span class="token variable">\${PREFIX}</span>/lib/gcc/<span class="token variable">\${TARGET}</span>/4.4.6/libgcc.a <span class="token punctuation">\\</span>
 <span class="token variable">\${PREFIX}</span>/lib/gcc/<span class="token variable">\${TARGET}</span>/4.4.6/libgcc_eh.a

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>继续编译并完成安装。</p><h2 id="_6-安装-gcc-编译器" tabindex="-1"><a class="header-anchor" href="#_6-安装-gcc-编译器" aria-hidden="true">#</a> 6. 安装 gcc 编译器</h2><p>安装glibc后，就可以安装支持C、C++的完整编译器。在安装引导编译器时已获得gcc 的源代码，同样，复制gmp的头文件gmp-impl.h和longlong.h到build-gcc/gmp目录下避免 错误的发生。</p><p>进入到build-gcc文件夹，执行以下配置命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token punctuation">..</span>/gcc-4.4.6/configure –target<span class="token operator">=</span><span class="token variable">\${TARGET}</span> –prefix<span class="token operator">=</span><span class="token variable">\${PREFIX}</span> <span class="token punctuation">\\</span>  
 –disable-multilib –disable-nls –disable-libstdcxx-pch –disable-shared <span class="token punctuation">\\</span>  
 –with-headers<span class="token operator">=</span><span class="token variable">\${PREFIX}</span>/include –enable-symvers<span class="token operator">=</span>gnu –enable-c99 <span class="token punctuation">\\</span>  
 –enable-threads<span class="token operator">=</span>posix –enable-languages<span class="token operator">=</span>c,c++ –enable-long-long <span class="token punctuation">\\</span>  
 –enable-__cxa_atexit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在完成gcc的配置后，开始编译，最后完成完整编译器的安装。 至此，整个跨平台开发工具链都已设置好，可以直接在PC平台上编写、编译和链接基于MIPS指令集的程序了。</p>`,17);function m(k,_){const s=c("ExternalLinkIcon");return p(),t("div",null,[o,a("ul",null,[a("li",null,[a("a",d,[n("http://ftp.gnu.org"),e(s)])]),a("li",null,[a("a",b,[n("http://www.mpfr.org"),e(s)])])]),u,a("ul",null,[a("li",null,[a("a",g,[n("http://ftp.gnu.org"),e(s)])]),a("li",null,[a("a",v,[n("http://www.mpfr.org"),e(s)])])]),h])}const x=i(r,[["render",m],["__file","linux-01.html.vue"]]);export{x as default};
