(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var i=n(3),a=n.n(i),s=n(1),l=n.n(s),c=(n(8),n(9),n(0));function r(e){const t=e.substring(e.lastIndexOf("/")+1);return t.substring(0,t.length-4)}var o=e=>{let{images:t,itemWidth:n,frameSize:i,step:a,animationDuration:l,infinite:o}=e;const[m,h]=Object(s.useState)(0),d=m*n,u=n*t.length,p=n*i,b=t.length-i,g=p;p+d>u&&h((e=>e-1));const j=m>=b&&!o,x=m<=0&&!o;return Object(c.jsxs)("div",{className:"Carousel",style:{width:g,transition:"width ".concat(l,"ms")},children:[Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("ul",{className:"Carousel__list",style:{width:u,transform:"translate(".concat(-d,"px)"),transition:"transform ".concat(l,"ms")},children:t.map((e=>Object(c.jsx)("li",{className:"Carousel__item",children:Object(c.jsx)("img",{src:e,width:n,height:n,alt:r(e),className:"Carousel__image"})},+Math.random().toFixed(12).slice(2))))})}),Object(c.jsxs)("div",{className:"Carousel__buttons",children:[Object(c.jsx)("button",{type:"button",className:"btn",onClick:()=>{h((e=>{let t=e;for(let n=0;n<a;n+=1){if(o&&0===t&&0===n){t=b;break}t>0&&(t-=1)}return t}))},disabled:x,children:" < "}),Object(c.jsx)("button",{type:"button","data-cy":"next",className:"btn",onClick:()=>{h((e=>{let t=e;for(let n=0;n<a;n+=1){if(o&&t===b&&0===n){t=0;break}t<b&&(t+=1)}return t}))},disabled:j,children:" > "})]})]})};const m=130,h=3,d=3,u=1e3,p=!1;class b extends l.a.Component{constructor(){super(...arguments),this.state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:d,frameSize:h,itemWidth:m,animationDuration:u,infinite:p},this.handleChange=e=>{const t=e.target.name;this.setState({[t]:+e.target.value})}}render(){const{images:e,step:t,frameSize:n,itemWidth:i,animationDuration:a,infinite:s}=this.state;return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",e.length," images"]}),Object(c.jsxs)("form",{method:"POST",action:"#",className:"control-panel",children:[Object(c.jsxs)("label",{htmlFor:"itemId",className:"control-panel__line-block",children:["Item Width:",Object(c.jsx)("input",{id:"itemId",name:"itemWidth",min:"50",step:"10",className:"control-panel__input",value:i,onChange:this.handleChange,type:"number"})]}),Object(c.jsxs)("label",{htmlFor:"frameId",className:"control-panel__line-block",children:["Frame Size:",Object(c.jsx)("input",{id:"frameId",name:"frameSize",min:"1",max:e.length,className:"control-panel__input",value:n,onChange:this.handleChange,type:"number"})]}),Object(c.jsxs)("label",{htmlFor:"stepId",className:"control-panel__line-block",children:["Step:",Object(c.jsx)("input",{id:"stepId",name:"step",min:"1",className:"control-panel__input",value:t,onChange:this.handleChange,type:"number"})]}),Object(c.jsxs)("label",{htmlFor:"animationDuration",className:"control-panel__line-block",children:["Animation Duration:",Object(c.jsx)("input",{id:"animationDuration",name:"animationDuration",min:"100",step:"100",className:"control-panel__input",value:a,onChange:this.handleChange,type:"number"})]}),Object(c.jsxs)("label",{htmlFor:"infinite",children:["* infinite",Object(c.jsx)("input",{id:"infinite",name:"infinite",checked:s,onChange:()=>this.setState({infinite:!s}),type:"checkbox"})]})]}),Object(c.jsx)(o,{images:e,step:t,frameSize:n,itemWidth:i,animationDuration:a,infinite:s})]})}}var g=b;a.a.render(Object(c.jsx)(g,{}),document.getElementById("root"))},8:function(e,t,n){},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.d072c5fa.chunk.js.map