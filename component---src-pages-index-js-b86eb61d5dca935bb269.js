(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s})),n.d(t,"pageQuery",(function(){return m}));var a=n("KQm4"),l=n("dI71"),r=n("q1tI"),c=n.n(r),i=n("Wbzz"),u=n("Pgy6"),o=n("aArQ"),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleChangeTag=function(e,t){var a=document.querySelectorAll(".menu_list2 .active");e.preventDefault(),a.forEach((function(e){return e.classList.remove("active")})),e.target.parentElement.classList.add("active"),n.setState({tag:t}),n.handleCloseMenu()},n.handleToggleMenu=function(){n.setState({isMenuOpen:!n.state.isMenuOpen})},n.handleCloseMenu=function(){n.setState({isMenuOpen:!1})},n.state={tag:"всё",isMenuOpen:!1},n}return Object(l.a)(t,e),t.prototype.render=function(){var e=this,t=this.props.data.allMarkdownRemark.edges;return c.a.createElement(o.a,null,c.a.createElement("nav",{className:"nav2"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"menu_toggle2",onClick:this.handleToggleMenu,style:{alignItems:"center",justifyContent:"center"}},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"30",height:"30",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeMiterlimit:"10",d:"M4 7h22M4 15h22M4 23h22"})),c.a.createElement("span",{style:{marginLeft:8}},"Категории")),c.a.createElement("ul",{className:"menu_list2"},c.a.createElement("li",null,c.a.createElement("a",{href:"#",onClick:function(t){return e.handleChangeTag(t,"всё")}},"Всё ")),c.a.createElement("li",null,c.a.createElement("a",{href:"#",onClick:function(t){return e.handleChangeTag(t,"сайты")}},"Сайты ")),c.a.createElement("li",null,c.a.createElement("a",{href:"#",onClick:function(t){return e.handleChangeTag(t,"полиграфия")}},"Полиграфия ")),c.a.createElement("li",null,c.a.createElement("a",{href:"#",onClick:function(t){return e.handleChangeTag(t,"наружная реклама")}},"Наружная реклама ")),c.a.createElement("li",null,c.a.createElement("a",{href:"#",onClick:function(t){return e.handleChangeTag(t,"логотип и фирменный стиль")}},"Логотип и фирменный стиль ")),c.a.createElement("li",null,c.a.createElement("a",{href:"#",onClick:function(t){return e.handleChangeTag(t,"иллюстрации")}},"Иллюстрации "))),c.a.createElement(u.Collapse,{isOpened:this.state.isMenuOpen},c.a.createElement("ul",{className:"menu_list2 menu_list2-mobile"},c.a.createElement("li",null,c.a.createElement("a",{href:"#",onClick:function(t){return e.handleChangeTag(t,"всё")}},"Всё ")),c.a.createElement("li",null,c.a.createElement("a",{href:"#",onClick:function(t){return e.handleChangeTag(t,"сайты")}},"Сайты ")),c.a.createElement("li",null,c.a.createElement("a",{href:"#",onClick:function(t){return e.handleChangeTag(t,"полиграфия")}},"Полиграфия ")),c.a.createElement("li",null,c.a.createElement("a",{href:"#",onClick:function(t){return e.handleChangeTag(t,"наружная реклама")}},"Наружная реклама ")),c.a.createElement("li",null,c.a.createElement("a",{href:"#",onClick:function(t){return e.handleChangeTag(t,"логотип и фирменный стиль")}},"Логотип и фирменный стиль ")),c.a.createElement("li",null,c.a.createElement("a",{href:"#",onClick:function(t){return e.handleChangeTag(t,"иллюстрации")}},"Иллюстрации ")))))),c.a.createElement("section",{className:"portfolio"},c.a.createElement("div",{className:"container-fluid"},t.filter((function(e){return"project-post"===e.node.frontmatter.templateKey})).filter((function(t){return Object(a.a)(t.node.frontmatter.tags).includes(e.state.tag)})).map((function(e){var t=e.node;return c.a.createElement(i.a,{key:t.id,to:t.fields.slug,className:"project-link"},c.a.createElement("img",{src:t.frontmatter.imageInList,alt:t.frontmatter.title+" | "+t.frontmatter.date}),c.a.createElement("p",null,t.frontmatter.title))})))))},t}(c.a.Component),m="3181197821"}}]);
//# sourceMappingURL=component---src-pages-index-js-b86eb61d5dca935bb269.js.map