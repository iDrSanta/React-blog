(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{121:function(e,t,c){},17:function(e,t,c){e.exports={articalFormWrapper:"CreateArticalForm_articalFormWrapper__gKv-I",articalForm:"CreateArticalForm_articalForm__2yBHl",inputForm:"CreateArticalForm_inputForm__2tJfF",inputWrapper:"CreateArticalForm_inputWrapper__1Qdii"}},242:function(e,t,c){},245:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(49),s=c.n(r),i=(c(115),c(13)),o=c(16),l=c(30),j=c(99),m=c(3),d=c(6),b={isLoaded:!1,items:[]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ARTICLES":return Object(d.a)(Object(d.a)({},e),{},{items:t.payload});case"ADD_ARTICLE":var c=e.items.length?e.items[e.items.length-1]+1:1;return Object(d.a)(Object(d.a)({},e),{},{items:[].concat(Object(m.a)(e.items),[Object(d.a)({id:c},t.payload)])});case"REMOVE_ARTICLE":return Object(d.a)(Object(d.a)({},e),{},{items:e.items.filter((function(e){return Number(e.id)!==Number(t.payload)}))});default:return e}},p={isLoaded:!1,items:[]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COMMENTS":return Object(d.a)(Object(d.a)({},e),{},{items:t.payload});case"ADD_COMMENTS":return Object(d.a)(Object(d.a)({},e),{},{items:[].concat(Object(m.a)(e.items),[t.payload])});case"REMOVE_COMMENT":return Object(d.a)(Object(d.a)({},e),{},{items:e.items.filter((function(e){return e.id!==t.payload}))});default:return e}},x={isLoaded:!1,fullArticle:{}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FULL_ARTICLE":return Object(d.a)(Object(d.a)({},e),{},{fullArticle:t.payload});default:return e}},_=Object(l.b)({articles:u,comments:O,fullArticle:h}),f=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):l.c)(Object(l.a)(j.a)),v=Object(l.d)(_,f),g=(c(121),c(4)),N=c(7),C=c(106),E=c.n(C),y=c(26),T=c.n(y),A=c(22),w=c(39),F=c(108),k=(c(222),c(17)),M=c.n(k),W=c(5),R=c.n(W),S=c(11),I=c(19),L=c.n(I),B=function(e){return{type:"ADD_ARTICLE",payload:e}},D=function(e){return{type:"REMOVE_ARTICLE",payload:e}},P=c(1),V=w.a({title:w.b().min(3,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0430"),image:w.b().url("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 URL").required("\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),text:w.b().min(3,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0430")}),X=function(e){var t=e.toggleVisibleModal,c=Object(A.d)({resolver:Object(F.a)(V)}),a=c.register,n=c.handleSubmit,r=c.formState.errors;console.log(r);var s=Object(i.b)();return Object(P.jsxs)("div",{className:M.a.articalFormWrapper,children:[Object(P.jsxs)("div",{className:M.a.articalForm,children:[Object(P.jsxs)("div",{className:M.a.inputWrapper,children:[Object(P.jsx)("h2",{children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}),Object(P.jsx)("input",Object(d.a)(Object(d.a)({className:M.a.inputForm,type:"text",name:"title"},a("title")),{},{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a..."})),r.title&&Object(P.jsx)("p",{children:r.title.message})]}),Object(P.jsx)("h3",{children:"\u041f\u043e\u0434\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}),Object(P.jsx)("input",Object(d.a)(Object(d.a)({className:M.a.inputForm,type:"text",name:"subTitle"},a("subTitle")),{},{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a..."})),Object(P.jsxs)("div",{className:M.a.inputWrapper,children:[Object(P.jsx)("h3",{children:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),Object(P.jsx)("input",Object(d.a)(Object(d.a)({className:M.a.inputForm,type:"text",name:"image"},a("image")),{},{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL..."})),r.image&&Object(P.jsx)("p",{children:r.image.message})]}),Object(P.jsxs)("div",{className:M.a.inputWrapper,children:[Object(P.jsx)("h3",{children:"\u0422\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u0442\u044c\u0438"}),Object(P.jsx)("textarea",Object(d.a)(Object(d.a)({className:M.a.inputForm,type:"text",name:"text"},a("text")),{},{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."})),r.text&&Object(P.jsx)("p",{children:r.text.message})]})]}),Object(P.jsx)("button",{onClick:n((function(e){var c;console.log(e),s((c=e,function(){var e=Object(S.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.post("https://618dc902fe09aa001744089a.mockapi.io/articles",c);case 2:t(B(c));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),t()})),children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})]})},H=c(103),U=c.n(H),J=(c(242),function(e){var t=e.toggleVisibleModal,c=e.children;return Object(P.jsx)("div",{onClick:t,className:"modalWrapper",children:Object(P.jsxs)("div",{onClick:function(e){return e.stopPropagation()},className:"modalContent",children:[Object(P.jsx)(U.a,{onClick:t,sx:{color:"rgb(158, 158, 158)"}}),c]})})}),q=function(){var e=n.a.useState(!1),t=Object(N.a)(e,2),c=t[0],a=t[1],r=function(){a(!c)};return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("div",{className:T.a.headerContainer,children:Object(P.jsxs)("header",{className:T.a.header,children:[Object(P.jsx)(o.b,{to:"/React-blog/",children:Object(P.jsx)("div",{className:T.a.logo,children:"RB"})}),Object(P.jsxs)("div",{className:T.a.searchBox,children:[Object(P.jsx)(E.a,{sx:{color:"rgb(122, 122, 122)"}}),Object(P.jsx)("input",{className:T.a.inputSearch,type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a"})]}),Object(P.jsx)("button",{onClick:r,className:T.a.newEntry,children:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c"})]})}),c&&Object(P.jsx)(J,{visibleModal:c,toggleVisibleModal:r,children:Object(P.jsx)(X,{toggleVisibleModal:r})})]})},G=c(31),Q=c.n(G),Y=c(107),K=c.n(Y),Z=c(27),z=c.n(Z),$=function(e){return{type:"REMOVE_COMMENT",payload:e}},ee=function(e){var t=e.id,c=e.userName,a=e.text,n=Object(i.b)(),r=function(e){n(function(e){return function(){var t=Object(S.a)(R.a.mark((function t(c){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.a.delete("https://618dc902fe09aa001744089a.mockapi.io/comment/".concat(e));case 2:c($(e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e)),console.log(e)};return Object(P.jsx)("div",{className:"container",children:Object(P.jsxs)("div",{className:z.a.comment,children:[Object(P.jsxs)("div",{className:z.a.commetnInfo,children:[Object(P.jsx)(K.a,{sx:{color:"rgb(158, 158, 158)"}}),Object(P.jsxs)("div",{className:"commentUserInfo",children:[Object(P.jsx)("div",{className:z.a.commentNikname,children:c}),Object(P.jsx)("div",{className:z.a.commentDate,children:"3 \u0447\u0430\u0441\u0430"})]})]}),Object(P.jsx)("div",{className:z.a.commentText,children:a}),Object(P.jsx)("button",{className:z.a.removeBtn,onClick:function(){return r(t)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})})},te=function(e){var t=e.comments,c=void 0===t?[]:t;return Object(P.jsxs)("div",{className:Q.a.commentsWrapper,children:[Object(P.jsx)("div",{className:Q.a.commentsTopBox,children:Object(P.jsxs)("div",{className:"container",children:[Object(P.jsxs)("h3",{className:Q.a.commentsCounter,children:[c.length," \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432"]}),Object(P.jsx)("button",{className:Q.a.active,children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435"}),Object(P.jsx)("button",{children:"\u041f\u043e \u043f\u043e\u0440\u044f\u0434\u043a\u0443"})]})}),Object(P.jsx)("div",{className:"container",children:Object(P.jsx)("input",{className:Q.a.commentInput,type:"text",placeholder:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439..."})}),c.map((function(e){return Object(P.jsx)(ee,Object(d.a)({},e),e.id)}))]})},ce=c(32),ae=c.n(ce),ne=function(){var e=Object(g.g)().id,t=Object(i.c)((function(e){return e.fullArticle})).fullArticle;console.log(t);var c=Object(i.b)();return n.a.useEffect((function(){c(function(e){return function(){var t=Object(S.a)(R.a.mark((function t(c){var a,n;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.a.get("https://618dc902fe09aa001744089a.mockapi.io/articles/".concat(e));case 2:a=t.sent,n=a.data,c({type:"SET_FULL_ARTICLE",payload:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}),[]),Object(P.jsx)(P.Fragment,{children:t?Object(P.jsxs)("div",{children:[Object(P.jsxs)("div",{className:ae.a.articleWrapper,children:[Object(P.jsxs)("div",{className:"container",children:[Object(P.jsx)("div",{className:ae.a.title,children:Object(P.jsx)("h1",{children:t.title})}),Object(P.jsx)("div",{className:ae.a.subTitle,children:Object(P.jsx)("h4",{children:t.subTitle})})]}),Object(P.jsx)("img",{src:t.image,alt:"postImg"}),Object(P.jsxs)("div",{className:"container",children:[Object(P.jsx)("div",{className:ae.a.text,children:t.text}),Object(P.jsx)("div",{className:ae.a.buttonBox,children:Object(P.jsx)(o.b,{to:"/React-blog/",children:Object(P.jsx)("button",{children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})})})]})]}),Object(P.jsx)(te,{comments:t.comments})]}):404})},re=c(67),se=c.n(re),ie=c(38),oe=c.n(ie),le=function(e){var t=e.id,c=e.title,a=e.subTitle,n=e.image,r=Object(i.b)(),s=function(e){console.log(e),r(function(e){return function(){var t=Object(S.a)(R.a.mark((function t(c){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.a.delete("https://618dc902fe09aa001744089a.mockapi.io/articles/".concat(e));case 2:c(D(e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(P.jsxs)("div",{className:oe.a.postWrapper,children:[Object(P.jsx)(o.b,{to:"post/".concat(t),children:Object(P.jsx)("div",{className:oe.a.title,children:Object(P.jsx)("h3",{children:c})})}),Object(P.jsx)("div",{className:oe.a.subTitle,children:Object(P.jsx)("h3",{children:a})}),Object(P.jsx)("img",{src:n,alt:"postImg"}),Object(P.jsxs)("div",{className:oe.a.buttonBox,children:[Object(P.jsx)(o.b,{to:"post/".concat(t),children:Object(P.jsx)("button",{children:"\u0427\u0438\u0442\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e"})}),Object(P.jsx)("button",{onClick:function(){return s(t)},style:{background:"#FFF4E2",border:"1px solid #fdeacb"},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})},je=function(){var e=Object(i.c)((function(e){return e.articles.items})).reverse(),t=Object(i.b)();return n.a.useEffect((function(){t(function(){var e=Object(S.a)(R.a.mark((function e(t){var c,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://618dc902fe09aa001744089a.mockapi.io/articles");case 2:c=e.sent,a=c.data,t({type:"SET_ARTICLES",payload:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(P.jsxs)("div",{className:se.a.mainPageWrapper,children:[Object(P.jsx)("div",{className:"left__box"}),Object(P.jsx)("div",{className:se.a.articles,children:e.map((function(e){return Object(P.jsx)(le,Object(d.a)({},e),e.id)}))})]})},me=c(254),de=c(255),be=c(28),ue=c.n(be),pe=function(){var e=n.a.useState(!0),t=Object(N.a)(e,2),c=t[0],a=t[1];return Object(P.jsxs)("div",{className:ue.a.commentsWrapper,children:[Object(P.jsxs)("div",{onClick:function(){a(!c)},className:c?ue.a.show:ue.a.hide,children:[Object(P.jsx)("span",{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"}),c?Object(P.jsx)(me.a,{className:ue.a.svgArrow}):Object(P.jsx)(de.a,{className:ue.a.svgArrow})]}),c&&Object(P.jsx)("div",{className:ue.a.commentsBlock})]})};var Oe=function(){return Object(P.jsxs)("div",{className:"App clear",children:[Object(P.jsx)(q,{}),Object(P.jsx)(pe,{}),Object(P.jsxs)(g.c,{children:[Object(P.jsx)(g.a,{path:"/React-blog/",element:Object(P.jsx)(je,{}),exact:!0}),Object(P.jsx)(g.a,{path:"/React-blog/post/:id",element:Object(P.jsx)(ne,{})})]})]})};s.a.render(Object(P.jsx)(n.a.StrictMode,{children:Object(P.jsx)(o.a,{children:Object(P.jsx)(i.a,{store:v,children:Object(P.jsx)(Oe,{})})})}),document.getElementById("root"))},26:function(e,t,c){e.exports={headerContainer:"Header_headerContainer__1CTMA",header:"Header_header__2Km9Y",logo:"Header_logo__24JAw",searchBox:"Header_searchBox__1FoOB",inputSearch:"Header_inputSearch__1aatR",newEntry:"Header_newEntry__XzLaj"}},27:function(e,t,c){e.exports={comment:"Comment_comment__368qL",commetnInfo:"Comment_commetnInfo__2XZwa",commentNikname:"Comment_commentNikname__1AeW-",commentDate:"Comment_commentDate__3WGg0"}},28:function(e,t,c){e.exports={commentsWrapper:"CommentsMainPage_commentsWrapper__2rZsa",show:"CommentsMainPage_show__1f95a",hide:"CommentsMainPage_hide__3sLWg",svgArrow:"CommentsMainPage_svgArrow__3YG_j",commentsBlock:"CommentsMainPage_commentsBlock__aq46-"}},31:function(e,t,c){e.exports={commentsWrapper:"Comments_commentsWrapper__CtrXT",commentsTopBox:"Comments_commentsTopBox__IMPqo",commentsCounter:"Comments_commentsCounter__32hhB",active:"Comments_active__2YiJj",commentInput:"Comments_commentInput__3v4Rv"}},32:function(e,t,c){e.exports={articleWrapper:"FullArticle_articleWrapper__4QfA6",title:"FullArticle_title__31Jnx",subTitle:"FullArticle_subTitle__2EQrl",text:"FullArticle_text__3XqAx"}},38:function(e,t,c){e.exports={postWrapper:"Post_postWrapper__3vaeO",title:"Post_title__2jayO"}},67:function(e,t,c){e.exports={articles:"MainPage_articles__1kGlG"}}},[[245,1,2]]]);
//# sourceMappingURL=main.dadce3f3.chunk.js.map