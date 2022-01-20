import{S as re,i as se,s as oe,e as n,t as o,k as h,c as r,a as i,h as l,d as s,m as c,b as k,g as ie,I as e,M as T}from"../chunks/vendor-ce8ace9e.js";function le(ne){let t,d,E,p,z,P,q,A,u,m,H,I,B,f,D,R,y,S,V,b,j,C,v,M,F,w,G,J,_,K,L,x,N;return{c(){t=n("div"),d=n("p"),E=o(`create music in 64 bytes. heavily inspired by 
    `),p=n("a"),z=o("tixy.land"),P=h(),q=n("hr"),A=h(),u=n("div"),m=n("h1"),H=o("// what does `f(b,i)` do?"),I=o("\n    `f(b,i)` allows you to write music in semitones, it returns a frequency given a base frequency and how many semitones difference you want"),B=h(),f=n("h1"),D=o("// what about `r(o,p)`?"),R=h(),y=n("p"),S=o("`r(o,p)` helps build euclidean rhythm patterns. it spreads out `o` onsets across `p` pulses. it returns an array of 0 or 1 where 1 can be used as when a beat hits.\n    it can build very complex rhythms in a simple way."),V=h(),b=n("p"),j=o("for example, the 13th century persian rhythm 'khafif-e-ramal' below can be generated using r(2,5). coincidentally it is also the metric pattern from dave brubeck's take five and gustav holst's mars from the planets"),C=h(),v=n("p"),M=o("r(2,5)=[1,0,0,0] or |x...| in beat notation"),F=h(),w=n("p"),G=o("other examples:"),J=h(),_=n("pre"),K=o(`simple example
    r(1,4) |x...| 
  bulgarian folk rhythm 'ruchenitza'. used in pink floyd's money
    r(3,7) |x.x.x..| 
  cuban tresillo pattern 
    r(3,8) |x . . x . . x .| 
  spanish tango when started on second offset 
    r(5,8) |x . x x . x x .| 
  arabic rhythm 'agsag-samai' and s. african drum pattern 'venda'
    r(5,9) [x . x . x . x . x] 
  bossa-nova rhythm necklace of Brazil
    r(5,16) x . . x . . x . . x . . x . . . .]`),L=o(`
  you can read more about it `),x=n("a"),N=o("here"),this.h()},l(g){t=r(g,"DIV",{class:!0});var a=i(t);d=r(a,"P",{});var O=i(d);E=l(O,`create music in 64 bytes. heavily inspired by 
    `),p=r(O,"A",{href:!0});var U=i(p);z=l(U,"tixy.land"),U.forEach(s),O.forEach(s),P=c(a),q=r(a,"HR",{}),A=c(a),u=r(a,"DIV",{});var Q=i(u);m=r(Q,"H1",{class:!0});var W=i(m);H=l(W,"// what does `f(b,i)` do?"),W.forEach(s),I=l(Q,"\n    `f(b,i)` allows you to write music in semitones, it returns a frequency given a base frequency and how many semitones difference you want"),Q.forEach(s),B=c(a),f=r(a,"H1",{class:!0});var X=i(f);D=l(X,"// what about `r(o,p)`?"),X.forEach(s),R=c(a),y=r(a,"P",{});var Y=i(y);S=l(Y,"`r(o,p)` helps build euclidean rhythm patterns. it spreads out `o` onsets across `p` pulses. it returns an array of 0 or 1 where 1 can be used as when a beat hits.\n    it can build very complex rhythms in a simple way."),Y.forEach(s),V=c(a),b=r(a,"P",{});var Z=i(b);j=l(Z,"for example, the 13th century persian rhythm 'khafif-e-ramal' below can be generated using r(2,5). coincidentally it is also the metric pattern from dave brubeck's take five and gustav holst's mars from the planets"),Z.forEach(s),C=c(a),v=r(a,"P",{});var $=i(v);M=l($,"r(2,5)=[1,0,0,0] or |x...| in beat notation"),$.forEach(s),F=c(a),w=r(a,"P",{});var ee=i(w);G=l(ee,"other examples:"),ee.forEach(s),J=c(a),_=r(a,"PRE",{});var te=i(_);K=l(te,`simple example
    r(1,4) |x...| 
  bulgarian folk rhythm 'ruchenitza'. used in pink floyd's money
    r(3,7) |x.x.x..| 
  cuban tresillo pattern 
    r(3,8) |x . . x . . x .| 
  spanish tango when started on second offset 
    r(5,8) |x . x x . x x .| 
  arabic rhythm 'agsag-samai' and s. african drum pattern 'venda'
    r(5,9) [x . x . x . x . x] 
  bossa-nova rhythm necklace of Brazil
    r(5,16) x . . x . . x . . x . . x . . . .]`),te.forEach(s),L=l(a,`
  you can read more about it `),x=r(a,"A",{href:!0});var ae=i(x);N=l(ae,"here"),ae.forEach(s),a.forEach(s),this.h()},h(){k(p,"href","https://tixy.land"),k(m,"class","svelte-z4iuwi"),k(f,"class","svelte-z4iuwi"),k(x,"href","http://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf"),k(t,"class","container svelte-z4iuwi")},m(g,a){ie(g,t,a),e(t,d),e(d,E),e(d,p),e(p,z),e(t,P),e(t,q),e(t,A),e(t,u),e(u,m),e(m,H),e(u,I),e(t,B),e(t,f),e(f,D),e(t,R),e(t,y),e(y,S),e(t,V),e(t,b),e(b,j),e(t,C),e(t,v),e(v,M),e(t,F),e(t,w),e(w,G),e(t,J),e(t,_),e(_,K),e(t,L),e(t,x),e(x,N)},p:T,i:T,o:T,d(g){g&&s(t)}}}const ce=!0;class de extends re{constructor(t){super();se(this,t,null,le,oe,{})}}export{de as default,ce as prerender};
