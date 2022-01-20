import{S as Oe,i as Qe,s as Te,e as t,t as r,k as c,c as a,a as l,h as n,d as s,m as d,b as He,g as We,I as e,M as Ve}from"../chunks/vendor-ce8ace9e.js";function Xe(Ne){let i,w,F,E,G,J,K,N,m,L,O,Q,P,T,W,o,R,X,Y,B,Z,$,q,ee,te,z,ae,re,A,ne,se,h,x,le,oe,ie,he,b,ce,de,pe,fe,v,ue,me,xe,be,y,ve,ye,_e,ge,_,we,Ee,ke,Ie,g,Le,Pe,Re,Be,k,qe,I,ze;return{c(){i=t("div"),w=t("p"),F=r(`create music in 64 bytes. heavily inspired by 
    `),E=t("a"),G=r("tixy.land"),J=c(),K=t("hr"),N=c(),m=t("div"),L=t("h1"),O=r("// what does `f(b,i)` do?"),Q=c(),P=t("p"),T=r("`f(b,i)` allows you to write music in semitones, it returns a frequency given a base frequency and how many semitones difference you want"),W=c(),o=t("div"),R=t("h1"),X=r("// what about `r(o,p)`?"),Y=c(),B=t("p"),Z=r("`r(o,p)` helps build euclidean rhythm patterns. it spreads out `o` onsets across `p` pulses. it returns an array of 0 or 1 where 1 can be used as when a beat hits.\n      it can build very complex rhythms in a simple way."),$=c(),q=t("p"),ee=r("for example, the 13th century persian rhythm 'khafif-e-ramal' below can be generated using r(2,5). coincidentally it is also the metric pattern from dave brubeck's take five and gustav holst's mars from the planets"),te=c(),z=t("p"),ae=r("r(2,5)=[1,0,0,0] or |x...| in beat notation"),re=c(),A=t("p"),ne=r("other examples:"),se=c(),h=t("ul"),x=t("li"),le=r(`simple example
        `),oe=t("br"),ie=r(`
        r(1,4) |x...|`),he=c(),b=t("li"),ce=r(`bulgarian folk rhythm 'ruchenitza'. used in pink floyd's money
        `),de=t("br"),pe=r(`
        r(3,7) |x.x.x..|`),fe=c(),v=t("li"),ue=r(`cuban tresillo pattern
        `),me=t("br"),xe=r(`
        r(3,8) |x . . x . . x .|`),be=c(),y=t("li"),ve=r(`spanish tango when started on second offset 
        `),ye=t("br"),_e=r(`
        r(5,8) |x . x x . x x .|`),ge=c(),_=t("li"),we=r(`arabic rhythm 'agsag-samai' and s. african drum pattern 'venda'
        `),Ee=t("br"),ke=r(`
        r(5,9) [x . x . x . x . x]`),Ie=c(),g=t("li"),Le=r(`bossa-nova rhythm necklace of brazil
        `),Pe=t("br"),Re=r(`
        r(5,16) x . . x . . x . . x . . x . . . .]`),Be=c(),k=t("p"),qe=r("you can read more about it "),I=t("a"),ze=r("here"),this.h()},l(D){i=a(D,"DIV",{class:!0});var u=l(i);w=a(u,"P",{});var Ae=l(w);F=n(Ae,`create music in 64 bytes. heavily inspired by 
    `),E=a(Ae,"A",{href:!0});var Se=l(E);G=n(Se,"tixy.land"),Se.forEach(s),Ae.forEach(s),J=d(u),K=a(u,"HR",{}),N=d(u),m=a(u,"DIV",{});var H=l(m);L=a(H,"H1",{});var je=l(L);O=n(je,"// what does `f(b,i)` do?"),je.forEach(s),Q=d(H),P=a(H,"P",{});var Ce=l(P);T=n(Ce,"`f(b,i)` allows you to write music in semitones, it returns a frequency given a base frequency and how many semitones difference you want"),Ce.forEach(s),H.forEach(s),W=d(u),o=a(u,"DIV",{});var p=l(o);R=a(p,"H1",{});var Me=l(R);X=n(Me,"// what about `r(o,p)`?"),Me.forEach(s),Y=d(p),B=a(p,"P",{});var Ue=l(B);Z=n(Ue,"`r(o,p)` helps build euclidean rhythm patterns. it spreads out `o` onsets across `p` pulses. it returns an array of 0 or 1 where 1 can be used as when a beat hits.\n      it can build very complex rhythms in a simple way."),Ue.forEach(s),$=d(p),q=a(p,"P",{});var Fe=l(q);ee=n(Fe,"for example, the 13th century persian rhythm 'khafif-e-ramal' below can be generated using r(2,5). coincidentally it is also the metric pattern from dave brubeck's take five and gustav holst's mars from the planets"),Fe.forEach(s),te=d(p),z=a(p,"P",{});var Ge=l(z);ae=n(Ge,"r(2,5)=[1,0,0,0] or |x...| in beat notation"),Ge.forEach(s),re=d(p),A=a(p,"P",{});var Je=l(A);ne=n(Je,"other examples:"),Je.forEach(s),se=d(p),h=a(p,"UL",{});var f=l(h);x=a(f,"LI",{});var V=l(x);le=n(V,`simple example
        `),oe=a(V,"BR",{}),ie=n(V,`
        r(1,4) |x...|`),V.forEach(s),he=d(f),b=a(f,"LI",{});var S=l(b);ce=n(S,`bulgarian folk rhythm 'ruchenitza'. used in pink floyd's money
        `),de=a(S,"BR",{}),pe=n(S,`
        r(3,7) |x.x.x..|`),S.forEach(s),fe=d(f),v=a(f,"LI",{});var j=l(v);ue=n(j,`cuban tresillo pattern
        `),me=a(j,"BR",{}),xe=n(j,`
        r(3,8) |x . . x . . x .|`),j.forEach(s),be=d(f),y=a(f,"LI",{});var C=l(y);ve=n(C,`spanish tango when started on second offset 
        `),ye=a(C,"BR",{}),_e=n(C,`
        r(5,8) |x . x x . x x .|`),C.forEach(s),ge=d(f),_=a(f,"LI",{});var M=l(_);we=n(M,`arabic rhythm 'agsag-samai' and s. african drum pattern 'venda'
        `),Ee=a(M,"BR",{}),ke=n(M,`
        r(5,9) [x . x . x . x . x]`),M.forEach(s),Ie=d(f),g=a(f,"LI",{});var U=l(g);Le=n(U,`bossa-nova rhythm necklace of brazil
        `),Pe=a(U,"BR",{}),Re=n(U,`
        r(5,16) x . . x . . x . . x . . x . . . .]`),U.forEach(s),f.forEach(s),Be=d(p),k=a(p,"P",{});var De=l(k);qe=n(De,"you can read more about it "),I=a(De,"A",{href:!0});var Ke=l(I);ze=n(Ke,"here"),Ke.forEach(s),De.forEach(s),p.forEach(s),u.forEach(s),this.h()},h(){He(E,"href","https://tixy.land"),He(I,"href","http://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf"),He(i,"class","container svelte-66ga21")},m(D,u){We(D,i,u),e(i,w),e(w,F),e(w,E),e(E,G),e(i,J),e(i,K),e(i,N),e(i,m),e(m,L),e(L,O),e(m,Q),e(m,P),e(P,T),e(i,W),e(i,o),e(o,R),e(R,X),e(o,Y),e(o,B),e(B,Z),e(o,$),e(o,q),e(q,ee),e(o,te),e(o,z),e(z,ae),e(o,re),e(o,A),e(A,ne),e(o,se),e(o,h),e(h,x),e(x,le),e(x,oe),e(x,ie),e(h,he),e(h,b),e(b,ce),e(b,de),e(b,pe),e(h,fe),e(h,v),e(v,ue),e(v,me),e(v,xe),e(h,be),e(h,y),e(y,ve),e(y,ye),e(y,_e),e(h,ge),e(h,_),e(_,we),e(_,Ee),e(_,ke),e(h,Ie),e(h,g),e(g,Le),e(g,Pe),e(g,Re),e(o,Be),e(o,k),e(k,qe),e(k,I),e(I,ze)},p:Ve,i:Ve,o:Ve,d(D){D&&s(i)}}}const Ze=!0;class $e extends Oe{constructor(i){super();Qe(this,i,null,Xe,Te,{})}}export{$e as default,Ze as prerender};