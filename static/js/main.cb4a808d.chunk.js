(window["webpackJsonpreact-test"]=window["webpackJsonpreact-test"]||[]).push([[0],{24:function(t,e,n){t.exports=n(38)},29:function(t,e,n){},30:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(20),c=n.n(o),i=(n(29),n(12)),l=n(2),s=n(3),u=n(5),d=n(4),m=n(6),p=n(9),h=n(8),b=(n(30),function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).getStyle=function(){return{textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return r.a.createElement("div",null,r.a.createElement("p",{style:this.getStyle()},r.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ","",n,r.a.createElement("button",{className:"removeBtn",onClick:this.props.removeTodo.bind(this,e)},"x")))}}]),e}(a.Component)),f=function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return r.a.createElement(b,{key:e.id,todo:e,markComplete:t.props.markComplete,removeTodo:t.props.removeTodo})}))}}]),e}(a.Component),v=function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("header",{style:E},r.a.createElement("h1",null,"Todo List"),r.a.createElement(p.b,{to:"/"},"Home")," | ",r.a.createElement(p.b,{to:"/about"},"About")," | ",r.a.createElement(p.b,{to:"/trash"},"Trash"))}}]),e}(a.Component),E={textAlign:"center",background:"lightgray",color:"#fff",padding:"12px"},j=v,O=n(23),y=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={title:""},n.change=function(t){return n.setState(Object(O.a)({},t.target.name,t.target.value))},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex",margin:"5px"}},r.a.createElement("input",{type:"text",name:"title",placeholder:"add todo",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.change}),r.a.createElement("button",{type:"submit",className:"button-one"},"Add"))}}]),e}(a.Component),g=n(11),k=n.n(g);var T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"This is react testing it is a part of training"))},C=function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.trashes.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("p",null,e.title," ",r.a.createElement("button",{className:"returnBtn",onClick:t.props.returnTodo.bind(t,e)},"return")))}))}}]),e}(a.Component),x=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={todos:[{id:k.a.v4(),title:"Take out garbage",completed:!1},{id:k.a.v4(),title:"Dinner with wife",completed:!1},{id:k.a.v4(),title:"Meeting with boss",completed:!1}],trashes:[]},n.markComplete=function(t){n.setState({todos:n.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},n.removeTodo=function(t){var e=n.state.todos.find((function(e){return e.id===t}));n.setState({todos:n.state.todos.filter((function(t){return t.id!==e.id})),trashes:[].concat(Object(i.a)(n.state.trashes),[e])})},n.addTodo=function(t){if(t){var e={title:t,completed:!1,id:k.a.v4()};n.setState({todos:[].concat(Object(i.a)(n.state.todos),[e])})}},n.cleanTrash=function(){n.setState({trashes:[]})},n.returnTodo=function(t){n.setState({todos:[].concat(Object(i.a)(n.state.todos),[t]),trashes:n.state.trashes.filter((function(e){return e.id!==t.id}))}),console.log(t)},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement(p.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{addTodo:t.addTodo}),r.a.createElement(f,{todos:t.state.todos,markComplete:t.markComplete,removeTodo:t.removeTodo}))}}),r.a.createElement(h.a,{path:"/about",component:T}),r.a.createElement(h.a,{path:"/trash",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",margin:"5px"}},r.a.createElement("button",{className:"button-one",onClick:t.cleanTrash},"Clean")),r.a.createElement(C,{trashes:t.state.trashes,returnTodo:t.returnTodo}))}}))))}}]),e}(a.Component);c.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.cb4a808d.chunk.js.map