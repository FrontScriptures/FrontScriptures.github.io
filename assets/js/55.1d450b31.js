(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{240:function(_,v,e){"use strict";e.r(v);var t=e(1),c=Object(t.a)({},function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"tcp面试题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp面试题","aria-hidden":"true"}},[_._v("#")]),_._v(" TCP面试题")]),_._v(" "),e("p",[_._v("TCP的面试题通常情况下前端不会涉及太多，此章主要面对node.js工程师。")]),_._v(" "),e("h2",{attrs:{id:"tcp-的特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的特性","aria-hidden":"true"}},[_._v("#")]),_._v(" TCP 的特性")]),_._v(" "),e("ul",[e("li",[_._v("TCP 提供一种面向连接的、可靠的字节流服务")]),_._v(" "),e("li",[_._v("在一个 TCP 连接中，仅有两方进行彼此通信。广播和多播不能用于 TCP")]),_._v(" "),e("li",[_._v("TCP 使用校验和，确认和重传机制来保证可靠传输")]),_._v(" "),e("li",[_._v("TCP 给数据分节进行排序，并使用累积确认保证数据的顺序不变和非重复")]),_._v(" "),e("li",[_._v("TCP 使用滑动窗口机制来实现流量控制，通过动态改变窗口的大小进行拥塞控制")])]),_._v(" "),e("h2",{attrs:{id:"请简述tcp-udp的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请简述tcp-udp的区别","aria-hidden":"true"}},[_._v("#")]),_._v(" 请简述TCP\\UDP的区别")]),_._v(" "),e("table",[e("thead",[e("tr",[e("th",[_._v("协议")]),_._v(" "),e("th",[_._v("连接性")]),_._v(" "),e("th",[_._v("双工性")]),_._v(" "),e("th",[_._v("可靠性")]),_._v(" "),e("th",[_._v("有序性")]),_._v(" "),e("th",[_._v("有界性")]),_._v(" "),e("th",[_._v("拥塞控制")]),_._v(" "),e("th",[_._v("传输速度")]),_._v(" "),e("th",[_._v("量级")]),_._v(" "),e("th",[_._v("头部大小")])])]),_._v(" "),e("tbody",[e("tr",[e("td",[_._v("TCP")]),_._v(" "),e("td",[_._v("面向连接"),e("br"),_._v("(Connection oriented)")]),_._v(" "),e("td",[_._v("全双工(1:1)")]),_._v(" "),e("td",[_._v("可靠"),e("br"),_._v("(重传机制)")]),_._v(" "),e("td",[_._v("有序"),e("br"),_._v("(通过SYN排序)")]),_._v(" "),e("td",[_._v("无, 有"),e("a",{attrs:{href:"#%E7%B2%98%E5%8C%85"}},[_._v("粘包情况")])]),_._v(" "),e("td",[_._v("有")]),_._v(" "),e("td",[_._v("慢")]),_._v(" "),e("td",[_._v("低")]),_._v(" "),e("td",[_._v("20~60字节")])]),_._v(" "),e("tr",[e("td",[_._v("UDP")]),_._v(" "),e("td",[_._v("无连接"),e("br"),_._v("(Connection less)")]),_._v(" "),e("td",[_._v("n:m")]),_._v(" "),e("td",[_._v("不可靠"),e("br"),_._v("(丢包后数据丢失)")]),_._v(" "),e("td",[_._v("无序")]),_._v(" "),e("td",[_._v("有消息边界, "),e("strong",[_._v("无粘包")])]),_._v(" "),e("td",[_._v("无")]),_._v(" "),e("td",[_._v("快")]),_._v(" "),e("td",[_._v("高")]),_._v(" "),e("td",[_._v("8字节")])])])]),_._v(" "),e("p",[_._v("UDP socket 支持 n 对 m 的连接状态, 在"),e("a",{attrs:{href:"https://nodejs.org/dist/latest-v6.x/docs/api/dgram.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("官方文档"),e("OutboundLink")],1),_._v("中有写到在 "),e("code",[_._v("dgram.createSocket(options[, callback])")]),_._v(" 中的 option 可以指定 "),e("code",[_._v("reuseAddr")]),_._v(" 即 "),e("code",[_._v("SO_REUSEADDR")]),_._v("标志. 通过 "),e("code",[_._v("SO_REUSEADDR")]),_._v(" 可以简单的实现 n 对 m 的多播特性 (不过仅在支持多播的系统上才有).")]),_._v(" "),e("h2",{attrs:{id:"tcp粘包是怎么回事，如何处理-✨"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp粘包是怎么回事，如何处理-✨","aria-hidden":"true"}},[_._v("#")]),_._v(" TCP粘包是怎么回事，如何处理? ✨")]),_._v(" "),e("p",[_._v("默认情况下, TCP 连接会启用延迟传送算法 (Nagle 算法), 在数据发送之前缓存他们. 如果短时间有多个数据发送, 会缓冲到一起作一次发送 (缓冲大小见 "),e("code",[_._v("socket.bufferSize")]),_._v("), 这样可以减少 IO 消耗提高性能.")]),_._v(" "),e("p",[_._v("如果是传输文件的话, 那么根本不用处理粘包的问题, 来一个包拼一个包就好了. 但是如果是多条消息, 或者是别的用途的数据那么就需要处理粘包.")]),_._v(" "),e("p",[_._v("可以参见网上流传比较广的一个例子, 连续调用两次 send 分别发送两段数据 data1 和 data2, 在接收端有以下几种常见的情况:")]),_._v(" "),e("ul",[e("li",[_._v("A. 先接收到 data1, 然后接收到 data2 .")]),_._v(" "),e("li",[_._v("B. 先接收到 data1 的部分数据, 然后接收到 data1 余下的部分以及 data2 的全部.")]),_._v(" "),e("li",[_._v("C. 先接收到了 data1 的全部数据和 data2 的部分数据, 然后接收到了 data2 的余下的数据.")]),_._v(" "),e("li",[_._v("D. 一次性接收到了 data1 和 data2 的全部数据.")])]),_._v(" "),e("p",[_._v("其中的 BCD 就是我们常见的粘包的情况. 而对于处理粘包的问题, 常见的解决方案有:")]),_._v(" "),e("ol",[e("li",[_._v("多次发送之前间隔一个等待时间")]),_._v(" "),e("li",[_._v("关闭 Nagle 算法")]),_._v(" "),e("li",[_._v("进行封包/拆包")])]),_._v(" "),e("p",[e("em",[e("strong",[_._v("方案1")])]),e("br"),_._v("只需要等上一段时间再进行下一次 send 就好, 适用于交互频率特别低的场景. 缺点也很明显, 对于比较频繁的场景而言传输效率实在太低. 不过几乎不用做什么处理."),e("br"),e("em",[e("strong",[_._v("方案2")])]),e("br"),_._v("关闭 Nagle 算法, 在 Node.js 中你可以通过 "),e("a",{attrs:{href:"https://nodejs.org/dist/latest-v6.x/docs/api/net.html#net_socket_setnodelay_nodelay",target:"_blank",rel:"noopener noreferrer"}},[e("code",[_._v("socket.setNoDelay()")]),e("OutboundLink")],1),_._v(" 方法来关闭 Nagle 算法, 让每一次 send 都不缓冲直接发送."),e("br"),_._v("该方法比较适用于每次发送的数据都比较大 (但不是文件那么大), 并且频率不是特别高的场景. 如果是每次发送的数据量比较小, 并且频率特别高的, 关闭 Nagle 纯属自废武功."),e("br"),_._v("另外, 该方法不适用于网络较差的情况, 因为 Nagle 算法是在服务端进行的包合并情况, 但是如果短时间内客户端的网络情况不好, 或者应用层由于某些原因不能及时将 TCP 的数据 recv, 就会造成多个包在客户端缓冲从而粘包的情况. (如果是在稳定的机房内部通信那么这个概率是比较小可以选择忽略的)"),e("br"),e("em",[e("strong",[_._v("方案3")])]),e("br"),_._v("封包/拆包是目前业内常见的解决方案了. 即给每个数据包在发送之前, 于其前/后放一些有特征的数据, 然后收到数据的时候根据特征数据分割出来各个数据包.")]),_._v(" "),e("h2",{attrs:{id:"为什么udp不会粘包？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么udp不会粘包？","aria-hidden":"true"}},[_._v("#")]),_._v(" 为什么udp不会粘包？")]),_._v(" "),e("p",[_._v("1.TCP协议是面向流的协议，UDP是面向消息的协议")]),_._v(" "),e("p",[_._v("UDP段都是一条消息，应用程序必须以消息为单位提取数据，不能一次提取任意字节的数据")]),_._v(" "),e("p",[_._v("2.UDP具有保护消息边界，在每个UDP包中就有了消息头（消息来源地址，端口等信息），这样对于接收端来说就容易进行区分处理了。传输协议把数据当作一条独立的消息在网上传输，接收端只能接收独立的消息。接收端一次只能接收发送端发出的一个数据包,如果一次接受数据的大小小于发送端一次发送的数据大小，就会丢失一部分数据，即使丢失，接受端也不会分两次去接收")]),_._v(" "),e("h2",{attrs:{id:"如何理解-tcp-backlog？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何理解-tcp-backlog？","aria-hidden":"true"}},[_._v("#")]),_._v(" 如何理解 TCP backlog？")]),_._v(" "),e("blockquote",[e("p",[_._v("本文来自"),e("a",{attrs:{href:"http://veithen.io/2014/01/01/how-tcp-backlog-works-in-linux.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("How TCP backlog works in Linux"),e("OutboundLink")],1)])]),_._v(" "),e("p",[_._v("当应用程序调用"),e("code",[_._v("listen")]),_._v("系统调用让一个"),e("code",[_._v("socket")]),_._v("进入"),e("code",[_._v("LISTEN")]),_._v("状态时，需要指定一个参数："),e("code",[_._v("backlog")]),_._v("。这个参数经常被描述为，新连接队列的长度限制。"),e("br"),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/webp/128853/1561353458578-6c46a25a-f631-4e84-bd87-5ffe0c31c5b6.webp#align=left&display=inline&height=400&originHeight=400&originWidth=660&size=0&status=done&width=660",alt:""}}),e("br"),_._v("tcp-state-diagram.png"),e("br"),_._v("由于"),e("code",[_._v("TCP")]),_._v("建立连接需要进行3次握手，一个新连接在到达"),e("code",[_._v("ESTABLISHED")]),_._v("状态可以被"),e("code",[_._v("accept")]),_._v("系统调用返回给应用程序前，必须经过一个中间状态"),e("code",[_._v("SYN RECEIVED")]),_._v("(见上图)。这意味着，"),e("code",[_._v("TCP/IP")]),_._v("协议栈在实现"),e("code",[_._v("backlog")]),_._v("队列时，有两种不同的选择：")]),_._v(" "),e("ol",[e("li",[_._v("仅使用一个队列，队列规模由"),e("code",[_._v("listen")]),_._v("系统调用"),e("code",[_._v("backlog")]),_._v("参数指定。当协议栈收到一个"),e("code",[_._v("SYN")]),_._v("包时，响应"),e("code",[_._v("SYN/ACK")]),_._v("包并且将连接加进该队列。当相应的"),e("code",[_._v("ACK")]),_._v("响应包收到后，连接变为"),e("code",[_._v("ESTABLISHED")]),_._v("状态，可以向应用程序返回。这意味着队列里的连接可以有两种不同的状态："),e("code",[_._v("SEND RECEIVED")]),_._v("和"),e("code",[_._v("ESTABLISHED")]),_._v("。只有后一种连接才能被"),e("code",[_._v("accept")]),_._v("系统调用返回给应用程序。"),e("br")]),_._v(" "),e("li",[_._v("使用两个队列——"),e("code",[_._v("SYN")]),_._v("队列(待完成连接队列)和"),e("code",[_._v("accept")]),_._v("队列(已完成连接队列)。状态为"),e("code",[_._v("SYN RECEIVED")]),_._v("的连接进入"),e("code",[_._v("SYN")]),_._v("队列，后续当状态变更为"),e("code",[_._v("ESTABLISHED")]),_._v("时移到"),e("code",[_._v("accept")]),_._v("队列(即收到3次握手中最后一个"),e("code",[_._v("ACK")]),_._v("包)。顾名思义，"),e("code",[_._v("accept")]),_._v("系统调用就只是简单地从"),e("code",[_._v("accept")]),_._v("队列消费新连接。在这种情况下，"),e("code",[_._v("listen")]),_._v("系统调用"),e("code",[_._v("backlog")]),_._v("参数决定"),e("code",[_._v("accept")]),_._v("队列的最大规模。"),e("br")])]),_._v(" "),e("p",[_._v("历史上，起源于"),e("code",[_._v("BSD")]),_._v("的"),e("code",[_._v("TCP")]),_._v("实现使用第一种方法。这个方案意味着，但"),e("code",[_._v("backlog")]),_._v("限制达到，系统将停止对"),e("code",[_._v("SYN")]),_._v("包响应"),e("code",[_._v("SYN/ACK")]),_._v("包。通常，协议栈只是丢弃"),e("code",[_._v("SYN")]),_._v("包(而不是回一个"),e("code",[_._v("RST")]),_._v("包)以便客户端可以重试(而不是异常退出)。"),e("br"),e("code",[_._v("TCP/IP详解 卷3")]),_._v("第"),e("code",[_._v("14.5")]),_._v("节中有提到这一点。书中作者提到，"),e("code",[_._v("BSD")]),_._v("实现虽然使用了两个独立的队列，但是行为跟使用一个队列并没什么区别。"),e("br"),_._v("在"),e("code",[_._v("Linux")]),_._v("上，情况有所不同，情况"),e("code",[_._v("listen")]),_._v("系统调用"),e("code",[_._v("man")]),_._v("文档页：")]),_._v(" "),e("blockquote",[e("p",[_._v("The  behavior  of  the  backlog  argument on TCP sockets changed with Linux 2.2.  Now it specifies the queue length for completely established sockets waiting to be accepted, instead of the number of incomplete connection requests.  The maximum length of the queue for incomplete sockets can be set using /proc/sys/net/ipv4/tcp_max_syn_backlog.  When syncookies are enabled there is no logical maximum length and this setting is ignored.\n意思是，"),e("code",[_._v("backlog")]),_._v("参数的行为在"),e("code",[_._v("Linux")]),_._v("2.2之后有所改变。现在，它指定了等待"),e("code",[_._v("accept")]),_._v("系统调用的已建立连接队列的长度，而不是待完成连接请求数。待完成连接队列长度由"),e("code",[_._v("/proc/sys/net/ipv4/tcp_max_syn_backlog")]),_._v("指定；在"),e("code",[_._v("syncookies")]),_._v("启用的情况下，逻辑上没有最大值限制，这个设置便被忽略。")])]),_._v(" "),e("p",[_._v("也就是说，当前版本的"),e("code",[_._v("Linux")]),_._v("实现了第二种方案，使用两个队列——一个"),e("code",[_._v("SYN")]),_._v("队列，长度系统级别可设置以及一个"),e("code",[_._v("accept")]),_._v("队列长度由应用程序指定。"),e("br"),_._v("现在，一个需要考虑的问题是在"),e("code",[_._v("accept")]),_._v("队列已满而一个已完成新连接需要用"),e("code",[_._v("SYN")]),_._v("队列移动到"),e("code",[_._v("accept")]),_._v("队列(收到3次握手中最后一个"),e("code",[_._v("ACK")]),_._v("包)，这个实现方案是什么行为。这种情况下，由"),e("code",[_._v("net/ipv4/tcp_minisocks.c")]),_._v("中"),e("code",[_._v("tcp_check_req")]),_._v("函数处理：")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("child = inet_csk(sk)->icsk_af_ops->syn_recv_sock(sk, skb, req, NULL);\n    if (child == NULL)\n        goto listen_overflow;\n")])])]),e("p",[_._v("对于"),e("code",[_._v("IPv4")]),_._v("，第一行代码实际上调用的是"),e("code",[_._v("net/ipv4/tcp_ipv4.c")]),_._v("中的"),e("code",[_._v("tcp_v4_syn_recv_sock")]),_._v("函数，代码如下：")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("if (sk_acceptq_is_full(sk))\n        goto exit_overflow;\n")])])]),e("p",[_._v("可以看到，这里会检查"),e("code",[_._v("accept")]),_._v("队列的长度。如果队列已满，跳到"),e("code",[_._v("exit_overflow")]),_._v("标签执行一些清理工作、更新"),e("code",[_._v("/proc/net/netstat")]),_._v("中的统计项"),e("code",[_._v("ListenOverflows")]),_._v("和"),e("code",[_._v("ListenDrops")]),_._v("，最后返回"),e("code",[_._v("NULL")]),_._v("。这会触发"),e("code",[_._v("tcp_check_req")]),_._v("函数跳到"),e("code",[_._v("listen_overflow")]),_._v("标签执行代码。")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("listen_overflow:\n    if (!sysctl_tcp_abort_on_overflow) {\n        inet_rsk(req)->acked = 1;\n        return NULL;\n    }\n")])])]),e("p",[_._v("很显然，除非"),e("code",[_._v("/proc/sys/net/ipv4/tcp_abort_on_overflow")]),_._v("被设置为"),e("code",[_._v("1")]),_._v("(这种情况下发送一个"),e("code",[_._v("RST")]),_._v("包)，实现什么都没做。"),e("br"),_._v("总结一下："),e("code",[_._v("Linux")]),_._v("内核协议栈在收到3次握手最后一个"),e("code",[_._v("ACK")]),_._v("包，确认一个新连接已完成，而"),e("code",[_._v("accept")]),_._v("队列已满的情况下，会忽略这个包。一开始您可能会对此感到奇怪——别忘了"),e("code",[_._v("SYN RECEIVED")]),_._v("状态下有一个计时器实现：如果"),e("code",[_._v("ACK")]),_._v("包没有收到(或者是我们讨论的忽略)，协议栈会重发"),e("code",[_._v("SYN/ACK")]),_._v("包(重试次数由"),e("code",[_._v("/proc/sys/net/ipv4/tcp_synack_retries")]),_._v("决定)。"),e("br"),_._v("看以下抓包结果就非常明显——一个客户正尝试连接一个已经达到其最大"),e("code",[_._v("backlog")]),_._v("的"),e("code",[_._v("socket")]),_._v("：")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("0.000  127.0.0.1 -> 127.0.0.1  TCP 74 53302 > 9999 [SYN] Seq=0 Len=0\n  0.000  127.0.0.1 -> 127.0.0.1  TCP 74 9999 > 53302 [SYN, ACK] Seq=0 Ack=1 Len=0\n  0.000  127.0.0.1 -> 127.0.0.1  TCP 66 53302 > 9999 [ACK] Seq=1 Ack=1 Len=0\n  0.000  127.0.0.1 -> 127.0.0.1  TCP 71 53302 > 9999 [PSH, ACK] Seq=1 Ack=1 Len=5\n  0.207  127.0.0.1 -> 127.0.0.1  TCP 71 [TCP Retransmission] 53302 > 9999 [PSH, ACK] Seq=1 Ack=1 Len=5\n  0.623  127.0.0.1 -> 127.0.0.1  TCP 71 [TCP Retransmission] 53302 > 9999 [PSH, ACK] Seq=1 Ack=1 Len=5\n  1.199  127.0.0.1 -> 127.0.0.1  TCP 74 9999 > 53302 [SYN, ACK] Seq=0 Ack=1 Len=0\n  1.199  127.0.0.1 -> 127.0.0.1  TCP 66 [TCP Dup ACK 6#1] 53302 > 9999 [ACK] Seq=6 Ack=1 Len=0\n  1.455  127.0.0.1 -> 127.0.0.1  TCP 71 [TCP Retransmission] 53302 > 9999 [PSH, ACK] Seq=1 Ack=1 Len=5\n  3.123  127.0.0.1 -> 127.0.0.1  TCP 71 [TCP Retransmission] 53302 > 9999 [PSH, ACK] Seq=1 Ack=1 Len=5\n  3.399  127.0.0.1 -> 127.0.0.1  TCP 74 9999 > 53302 [SYN, ACK] Seq=0 Ack=1 Len=0\n  3.399  127.0.0.1 -> 127.0.0.1  TCP 66 [TCP Dup ACK 10#1] 53302 > 9999 [ACK] Seq=6 Ack=1 Len=0\n  6.459  127.0.0.1 -> 127.0.0.1  TCP 71 [TCP Retransmission] 53302 > 9999 [PSH, ACK] Seq=1 Ack=1 Len=5\n  7.599  127.0.0.1 -> 127.0.0.1  TCP 74 9999 > 53302 [SYN, ACK] Seq=0 Ack=1 Len=0\n  7.599  127.0.0.1 -> 127.0.0.1  TCP 66 [TCP Dup ACK 13#1] 53302 > 9999 [ACK] Seq=6 Ack=1 Len=0\n 13.131  127.0.0.1 -> 127.0.0.1  TCP 71 [TCP Retransmission] 53302 > 9999 [PSH, ACK] Seq=1 Ack=1 Len=5\n 15.599  127.0.0.1 -> 127.0.0.1  TCP 74 9999 > 53302 [SYN, ACK] Seq=0 Ack=1 Len=0\n 15.599  127.0.0.1 -> 127.0.0.1  TCP 66 [TCP Dup ACK 16#1] 53302 > 9999 [ACK] Seq=6 Ack=1 Len=0\n 26.491  127.0.0.1 -> 127.0.0.1  TCP 71 [TCP Retransmission] 53302 > 9999 [PSH, ACK] Seq=1 Ack=1 Len=5\n 31.599  127.0.0.1 -> 127.0.0.1  TCP 74 9999 > 53302 [SYN, ACK] Seq=0 Ack=1 Len=0\n 31.599  127.0.0.1 -> 127.0.0.1  TCP 66 [TCP Dup ACK 19#1] 53302 > 9999 [ACK] Seq=6 Ack=1 Len=0\n 53.179  127.0.0.1 -> 127.0.0.1  TCP 71 [TCP Retransmission] 53302 > 9999 [PSH, ACK] Seq=1 Ack=1 Len=5\n106.491  127.0.0.1 -> 127.0.0.1  TCP 71 [TCP Retransmission] 53302 > 9999 [PSH, ACK] Seq=1 Ack=1 Len=5\n106.491  127.0.0.1 -> 127.0.0.1  TCP 54 9999 > 53302 [RST] Seq=1 Len=0\n")])])]),e("p",[_._v("由于客户端的"),e("code",[_._v("TCP")]),_._v("实现在收到多个"),e("code",[_._v("SYN/ACK")]),_._v("包时，认为"),e("code",[_._v("ACK")]),_._v("包已经丢失了并且重传它。如果在"),e("code",[_._v("SYN/ACK")]),_._v("重试次数达到限制前，服务端应用从"),e("code",[_._v("accept")]),_._v("队列接收连接，使得"),e("code",[_._v("backlog")]),_._v("减少，那么协议栈会处理这些重传的"),e("code",[_._v("ACK")]),_._v("包，将连接状态从"),e("code",[_._v("SYN RECEIVED")]),_._v("变更到"),e("code",[_._v("ESTABLISHED")]),_._v("并且将其加入"),e("code",[_._v("accept")]),_._v("队列。否则，正如以上包跟踪所示，客户读会收到一个"),e("code",[_._v("RST")]),_._v("包宣告连接失败。"),e("br"),_._v("在客户端看来，第一次收到"),e("code",[_._v("SYN/ACK")]),_._v("包之后，连接就会进入"),e("code",[_._v("ESTABLISHED")]),_._v("状态。如果这时客户端首先开始发送数据，那么数据也会被重传。好在"),e("code",[_._v("TCP")]),_._v("有慢启动机制，在服务端还没进入"),e("code",[_._v("ESTABLISHED")]),_._v("之前，客户端能发送的数据非常有限。"),e("br"),_._v("相反，如果客户端一开始就在等待服务端，而服务端"),e("code",[_._v("backlog")]),_._v("没能减少，那么最后的结果是连接在客户端看来是"),e("code",[_._v("ESTABLISHED")]),_._v("状态，但在服务端看来是"),e("code",[_._v("CLOSED")]),_._v("状态。这也就是所谓的半开连接。"),e("br"),_._v("有一点还没讨论的是："),e("code",[_._v("man listen")]),_._v("中提到每次收到新"),e("code",[_._v("SYN")]),_._v("包，内核往"),e("code",[_._v("SYN")]),_._v("队列追加一个新连接(除非该队列已满)。事实并非如此，"),e("code",[_._v("net/ipv4/tcp_ipv4.c")]),_._v("中"),e("code",[_._v("tcp_v4_conn_request")]),_._v("函数负责处理"),e("code",[_._v("SYN")]),_._v("包，请看以下代码：")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("if (sk_acceptq_is_full(sk) && inet_csk_reqsk_queue_young(sk) > 1) {\n        NET_INC_STATS_BH(sock_net(sk), LINUX_MIB_LISTENOVERFLOWS);\n        goto drop;\n    }\n")])])]),e("p",[_._v("可以看到，在"),e("code",[_._v("accept")]),_._v("队列已满的情况下，内核会强制限制"),e("code",[_._v("SYN")]),_._v("包的接收速率。如果有大量"),e("code",[_._v("SYN")]),_._v("包待处理，它们其中的一些会被丢弃。这样看来，就完全依靠客户端重传"),e("code",[_._v("SYN")]),_._v("包了，这种行为跟"),e("code",[_._v("BSD")]),_._v("实现一样。"),e("br"),_._v("下结论前，需要再研究以下"),e("code",[_._v("Linux")]),_._v("这种实现方式跟"),e("code",[_._v("BSD")]),_._v("相比有什么优势。"),e("code",[_._v("Stevens")]),_._v("是这样说的：")]),_._v(" "),e("blockquote",[e("p",[_._v("在"),e("code",[_._v("accept")]),_._v("队列已满或者"),e("code",[_._v("SYN")]),_._v("队列已满的情况下，"),e("code",[_._v("backlog")]),_._v("会达到限制。第一种情况经常发生在服务器或者服务器进程非常繁忙的情况下，进程没法足够快地调用"),e("code",[_._v("accept")]),_._v("系统调用从中取出已完成连接。后者是"),e("code",[_._v("HTTP")]),_._v("服务器经常面临的问题，在服务端客户端往返时间非常长的时候(相对于连接到达速率)，因为新"),e("code",[_._v("SYN")]),_._v("包在往返时间内都会占据一个连接对象。\n大多数情况下"),e("code",[_._v("accept")]),_._v("队列都是空的，因为一旦有一个新连接进入队列，阻塞等待的"),e("code",[_._v("accept")]),_._v("系统调用将返回，然后连接从队列中取出。")])]),_._v(" "),e("p",[e("code",[_._v("Stevens")]),_._v("建议的解决方案是简单地调大"),e("code",[_._v("backlog")]),_._v("。但有个问题是，应用程序在调优"),e("code",[_._v("backlog")]),_._v("参数时，不仅需要考虑自身对新连接的处理逻辑，还需要考虑网络状况，包括往返时间等。Linux实现实际上分成两部分：应用程序只负责调解"),e("code",[_._v("backlog")]),_._v("参数，确保"),e("code",[_._v("accept")]),_._v("调用足够快以免"),e("code",[_._v("accept")]),_._v("队列被塞满；系统管理员则根据网络状况调节"),e("code",[_._v("/proc/sys/net/ipv4/tcp_max_syn_backlog")]),_._v("，各司其职。")]),_._v(" "),e("h2",{attrs:{id:"常用端口号与对应的服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用端口号与对应的服务","aria-hidden":"true"}},[_._v("#")]),_._v(" 常用端口号与对应的服务")]),_._v(" "),e("table",[e("thead",[e("tr",[e("th",[_._v("端口")]),_._v(" "),e("th",[_._v("作用说明")])])]),_._v(" "),e("tbody",[e("tr",[e("td",[_._v("21")]),_._v(" "),e("td",[_._v("21端口主要用于FTP（File Transfer Protocol，文件传输协议）服务。")])]),_._v(" "),e("tr",[e("td",[_._v("23")]),_._v(" "),e("td",[_._v("23端口主要用于Telnet（远程登录）服务，是Internet上普遍采用的登录和仿真程序。")])]),_._v(" "),e("tr",[e("td",[_._v("25")]),_._v(" "),e("td",[_._v("25端口为SMTP（Simple Mail Transfer Protocol，简单邮件传输协议）服务器所开放，主要用于发送邮件，如今绝大多数邮件服务器都使用该协议。")])]),_._v(" "),e("tr",[e("td",[_._v("53")]),_._v(" "),e("td",[_._v("53端口为DNS（Domain Name Server，域名服务器）服务器所开放，主要用于域名解析，DNS服务在NT系统中使用的最为广泛。")])]),_._v(" "),e("tr",[e("td",[_._v("67、68")]),_._v(" "),e("td",[_._v("67、68端口分别是为Bootp服务的Bootstrap Protocol Server（引导程序协议服务端）和Bootstrap Protocol Client（引导程序协议客户端）开放的端口。")])]),_._v(" "),e("tr",[e("td",[_._v("69")]),_._v(" "),e("td",[_._v("TFTP是Cisco公司开发的一个简单文件传输协议，类似于FTP。")])]),_._v(" "),e("tr",[e("td",[_._v("79")]),_._v(" "),e("td",[_._v("79端口是为Finger服务开放的，主要用于查询远程主机在线用户、操作系统类型以及是否缓冲区溢出等用户的详细信息。")])]),_._v(" "),e("tr",[e("td",[_._v("80")]),_._v(" "),e("td",[_._v("80端口是为HTTP（HyperText Transport Protocol，超文本传输协议）开放的，这是上网冲浪使用最多的协议，主要用于在WWW（World WideWeb，万维网）服务上传输信息的协议。")])]),_._v(" "),e("tr",[e("td",[_._v("99")]),_._v(" "),e("td",[_._v("99端口是用于一个名为“Metagram Relay”（亚对策延时）的服务，该服务比较少见，一般是用不到的。")])]),_._v(" "),e("tr",[e("td",[_._v("109、110")]),_._v(" "),e("td",[_._v("109端口是为POP2（Post Office Protocol Version 2，邮局协议2）服务开放的，110端口是为POP3（邮件协议3）服务开放的，POP2、POP3都是主要用于接收邮件的。")])]),_._v(" "),e("tr",[e("td",[_._v("111")]),_._v(" "),e("td",[_._v("111端口是SUN公司的RPC（Remote ProcedureCall，远程过程调用）服务所开放的端口，主要用于分布式系统中不同计算机的内部进程通信，RPC在多种网络服务中都是很重要的组件。")])]),_._v(" "),e("tr",[e("td",[_._v("113")]),_._v(" "),e("td",[_._v("113端口主要用于Windows的“Authentication Service”（验证服务）。   119端口：119端口是为“Network News TransferProtocol”（网络新闻组传输协议，简称NNTP）开放的。")])]),_._v(" "),e("tr",[e("td",[_._v("135")]),_._v(" "),e("td",[_._v("135端口主要用于使用RPC（Remote Procedure Call，远程过程调用）协议并提供DCOM（分布式组件对象模型）服务。")])]),_._v(" "),e("tr",[e("td",[_._v("137")]),_._v(" "),e("td",[_._v("137端口主要用于“NetBIOS Name Service”（NetBIOS名称服务）。")])]),_._v(" "),e("tr",[e("td",[_._v("139")]),_._v(" "),e("td",[_._v("139端口是为“NetBIOS Session Service”提供的，主要用于提供Windows文件和打印机共享以及Unix中的Samba服务。")])]),_._v(" "),e("tr",[e("td",[_._v("143")]),_._v(" "),e("td",[_._v("143端口主要是用于“Internet Message Access Protocol”v2（Internet消息访问协议，简称IMAP）。")])]),_._v(" "),e("tr",[e("td",[_._v("161")]),_._v(" "),e("td",[_._v("161端口是用于“Simple Network Management Protocol”（简单网络管理协议，简称SNMP）。")])]),_._v(" "),e("tr",[e("td",[_._v("443")]),_._v(" "),e("td",[_._v("443端口即网页浏览端口，主要是用于HTTPS服务，是提供加密和通过安全端口传输的另一种HTTP。")])]),_._v(" "),e("tr",[e("td",[_._v("554")]),_._v(" "),e("td",[_._v("554端口默认情况下用于“Real Time Streaming Protocol”（实时流协议，简称RTSP）。")])]),_._v(" "),e("tr",[e("td",[_._v("1024")]),_._v(" "),e("td",[_._v("1024端口一般不固定分配给某个服务，在英文中的解释是“Reserved”（保留）。")])]),_._v(" "),e("tr",[e("td",[_._v("1080")]),_._v(" "),e("td",[_._v("1080端口是Socks代理服务使用的端口，大家平时上网使用的WWW服务使用的是HTTP协议的代理服务。")])]),_._v(" "),e("tr",[e("td",[_._v("1755")]),_._v(" "),e("td",[_._v("1755端口默认情况下用于“Microsoft Media Server”（微软媒体服务器，简称MMS）。")])]),_._v(" "),e("tr",[e("td",[_._v("4000")]),_._v(" "),e("td",[_._v("4000端口是用于大家经常使用的QQ聊天工具的，再细说就是为QQ客户端开放的端口，QQ服务端使用的端口是8000。")])]),_._v(" "),e("tr",[e("td",[_._v("5554")]),_._v(" "),e("td",[_._v("在今年4月30日就报道出现了一种针对微软lsass服务的新蠕虫病毒——震荡波（Worm.Sasser），该病毒可以利用TCP 5554端口开启一个FTP服务，主要被用于病毒的传播。")])]),_._v(" "),e("tr",[e("td",[_._v("5632")]),_._v(" "),e("td",[_._v("5632端口是被大家所熟悉的远程控制软件pcAnywhere所开启的端口。")])]),_._v(" "),e("tr",[e("td",[_._v("8080")]),_._v(" "),e("td",[_._v("8080端口同80端口，是被用于WWW代理服务的，可以实现网页。")])])])]),_._v(" "),e("h2",{attrs:{id:"说一说osi七层模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说一说osi七层模型","aria-hidden":"true"}},[_._v("#")]),_._v(" 说一说OSI七层模型")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/f99d6190174db81cd9246f7f832b6587.png",alt:"2019-06-24-12-51-02"}})]),_._v(" "),e("h2",{attrs:{id:"讲一下三次握手？✨"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#讲一下三次握手？✨","aria-hidden":"true"}},[_._v("#")]),_._v(" 讲一下三次握手？✨")]),_._v(" "),e("p",[_._v("所谓三次握手(Three-way Handshake)，是指建立一个 TCP 连接时，需要客户端和服务器总共发送3个包。"),e("br"),_._v("三次握手的目的是连接服务器指定端口，建立 TCP 连接，并同步连接双方的序列号和确认号，交换 TCP 窗口大小信息。在 socket 编程中，客户端执行 "),e("code",[_._v("connect()")]),_._v(" 时。将触发三次握手。")]),_._v(" "),e("ul",[e("li",[_._v("第一次握手(SYN=1, seq=x):"),e("br"),_._v("客户端发送一个 TCP 的 SYN 标志位置1的包，指明客户端打算连接的服务器的端口，以及初始序号 X,保存在包头的序列号(Sequence Number)字段里。"),e("br"),_._v("发送完毕后，客户端进入 "),e("code",[_._v("SYN_SEND")]),_._v(" 状态。"),e("br")]),_._v(" "),e("li",[_._v("第二次握手(SYN=1, ACK=1, seq=y, ACKnum=x+1):"),e("br"),_._v("服务器发回确认包(ACK)应答。即 SYN 标志位和 ACK 标志位均为1。服务器端选择自己 ISN 序列号，放到 Seq 域里，同时将确认序号(Acknowledgement Number)设置为客户的 ISN 加1，即X+1。 发送完毕后，服务器端进入 "),e("code",[_._v("SYN_RCVD")]),_._v(" 状态。"),e("br")]),_._v(" "),e("li",[_._v("第三次握手(ACK=1，ACKnum=y+1)"),e("br"),_._v("客户端再次发送确认包(ACK)，SYN 标志位为0，ACK 标志位为1，并且把服务器发来 ACK 的序号字段+1，放在确定字段中发送给对方，并且在数据段放写ISN的+1"),e("br"),_._v("发送完毕后，客户端进入 "),e("code",[_._v("ESTABLISHED")]),_._v(" 状态，当服务器端接收到这个包时，也进入 "),e("code",[_._v("ESTABLISHED")]),_._v(" 状态，TCP 握手结束。"),e("br")])]),_._v(" "),e("p",[_._v("三次握手的过程的示意图如下：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/6c6890fa6f0ba339ad402daf7b9475c7.png",alt:"2019-06-24-13-21-14"}})]),_._v(" "),e("h2",{attrs:{id:"讲一下四次握手？✨"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#讲一下四次握手？✨","aria-hidden":"true"}},[_._v("#")]),_._v(" 讲一下四次握手？✨")]),_._v(" "),e("p",[_._v("TCP 的连接的拆除需要发送四个包，因此称为四次挥手(Four-way handshake)，也叫做改进的三次握手。客户端或服务器均可主动发起挥手动作，在 socket 编程中，任何一方执行 "),e("code",[_._v("close()")]),_._v(" 操作即可产生挥手操作。")]),_._v(" "),e("ul",[e("li",[_._v("第一次挥手(FIN=1，seq=x)"),e("br"),_._v("假设客户端想要关闭连接，客户端发送一个 FIN 标志位置为1的包，表示自己已经没有数据可以发送了，但是仍然可以接受数据。"),e("br"),_._v("发送完毕后，客户端进入 "),e("code",[_._v("FIN_WAIT_1")]),_._v(" 状态。"),e("br")]),_._v(" "),e("li",[_._v("第二次挥手(ACK=1，ACKnum=x+1)"),e("br"),_._v("服务器端确认客户端的 FIN 包，发送一个确认包，表明自己接受到了客户端关闭连接的请求，但还没有准备好关闭连接。"),e("br"),_._v("发送完毕后，服务器端进入 "),e("code",[_._v("CLOSE_WAIT")]),_._v(" 状态，客户端接收到这个确认包之后，进入 "),e("code",[_._v("FIN_WAIT_2")]),_._v(" 状态，等待服务器端关闭连接。"),e("br")]),_._v(" "),e("li",[_._v("第三次挥手(FIN=1，seq=y)"),e("br"),_._v("服务器端准备好关闭连接时，向客户端发送结束连接请求，FIN 置为1。"),e("br"),_._v("发送完毕后，服务器端进入 "),e("code",[_._v("LAST_ACK")]),_._v(" 状态，等待来自客户端的最后一个ACK。"),e("br")]),_._v(" "),e("li",[_._v("第四次挥手(ACK=1，ACKnum=y+1)"),e("br"),_._v("客户端接收到来自服务器端的关闭请求，发送一个确认包，并进入 "),e("code",[_._v("TIME_WAIT")]),_._v("状态，等待可能出现的要求重传的 ACK 包。"),e("br"),_._v("服务器端接收到这个确认包之后，关闭连接，进入 "),e("code",[_._v("CLOSED")]),_._v(" 状态。"),e("br"),_._v("客户端等待了某个固定时间（两个最大段生命周期，2MSL，2 Maximum Segment Lifetime）之后，没有收到服务器端的 ACK ，认为服务器端已经正常关闭连接，于是自己也关闭连接，进入 "),e("code",[_._v("CLOSED")]),_._v(" 状态。"),e("br")])]),_._v(" "),e("p",[_._v("四次挥手的示意图如下：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/ff0ca6b81005c89ccfc28e190d0f3b9d.png",alt:"2019-06-24-13-22-28"}})]),_._v(" "),e("hr"),_._v(" "),e("p",[_._v("参考:")]),_._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/network.md#net",target:"_blank",rel:"noopener noreferrer"}},[_._v("饿了么面试"),e("OutboundLink")],1)]),_._v(" "),e("li",[e("a",{attrs:{href:"https://hit-alibaba.github.io/interview/basic/network/TCP.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("TCP"),e("OutboundLink")],1)])]),_._v(" "),e("hr")])},[],!1,null,null,null);v.default=c.exports}}]);