var be=Object.defineProperty;var Lt=t=>{throw TypeError(t)};var ye=(t,e,s)=>e in t?be(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var p=(t,e,s)=>ye(t,typeof e!="symbol"?e+"":e,s),It=(t,e,s)=>e.has(t)||Lt("Cannot "+s);var n=(t,e,s)=>(It(t,e,"read from private field"),s?s.call(t):e.get(t)),x=(t,e,s)=>e.has(t)?Lt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),u=(t,e,s,r)=>(It(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s),g=(t,e,s)=>(It(t,e,"access private method"),s);var Ut=(t,e,s,r)=>({set _(i){u(t,e,i,s)},get _(){return n(t,e,r)}});var _t=(t,e,s)=>(r,i)=>{let a=-1;return o(0);async function o(d){if(d<=a)throw new Error("next() called multiple times");a=d;let c,l=!1,h;if(t[d]?(h=t[d][0][0],r.req.routeIndex=d):h=d===t.length&&i||void 0,h)try{c=await h(r,()=>o(d+1))}catch(f){if(f instanceof Error&&e)r.error=f,c=await e(f,r),l=!0;else throw f}else r.finalized===!1&&s&&(c=await s(r));return c&&(r.finalized===!1||l)&&(r.res=c),r}},we=Symbol(),Ee=async(t,e=Object.create(null))=>{const{all:s=!1,dot:r=!1}=e,a=(t instanceof re?t.raw.headers:t.headers).get("Content-Type");return a!=null&&a.startsWith("multipart/form-data")||a!=null&&a.startsWith("application/x-www-form-urlencoded")?Ce(t,{all:s,dot:r}):{}};async function Ce(t,e){const s=await t.formData();return s?je(s,e):{}}function je(t,e){const s=Object.create(null);return t.forEach((r,i)=>{e.all||i.endsWith("[]")?Re(s,i,r):s[i]=r}),e.dot&&Object.entries(s).forEach(([r,i])=>{r.includes(".")&&(Ae(s,r,i),delete s[r])}),s}var Re=(t,e,s)=>{t[e]!==void 0?Array.isArray(t[e])?t[e].push(s):t[e]=[t[e],s]:e.endsWith("[]")?t[e]=[s]:t[e]=s},Ae=(t,e,s)=>{let r=t;const i=e.split(".");i.forEach((a,o)=>{o===i.length-1?r[a]=s:((!r[a]||typeof r[a]!="object"||Array.isArray(r[a])||r[a]instanceof File)&&(r[a]=Object.create(null)),r=r[a])})},Qt=t=>{const e=t.split("/");return e[0]===""&&e.shift(),e},Se=t=>{const{groups:e,path:s}=Pe(t),r=Qt(s);return ke(r,e)},Pe=t=>{const e=[];return t=t.replace(/\{[^}]+\}/g,(s,r)=>{const i=`@${r}`;return e.push([i,s]),i}),{groups:e,path:t}},ke=(t,e)=>{for(let s=e.length-1;s>=0;s--){const[r]=e[s];for(let i=t.length-1;i>=0;i--)if(t[i].includes(r)){t[i]=t[i].replace(r,e[s][1]);break}}return t},Rt={},Te=(t,e)=>{if(t==="*")return"*";const s=t.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const r=`${t}#${e}`;return Rt[r]||(s[2]?Rt[r]=e&&e[0]!==":"&&e[0]!=="*"?[r,s[1],new RegExp(`^${s[2]}(?=/${e})`)]:[t,s[1],new RegExp(`^${s[2]}$`)]:Rt[r]=[t,s[1],!0]),Rt[r]}return null},Ft=(t,e)=>{try{return e(t)}catch{return t.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return e(s)}catch{return s}})}},Oe=t=>Ft(t,decodeURI),Zt=t=>{const e=t.url,s=e.indexOf("/",e.indexOf(":")+4);let r=s;for(;r<e.length;r++){const i=e.charCodeAt(r);if(i===37){const a=e.indexOf("?",r),o=e.slice(s,a===-1?void 0:a);return Oe(o.includes("%25")?o.replace(/%25/g,"%2525"):o)}else if(i===63)break}return e.slice(s,r)},Me=t=>{const e=Zt(t);return e.length>1&&e.at(-1)==="/"?e.slice(0,-1):e},rt=(t,e,...s)=>(s.length&&(e=rt(e,...s)),`${(t==null?void 0:t[0])==="/"?"":"/"}${t}${e==="/"?"":`${(t==null?void 0:t.at(-1))==="/"?"":"/"}${(e==null?void 0:e[0])==="/"?e.slice(1):e}`}`),te=t=>{if(t.charCodeAt(t.length-1)!==63||!t.includes(":"))return null;const e=t.split("/"),s=[];let r="";return e.forEach(i=>{if(i!==""&&!/\:/.test(i))r+="/"+i;else if(/\:/.test(i))if(/\?/.test(i)){s.length===0&&r===""?s.push("/"):s.push(r);const a=i.replace("?","");r+="/"+a,s.push(r)}else r+="/"+i}),s.filter((i,a,o)=>o.indexOf(i)===a)},Dt=t=>/[%+]/.test(t)?(t.indexOf("+")!==-1&&(t=t.replace(/\+/g," ")),t.indexOf("%")!==-1?Ft(t,se):t):t,ee=(t,e,s)=>{let r;if(!s&&e&&!/[%+]/.test(e)){let o=t.indexOf("?",8);if(o===-1)return;for(t.startsWith(e,o+1)||(o=t.indexOf(`&${e}`,o+1));o!==-1;){const d=t.charCodeAt(o+e.length+1);if(d===61){const c=o+e.length+2,l=t.indexOf("&",c);return Dt(t.slice(c,l===-1?void 0:l))}else if(d==38||isNaN(d))return"";o=t.indexOf(`&${e}`,o+1)}if(r=/[%+]/.test(t),!r)return}const i={};r??(r=/[%+]/.test(t));let a=t.indexOf("?",8);for(;a!==-1;){const o=t.indexOf("&",a+1);let d=t.indexOf("=",a);d>o&&o!==-1&&(d=-1);let c=t.slice(a+1,d===-1?o===-1?void 0:o:d);if(r&&(c=Dt(c)),a=o,c==="")continue;let l;d===-1?l="":(l=t.slice(d+1,o===-1?void 0:o),r&&(l=Dt(l))),s?(i[c]&&Array.isArray(i[c])||(i[c]=[]),i[c].push(l)):i[c]??(i[c]=l)}return e?i[e]:i},Ie=ee,De=(t,e)=>ee(t,e,!0),se=decodeURIComponent,Bt=t=>Ft(t,se),nt,S,$,ie,ae,Nt,_,Vt,re=(Vt=class{constructor(t,e="/",s=[[]]){x(this,$);p(this,"raw");x(this,nt);x(this,S);p(this,"routeIndex",0);p(this,"path");p(this,"bodyCache",{});x(this,_,t=>{const{bodyCache:e,raw:s}=this,r=e[t];if(r)return r;const i=Object.keys(e)[0];return i?e[i].then(a=>(i==="json"&&(a=JSON.stringify(a)),new Response(a)[t]())):e[t]=s[t]()});this.raw=t,this.path=e,u(this,S,s),u(this,nt,{})}param(t){return t?g(this,$,ie).call(this,t):g(this,$,ae).call(this)}query(t){return Ie(this.url,t)}queries(t){return De(this.url,t)}header(t){if(t)return this.raw.headers.get(t)??void 0;const e={};return this.raw.headers.forEach((s,r)=>{e[r]=s}),e}async parseBody(t){var e;return(e=this.bodyCache).parsedBody??(e.parsedBody=await Ee(this,t))}json(){return n(this,_).call(this,"text").then(t=>JSON.parse(t))}text(){return n(this,_).call(this,"text")}arrayBuffer(){return n(this,_).call(this,"arrayBuffer")}blob(){return n(this,_).call(this,"blob")}formData(){return n(this,_).call(this,"formData")}addValidatedData(t,e){n(this,nt)[t]=e}valid(t){return n(this,nt)[t]}get url(){return this.raw.url}get method(){return this.raw.method}get[we](){return n(this,S)}get matchedRoutes(){return n(this,S)[0].map(([[,t]])=>t)}get routePath(){return n(this,S)[0].map(([[,t]])=>t)[this.routeIndex].path}},nt=new WeakMap,S=new WeakMap,$=new WeakSet,ie=function(t){const e=n(this,S)[0][this.routeIndex][1][t],s=g(this,$,Nt).call(this,e);return s&&/\%/.test(s)?Bt(s):s},ae=function(){const t={},e=Object.keys(n(this,S)[0][this.routeIndex][1]);for(const s of e){const r=g(this,$,Nt).call(this,n(this,S)[0][this.routeIndex][1][s]);r!==void 0&&(t[s]=/\%/.test(r)?Bt(r):r)}return t},Nt=function(t){return n(this,S)[1]?n(this,S)[1][t]:t},_=new WeakMap,Vt),He={Stringify:1},ne=async(t,e,s,r,i)=>{typeof t=="object"&&!(t instanceof String)&&(t instanceof Promise||(t=t.toString()),t instanceof Promise&&(t=await t));const a=t.callbacks;return a!=null&&a.length?(i?i[0]+=t:i=[t],Promise.all(a.map(d=>d({phase:e,buffer:i,context:r}))).then(d=>Promise.all(d.filter(Boolean).map(c=>ne(c,e,!1,r,i))).then(()=>i[0]))):Promise.resolve(t)},Ne="text/plain; charset=UTF-8",Ht=(t,e)=>({"Content-Type":t,...e}),gt,vt,D,ot,H,A,bt,lt,ct,J,yt,wt,B,it,Wt,Fe=(Wt=class{constructor(t,e){x(this,B);x(this,gt);x(this,vt);p(this,"env",{});x(this,D);p(this,"finalized",!1);p(this,"error");x(this,ot);x(this,H);x(this,A);x(this,bt);x(this,lt);x(this,ct);x(this,J);x(this,yt);x(this,wt);p(this,"render",(...t)=>(n(this,lt)??u(this,lt,e=>this.html(e)),n(this,lt).call(this,...t)));p(this,"setLayout",t=>u(this,bt,t));p(this,"getLayout",()=>n(this,bt));p(this,"setRenderer",t=>{u(this,lt,t)});p(this,"header",(t,e,s)=>{this.finalized&&u(this,A,new Response(n(this,A).body,n(this,A)));const r=n(this,A)?n(this,A).headers:n(this,J)??u(this,J,new Headers);e===void 0?r.delete(t):s!=null&&s.append?r.append(t,e):r.set(t,e)});p(this,"status",t=>{u(this,ot,t)});p(this,"set",(t,e)=>{n(this,D)??u(this,D,new Map),n(this,D).set(t,e)});p(this,"get",t=>n(this,D)?n(this,D).get(t):void 0);p(this,"newResponse",(...t)=>g(this,B,it).call(this,...t));p(this,"body",(t,e,s)=>g(this,B,it).call(this,t,e,s));p(this,"text",(t,e,s)=>!n(this,J)&&!n(this,ot)&&!e&&!s&&!this.finalized?new Response(t):g(this,B,it).call(this,t,e,Ht(Ne,s)));p(this,"json",(t,e,s)=>g(this,B,it).call(this,JSON.stringify(t),e,Ht("application/json",s)));p(this,"html",(t,e,s)=>{const r=i=>g(this,B,it).call(this,i,e,Ht("text/html; charset=UTF-8",s));return typeof t=="object"?ne(t,He.Stringify,!1,{}).then(r):r(t)});p(this,"redirect",(t,e)=>{const s=String(t);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,e??302)});p(this,"notFound",()=>(n(this,ct)??u(this,ct,()=>new Response),n(this,ct).call(this,this)));u(this,gt,t),e&&(u(this,H,e.executionCtx),this.env=e.env,u(this,ct,e.notFoundHandler),u(this,wt,e.path),u(this,yt,e.matchResult))}get req(){return n(this,vt)??u(this,vt,new re(n(this,gt),n(this,wt),n(this,yt))),n(this,vt)}get event(){if(n(this,H)&&"respondWith"in n(this,H))return n(this,H);throw Error("This context has no FetchEvent")}get executionCtx(){if(n(this,H))return n(this,H);throw Error("This context has no ExecutionContext")}get res(){return n(this,A)||u(this,A,new Response(null,{headers:n(this,J)??u(this,J,new Headers)}))}set res(t){if(n(this,A)&&t){t=new Response(t.body,t);for(const[e,s]of n(this,A).headers.entries())if(e!=="content-type")if(e==="set-cookie"){const r=n(this,A).headers.getSetCookie();t.headers.delete("set-cookie");for(const i of r)t.headers.append("set-cookie",i)}else t.headers.set(e,s)}u(this,A,t),this.finalized=!0}get var(){return n(this,D)?Object.fromEntries(n(this,D)):{}}},gt=new WeakMap,vt=new WeakMap,D=new WeakMap,ot=new WeakMap,H=new WeakMap,A=new WeakMap,bt=new WeakMap,lt=new WeakMap,ct=new WeakMap,J=new WeakMap,yt=new WeakMap,wt=new WeakMap,B=new WeakSet,it=function(t,e,s){const r=n(this,A)?new Headers(n(this,A).headers):n(this,J)??new Headers;if(typeof e=="object"&&"headers"in e){const a=e.headers instanceof Headers?e.headers:new Headers(e.headers);for(const[o,d]of a)o.toLowerCase()==="set-cookie"?r.append(o,d):r.set(o,d)}if(s)for(const[a,o]of Object.entries(s))if(typeof o=="string")r.set(a,o);else{r.delete(a);for(const d of o)r.append(a,d)}const i=typeof e=="number"?e:(e==null?void 0:e.status)??n(this,ot);return new Response(t,{status:i,headers:r})},Wt),y="ALL",$e="all",Le=["get","post","put","delete","options","patch"],oe="Can not add a route since the matcher is already built.",le=class extends Error{},Ue="__COMPOSED_HANDLER",_e=t=>t.text("404 Not Found",404),Gt=(t,e)=>{if("getResponse"in t){const s=t.getResponse();return e.newResponse(s.body,s)}return console.error(t),e.text("Internal Server Error",500)},P,w,ce,k,W,At,St,dt,Be=(dt=class{constructor(e={}){x(this,w);p(this,"get");p(this,"post");p(this,"put");p(this,"delete");p(this,"options");p(this,"patch");p(this,"all");p(this,"on");p(this,"use");p(this,"router");p(this,"getPath");p(this,"_basePath","/");x(this,P,"/");p(this,"routes",[]);x(this,k,_e);p(this,"errorHandler",Gt);p(this,"onError",e=>(this.errorHandler=e,this));p(this,"notFound",e=>(u(this,k,e),this));p(this,"fetch",(e,...s)=>g(this,w,St).call(this,e,s[1],s[0],e.method));p(this,"request",(e,s,r,i)=>e instanceof Request?this.fetch(s?new Request(e,s):e,r,i):(e=e.toString(),this.fetch(new Request(/^https?:\/\//.test(e)?e:`http://localhost${rt("/",e)}`,s),r,i)));p(this,"fire",()=>{addEventListener("fetch",e=>{e.respondWith(g(this,w,St).call(this,e.request,e,void 0,e.request.method))})});[...Le,$e].forEach(a=>{this[a]=(o,...d)=>(typeof o=="string"?u(this,P,o):g(this,w,W).call(this,a,n(this,P),o),d.forEach(c=>{g(this,w,W).call(this,a,n(this,P),c)}),this)}),this.on=(a,o,...d)=>{for(const c of[o].flat()){u(this,P,c);for(const l of[a].flat())d.map(h=>{g(this,w,W).call(this,l.toUpperCase(),n(this,P),h)})}return this},this.use=(a,...o)=>(typeof a=="string"?u(this,P,a):(u(this,P,"*"),o.unshift(a)),o.forEach(d=>{g(this,w,W).call(this,y,n(this,P),d)}),this);const{strict:r,...i}=e;Object.assign(this,i),this.getPath=r??!0?e.getPath??Zt:Me}route(e,s){const r=this.basePath(e);return s.routes.map(i=>{var o;let a;s.errorHandler===Gt?a=i.handler:(a=async(d,c)=>(await _t([],s.errorHandler)(d,()=>i.handler(d,c))).res,a[Ue]=i.handler),g(o=r,w,W).call(o,i.method,i.path,a)}),this}basePath(e){const s=g(this,w,ce).call(this);return s._basePath=rt(this._basePath,e),s}mount(e,s,r){let i,a;r&&(typeof r=="function"?a=r:(a=r.optionHandler,r.replaceRequest===!1?i=c=>c:i=r.replaceRequest));const o=a?c=>{const l=a(c);return Array.isArray(l)?l:[l]}:c=>{let l;try{l=c.executionCtx}catch{}return[c.env,l]};i||(i=(()=>{const c=rt(this._basePath,e),l=c==="/"?0:c.length;return h=>{const f=new URL(h.url);return f.pathname=f.pathname.slice(l)||"/",new Request(f,h)}})());const d=async(c,l)=>{const h=await s(i(c.req.raw),...o(c));if(h)return h;await l()};return g(this,w,W).call(this,y,rt(e,"*"),d),this}},P=new WeakMap,w=new WeakSet,ce=function(){const e=new dt({router:this.router,getPath:this.getPath});return e.errorHandler=this.errorHandler,u(e,k,n(this,k)),e.routes=this.routes,e},k=new WeakMap,W=function(e,s,r){e=e.toUpperCase(),s=rt(this._basePath,s);const i={basePath:this._basePath,path:s,method:e,handler:r};this.router.add(e,s,[r,i]),this.routes.push(i)},At=function(e,s){if(e instanceof Error)return this.errorHandler(e,s);throw e},St=function(e,s,r,i){if(i==="HEAD")return(async()=>new Response(null,await g(this,w,St).call(this,e,s,r,"GET")))();const a=this.getPath(e,{env:r}),o=this.router.match(i,a),d=new Fe(e,{path:a,matchResult:o,env:r,executionCtx:s,notFoundHandler:n(this,k)});if(o[0].length===1){let l;try{l=o[0][0][0][0](d,async()=>{d.res=await n(this,k).call(this,d)})}catch(h){return g(this,w,At).call(this,h,d)}return l instanceof Promise?l.then(h=>h||(d.finalized?d.res:n(this,k).call(this,d))).catch(h=>g(this,w,At).call(this,h,d)):l??n(this,k).call(this,d)}const c=_t(o[0],this.errorHandler,n(this,k));return(async()=>{try{const l=await c(d);if(!l.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return l.res}catch(l){return g(this,w,At).call(this,l,d)}})()},dt),de=[];function Ge(t,e){const s=this.buildAllMatchers(),r=((i,a)=>{const o=s[i]||s[y],d=o[2][a];if(d)return d;const c=a.match(o[0]);if(!c)return[[],de];const l=c.indexOf("",1);return[o[1][l],c]});return this.match=r,r(t,e)}var kt="[^/]+",xt=".*",mt="(?:|/.*)",at=Symbol(),qe=new Set(".\\+*[^]$()");function ze(t,e){return t.length===1?e.length===1?t<e?-1:1:-1:e.length===1||t===xt||t===mt?1:e===xt||e===mt?-1:t===kt?1:e===kt?-1:t.length===e.length?t<e?-1:1:e.length-t.length}var Y,X,T,tt,Ve=(tt=class{constructor(){x(this,Y);x(this,X);x(this,T,Object.create(null))}insert(e,s,r,i,a){if(e.length===0){if(n(this,Y)!==void 0)throw at;if(a)return;u(this,Y,s);return}const[o,...d]=e,c=o==="*"?d.length===0?["","",xt]:["","",kt]:o==="/*"?["","",mt]:o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let l;if(c){const h=c[1];let f=c[2]||kt;if(h&&c[2]&&(f===".*"||(f=f.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(f))))throw at;if(l=n(this,T)[f],!l){if(Object.keys(n(this,T)).some(m=>m!==xt&&m!==mt))throw at;if(a)return;l=n(this,T)[f]=new tt,h!==""&&u(l,X,i.varIndex++)}!a&&h!==""&&r.push([h,n(l,X)])}else if(l=n(this,T)[o],!l){if(Object.keys(n(this,T)).some(h=>h.length>1&&h!==xt&&h!==mt))throw at;if(a)return;l=n(this,T)[o]=new tt}l.insert(d,s,r,i,a)}buildRegExpStr(){const s=Object.keys(n(this,T)).sort(ze).map(r=>{const i=n(this,T)[r];return(typeof n(i,X)=="number"?`(${r})@${n(i,X)}`:qe.has(r)?`\\${r}`:r)+i.buildRegExpStr()});return typeof n(this,Y)=="number"&&s.unshift(`#${n(this,Y)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Y=new WeakMap,X=new WeakMap,T=new WeakMap,tt),Tt,Et,Kt,We=(Kt=class{constructor(){x(this,Tt,{varIndex:0});x(this,Et,new Ve)}insert(t,e,s){const r=[],i=[];for(let o=0;;){let d=!1;if(t=t.replace(/\{[^}]+\}/g,c=>{const l=`@\\${o}`;return i[o]=[l,c],o++,d=!0,l}),!d)break}const a=t.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=i.length-1;o>=0;o--){const[d]=i[o];for(let c=a.length-1;c>=0;c--)if(a[c].indexOf(d)!==-1){a[c]=a[c].replace(d,i[o][1]);break}}return n(this,Et).insert(a,e,r,n(this,Tt),s),r}buildRegExp(){let t=n(this,Et).buildRegExpStr();if(t==="")return[/^$/,[],[]];let e=0;const s=[],r=[];return t=t.replace(/#(\d+)|@(\d+)|\.\*\$/g,(i,a,o)=>a!==void 0?(s[++e]=Number(a),"$()"):(o!==void 0&&(r[Number(o)]=++e),"")),[new RegExp(`^${t}`),s,r]}},Tt=new WeakMap,Et=new WeakMap,Kt),Ke=[/^$/,[],Object.create(null)],Pt=Object.create(null);function he(t){return Pt[t]??(Pt[t]=new RegExp(t==="*"?"":`^${t.replace(/\/\*$|([.\\+*[^\]$()])/g,(e,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Je(){Pt=Object.create(null)}function Ye(t){var l;const e=new We,s=[];if(t.length===0)return Ke;const r=t.map(h=>[!/\*|\/:/.test(h[0]),...h]).sort(([h,f],[m,b])=>h?1:m?-1:f.length-b.length),i=Object.create(null);for(let h=0,f=-1,m=r.length;h<m;h++){const[b,E,O]=r[h];b?i[E]=[O.map(([C])=>[C,Object.create(null)]),de]:f++;let v;try{v=e.insert(E,f,b)}catch(C){throw C===at?new le(E):C}b||(s[f]=O.map(([C,L])=>{const Ct=Object.create(null);for(L-=1;L>=0;L--){const[jt,M]=v[L];Ct[jt]=M}return[C,Ct]}))}const[a,o,d]=e.buildRegExp();for(let h=0,f=s.length;h<f;h++)for(let m=0,b=s[h].length;m<b;m++){const E=(l=s[h][m])==null?void 0:l[1];if(!E)continue;const O=Object.keys(E);for(let v=0,C=O.length;v<C;v++)E[O[v]]=d[E[O[v]]]}const c=[];for(const h in o)c[h]=s[o[h]];return[a,c,i]}function st(t,e){if(t){for(const s of Object.keys(t).sort((r,i)=>i.length-r.length))if(he(s).test(e))return[...t[s]]}}var G,q,Ot,fe,Jt,Xe=(Jt=class{constructor(){x(this,Ot);p(this,"name","RegExpRouter");x(this,G);x(this,q);p(this,"match",Ge);u(this,G,{[y]:Object.create(null)}),u(this,q,{[y]:Object.create(null)})}add(t,e,s){var d;const r=n(this,G),i=n(this,q);if(!r||!i)throw new Error(oe);r[t]||[r,i].forEach(c=>{c[t]=Object.create(null),Object.keys(c[y]).forEach(l=>{c[t][l]=[...c[y][l]]})}),e==="/*"&&(e="*");const a=(e.match(/\/:/g)||[]).length;if(/\*$/.test(e)){const c=he(e);t===y?Object.keys(r).forEach(l=>{var h;(h=r[l])[e]||(h[e]=st(r[l],e)||st(r[y],e)||[])}):(d=r[t])[e]||(d[e]=st(r[t],e)||st(r[y],e)||[]),Object.keys(r).forEach(l=>{(t===y||t===l)&&Object.keys(r[l]).forEach(h=>{c.test(h)&&r[l][h].push([s,a])})}),Object.keys(i).forEach(l=>{(t===y||t===l)&&Object.keys(i[l]).forEach(h=>c.test(h)&&i[l][h].push([s,a]))});return}const o=te(e)||[e];for(let c=0,l=o.length;c<l;c++){const h=o[c];Object.keys(i).forEach(f=>{var m;(t===y||t===f)&&((m=i[f])[h]||(m[h]=[...st(r[f],h)||st(r[y],h)||[]]),i[f][h].push([s,a-l+c+1]))})}}buildAllMatchers(){const t=Object.create(null);return Object.keys(n(this,q)).concat(Object.keys(n(this,G))).forEach(e=>{t[e]||(t[e]=g(this,Ot,fe).call(this,e))}),u(this,G,u(this,q,void 0)),Je(),t}},G=new WeakMap,q=new WeakMap,Ot=new WeakSet,fe=function(t){const e=[];let s=t===y;return[n(this,G),n(this,q)].forEach(r=>{const i=r[t]?Object.keys(r[t]).map(a=>[a,r[t][a]]):[];i.length!==0?(s||(s=!0),e.push(...i)):t!==y&&e.push(...Object.keys(r[y]).map(a=>[a,r[y][a]]))}),s?Ye(e):null},Jt),z,N,Yt,Qe=(Yt=class{constructor(t){p(this,"name","SmartRouter");x(this,z,[]);x(this,N,[]);u(this,z,t.routers)}add(t,e,s){if(!n(this,N))throw new Error(oe);n(this,N).push([t,e,s])}match(t,e){if(!n(this,N))throw new Error("Fatal error");const s=n(this,z),r=n(this,N),i=s.length;let a=0,o;for(;a<i;a++){const d=s[a];try{for(let c=0,l=r.length;c<l;c++)d.add(...r[c]);o=d.match(t,e)}catch(c){if(c instanceof le)continue;throw c}this.match=d.match.bind(d),u(this,z,[d]),u(this,N,void 0);break}if(a===i)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(n(this,N)||n(this,z).length!==1)throw new Error("No active router has been determined yet.");return n(this,z)[0]}},z=new WeakMap,N=new WeakMap,Yt),pt=Object.create(null),V,R,Q,ht,j,F,K,ft,Ze=(ft=class{constructor(e,s,r){x(this,F);x(this,V);x(this,R);x(this,Q);x(this,ht,0);x(this,j,pt);if(u(this,R,r||Object.create(null)),u(this,V,[]),e&&s){const i=Object.create(null);i[e]={handler:s,possibleKeys:[],score:0},u(this,V,[i])}u(this,Q,[])}insert(e,s,r){u(this,ht,++Ut(this,ht)._);let i=this;const a=Se(s),o=[];for(let d=0,c=a.length;d<c;d++){const l=a[d],h=a[d+1],f=Te(l,h),m=Array.isArray(f)?f[0]:l;if(m in n(i,R)){i=n(i,R)[m],f&&o.push(f[1]);continue}n(i,R)[m]=new ft,f&&(n(i,Q).push(f),o.push(f[1])),i=n(i,R)[m]}return n(i,V).push({[e]:{handler:r,possibleKeys:o.filter((d,c,l)=>l.indexOf(d)===c),score:n(this,ht)}}),i}search(e,s){var c;const r=[];u(this,j,pt);let a=[this];const o=Qt(s),d=[];for(let l=0,h=o.length;l<h;l++){const f=o[l],m=l===h-1,b=[];for(let E=0,O=a.length;E<O;E++){const v=a[E],C=n(v,R)[f];C&&(u(C,j,n(v,j)),m?(n(C,R)["*"]&&r.push(...g(this,F,K).call(this,n(C,R)["*"],e,n(v,j))),r.push(...g(this,F,K).call(this,C,e,n(v,j)))):b.push(C));for(let L=0,Ct=n(v,Q).length;L<Ct;L++){const jt=n(v,Q)[L],M=n(v,j)===pt?{}:{...n(v,j)};if(jt==="*"){const U=n(v,R)["*"];U&&(r.push(...g(this,F,K).call(this,U,e,n(v,j))),u(U,j,M),b.push(U));continue}const[ge,$t,ut]=jt;if(!f&&!(ut instanceof RegExp))continue;const I=n(v,R)[ge],ve=o.slice(l).join("/");if(ut instanceof RegExp){const U=ut.exec(ve);if(U){if(M[$t]=U[0],r.push(...g(this,F,K).call(this,I,e,n(v,j),M)),Object.keys(n(I,R)).length){u(I,j,M);const Mt=((c=U[0].match(/\//))==null?void 0:c.length)??0;(d[Mt]||(d[Mt]=[])).push(I)}continue}}(ut===!0||ut.test(f))&&(M[$t]=f,m?(r.push(...g(this,F,K).call(this,I,e,M,n(v,j))),n(I,R)["*"]&&r.push(...g(this,F,K).call(this,n(I,R)["*"],e,M,n(v,j)))):(u(I,j,M),b.push(I)))}}a=b.concat(d.shift()??[])}return r.length>1&&r.sort((l,h)=>l.score-h.score),[r.map(({handler:l,params:h})=>[l,h])]}},V=new WeakMap,R=new WeakMap,Q=new WeakMap,ht=new WeakMap,j=new WeakMap,F=new WeakSet,K=function(e,s,r,i){const a=[];for(let o=0,d=n(e,V).length;o<d;o++){const c=n(e,V)[o],l=c[s]||c[y],h={};if(l!==void 0&&(l.params=Object.create(null),a.push(l),r!==pt||i&&i!==pt))for(let f=0,m=l.possibleKeys.length;f<m;f++){const b=l.possibleKeys[f],E=h[l.score];l.params[b]=i!=null&&i[b]&&!E?i[b]:r[b]??(i==null?void 0:i[b]),h[l.score]=!0}}return a},ft),Z,Xt,ts=(Xt=class{constructor(){p(this,"name","TrieRouter");x(this,Z);u(this,Z,new Ze)}add(t,e,s){const r=te(e);if(r){for(let i=0,a=r.length;i<a;i++)n(this,Z).insert(t,r[i],s);return}n(this,Z).insert(t,e,s)}match(t,e){return n(this,Z).search(t,e)}},Z=new WeakMap,Xt),ue=class extends Be{constructor(t={}){super(t),this.router=t.router??new Qe({routers:[new Xe,new ts]})}},es=t=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...t},r=(a=>typeof a=="string"?a==="*"?()=>a:o=>a===o?o:null:typeof a=="function"?a:o=>a.includes(o)?o:null)(s.origin),i=(a=>typeof a=="function"?a:Array.isArray(a)?()=>a:()=>[])(s.allowMethods);return async function(o,d){var h;function c(f,m){o.res.headers.set(f,m)}const l=await r(o.req.header("origin")||"",o);if(l&&c("Access-Control-Allow-Origin",l),s.credentials&&c("Access-Control-Allow-Credentials","true"),(h=s.exposeHeaders)!=null&&h.length&&c("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),o.req.method==="OPTIONS"){s.origin!=="*"&&c("Vary","Origin"),s.maxAge!=null&&c("Access-Control-Max-Age",s.maxAge.toString());const f=await i(o.req.header("origin")||"",o);f.length&&c("Access-Control-Allow-Methods",f.join(","));let m=s.allowHeaders;if(!(m!=null&&m.length)){const b=o.req.header("Access-Control-Request-Headers");b&&(m=b.split(/\s*,\s*/))}return m!=null&&m.length&&(c("Access-Control-Allow-Headers",m.join(",")),o.res.headers.append("Vary","Access-Control-Request-Headers")),o.res.headers.delete("Content-Length"),o.res.headers.delete("Content-Type"),new Response(null,{headers:o.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&o.header("Vary","Origin",{append:!0})}},ss=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,qt=(t,e=is)=>{const s=/\.([a-zA-Z0-9]+?)$/,r=t.match(s);if(!r)return;let i=e[r[1]];return i&&i.startsWith("text")&&(i+="; charset=utf-8"),i},rs={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},is=rs,as=(...t)=>{let e=t.filter(i=>i!=="").join("/");e=e.replace(new RegExp("(?<=\\/)\\/+","g"),"");const s=e.split("/"),r=[];for(const i of s)i===".."&&r.length>0&&r.at(-1)!==".."?r.pop():i!=="."&&r.push(i);return r.join("/")||"."},pe={br:".br",zstd:".zst",gzip:".gz"},ns=Object.keys(pe),os="index.html",ls=t=>{const e=t.root??"./",s=t.path,r=t.join??as;return async(i,a)=>{var h,f,m,b;if(i.finalized)return a();let o;if(t.path)o=t.path;else try{if(o=decodeURIComponent(i.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(o))throw new Error}catch{return await((h=t.onNotFound)==null?void 0:h.call(t,i.req.path,i)),a()}let d=r(e,!s&&t.rewriteRequestPath?t.rewriteRequestPath(o):o);t.isDir&&await t.isDir(d)&&(d=r(d,os));const c=t.getContent;let l=await c(d,i);if(l instanceof Response)return i.newResponse(l.body,l);if(l){const E=t.mimes&&qt(d,t.mimes)||qt(d);if(i.header("Content-Type",E||"application/octet-stream"),t.precompressed&&(!E||ss.test(E))){const O=new Set((f=i.req.header("Accept-Encoding"))==null?void 0:f.split(",").map(v=>v.trim()));for(const v of ns){if(!O.has(v))continue;const C=await c(d+pe[v],i);if(C){l=C,i.header("Content-Encoding",v),i.header("Vary","Accept-Encoding",{append:!0});break}}}return await((m=t.onFound)==null?void 0:m.call(t,d,i)),i.body(l)}await((b=t.onNotFound)==null?void 0:b.call(t,d,i)),await a()}};const et=new ue;et.use("/api/*",es());et.use("/static/*",ls({root:"./public"}));const xe=[{id:1,name:"Career Launcher",image:"https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop",rating:4.8,reviews:2340,location:"Delhi NCR",exams:["MBA","GMAT","NMAT"],priceRange:"₹50,000 - ₹1,50,000",badge:"Top Rated",features:["Live Classes","Mock Tests","Doubt Sessions"]},{id:2,name:"Allen Career Institute",image:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",rating:4.9,reviews:5670,location:"Kota, Rajasthan",exams:["JEE","NEET"],priceRange:"₹1,00,000 - ₹2,00,000",badge:"Best Seller",features:["Classroom","Study Material","Test Series"]},{id:3,name:"Aakash Institute",image:"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",rating:4.7,reviews:3890,location:"Mumbai, Bangalore",exams:["NEET","JEE"],priceRange:"₹80,000 - ₹1,80,000",badge:"Verified",features:["Hybrid Mode","Digital Content","Mentorship"]},{id:4,name:"Vajiram & Ravi",image:"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",rating:4.9,reviews:1890,location:"Delhi",exams:["UPSC","State PSC"],priceRange:"₹60,000 - ₹1,20,000",badge:"Top Rated",features:["GS Foundation","Current Affairs","Answer Writing"]},{id:5,name:"TIME Institute",image:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",rating:4.6,reviews:2100,location:"Bangalore, Chennai",exams:["MBA","GMAT","CAT"],priceRange:"₹45,000 - ₹1,00,000",badge:"Popular",features:["Weekend Batches","Online Portal","Personalized Learning"]},{id:6,name:"Resonance",image:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",rating:4.8,reviews:4200,location:"Kota, Multiple Cities",exams:["JEE","NEET","Foundation"],priceRange:"₹90,000 - ₹2,50,000",badge:"Best Seller",features:["DLPD Program","Scholarship Tests","Performance Analysis"]}],cs=[{name:"Priya Sharma",exam:"NEET 2024",rank:"AIR 342",institute:"Allen Career Institute",image:"https://i.pravatar.cc/150?img=1",review:"The teaching methodology and regular tests helped me improve my scores consistently. Highly recommended!",rating:5},{name:"Rahul Verma",exam:"CAT 2024",percentile:"99.2%ile",institute:"Career Launcher",image:"https://i.pravatar.cc/150?img=3",review:"Amazing faculty and study material. The mock tests were exactly like the actual CAT exam.",rating:5},{name:"Ananya Gupta",exam:"UPSC CSE 2024",rank:"Rank 89",institute:"Vajiram & Ravi",image:"https://i.pravatar.cc/150?img=5",review:"Best decision I made was joining this institute. The answer writing practice sessions were game-changers!",rating:5}];et.get("/api/institutes",t=>t.json(xe));et.get("/api/institutes/:id",t=>{const e=parseInt(t.req.param("id")),s=xe.find(r=>r.id===e);return s?t.json(s):t.json({error:"Institute not found"},404)});et.get("/api/testimonials",t=>t.json(cs));et.get("/",t=>t.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Coaching Dekho - Find the Best Coaching Institutes for Competitive Exams</title>
        <meta name="description" content="Discover, compare and choose the best coaching institutes for MBA, NEET, JEE, UPSC, GMAT, and other competitive exams">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="/static/styles.css" rel="stylesheet">
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  primary: '#1877F2',
                  secondary: '#E23744',
                  dark: '#1F2937',
                  light: '#F5F7FA'
                },
                fontFamily: {
                  sans: ['Inter', 'sans-serif'],
                  display: ['Poppins', 'sans-serif']
                }
              }
            }
          }
        <\/script>
    </head>
    <body class="font-sans text-dark bg-white">
        <!-- Navigation -->
        <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center space-x-8">
                        <a href="/" class="flex items-center space-x-2">
                            <div class="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                                <i class="fas fa-graduation-cap text-white text-xl"></i>
                            </div>
                            <span class="text-2xl font-display font-bold">
                                <span class="text-primary">Coaching</span><span class="text-secondary">Dekho</span>
                            </span>
                        </a>
                        <div class="hidden md:flex space-x-6">
                            <a href="#exams" class="text-gray-700 hover:text-primary transition font-medium">Exams</a>
                            <a href="#institutes" class="text-gray-700 hover:text-primary transition font-medium">Institutes</a>
                            <a href="#reviews" class="text-gray-700 hover:text-primary transition font-medium">Reviews</a>
                            <a href="#about" class="text-gray-700 hover:text-primary transition font-medium">About</a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button class="hidden md:block text-gray-700 hover:text-primary transition font-medium">Sign In</button>
                        <button class="bg-secondary hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition shadow-md hover:shadow-lg">
                            List Your Institute
                        </button>
                        <button class="md:hidden text-gray-700">
                            <i class="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50 pt-16 pb-24">
            <div class="absolute inset-0 opacity-10">
                <div class="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
                <div class="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center mb-12">
                    <div class="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md mb-6">
                        <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span class="text-sm font-medium text-gray-700">10,000+ Students Enrolled This Month 🔥</span>
                    </div>
                    <h1 class="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-dark mb-6 leading-tight">
                        Find Your Perfect<br>
                        <span class="text-primary">Coaching</span> <span class="text-secondary">Partner</span>
                    </h1>
                    <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Discover, compare & choose from <span class="font-bold text-primary">1000+</span> verified coaching institutes for competitive exams
                    </p>
                    
                    <!-- Search Bar -->
                    <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-3 flex flex-col md:flex-row gap-3">
                        <div class="flex-1 flex items-center px-4 py-3 bg-light rounded-xl">
                            <i class="fas fa-book-open text-primary mr-3"></i>
                            <select class="bg-transparent flex-1 outline-none text-dark font-medium">
                                <option>Select Exam</option>
                                <option>JEE (Main + Advanced)</option>
                                <option>NEET UG</option>
                                <option>MBA (CAT/XAT/GMAT)</option>
                                <option>UPSC CSE</option>
                                <option>CUET UG/PG</option>
                                <option>NMAT</option>
                            </select>
                        </div>
                        <div class="flex-1 flex items-center px-4 py-3 bg-light rounded-xl">
                            <i class="fas fa-map-marker-alt text-primary mr-3"></i>
                            <select class="bg-transparent flex-1 outline-none text-dark font-medium">
                                <option>Select City</option>
                                <option>Delhi NCR</option>
                                <option>Mumbai</option>
                                <option>Bangalore</option>
                                <option>Kota</option>
                                <option>Hyderabad</option>
                                <option>Chennai</option>
                                <option>Pune</option>
                            </select>
                        </div>
                        <button class="bg-secondary hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                            <i class="fas fa-search"></i>
                            <span>Search</span>
                        </button>
                    </div>

                    <!-- Trending Exams -->
                    <div class="mt-8 flex flex-wrap justify-center gap-3">
                        <span class="text-gray-600 font-medium">Trending:</span>
                        <a href="#" class="px-4 py-2 bg-white hover:bg-primary hover:text-white rounded-full text-sm font-semibold text-gray-700 transition shadow-md">
                            JEE 2025
                        </a>
                        <a href="#" class="px-4 py-2 bg-white hover:bg-primary hover:text-white rounded-full text-sm font-semibold text-gray-700 transition shadow-md">
                            NEET 2025
                        </a>
                        <a href="#" class="px-4 py-2 bg-white hover:bg-primary hover:text-white rounded-full text-sm font-semibold text-gray-700 transition shadow-md">
                            UPSC CSE
                        </a>
                        <a href="#" class="px-4 py-2 bg-white hover:bg-primary hover:text-white rounded-full text-sm font-semibold text-gray-700 transition shadow-md">
                            CAT 2025
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Exam Categories Grid -->
        <section id="exams" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
                        Popular <span class="text-primary">Exam</span> Categories
                    </h2>
                    <p class="text-lg text-gray-600">Choose your target exam and explore coaching options</p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <!-- JEE -->
                    <div class="group bg-gradient-to-br from-blue-50 to-blue-100 hover:from-primary hover:to-blue-600 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-atom text-3xl text-primary group-hover:text-primary"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">JEE</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">Main + Advanced</p>
                        <div class="mt-4 text-xs font-semibold text-primary group-hover:text-white">250+ Institutes →</div>
                    </div>

                    <!-- NEET -->
                    <div class="group bg-gradient-to-br from-red-50 to-red-100 hover:from-secondary hover:to-red-600 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-heartbeat text-3xl text-secondary"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">NEET</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">Medical Entrance</p>
                        <div class="mt-4 text-xs font-semibold text-secondary group-hover:text-white">180+ Institutes →</div>
                    </div>

                    <!-- MBA -->
                    <div class="group bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-500 hover:to-purple-700 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-briefcase text-3xl text-purple-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">MBA</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">CAT, XAT, GMAT</p>
                        <div class="mt-4 text-xs font-semibold text-purple-600 group-hover:text-white">120+ Institutes →</div>
                    </div>

                    <!-- UPSC -->
                    <div class="group bg-gradient-to-br from-green-50 to-green-100 hover:from-green-500 hover:to-green-700 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-landmark text-3xl text-green-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">UPSC</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">Civil Services</p>
                        <div class="mt-4 text-xs font-semibold text-green-600 group-hover:text-white">90+ Institutes →</div>
                    </div>

                    <!-- CUET -->
                    <div class="group bg-gradient-to-br from-yellow-50 to-yellow-100 hover:from-yellow-500 hover:to-yellow-600 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-university text-3xl text-yellow-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">CUET</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">UG & PG</p>
                        <div class="mt-4 text-xs font-semibold text-yellow-600 group-hover:text-white">75+ Institutes →</div>
                    </div>

                    <!-- GMAT -->
                    <div class="group bg-gradient-to-br from-indigo-50 to-indigo-100 hover:from-indigo-500 hover:to-indigo-700 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-globe text-3xl text-indigo-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">GMAT</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">Global MBA</p>
                        <div class="mt-4 text-xs font-semibold text-indigo-600 group-hover:text-white">50+ Institutes →</div>
                    </div>

                    <!-- NMAT -->
                    <div class="group bg-gradient-to-br from-pink-50 to-pink-100 hover:from-pink-500 hover:to-pink-600 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-chart-line text-3xl text-pink-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">NMAT</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">NMIMS Entrance</p>
                        <div class="mt-4 text-xs font-semibold text-pink-600 group-hover:text-white">40+ Institutes →</div>
                    </div>

                    <!-- More Exams -->
                    <div class="group bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-500 hover:to-gray-700 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-ellipsis-h text-3xl text-gray-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">More</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">View All Exams</p>
                        <div class="mt-4 text-xs font-semibold text-gray-600 group-hover:text-white">Explore →</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Coaching Institutes -->
        <section id="institutes" class="py-20 bg-light">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-end mb-12">
                    <div>
                        <h2 class="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
                            Top <span class="text-secondary">Coaching</span> Institutes
                        </h2>
                        <p class="text-lg text-gray-600">Handpicked & verified institutes with proven track records</p>
                    </div>
                    <button class="hidden md:block text-primary font-bold hover:text-secondary transition">
                        View All <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>

                <!-- Horizontal Scrolling Container -->
                <div class="overflow-x-auto pb-4 hide-scrollbar">
                    <div id="institutes-container" class="flex space-x-6 w-max">
                        <!-- Cards will be loaded here by JavaScript -->
                    </div>
                </div>

                <!-- View All Button for Mobile -->
                <div class="md:hidden text-center mt-8">
                    <button class="text-primary font-bold hover:text-secondary transition">
                        View All Institutes <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        </section>

        <!-- Why Coaching Dekho -->
        <section id="about" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
                        Why <span class="text-primary">Coaching</span><span class="text-secondary">Dekho</span>?
                    </h2>
                    <p class="text-lg text-gray-600">Your trusted partner in finding the perfect coaching institute</p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Feature 1 -->
                    <div class="text-center group">
                        <div class="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-shield-check text-3xl text-primary"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark mb-3">100% Verified</h3>
                        <p class="text-gray-600">All institutes are thoroughly verified and quality-checked by our team</p>
                    </div>

                    <!-- Feature 2 -->
                    <div class="text-center group">
                        <div class="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-star text-3xl text-secondary"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark mb-3">Real Reviews</h3>
                        <p class="text-gray-600">Authentic student reviews to help you make informed decisions</p>
                    </div>

                    <!-- Feature 3 -->
                    <div class="text-center group">
                        <div class="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-balance-scale text-3xl text-green-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark mb-3">Easy Comparison</h3>
                        <p class="text-gray-600">Compare fees, faculty, results & facilities side-by-side</p>
                    </div>

                    <!-- Feature 4 -->
                    <div class="text-center group">
                        <div class="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-headset text-3xl text-purple-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark mb-3">Free Support</h3>
                        <p class="text-gray-600">Our counselors help you choose the right coaching for free</p>
                    </div>
                </div>

                <!-- Stats -->
                <div class="mt-16 bg-gradient-to-r from-primary to-secondary rounded-3xl p-12">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        <div>
                            <div class="text-5xl font-display font-bold mb-2">1000+</div>
                            <div class="text-white/80">Coaching Institutes</div>
                        </div>
                        <div>
                            <div class="text-5xl font-display font-bold mb-2">50K+</div>
                            <div class="text-white/80">Students Enrolled</div>
                        </div>
                        <div>
                            <div class="text-5xl font-display font-bold mb-2">15K+</div>
                            <div class="text-white/80">Verified Reviews</div>
                        </div>
                        <div>
                            <div class="text-5xl font-display font-bold mb-2">98%</div>
                            <div class="text-white/80">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Student Testimonials -->
        <section id="reviews" class="py-20 bg-light">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
                        Success <span class="text-secondary">Stories</span>
                    </h2>
                    <p class="text-lg text-gray-600">Hear from students who achieved their dreams</p>
                </div>

                <div id="testimonials-container" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Testimonials will be loaded here by JavaScript -->
                </div>

                <div class="text-center mt-12">
                    <button class="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg hover:shadow-xl">
                        Read More Success Stories <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 bg-gradient-to-r from-primary via-blue-600 to-secondary">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i class="fas fa-rocket text-4xl text-white"></i>
                </div>
                <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                    Ready to Start Your Journey?
                </h2>
                <p class="text-xl text-white/90 mb-8">
                    Join thousands of students who found their perfect coaching institute through CoachingDekho
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition shadow-lg hover:shadow-xl">
                        <i class="fas fa-search mr-2"></i>
                        Find Your Coaching
                    </button>
                    <button class="bg-secondary hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg hover:shadow-xl border-2 border-white/20">
                        <i class="fas fa-building mr-2"></i>
                        List Your Institute
                    </button>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-dark text-white py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <!-- Brand -->
                    <div>
                        <div class="flex items-center space-x-2 mb-4">
                            <div class="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                                <i class="fas fa-graduation-cap text-white text-xl"></i>
                            </div>
                            <span class="text-2xl font-display font-bold">
                                <span class="text-primary">Coaching</span><span class="text-secondary">Dekho</span>
                            </span>
                        </div>
                        <p class="text-gray-400 mb-4">Your trusted partner in finding the perfect coaching institute for competitive exams.</p>
                        <div class="flex space-x-4">
                            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h3 class="font-display font-bold text-lg mb-4">Quick Links</h3>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="#" class="hover:text-primary transition">About Us</a></li>
                            <li><a href="#" class="hover:text-primary transition">How It Works</a></li>
                            <li><a href="#" class="hover:text-primary transition">Success Stories</a></li>
                            <li><a href="#" class="hover:text-primary transition">Blog</a></li>
                            <li><a href="#" class="hover:text-primary transition">Contact Us</a></li>
                        </ul>
                    </div>

                    <!-- Popular Exams -->
                    <div>
                        <h3 class="font-display font-bold text-lg mb-4">Popular Exams</h3>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="#" class="hover:text-primary transition">JEE Coaching</a></li>
                            <li><a href="#" class="hover:text-primary transition">NEET Coaching</a></li>
                            <li><a href="#" class="hover:text-primary transition">UPSC Coaching</a></li>
                            <li><a href="#" class="hover:text-primary transition">MBA Coaching</a></li>
                            <li><a href="#" class="hover:text-primary transition">CUET Coaching</a></li>
                        </ul>
                    </div>

                    <!-- Contact -->
                    <div>
                        <h3 class="font-display font-bold text-lg mb-4">Contact Us</h3>
                        <ul class="space-y-3 text-gray-400">
                            <li class="flex items-start space-x-3">
                                <i class="fas fa-envelope text-primary mt-1"></i>
                                <span>support@coachingdekho.com</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fas fa-phone text-primary mt-1"></i>
                                <span>+91 9876543210</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fas fa-map-marker-alt text-primary mt-1"></i>
                                <span>New Delhi, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p class="text-gray-400 text-sm mb-4 md:mb-0">
                        © 2026 CoachingDekho. All rights reserved.
                    </p>
                    <div class="flex space-x-6 text-sm text-gray-400">
                        <a href="#" class="hover:text-primary transition">Privacy Policy</a>
                        <a href="#" class="hover:text-primary transition">Terms of Service</a>
                        <a href="#" class="hover:text-primary transition">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>

        <script src="/static/app.js"><\/script>
    </body>
    </html>
  `));const zt=new ue,ds=Object.assign({"/src/index.tsx":et});let me=!1;for(const[,t]of Object.entries(ds))t&&(zt.all("*",e=>{let s;try{s=e.executionCtx}catch{}return t.fetch(e.req.raw,e.env,s)}),zt.notFound(e=>{let s;try{s=e.executionCtx}catch{}return t.fetch(e.req.raw,e.env,s)}),me=!0);if(!me)throw new Error("Can't import modules from ['/src/index.tsx']");export{zt as default};
