(function(t,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(t=typeof globalThis!="undefined"?globalThis:t||self,e(t.gvcl={},t.vue))})(this,function(t,e){"use strict";var r="";const c=e.defineComponent({name:"GButton",props:{loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},type:{type:String,default:"button"},color:{type:String,default:"primary"}},emits:{click:null},setup(i,{emit:o,slots:n}){const a="gugig-button",f=e.computed(()=>{let u="";return u+=i.loading?" gugig-button--loading":"",u+=i.disabled?" gugig-button--disabled":"",u+=" "+a+"__"+i.color,u}),g=e.getCurrentInstance(),l=e.h.bind(g);return()=>{var u,d;return l("button",{class:a+f.value,type:i.type,onClick:()=>o("click"),attrs:{type:i.type},on:{click:()=>o("click")}},[l("span",{class:a+"__content"},(u=n.default)==null?void 0:u.call(n)),i.loading?n.loader?(d=n.loader)==null?void 0:d.call(n):l("span",{class:a+"__loading"},"LOADING..."):null])}}});t.GButton=c,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});