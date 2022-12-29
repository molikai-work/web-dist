import{e,ag as g,a6 as y,o,V as l,bf as I,bc as P,aA as _,bw as O,bI as T,r as h,bJ as L,ac as k,a4 as x,B as m,a8 as S,t as j,a9 as A,bK as b,k as d,$ as f,bL as D,bM as $,E as a,G as s,bG as V,bN as R,d as M,bu as C,N as F,P as z,aa as B}from"./index.56603356.js";import{u as v}from"./useT.303c7e81.js";import{a as w,b as W}from"./useUtil.5bcfb431.js";import{g as G,O as u}from"./icon.a3e866e2.js";import{R as H}from"./index.f1ab4103.js";const N=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(g,{get color(){return y()},boxSize:"$20",get as(){return G(o.obj)}}),e(l,{spacing:"$2",get children(){return[e(I,{size:"lg",css:{wordBreak:"break-all"},get children(){return o.obj.name}}),e(P,{color:"$neutral10",size:"sm",get children(){return[_(()=>O(o.obj.size))," \xB7 ",_(()=>T(o.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),E=()=>{const r=v(),n=h(()=>L(o.obj.name)),{currentObjLink:i}=w();return e(d,{get when(){return n().length},get children(){return e(k,{get children(){return[e(x,{as:m,colorScheme:"success",get rightIcon(){return e(g,{as:H})},get children(){return r("home.preview.open_with")}}),e(S,{get children(){return e(j,{get each(){return n()},children:t=>e(A,{as:"a",target:"_blank",get href(){return b(t.value,{raw_url:o.raw_url,name:o.obj.name,d_url:i(!0)})},get children(){return t.key}})})}})]}})}})},p=r=>{const n=v(),{copyCurrentRawLink:i}=W();return e(N,{get children(){return[e(f,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>i(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return o.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(d,{get when(){return r.openWith},get children(){return e(E,{})}})]}})},U=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),X=r=>{const{currentObjLink:n}=w();return e($,{w:"$full",h:"70vh",get children(){return e(D.iframe,{w:"$full",h:"$full",get src(){return b(r.scheme,{raw_url:o.raw_url,name:o.obj.name,d_url:n(!0)})}})}})},J=r=>()=>e(X,{scheme:r}),K=[{name:"Markdown",type:u.TEXT,component:a(()=>s(()=>import("./markdown.5632ef15.js"),["assets/markdown.5632ef15.js","assets/index.56603356.js","assets/index.659f4289.css","assets/useUtil.5bcfb431.js","assets/api.60f8b30e.js","assets/useT.303c7e81.js","assets/Markdown.be61f06a.js"]))},{name:"Text Editor",type:u.TEXT,component:a(()=>s(()=>import("./text-editor.265c99f5.js"),["assets/text-editor.265c99f5.js","assets/index.56603356.js","assets/index.659f4289.css","assets/useT.303c7e81.js","assets/useUtil.5bcfb431.js","assets/api.60f8b30e.js"]))},{name:"HTML render",exts:["html"],component:a(()=>s(()=>import("./html.85227934.js"),["assets/html.85227934.js","assets/index.56603356.js","assets/index.659f4289.css","assets/useUtil.5bcfb431.js","assets/api.60f8b30e.js","assets/useT.303c7e81.js"]))},{name:"Image",type:u.IMAGE,component:a(()=>s(()=>import("./image.e411e0ba.js"),["assets/image.e411e0ba.js","assets/index.56603356.js","assets/index.659f4289.css","assets/useT.303c7e81.js","assets/ImageWithError.464bda55.js"]))},{name:"Video",type:u.VIDEO,component:a(()=>s(()=>import("./video.3a708717.js"),["assets/video.3a708717.js","assets/index.56603356.js","assets/index.659f4289.css","assets/useUtil.5bcfb431.js","assets/api.60f8b30e.js","assets/useT.303c7e81.js","assets/icon.a3e866e2.js","assets/index.f1ab4103.js"]))},{name:"Audio",type:u.AUDIO,component:a(()=>s(()=>import("./audio.4f8b13a1.js"),["assets/audio.4f8b13a1.js","assets/audio.e5b5af14.css","assets/index.56603356.js","assets/index.659f4289.css","assets/useUtil.5bcfb431.js","assets/api.60f8b30e.js","assets/useT.303c7e81.js","assets/icon.a3e866e2.js","assets/index.f1ab4103.js"]))},{name:"Ipa",exts:["ipa"],component:a(()=>s(()=>import("./ipa.29aeb390.js"),["assets/ipa.29aeb390.js","assets/index.56603356.js","assets/index.659f4289.css","assets/useT.303c7e81.js","assets/useUtil.5bcfb431.js","assets/api.60f8b30e.js","assets/icon.a3e866e2.js","assets/index.f1ab4103.js"]))},{name:"Plist",exts:["plist"],component:a(()=>s(()=>import("./plist.7a20d446.js"),["assets/plist.7a20d446.js","assets/index.56603356.js","assets/index.659f4289.css","assets/useT.303c7e81.js","assets/useUtil.5bcfb431.js","assets/api.60f8b30e.js","assets/icon.a3e866e2.js","assets/index.f1ab4103.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/Aliyundrive/,component:a(()=>s(()=>import("./aliyun_office.1f1de36e.js"),["assets/aliyun_office.1f1de36e.js","assets/index.56603356.js","assets/index.659f4289.css"]))}],q=r=>{const n=[];return K.forEach(t=>{var c;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((c=t.exts)==null?void 0:c.includes(V(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),R(r.name).forEach(t=>{n.push({name:t.key,component:J(t.value)})}),n.push({name:"Download",component:a(()=>s(()=>Promise.resolve().then(()=>U),void 0))}),n},Q=()=>{const r=h(()=>q({...o.obj,provider:o.provider})),[n,i]=M(r()[0]);return e(d,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(f,{w:"$full",spacing:"$2",get children(){return[e(C,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{i(r().find(c=>c.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(E,{})]}}),e(F,{get fallback(){return e(z,{})},get children(){return e(B,{get component(){return n().component}})}})]}})}})},ne=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));export{N as F,ne as a};
