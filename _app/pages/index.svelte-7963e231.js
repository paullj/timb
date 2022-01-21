import{M as He,S as Qe,i as Xe,s as We,l as Le,g as B,e as w,k as z,c as E,a as T,m as H,d as f,b as _,N as O,H as m,f as me,O as pe,t as R,h as L,j as ve,P as Ae,Q as $,R as he,L as Se,T as Ye,U as Ze,v as Ge,V as ae,W as ke,X as qe,Y as Fe,Z as Je,_ as Ke,$ as ge,a0 as xe,a1 as $e,a2 as et}from"../chunks/vendor-cba33907.js";import{b as Ue}from"../chunks/paths-4b3c6e7e.js";const fe=[{comments:["timb(re) - musical creative coding","click play and then on the dots above to hear more!"],code:"[[220,277,330,370][m%2+b%3],55*(r(3,8)[b]-1),110*(1+m%2),1/0]"},{comments:["each dot is a beat, to play a note","return a frequency from 1 to 10000 hz"],code:"440"},{comments:["frequencies greater than 0 play a sine wave","while negative frequencies play a square wave"],code:"-440"},{comments:["return 0 for a kick drum","infinity for hi hats and negative infinity for snare"],code:"0"},{comments:["`m` is the current measure (0-7)","and `b`, the beat in the current mesasure (0-7)"],code:"(1 + m % 2) * 110 * [1, 2, 3, 4][b % 4]"},{comments:["`t` is for time","and `i` is index (0-63)"],code:"20 * (t % 100) * [1, 2, 3, 2][i % 4]"},{comments:["NaN, undefined and other non number values are rest notes","this allows for coding intesting rhythms"],code:"440 * [2, 1, NaN, 1][i % 4]"},{comments:["returning an array plays all frequencies as a chord","you can play a maximum of 4 notes at the same time"],code:"[[261.63, 329.628, 391.995], NaN][b % 4]"},{comments:["`f(b,i)` gives you `i` semitones from base frequency `b`","this is useful for making western tonal music (440Hz is a4)"],code:"[0, 4, 7, 4, 2, -2, 5, 4].map(n => f(440, n))[b % 8]"},{comments:["`r(o,p)` returns euclidean rhythms as an array of 0s and 1s","it spreads out `o` onsets across `p` pulses (more on /about)"],code:"[NaN, 0][r(3, 8)[b]]"},{comments:["no need for `Math.`, math functions are available in scope","this gives you more room for creativity"],code:"110 * sin(t) + 220 * cos(2 * t)"},{comments:["here is my attempt at twinkle twinkle little star","can you make it nicer/smaller/better?"],code:"[...'0077997~5544220~7755442~7755442'].map(n=>f(440,n))[i%32]"},{comments:["you are limited to 64 bytes, use creative ways to shorten","eg. `b^0` is equivalent to `b!=0`, every byte counts!"],code:"b^0?440:-220"},{comments:[" more examples:","a nice chord progression in c major"],code:"[0,5,7,2].map(n=>[0,16,7,12].map(x=>f(131,n+x)))[[1][i%2]*m%4]"},{comments:["how about some drums?","`1/0` is equal to infinity, useful for hi-hats and snares"],code:"[[,0][r(2+m%2,8)[b]],[-1/0][(b+2)%4],1/0,-10*(4+m%2)]"},{comments:["you can use `random()` to add probability to you music","combine it with logic operators to add variation to beats"],code:"[(b%4^0&&random()>.1)*-90,-(m%3+1)*30*[1,2,3][b%3],[360][b%5]]"},{comments:["now its your turn","have fun!"],code:"'*your next masterpiece*'"}],tt=()=>{const o=He("__svelte__");return{page:{subscribe:o.page.subscribe},navigating:{subscribe:o.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:o.navigating.subscribe}},session:o.session}},st={subscribe(o){return tt().page.subscribe(o)}};function Pe(o,t,e){const s=o.slice();return s[27]=t[e],s}function Be(o,t,e){const s=o.slice();return s[30]=t[e],s[32]=e,s}function Ce(o,t,e){const s=o.slice();s[30]=t[e],s[36]=t,s[37]=e;const l=s[7]*Q+s[8];s[33]=l;const r=s[32]*Q+s[37];s[34]=r;const a=s[12](s[6]+(s[33]-s[34])*.25,s[34],s[32],s[37]).sort(o[21]);return s[35]=a,s}function Oe(o,t,e){const s=o.slice();s[30]=t[e],s[40]=e;const l=s[35][s[40]];return s[38]=l,s}function ot(o){let t;return{c(){t=R("play")},l(e){t=L(e,"play")},m(e,s){B(e,t,s)},d(e){e&&f(t)}}}function lt(o){let t;return{c(){t=R("pause")},l(e){t=L(e,"pause")},m(e,s){B(e,t,s)},d(e){e&&f(t)}}}function De(o){let t;return{c(){t=w("div"),this.h()},l(e){t=E(e,"DIV",{class:!0}),T(t).forEach(f),this.h()},h(){_(t,"class","note rest svelte-1ku1ct0")},m(e,s){B(e,t,s)},d(e){e&&f(t)}}}function Ie(o){let t;return{c(){t=w("div"),this.h()},l(e){t=E(e,"DIV",{class:!0,style:!0}),T(t).forEach(f),this.h()},h(){_(t,"class","note svelte-1ku1ct0"),me(t,"--index",o[40]),me(t,"--scale",o[14](o[35][o[40]],o[33]-o[34])),O(t,"overlay",o[40]>0),O(t,"drum",o[15](o[38])),O(t,"square",o[38]<0&&!o[15](o[38]))},m(e,s){B(e,t,s)},p(e,s){s[0]&4544&&me(t,"--scale",e[14](e[35][e[40]],e[33]-e[34])),s[0]&37312&&O(t,"drum",e[15](e[38])),s[0]&37312&&O(t,"square",e[38]<0&&!e[15](e[38]))},d(e){e&&f(t)}}}function je(o){let t,e,s={length:o[35].length||0},l=[];for(let a=0;a<s.length;a+=1)l[a]=Ie(Oe(o,s,a));let r=null;return s.length||(r=De()),{c(){t=w("div");for(let a=0;a<l.length;a+=1)l[a].c();r&&r.c(),e=z(),this.h()},l(a){t=E(a,"DIV",{class:!0});var d=T(t);for(let i=0;i<l.length;i+=1)l[i].l(d);r&&r.l(d),e=H(d),d.forEach(f),this.h()},h(){_(t,"class","beat svelte-1ku1ct0"),O(t,"indicator",o[33]===o[34])},m(a,d){B(a,t,d);for(let i=0;i<l.length;i+=1)l[i].m(t,null);r&&r.m(t,null),m(t,e)},p(a,d){if(d[0]&53696){s={length:a[35].length||0};let i;for(i=0;i<s.length;i+=1){const U=Oe(a,s,i);l[i]?l[i].p(U,d):(l[i]=Ie(U),l[i].c(),l[i].m(t,e))}for(;i<l.length;i+=1)l[i].d(1);l.length=s.length,s.length?r&&(r.d(1),r=null):r||(r=De(),r.c(),r.m(t,e))}d[0]&384&&O(t,"indicator",a[33]===a[34])},d(a){a&&f(t),pe(l,a),r&&r.d()}}}function Ve(o){let t,e={length:Q},s=[];for(let l=0;l<e.length;l+=1)s[l]=je(Ce(o,e,l));return{c(){for(let l=0;l<s.length;l+=1)s[l].c();t=Le()},l(l){for(let r=0;r<s.length;r+=1)s[r].l(l);t=Le()},m(l,r){for(let a=0;a<s.length;a+=1)s[a].m(l,r);B(l,t,r)},p(l,r){if(r[0]&53696){e={length:Q};let a;for(a=0;a<e.length;a+=1){const d=Ce(l,e,a);s[a]?s[a].p(d,r):(s[a]=je(d),s[a].c(),s[a].m(t.parentNode,t))}for(;a<s.length;a+=1)s[a].d(1);s.length=e.length}},d(l){pe(s,l),l&&f(t)}}}function ze(o){let t,e,s=o[27]+"",l;return{c(){t=w("label"),e=R("// "),l=R(s),this.h()},l(r){t=E(r,"LABEL",{for:!0,class:!0});var a=T(t);e=L(a,"// "),l=L(a,s),a.forEach(f),this.h()},h(){_(t,"for","code"),_(t,"class","comment svelte-1ku1ct0")},m(r,a){B(r,t,a),m(t,e),m(t,l)},p(r,a){a[0]&2048&&s!==(s=r[27]+"")&&ve(l,s)},d(r){r&&f(t)}}}function at(o){let t,e,s,l,r,a,d,i,U=(o[1]?"unmute":"mute")+"",D,X,g,I,W=(2*o[5]).toFixed(2)+"",P,J,ee,A,te,p,S,ne,re,C,ce,j,ie,ue,u,v,k,q,M,b,Y,Z;function K(n,h){return n[10]?lt:ot}let se=K(o),F=se(o),oe={length:de},y=[];for(let n=0;n<oe.length;n+=1)y[n]=Ve(Be(o,oe,n));let le=o[11],N=[];for(let n=0;n<le.length;n+=1)N[n]=ze(Pe(o,le,n));return{c(){t=w("form"),e=w("button"),F.c(),s=z(),l=w("button"),r=R("stop"),d=z(),i=w("button"),D=R(U),X=z(),g=w("button"),I=R("volume ("),P=R(W),J=R(")"),ee=z(),A=w("div");for(let n=0;n<y.length;n+=1)y[n].c();te=z(),p=w("form"),S=w("label"),ne=R("// hit `enter` to save your code in the URL"),re=z(),C=w("label"),ce=R("// click on the dots above or go to "),j=w("a"),ie=R("/about"),ue=R(" for more info"),u=z();for(let n=0;n<N.length;n+=1)N[n].c();v=z(),k=w("label"),q=R("(t,i,m,b) =>"),M=z(),b=w("input"),this.h()},l(n){t=E(n,"FORM",{class:!0});var h=T(t);e=E(h,"BUTTON",{});var c=T(e);F.l(c),c.forEach(f),s=H(h),l=E(h,"BUTTON",{});var G=T(l);r=L(G,"stop"),G.forEach(f),d=H(h),i=E(h,"BUTTON",{class:!0});var we=T(i);D=L(we,U),we.forEach(f),X=H(h),g=E(h,"BUTTON",{class:!0});var be=T(g);I=L(be,"volume ("),P=L(be,W),J=L(be,")"),be.forEach(f),h.forEach(f),ee=H(n),A=E(n,"DIV",{class:!0,style:!0});var Ee=T(A);for(let x=0;x<y.length;x+=1)y[x].l(Ee);Ee.forEach(f),te=H(n),p=E(n,"FORM",{class:!0});var V=T(p);S=E(V,"LABEL",{for:!0,class:!0});var Te=T(S);ne=L(Te,"// hit `enter` to save your code in the URL"),Te.forEach(f),re=H(V),C=E(V,"LABEL",{for:!0,class:!0});var _e=T(C);ce=L(_e,"// click on the dots above or go to "),j=E(_e,"A",{id:!0,href:!0,class:!0});var Me=T(j);ie=L(Me,"/about"),Me.forEach(f),ue=L(_e," for more info"),_e.forEach(f),u=H(V);for(let x=0;x<N.length;x+=1)N[x].l(V);v=H(V),k=E(V,"LABEL",{id:!0,for:!0});var Re=T(k);q=L(Re,"(t,i,m,b) =>"),Re.forEach(f),M=H(V),b=E(V,"INPUT",{id:!0,name:!0,type:!0,spellcheck:!0,autocomplete:!0,maxlength:!0}),V.forEach(f),this.h()},h(){l.disabled=a=o[7]+o[8]===0&&!o[10],_(i,"class","mute-button"),O(i,"active",o[1]),_(g,"class","mute-button"),g.disabled=o[1],O(g,"active",o[1]),_(t,"class","controls svelte-1ku1ct0"),_(A,"class","container svelte-1ku1ct0"),me(A,"--beats",Q),me(A,"--meausures",de),_(S,"for","code"),_(S,"class","comment focus-only svelte-1ku1ct0"),_(j,"id","about"),_(j,"href",""+(Ue+"/about")),_(j,"class","svelte-1ku1ct0"),_(C,"for","code"),_(C,"class","comment focus-only svelte-1ku1ct0"),_(k,"id","label"),_(k,"for","code"),_(b,"id","input"),_(b,"name","code"),_(b,"type","text"),_(b,"spellcheck","false"),_(b,"autocomplete","off"),_(b,"maxlength","64"),_(p,"class","editor svelte-1ku1ct0")},m(n,h){B(n,t,h),m(t,e),F.m(e,null),m(t,s),m(t,l),m(l,r),m(t,d),m(t,i),m(i,D),m(t,X),m(t,g),m(g,I),m(g,P),m(g,J),B(n,ee,h),B(n,A,h);for(let c=0;c<y.length;c+=1)y[c].m(A,null);B(n,te,h),B(n,p,h),m(p,S),m(S,ne),m(p,re),m(p,C),m(C,ce),m(C,j),m(j,ie),m(C,ue),m(p,u);for(let c=0;c<N.length;c+=1)N[c].m(p,null);m(p,v),m(p,k),m(k,q),m(p,M),m(p,b),Ae(b,o[4]),Y||(Z=[$(e,"click",he(o[17])),$(l,"click",he(o[18])),$(i,"click",he(o[19])),$(g,"click",he(o[20])),$(A,"click",o[22]),$(b,"input",o[23]),$(p,"submit",he(o[13]))],Y=!0)},p(n,h){if(se!==(se=K(n))&&(F.d(1),F=se(n),F&&(F.c(),F.m(e,null))),h[0]&1408&&a!==(a=n[7]+n[8]===0&&!n[10])&&(l.disabled=a),h[0]&2&&U!==(U=(n[1]?"unmute":"mute")+"")&&ve(D,U),h[0]&2&&O(i,"active",n[1]),h[0]&32&&W!==(W=(2*n[5]).toFixed(2)+"")&&ve(P,W),h[0]&2&&(g.disabled=n[1]),h[0]&2&&O(g,"active",n[1]),h[0]&53696){oe={length:de};let c;for(c=0;c<oe.length;c+=1){const G=Be(n,oe,c);y[c]?y[c].p(G,h):(y[c]=Ve(G),y[c].c(),y[c].m(A,null))}for(;c<y.length;c+=1)y[c].d(1);y.length=oe.length}if(h[0]&2048){le=n[11];let c;for(c=0;c<le.length;c+=1){const G=Pe(n,le,c);N[c]?N[c].p(G,h):(N[c]=ze(G),N[c].c(),N[c].m(p,v))}for(;c<N.length;c+=1)N[c].d(1);N.length=le.length}h[0]&16&&b.value!==n[4]&&Ae(b,n[4])},i:Se,o:Se,d(n){n&&f(t),F.d(),n&&f(ee),n&&f(A),pe(y,n),n&&f(te),n&&f(p),pe(N,n),Y=!1,Ye(Z)}}}const ye=1e4;let Q=8,de=8;function Ne(o,t,e){return Math.min(Math.max(o,t),e)}function nt(o,t,e){let s,l;Ze(o,st,u=>e(24,l=u));let r=0,a=0,d=0,i=!1,U=!1,D=!1,X=0,g;Ge(()=>{A(),window.f=(q,M)=>q*1.059463**M,window.r=(q,M)=>{for(var b=null,Y=[],Z=0;Z<M;Z++){var K=Math.floor(q/M*Z);Y.push(K===b?0:1),b=K}return Y};const u=new Fe,v=new Fe,k=new Je({urls:{C3:"/kick.mp3",C4:"/snare.mp3",C5:"/hat.mp3"},baseUrl:Ue});v.set({oscillator:{type:"sine"},envelope:{attack:.2,decay:.5,release:1}}),v.set({detune:.1,volume:ke(.2),oscillator:{type:"square"},envelope:{attack:.05,decay:.1}}),u.connect(ae()),v.connect(ae()),k.connect(ae()),e(6,r=Ke()),ge.scheduleRepeat(q=>{e(6,r=q);let M=J(q,a*Q+d,a,d);Array.isArray(M)&&M.forEach(b=>{S(b)?b>0?k.triggerAttackRelease("C5","16n"):b<0?k.triggerAttackRelease("C4","16n"):k.triggerAttackRelease("C3","16n"):b>0?u.triggerAttackRelease(Ne(b,1,ye),"8n"):v.triggerAttackRelease(Ne(Math.abs(b),1,ye),"8n")}),e(7,a=(a+Math.floor((d+1)/Q))%de),e(8,d=(d+1)%Q)},"8n")});let I=0,W=fe[0].comments,P=fe[0].code,J;const ee=()=>{let u=new URLSearchParams(l.url.searchParams.toString());u.set("code",P),history.pushState(null,"",`?${u.toString()}`)},A=()=>{l.url.searchParams.has("code")&&e(4,P=l.url.searchParams.get("code")),l.url.searchParams.has("bpm")&&e(0,ge.bpm.value=Ne(l.url.searchParams.get("bpm"),1,500),qe)},te=(u,v)=>{const k=Math.abs(v/(de*Q));return S(u)?(2-xe(k)**2)/1.75*(u===0?1:u>0?.5:.8):$e(1-Math.abs(u/ye))*(1-k/2)},p=u=>Number.isNaN(u)||u==null,S=u=>u===0||!Number.isFinite(u),ne=async()=>{i||(await et(),e(9,i=!0),console.log("Audio is ready!")),e(10,U=ge.toggle().state==="started")},re=()=>{ge.stop(),e(10,U=!1),e(7,a=e(8,d=0))},C=()=>e(1,D=!D),ce=()=>e(2,X=(X+1)%4),j=(u,v)=>(S(u)&&(u=0),S(v)&&(v=0),v-u),ie=()=>e(3,I=Math.min(I+1,fe.length-1));function ue(){P=this.value,e(4,P),e(3,I)}return o.$$.update=()=>{var u,v,k,q,M;o.$$.dirty[0]&4&&e(5,s=(X+1)/8),o.$$.dirty[0]&65571&&(g&&clearTimeout(g),(v=(u=ae())==null?void 0:u.volume)==null||v.rampTo(ke(D?0:s),.3),e(16,g=setTimeout(()=>ae().mute=D,300))),o.$$.dirty[0]&33&&((q=(k=ae())==null?void 0:k.volume)==null||q.rampTo(ke(s),.3)),o.$$.dirty[0]&8&&(e(4,P=fe[I].code),e(11,W=(M=fe[I].comments)!=null?M:[])),o.$$.dirty[0]&16&&e(12,J=(b,Y,Z,K)=>{try{return new Function("t","i","m","b",`
          try { 
            with (Math)
              return [${P}];
          } catch(error){
            return [NaN];
          }`)(b,Y,Z,K).flat().splice(0,4).map(F=>Number.parseFloat(F)).filter(F=>!p(F))}catch{return[NaN]}})},[qe,D,X,I,P,s,r,a,d,i,U,W,J,ee,te,S,g,ne,re,C,ce,j,ie,ue]}class it extends Qe{constructor(t){super();Xe(this,t,nt,at,We,{},null,[-1,-1])}}export{it as default};
