import{d as c,a6 as g,I as h,N as p,ac as y,a5 as w}from"./entry.5b08a96b.js";const C=c({name:"ContentSlot",functional:!0,props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(e){const{parent:u}=w(),{between:o,default:l}=g(),i=h(()=>typeof e.unwrap=="string"?e.unwrap.split(" "):["*"]);return{fallbackSlot:l,tags:i,between:o,parent:u}},render({use:e,unwrap:u,fallbackSlot:o,between:l,tags:i,parent:n}){var a;try{let r=e;if(typeof e=="string"&&(r=(n==null?void 0:n.slots[e])||((a=n==null?void 0:n.parent)==null?void 0:a.slots[e]),console.warn(`Please set :use="$slots.${e}" in <ContentSlot> component to enable reactivity`)),!r)return o?o():p("div");if(!u)return[r()];const{flatUnwrap:d}=y(),f=d(r(),i);return l?f.flatMap((t,s)=>s===0?[t]:[l(),t]):f.reduce((t,s)=>(typeof s.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=s.children:t.push(s.children):t.push(s),t),[])}catch{return p("div")}}});export{C as default};
