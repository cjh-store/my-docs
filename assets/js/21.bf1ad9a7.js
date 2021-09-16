(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{584:function(t,e,s){"use strict";s.r(e);var a=s(7),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"使用vscode-remote-shh连接服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用vscode-remote-shh连接服务器"}},[t._v("#")]),t._v(" 使用vscode remote shh连接服务器")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" vscode安装remote"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ssh\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用ssh免密登录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" ssh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("copy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("id root@服务器地址  后续按照提示进行操作\n")])])]),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/cjh-store/drawing-bed/master/images/20210911121423.png",alt:"20210911121423"}})]),t._v(" "),s("h2",{attrs:{id:"命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('执行一个简单的命令 pwd\n[root@iZm5e8dsxce9ufaic7hi3uZ ~] # pwd\n/root\n\nroot：表示用户名\niZm5e8dsxce9ufaic7hi3uZ：表示主机名\n~：表示目前所在目录为家目录，其中 root 用户的家目录是 /root 普通用户的家目录在 /home 下；\n#：指示你所具有的权限（ root 用户为 # ，普通用户为 $ ）\n\n必会命令\n上下方向键 ↑ ↓ 来调取过往执行过的 Linux 命令\nCtrl + l：清除屏幕并将当前行移到页面顶部\nCtrl + c：中止当前正在执行的命令\nCtrl + u ：从光标处删除至命令行首\nCtrl + y ：粘贴\n\n路径/文件\npwd 显示当前目录的路径\nls  列出文件和目录\n    -a 显示所有文件和目录包括隐藏的\n    -l 显示详细列表\n    -h 适合人类阅读的\n    -t 按文件最近一次修改时间排序\ncd  切换目录\n    cd /\t--\x3e 跳转到根目录\n    cd ~\t--\x3e 跳转到家目录\n    cd ..\t--\x3e 跳转到上级目录\n    cd ./home\t--\x3e 跳转到当前目录的home目录下\n    cd\t--\x3e 不添加任何参数，也是回到家目录\n\nlocate   查找文件，也可以用正则表达式\n[注意] locate 命令会去文件数据库中查找命令，而不是全磁盘查找，因此刚创建的文件并不会更新到数据库中，所以无法被查找到，可以执行 updatedb 命令去更新数据库。\n\nfind     查找文件，它会去遍历你的实际硬盘进行查找\n    find <何处> <何物> <做什么>\n    find -name "file.txt"\t--\x3e 当前目录以及子目录下通过名称查找文件\n    find . -name "syslog"\t--\x3e 当前目录以及子目录下通过名称查找文件\n    find / -name "syslog"\t--\x3e 整个硬盘下查找syslog\n    find /var/log -name "syslog"\t--\x3e 在指定的目录/var/log下查找syslog文件\n    find /var/log -name "syslog*"\t--\x3e 查找syslog1、syslog2 ... 等文件，通配符表示所有\n    find /var/log -name "*syslog*"\t--\x3e 查找包含syslog的文件 \n    find -name "*.txt" -atime -7 \t--\x3e 近 7天内访问过的.txt结尾的文件\n    find . -name "file" -type f \t--\x3e 只查找当前目录下的file文件\n    find . -name "file" -type d \t--\x3e 只查找当前目录下的file目录\n\ncat 显示文件内容\n    -n 显示行号 \n\ntouch 创建一个文件\nmkdir 创建一个目录\n    -p 递归的创建目录结构 mkdir -p one/two/three \n\ncp  拷贝文件和目录\n    cp file file_copy\t--\x3e file 是目标文件，file_copy 是拷贝到的目标目录\n    cp file one\t--\x3e 把 file 文件拷贝到 one 目录下，并且文件名依然为 file\n    cp file one/file_copy\t--\x3e 把 file 文件拷贝到 one 目录下，文件名为file_copy\n    cp *.txt folder\t--\x3e 把当前目录下所有 txt 文件拷贝到 folder 目录下\n    -r 递归的拷贝，常用来拷贝一整个目录\n\nmv  移动（重命名）文件或目录，与cp命令用法相似。\n    mv file one\t--\x3e 将 file 文件移动到 one 目录下\n    mv new_folder one\t--\x3e 将 new_folder 文件夹移动到one目录下\n    mv *.txt folder\t--\x3e 把当前目录下所有 txt 文件移动到 folder 目录下\n    mv file new_file\t--\x3e file 文件重命名为 new_file\n\nrm  删除文件和目录\n    rm new_file \t--\x3e 删除 new_file 文件\n    rm f1 f2 f3 \t--\x3e 同时删除 f1 f2 f3 3个文件\n    -f 文件强制删除\n    -r 递归删除文件夹 \n')])])]),s("h2",{attrs:{id:"文件和目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件和目录"}},[t._v("#")]),t._v(" 文件和目录")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/226f8a87a9804141802d5ba0a55bd1f1~tplv-k3u1fbpfcp-watermark.awebp",alt:"avatar"}})]),t._v(" "),s("h2",{attrs:{id:"用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户"}},[t._v("#")]),t._v(" 用户")]),t._v(" "),s("p",[t._v("Linux 是一个多用户的操作系统。在 Linux 中，理论上来说，我们可以创建无数个用户，但是这些用户是被划分到不同的群组里面的，有一个用户，名叫 root ，是一个很特殊的用户，它是超级用户，拥有最高权限。\n"),s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/57aa4de6dc7b4bf8839080fbc4fc65ed~tplv-k3u1fbpfcp-watermark.awebp",alt:"avatar"}}),t._v(" "),s("br"),t._v("\n自己创建的用户是有限权限的用户，这样大大提高了 Linux 系统的安全性，有效防止误操作或是病毒攻击，但是我们执行的某些命令需要更高权限时可以使用 sudo 命令。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo      以root身份运行命令\nuseradd   添加新用户\npasswd    修改用户密码\n\nuserdel   删除用户\n    userdel name\t--\x3e 只会删除用户名，不会从/home中删除对应文件夹\n    userdel name -r\t--\x3e 会同时删除/home下的对应文件夹\n\nsu        切换用户 \n    sudo su\t--\x3e 切换为root用户（exit 命令或 CTRL + D 快捷键都可以使普通用户切换为 root 用户）\n    su lion\t--\x3e 切换为普通用户\n    su -\t--\x3e 切换为root用户   \n\nusermod\n    -l 对用户重命名。需要注意的是 /home 中的用户家目录的名字不会改变，需要手动修改。\n    -g 修改用户所在的群组，例如 usermod -g friends lion  修改 lion 用户的群组为 friends 。\n    -G 一次性让用户添加多个群组，例如 usermod -G friends,foo,bar lion 。\n    -a -G 会让你离开原先的群组，如果你不想这样做的话，就得再添加 -a 参数，意味着 append 追加的意思。\n")])])]),s("h2",{attrs:{id:"文件权限管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件权限管理"}},[t._v("#")]),t._v(" 文件权限管理")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("chmod       修改访问权限\n    chmod 740 file.txt\n    -R 可以递归地修改文件访问权限，例如 chmod -R 777 /home/lion\n\n\n[root@lion ~]# ls -l\ndrwxr-xr-x 5 root root 4096 Apr 13  2020 climb\nlrwxrwxrwx 1 root root    7 Jan 14 06:41 hello2.c -> hello.c\n-rw-r--r-- 1 root root  149 Jan 13 06:14 hello.c\n\nd ：表示目录，就是说这是一个目录，普通文件是 - ，链接是 l 。\nr(4) ： read 表示文件可读。\nw(2) ： write 表示文件可写，一般有写的权限，就有删除的权限。\nx(1) ： execute 表示文件可执行。\n- ：表示没有相应权限。\n")])])]),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0c70007a2d274cfe8e370fa1d66c7560~tplv-k3u1fbpfcp-watermark.awebp",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"软件仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#软件仓库"}},[t._v("#")]),t._v(" 软件仓库")]),t._v(" "),s("p",[t._v("Linux 的包都存在一个仓库，叫做软件仓库，它可以使用 yum 来管理软件包， yum 是 CentOS 中默认的包管理工具，适用于 Red Hat 一族。可以理解成 Node.js 的 npm 。")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yum 常用命令\nyum update | yum upgrade  更新软件包\nyum search xxx 搜索相应的软件包\nyum install xxx 安装软件包\nyum remove xxx 删除软件包\n切换 CentOS 软件源\n\n\nyum 换阿里源\n1.备份\nmv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup\n2.进入yum源配置文件夹\ncd /etc/yum.repos.d/\n3.下载源\nwget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo \n4.生成缓存\nyum makecache\n")])])]),s("h2",{attrs:{id:"查看进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看进程"}},[t._v("#")]),t._v(" 查看进程")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ps          用于显示当前系统中的进\n    PID：进程号，每个进程都有唯一的进程号\n    TTY：进程运行所在的终端\n    TIME：进程运行时间\n    CMD：产生这个进程的程序名\n\n    -ef 列出所有进程;\n    -efH 以乔木状列举出所有进程;\n    -u 列出此用户运行的进程;\n    -aux 通过 CPU 和内存使用来过滤进程 ps -aux | less ;\n    -aux --sort -pcpu 按 CPU 使用降序排列， -aux --sort -pmem 表示按内存使用降序排列;\n    -axjf 以树形结构显示进程， ps -axjf 它和 pstree 效果类似。\nkill        结束一个进程， kill + PID 。\n    kill 956 # 结束进程号为956的进程\n    kill 956 957 # 结束多个进程 \n    kill -9 7291 # 强制结束进程\n")])])]),s("h2",{attrs:{id:"管理进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管理进程"}},[t._v("#")]),t._v(" 管理进程")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("systemd     systemd 是一个 Linux 系统基础组件的集合，提供了一个系统和服务管 理器，运行为 PID 1 并负责启动其它程序。\n    systemctl start nginx # 启动服务\n    systemctl stop nginx # 停止服务\n    systemctl restart nginx # 重启服务\n    systemctl status nginx # 查看服务状态\n    systemctl reload nginx # 重载配置文件(不停止服务的情况)\n    systemctl enable nginx # 开机自动启动服务\n    systemctl disable nginx # 开机不自动启动服务\n    systemctl is-enabled nginx # 查看服务是否开机自动启动\n    systemctl list-unit-files --type=service # 查看各个级别下服务的启动和禁用情况\n")])])]),s("h2",{attrs:{id:"文件解压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件解压缩"}},[t._v("#")]),t._v(" 文件解压缩")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("tar     创建一个 tar 归档。\n    tar -cvf sort.tar sort/ # 将sort文件夹归档为sort.tar\n    tar -cvf archive.tar file1 file2 file3 # 将 file1 file2 file3 归档为archive.tar\ntar –xvf file.tar //解压 tar包\ntar -xzvf file.tar.gz //解压tar.gz\n\ngzip / gunzip  “压缩/解压”归档，默认用 gzip 命令，压缩后的文件后缀名为 .tar.gz 。\n    gzip archive.tar # 压缩\n    gunzip archive.tar.gz # 解压\n\nzip / unzip    “压缩/解压” zip 文件（ zip 压缩文件一般来自 windows 操作系统）\n    yum install zip \n    yum install unzip \n    unzip archive.zip # 解压 .zip 文件\n    unzip -l archive.zip # 不解开 .zip 文件，只看其中内容\n    zip -r sort.zip sort/ # 将sort文件夹压缩为 sort.zip，其中-r表示递归\n")])])]),s("h2",{attrs:{id:"编译安装软件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译安装软件"}},[t._v("#")]),t._v(" 编译安装软件")]),t._v(" "),s("p",[t._v("之前我们学会了使用 yum 命令进行软件安装，如果碰到 yum 仓库中没有的软件，我们就需要会更高级的软件安装“源码编译安装”。")]),t._v(" "),s("p",[t._v("基本步骤如下：")]),t._v(" "),s("ol",[s("li",[t._v("下载源代码")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("下载好的源码在本机电脑上使用如下命令同步到服务器上：\nscp 1.txt root@106.53.247.152:downloads\n直接wegt下载：\nwegt https://bintray.com/htop/source/download_file?file_path=htop-3.0.0.tar.gz\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("解压压缩包")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("tar -zxvf htop-3.0.0.tar.gz # 解压\ncd htop-3.0.0 # 进入目录\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("配置")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("执行 ./configure ，它会分析你的电脑去确认编译所需的工具是否都已经安装了。\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("编译")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("make\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("安装")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("make install\n")])])]),s("h2",{attrs:{id:"ssh-连接远程服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh-连接远程服务器"}},[t._v("#")]),t._v(" ssh 连接远程服务器")]),t._v(" "),s("p",[t._v("通过非对称加密以及对称加密的方式（同 HTTPS 安全连接原理相似）连接到远端服务器。")]),t._v(" "),s("h3",{attrs:{id:"配置-ssh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-ssh"}},[t._v("#")]),t._v(" 配置 ssh")]),t._v(" "),s("p",[t._v("config 文件可以配置 ssh ，方便批量管理多个 ssh 连接。")]),t._v(" "),s("p",[t._v("配置文件分为以下几种：")]),t._v(" "),s("ul",[s("li",[t._v("全局 "),s("code",[t._v("ssh")]),t._v(" 服务端的配置： "),s("code",[t._v("/etc/ssh/sshd_config")]),t._v(" ；")]),t._v(" "),s("li",[t._v("全局 "),s("code",[t._v("ssh")]),t._v(" 客户端的配置： "),s("code",[t._v("/etc/ssh/ssh_config")]),t._v("（很少修改）；")]),t._v(" "),s("li",[t._v("当前用户 "),s("code",[t._v("ssh")]),t._v(" 客户端的配置： "),s("code",[t._v("~/.ssh/config")]),t._v(" 。")])]),t._v(" "),s("p",[t._v("服务端 "),s("code",[t._v("config")]),t._v(" 文件的常用配置参数,\n修改完服务端配置文件需要重启服务 "),s("code",[t._v("systemctl restart sshd")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("服务端 config 参数")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Port")]),t._v(" "),s("td",[t._v("sshd 服务端口号（默认是22）")])]),t._v(" "),s("tr",[s("td",[t._v("PermitRootLogin")]),t._v(" "),s("td",[t._v("是否允许以 root 用户身份登录（默认是可以）")])]),t._v(" "),s("tr",[s("td",[t._v("PasswordAuthentication")]),t._v(" "),s("td",[t._v("是否允许密码验证登录（默认是可以）")])]),t._v(" "),s("tr",[s("td",[t._v("PubkeyAuthentication")]),t._v(" "),s("td",[t._v("是否允许公钥验证登录（默认是可以）")])]),t._v(" "),s("tr",[s("td",[t._v("PermitEmptyPasswords")]),t._v(" "),s("td",[t._v("是否允许空密码登录（不安全，默认不可以）")])])])]),t._v(" "),s("h3",{attrs:{id:"免密登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#免密登录"}},[t._v("#")]),t._v(" 免密登录")]),t._v(" "),s("p",[t._v("1、在客户机中生成密钥对（公钥和私钥） "),s("code",[t._v("ssh-keygen")]),t._v("（默认使用 RSA 非对称加密算法）")]),t._v(" "),s("p",[t._v("运行完 "),s("code",[t._v("ssh-keygen")]),t._v(" 会在 "),s("code",[t._v("~/.ssh/")]),t._v(" 目录下，生成两个文件：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("id_rsa.pub")]),t._v(" ：公钥")]),t._v(" "),s("li",[s("code",[t._v("id_rsa")]),t._v(" ：私钥")])]),t._v(" "),s("p",[t._v("2、把客户机的公钥传送到服务")]),t._v(" "),s("p",[t._v("执行 "),s("code",[t._v("ssh-copy-id root@172.x.x.x")]),t._v("（"),s("code",[t._v("ssh-copy-id")]),t._v(" 它会把客户机的公钥追加到服务器 "),s("code",[t._v("~/.ssh/authorized_keys")]),t._v(" 的文件中）。")])])}),[],!1,null,null,null);e.default=n.exports}}]);