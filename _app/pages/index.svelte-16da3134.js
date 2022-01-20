import{S as Le,i as Ve,s as Se,l as ie,g as k,e as y,k as I,c as z,a as d,m as C,d as h,b as n,N as F,I as m,O as ce,t as J,h as K,j as Te,f as oe,P as he,Q as G,R as me,M as fe,T as Ue,v as Ie,U as x,V as ve,W as we,X as Ce,Y as Fe,Z as ke,_ as Oe,$ as De,a0 as Pe,a1 as je,G as T,H as U}from"../chunks/vendor-7004e9e3.js";import{b as ye}from"../chunks/paths-4b3c6e7e.js";const ne=[{comments:["timb(re) - musical creative coding","click play and then on the dots above to hear more!"],code:"[[0,4,7,9].map(n=>f(220,n))[m%2+b%3],-110*(1+m%2),r(5,8)[b]-1]"},{comments:["each dot is a beat, to play a note","return a frequency from 1 to 10000 hz"],code:"440"},{comments:["frequencies greater than 0 use a sine wave","while negative frequencies use a square wave"],code:"-440"},{comments:["return 0 for a click","this can be useful for drum rhythms"],code:"0"},{comments:["`m` is the current measure (0-7)","and `b`, the beat in the current mesasure (0-7)"],code:"(1 + m % 2) * 110 * [1, 2, 3, 4][b % 4]"},{comments:["`t` is for time","and `i` is index (0-63)"],code:"20 * (t % 100) * [0, 1, 2, 1][i % 4]"},{comments:["NaN, undefined and other non number values are rest notes","this allows for coding intesting rhythms"],code:"440 * [2, 1, NaN, 1][i % 4]"},{comments:["returning an array plays all frequencies as a chord","you can play a maximum of 4 notes at the same time"],code:"[[261.63, 329.628, 391.995], NaN][b % 4]"},{comments:["`f(b,i)` gives you `i` semitones from base frequency `b`","this is useful for making western tonal music (440Hz is a4)"],code:"[0, 3, 5, 7].map(n => f(440, n))[b % 4]"},{comments:["`r(o,p)` gives euclidean rhythm patterns as arrays of 1s & 0s","it spreads out `o` onsets across `p` pulses`"],code:"[NaN, 0][r(3, 8)[b]]"},{comments:["no need for `Math.`, math functions are available in scope","this gives you more room for creativity"],code:"110 * sin(t) + 220 * cos(2 * t)"},{comments:["here is my attempt at twinkle twinkle little star","can you make it nicer/smaller/better?"],code:"[...'0077997~5544220~7755442~7755442'].map(n=>f(440,n))[i%32]"},{comments:["you are limited to 64 bytes, use creative ways to shorten","eg. `b^0` is equivalent to `b!=0` (every byte counts)!"],code:"b^0 ? 440:-220"},{comments:["now its your turn","have fun!"],code:"'*your next masterpiece*'"}];function ze(o,e,t){const l=o.slice();return l[20]=e[t],l}function Ee(o,e,t){const l=o.slice();return l[23]=e[t],l[25]=t,l}function Me(o,e,t){const l=o.slice();l[23]=e[t],l[30]=t;const s=l[5]*O+l[6];l[26]=s;const a=l[25]*O+l[30];l[27]=a;const r=l[10](l[4]+l[27]*.25,l[27],l[25],l[30]).sort(xe);return l[28]=r,l}function Ne(o,e,t){const l=o.slice();return l[23]=e[t],l[32]=t,l}function Qe(o){let e,t;return{c(){e=T("svg"),t=T("path"),this.h()},l(l){e=U(l,"svg",{viewBox:!0,fill:!0,xmlns:!0,width:!0,height:!0});var s=d(e);t=U(s,"path",{d:!0,stroke:!0,"stroke-linejoin":!0}),d(t).forEach(h),s.forEach(h),this.h()},h(){n(t,"d","M4.5 12.5v-10l7 5-7 5z"),n(t,"stroke","currentColor"),n(t,"stroke-linejoin","round"),n(e,"viewBox","0 0 15 15"),n(e,"fill","none"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"width","15"),n(e,"height","15")},m(l,s){k(l,e,s),m(e,t)},d(l){l&&h(e)}}}function Xe(o){let e,t;return{c(){e=T("svg"),t=T("path"),this.h()},l(l){e=U(l,"svg",{viewBox:!0,fill:!0,xmlns:!0,width:!0,height:!0});var s=d(e);t=U(s,"path",{d:!0,stroke:!0}),d(t).forEach(h),s.forEach(h),this.h()},h(){n(t,"d","M5.5 3v9m4-9v9"),n(t,"stroke","currentColor"),n(e,"viewBox","0 0 15 15"),n(e,"fill","none"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"width","15"),n(e,"height","15")},m(l,s){k(l,e,s),m(e,t)},d(l){l&&h(e)}}}function Ge(o){let e,t;return{c(){e=T("svg"),t=T("path"),this.h()},l(l){e=U(l,"svg",{viewBox:!0,fill:!0,xmlns:!0,width:!0,height:!0});var s=d(e);t=U(s,"path",{d:!0,fill:!0}),d(t).forEach(h),s.forEach(h),this.h()},h(){n(t,"d","M3.5 10.494l.257-.429-.119-.07H3.5v.5zm0-5.996v.5h.138l.12-.071-.258-.429zm5-2.998H9a.5.5 0 00-.757-.429L8.5 1.5zm0 11.992l-.257.429A.5.5 0 009 13.492h-.5zm-5-3.498h-2v1h2v-1zm-2 0a.5.5 0 01-.5-.5H0c0 .83.672 1.5 1.5 1.5v-1zm-.5-.5V5.498H0v3.998h1zm0-3.997a.5.5 0 01.5-.499v-1a1.5 1.5 0 00-1.5 1.5h1zm.5-.499h2v-1h-2v1zm2.257-.071l5-2.998-.514-.858-5 2.998.514.858zM8 1.5v11.992h1V1.5H8zm.757 11.563l-5-2.998-.514.858 5 2.998.514-.858zM10 6v3h1V6h-1z"),n(t,"fill","currentColor"),n(e,"viewBox","0 0 15 15"),n(e,"fill","none"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"width","15"),n(e,"height","15")},m(l,s){k(l,e,s),m(e,t)},d(l){l&&h(e)}}}function We(o){let e,t;return{c(){e=T("svg"),t=T("path"),this.h()},l(l){e=U(l,"svg",{viewBox:!0,fill:!0,xmlns:!0,width:!0,height:!0});var s=d(e);t=U(s,"path",{d:!0,fill:!0}),d(t).forEach(h),s.forEach(h),this.h()},h(){n(t,"d","M3.5 10.494l.257-.429-.119-.07H3.5v.5zm0-5.996v.5h.138l.12-.071-.258-.429zm5-2.998H9a.5.5 0 00-.757-.429L8.5 1.5zm0 11.992l-.257.429A.5.5 0 009 13.492h-.5zm-5-3.498h-2v1h2v-1zm-2 0a.5.5 0 01-.5-.5H0c0 .83.672 1.5 1.5 1.5v-1zm-.5-.5V5.498H0v3.998h1zm0-3.997a.5.5 0 01.5-.499v-1a1.5 1.5 0 00-1.5 1.5h1zm.5-.499h2v-1h-2v1zm2.257-.071l5-2.998-.514-.858-5 2.998.514.858zM8 1.5v11.992h1V1.5H8zm.757 11.563l-5-2.998-.514.858 5 2.998.514-.858zM10 6v3h1V6h-1zm2-2v7h1V4h-1z"),n(t,"fill","currentColor"),n(e,"viewBox","0 0 15 15"),n(e,"fill","none"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"width","15"),n(e,"height","15")},m(l,s){k(l,e,s),m(e,t)},d(l){l&&h(e)}}}function Ye(o){let e,t;return{c(){e=T("svg"),t=T("path"),this.h()},l(l){e=U(l,"svg",{viewBox:!0,fill:!0,xmlns:!0,width:!0,height:!0});var s=d(e);t=U(s,"path",{d:!0,fill:!0}),d(t).forEach(h),s.forEach(h),this.h()},h(){n(t,"d","M3.5 10.494l.257-.429-.119-.07H3.5v.5zm0-5.996v.5h.138l.12-.071-.258-.429zm5-2.998H9a.5.5 0 00-.757-.429L8.5 1.5zm0 11.992l-.257.429A.5.5 0 009 13.492h-.5zm-5-3.498h-2v1h2v-1zm-2 0a.5.5 0 01-.5-.5H0c0 .83.672 1.5 1.5 1.5v-1zm-.5-.5V5.498H0v3.998h1zm0-3.997a.5.5 0 01.5-.499v-1a1.5 1.5 0 00-1.5 1.5h1zm.5-.499h2v-1h-2v1zm2.257-.071l5-2.998-.514-.858-5 2.998.514.858zM8 1.5v11.992h1V1.5H8zm.757 11.563l-5-2.998-.514.858 5 2.998.514-.858zM10 6v3h1V6h-1zm2-2v7h1V4h-1zm2-2v11h1V2h-1z"),n(t,"fill","currentColor"),n(e,"viewBox","0 0 15 15"),n(e,"fill","none"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"width","15"),n(e,"height","15")},m(l,s){k(l,e,s),m(e,t)},d(l){l&&h(e)}}}function Ze(o){let e;return{c(){e=y("div"),this.h()},l(t){e=z(t,"DIV",{class:!0}),d(e).forEach(h),this.h()},h(){n(e,"class","note rest svelte-19q7hp")},m(t,l){k(t,e,l)},p:fe,d(t){t&&h(e)}}}function Je(o){let e;return{c(){e=y("div"),this.h()},l(t){e=z(t,"DIV",{class:!0,style:!0}),d(e).forEach(h),this.h()},h(){n(e,"class","note svelte-19q7hp"),oe(e,"--index",o[32]),oe(e,"--scale",o[12](o[28][o[32]],o[26]-o[27])),F(e,"overlay",o[32]>0),F(e,"click",o[28][o[32]]===0),F(e,"triangle",o[28][o[32]]<0)},m(t,l){k(t,e,l)},p(t,l){l[0]&1136&&oe(e,"--scale",t[12](t[28][t[32]],t[26]-t[27])),l[0]&1040&&F(e,"click",t[28][t[32]]===0),l[0]&1040&&F(e,"triangle",t[28][t[32]]<0)},d(t){t&&h(e)}}}function qe(o){let e,t;function l(r,c){return c[0]&1040&&(e=null),e==null&&(e=r[28][r[32]]!=null&&!Number.isNaN(r[28][r[32]])),e?Je:Ze}let s=l(o,[-1,-1]),a=s(o);return{c(){a.c(),t=ie()},l(r){a.l(r),t=ie()},m(r,c){a.m(r,c),k(r,t,c)},p(r,c){s===(s=l(r,c))&&a?a.p(r,c):(a.d(1),a=s(r),a&&(a.c(),a.m(t.parentNode,t)))},d(r){a.d(r),r&&h(t)}}}function Ae(o){let e,t,l={length:o[28].length||0},s=[];for(let a=0;a<l.length;a+=1)s[a]=qe(Ne(o,l,a));return{c(){e=y("div");for(let a=0;a<s.length;a+=1)s[a].c();t=I(),this.h()},l(a){e=z(a,"DIV",{class:!0});var r=d(e);for(let c=0;c<s.length;c+=1)s[c].l(r);t=C(r),r.forEach(h),this.h()},h(){n(e,"class","beat svelte-19q7hp"),F(e,"indicator",o[26]===o[27])},m(a,r){k(a,e,r);for(let c=0;c<s.length;c+=1)s[c].m(e,null);m(e,t)},p(a,r){if(r[0]&5232){l={length:a[28].length||0};let c;for(c=0;c<l.length;c+=1){const p=Ne(a,l,c);s[c]?s[c].p(p,r):(s[c]=qe(p),s[c].c(),s[c].m(e,t))}for(;c<s.length;c+=1)s[c].d(1);s.length=l.length}r[0]&96&&F(e,"indicator",a[26]===a[27])},d(a){a&&h(e),ce(s,a)}}}function Re(o){let e,t={length:O},l=[];for(let s=0;s<t.length;s+=1)l[s]=Ae(Me(o,t,s));return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=ie()},l(s){for(let a=0;a<l.length;a+=1)l[a].l(s);e=ie()},m(s,a){for(let r=0;r<l.length;r+=1)l[r].m(s,a);k(s,e,a)},p(s,a){if(a[0]&5232){t={length:O};let r;for(r=0;r<t.length;r+=1){const c=Me(s,t,r);l[r]?l[r].p(c,a):(l[r]=Ae(c),l[r].c(),l[r].m(e.parentNode,e))}for(;r<l.length;r+=1)l[r].d(1);l.length=t.length}},d(s){ce(l,s),s&&h(e)}}}function Be(o){let e,t,l=o[20]+"",s;return{c(){e=y("label"),t=J("// "),s=J(l),this.h()},l(a){e=z(a,"LABEL",{for:!0,class:!0});var r=d(e);t=K(r,"// "),s=K(r,l),r.forEach(h),this.h()},h(){n(e,"for","code"),n(e,"class","comment svelte-19q7hp")},m(a,r){k(a,e,r),m(e,t),m(e,s)},p(a,r){r[0]&512&&l!==(l=a[20]+"")&&Te(s,l)},d(a){a&&h(e)}}}function Ke(o){let e,t,l,s,a,r,c,p,B,f,H,q,D,A,$,P,ee,te,W,L,le,se,v,E,R;function V(i,_){return i[8]?Xe:Qe}let M=V(o),g=M(o);function re(i,_){return i[1]>=.65?Ye:i[1]>=.35?We:Ge}let j=re(o),N=j(o),Y={length:ae},b=[];for(let i=0;i<Y.length;i+=1)b[i]=Re(Ee(o,Y,i));let Z=o[9],w=[];for(let i=0;i<Z.length;i+=1)w[i]=Be(ze(o,Z,i));return{c(){e=y("form"),t=y("button"),g.c(),l=I(),s=y("button"),N.c(),a=I(),r=y("input"),c=I(),p=y("div");for(let i=0;i<b.length;i+=1)b[i].c();B=I(),f=y("form"),H=y("label"),q=J("// hit `enter` to save your code in the URL"),D=I(),A=y("label"),$=J("// to learn more click on the dots above or "),P=y("a"),ee=J("here"),te=I();for(let i=0;i<w.length;i+=1)w[i].c();W=I(),L=y("label"),le=J("(t,i,m,b) =>"),se=I(),v=y("input"),this.h()},l(i){e=z(i,"FORM",{});var _=d(e);t=z(_,"BUTTON",{});var u=d(t);g.l(u),u.forEach(h),l=C(_),s=z(_,"BUTTON",{class:!0});var Q=d(s);N.l(Q),Q.forEach(h),a=C(_),r=z(_,"INPUT",{type:!0,name:!0,step:!0,min:!0,max:!0,id:!0}),_.forEach(h),c=C(i),p=z(i,"DIV",{class:!0,style:!0});var de=d(p);for(let X=0;X<b.length;X+=1)b[X].l(de);de.forEach(h),B=C(i),f=z(i,"FORM",{class:!0});var S=d(f);H=z(S,"LABEL",{for:!0,class:!0});var pe=d(H);q=K(pe,"// hit `enter` to save your code in the URL"),pe.forEach(h),D=C(S),A=z(S,"LABEL",{for:!0,class:!0});var ue=d(A);$=K(ue,"// to learn more click on the dots above or "),P=z(ue,"A",{href:!0});var ge=d(P);ee=K(ge,"here"),ge.forEach(h),ue.forEach(h),te=C(S);for(let X=0;X<w.length;X+=1)w[X].l(S);W=C(S),L=z(S,"LABEL",{id:!0,for:!0,class:!0});var be=d(L);le=K(be,"(t,i,m,b) =>"),be.forEach(h),se=C(S),v=z(S,"INPUT",{id:!0,name:!0,type:!0,spellcheck:!0,autocomplete:!0,maxlength:!0,class:!0}),S.forEach(h),this.h()},h(){n(s,"class","mute-button"),F(s,"active",o[0]),n(r,"type","range"),n(r,"name",""),n(r,"step","0.1"),n(r,"min","0.0"),n(r,"max","1.0"),r.disabled=o[0],n(r,"id",""),n(p,"class","container svelte-19q7hp"),oe(p,"--beats",O),oe(p,"--meausures",ae),n(H,"for","code"),n(H,"class","comment focused svelte-19q7hp"),n(P,"href",""+(ye+"/about")),n(A,"for","code"),n(A,"class","comment focused svelte-19q7hp"),n(L,"id","label"),n(L,"for","code"),n(L,"class","svelte-19q7hp"),n(v,"id","input"),n(v,"name","code"),n(v,"type","text"),n(v,"spellcheck","false"),n(v,"autocomplete","off"),n(v,"maxlength","64"),n(v,"class","svelte-19q7hp"),n(f,"class","editor svelte-19q7hp")},m(i,_){k(i,e,_),m(e,t),g.m(t,null),m(e,l),m(e,s),N.m(s,null),m(e,a),m(e,r),he(r,o[1]),k(i,c,_),k(i,p,_);for(let u=0;u<b.length;u+=1)b[u].m(p,null);k(i,B,_),k(i,f,_),m(f,H),m(H,q),m(f,D),m(f,A),m(A,$),m(A,P),m(P,ee),m(f,te);for(let u=0;u<w.length;u+=1)w[u].m(f,null);m(f,W),m(f,L),m(L,le),m(f,se),m(f,v),he(v,o[3]),E||(R=[G(t,"click",me(o[13])),G(s,"click",me(o[14])),G(r,"change",o[15]),G(r,"input",o[15]),G(p,"click",o[16]),G(v,"input",o[17]),G(f,"submit",me(o[18]))],E=!0)},p(i,_){if(M!==(M=V(i))&&(g.d(1),g=M(i),g&&(g.c(),g.m(t,null))),j!==(j=re(i))&&(N.d(1),N=j(i),N&&(N.c(),N.m(s,null))),_[0]&1&&F(s,"active",i[0]),_[0]&1&&(r.disabled=i[0]),_[0]&2&&he(r,i[1]),_[0]&5232){Y={length:ae};let u;for(u=0;u<Y.length;u+=1){const Q=Ee(i,Y,u);b[u]?b[u].p(Q,_):(b[u]=Re(Q),b[u].c(),b[u].m(p,null))}for(;u<b.length;u+=1)b[u].d(1);b.length=Y.length}if(_[0]&512){Z=i[9];let u;for(u=0;u<Z.length;u+=1){const Q=ze(i,Z,u);w[u]?w[u].p(Q,_):(w[u]=Be(Q),w[u].c(),w[u].m(f,W))}for(;u<w.length;u+=1)w[u].d(1);w.length=Z.length}_[0]&8&&v.value!==i[3]&&he(v,i[3])},i:fe,o:fe,d(i){i&&h(e),g.d(),N.d(),i&&h(c),i&&h(p),ce(b,i),i&&h(B),i&&h(f),ce(w,i),E=!1,Ue(R)}}}const _e=1e4,O=8,ae=8;function He(o,e,t){return Math.min(Math.max(o,e),t)}const xe=(o,e)=>e-o;function $e(o,e,t){let l=0,s=0,a=0,r=!1,c=!1,p=!1,B=.2;Ie(()=>{$(),window.f=(V,M)=>V*1.059463**M,window.r=(V,M)=>{for(var g=null,re=[],j=0;j<M;j++){var N=Math.floor(V/M*j);re.push(N===g?0:1),g=N}return re},x().volume.set({value:ve(B)});const v=new we,E=new we,R=new Ce({urls:{C3:"/click.mp3"},release:1,baseUrl:ye});E.set({oscillator:{type:"sine"},envelope:{attack:.2,decay:.5,release:1}}),E.set({detune:.1,volume:ve(.2),oscillator:{type:"square"},envelope:{attack:.05,decay:.1}}),v.connect(x()),E.connect(x()),R.connect(x()),t(4,l=Fe()),ke.scheduleRepeat(V=>{t(4,l=V);let M=D(V,s*O+a,s,a);Array.isArray(M)&&M.forEach(g=>{g===0?R.triggerAttackRelease("C3","16n"):g>0?v.triggerAttackRelease(He(g,1,_e),"8n"):E.triggerAttackRelease(He(Math.abs(g),1,_e),"8n")}),t(5,s=(s+Math.floor((a+1)/O))%ae),t(6,a=(a+1)%O)},"8n")});let f=0,H=ne[0].comments,q=ne[0].code,D;const A=()=>history.pushState(null,"",`#${encodeURIComponent(q)}`),$=()=>{location.hash&&t(3,q=decodeURIComponent(location.hash.slice(1)))},P=(v,E)=>{const R=Math.abs(E/(ae*O));return v===0?1.25-.75*Oe(R):De(1-Math.abs(v/_e))*(1-R/2)},ee=async()=>{r||(await Pe(),t(7,r=!0),console.log("Audio is ready!")),t(8,c=ke.toggle().state==="started")},te=()=>t(0,p=!p);function W(){B=je(this.value),t(1,B)}const L=()=>t(2,f=(f+1)%ne.length);function le(){q=this.value,t(3,q),t(2,f)}const se=()=>{A()};return o.$$.update=()=>{var v,E,R;if(o.$$.dirty[0]&1&&(x().mute=p),o.$$.dirty[0]&2&&((E=(v=x())==null?void 0:v.volume)==null||E.rampTo(ve(B),.05)),o.$$.dirty[0]&4&&(t(3,q=ne[f].code),t(9,H=(R=ne[f].comments)!=null?R:[])),o.$$.dirty[0]&8)try{t(10,D=new Function("t","i","m","b",`
			try { 
        with (Math)
          return [${q}].flat().splice(0,4).map(n => Number.parseFloat(n)).filter(n => n != null && !Number.isNaN(n));
			} catch(error){
				return [0];
			}`))}catch{t(10,D=()=>[0])}},[p,B,f,q,l,s,a,r,c,H,D,A,P,ee,te,W,L,le,se]}class lt extends Le{constructor(e){super();Ve(this,e,$e,Ke,Se,{},null,[-1,-1])}}export{lt as default};
