(this.webpackJsonpportfolio_page_v2=this.webpackJsonpportfolio_page_v2||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('{"webapps":[{"url":"https://platypusiv.github.io/vtuberhome/","description":"A react application made to introduce people to different vtubers. It collects data from different websites (twitter, youtube, twitch etc), puts it into one place, lets you save your favorites into your browser for later viewing.","githubUrl":"https://github.com/PlatypusIV/vtuberhome","technologies":["Nodejs","Reactjs","Google Apis"],"title":"Vtuber home","images":["assets/projects/vtuberHome1.png","vtuberHome2.png","vtuberHome3.png"],"type":"webapp","index":0},{"url":"https://platypusiv.github.io/tarfPage/","description":"Homepage for Tarf the musician.","githubUrl":"https://github.com/PlatypusIV/tarfPage","technologies":["Reactjs","Nodejs","Youtube Data Api"],"title":"Tarfs homepage","images":["assets/projects/tarfPage1.png","tarfPage2.png"],"type":"webapp","index":1}]}')},,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(12),i=n.n(c),o=(n(20),n(2)),a=n(3),l=n(5),j=n(4),d=(n(21),n(0)),u=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleSubmit=function(t){t.preventDefault();var n=e.state,s=n.message,r=n.subject;try{""!==s&&null!==s&&null!==r&&(window.open("mailto:hkymera2@gmail.com?subject=subject&body=".concat(s)),e.setState({reply:!0}))}catch(c){console.log(c)}},e.handleInput=function(t){try{switch(t.target.id){case"inputSubject":e.setState({subject:t.target.value});break;case"textareaMessage":e.setState({message:t.target.value})}}catch(n){console.log(n)}},e.state={message:null,subject:null,reply:!1},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"divContactMain",id:"contacts",children:[Object(d.jsx)("div",{className:"divLeft",children:Object(d.jsx)("img",{src:"assets/shake.svg",alt:""})}),Object(d.jsxs)("div",{className:"divRight",children:[Object(d.jsx)("h2",{children:"Contact me"}),Object(d.jsx)("span",{children:"Feel free to email me, or to use my fiverr or linkedin link below!"}),Object(d.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(d.jsx)("input",{type:"text",placeholder:"Subject",onChange:function(t){return e.handleInput(t)},id:"inputSubject"}),Object(d.jsx)("textarea",{placeholder:"Message",onChange:function(t){return e.handleInput(t)},id:"textareaMessage"}),Object(d.jsx)("button",{children:"Open email"})]}),this.state.reply&&Object(d.jsx)("span",{children:"Thank you for your message . I will reply to you, first chance I get!"}),Object(d.jsxs)("div",{className:"divRelevantLinks",children:[Object(d.jsx)("a",{href:"https://linkedin.com/in/herbert-ken-\xfcmera-74709b176",children:Object(d.jsx)("img",{src:"assets/linkedin.png",alt:""})}),Object(d.jsx)("a",{href:"https://www.fiverr.com/users/herbertkenmera/",children:Object(d.jsx)("img",{src:"assets/fiverr.png",alt:""})}),Object(d.jsx)("a",{href:"https://github.com/PlatypusIV",children:Object(d.jsx)("img",{src:"assets/github.png",alt:""})})]})]})]})}}]),n}(s.Component),p=n(13),h=(n(23),["Web Developer","Node.js developer","C# developer","Drone pilot"]),b=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){var e=document.querySelector("#jobSpan");Object(p.a)(e,{backDelay:2e3,backSpeed:200,showCursor:!1,strings:h})},e}return Object(a.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"divMainIntro",id:"intro",children:[Object(d.jsx)("div",{className:"divLeft",children:Object(d.jsx)("div",{className:"imgContainer",children:Object(d.jsx)("img",{src:"assets/FaceForwardOld.png",alt:""})})}),Object(d.jsxs)("div",{className:"divRight",children:[Object(d.jsxs)("div",{className:"divWrapper",children:[Object(d.jsx)("h1",{children:"Hi There, I'm"}),Object(d.jsx)("h2",{children:"Herbert-Ken \xdcmera"}),Object(d.jsxs)("h3",{children:["Freelance ",Object(d.jsx)("span",{id:"jobSpan"})]})]}),Object(d.jsx)("a",{href:"#portfolio",children:Object(d.jsx)("img",{src:"assets/down.png",alt:""})})]})]})}}]),n}(s.Component),m=n(7),O=(n(24),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).componentDidUpdate=function(t,n){try{e.state.selected!==n.selected&&console.log(e.state.selected)}catch(s){console.log(s)}},e.portfolioTitles=[{title:"Featured",id:"featured"},{title:"Web apps",id:"webapps"}],e.renderPortfolioItems=function(){var t=e.state.selected,n=[];switch(t){case"featured":for(var s in m)console.log(m[s]),n=m[s].map((function(t){return Object(d.jsx)(y,{imageProp:t.images[0],titleProp:t.title,urlProp:t.url,getPortfolioItemProp:e.props.chooseWorkProp,workIndexProp:t.index})}));break;default:n=m[t].map((function(t){return Object(d.jsx)(y,{imageProp:t.images[0],titleProp:t.title,urlProp:t.url,getPortfolioItemProp:e.props.chooseWorkProp,workIndexProp:t.index})}))}return n},e.setSelected=function(t){e.setState({selected:t})},e.renderPortfolioTitles=function(){var t=e.state.selected;return e.portfolioTitles.map((function(n){return Object(d.jsx)(N,{titleProp:n.title,idProp:n.id,activeProp:t===n.id,setSelectedProp:e.setSelected},n.id)}))},e.state={selected:"featured",currentType:"featured"},e}return Object(a.a)(n,[{key:"render",value:function(){return console.log(m),Object(d.jsxs)("div",{className:"divMainPortfolio",id:"portfolio",children:[Object(d.jsx)("h1",{children:"Portfolio"}),Object(d.jsx)("div",{className:"divContainer",children:this.renderPortfolioItems()})]})}}]),n}(s.Component)),f=(n(25),s.Component,n(26),n(49)),v=n(50),x=n(51),g=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).openCloseMenu=function(){e.props.openMenuProp()},e}return Object(a.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:this.props.menuStateProp?"divMainTopbar active":"divMainTopbar",children:Object(d.jsxs)("div",{className:"divWrapper",children:[Object(d.jsxs)("div",{className:"divLeft",children:[Object(d.jsx)("a",{href:"#intro",className:"aLogo",children:Object(d.jsx)("img",{src:this.props.menuStateProp?"assets/portfolioLogoGrayOut.png":"assets/portfolioLogoBlackOut.png",className:"imgLogo"})}),Object(d.jsx)("div",{className:"divItemContainer",children:Object(d.jsxs)("span",{children:[Object(d.jsx)(f.a,{className:"icon"}),"Herbert-Ken \xdcmera"]})}),Object(d.jsxs)("div",{className:"divItemContainer",children:[Object(d.jsx)(v.a,{className:"icon"}),Object(d.jsx)("span",{children:"+372 56271562"})]}),Object(d.jsxs)("div",{className:"divItemContainer",children:[Object(d.jsx)(x.a,{className:"icon"}),Object(d.jsx)("span",{children:"hkymera2@gmail.com"})]})]}),Object(d.jsx)("div",{className:"divRight",children:Object(d.jsxs)("div",{className:"divHamburger",onClick:this.openCloseMenu,children:[Object(d.jsx)("span",{className:"line1"}),Object(d.jsx)("span",{className:"line2"}),Object(d.jsx)("span",{className:"line3"})]})})]})})}}]),n}(s.Component),k=(n(31),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).componentDidUpdate=function(t){t.workIndexProp!==e.props.workIndexProp&&e.setcurrentSlide(e.props.workIndexProp)},e.openUrl=function(e){void 0!==e&&window.open(e,"_blank")},e.setcurrentSlide=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=e.state.currentSlide,s=0;switch(t){case"left":s=n<=0?1:n-1;break;case"right":s=n>=1?0:n+1;break;default:void 0!==t&&null!==t&&(s=t)}e.setState({currentSlide:s})},e.renderProjects=function(){var t=[];for(var n in m)t=m[n].map((function(t){return Object(d.jsx)("div",{className:"divContainer",children:Object(d.jsxs)("div",{className:"divWorksItem",children:[Object(d.jsx)("div",{className:"divLeft",children:Object(d.jsxs)("div",{className:"divLeftContainer",children:[Object(d.jsx)("div",{className:"divImgContainer",children:Object(d.jsx)("img",{src:"webapp"===t.type?"assets/globe.png":"assets/mobile.png",alt:""})}),Object(d.jsx)("h2",{children:t.title}),Object(d.jsx)("p",{children:t.description}),Object(d.jsxs)("div",{className:"divTechnologies",children:[Object(d.jsx)("span",{children:"Technologies used:"}),Object(d.jsx)("ul",{children:t.technologies.map((function(e){return Object(d.jsx)("li",{children:e})}))})]}),Object(d.jsx)("div",{className:"divVisit",children:Object(d.jsx)("button",{className:"btnVisit",onClick:function(){return e.openUrl(t.url)},children:Object(d.jsx)("span",{children:"Visit the site!"})})})]})}),Object(d.jsx)("div",{className:"divRight",children:Object(d.jsx)("img",{src:t.images[0],alt:""})})]})})}));return t},e.state={currentSlide:0},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.state.currentSlide;return Object(d.jsxs)("div",{className:"divMainWorks",id:"works",children:[Object(d.jsx)("div",{className:"divSlider",style:{transform:"translateX(-".concat(100*t,"vw)")},children:this.renderProjects()}),Object(d.jsx)("img",{src:"assets/arrow.png",alt:"",className:"arrow left",onClick:function(){return e.setcurrentSlide("left")}}),Object(d.jsx)("img",{src:"assets/arrow.png",alt:"",className:"arrow right",onClick:function(){return e.setcurrentSlide("right")}})]})}}]),n}(s.Component)),P=(n(32),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).closeMenu=function(){e.props.openMenuProp()},e}return Object(a.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:this.props.menuStateProp?"divMainMenu active":"divMainMenu",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#intro",onClick:this.closeMenu,children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#portfolio",onClick:this.closeMenu,children:"Portfolio"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#works",onClick:this.closeMenu,children:"Works"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#contacts",onClick:this.closeMenu,children:"Contact"})})]})})}}]),n}(s.Component)),N=(n(33),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsx)("li",{className:this.props.activeProp?"liListitem active":"liListem",onClick:function(){return e.props.setSelectedProp(e.props.idProp)},children:Object(d.jsx)("span",{children:this.props.titleProp})})}}]),n}(s.Component)),y=(n(34),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).openWork=function(){e.props.getPortfolioItemProp(e.props.workIndexProp),window.open("#works","_self")},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props,t=e.imageProp,n=e.titleProp;return Object(d.jsxs)("div",{className:"divItem",onClick:this.openWork,children:[Object(d.jsx)("img",{src:t,alt:""}),Object(d.jsx)("h3",{children:n})]})}}]),n}(s.Component)),w=(n(35),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).getPortfolioItem=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;try{null!==t&&e.setState({workFromPortfolio:t})}catch(n){console.log(n)}},e.openCloseMenu=function(){e.setState({menuOpen:!e.state.menuOpen})},e.state={menuOpen:!1,workFromPortfolio:0},e}return Object(a.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(g,{menuStateProp:this.state.menuOpen,openMenuProp:this.openCloseMenu}),Object(d.jsx)(P,{menuStateProp:this.state.menuOpen,openMenuProp:this.openCloseMenu}),Object(d.jsxs)("section",{className:"sections",children:[Object(d.jsx)(b,{className:"child"}),Object(d.jsx)(O,{className:"child",chooseWorkProp:this.getPortfolioItem}),Object(d.jsx)(k,{className:"child",workIndexProp:this.state.workFromPortfolio}),Object(d.jsx)(u,{className:"child"})]})]})}}]),n}(r.a.Component));i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root"))}],[[36,1,2]]]);
//# sourceMappingURL=main.d2af3911.chunk.js.map