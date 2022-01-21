import{S as De,i as Fe,s as Je,e as r,t as i,k as u,c as l,a as f,h as n,d as a,m as h,b as Ke,g as o,G as t,K as Ie}from"../chunks/vendor-27084509.js";function Me(Ue){let x,T,E,V,A,k,W,H,L,X,S,P,Y,j,B,Z,C,I,$,G,R,g,K,q,ee,U,p,b,te,ae,re,le,c,se,ie,ne,oe,y,fe,pe,ue,he,d,me,xe,be,ce,v,ye,de,ve,_e,_,we,Ee,ke,D,w,Le,z,Pe;return{c(){x=r("p"),T=i("create music in 64 bytes. heavily inspired by "),E=r("a"),V=i("tixy.land"),A=u(),k=r("h2"),W=i("// what does `f(b,i)` do?"),H=u(),L=r("p"),X=i("`f(b,i)` allows you to write music in semitones, it returns a frequency given a base frequency and how many semitones difference you want"),S=u(),P=r("h2"),Y=i("// what about `r(o,p)`?"),j=u(),B=r("p"),Z=i("`r(o,p)` helps build euclidean rhythm patterns. it spreads out `o` onsets across `p` pulses. it returns an array of 0 or 1 where 1 can be used as when a beat hits.\n  it can build very complex rhythms in a simple way."),C=u(),I=r("p"),$=i("for example, the 13th century persian rhythm 'khafif-e-ramal' below can be generated using r(2,5). coincidentally it is also the metric pattern from dave brubeck's take five and gustav holst's mars from the planets"),G=u(),R=r("p"),g=i("r(2,5)=[1,0,0,0] or |x...| in beat notation"),K=u(),q=r("p"),ee=i("other examples:"),U=u(),p=r("ul"),b=r("li"),te=i(`simple example
    `),ae=r("br"),re=i(`
    r(1,4) |x...|`),le=u(),c=r("li"),se=i(`bulgarian folk rhythm 'ruchenitza'. used in pink floyd's money
    `),ie=r("br"),ne=i(`
    r(3,7) |x.x.x..|`),oe=u(),y=r("li"),fe=i(`cuban tresillo pattern
    `),pe=r("br"),ue=i(`
    r(3,8) |x . . x . . x .|`),he=u(),d=r("li"),me=i(`spanish tango when started on second offset 
    `),xe=r("br"),be=i(`
    r(5,8) |x . x x . x x .|`),ce=u(),v=r("li"),ye=i(`arabic rhythm 'agsag-samai' and s. african drum pattern 'venda'
    `),de=r("br"),ve=i(`
    r(5,9) [x . x . x . x . x]`),_e=u(),_=r("li"),we=i(`bossa-nova rhythm necklace of brazil
    `),Ee=r("br"),ke=i(`
    r(5,16) x . . x . . x . . x . . x . . . .]`),D=u(),w=r("p"),Le=i("you can read more about it "),z=r("a"),Pe=i("here"),this.h()},l(e){x=l(e,"P",{});var s=f(x);T=n(s,"create music in 64 bytes. heavily inspired by "),E=l(s,"A",{href:!0});var Re=f(E);V=n(Re,"tixy.land"),Re.forEach(a),s.forEach(a),A=h(e),k=l(e,"H2",{});var qe=f(k);W=n(qe,"// what does `f(b,i)` do?"),qe.forEach(a),H=h(e),L=l(e,"P",{});var ze=f(L);X=n(ze,"`f(b,i)` allows you to write music in semitones, it returns a frequency given a base frequency and how many semitones difference you want"),ze.forEach(a),S=h(e),P=l(e,"H2",{});var Ae=f(P);Y=n(Ae,"// what about `r(o,p)`?"),Ae.forEach(a),j=h(e),B=l(e,"P",{});var He=f(B);Z=n(He,"`r(o,p)` helps build euclidean rhythm patterns. it spreads out `o` onsets across `p` pulses. it returns an array of 0 or 1 where 1 can be used as when a beat hits.\n  it can build very complex rhythms in a simple way."),He.forEach(a),C=h(e),I=l(e,"P",{});var Se=f(I);$=n(Se,"for example, the 13th century persian rhythm 'khafif-e-ramal' below can be generated using r(2,5). coincidentally it is also the metric pattern from dave brubeck's take five and gustav holst's mars from the planets"),Se.forEach(a),G=h(e),R=l(e,"P",{});var je=f(R);g=n(je,"r(2,5)=[1,0,0,0] or |x...| in beat notation"),je.forEach(a),K=h(e),q=l(e,"P",{});var Ce=f(q);ee=n(Ce,"other examples:"),Ce.forEach(a),U=h(e),p=l(e,"UL",{});var m=f(p);b=l(m,"LI",{});var F=f(b);te=n(F,`simple example
    `),ae=l(F,"BR",{}),re=n(F,`
    r(1,4) |x...|`),F.forEach(a),le=h(m),c=l(m,"LI",{});var J=f(c);se=n(J,`bulgarian folk rhythm 'ruchenitza'. used in pink floyd's money
    `),ie=l(J,"BR",{}),ne=n(J,`
    r(3,7) |x.x.x..|`),J.forEach(a),oe=h(m),y=l(m,"LI",{});var M=f(y);fe=n(M,`cuban tresillo pattern
    `),pe=l(M,"BR",{}),ue=n(M,`
    r(3,8) |x . . x . . x .|`),M.forEach(a),he=h(m),d=l(m,"LI",{});var N=f(d);me=n(N,`spanish tango when started on second offset 
    `),xe=l(N,"BR",{}),be=n(N,`
    r(5,8) |x . x x . x x .|`),N.forEach(a),ce=h(m),v=l(m,"LI",{});var O=f(v);ye=n(O,`arabic rhythm 'agsag-samai' and s. african drum pattern 'venda'
    `),de=l(O,"BR",{}),ve=n(O,`
    r(5,9) [x . x . x . x . x]`),O.forEach(a),_e=h(m),_=l(m,"LI",{});var Q=f(_);we=n(Q,`bossa-nova rhythm necklace of brazil
    `),Ee=l(Q,"BR",{}),ke=n(Q,`
    r(5,16) x . . x . . x . . x . . x . . . .]`),Q.forEach(a),m.forEach(a),D=h(e),w=l(e,"P",{});var Be=f(w);Le=n(Be,"you can read more about it "),z=l(Be,"A",{href:!0});var Ge=f(z);Pe=n(Ge,"here"),Ge.forEach(a),Be.forEach(a),this.h()},h(){Ke(E,"href","https://tixy.land"),Ke(z,"href","http://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf")},m(e,s){o(e,x,s),t(x,T),t(x,E),t(E,V),o(e,A,s),o(e,k,s),t(k,W),o(e,H,s),o(e,L,s),t(L,X),o(e,S,s),o(e,P,s),t(P,Y),o(e,j,s),o(e,B,s),t(B,Z),o(e,C,s),o(e,I,s),t(I,$),o(e,G,s),o(e,R,s),t(R,g),o(e,K,s),o(e,q,s),t(q,ee),o(e,U,s),o(e,p,s),t(p,b),t(b,te),t(b,ae),t(b,re),t(p,le),t(p,c),t(c,se),t(c,ie),t(c,ne),t(p,oe),t(p,y),t(y,fe),t(y,pe),t(y,ue),t(p,he),t(p,d),t(d,me),t(d,xe),t(d,be),t(p,ce),t(p,v),t(v,ye),t(v,de),t(v,ve),t(p,_e),t(p,_),t(_,we),t(_,Ee),t(_,ke),o(e,D,s),o(e,w,s),t(w,Le),t(w,z),t(z,Pe)},p:Ie,i:Ie,o:Ie,d(e){e&&a(x),e&&a(A),e&&a(k),e&&a(H),e&&a(L),e&&a(S),e&&a(P),e&&a(j),e&&a(B),e&&a(C),e&&a(I),e&&a(G),e&&a(R),e&&a(K),e&&a(q),e&&a(U),e&&a(p),e&&a(D),e&&a(w)}}}const Oe=!0,Qe=!1;class Te extends De{constructor(x){super();Fe(this,x,null,Me,Je,{})}}export{Te as default,Oe as prerender,Qe as router};