import{bI as p,b as v,h as n,ae as g,L as w,aM as m,az as A,dz as b,t as j,aO as k,S as y,ax as I,al as M,aw as O,b5 as a,cm as z,cY as L,ad as P,l as _,a as B,m as x,x as D,dA as E,dB as W,dC as H,E as f,G as K,a1 as T,a4 as F}from"./index.131ba458.js";import{b as G}from"./Folder.a42cf94a.js";import{u as R}from"./index.8682b8ec.js";import{q}from"./index.cbbecc53.js";import{g as U,O as V}from"./icon.e2583dcd.js";import{u as Y,I as S,a as $}from"./helper.9d2c7be1.js";import"./Layout.b3216831.js";import"./useTitle.5d102463.js";import"./FolderTree.8476baf7.js";import"./video_box.b1269b08.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./Paginator.9d387603.js";import"./index.f8c57210.js";import"./index.e4869b24.js";const r=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],J=e=>{const{isHide:o}=p();if(o(e.obj))return null;const{setPathAs:h}=R(),{show:u}=G({id:1}),{pushHref:s,to:i}=v(),{isMouseSupported:l}=$(),d=Y(),c=()=>_.list_item_filename_overflow;return n(P.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return n(g,{get classList(){return{selected:!!e.obj.selected}},class:"list-item viselect-item",get["data-index"](){return e.index},w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:w()}},as:q,get href(){return e.obj.name},get cursor(){return!l()&&(!m()||d())?"pointer":"default"},get bgColor(){return A(()=>!!e.obj.selected,!0)()?w():void 0},"on:dblclick":t=>{!l()||t.ctrlKey||t.metaKey||t.shiftKey||i(s(e.obj.name))},"on:click":t=>{if(l())return t.preventDefault();if(!!m()){if(t.preventDefault(),d()){i(s(e.obj.name));return}b(e.index,!e.obj.selected)}},onMouseEnter:()=>{h(e.obj.name,e.obj.is_dir,!0)},onContextMenu:t=>{j(()=>{k(!1),b(e.index,!0,!0)}),u(t,{props:e.obj})},get children(){return[n(g,{class:"name-box",spacing:"$1",get w(){return r[0].w},get children(){return[n(y,{get when(){return m()},get children(){return n(S,{"on:click":t=>{t.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{b(e.index,t.target.checked)}})}}),n(I,{class:"icon",boxSize:"$6",get color(){return M()},get as(){return U(e.obj)},mr:"$1","on:click":t=>{e.obj.type===V.IMAGE&&(t.stopPropagation(),t.preventDefault(),O.emit("gallery",e.obj.name))}}),n(a,{class:"name",get css(){return{wordBreak:"break-all",whiteSpace:c()==="multi_line"?"unset":"nowrap","overflow-x":c()==="scrollable"?"auto":"hidden",textOverflow:c()==="ellipsis"?"ellipsis":"unset","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),n(a,{class:"size",get w(){return r[1].w},get textAlign(){return r[1].textAlign},get children(){return z(e.obj.size)}}),n(a,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return r[2].w},get textAlign(){return r[2].textAlign},get children(){return L(e.obj.modified)}})]}})}})},ue=()=>{const e=B(),[o,h]=x(),[u,s]=x(!1);D(()=>{o()&&E(o(),u())});const i=t=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:t.textAlign,cursor:"pointer",onClick:()=>{t.name===o()?s(!u()):j(()=>{h(t.name),s(!1)})}}),{isMouseSupported:l,registerSelectContainer:d,captureContentMenu:c}=$();return d(),n(F,{"oncapture:contextmenu":c,get classList(){return{"viselect-container":l()}},class:"list",w:"$full",spacing:"$1",get children(){return[n(g,{class:"title",w:"$full",p:"$2",get children(){return[n(g,{get w(){return r[0].w},spacing:"$1",get children(){return[n(y,{get when(){return m()},get children(){return n(S,{get checked(){return W()},get indeterminate(){return H()},onChange:t=>{k(t.target.checked)}})}}),n(a,f(()=>i(r[0]),{get children(){return e(`home.obj.${r[0].name}`)}}))]}}),n(a,f({get w(){return r[1].w}},()=>i(r[1]),{get children(){return e(`home.obj.${r[1].name}`)}})),n(a,f({get w(){return r[2].w}},()=>i(r[2]),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${r[2].name}`)}}))]}}),n(K,{get each(){return T.objs},children:(t,C)=>n(J,{obj:t,get index(){return C()}})})]}})};export{ue as default};
