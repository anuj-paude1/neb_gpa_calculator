(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function j(){}function de(t){return t()}function le(){return Object.create(null)}function L(t){t.forEach(de)}function he(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ve(t){return Object.keys(t).length===0}function T(t){return t??""}function _(t,e){t.appendChild(e)}function S(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function R(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function x(){return O(" ")}function pe(){return O("")}function F(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function k(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function be(t){return Array.from(t.childNodes)}function ye(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let X;function I(t){X=t}const D=[],re=[];let q=[];const ie=[],ke=Promise.resolve();let V=!1;function $e(){V||(V=!0,ke.then(me))}function W(t){q.push(t)}const J=new Set;let M=0;function me(){if(M!==0)return;const t=X;do{try{for(;M<D.length;){const e=D[M];M++,I(e),Ce(e.$$)}}catch(e){throw D.length=0,M=0,e}for(I(null),D.length=0,M=0;re.length;)re.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];J.has(n)||(J.add(n),n())}q.length=0}while(D.length);for(;ie.length;)ie.pop()();V=!1,J.clear(),I(t)}function Ce(t){if(t.fragment!==null){t.update(),L(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}function we(t){const e=[],n=[];q.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),q=e}const z=new Set;let A;function Se(){A={r:0,c:[],p:A}}function Ee(){A.r||L(A.c),A=A.p}function U(t,e){t&&t.i&&(z.delete(t),t.i(e))}function H(t,e,n,l){if(t&&t.o){if(z.has(t))return;z.add(t),A.c.push(()=>{z.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function ge(t){t&&t.c()}function Y(t,e,n,l){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),l||W(()=>{const o=t.$$.on_mount.map(de).filter(he);t.$$.on_destroy?t.$$.on_destroy.push(...o):L(o),t.$$.on_mount=[]}),i.forEach(W)}function Z(t,e){const n=t.$$;n.fragment!==null&&(we(n.after_update),L(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function je(t,e){t.$$.dirty[0]===-1&&(D.push(t),$e(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ee(t,e,n,l,r,i,o,c=[-1]){const d=X;I(t);const s=t.$$={fragment:null,ctx:[],props:i,update:j,not_equal:r,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:le(),dirty:c,skip_bound:!1,root:e.target||d.$$.root};o&&o(s.root);let $=!1;if(s.ctx=n?n(t,e.props||{},(f,y,...g)=>{const P=g.length?g[0]:y;return s.ctx&&r(s.ctx[f],s.ctx[f]=P)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](P),$&&je(t,f)),y}):[],s.update(),$=!0,L(s.before_update),s.fragment=l?l(s.ctx):!1,e.target){if(e.hydrate){const f=be(e.target);s.fragment&&s.fragment.l(f),f.forEach(w)}else s.fragment&&s.fragment.c();e.intro&&U(t.$$.fragment),Y(t,e.target,e.anchor,e.customElement),me()}I(d)}class te{$destroy(){Z(this,1),this.$destroy=j}$on(e,n){if(!he(n))return j;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(e){this.$$set&&!ve(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const B=[];function Ne(t,e=j){let n;const l=new Set;function r(c){if(K(t,c)&&(t=c,n)){const d=!B.length;for(const s of l)s[1](),B.push(s,t);if(d){for(let s=0;s<B.length;s+=2)B[s][0](B[s+1]);B.length=0}}}function i(c){r(c(t))}function o(c,d=j){const s=[c,d];return l.add(s),l.size===1&&(n=e(r)||j),c(t),()=>{l.delete(s),l.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}function Q(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}function Pe(t,e){const n=[];let l=Q(t);return{get location(){return l},listen(r){n.push(r);const i=()=>{l=Q(t),r({location:l,action:"POP"})};return t.addEventListener("popstate",i),()=>{t.removeEventListener("popstate",i);const o=n.indexOf(r);n.splice(o,1)}},navigate(r,{state:i,replace:o=!1}={}){i={...i,key:Date.now()+""};try{o?t.history.replaceState(i,null,r):t.history.pushState(i,null,r)}catch{t.location[o?"replace":"assign"](r)}l=Q(t),n.forEach(c=>c({location:l,action:"PUSH"}))}}}function xe(t="/"){let e=0;const n=[{pathname:t,search:""}],l=[];return{get location(){return n[e]},addEventListener(r,i){},removeEventListener(r,i){},history:{get entries(){return n},get index(){return e},get state(){return l[e]},pushState(r,i,o){const[c,d=""]=o.split("?");e++,n.push({pathname:c,search:d}),l.push(r)},replaceState(r,i,o){const[c,d=""]=o.split("?");n[e]={pathname:c,search:d},l[e]=r}}}}const Oe=Boolean(typeof window<"u"&&window.document&&window.document.createElement);Pe(Oe?window:xe());const ne=Ne("");function oe(t,e,n){const l=t.slice();return l[13]=e[n],l}function ce(t,e,n){const l=t.slice();return l[16]=e[n],l}function se(t,e,n){const l=t.slice();return l[16]=e[n],l}function Le(t){let e;return{c(){e=m("h2"),e.textContent="Under Construction"},m(n,l){S(n,e,l)},p:j,d(n){n&&w(e)}}}function Ae(t){let e,n=Object.keys(t[5]),l=[];for(let r=0;r<n.length;r+=1)l[r]=fe(oe(t,n,r));return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=pe()},m(r,i){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(r,i);S(r,e,i)},p(r,i){if(i&480){n=Object.keys(r[5]);let o;for(o=0;o<n.length;o+=1){const c=oe(r,n,o);l[o]?l[o].p(c,i):(l[o]=fe(c),l[o].c(),l[o].m(e.parentNode,e))}for(;o<l.length;o+=1)l[o].d(1);l.length=n.length}},d(r){R(l,r),r&&w(e)}}}function ue(t){let e,n=t[16]+"",l,r;return{c(){e=m("option"),l=O(n),r=m("br"),e.__value=t[16],e.value=e.__value},m(i,o){S(i,e,o),_(e,l),S(i,r,o)},p:j,d(i){i&&w(e),i&&w(r)}}}function ae(t){let e,n=t[16]+"",l,r;return{c(){e=m("option"),l=O(n),r=m("br"),e.__value=t[16],e.value=e.__value},m(i,o){S(i,e,o),_(e,l),S(i,r,o)},p:j,d(i){i&&w(e),i&&w(r)}}}function fe(t){let e,n,l=t[13]+"",r,i,o,c,d,s,$,f,y,g,P,v,N,E=t[6],b=[];for(let a=0;a<E.length;a+=1)b[a]=ue(se(t,E,a));let C=t[6],p=[];for(let a=0;a<C.length;a+=1)p[a]=ae(ce(t,C,a));return{c(){e=m("div"),n=m("h2"),r=O(l),i=x(),o=m("div"),c=m("h3"),c.textContent="Practical:",d=m("select"),s=m("option"),s.textContent="Select";for(let a=0;a<b.length;a+=1)b[a].c();$=x(),f=m("h3"),f.textContent="Theory:",y=m("select"),g=m("option"),g.textContent="Select";for(let a=0;a<p.length;a+=1)p[a].c();P=x(),k(n,"class","subject_name svelte-khejgk"),s.selected=!0,s.__value="Select",s.value=s.__value,k(d,"class",T(t[13])+" svelte-khejgk"),g.selected=!0,g.__value="Select",g.value=g.__value,k(y,"class",T(t[13])+" svelte-khejgk"),k(o,"id","each_subject"),k(o,"class","svelte-khejgk"),k(e,"id","combo")},m(a,h){S(a,e,h),_(e,n),_(n,r),_(e,i),_(e,o),_(o,c),_(o,d),_(d,s);for(let u=0;u<b.length;u+=1)b[u]&&b[u].m(d,null);_(o,$),_(o,f),_(o,y),_(y,g);for(let u=0;u<p.length;u+=1)p[u]&&p[u].m(y,null);_(e,P),v||(N=[F(d,"change",t[7]),F(y,"change",t[8])],v=!0)},p(a,h){if(h&64){E=a[6];let u;for(u=0;u<E.length;u+=1){const G=se(a,E,u);b[u]?b[u].p(G,h):(b[u]=ue(G),b[u].c(),b[u].m(d,null))}for(;u<b.length;u+=1)b[u].d(1);b.length=E.length}if(h&64){C=a[6];let u;for(u=0;u<C.length;u+=1){const G=ce(a,C,u);p[u]?p[u].p(G,h):(p[u]=ae(G),p[u].c(),p[u].m(y,null))}for(;u<p.length;u+=1)p[u].d(1);p.length=C.length}},d(a){a&&w(e),R(b,a),R(p,a),v=!1,L(N)}}}function _e(t){let e,n,l;return{c(){e=m("h2"),n=O("GPA : "),l=O(t[3]),k(e,"class","center svelte-khejgk")},m(r,i){S(r,e,i),_(e,n),_(e,l)},p(r,i){i&8&&ye(l,r[3])},d(r){r&&w(e)}}}function Me(t){let e,n,l,r,i,o,c,d,s,$,f,y,g,P,v,N,E;function b(h,u){if(h[0]==="gpa")return Ae;if(h[0]==="marks")return Le}let C=b(t),p=C&&C(t),a=t[3]!==void 0&&_e(t);return{c(){e=m("div"),n=m("h2"),n.textContent="Input Method",l=x(),r=m("div"),i=m("button"),o=O("GPA"),d=x(),s=m("button"),$=O("Marks"),y=x(),g=m("div"),p&&p.c(),P=x(),a&&a.c(),v=pe(),k(i,"class",c=T(t[1]?"active":"inactive")+" svelte-khejgk"),k(s,"class",f=T(t[2]?"active":"inactive")+" svelte-khejgk"),k(r,"class","buttons svelte-khejgk"),k(e,"id","input_method"),k(e,"class","svelte-khejgk"),k(g,"id","changing"),k(g,"class","svelte-khejgk")},m(h,u){S(h,e,u),_(e,n),_(e,l),_(e,r),_(r,i),_(i,o),_(r,d),_(r,s),_(s,$),S(h,y,u),S(h,g,u),p&&p.m(g,null),S(h,P,u),a&&a.m(h,u),S(h,v,u),N||(E=[F(i,"click",t[9]),F(s,"click",t[10])],N=!0)},p(h,[u]){u&2&&c!==(c=T(h[1]?"active":"inactive")+" svelte-khejgk")&&k(i,"class",c),u&4&&f!==(f=T(h[2]?"active":"inactive")+" svelte-khejgk")&&k(s,"class",f),C===(C=b(h))&&p?p.p(h,u):(p&&p.d(1),p=C&&C(h),p&&(p.c(),p.m(g,null))),h[3]!==void 0?a?a.p(h,u):(a=_e(h),a.c(),a.m(v.parentNode,v)):a&&(a.d(1),a=null)},i:j,o:j,d(h){h&&w(e),h&&w(y),h&&w(g),p&&p.d(),h&&w(P),a&&a.d(h),h&&w(v),N=!1,L(E)}}}function Be(t,e,n){ne.subscribe(v=>v);let l,r,i;function o(v){n(0,l=v),v==="gpa"&&(n(1,r=!0),n(2,i=!1)),v==="marks"&&(n(2,i=!0),n(1,r=!1))}let c={Nepali:[0,0],English:[0,0],Physics:[0,0],Chemistry:[0,0],Maths:[0,0],Computer:[0,0],Biology:[0,0]},d=["4.0 or A+","3.6 or A","3.2 or B+","2.8 or B","2.4 or C+","2.0 or C","1.8 or D+","1.6 or D"];function s(v){const N=v.target.value;v.target.className.trim();const E=v.target.className.split(" ")[0].toString().trim();if(N!=="Select"){let b=N.split("or"),C=parseFloat(b[0].trim());c[E].splice(0,1,C),y()}}function $(v){const N=v.target.value;v.target.className;const E=v.target.className.split(" ")[0].toString().trim();if(console.log(E),N!=="Select"){let b=N.split("or"),C=parseFloat(b[0]);c[E].splice(1,1,C),y()}}var f;function y(){n(3,f=(c.Nepali[1]*2.25+c.English[1]*3+c.Maths[1]*3.75+c.Physics[1]*3.75+c.Chemistry[1]*3.75+c.Computer[1]*2.5+c.Nepali[0]*.75+c.English[0]*1+c.Maths[0]*1.25+c.Physics[0]*1.25+c.Chemistry[0]*1.25+c.Computer[0]*2.5+c.Biology[0]*3.75+c.Biology[0]*1.25)/27)}return[l,r,i,f,o,c,d,s,$,()=>o("gpa"),()=>o("marks")]}class De extends te{constructor(e){super(),ee(this,e,Be,Me,K,{})}}function Te(t){let e,n,l,r,i,o,c,d,s;return{c(){e=m("body"),n=m("h2"),n.textContent="Choose Stream",l=x(),r=m("div"),i=m("button"),i.textContent="Science",o=x(),c=m("button"),c.textContent="Management",k(n,"class","svelte-631vml"),k(i,"class","svelte-631vml"),k(c,"class","svelte-631vml"),k(r,"class","buttons svelte-631vml")},m($,f){S($,e,f),_(e,n),_(e,l),_(e,r),_(r,i),_(r,o),_(r,c),d||(s=[F(i,"click",t[1]),F(c,"click",t[2])],d=!0)},p:j,i:j,o:j,d($){$&&w(e),d=!1,L(s)}}}function qe(t){function e(r){ne.update(i=>r)}return[e,()=>e("science"),()=>e("management")]}class Fe extends te{constructor(e){super(),ee(this,e,qe,Te,K,{})}}function Ge(t){let e,n;return e=new Fe({}),{c(){ge(e.$$.fragment)},m(l,r){Y(e,l,r),n=!0},i(l){n||(U(e.$$.fragment,l),n=!0)},o(l){H(e.$$.fragment,l),n=!1},d(l){Z(e,l)}}}function Ie(t){let e,n;return e=new De({}),{c(){ge(e.$$.fragment)},m(l,r){Y(e,l,r),n=!0},i(l){n||(U(e.$$.fragment,l),n=!0)},o(l){H(e.$$.fragment,l),n=!1},d(l){Z(e,l)}}}function Ue(t){let e,n,l,r,i,o,c;const d=[Ie,Ge],s=[];function $(f,y){return f[0]?0:1}return i=$(t),o=s[i]=d[i](t),{c(){e=m("main"),n=m("h1"),n.textContent="NEB GPA Calculator",l=x(),r=m("div"),o.c(),k(r,"class","container")},m(f,y){S(f,e,y),_(e,n),_(e,l),_(e,r),s[i].m(r,null),c=!0},p(f,[y]){let g=i;i=$(f),i!==g&&(Se(),H(s[g],1,1,()=>{s[g]=null}),Ee(),o=s[i],o||(o=s[i]=d[i](f),o.c()),U(o,1),o.m(r,null))},i(f){c||(U(o),c=!0)},o(f){H(o),c=!1},d(f){f&&w(e),s[i].d()}}}function ze(t,e,n){let l;return ne.subscribe(r=>n(0,l=r)),[l]}class He extends te{constructor(e){super(),ee(this,e,ze,Ue,K,{})}}new He({target:document.getElementById("app")});
