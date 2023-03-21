(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function l(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=l(n);fetch(n.href,s)}})();function N(){}function pe(e){return e()}function se(){return Object.create(null)}function x(e){e.forEach(pe)}function me(e){return typeof e=="function"}function Q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ye(e){return Object.keys(e).length===0}function M(e){return e??""}function d(e,t){e.appendChild(t)}function w(e,t,l){e.insertBefore(t,l||null)}function C(e){e.parentNode&&e.parentNode.removeChild(e)}function W(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function g(e){return document.createElement(e)}function L(e){return document.createTextNode(e)}function A(){return L(" ")}function $e(){return L("")}function H(e,t,l,o){return e.addEventListener(t,l,o),()=>e.removeEventListener(t,l,o)}function $(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function ke(e){return Array.from(e.childNodes)}function ge(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let Z;function U(e){Z=e}const q=[],re=[];let F=[];const ie=[],Se=Promise.resolve();let X=!1;function Ce(){X||(X=!0,Se.then(ve))}function Y(e){F.push(e)}const R=new Set;let D=0;function ve(){if(D!==0)return;const e=Z;do{try{for(;D<q.length;){const t=q[D];D++,U(t),Ee(t.$$)}}catch(t){throw q.length=0,D=0,t}for(U(null),q.length=0,D=0;re.length;)re.pop()();for(let t=0;t<F.length;t+=1){const l=F[t];R.has(l)||(R.add(l),l())}F.length=0}while(q.length);for(;ie.length;)ie.pop()();X=!1,R.clear(),U(e)}function Ee(e){if(e.fragment!==null){e.update(),x(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Y)}}function we(e){const t=[],l=[];F.forEach(o=>e.indexOf(o)===-1?t.push(o):l.push(o)),l.forEach(o=>o()),F=t}const K=new Set;let B;function Ne(){B={r:0,c:[],p:B}}function Pe(){B.r||x(B.c),B=B.p}function z(e,t){e&&e.i&&(K.delete(e),e.i(t))}function J(e,t,l,o){if(e&&e.o){if(K.has(e))return;K.add(e),B.c.push(()=>{K.delete(e),o&&(l&&e.d(1),o())}),e.o(t)}else o&&o()}function be(e){e&&e.c()}function ee(e,t,l,o){const{fragment:n,after_update:s}=e.$$;n&&n.m(t,l),o||Y(()=>{const r=e.$$.on_mount.map(pe).filter(me);e.$$.on_destroy?e.$$.on_destroy.push(...r):x(r),e.$$.on_mount=[]}),s.forEach(Y)}function te(e,t){const l=e.$$;l.fragment!==null&&(we(l.after_update),x(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function Ae(e,t){e.$$.dirty[0]===-1&&(q.push(e),Ce(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ne(e,t,l,o,n,s,r,u=[-1]){const c=Z;U(e);const i=e.$$={fragment:null,ctx:[],props:s,update:N,not_equal:n,bound:se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:se(),dirty:u,skip_bound:!1,root:t.target||c.$$.root};r&&r(i.root);let S=!1;if(i.ctx=l?l(e,t.props||{},(p,E,...b)=>{const k=b.length?b[0]:E;return i.ctx&&n(i.ctx[p],i.ctx[p]=k)&&(!i.skip_bound&&i.bound[p]&&i.bound[p](k),S&&Ae(e,p)),E}):[],i.update(),S=!0,x(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const p=ke(t.target);i.fragment&&i.fragment.l(p),p.forEach(C)}else i.fragment&&i.fragment.c();t.intro&&z(e.$$.fragment),ee(e,t.target,t.anchor,t.customElement),ve()}U(c)}class le{$destroy(){te(this,1),this.$destroy=N}$on(t,l){if(!me(l))return N;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(l),()=>{const n=o.indexOf(l);n!==-1&&o.splice(n,1)}}$set(t){this.$$set&&!ye(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const G=[];function Oe(e,t=N){let l;const o=new Set;function n(u){if(Q(e,u)&&(e=u,l)){const c=!G.length;for(const i of o)i[1](),G.push(i,e);if(c){for(let i=0;i<G.length;i+=2)G[i][0](G[i+1]);G.length=0}}}function s(u){n(u(e))}function r(u,c=N){const i=[u,c];return o.add(i),o.size===1&&(l=t(n)||N),u(e),()=>{o.delete(i),o.size===0&&l&&(l(),l=null)}}return{set:n,update:s,subscribe:r}}function V(e){return{...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}}function Le(e,t){const l=[];let o=V(e);return{get location(){return o},listen(n){l.push(n);const s=()=>{o=V(e),n({location:o,action:"POP"})};return e.addEventListener("popstate",s),()=>{e.removeEventListener("popstate",s);const r=l.indexOf(n);l.splice(r,1)}},navigate(n,{state:s,replace:r=!1}={}){s={...s,key:Date.now()+""};try{r?e.history.replaceState(s,null,n):e.history.pushState(s,null,n)}catch{e.location[r?"replace":"assign"](n)}o=V(e),l.forEach(u=>u({location:o,action:"PUSH"}))}}}function Me(e="/"){let t=0;const l=[{pathname:e,search:""}],o=[];return{get location(){return l[t]},addEventListener(n,s){},removeEventListener(n,s){},history:{get entries(){return l},get index(){return t},get state(){return o[t]},pushState(n,s,r){const[u,c=""]=r.split("?");t++,l.push({pathname:u,search:c}),o.push(n)},replaceState(n,s,r){const[u,c=""]=r.split("?");l[t]={pathname:u,search:c},o[t]=n}}}}const xe=Boolean(typeof window<"u"&&window.document&&window.document.createElement);Le(xe?window:Me());const oe=Oe("");function ce(e,t,l){const o=e.slice();return o[15]=t[l],o}function ue(e,t,l){const o=e.slice();return o[18]=t[l],o}function ae(e,t,l){const o=e.slice();return o[18]=t[l],o}function je(e){let t;return{c(){t=g("h2"),t.textContent="Under Construction"},m(l,o){w(l,t,o)},p:N,d(l){l&&C(t)}}}function Be(e){let t,l,o,n=Object.keys(e[0]),s=[];for(let r=0;r<n.length;r+=1)s[r]=de(ce(e,n,r));return{c(){t=g("h2"),t.innerHTML='<i style="font-weight:100">Please only select the GPA for subjects that you have taken.</i>',l=A(),o=g("div");for(let r=0;r<s.length;r+=1)s[r].c();$(o,"id","changing"),$(o,"class","svelte-123r8o")},m(r,u){w(r,t,u),w(r,l,u),w(r,o,u);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(o,null)},p(r,u){if(u&449){n=Object.keys(r[0]);let c;for(c=0;c<n.length;c+=1){const i=ce(r,n,c);s[c]?s[c].p(i,u):(s[c]=de(i),s[c].c(),s[c].m(o,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=n.length}},d(r){r&&C(t),r&&C(l),r&&C(o),W(s,r)}}}function fe(e){let t,l=e[18]+"",o,n;return{c(){t=g("option"),o=L(l),n=g("br"),t.__value=e[18],t.value=t.__value},m(s,r){w(s,t,r),d(t,o),w(s,n,r)},p:N,d(s){s&&C(t),s&&C(n)}}}function _e(e){let t,l=e[18]+"",o,n;return{c(){t=g("option"),o=L(l),n=g("br"),t.__value=e[18],t.value=t.__value},m(s,r){w(s,t,r),d(t,o),w(s,n,r)},p:N,d(s){s&&C(t),s&&C(n)}}}function de(e){let t,l,o=e[15]+"",n,s,r,u,c,i,S,p,E,b,k,P,T,j,y,v=e[6],a=[];for(let m=0;m<v.length;m+=1)a[m]=fe(ae(e,v,m));let f=e[6],h=[];for(let m=0;m<f.length;m+=1)h[m]=_e(ue(e,f,m));return{c(){t=g("div"),l=g("h2"),n=L(o),s=A(),r=g("div"),u=g("h3"),u.textContent="Practical:",c=g("select"),i=g("option"),i.textContent="Select";for(let m=0;m<a.length;m+=1)a[m].c();p=A(),E=g("h3"),E.textContent="Theory:",b=g("select"),k=g("option"),k.textContent="Select";for(let m=0;m<h.length;m+=1)h[m].c();T=A(),$(l,"class","subject_name svelte-123r8o"),i.selected=!0,i.__value="Select",i.value=i.__value,$(c,"class",S=M(e[15])+" svelte-123r8o"),k.selected=!0,k.__value="Select",k.value=k.__value,$(b,"class",P=M(e[15])+" svelte-123r8o"),$(r,"id","each_subject"),$(r,"class","svelte-123r8o"),$(t,"id","combo")},m(m,O){w(m,t,O),d(t,l),d(l,n),d(t,s),d(t,r),d(r,u),d(r,c),d(c,i);for(let _=0;_<a.length;_+=1)a[_]&&a[_].m(c,null);d(r,p),d(r,E),d(r,b),d(b,k);for(let _=0;_<h.length;_+=1)h[_]&&h[_].m(b,null);d(t,T),j||(y=[H(c,"change",e[7]),H(b,"change",e[8])],j=!0)},p(m,O){if(O&1&&o!==(o=m[15]+"")&&ge(n,o),O&64){v=m[6];let _;for(_=0;_<v.length;_+=1){const I=ae(m,v,_);a[_]?a[_].p(I,O):(a[_]=fe(I),a[_].c(),a[_].m(c,null))}for(;_<a.length;_+=1)a[_].d(1);a.length=v.length}if(O&1&&S!==(S=M(m[15])+" svelte-123r8o")&&$(c,"class",S),O&64){f=m[6];let _;for(_=0;_<f.length;_+=1){const I=ue(m,f,_);h[_]?h[_].p(I,O):(h[_]=_e(I),h[_].c(),h[_].m(b,null))}for(;_<h.length;_+=1)h[_].d(1);h.length=f.length}O&1&&P!==(P=M(m[15])+" svelte-123r8o")&&$(b,"class",P)},d(m){m&&C(t),W(a,m),W(h,m),j=!1,x(y)}}}function he(e){let t,l,o;return{c(){t=g("h2"),l=L("GPA: "),o=L(e[4]),$(t,"class","center svelte-123r8o")},m(n,s){w(n,t,s),d(t,l),d(t,o)},p(n,s){s&16&&ge(o,n[4])},d(n){n&&C(t)}}}function Te(e){let t,l,o,n,s,r,u,c,i,S,p,E,b,k,P,T;function j(f,h){if(f[1]==="gpa")return Be;if(f[1]==="marks")return je}let y=j(e),v=y&&y(e),a=e[4]!==void 0&&he(e);return{c(){t=g("div"),l=g("h2"),l.textContent="Input Method",o=A(),n=g("div"),s=g("button"),r=L("GPA"),c=A(),i=g("button"),S=L("Marks"),E=A(),v&&v.c(),b=A(),a&&a.c(),k=$e(),$(s,"class",u=M(e[2]?"active":"inactive")+" svelte-123r8o"),$(i,"class",p=M(e[3]?"active":"inactive")+" svelte-123r8o"),$(n,"class","buttons svelte-123r8o"),$(t,"id","input_method"),$(t,"class","svelte-123r8o")},m(f,h){w(f,t,h),d(t,l),d(t,o),d(t,n),d(n,s),d(s,r),d(n,c),d(n,i),d(i,S),w(f,E,h),v&&v.m(f,h),w(f,b,h),a&&a.m(f,h),w(f,k,h),P||(T=[H(s,"click",e[9]),H(i,"click",e[10])],P=!0)},p(f,[h]){h&4&&u!==(u=M(f[2]?"active":"inactive")+" svelte-123r8o")&&$(s,"class",u),h&8&&p!==(p=M(f[3]?"active":"inactive")+" svelte-123r8o")&&$(i,"class",p),y===(y=j(f))&&v?v.p(f,h):(v&&v.d(1),v=y&&y(f),v&&(v.c(),v.m(b.parentNode,b))),f[4]!==void 0?a?a.p(f,h):(a=he(f),a.c(),a.m(k.parentNode,k)):a&&(a.d(1),a=null)},i:N,o:N,d(f){f&&C(t),f&&C(E),v&&v.d(f),f&&C(b),a&&a.d(f),f&&C(k),P=!1,x(T)}}}function De(e,t,l){let o,n;oe.subscribe(y=>o=y);let s,r,u;function c(y){l(1,s=y),y==="gpa"&&(l(2,r=!0),l(3,u=!1)),y==="marks"&&(l(3,u=!0),l(2,r=!1))}let i={Nepali:[0,0],English:[0,0],Physics:[0,0],Chemistry:[0,0],Maths:[0,0],Computer:[0,0],Biology:[0,0],Social:[0,0]},S={Nepali:[0,0],English:[0,0],Social:[0,0],Economics:[0,0],Account:[0,0],Computer:[0,0],Maths:[0,0]},p=["4.0 or A+","3.6 or A","3.2 or B+","2.8 or B","2.4 or C+","2.0 or C","1.8 or D+","1.6 or D"];function E(y){const v=y.target.value;y.target.className.trim();const a=y.target.className.split(" ")[0].toString().trim();if(v!=="Select"){let f=v.split("or"),h=parseFloat(f[0].trim());n[a].splice(0,1,h)}v=="Select"&&n[a].splice(0,1,0),P()}function b(y){const v=y.target.value;y.target.className;const a=y.target.className.split(" ")[0].toString().trim();if(v!=="Select"){let f=v.split("or"),h=parseFloat(f[0]);n[a].splice(1,1,h)}v=="Select"&&n[a].splice(1,1,0),P()}var k;o==="science"&&(n=i),o==="management"&&(n=S);function P(){o==="science"&&l(4,k=(n.Nepali[1]*2.25+n.English[1]*3+n.Maths[1]*3.75+n.Physics[1]*3.75+n.Chemistry[1]*3.75+n.Computer[1]*2.5+n.Nepali[0]*.75+n.English[0]*1+n.Maths[0]*1.25+n.Physics[0]*1.25+n.Chemistry[0]*1.25+n.Computer[0]*2.5+n.Biology[1]*3.75+n.Biology[0]*1.25+n.Social[1]*3.75+n.Social[0]*1.25)/27),o==="management"&&l(4,k=(n.Nepali[1]*2.25+n.English[1]*3+n.Maths[1]*3.75+n.Economics[1]*3.75+n.Account[1]*3.75+n.Computer[1]*2.5+n.Nepali[0]*.75+n.English[0]*1+n.Maths[0]*1.25+n.Economics[0]*1.25+n.Account[0]*1.25+n.Computer[0]*2.5+n.Social[1]*3.75+n.Social[0]*1.25)/27)}return[n,s,r,u,k,c,p,E,b,()=>c("gpa"),()=>c("marks")]}class Ge extends le{constructor(t){super(),ne(this,t,De,Te,Q,{})}}function qe(e){let t,l,o,n,s,r,u,c,i;return{c(){t=g("body"),l=g("h2"),l.textContent="Choose Stream",o=A(),n=g("div"),s=g("button"),s.textContent="Science",r=A(),u=g("button"),u.textContent="Management",$(l,"class","svelte-631vml"),$(s,"class","svelte-631vml"),$(u,"class","svelte-631vml"),$(n,"class","buttons svelte-631vml")},m(S,p){w(S,t,p),d(t,l),d(t,o),d(t,n),d(n,s),d(n,r),d(n,u),c||(i=[H(s,"click",e[1]),H(u,"click",e[2])],c=!0)},p:N,i:N,o:N,d(S){S&&C(t),c=!1,x(i)}}}function Fe(e){function t(n){oe.update(s=>n)}return[t,()=>t("science"),()=>t("management")]}class He extends le{constructor(t){super(),ne(this,t,Fe,qe,Q,{})}}function Ie(e){let t,l;return t=new He({}),{c(){be(t.$$.fragment)},m(o,n){ee(t,o,n),l=!0},i(o){l||(z(t.$$.fragment,o),l=!0)},o(o){J(t.$$.fragment,o),l=!1},d(o){te(t,o)}}}function Ue(e){let t,l;return t=new Ge({}),{c(){be(t.$$.fragment)},m(o,n){ee(t,o,n),l=!0},i(o){l||(z(t.$$.fragment,o),l=!0)},o(o){J(t.$$.fragment,o),l=!1},d(o){te(t,o)}}}function ze(e){let t,l,o,n,s,r,u;const c=[Ue,Ie],i=[];function S(p,E){return p[0]?0:1}return s=S(e),r=i[s]=c[s](e),{c(){t=g("main"),l=g("h1"),l.textContent="NEB GPA Calculator",o=A(),n=g("div"),r.c(),$(n,"class","container")},m(p,E){w(p,t,E),d(t,l),d(t,o),d(t,n),i[s].m(n,null),u=!0},p(p,[E]){let b=s;s=S(p),s!==b&&(Ne(),J(i[b],1,1,()=>{i[b]=null}),Pe(),r=i[s],r||(r=i[s]=c[s](p),r.c()),z(r,1),r.m(n,null))},i(p){u||(z(r),u=!0)},o(p){J(r),u=!1},d(p){p&&C(t),i[s].d()}}}function Ke(e,t,l){let o;return oe.subscribe(n=>l(0,o=n)),[o]}class Je extends le{constructor(t){super(),ne(this,t,Ke,ze,Q,{})}}new Je({target:document.getElementById("app")});
