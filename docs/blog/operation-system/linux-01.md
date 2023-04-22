---
title: M5-MIPS交叉编译环境搭建
category:
  - 工作总结
  - Linux
  - M5-MIPS
---

M5模拟器对MIPS指令集的支持限制为32位、小字节序，因此在制作交叉编译工具
链时需要注意正确的字节序。文中的工具链基于linux-2.6.32、binutils-2.22、glibc-2.13、
glibc-ports-2.13、gcc-4.4.6、gmp-5.0.0、mpfr-3.0.1构建。

## 1. 创建宿主机编译环境

执行su命令，切换至root权限。执行以下命令，将相关配置信息写入到环境变量。

```sh
export CROSSROOT=/opt/mips-cross
export TARGET=mipsel-unknown-linux-gnu
export PREFIX=${CROSSROOT}/tools
export TARGET_PREFIX=${PREFIX}/${TARGET}
export PATH=${PREFIX}/bin:${PATH}
```

接下来在用户根目录为软件的编译建立相关的文件夹，build-binutils、build-boot-gcc、build-glibc和build-gcc
## 2. 安装内核头文件

内核头文件安装是建立工具链的第一步。从网站

- http://ftp.gnu.org
- http://www.mpfr.org

下载源代码包linux-2.6.32.tar.bz2并解压。进入解压出的内核文件夹linux-2.6.32，使用
安装内核头文件

```sh
make INSTALL_HDR_PATH=${PREFIX} ARCH=mips headers_install
```

变量INSTALL_HDR_PATH指定了安装的目标目录，变量ARCH指定了目标架构为MIPS。

## 3. 安装 binutils

binutils包中的工具常用来操作二进制目标文件，GNU汇编器as和链接器ld是该包
中最重要的两个工具。从网站http:
并解压。进入build-binutils目录，进行binutils的配置。

```sh
../binutils-2.22/configure –target=${TARGET} –prefix=${PREFIX}  –disable-nls
```

--target指出了编译的目标系统是mipsel-unknown-linux-gnu，--prefix指出了binutils
的安装目录。完成配置后进行编译、安装。

## 4. 安装 gcc 引导编译器

本阶段将建立引导编译器。因为这时还没有MIPS的glibc库可以使用，只能编
译一个最简单的gcc，用这个gcc编译出glibc后再重新编译完整在安装前从

- http://ftp.gnu.org
- http://www.mpfr.org

网站下载源代码文件gcc-4.4.6.tar.gz、
gmp-5.0.0.tar.gz和gmp并移动到文件夹gcc-4.4.6内，同样将mpfr-3.0.1文件夹重命名为
build-boot-gcc目录完成对gcc引导编译器的配置。

```sh
../gcc-4.4.6/configure –target=${TARGET} –prefix=${PREFIX} \  
–disable-nls –disable-shared –without-headers –enable-languages=c \  
–disable-multilib –disable-libmudflap –disable-libstdcxx-pch \  
–disable-decimal-float –disable-threads –disable-libssp –disable-libgomp \  
–disable-libffi –disable-libquadmath –disable-libitm
```

此配置信息禁用了自举编译器不需要的特性支持，指定生成一个最小化的gcc编译器。
在编译时，会发生以下错误：

```sh
 error: header files gmp-impl.h and longlong.h not found
```

这是由于在build-boot-gcc/gmp目录下找不到这两个头文件，解决方法是将
gcc-4.4.6/gmp文件夹内的头文件目录下。然后继续编译，完成引导编译器的安装。

## 5. 安装 glibc

glibc是gnu发布的libc库，即C运行库，是linux系统中最底层的api。glibc
除了封装linux操作系统所提供的系统服务外，它本身也提供了许多其它一些必要功能服务的
实现。

安装glibc还需要相应glibc-ports的支持，下载相应源代码glibc-2.13.tar.gz
和glibc-ports-2.13.tar.gz并解压，将解压出的glibc-ports-2.13文件夹重命名为ports
并移动到文件夹glibc-2.13内。进入build-glibc目录完成对glibc的配置。

```sh
../glibc-2.13/configure –host=${TARGET} –prefix=${PREFIX} \  

 –enable-kernel=2.4.3 –with-headers=${PREFIX}/include –disable-profile \  
 –disable-multi-arch libc_cv_forced_unwind=yes libc_cv_ctors_header=yes \  
 libc_cv_c_cleanup=yes
```

在编译时会出现“cannot find -lgcc_eh”错误，解决方法如下：

```sh
 ln -s ${PREFIX}/lib/gcc/${TARGET}/4.4.6/libgcc.a \
 ${PREFIX}/lib/gcc/${TARGET}/4.4.6/libgcc_eh.a

```

继续编译并完成安装。

## 6. 安装 gcc 编译器

安装glibc后，就可以安装支持C、C++的完整编译器。在安装引导编译器时已获得gcc
的源代码，同样，复制gmp的头文件gmp-impl.h和longlong.h到build-gcc/gmp目录下避免
错误的发生。

进入到build-gcc文件夹，执行以下配置命令：

```sh
 ../gcc-4.4.6/configure –target=${TARGET} –prefix=${PREFIX} \  
 –disable-multilib –disable-nls –disable-libstdcxx-pch –disable-shared \  
 –with-headers=${PREFIX}/include –enable-symvers=gnu –enable-c99 \  
 –enable-threads=posix –enable-languages=c,c++ –enable-long-long \  
 –enable-__cxa_atexit
```

在完成gcc的配置后，开始编译，最后完成完整编译器的安装。
至此，整个跨平台开发工具链都已设置好，可以直接在PC平台上编写、编译和链接基于MIPS指令集的程序了。