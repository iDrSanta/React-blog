(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{18:function(e,t,a){e.exports={headerContainer:"Header_headerContainer__1CTMA",header:"Header_header__2Km9Y",logo:"Header_logo__24JAw",searchBox:"Header_searchBox__1FoOB",inputSearch:"Header_inputSearch__1aatR",newEntry:"Header_newEntry__XzLaj"}},19:function(e,t,a){e.exports={articalFormWrapper:"CreateArticalForm_articalFormWrapper__gKv-I",articalForm:"CreateArticalForm_articalForm__2yBHl",inputForm:"CreateArticalForm_inputForm__2tJfF"}},20:function(e,t,a){e.exports={comment:"Comment_comment__368qL",commetnInfo:"Comment_commetnInfo__2XZwa",commentNikname:"Comment_commentNikname__1AeW-",commentDate:"Comment_commentDate__3WGg0"}},21:function(e,t,a){e.exports={commentsWrapper:"CommentsMainPage_commentsWrapper__2rZsa",show:"CommentsMainPage_show__1f95a",hide:"CommentsMainPage_hide__3sLWg",svgArrow:"CommentsMainPage_svgArrow__3YG_j",commentsBlock:"CommentsMainPage_commentsBlock__aq46-"}},24:function(e,t,a){e.exports={commentsWrapper:"Comments_commentsWrapper__CtrXT",commentsTopBox:"Comments_commentsTopBox__IMPqo",commentsCounter:"Comments_commentsCounter__32hhB",active:"Comments_active__2YiJj",commentInput:"Comments_commentInput__3v4Rv"}},25:function(e,t,a){e.exports={articleWrapper:"FullArticle_articleWrapper__4QfA6",title:"FullArticle_title__31Jnx",subTitle:"FullArticle_subTitle__2EQrl",text:"FullArticle_text__3XqAx"}},28:function(e,t,a){e.exports={postWrapper:"Post_postWrapper__3vaeO",title:"Post_title__2jayO"}},41:function(e,t,a){e.exports={mainPageWrapper:"MainPage_mainPageWrapper__3bLfE",articles:"MainPage_articles__1kGlG"}},69:function(e,t,a){},90:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(32),s=a.n(r),i=(a(63),a(9)),o=a(14),l=a(23),j=a(51),m=a(12),u=a(6),b={isLoaded:!1,items:[]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ARTICLES":return Object(u.a)(Object(u.a)({},e),{},{items:t.payload});case"ADD_ARTICLE":var a=e.items.length?e.items[e.items.length-1]+1:1;return Object(u.a)(Object(u.a)({},e),{},{items:[].concat(Object(m.a)(e.items),[Object(u.a)({id:a},t.payload)])});case"REMOVE_ARTICLE":return Object(u.a)(Object(u.a)({},e),{},{items:e.items.filter((function(e){return Number(e.id)!==Number(t.payload)}))});default:return e}},p={isLoaded:!1,items:[]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COMMENTS":return Object(u.a)(Object(u.a)({},e),{},{items:t.payload});case"ADD_COMMENTS":return Object(u.a)(Object(u.a)({},e),{},{items:[].concat(Object(m.a)(e.items),[t.payload])});case"REMOVE_COMMENT":return Object(u.a)(Object(u.a)({},e),{},{items:e.items.filter((function(e){return e.id!==t.payload}))});default:return e}},_=Object(l.b)({articles:d,comments:O}),x=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):l.c)(Object(l.a)(j.a)),h=Object(l.d)(_,x),f=(a(69),a(3)),v=a(7),g=a(55),C=a.n(g),N=a(18),E=a.n(N),y=a(8),T=a(19),w=a.n(T),M=a(13),A=a.n(M),F=a(16),k=a(17),S=a.n(k),W=function(e){return{type:"ADD_ARTICLE",payload:e}},R=function(e){return{type:"REMOVE_ARTICLE",payload:e}},I=a(1),P=function(e){var t=e.toggleVisibleModal,a=Object(i.b)(),c=n.a.useState({title:"",subTitle:"",image:"",text:""}),r=Object(v.a)(c,2),s=r[0],o=r[1],l=function(e){o(Object(u.a)(Object(u.a)({},s),{},Object(y.a)({},e.target.name,e.target.value)))};return Object(I.jsxs)("div",{className:w.a.articalFormWrapper,children:[Object(I.jsxs)("div",{className:w.a.articalForm,children:[Object(I.jsx)("h2",{children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}),Object(I.jsx)("input",{className:w.a.inputForm,onChange:l,value:s.title,type:"text",name:"title",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a..."}),Object(I.jsx)("h3",{children:"\u041f\u043e\u0434\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}),Object(I.jsx)("input",{className:w.a.inputForm,onChange:l,value:s.subTitle,type:"text",name:"subTitle",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a..."}),Object(I.jsx)("h3",{children:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),Object(I.jsx)("input",{className:w.a.inputForm,onChange:l,value:s.image,type:"text",name:"image",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL..."}),Object(I.jsx)("h3",{children:"\u0422\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u0442\u044c\u0438"}),Object(I.jsx)("textarea",{className:w.a.inputForm,onChange:l,value:s.text,type:"text",name:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."})]}),Object(I.jsx)("button",{onClick:function(){var e;a((e=s,function(){var t=Object(F.a)(A.a.mark((function t(a){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.post("https://618dc902fe09aa001744089a.mockapi.io/articles",e);case 2:a(W(e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())),t()},children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})]})},B=a(52),L=a.n(B),D=(a(90),function(e){var t=e.toggleVisibleModal,a=e.children;return Object(I.jsx)("div",{onClick:t,className:"modalWrapper",children:Object(I.jsxs)("div",{onClick:function(e){return e.stopPropagation()},className:"modalContent",children:[Object(I.jsx)(L.a,{onClick:t,sx:{color:"rgb(158, 158, 158)"}}),a]})})}),V=function(){var e=n.a.useState(!1),t=Object(v.a)(e,2),a=t[0],c=t[1],r=function(){c(!a)};return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{className:E.a.headerContainer,children:Object(I.jsxs)("header",{className:E.a.header,children:[Object(I.jsx)(o.b,{to:"/React-blog/",children:Object(I.jsx)("div",{className:E.a.logo,children:"RB"})}),Object(I.jsxs)("div",{className:E.a.searchBox,children:[Object(I.jsx)(C.a,{sx:{color:"rgb(122, 122, 122)"}}),Object(I.jsx)("input",{className:E.a.inputSearch,type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a"})]}),Object(I.jsx)("button",{onClick:r,className:E.a.newEntry,children:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c"})]})}),a&&Object(I.jsx)(D,{visibleModal:a,toggleVisibleModal:r,children:Object(I.jsx)(P,{toggleVisibleModal:r})})]})},X=(a(24),a(56),a(20),a(25)),H=a.n(X),J=function(){var e=Object(f.g)().id,t=Object(i.c)((function(t){return t.articles.items.find((function(t){return Number(t.id)===Number(e)}))}));console.log(t);var a=Object(i.b)();return n.a.useEffect((function(){a(function(){var e=Object(F.a)(A.a.mark((function e(t){var a,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://618dc902fe09aa001744089a.mockapi.io/comment");case 2:a=e.sent,c=a.data,t({type:"SET_COMMENTS",payload:c});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(I.jsx)(I.Fragment,{children:t?Object(I.jsx)("div",{children:Object(I.jsxs)("div",{className:H.a.articleWrapper,children:[Object(I.jsxs)("div",{className:"container",children:[Object(I.jsx)("div",{className:H.a.title,children:Object(I.jsx)("h1",{children:t.title})}),Object(I.jsx)("div",{className:H.a.subTitle,children:Object(I.jsx)("h4",{children:t.subTitle})})]}),Object(I.jsx)("img",{src:t.image,alt:"postImg"}),Object(I.jsxs)("div",{className:"container",children:[Object(I.jsx)("div",{className:H.a.text,children:t.text}),Object(I.jsx)("div",{className:H.a.buttonBox,children:Object(I.jsx)(o.b,{to:"/React-blog/",children:Object(I.jsx)("button",{children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})})})]})]})}):404})},q=a(102),G=a(103),U=a(21),Y=a.n(U),K=function(){var e=n.a.useState(!0),t=Object(v.a)(e,2),a=t[0],c=t[1];return Object(I.jsxs)("div",{className:Y.a.commentsWrapper,children:[Object(I.jsxs)("div",{onClick:function(){c(!a)},className:a?Y.a.show:Y.a.hide,children:[Object(I.jsx)("span",{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"}),a?Object(I.jsx)(q.a,{className:Y.a.svgArrow}):Object(I.jsx)(G.a,{className:Y.a.svgArrow})]}),a&&Object(I.jsx)("div",{className:Y.a.commentsBlock})]})},Q=a(41),Z=a.n(Q),z=a(28),$=a.n(z),ee=function(e){var t=e.id,a=e.title,c=e.subTitle,n=e.image,r=Object(i.b)(),s=function(e){console.log(e),r(function(e){return function(){var t=Object(F.a)(A.a.mark((function t(a){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.delete("https://618dc902fe09aa001744089a.mockapi.io/articles/".concat(e));case 2:a(R(e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(I.jsxs)("div",{className:$.a.postWrapper,children:[Object(I.jsx)(o.b,{to:"post/".concat(t),children:Object(I.jsx)("div",{className:$.a.title,children:Object(I.jsx)("h3",{children:a})})}),Object(I.jsx)("div",{className:$.a.subTitle,children:Object(I.jsx)("h3",{children:c})}),Object(I.jsx)("img",{src:n,alt:"postImg"}),Object(I.jsxs)("div",{className:$.a.buttonBox,children:[Object(I.jsx)(o.b,{to:"post/".concat(t),children:Object(I.jsx)("button",{children:"\u0427\u0438\u0442\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e"})}),Object(I.jsx)("button",{onClick:function(){return s(t)},style:{background:"#FFF4E2",border:"1px solid #fdeacb"},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})},te=function(){var e=Object(i.c)((function(e){return e.articles.items}));console.log(e);var t=Object(i.b)();return n.a.useEffect((function(){t(function(){var e=Object(F.a)(A.a.mark((function e(t){var a,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://618dc902fe09aa001744089a.mockapi.io/articles");case 2:a=e.sent,c=a.data,t({type:"SET_ARTICLES",payload:c});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(I.jsxs)("div",{className:Z.a.mainPageWrapper,children:[Object(I.jsx)("div",{className:"left__box"}),Object(I.jsx)("div",{className:Z.a.articles,children:e.reverse().map((function(e){return Object(I.jsx)(ee,Object(u.a)({},e),e.id)}))}),Object(I.jsx)(K,{})]})};var ae=function(){return Object(I.jsxs)("div",{className:"App clear",children:[Object(I.jsx)(V,{}),Object(I.jsxs)(f.c,{children:[Object(I.jsx)(f.a,{path:"/React-blog/",element:Object(I.jsx)(te,{}),exact:!0}),Object(I.jsx)(f.a,{path:"/React-blog/post/:id",element:Object(I.jsx)(J,{})})]})]})};s.a.render(Object(I.jsx)(n.a.StrictMode,{children:Object(I.jsx)(o.a,{children:Object(I.jsx)(i.a,{store:h,children:Object(I.jsx)(ae,{})})})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.86033725.chunk.js.map