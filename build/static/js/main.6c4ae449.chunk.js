(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(28),r=a.n(n),i=a(3),l=a.n(i),o=a(5),j=a(7),u=(a(60),a(1));function b(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"header",children:[Object(u.jsxs)("div",{className:"headerTitles",children:[Object(u.jsx)("span",{className:"headerTitleLg",children:"Experio"}),Object(u.jsx)("span",{className:"headerTitleSm",children:"An Experience Sharing Platform"})]}),Object(u.jsx)("img",{className:"headerImg",src:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",alt:""})]})})}var d=a(8);a(62);function h(e){var t=e.post;return Object(u.jsxs)("div",{className:"post",children:[t.photo&&Object(u.jsx)("img",{className:"postImg",src:"https://experio-backend-sahil-halgekar.onrender.com/images/"+t.photo}),Object(u.jsxs)("div",{className:"postInfo",children:[Object(u.jsx)("div",{className:"categoryBox",children:Object(u.jsx)("span",{className:"catBoxStyle",children:t.category})}),Object(u.jsx)(d.b,{to:"/post/".concat(t._id),className:"link",children:Object(u.jsx)("span",{className:"postTitle",children:t.title})}),Object(u.jsxs)("h3",{className:"cardAuthor",children:["Author: ",t.username]}),Object(u.jsx)("hr",{}),Object(u.jsx)("span",{className:"postDate",children:new Date(t.createdAt).toDateString()})]})]})}function p(e){var t=e.posts;return Object(u.jsx)("div",{className:"posts",children:t.map((function(e){return Object(u.jsx)(h,{post:e})}))})}a(71);var m=a(9),x=a.n(m),O=a(6);function g(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1],n=Object(O.f)().search;return Object(s.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://experio-backend-sahil-halgekar.onrender.com/api/posts"+n);case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsxs)("div",{className:"cat",children:[Object(u.jsx)("span",{className:"categoryheader",children:"Categories:"}),Object(u.jsx)(d.b,{to:"/?category=Education",className:"cats",children:Object(u.jsx)("b",{children:"Education"})}),Object(u.jsx)(d.b,{to:"/?category=Job",className:"cats",children:Object(u.jsx)("b",{children:"Job"})}),Object(u.jsx)(d.b,{to:"/?category=Travel",className:"cats",children:Object(u.jsx)("b",{children:"Travel"})}),Object(u.jsx)(d.b,{to:"/?category=Sports",className:"cats",children:Object(u.jsx)("b",{children:"Sports"})}),Object(u.jsx)(d.b,{to:"/?category=Entertainment",className:"cats",children:Object(u.jsx)("b",{children:"Entertainment"})}),Object(u.jsx)(d.b,{to:"/?category=Others",className:"cats",children:Object(u.jsx)("b",{children:"Others"})})]}),Object(u.jsx)("div",{className:"home",children:Object(u.jsx)(p,{posts:a})})]})}var f=a(21),v=a(137),N=a(136),k=function(e,t){switch(t.type){case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return e}},y={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},w=Object(s.createContext)(y),S=function(e){var t=e.children,a=Object(s.useReducer)(k,y),c=Object(j.a)(a,2),n=c[0],r=c[1];return Object(s.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n.user))}),[n.user]),Object(u.jsx)(w.Provider,{value:{user:n.user,isFetching:n.isFetching,error:n.error,dispatch:r},children:t})};a(90);function C(){var e=Object(s.useContext)(w),t=e.user,a=e.dispatch,c=Object(s.useRef)(),n=function(){c.current.classList.toggle("responsive_nav")};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"main-cont",children:[Object(u.jsxs)("div",{ref:c,className:"top",children:[Object(u.jsx)("div",{className:"topCenter",children:Object(u.jsxs)("ul",{className:"topList",children:[Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(d.b,{onClick:n,className:"link",to:"/",children:"HOME"})}),Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(d.b,{onClick:n,className:"link",to:"/aboutUs",children:"ABOUT"})}),Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(d.b,{onClick:n,className:"link",to:"/contact",children:"CONTACT"})}),Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(d.b,{onClick:n,className:"link",to:"/write",children:"WRITE"})}),Object(u.jsx)("li",{className:"topListItem",onClick:function(){a({type:"LOGOUT"})},children:t&&"LOGOUT"})]})}),Object(u.jsx)("div",{className:"topRight",children:t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v.a,{alt:null===t||void 0===t?void 0:t.username,style:{fontFamily:"monospace",color:"white",backgroundColor:"rgb(247, 67, 97)",marginRight:"15px"},children:null===t||void 0===t?void 0:t.username.charAt(0)}),Object(u.jsx)(N.a,{className:"userName",variant:"h5",style:{fontFamily:"monospace",color:"black",display:"flex",alignItems:"center",textAlign:"center",fontWeight:"bold",marginRight:"25px"},children:null===t||void 0===t?void 0:t.username})," "]}):Object(u.jsxs)("ul",{className:"topList",children:[Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(d.b,{onClick:n,className:"link",to:"/login",children:"LOGIN"})}),Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(d.b,{onClick:n,className:"link",to:"/register",children:"REGISTER"})})]})}),Object(u.jsx)("button",{className:"nav-btn nav-close-btn",onClick:n,children:Object(u.jsx)(f.c,{})})]}),Object(u.jsx)("button",{className:"nav-btn",onClick:n,children:Object(u.jsx)(f.a,{})})]})})}a(91),a(92);function I(){var e=Object(O.f)().pathname.split("/")[2],t=Object(s.useState)({}),a=Object(j.a)(t,2),c=a[0],n=a[1],r=Object(s.useContext)(w).user,i=Object(s.useState)(""),b=Object(j.a)(i,2),h=b[0],p=b[1],m=Object(s.useState)(""),g=Object(j.a)(m,2),f=g[0],v=g[1],N=Object(s.useState)(""),k=Object(j.a)(N,2),y=k[0],S=k[1],C=Object(s.useState)([]),I=Object(j.a)(C,2),E=I[0],T=I[1],F=Object(s.useState)(""),L=Object(j.a)(F,2),P=L[0],A=L[1],U=Object(s.useState)(0),D=Object(j.a)(U,2),_=D[0],R=D[1],G=Object(s.useState)(!1),B=Object(j.a)(G,2),M=B[0],H=B[1];Object(s.useEffect)((function(){(function(){var t=Object(o.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://experio-backend-sahil-halgekar.onrender.com/api/posts/"+e);case 2:a=t.sent,T(a.data.comments),R(a.data.like.length),n(a.data),v(a.data.title),S(a.data.desc),A(a.data.category),console.log(E),E.map((function(e){console.log(e.text,e.username)}));case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var q=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.delete("https://experio-backend-sahil-halgekar.onrender.com/api/posts/".concat(c._id),{data:{username:r.username}});case 3:window.location.replace("/"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.put("https://experio-backend-sahil-halgekar.onrender.com/api/posts/".concat(c._id),{username:r.username,title:f,desc:y});case 3:H(!1),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var t=Object(o.a)(l.a.mark((function t(){var a,s,n,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r||window.location.replace("/register"),a=0,t.next=4,x.a.get("https://experio-backend-sahil-halgekar.onrender.com/api/posts/"+e);case 4:s=t.sent,console.log(s.data),n=0;case 7:if(!(n<s.data.like.length)){t.next=14;break}if(r._id!==s.data.like[n].likedby){t.next=11;break}return a=1,t.abrupt("break",14);case 11:n++,t.next=7;break;case 14:if(0!=a){t.next=26;break}return t.prev=15,t.next=18,x.a.put("https://experio-backend-sahil-halgekar.onrender.com/api/posts/like/".concat(c._id),{likedby:r._id});case 18:return t.next=20,x.a.get("https://experio-backend-sahil-halgekar.onrender.com/api/posts/"+e);case 20:i=t.sent,R(i.data.like.length),t.next=26;break;case 24:t.prev=24,t.t0=t.catch(15);case 26:case"end":return t.stop()}}),t,null,[[15,24]])})));return function(){return t.apply(this,arguments)}}(),V=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.put("https://experio-backend-sahil-halgekar.onrender.com/api/posts/comment/".concat(c._id),{username:r.username,text:h});case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"singlePost",children:Object(u.jsxs)("div",{className:"singlePostWrapper",children:[c.photo&&Object(u.jsx)("img",{src:"https://experio-backend-sahil-halgekar.onrender.com/images/"+c.photo,alt:"",className:"singlePostImg"}),M?Object(u.jsx)("input",{type:"text",value:f,className:"singlePostTitleInput",autoFocus:!0,onChange:function(e){return v(e.target.value)}}):Object(u.jsxs)("h1",{className:"singlePostTitle",children:[f,c.username===(null===r||void 0===r?void 0:r.username)&&Object(u.jsxs)("div",{className:"singlePostEdit",children:[Object(u.jsx)("i",{className:"singlePostIcon far fa-edit",onClick:function(){return H(!0)}}),Object(u.jsx)("i",{className:"singlePostIcon far fa-trash-alt",onClick:q})]})]}),Object(u.jsxs)("div",{className:"singlePostInfo",children:[Object(u.jsxs)("span",{className:"singlePostAuthor",children:["Author:",Object(u.jsx)(d.b,{to:"/?user=".concat(c.username),className:"link",children:Object(u.jsxs)("b",{children:[" ",c.username]})})]}),Object(u.jsxs)("span",{className:"singlePostAuthor",children:["Category:",Object(u.jsx)(d.b,{to:"/?category=".concat(P),className:"link",children:Object(u.jsxs)("b",{children:[" ",P]})})]}),Object(u.jsx)("span",{className:"singlePostDate",children:new Date(c.createdAt).toDateString()})]}),M?Object(u.jsx)("textarea",{className:"singlePostDescInput",value:y,onChange:function(e){return S(e.target.value)}}):Object(u.jsx)("p",{className:"singlePostDesc",children:y}),!M&&Object(u.jsx)("button",{className:"likeButton",onClick:W,children:Object(u.jsx)("i",{className:"fa fa-heart like","aria-hidden":"true",children:Object(u.jsxs)("span",{className:"likes",children:[_," Likes"]})})}),!M&&r&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"cTitle",children:"Add a Comment"}),Object(u.jsx)("input",{className:"addComment",placeholder:"Add your comment",type:"text",onChange:function(e){return p(e.target.value)}}),Object(u.jsx)("button",{className:"commentbtn",onClick:V,children:"Post"})]}),!M&&Object(u.jsx)("p",{className:"cTitle",children:"Comments"}),!M&&E.map((function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"comments",children:Object(u.jsxs)("p",{className:"commentUser",children:[Object(u.jsx)("span",{className:"profileImg",children:e.username.charAt(0)}),e.username,Object(u.jsxs)("span",{className:"commentUser",children:[": ",e.text]})]})})})})),M&&Object(u.jsx)("button",{className:"singlePostButton",onClick:J,children:"Update"})]})})}function E(){return Object(u.jsx)("div",{className:"single",children:Object(u.jsx)(I,{})})}a(93);var T=a(53);a(94);function F(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(null),r=Object(j.a)(n,2),i=r[0],b=r[1],d=Object(s.useState)(""),h=Object(j.a)(d,2),p=h[0],m=h[1],O=Object(s.useContext)(w).user,g=[{value:1,label:"Education"},{value:2,label:"Job"},{value:3,label:"Sports"},{value:4,label:"Entertainment"},{value:5,label:"Travel"},{value:6,label:"Others"}],f=Object(s.useState)(g.label),v=Object(j.a)(f,2),N=v[0],k=v[1],y=function(){var e=Object(o.a)(l.a.mark((function e(t){var s,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),s={username:O.username,title:a,desc:p,category:N},!i){e.next=15;break}return c=new FormData,n=Date.now()+i.name,c.append("name",n),c.append("file",i),s.photo=n,e.prev=8,e.next=11,x.a.post("https://experio-backend-sahil-halgekar.onrender.com/api/upload",c);case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(8);case 15:return e.prev=15,e.next=18,x.a.post("https://experio-backend-sahil-halgekar.onrender.com/api/posts",s);case 18:e.sent,window.location.replace("/"),e.next=24;break;case 22:e.prev=22,e.t1=e.catch(15);case 24:case"end":return e.stop()}}),e,null,[[8,13],[15,22]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"write",children:[i&&Object(u.jsx)("img",{className:"writeImg",src:URL.createObjectURL(i),alt:""}),Object(u.jsxs)("form",{className:"writeForm",onSubmit:y,children:[Object(u.jsxs)("div",{className:"description",children:[Object(u.jsx)("label",{htmlFor:"fileInput",children:Object(u.jsx)("i",{className:"writeIcon fas fa-plus"})}),Object(u.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return b(e.target.files[0])},required:"true"}),Object(u.jsx)("input",{type:"text",placeholder:"Title",className:"writeInput",autoFocus:!0,onChange:function(e){return c(e.target.value)},required:"true"})]}),Object(u.jsx)(T.a,{placeholder:"Category",className:"Category",options:g,onChange:function(e){k(e.label)}}),Object(u.jsx)("div",{className:"editorContainer",children:Object(u.jsx)("textarea",{placeholder:"Write your Experience...",type:"text",className:"writeInputt writeText",onChange:function(e){return m(e.target.value)},required:"true"})})]}),Object(u.jsx)("button",{onClick:y,className:"writeSubmit",type:"submit",children:"Publish"})]})}a(117);function L(){var e=Object(s.useRef)(),t=Object(s.useRef)(),a=Object(s.useContext)(w),c=a.dispatch,n=a.isFetching,r=function(){var a=Object(o.a)(l.a.mark((function a(s){var n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s.preventDefault(),a.prev=1,a.next=4,x.a.post("https://experio-backend-sahil-halgekar.onrender.com/api/auth/login",{username:e.current.value,password:t.current.value});case 4:n=a.sent,c({type:"LOGIN_SUCCESS",payload:n.data}),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),c({type:"LOGIN_FAILURE"}),alert("Invalid Credentials..!!");case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"login",children:Object(u.jsxs)("div",{className:"headerTitles",children:[Object(u.jsx)("span",{className:"headerTitleLg",children:"Experio"}),Object(u.jsx)("span",{className:"headerTitleSm",children:"An Experience Sharing Platform"}),Object(u.jsxs)("div",{className:"login-glass",children:[Object(u.jsx)("span",{className:"loginTitle",children:"Login"}),Object(u.jsxs)("form",{className:"loginForm",children:[Object(u.jsx)("input",{type:"text",className:"loginInput1",placeholder:"Enter Username",ref:e}),Object(u.jsx)("input",{type:"password",className:"loginInput2",placeholder:"Enter Password",ref:t})]}),Object(u.jsx)("button",{onClick:r,className:"loginButton",type:"submit",disabled:n,children:"Login"})]})]})})}a(118);function P(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(j.a)(n,2),i=r[0],b=r[1],d=Object(s.useState)(""),h=Object(j.a)(d,2),p=h[0],m=h[1],O=Object(s.useContext)(w),g=O.dispatch,f=(O.isFetching,function(){var e=Object(o.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,x.a.post("https://experio-backend-sahil-halgekar.onrender.com/api/auth/register",{username:a,email:i,password:p});case 4:s=e.sent,g({type:"LOGIN_SUCCESS",payload:s.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert("Username and Email already exists..!!");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}());return Object(u.jsx)("div",{className:"register",children:Object(u.jsxs)("div",{className:"headerTitles",children:[Object(u.jsx)("span",{className:"headerTitleLg",children:"Experio"}),Object(u.jsx)("span",{className:"headerTitleSm",children:"An Experience Sharing Platform"}),Object(u.jsxs)("div",{className:"register-glass",children:[Object(u.jsx)("span",{className:"registerTitle",children:"Register"}),Object(u.jsxs)("form",{className:"registerForm",onSubmit:f,children:[Object(u.jsx)("input",{type:"text",className:"registerInput1",placeholder:"Enter Username",onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("input",{type:"text",className:"registerInput2",placeholder:"Enter Email",onChange:function(e){return b(e.target.value)}}),Object(u.jsx)("input",{type:"password",className:"registerInput3",placeholder:"Enter Password",onChange:function(e){return m(e.target.value)}})]}),Object(u.jsx)("button",{onClick:f,className:"registerButton",type:"submit",children:"Register"})]})]})})}a(119);function A(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"aboutUs",children:[Object(u.jsx)("h1",{children:"ABOUT US"}),Object(u.jsxs)("div",{className:"about-container",children:[Object(u.jsx)("img",{className:"about-image",src:"https://images.unsplash.com/photo-1562577308-c8b2614b9b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",alt:""}),Object(u.jsxs)("div",{className:"about-text",children:[Object(u.jsx)("p",{children:"We are a bunch of guys who try to solve real world problems with the help of Technology and try learning stuff by implementing it. This website is the product of that process! We enjoyed building this website and hope you enjoy using it."}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"Social Media Handles:  "}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[Object(u.jsxs)("a",{href:"https://www.instagram.com/sahil_3258",children:[Object(u.jsx)(f.b,{}),"Sahil Halgekar"]}),Object(u.jsx)("br",{})]}),Object(u.jsxs)("li",{children:[Object(u.jsxs)("a",{href:"https://www.instagram.com/navjeet.kohli02",children:[Object(u.jsx)(f.b,{}),"Navjeet Kohli"]}),Object(u.jsx)("br",{})]}),Object(u.jsxs)("li",{children:[Object(u.jsxs)("a",{href:"https://www.instagram.com/rahul_patil_33_",children:[Object(u.jsx)(f.b,{}),"Rahul Patil"]}),Object(u.jsx)("br",{})]}),Object(u.jsx)("li",{children:Object(u.jsxs)("a",{href:"https://www.instagram.com/prav_752",children:[Object(u.jsx)(f.b,{}),"Praveen Jugal"]})})]})]})]})]})})}a(120);var U=function(){var e=Object(s.useState)("Submit"),t=Object(j.a)(e,2),a=t[0],c=t[1],n=function(){var e=Object(o.a)(l.a.mark((function e(t){var a,s,n,r,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c("Sending..."),a=t.target.elements,s=a.name,n=a.email,r=a.message,i={name:s.value,email:n.value,message:r.value},e.next=6,x.a.post("/contact",i);case 6:o=e.sent,console.log(o),c("Submit"),"Message Sent"===o.data.status&&alert("Message delivered");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("form",{className:"contactForm",onSubmit:n,children:Object(u.jsxs)("div",{className:"contactForm",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"labels",htmlFor:"name",children:"Name"}),Object(u.jsx)("input",{placeholder:"Name",className:"input",type:"text",id:"name",required:!0})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"labels",htmlFor:"email",children:"Email"}),Object(u.jsx)("input",{placeholder:"Email",className:"input",type:"email",id:"email",required:!0})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"labels",htmlFor:"message",children:"Message"}),Object(u.jsx)("textarea",{placeholder:"Type your message here",id:"message",required:!0})]}),Object(u.jsx)("button",{className:"contactbtn1",type:"submit",children:a})]})})};a(121);var D=function(){var e=Object(s.useContext)(w).user;return Object(u.jsxs)(d.a,{children:[Object(u.jsx)(C,{}),Object(u.jsxs)(O.c,{children:[Object(u.jsx)(O.a,{exact:!0,path:"/",children:Object(u.jsx)(g,{})}),Object(u.jsx)(O.a,{path:"/register",children:e?Object(u.jsx)(g,{}):Object(u.jsx)(P,{})}),Object(u.jsx)(O.a,{path:"/login",children:e?Object(u.jsx)(g,{}):Object(u.jsx)(L,{})}),Object(u.jsx)(O.a,{path:"/write",children:e?Object(u.jsx)(F,{}):Object(u.jsx)(P,{})}),Object(u.jsx)(O.a,{path:"/aboutUs",children:Object(u.jsx)(A,{})}),Object(u.jsx)(O.a,{path:"/contact",children:e?Object(u.jsx)(U,{}):Object(u.jsx)(P,{})}),Object(u.jsx)(O.a,{path:"/post/:postId",children:Object(u.jsx)(E,{})})]})]})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(S,{children:Object(u.jsx)(D,{})})}),document.getElementById("root"))},60:function(e,t,a){},62:function(e,t,a){},71:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){}},[[122,1,2]]]);
//# sourceMappingURL=main.6c4ae449.chunk.js.map