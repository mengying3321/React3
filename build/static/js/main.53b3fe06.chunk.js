/*! For license information please see main.53b3fe06.chunk.js.LICENSE.txt */
(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{169:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(9),o=a.n(l),r=(a(99),a(69)),i=a(10),s=a(25),m=a(26),u=a(29),p=a(28),d=a(16),E=(a(169),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={selectedTab:"blueTab"},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return c.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},c.a.createElement(d.c,{unselectedTintColor:"#949494",tintColor:"#444",barTintColor:"white"},c.a.createElement(d.c.Item,{title:"\u9996\u9875",key:"home",icon:c.a.createElement("i",{className:"iconfont icon-Homehomepagemenu"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-Homehomepagemenu1"}),selected:"/"===t,onPress:function(){e.props.history.push("/")},"data-seed":"logId"}),c.a.createElement(d.c.Item,{icon:c.a.createElement("i",{className:"iconfont icon-gouwuchekong"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-gouwucheman"}),title:"\u8d2d\u7269\u8f66",key:"cart",selected:"/cart"===t,onPress:function(){e.props.history.push("/cart")},"data-seed":"logId1"}),c.a.createElement(d.c.Item,{icon:c.a.createElement("i",{className:"iconfont icon-dingdan"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-icon"}),title:"\u8ba2\u5355\u5217\u8868",key:"order",selected:"/order"===t,onPress:function(){e.props.history.push("/order")},"data-seed":"logId2"}),c.a.createElement(d.c.Item,{icon:c.a.createElement("i",{className:"iconfont icon-yonghu1"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-yonghu"}),title:"\u6211\u7684\u6dd8\u5b9d",key:"mine",selected:"/mine"===t,onPress:function(){e.props.history.push("/mine")},"data-seed":"logId3"})))}}]),a}(c.a.Component)),h=Object(i.g)(E),g=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={data:["1","2","3","4","5"],imgHeight:176},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg","https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg","https://gw.alicdn.com/imgextra/i4/191/O1CN01k3oS9i1DHWHMwyzaH_!!191-0-lubanu.jpg","https://gw.alicdn.com/imgextra/i4/79/O1CN01xCsBma1CSDv73k0rz_!!79-0-lubanu.jpg","https://gw.alicdn.com/imgextra/i3/189/O1CN0101BLCD1DGbUJJRfeY_!!189-0-lubanu.jpg","https://img.alicdn.com/tps/i4/https://img.alicdn.com/imgextra/i2/6000000007999/O1CN01p1MVOa28xalDbCnhY_!!6000000007999-0-octopus.jpg","https://gw.alicdn.com/imgextra/i4/191/O1CN01k3oS9i1DHWHMwyzaH_!!191-0-lubanu.jpg","https://gw.alicdn.com/imgextra/i1/123/O1CN01hzfrBq1CmNLdUT99q_!!123-0-lubanu.jpg"]})}),100)}},{key:"render",value:function(){var e=this;this.props.location.pathname;return c.a.createElement("div",{className:"homeall"},c.a.createElement("div",{className:"search"},c.a.createElement("i",{className:"iconfont icon-taobao4"}),c.a.createElement("button",{onClick:function(){return e.props.history.push("/search")}},c.a.createElement("i",{className:"iconfont icon-sousuokuang"}),"\u5bfb\u627e\u5b9d\u8d1d\u5e97\u94fa")),c.a.createElement("div",{className:"carousel"},c.a.createElement(d.a,{autoplay:!0,infinite:!0,beforeChange:function(e,t){return console.log("slide from ".concat(e," to ").concat(t))},afterChange:function(e){return console.log("slide to",e)}},this.state.data.map((function(t){return c.a.createElement("a",{key:t,href:"http://www.alipay.com",style:{display:"inline-block",width:"100%",height:e.state.imgHeight}},c.a.createElement("img",{src:"".concat(t),alt:"",style:{width:"100%"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))})))),c.a.createElement("div",{className:"like"},c.a.createElement("span",null,"\u2014\u2014 "),c.a.createElement("i",{className:"iconfont icon-xin1"}),c.a.createElement("span",null," "),"\u4f60\u53ef\u80fd\u8fd8\u559c\u6b22",c.a.createElement("span",null," \u2014\u2014")),c.a.createElement("div",{className:"image"},c.a.createElement("div",{className:"list"},c.a.createElement("button",{onClick:function(){return e.props.history.push("/goods")}},c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i4/757031248/O1CN01pfwcqu1L5ctLtjQBH_!!757031248-0-lubanu-s.jpg_500x500q90.jpg_.webp",alt:""}),c.a.createElement("p",null,"\u6570\u5b57\u6cb9\u753b\u4e09\u8054\u4e09\u62fc\u5927\u753b\u5ba2\u5385\u690d\u7269\u82b1\u5349\u586b\u8272\u586b\u5145\u624b\u5de5\u624b\u7ed8\u6cb9\u5f69\u753b"),c.a.createElement("p",{className:"price"},"\uffe586 ",c.a.createElement("span",null," 1397\u4eba\u5df2\u8d2d\u4e70")))),c.a.createElement("div",{className:"list"},c.a.createElement("button",{onClick:function(){return e.props.history.push("/goods")}},c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i4/105104876/TB2NIabjVXXXXXJXXXXXXXXXXXX_!!105104876.jpg_500x500q90.jpg_.webp",alt:""}),c.a.createElement("p",null,"\u9910\u684c\u5e03\u52a0\u539a\u6b3e\u5149\u9762\u5c65\u819c\u9632\u6c34\u57ab\u7535\u89c6\u67dc\u5dfe\u514d\u6d17\u53f0\u5e03\u9632\u6cb9\u65b9\u684c\u8336\u51e0\u5e03"),c.a.createElement("p",{className:"price"},"\uffe518.15 ",c.a.createElement("span",null," 92\u4eba\u5df2\u8d2d\u4e70")))),c.a.createElement("div",{className:"list"},c.a.createElement("button",{onClick:function(){return e.props.history.push("/goods")}},c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i1/1807946353/TB1hyrjJFXXXXchXVXXYXGcGpXX_M2.SS2_500x500q90.jpg_.webp",alt:""}),c.a.createElement("p",null,"\u521b\u610f\u53ef\u7231\u5c0f\u9e1f\u52a8\u7269\u82b1\u76c6\u4e2a\u6027\u82b1\u5668\u4eff\u7c97\u9676\u591a\u8089\u6811\u8102\u76c6\u666f\u88c5\u9970\u793c\u54c1\u5723\u8bde\u8282"),c.a.createElement("p",{className:"price"},"\uffe526.9 ",c.a.createElement("span",null," 58\u4eba\u5df2\u8d2d\u4e70")))),c.a.createElement("div",{className:"list"},c.a.createElement("button",{onClick:function(){return e.props.history.push("/goods")}},c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i2/26807350/O1CN01dNIqET24ALZN5o5IU_!!26807350.jpg_500x500q90.jpg_.webp",alt:""}),c.a.createElement("p",null,"\u51fa\u53e3\u65e5\u672c\u5c3e\u5355\u8721\u7b14\u5c0f\u65b0\u52a8\u611f\u8d85\u4eba\u91ce\u539f\u65b0\u4e4b\u52a9\u5bc6\u80fa\u6811\u8102\u5237\u7259\u6f31\u53e3\u6c34\u676f"),c.a.createElement("p",{className:"price"},"\uffe515 ",c.a.createElement("span",null," 118\u4eba\u5df2\u8d2d\u4e70")))),c.a.createElement("div",{className:"list"},c.a.createElement("button",{onClick:function(){return e.props.history.push("/goods")}},c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i1/1864085853/O1CN011t6idZ8aAHpqC7k_!!1864085853.jpg_500x500q90.jpg_.webp",alt:""}),c.a.createElement("p",null,"\u8c61\u6709\u79d8\u5bc6\u9762\u762b\u718a\u5927\u5bb9\u91cf\u9676\u74f7\u5e26\u76d6\u52fa\u6c34\u676f\u9a6c\u514b\u676f\u71d5\u9ea6\u676f\u5b50\u5927\u53f7\u65e9\u9910\u7897\u676f"),c.a.createElement("p",{className:"price"},"\uffe536.9 ",c.a.createElement("span",null," 289\u4eba\u5df2\u8d2d\u4e70")))),c.a.createElement("div",{className:"list"},c.a.createElement("button",{onClick:function(){return e.props.history.push("/goods")}},c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i4/757031248/O1CN01pfwcqu1L5ctLtjQBH_!!757031248-0-lubanu-s.jpg_500x500q90.jpg_.webp",alt:""}),c.a.createElement("p",null,"\u6570\u5b57\u6cb9\u753b\u4e09\u8054\u4e09\u62fc\u5927\u753b\u5ba2\u5385\u690d\u7269\u82b1\u5349\u586b\u8272\u586b\u5145\u624b\u5de5\u624b\u7ed8\u6cb9\u5f69\u753b"),c.a.createElement("p",{className:"price"},"\uffe586 ",c.a.createElement("span",null," 1397\u4eba\u5df2\u8d2d\u4e70")))),c.a.createElement("div",{className:"list"},c.a.createElement("button",{onClick:function(){return e.props.history.push("/goods")}},c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i4/105104876/TB2NIabjVXXXXXJXXXXXXXXXXXX_!!105104876.jpg_500x500q90.jpg_.webp",alt:""}),c.a.createElement("p",null,"\u9910\u684c\u5e03\u52a0\u539a\u6b3e\u5149\u9762\u5c65\u819c\u9632\u6c34\u57ab\u7535\u89c6\u67dc\u5dfe\u514d\u6d17\u53f0\u5e03\u9632\u6cb9\u65b9\u684c\u8336\u51e0\u5e03"),c.a.createElement("p",{className:"price"},"\uffe518.15 ",c.a.createElement("span",null," 92\u4eba\u5df2\u8d2d\u4e70")))),c.a.createElement("div",{className:"list"},c.a.createElement("button",{onClick:function(){return e.props.history.push("/goods")}},c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i1/1807946353/TB1hyrjJFXXXXchXVXXYXGcGpXX_M2.SS2_500x500q90.jpg_.webp",alt:""}),c.a.createElement("p",null,"\u521b\u610f\u53ef\u7231\u5c0f\u9e1f\u52a8\u7269\u82b1\u76c6\u4e2a\u6027\u82b1\u5668\u4eff\u7c97\u9676\u591a\u8089\u6811\u8102\u76c6\u666f\u88c5\u9970\u793c\u54c1\u5723\u8bde\u8282"),c.a.createElement("p",{className:"price"},"\uffe526.9 ",c.a.createElement("span",null," 58\u4eba\u5df2\u8d2d\u4e70")))),c.a.createElement("div",{className:"list"},c.a.createElement("button",{onClick:function(){return e.props.history.push("/goods")}},c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i2/26807350/O1CN01dNIqET24ALZN5o5IU_!!26807350.jpg_500x500q90.jpg_.webp",alt:""}),c.a.createElement("p",null,"\u51fa\u53e3\u65e5\u672c\u5c3e\u5355\u8721\u7b14\u5c0f\u65b0\u52a8\u611f\u8d85\u4eba\u91ce\u539f\u65b0\u4e4b\u52a9\u5bc6\u80fa\u6811\u8102\u5237\u7259\u6f31\u53e3\u6c34\u676f"),c.a.createElement("p",{className:"price"},"\uffe515 ",c.a.createElement("span",null," 118\u4eba\u5df2\u8d2d\u4e70")))),c.a.createElement("div",{className:"list"},c.a.createElement("button",{onClick:function(){return e.props.history.push("/goods")}},c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i1/1864085853/O1CN011t6idZ8aAHpqC7k_!!1864085853.jpg_500x500q90.jpg_.webp",alt:""}),c.a.createElement("p",null,"\u8c61\u6709\u79d8\u5bc6\u9762\u762b\u718a\u5927\u5bb9\u91cf\u9676\u74f7\u5e26\u76d6\u52fa\u6c34\u676f\u9a6c\u514b\u676f\u71d5\u9ea6\u676f\u5b50\u5927\u53f7\u65e9\u9910\u7897\u676f"),c.a.createElement("p",{className:"price"},"\uffe536.9 ",c.a.createElement("span",null," 289\u4eba\u5df2\u8d2d\u4e70"))))),c.a.createElement("div",{className:"bot"}),c.a.createElement(h,null))}}]),a}(c.a.Component),b=function(){return c.a.createElement("div",null,"\u8d2d\u7269\u8f66",c.a.createElement(h,null))},f=function(){return c.a.createElement("div",null,"\u8ba2\u5355",c.a.createElement(h,null))},X=function(){return c.a.createElement("div",null,"\u6211\u7684\u6dd8\u5b9d",c.a.createElement(h,null))},N=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState({value:e})},n.clear=function(){n.setState({value:""})},n.handleClick=function(){n.manualFocusInst.focus()},n.state={value:""},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(d.b,{value:this.state.value,placeholder:"\u5b9d\u8d1d",onSubmit:function(e){return console.log(e,"onSubmit")},onClear:function(e){return console.log(e,"onClear")},onFocus:function(){return console.log("onFocus")},onBlur:function(){return console.log("onBlur")},onCancel:function(){return e.props.history.push("/")},showCancelButton:!0,onChange:this.onChange}))}}]),a}(c.a.Component),j=(a(172),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={value:""},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{id:"all"},c.a.createElement("div",{className:"goods"},c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i4/757031248/O1CN01pfwcqu1L5ctLtjQBH_!!757031248-0-lubanu-s.jpg_500x500q90.jpg_.webp",alt:""}),c.a.createElement("div",{className:"back"},c.a.createElement("button",{onClick:function(){return e.props.history.push("/home")}},c.a.createElement("i",{className:"iconfont icon-fanhui"})),c.a.createElement("i",{className:"iconfont icon-jiarugouwuche"})),c.a.createElement("p",{className:"dol"},"\uffe586.00"),c.a.createElement("p",{className:"text"},"\u6570\u5b57\u6cb9\u753b\u4e09\u8054\u4e09\u62fc\u5927\u753b\u5ba2\u5385\u690d\u7269\u82b1\u5349\u586b\u8272\u586b\u5145\u624b\u5de5\u624b\u7ed8\u6cb9\u5f69\u753b")),c.a.createElement("div",{className:"bottom"},c.a.createElement("div",{className:"left"},c.a.createElement("i",{className:"iconfont icon-dianpuweixuanzhong-"}),c.a.createElement("i",{className:"iconfont icon-taobaokefu-01"}),c.a.createElement("i",{className:"iconfont icon-shoucang"}),c.a.createElement("p",null,"\u5e97\u94fa",c.a.createElement("span",null,"\u5ba2\u670d"),c.a.createElement("span",null,"\u6536\u85cf"))),c.a.createElement("div",{className:"right"},c.a.createElement("span",{id:"che"},"\u52a0\u5165\u8d2d\u7269\u8f66"),c.a.createElement("span",{id:"buy"},"\u7acb\u5373\u8d2d\u4e70"))))}}]),a}(c.a.Component)),v=function(){return c.a.createElement(r.a,null,c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"/cart",component:b}),c.a.createElement(i.b,{path:"/order",component:f}),c.a.createElement(i.b,{path:"/mine",component:X}),c.a.createElement(i.b,{path:"/search",component:N}),c.a.createElement(i.b,{path:"/goods",component:j}),c.a.createElement(i.b,{component:g}),c.a.createElement(i.b,{render:function(){return c.a.createElement(i.a,{to:"/"})}})))};o.a.render(c.a.createElement(v,null),document.getElementById("root"));fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){}))},94:function(e,t,a){e.exports=a(173)}},[[94,1,2]]]);
//# sourceMappingURL=main.53b3fe06.chunk.js.map