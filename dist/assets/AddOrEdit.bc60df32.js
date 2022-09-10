import{a as I,h as t,bn as M,$ as V,aC as z,a0 as o,I as b,bz as H,T as J,bp as P,dx as W,S as w,F as K,bA as Q,b as U,aW as v,b9 as f,m as X,ck as T,k as Y,bP as Z,a4 as p,dy as ee,dc as te,dd as ne,az as re,G as x,E as O,C as ae,n as _,O as ie,ba as y,a8 as de}from"./index.131ba458.js";import{T as d}from"./item_type.ee87ae79.js";import{R as ue}from"./ResponsiveGrid.209a6716.js";const $=e=>{const u=I();return t(Q,{w:"$full",display:"flex",flexDirection:"column",get required(){return e.required},get children(){return[t(M,{get for(){return e.name},display:"flex",alignItems:"center",get children(){var i;return u(((i=e.full_name_path)!=null?i:e.driver==="common")?`storages.common.${e.name}`:`drivers.${e.driver}.${e.name}`)}}),t(V,{get fallback(){return t(z,{get children(){return u("settings.unknown_type")}})},get children(){return[t(o,{get when(){return e.type===d.String},get children(){return t(b,{get id(){return e.name},get type(){return e.name=="password"?"password":"text"},get readOnly(){return e.readonly},get value(){return e.value},get onChange(){return e.type===d.String?i=>{var r;return(r=e.onChange)==null?void 0:r.call(e,i.currentTarget.value)}:void 0}})}}),t(o,{get when(){return e.type===d.Number},get children(){return t(b,{type:"number",get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===d.Number?i=>{var r;return(r=e.onChange)==null?void 0:r.call(e,parseInt(i.currentTarget.value))}:void 0}})}}),t(o,{get when(){return e.type===d.Float},get children(){return t(b,{type:"number",get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===d.Float?i=>{var r;return(r=e.onChange)==null?void 0:r.call(e,parseFloat(i.currentTarget.value))}:void 0}})}}),t(o,{get when(){return e.type===d.Bool},get children(){return t(H,{get id(){return e.name},get readOnly(){return e.readonly},get defaultChecked(){return e.value},get onChange(){return e.type===d.Bool?i=>{var r;return(r=e.onChange)==null?void 0:r.call(e,i.currentTarget.checked)}:void 0}})}}),t(o,{get when(){return e.type===d.Text},get children(){return t(J,{get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onChange(){return e.type===d.Text?i=>{var r;return(r=e.onChange)==null?void 0:r.call(e,i.currentTarget.value)}:void 0}})}}),t(o,{get when(){return e.type===d.Select},get children(){return t(P,{get id(){return e.name},get readOnly(){return e.readonly},get defaultValue(){return e.value},get onChange(){return e.type===d.Select?i=>{var r;return(r=e.onChange)==null?void 0:r.call(e,i)}:void 0},get children(){return t(W,{get readonly(){return e.readonly},get searchable(){return e.type===d.Select&&e.searchable},get options(){return e.options.split(",").map(i=>{var r;return{key:i,label:u(((r=e.options_prefix)!=null?r:e.driver==="common"?`storages.common.${e.name}s`:`drivers.${e.driver}.${e.name}s`)+`.${i}`)}})}})}})}})]}}),t(w,{get when(){return e.help},get children(){return t(K,{get children(){return u(e.driver==="common"?`storages.common.${e.name}-tips`:`drivers.${e.driver}.${e.name}-tips`)}})}})]}})};function F(e,u){switch(e){case d.Bool:return u?u==="true":!1;case d.Number:return u?parseInt(u):0;default:return u||""}}const se=()=>{const e=I(),{params:u,back:i,to:r}=U(),{id:l}=u,[A,L]=v(()=>f.get("/admin/driver/list"),!0),[c,C]=X({}),R=async()=>{const n=await L();y(n,C)},[B,N]=v(()=>f.get(`/admin/storage/get?id=${l}`),!0),[D,E]=v(()=>f.get(`/admin/driver/info?driver=${g.driver}`),!0);l?(async()=>{const n=await N();y(n,async a=>{s(a),m(JSON.parse(a.addition));const h=await E();y(h,G=>C({[g.driver]:G}))})})():R();const[g,s]=T({}),[S,m]=T({}),[j,q]=v(()=>(s("addition",JSON.stringify(S)),f.post(`/admin/storage/${l?"update":"create"}`,g))),k=Y(()=>{var a;const n=(a=c()[g.driver])==null?void 0:a.config.alert;if(console.log(n),n)return n.split("|")[0]});return t(de,{get loading(){return l?B()||D():A()},get children(){return[t(Z,{mb:"$2",get children(){return e(`global.${l?"edit":"add"}`)}}),t(p,{mb:"$2",spacing:"$2",get children(){return[t($,{name:"driver",default:"",readonly:l!==void 0,required:!0,searchable:!0,get type(){return d.Select},get options(){return l?g.driver:Object.keys(c()).join(",")},get value(){return g.driver},full_name_path:"storages.common.driver",options_prefix:"drivers.drivers",driver:"drivers",onChange:n=>{for(const a of c()[n].common)s(a.name,F(a.type,a.default));m(ee(a=>{for(const h in a)delete a[h]}));for(const a of c()[n].additional)m(a.name,F(a.type,a.default));s("driver",n)}}),t(w,{get when(){return k()},get children(){return t(te,{get status(){return k()},w:"$full",get children(){return[t(ne,{}),re(()=>e(`drivers.config.${g.driver}.alert`))]}})}})]}}),t(ue,{get children(){return t(w,{get when(){return c()[g.driver]},get children(){return[t(x,{get each(){return c()[g.driver].common},children:n=>t($,O(n,{driver:"common",get value(){return g[n.name]},onChange:a=>{s(n.name,a)}}))}),t(x,{get each(){return c()[g.driver].additional},children:n=>t($,O(n,{get driver(){return g.driver},get value(){return S[n.name]},onChange:a=>{m(n.name,a)}}))})]}})}}),t(ae,{mt:"$2",get loading(){return j()},onClick:async()=>{c()[g.driver].config.need_ms&&(_.info(e("manage.add_storage-tips")),window.open(ie("/@manage/messenger"),"_blank"));const n=await q();y(n,()=>{_.success(e("global.save_success")),i()},(a,h)=>{n.data.id&&r(`/@manage/storages/edit/${n.data.id}`)})},get children(){return e(`global.${l?"save":"add"}`)}})]}})};export{se as default};
