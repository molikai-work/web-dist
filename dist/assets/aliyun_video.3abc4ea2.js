import{u as w,o as n,ar as x,cu as m,bK as v,a as k,b9 as _,_ as F,aw as j,bf as L,n as O,as as S,e as W,f as c,Y as A}from"./index.5a40572c.js";import{a as C}from"./useUtil.0d2c0a1b.js";import{O as P}from"./icon.e4efec8c.js";import{H as z,a as B,A as I,V as N}from"./video_box.79dd7952.js";import"./api.07b4c27d.js";import"./index.4a94520f.js";import"./index.7f5f1bd2.js";import"./Layout.5cf83b7c.js";import"./Markdown.bcfe027d.js";import"./index.a233c8ae.js";import"./FolderTree.ca20537a.js";const J=()=>{const{replace:h,pathname:f}=w(),{proxyLink:l}=C();let s=n.objs.filter(e=>e.type===P.VIDEO);s.length===0&&(s=[n.obj]);let o,i={id:f(),container:"#video-player",title:n.obj.name,volume:.5,autoplay:x("video_autoplay"),autoSize:!1,autoMini:!0,loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[],whitelist:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},type:"m3u8",customType:{m3u8:function(e,t){const r=new z;r.loadSource(t),r.attachMedia(e),e.src||(e.src=t)}},lang:["en","zh-cn","zh-tw"].includes(m().toLowerCase())?m().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0};const u=n.related.find(e=>{for(const t of[".srt",".ass",".vtt"])if(e.name.endsWith(t))return!0;return!1}),d=n.related.find(e=>{for(const t of[".xml"])if(e.name.endsWith(t))return!0;return!1});u&&(i.subtitle={url:l(u,!0),type:v(u.name)}),d&&(i.plugins=[B({danmuku:l(d,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"})]);const[R,y]=k(()=>_.post("/fs/other",{path:f(),password:F(),method:"video_preview"}));j(async()=>{const e=await y();L(e,t=>{const r=t.video_preview_play_info.live_transcoding_task_list.filter(a=>a.url);if(r.length===0){O.error("No transcoding video found");return}i.url=r[r.length-1].url,i.quality=r.map((a,p)=>({html:a.template_id,url:a.url,default:p===r.length-1})),o=new I(i),o.on("video:ended",()=>{if(!g())return;const a=s.findIndex(p=>p.name===n.obj.name);a<s.length-1&&h(s[a+1].name)}),u&&o.on("video:play",a=>{o.subtitle.url=l(u,!0)})})}),S(()=>{o==null||o.destroy()});const[g,b]=W();return c(N,{onAutoNextChange:b,get children(){return c(A,{w:"$full",h:"60vh",id:"video-player"})}})};export{J as default};
