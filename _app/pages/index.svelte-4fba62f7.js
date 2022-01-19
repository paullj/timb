import{S as Te,i as Ie,s as He,k as C,e as z,m as D,c as N,a as v,d as c,g as p,b as n,N as ee,l as _e,O as ne,t as te,h as le,I as _,j as Re,f as re,P as oe,Q as G,R as ce,M as he,T as Be,v as Le,U as ae,V as ge,W as Ve,X as pe,Y as Fe,Z as Ue,_ as Se,$ as Ce,G as F,H as U}from"../chunks/vendor-548d835b.js";const se=[{comments:["timb(re) - THINK OF A NICE ONE LINE DESC","click play and then on the dots above to see/hear more!"],code:"[[0,4,7,9].map(n=>f(220,n))[m%2+b%3],[55,69][r(1,5)[i%5]]]"},{comments:["each dot is a beat, to play a note","return a frequency from 20-20000 hz"],code:"440"},{comments:["`m` is the current measure (0-7)","and `b`, the beat in the current mesasure (0-7)"],code:"(1+m%2)*110*[1,2,3,4][b%4]"},{comments:["`t` is time","and `i` is index (0-63)"],code:"440+t*[0,1,2,1][i%4]"},{comments:["NaN and other non number values are rest notes","this allows for intesting rhythms"],code:"440*[2,1,1,NaN,1,1,NaN,1][i%8]"},{comments:["returning an array plays all frequencies as a chord","there is max polyphony of 4"],code:"[[440,220,110],[220,110,880]][m%2]"},{comments:["`f(b,i)` gives you `i` semitones from base frequency `b`","440Hz is A4. MAKE THIS BETTER"],code:"[0,3,5,7].map(n=>f(440,n))[b%4]"},{comments:["`r(o,t)` gives indexes for euclidean rhythm patterns","EXPLAIN THIS BETTER goto /about for more"],code:"[NaN,440][r(3,8)[b]]"},{comments:["`Math` functions are available in scope","more room for creativity WRITE SOMETHING INTERESTING"],code:"440+110*sin(t)+220*cos(2*t)"},{comments:["an attempt at twinkle twinkle little star","can you make it nicer/smaller/better?"],code:"[...'0077997~5544220~7755442~7755442~'].map(n=>f(440,n))[i%32]"},{comments:["now its your turn","remember that you are limited to 64 bytes"],code:"'HAVE FUN :)'"}];function be(a,e,t){const l=a.slice();return l[21]=e[t],l}function we(a,e,t){const l=a.slice();return l[24]=e[t],l[26]=t,l}function ke(a,e,t){const l=a.slice();l[24]=e[t],l[31]=t;const r=l[5]*H+l[6];l[27]=r;const o=l[26]*H+l[31];l[28]=o;const s=l[9](l[4],l[28],l[26],l[31]).sort(Xe);return l[29]=s,l}function Ee(a,e,t){const l=a.slice();return l[24]=e[t],l[33]=t,l}function De(a){let e,t;return{c(){e=F("svg"),t=F("path"),this.h()},l(l){e=U(l,"svg",{viewBox:!0,fill:!0,xmlns:!0,width:!0,height:!0,class:!0});var r=v(e);t=U(r,"path",{d:!0,stroke:!0,"stroke-linejoin":!0}),v(t).forEach(c),r.forEach(c),this.h()},h(){n(t,"d","M4.5 12.5v-10l7 5-7 5z"),n(t,"stroke","currentColor"),n(t,"stroke-linejoin","round"),n(e,"viewBox","0 0 15 15"),n(e,"fill","none"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"width","15"),n(e,"height","15"),n(e,"class","svelte-2ed3gb")},m(l,r){p(l,e,r),_(e,t)},d(l){l&&c(e)}}}function Oe(a){let e,t;return{c(){e=F("svg"),t=F("path"),this.h()},l(l){e=U(l,"svg",{viewBox:!0,fill:!0,xmlns:!0,width:!0,height:!0,class:!0});var r=v(e);t=U(r,"path",{d:!0,stroke:!0}),v(t).forEach(c),r.forEach(c),this.h()},h(){n(t,"d","M5.5 3v9m4-9v9"),n(t,"stroke","currentColor"),n(e,"viewBox","0 0 15 15"),n(e,"fill","none"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"width","15"),n(e,"height","15"),n(e,"class","svelte-2ed3gb")},m(l,r){p(l,e,r),_(e,t)},d(l){l&&c(e)}}}function qe(a){let e,t;return{c(){e=F("svg"),t=F("path"),this.h()},l(l){e=U(l,"svg",{viewBox:!0,fill:!0,xmlns:!0,width:!0,height:!0,class:!0});var r=v(e);t=U(r,"path",{d:!0,fill:!0}),v(t).forEach(c),r.forEach(c),this.h()},h(){n(t,"d","M3.5 10.494l.257-.429-.119-.07H3.5v.5zm0-5.996v.5h.138l.12-.071-.258-.429zm5-2.998H9a.5.5 0 00-.757-.429L8.5 1.5zm0 11.992l-.257.429A.5.5 0 009 13.492h-.5zm-5-3.498h-2v1h2v-1zm-2 0a.5.5 0 01-.5-.5H0c0 .83.672 1.5 1.5 1.5v-1zm-.5-.5V5.498H0v3.998h1zm0-3.997a.5.5 0 01.5-.499v-1a1.5 1.5 0 00-1.5 1.5h1zm.5-.499h2v-1h-2v1zm2.257-.071l5-2.998-.514-.858-5 2.998.514.858zM8 1.5v11.992h1V1.5H8zm.757 11.563l-5-2.998-.514.858 5 2.998.514-.858zM10 6v3h1V6h-1z"),n(t,"fill","currentColor"),n(e,"viewBox","0 0 15 15"),n(e,"fill","none"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"width","15"),n(e,"height","15"),n(e,"class","svelte-2ed3gb")},m(l,r){p(l,e,r),_(e,t)},d(l){l&&c(e)}}}function Pe(a){let e,t;return{c(){e=F("svg"),t=F("path"),this.h()},l(l){e=U(l,"svg",{viewBox:!0,fill:!0,xmlns:!0,width:!0,height:!0,class:!0});var r=v(e);t=U(r,"path",{d:!0,fill:!0}),v(t).forEach(c),r.forEach(c),this.h()},h(){n(t,"d","M3.5 10.494l.257-.429-.119-.07H3.5v.5zm0-5.996v.5h.138l.12-.071-.258-.429zm5-2.998H9a.5.5 0 00-.757-.429L8.5 1.5zm0 11.992l-.257.429A.5.5 0 009 13.492h-.5zm-5-3.498h-2v1h2v-1zm-2 0a.5.5 0 01-.5-.5H0c0 .83.672 1.5 1.5 1.5v-1zm-.5-.5V5.498H0v3.998h1zm0-3.997a.5.5 0 01.5-.499v-1a1.5 1.5 0 00-1.5 1.5h1zm.5-.499h2v-1h-2v1zm2.257-.071l5-2.998-.514-.858-5 2.998.514.858zM8 1.5v11.992h1V1.5H8zm.757 11.563l-5-2.998-.514.858 5 2.998.514-.858zM10 6v3h1V6h-1zm2-2v7h1V4h-1z"),n(t,"fill","currentColor"),n(e,"viewBox","0 0 15 15"),n(e,"fill","none"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"width","15"),n(e,"height","15"),n(e,"class","svelte-2ed3gb")},m(l,r){p(l,e,r),_(e,t)},d(l){l&&c(e)}}}function xe(a){let e,t;return{c(){e=F("svg"),t=F("path"),this.h()},l(l){e=U(l,"svg",{viewBox:!0,fill:!0,xmlns:!0,width:!0,height:!0,class:!0});var r=v(e);t=U(r,"path",{d:!0,fill:!0}),v(t).forEach(c),r.forEach(c),this.h()},h(){n(t,"d","M3.5 10.494l.257-.429-.119-.07H3.5v.5zm0-5.996v.5h.138l.12-.071-.258-.429zm5-2.998H9a.5.5 0 00-.757-.429L8.5 1.5zm0 11.992l-.257.429A.5.5 0 009 13.492h-.5zm-5-3.498h-2v1h2v-1zm-2 0a.5.5 0 01-.5-.5H0c0 .83.672 1.5 1.5 1.5v-1zm-.5-.5V5.498H0v3.998h1zm0-3.997a.5.5 0 01.5-.499v-1a1.5 1.5 0 00-1.5 1.5h1zm.5-.499h2v-1h-2v1zm2.257-.071l5-2.998-.514-.858-5 2.998.514.858zM8 1.5v11.992h1V1.5H8zm.757 11.563l-5-2.998-.514.858 5 2.998.514-.858zM10 6v3h1V6h-1zm2-2v7h1V4h-1zm2-2v11h1V2h-1z"),n(t,"fill","currentColor"),n(e,"viewBox","0 0 15 15"),n(e,"fill","none"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"width","15"),n(e,"height","15"),n(e,"class","svelte-2ed3gb")},m(l,r){p(l,e,r),_(e,t)},d(l){l&&c(e)}}}function je(a){let e;return{c(){e=z("div"),this.h()},l(t){e=N(t,"DIV",{class:!0,style:!0}),v(e).forEach(c),this.h()},h(){n(e,"class","note svelte-2ed3gb"),re(e,"--index",a[33]),re(e,"--scale",a[10](a[29][a[33]])),ee(e,"overlay",a[33]>0)},m(t,l){p(t,e,l)},p(t,l){l[0]&528&&re(e,"--scale",t[10](t[29][t[33]]))},d(t){t&&c(e)}}}function Ge(a){let e;return{c(){e=z("div"),this.h()},l(t){e=N(t,"DIV",{class:!0}),v(e).forEach(c),this.h()},h(){n(e,"class","note rest svelte-2ed3gb")},m(t,l){p(t,e,l)},p:he,d(t){t&&c(e)}}}function ye(a){let e,t;function l(s,h){return h[0]&528&&(e=null),e==null&&(e=!!(s[29][s[33]]===null||Number.isNaN(s[29][s[33]]))),e?Ge:je}let r=l(a,[-1,-1]),o=r(a);return{c(){o.c(),t=_e()},l(s){o.l(s),t=_e()},m(s,h){o.m(s,h),p(s,t,h)},p(s,h){r===(r=l(s,h))&&o?o.p(s,h):(o.d(1),o=r(s),o&&(o.c(),o.m(t.parentNode,t)))},d(s){o.d(s),s&&c(t)}}}function ze(a){let e,t={length:a[29].length||0},l=[];for(let r=0;r<t.length;r+=1)l[r]=ye(Ee(a,t,r));return{c(){e=z("div");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){e=N(r,"DIV",{class:!0});var o=v(e);for(let s=0;s<l.length;s+=1)l[s].l(o);o.forEach(c),this.h()},h(){n(e,"class","beat svelte-2ed3gb"),ee(e,"indicator",a[27]===a[28])},m(r,o){p(r,e,o);for(let s=0;s<l.length;s+=1)l[s].m(e,null)},p(r,o){if(o[0]&1552){t={length:r[29].length||0};let s;for(s=0;s<t.length;s+=1){const h=Ee(r,t,s);l[s]?l[s].p(h,o):(l[s]=ye(h),l[s].c(),l[s].m(e,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=t.length}o[0]&96&&ee(e,"indicator",r[27]===r[28])},d(r){r&&c(e),ne(l,r)}}}function Ne(a){let e,t,l={length:H},r=[];for(let o=0;o<l.length;o+=1)r[o]=ze(ke(a,l,o));return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=C(),t=z("div")},l(o){for(let s=0;s<r.length;s+=1)r[s].l(o);e=D(o),t=N(o,"DIV",{}),v(t).forEach(c)},m(o,s){for(let h=0;h<r.length;h+=1)r[h].m(o,s);p(o,e,s),p(o,t,s)},p(o,s){if(s[0]&1648){l={length:H};let h;for(h=0;h<l.length;h+=1){const g=ke(o,l,h);r[h]?r[h].p(g,s):(r[h]=ze(g),r[h].c(),r[h].m(e.parentNode,e))}for(;h<r.length;h+=1)r[h].d(1);r.length=l.length}},d(o){ne(r,o),o&&c(e),o&&c(t)}}}function Me(a){let e,t,l=a[21]+"",r;return{c(){e=z("label"),t=te("// "),r=te(l),this.h()},l(o){e=N(o,"LABEL",{for:!0,class:!0});var s=v(e);t=le(s,"// "),r=le(s,l),s.forEach(c),this.h()},h(){n(e,"for","code"),n(e,"class","comment svelte-2ed3gb")},m(o,s){p(o,e,s),_(e,t),_(e,r)},p(o,s){s[0]&256&&l!==(l=o[21]+"")&&Re(r,l)},d(o){o&&c(e)}}}function Qe(a){let e,t,l,r,o,s,h,g,R,m,P,k,O,K,B,W,Y,L,Z,J,E,$,T;function I(i,d){return i[7]?Oe:De}let y=I(a),f=y(a);function A(i,d){return i[1]>=.65?xe:i[1]>=.35?Pe:qe}let x=A(a),M=x(a),S={length:Q},b=[];for(let i=0;i<S.length;i+=1)b[i]=Ne(we(a,S,i));let X=a[8],w=[];for(let i=0;i<X.length;i+=1)w[i]=Me(be(a,X,i));return{c(){e=z("form"),t=z("button"),f.c(),l=C(),r=z("button"),M.c(),o=C(),s=z("input"),h=C(),g=z("div");for(let i=0;i<b.length;i+=1)b[i].c();R=C(),m=z("form");for(let i=0;i<w.length;i+=1)w[i].c();P=C(),k=z("label"),O=te("// hit `enter` to save your tune in the URL"),K=C(),B=z("label"),W=te("// to learn more about what you can do click here"),Y=C(),L=z("label"),Z=te("(t,i,m,b) =>"),J=C(),E=z("input"),this.h()},l(i){e=N(i,"FORM",{});var d=v(e);t=N(d,"BUTTON",{class:!0});var u=v(t);f.l(u),u.forEach(c),l=D(d),r=N(d,"BUTTON",{class:!0});var q=v(r);M.l(q),q.forEach(c),o=D(d),s=N(d,"INPUT",{type:!0,name:!0,step:!0,min:!0,max:!0,id:!0}),d.forEach(c),h=D(i),g=N(i,"DIV",{class:!0,style:!0});var me=v(g);for(let j=0;j<b.length;j+=1)b[j].l(me);me.forEach(c),R=D(i),m=N(i,"FORM",{class:!0});var V=v(m);for(let j=0;j<w.length;j+=1)w[j].l(V);P=D(V),k=N(V,"LABEL",{for:!0,class:!0});var fe=v(k);O=le(fe,"// hit `enter` to save your tune in the URL"),fe.forEach(c),K=D(V),B=N(V,"LABEL",{for:!0,class:!0});var de=v(B);W=le(de,"// to learn more about what you can do click here"),de.forEach(c),Y=D(V),L=N(V,"LABEL",{id:!0,for:!0,class:!0});var ve=v(L);Z=le(ve,"(t,i,m,b) =>"),ve.forEach(c),J=D(V),E=N(V,"INPUT",{id:!0,name:!0,type:!0,spellcheck:!0,autocomplete:!0,class:!0}),V.forEach(c),this.h()},h(){n(t,"class","svelte-2ed3gb"),n(r,"class","mute-button svelte-2ed3gb"),ee(r,"active",a[0]),n(s,"type","range"),n(s,"name",""),n(s,"step","0.05"),n(s,"min","0.0"),n(s,"max","1.0"),s.disabled=a[0],n(s,"id",""),n(g,"class","container svelte-2ed3gb"),re(g,"--beats",H),re(g,"--meausures",Q),n(k,"for","code"),n(k,"class","comment focused svelte-2ed3gb"),n(B,"for","code"),n(B,"class","comment focused svelte-2ed3gb"),n(L,"id","label"),n(L,"for","input"),n(L,"class","svelte-2ed3gb"),n(E,"id","input"),n(E,"name","code"),n(E,"type","text"),n(E,"spellcheck","false"),n(E,"autocomplete","off"),n(E,"class","svelte-2ed3gb"),n(m,"class","editor svelte-2ed3gb")},m(i,d){p(i,e,d),_(e,t),f.m(t,null),_(e,l),_(e,r),M.m(r,null),_(e,o),_(e,s),oe(s,a[1]),p(i,h,d),p(i,g,d);for(let u=0;u<b.length;u+=1)b[u].m(g,null);p(i,R,d),p(i,m,d);for(let u=0;u<w.length;u+=1)w[u].m(m,null);_(m,P),_(m,k),_(k,O),_(m,K),_(m,B),_(B,W),_(m,Y),_(m,L),_(L,Z),_(m,J),_(m,E),oe(E,a[3]),$||(T=[G(t,"click",ce(a[12])),G(r,"click",ce(a[13])),G(s,"change",a[14]),G(s,"input",a[14]),G(g,"click",a[15]),G(E,"input",a[16]),G(m,"submit",ce(a[17]))],$=!0)},p(i,d){if(y!==(y=I(i))&&(f.d(1),f=y(i),f&&(f.c(),f.m(t,null))),x!==(x=A(i))&&(M.d(1),M=x(i),M&&(M.c(),M.m(r,null))),d[0]&1&&ee(r,"active",i[0]),d[0]&1&&(s.disabled=i[0]),d[0]&2&&oe(s,i[1]),d[0]&1648){S={length:Q};let u;for(u=0;u<S.length;u+=1){const q=we(i,S,u);b[u]?b[u].p(q,d):(b[u]=Ne(q),b[u].c(),b[u].m(g,null))}for(;u<b.length;u+=1)b[u].d(1);b.length=S.length}if(d[0]&256){X=i[8];let u;for(u=0;u<X.length;u+=1){const q=be(i,X,u);w[u]?w[u].p(q,d):(w[u]=Me(q),w[u].c(),w[u].m(m,P))}for(;u<w.length;u+=1)w[u].d(1);w.length=X.length}d[0]&8&&E.value!==i[3]&&oe(E,i[3])},i:he,o:he,d(i){i&&c(e),f.d(),M.d(),i&&c(h),i&&c(g),ne(b,i),i&&c(R),i&&c(m),ne(w,i),$=!1,Be(T)}}}const ie=20,ue=2e4,H=8,Q=8;function Ae(a,e,t){return Math.min(Math.max(a,e),t)}const Xe=(a,e)=>e-a;function Ke(a,e,t){let l=0,r=0,o=0,s=!1,h=!1,g=.1,R;Le(()=>{W(),window.f=(y,f)=>y*1.059463**f,window.r=(y,f)=>{for(var A=null,x=[],M=0;M<f;M++){var S=Math.floor(y/f*M);x.push(S===A?0:1),A=S}return x},ae().volume.set({value:ge(g)}),R=new Ve().toDestination(),R.set({envelope:{attack:.1,decay:.5}}),R.connect(ae()),pe.scheduleRepeat(y=>{let f=O(y,r*H+o,r,o);if(Array.isArray(f))f=f.splice(0,4).map(A=>Ae(Number.parseFloat(A),ie,ue)).filter(A=>!Number.isNaN(A)),f.length&&R.triggerAttackRelease(f,"8n");else{let A=Number.parseFloat(f);Number.isNaN(A)||R.triggerAttackRelease(Ae(A,ie,ue),"8n")}t(5,r=(r+Math.floor((o+1)/H))%Q),t(6,o=(o+1)%H)},"8n");let T=requestAnimationFrame(I);function I(){T=requestAnimationFrame(I),t(4,l=Fe())}return()=>cancelAnimationFrame(T)});let m=0,P=se[0].comments,k=se[0].code,O;Array(Q).fill().map((T,I)=>Array(H).fill().map((y,f)=>Math.sqrt(((H-f)/H)**2+((Q-I)/Q)**2)));function K(T,I,y){return Ue(1-(T-ie)/(ue-ie))}const B=()=>history.pushState(null,"",`#${encodeURIComponent(k)}`),W=()=>{location.hash&&t(3,k=decodeURIComponent(location.hash.slice(1)))},Y=async()=>{await Se(),console.log("audio is ready"),t(7,s=pe.toggle().state==="started")},L=()=>t(0,h=!h);function Z(){g=Ce(this.value),t(1,g)}const J=()=>t(2,m=(m+1)%se.length);function E(){k=this.value,t(3,k),t(2,m)}const $=()=>{B()};return a.$$.update=()=>{var T,I,y;if(a.$$.dirty[0]&1&&(ae().mute=h),a.$$.dirty[0]&2&&((I=(T=ae())==null?void 0:T.volume)==null||I.rampTo(ge(g),.05)),a.$$.dirty[0]&4&&(t(3,k=se[m].code),t(8,P=(y=se[m].comments)!=null?y:[])),a.$$.dirty[0]&8)try{t(9,O=new Function("t","i","m","b",`
			try { 
        with (Math)
          return [${k}].flat()
			} catch(error){
				return [0];
			}`))}catch{t(9,O=()=>[0])}},[h,g,m,k,l,r,o,s,P,O,K,B,Y,L,Z,J,E,$]}class Ye extends Te{constructor(e){super();Ie(this,e,Ke,Qe,He,{},null,[-1,-1])}}export{Ye as default};