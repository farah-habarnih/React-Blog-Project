(this["webpackJsonpblog-app"]=this["webpackJsonpblog-app"]||[]).push([[0],{24:function(e,t,s){},25:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),n=s(16),l=s.n(n),c=(s(24),s(2)),r=s(3),o=(s(25),s(0));function u(){return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("img",{src:"./header-arrow1.jpg",alt:""}),Object(o.jsxs)("div",{className:"header-title",children:[Object(o.jsx)("h1",{children:"STARTUPZA  "}),Object(o.jsx)("h1",{children:" The Home for Entrepreneur"}),Object(o.jsx)("h1",{children:" Let's Started  "}),Object(o.jsxs)("div",{className:"header-btn",children:[Object(o.jsxs)("button",{className:"btn-login",children:[" ",Object(o.jsxs)("span",{children:[" ",Object(o.jsx)(r.b,{to:"/Login",children:"Log In"})]})]}),Object(o.jsxs)("button",{className:"btn",children:[" ",Object(o.jsxs)("span",{children:[" ",Object(o.jsx)(r.b,{to:"/Signup",children:"Sign Up "})]})]})]})]})]})}s(35);function d(){return Object(o.jsxs)("div",{className:"nav-bar",children:[Object(o.jsx)("div",{className:"nav-left",children:Object(o.jsx)("img",{src:"./logo.png",alt:""})}),Object(o.jsx)("div",{className:"nav-center",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/Home",children:" HOME"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/Posts",children:"POSTS"})})]})}),Object(o.jsx)("div",{className:"nav-right",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.instagram.com/eng_farah92/?r=nametag",children:Object(o.jsx)("i",{class:"fa fa-instagram"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://github.com/farah-habarnih",children:Object(o.jsx)("i",{class:"fa fa-github"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/farah-habarnih/",children:Object(o.jsx)("i",{class:"fa fa-linkedin"})})})]})})]})}var j=s(11),m=s(6),b=s(7),h=s(9),p=s(8),x=(s(36),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){var e;return Object(m.a)(this,s),(e=t.call(this)).handleChange=function(t,s){e.setState(Object(j.a)({},s,t.target.value))},e.handleSubmit=function(t){t.preventDefault();for(var s=0;s<localStorage.length;s++){var a=JSON.parse(localStorage.getItem(localStorage.key(s)));a.Password===e.state.Password&&a.Email===e.state.Email?(sessionStorage.setItem(a.Email,localStorage.getItem(localStorage.key(s))),e.setState({Login:1}),e.setState({error:""})):e.setState({error:"true"})}t.target.reset()},e.state={Email:"",Password:"",Login:0,error:""},e}return Object(b.a)(s,[{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{}),Object(o.jsxs)("div",{className:"login",children:[Object(o.jsx)("span",{className:"loginTitle",children:"Login"}),Object(o.jsxs)("form",{className:"loginForm",onSubmit:this.handleSubmit,children:[Object(o.jsx)("label",{children:"Email"}),Object(o.jsx)("input",{className:"loginInput",type:"text",placeholder:"Enter your email...",onChange:function(t){e.handleChange(t,"Email")}}),Object(o.jsx)("label",{children:"Password"}),Object(o.jsx)("input",{className:"loginInput",type:"password",onChange:function(t){e.handleChange(t,"Password")},placeholder:"Enter your password..."}),Object(o.jsx)("br",{}),this.state.error?Object(o.jsx)("p",{style:{color:"red"},children:"Email or Password is incorrect"}):"",Object(o.jsx)("button",{className:"loginButton",children:"Login"})]}),1==this.state.Login?Object(o.jsx)("div",{children:Object(o.jsx)("h1",{style:{color:"black"},children:" Welcome"})}):"",1==this.state.Login?Object(o.jsx)("button",{style:{backgroundColor:"#F34F83",position:"absolute",top:"700px",left:"700px",width:"120px",height:"50px",borderRadius:"5px",border:"none",fontSize:"1rem"},children:Object(o.jsx)(r.b,{to:"./Posts",children:"Go To Posts"})}):"",Object(o.jsx)("br",{})]})]})}}]),s}(i.a.Component)),O=s(19),g=(s(37),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){var e;return Object(m.a)(this,s),(e=t.call(this)).handleAdd=function(t){t.preventDefault(),e.setState({addpost:1})},e.handleSubmit=function(t){t.preventDefault();var s={title:t.target.title.value,text:t.target.text.value,img:t.target.url.value};e.setState({allpost:[].concat(Object(O.a)(e.state.allpost),[s])}),e.setState({poster:1}),e.setState({newtitle:t.target.title.value}),e.setState({newurl:t.target.url.value}),e.setState({addpost:0})},e.state={allpost:[{title:"Business Model",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel massa arcu. Ut tellus velit, condimentum vel lacus sed, mattis ultrices mauris. Curabitur facilisis justo sed massa lobortis, eget pulvinar arcu dictum. Aliquam porta mollis nisl, a commodo ante lobortis in. Nulla facilisi. Nulla eget nisi massa. Aliquam auctor blandit nibh id sagittis. Integer commodo molestie ante, ut tristique justo dignissim et. Nam id eros vitae leo ornare scelerisque at id purus",img:"https://images.squarespace-cdn.com/content/v1/57ff482fd2b857f1d9b06442/1555576467680-9CRVYODL45HSJSATHBH6/Business+Model+Testing+Cycle.png?format=1000w"},{title:"Business Model",text:"Ut ac mauris vel magna elementum sodales. Vestibulum facilisis blandit libero, vel imperdiet sem venenatis nec. Fusce consectetur, sapien in aliquet mattis, metus lectus sodales tellus, in lacinia metus ipsum eget eros. Cras magna magna, eleifend ac tortor a, ultricies cursus augue. Phasellus sit amet elit vel ipsum tempor eleifend vitae non massa. Donec in turpis turpis. Aliquam bibendum sem id quam porta, nec condimentum dolor ultrices. Morbi lobortis, lacus a aliquam pretium, nisl urna porttitor nisl, ac ultricies dolor massa non felis.",img:"https://images.squarespace-cdn.com/content/v1/57ff482fd2b857f1d9b06442/1555576467680-9CRVYODL45HSJSATHBH6/Business+Model+Testing+Cycle.png?format=1000w"},{title:"Business Model",text:"Nam gravida libero ante, non placerat lectus ornare nec. Aenean vel convallis risus. Curabitur quis porttitor sem. Aliquam pulvinar ornare dignissim. Vivamus ac lorem et neque convallis aliquet. Fusce non felis quam. Fusce vehicula velit ultrices, hendrerit augue at, tempus justo. Praesent ultrices quis nisl in facilisis. Donec blandit vehicula porta.",img:"https://images.squarespace-cdn.com/content/v1/57ff482fd2b857f1d9b06442/1555576467680-9CRVYODL45HSJSATHBH6/Business+Model+Testing+Cycle.png?format=1000w"},{title:"Business Model",text:"Mauris vel diam quis tellus pharetra maximus sit amet at magna. Pellentesque rutrum rhoncus feugiat. Sed lectus magna, auctor ac purus id, vestibulum suscipit leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed quis gravida dui. Aliquam ultrices libero id ligula placerat consectetur. Proin nec ante eget dui iaculis suscipit. Vivamus feugiat mauris ipsum, sit amet porttitor arcu vestibulum quis. Ut venenatis nulla eget erat imperdiet, a porttitor arcu pretium. In fermentum, orci et pulvinar pellentesque, magna nulla mollis ipsum, vel feugiat enim ipsum a nisi. Nulla quis diam efficitur, facilisis velit sit amet, vestibulum ante. In hac habitasse platea dictumst. Donec sollicitudin rhoncus ultrices. Ut lobortis ligula a venenatis elementum.",img:"https://images.squarespace-cdn.com/content/v1/57ff482fd2b857f1d9b06442/1555576467680-9CRVYODL45HSJSATHBH6/Business+Model+Testing+Cycle.png?format=1000w"},{title:"Business Model",text:"Maecenas bibendum ipsum eget lectus ultrices ultrices. Pellentesque ut facilisis tellus, quis viverra sem. Etiam augue nisi, sagittis euismod porta ac, dignissim non quam. Cras euismod lorem a quam dignissim ullamcorper. Ut laoreet nisl nec lorem venenatis dapibus. Sed pharetra tortor semper rhoncus suscipit. Etiam ornare at purus vitae ullamcorper. Phasellus fermentum enim nisl, ut malesuada elit viverra id. Praesent commodo lectus sed fermentum faucibus.",img:"https://images.squarespace-cdn.com/content/v1/57ff482fd2b857f1d9b06442/1555576467680-9CRVYODL45HSJSATHBH6/Business+Model+Testing+Cycle.png?format=1000w"}],addpost:0,poster:0,newtitle:"",newurl:""},e}return Object(b.a)(s,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"all-card",children:[Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:this.state.allpost[0].img}),Object(o.jsx)("h2",{children:this.state.allpost[0].title}),Object(o.jsx)("button",{children:Object(o.jsx)(r.b,{to:"/Single-post",children:"Read More"})})]}),Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:this.state.allpost[1].img}),Object(o.jsx)("h2",{children:this.state.allpost[1].title}),Object(o.jsx)("button",{children:"Read More"})]}),Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:this.state.allpost[2].img}),Object(o.jsx)("h2",{children:this.state.allpost[2].title}),Object(o.jsx)("button",{children:"Read More"})]}),Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:this.state.allpost[3].img}),Object(o.jsx)("h2",{children:this.state.allpost[3].title}),Object(o.jsx)("button",{children:"Read More"})]}),Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:this.state.allpost[4].img}),Object(o.jsx)("h2",{children:this.state.allpost[4].title}),Object(o.jsx)("button",{children:"Read More"})]}),1==this.state.poster?Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:this.state.newurl,alt:""}),Object(o.jsx)("h2",{children:this.state.newtitle}),Object(o.jsx)("button",{children:"Read More"})]}):"",Object(o.jsx)("div",{className:"card",children:Object(o.jsx)("button",{onClick:this.handleAdd,children:"Add New Post"})}),1==this.state.addpost?Object(o.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(o.jsx)("label",{children:"Title"}),Object(o.jsx)("input",{type:"text",placeholder:"Enter the title..",name:"title"}),Object(o.jsx)("label",{children:"Text "}),Object(o.jsx)("input",{type:"text",placeholder:"Enter your text..",name:"text"}),Object(o.jsx)("label",{children:"URL "}),Object(o.jsx)("input",{type:"url",placeholder:"Enter the image url..",name:"url"}),Object(o.jsx)("button",{type:"submit",children:"Add"})]}):""]})}}]),s}(i.a.Component));s(38);var f=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{}),Object(o.jsx)(u,{}),Object(o.jsx)(g,{})]})},v=(s(39),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){var e;return Object(m.a)(this,s),(e=t.call(this)).handleChange=function(t,s){e.setState(Object(j.a)({},s,t.target.value))},e.handleSubmit=function(t){if(t.preventDefault(),e.state.password.length>=8){var s={name:t.target.UserName.value,Email:t.target.Email.value,Password:t.target.password.value,Signup:1};e.setState({Signup:1}),localStorage.setItem(e.state.Email,JSON.stringify(s))}t.target.reset()},e.state={Signup:0,Email:"",password:"",UserName:""},e}return Object(b.a)(s,[{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{}),Object(o.jsxs)("div",{className:"formSignup",children:[Object(o.jsx)("h1",{className:"SignupTitle",children:"Sign Up "}),Object(o.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(o.jsx)("label",{children:"Username"}),Object(o.jsx)("input",{type:"name",placeholder:"Enter your Username..",name:"UserName",onChange:function(t){e.handleChange(t,"UserName")}}),Object(o.jsx)("label",{children:"Email"}),Object(o.jsx)("input",{type:"email",placeholder:"Enter your Email..",name:"Email",onChange:function(t){e.handleChange(t,"Email")}}),Object(o.jsx)("label",{children:"Password"}),Object(o.jsx)("input",{type:"password",placeholder:"Enter your Password..",name:"password",onChange:function(t){e.handleChange(t,"password")}}),this.state.password.length<8?Object(o.jsx)("p",{style:{color:"#F34F83"},children:"Password should be at least 8 characters"}):"",Object(o.jsx)("br",{}),Object(o.jsx)("button",{type:"submit",children:"Signup"})]}),1==this.state.Signup?Object(o.jsx)("button",{style:{backgroundColor:"#F34F83",position:"absolute",top:"700px",left:"700px",width:"120px",height:"50px",border:"none",fontSize:"1.5rem"},children:Object(o.jsx)(r.b,{to:"./Login",children:"Login"})}):"",Object(o.jsx)("br",{})]})]})}}]),s}(i.a.Component));var S=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{}),Object(o.jsx)(g,{})]})},w=(s(40),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(e){var a;return Object(m.a)(this,s),(a=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),a.setState({comment:e.target.text.value}),a.setState({name:e.target.name.value}),e.target.reset()},a.handleClick=function(){a.setState({Like:a.state.Like+1})},a.state={Like:0,comment:"",name:""},a}return Object(b.a)(s,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{}),Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("h2",{children:"Business Model"}),Object(o.jsx)("img",{src:"https://images.squarespace-cdn.com/content/v1/57ff482fd2b857f1d9b06442/1555576467680-9CRVYODL45HSJSATHBH6/Business+Model+Testing+Cycle.png?format=1000w"}),Object(o.jsxs)("h3",{children:[this.state.Like," Likes "]}),Object(o.jsx)("button",{onClick:this.handleClick,children:Object(o.jsx)("i",{class:"fa fa-thumbs-up","aria-hidden":"true"})}),Object(o.jsx)("p",{children:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel massa arcu. Ut tellus velit, condimentum vel lacus sed, mattis ultrices mauris. Curabitur facilisis justo sed massa lobortis, eget pulvinar arcu dictum. Aliquam porta mollis nisl, a commodo ante lobortis in. Nulla facilisi. Nulla eget nisi massa. Aliquam auctor blandit nibh id sagittis. Integer commodo molestie ante, ut tristique justo dignissim et. Nam id eros vitae leo ornare scelerisque at id purus"}),Object(o.jsx)("h2",{children:" Comments"}),this.state.name?Object(o.jsx)("span",{children:this.state.name}):"",this.state.comment?Object(o.jsx)("span",{children:this.state.comment}):"",Object(o.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(o.jsx)("label",{children:"Name"}),Object(o.jsx)("input",{type:"text",placeholder:"Enter your Name..",name:"name"}),Object(o.jsx)("label",{children:"Text "}),Object(o.jsx)("input",{type:"text",placeholder:"Enter your comment..",name:"text"}),Object(o.jsx)("button",{type:"submit",children:"Add comment"})]})]})]})}}]),s}(i.a.Component));var N=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("main",{children:Object(o.jsxs)(c.c,{children:[Object(o.jsx)(c.a,{path:"/Home",children:Object(o.jsx)(f,{})}),Object(o.jsxs)(c.a,{path:"/",exact:!0,children:[Object(o.jsx)(d,{}),Object(o.jsx)(u,{}),Object(o.jsx)(g,{})]}),Object(o.jsx)(c.a,{path:"/Login",children:Object(o.jsx)(x,{})}),Object(o.jsx)(c.a,{path:"/Signup",children:Object(o.jsx)(v,{})}),Object(o.jsx)(c.a,{path:"/Posts",children:Object(o.jsx)(S,{})}),Object(o.jsx)(c.a,{path:"/Single-post",children:Object(o.jsx)(w,{})})]})})})};l.a.render(Object(o.jsx)(r.a,{children:Object(o.jsx)(N,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.efb3d27b.chunk.js.map