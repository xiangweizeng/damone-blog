import{w as ln,c as $}from"./path-53f90ab3.js";import{Z as an,_ as C,$ as q,a0 as rn,a1 as y,Y as on,a2 as H,a3 as _,a4 as un,a5 as t,a6 as sn,a7 as tn,a8 as fn}from"./mermaid.core-195aff03.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,I,D,v,A,j,a){var O=I-l,i=D-h,n=j-v,m=a-A,r=m*O-n*i;if(!(r*r<y))return r=(n*(h-A)-m*(l-v))/r,[l+r*O,h+r*i]}function Q(l,h,I,D,v,A,j){var a=l-I,O=h-D,i=(j?A:-A)/H(a*a+O*O),n=i*O,m=-i*a,r=l+n,s=h+m,f=I+n,c=D+m,z=(r+f)/2,o=(s+c)/2,p=f-r,g=c-s,R=p*p+g*g,T=v-A,P=r*c-f*s,S=(g<0?-1:1)*H(fn(0,T*T*R-P*P)),Y=(P*g-p*S)/R,Z=(-P*p-g*S)/R,w=(P*g+p*S)/R,d=(-P*p+g*S)/R,x=Y-z,e=Z-o,u=w-z,B=d-o;return x*x+e*e>u*u+B*B&&(Y=w,Z=d),{cx:Y,cy:Z,x01:-n,y01:-m,x11:Y*(v/T-1),y11:Z*(v/T-1)}}function vn(){var l=cn,h=yn,I=$(0),D=null,v=gn,A=mn,j=pn,a=null,O=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=A.apply(this,arguments)-rn,z=un(c-f),o=c>f;if(a||(a=n=O()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(z>on-y)a.moveTo(s*C(f),s*q(f)),a.arc(0,0,s,f,c,!o),r>y&&(a.moveTo(r*C(c),r*q(c)),a.arc(0,0,r,c,f,o));else{var p=f,g=c,R=f,T=c,P=z,S=z,Y=j.apply(this,arguments)/2,Z=Y>y&&(D?+D.apply(this,arguments):H(r*r+s*s)),w=_(un(s-r)/2,+I.apply(this,arguments)),d=w,x=w,e,u;if(Z>y){var B=sn(Z/r*q(Y)),J=sn(Z/s*q(Y));(P-=B*2)>y?(B*=o?1:-1,R+=B,T-=B):(P=0,R=T=(f+c)/2),(S-=J*2)>y?(J*=o?1:-1,p+=J,g-=J):(S=0,p=g=(f+c)/2)}var F=s*C(p),G=s*q(p),K=r*C(T),L=r*q(T);if(w>y){var M=s*C(g),N=s*q(g),U=r*C(R),V=r*q(R),E;if(z<an)if(E=dn(F,G,U,V,M,N,K,L)){var W=F-E[0],X=G-E[1],k=M-E[0],b=N-E[1],nn=1/q(tn((W*k+X*b)/(H(W*W+X*X)*H(k*k+b*b)))/2),en=H(E[0]*E[0]+E[1]*E[1]);d=_(w,(r-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}S>y?x>y?(e=Q(U,V,F,G,s,x,o),u=Q(M,N,K,L,s,x,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(F,G),a.arc(0,0,s,p,g,!o)):a.moveTo(F,G),!(r>y)||!(P>y)?a.lineTo(K,L):d>y?(e=Q(K,L,M,N,r,-d,o),u=Q(F,G,U,V,r,-d,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,T,R,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-an/2;return[C(m)*n,q(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:$(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:$(+n),i):h},i.cornerRadius=function(n){return arguments.length?(I=typeof n=="function"?n:$(+n),i):I},i.padRadius=function(n){return arguments.length?(D=n==null?null:typeof n=="function"?n:$(+n),i):D},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:$(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:$(+n),i):A},i.padAngle=function(n){return arguments.length?(j=typeof n=="function"?n:$(+n),i):j},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};
