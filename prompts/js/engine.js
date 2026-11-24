/* Con-Gen prompt library: engine + pack 1 */
(()=>{
const R2=CanvasRenderingContext2D.prototype;
if(!R2.roundRect)R2.roundRect=function(x,y,w,h,r){r=Math.min(r,w/2,h/2);this.moveTo(x+r,y);this.arcTo(x+w,y,x+w,y+h,r);this.arcTo(x+w,y+h,x,y+h,r);this.arcTo(x,y+h,x,y,r);this.arcTo(x,y,x+w,y,r);this.closePath();return this};
let S=1;
const cl=(x,a=0,b=1)=>Math.min(b,Math.max(a,x)),ph=(t,a,b)=>cl((t-a)/(b-a)),lerp=(a,b,x)=>a+(b-a)*x;
const eo=x=>1-Math.pow(1-x,3),eio=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2,back=x=>{const c=1.70158;return 1+(c+1)*Math.pow(x-1,3)+c*Math.pow(x-1,2)};
const rgb=h=>{const n=parseInt(h.slice(1),16);return[n>>16,n>>8&255,n&255]};
const hexA=(h,a)=>{const[r,g,b]=rgb(h);return`rgba(${r},${g},${b},${a})`};
const mix=(h1,h2,x)=>{const a=rgb(h1),b=rgb(h2);return`rgb(${a.map((v,i)=>Math.round(lerp(v,b[i],x))).join(',')})`};
const sh=(c,col,b,y)=>{c.shadowColor=col;c.shadowBlur=b*S;c.shadowOffsetY=y*S},noSh=c=>{c.shadowColor='transparent';c.shadowBlur=0;c.shadowOffsetY=0};
function rr(c,x,y,w,h,r,f,s,lw){c.beginPath();c.roundRect(x,y,Math.max(0,w),Math.max(0,h),Math.max(0,r));if(f){c.fillStyle=f;c.fill()}if(s){noSh(c);c.strokeStyle=s;c.lineWidth=lw||1;c.stroke()}}
function txt(c,s,font,col,x,y,al){c.font=font;c.fillStyle=col;c.textAlign=al||'center';c.textBaseline='middle';c.fillText(s,x,y)}
function wrap(c,s,max){const L=[];let l='';for(const x of s.split(/\s+/)){const n=l?l+' '+x:x;if(c.measureText(n).width>max&&l){L.push(l);l=x}else l=n}if(l)L.push(l);return L}
const ink=c=>{c.fillStyle='#0b0b1a';c.fillRect(0,0,640,360)};
function bloom(c,x,y,r,col,a){const g=c.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,hexA(col,a));g.addColorStop(1,hexA(col,0));c.fillStyle=g;c.fillRect(0,0,640,360)}
function floor(c,t,col){c.save();c.strokeStyle=col;c.lineWidth=1;const hz=205;for(let i=0;i<9;i++){const z=(i+(t*.35)%1)/9,y=hz+(360-hz)*z*z;c.globalAlpha=.04+.3*z;c.beginPath();c.moveTo(0,y);c.lineTo(640,y);c.stroke()}c.globalAlpha=.1;for(let i=-9;i<=9;i++){c.beginPath();c.moveTo(320+i*22,hz);c.lineTo(320+i*150,360);c.stroke()}c.restore()}
function paper(c,t){c.fillStyle='#f5f7fc';c.fillRect(0,0,640,360);c.fillStyle='#dde1ee';const o=(t*5)%32;for(let y=-32;y<392;y+=32)for(let x=-32;x<672;x+=32)c.fillRect(x+o,y+o*.5,2,2)}
function star(c,x,y,r,col){c.beginPath();for(let i=0;i<8;i++){const a=i*Math.PI/4,q=i%2?r*.36:r;c.lineTo(x+Math.cos(a)*q,y+Math.sin(a)*q)}c.closePath();c.fillStyle=col;c.fill()}
function cursor(c,x,y,s){c.save();c.translate(x,y);c.scale(s,s);sh(c,'rgba(0,0,0,.35)',10,4);c.beginPath();c.moveTo(0,0);c.lineTo(0,20);c.lineTo(5.5,15.5);c.lineTo(9,23);c.lineTo(12.5,21.5);c.lineTo(9,14);c.lineTo(15.5,14);c.closePath();c.fillStyle='#0b0b1a';c.fill();noSh(c);c.strokeStyle='#fff';c.lineWidth=1.6;c.lineJoin='round';c.stroke();c.restore()}
function words(c,L,font,col,t,t0,st,rise,xOf,yOf){let wi=0;c.font=font;L.forEach((ln,i)=>{let lx=xOf(ln);const ly=yOf(i);ln.split(' ').forEach(wd=>{const e=eo(ph(t,t0+wi*st,t0+.4+wi*st));c.save();c.beginPath();c.rect(0,ly-rise*.62,640,rise*1.24);c.clip();c.globalAlpha=e;txt(c,wd,font,col,lx,ly+(1-e)*rise,'left');c.restore();c.font=font;lx+=c.measureText(wd+' ').width;wi++})})}

/* ---------- scenes: every frame is a pure function of t ---------- */
function sLine(c,t,o){ink(c);floor(c,t,o.a);bloom(c,320,180,300,o.a,.25);
 const a=eo(ph(t,.2,.7)),b=eio(ph(t,.7,1.15)),d=eio(ph(t,1.15,1.75)),w=lerp(220*a,450,d),h=lerp(lerp(3,52,b),196,d),r=lerp(h/2,24,d),x=320-w/2,y=178-h/2;
 sh(c,hexA(o.a,.6),46,20);rr(c,x,y,w,h,r,mix(o.a,'#ffffff',d));noSh(c);if(d<.6)return;
 c.save();c.beginPath();c.roundRect(x,y,w,h,r);c.clip();
 const k=back(ph(t,1.7,2.05));c.save();c.translate(x+62,y+36);c.scale(k,k);rr(c,-32,-12,64,24,12,hexA(o.a,.14));txt(c,'NEW','700 11px Poppins',o.a,0,1);c.restore();
 c.font='700 30px Poppins';words(c,wrap(c,o.head,390).slice(0,2),'700 30px Poppins','#0b0b1a',t,1.75,.09,34,()=>x+30,i=>y+86+i*38);
 ['Fast','On brand','Looped'].forEach((s,i)=>{const e=back(ph(t,2.5+i*.07,2.9+i*.07));if(e<=0)return;c.save();c.translate(x+78+i*104,y+166);c.scale(e,e);rr(c,-48,-13,96,26,13,'#f1f3fa');txt(c,s,'500 12px Poppins','#4b5070',0,1);c.restore()});c.restore()}

function sOdo(c,t,o){paper(c,t);sh(c,'rgba(20,30,80,.17)',54,26);rr(c,150,72,340,204,26,'#fff');noSh(c);
 txt(c,'REACH, LAST 30 DAYS','700 11px "Space Mono"','#8b90a8',180,104,'left');
 const ds=[2,4,8],H=82,F='700 66px Poppins';c.save();c.beginPath();c.rect(172,126,176,82);c.clip();
 ds.forEach((dg,i)=>{const pos=(dg+10*(3-i))*eo(ph(t,.35+i*.12,2.3+i*.12)),d0=Math.floor(pos)%10,f=pos%1;txt(c,d0,F,'#0b0b1a',204+i*50,168-f*H);txt(c,(d0+1)%10,F,'#0b0b1a',204+i*50,168+H-f*H)});c.restore();
 txt(c,'%',F,o.a,336,168,'left');
 const p=eo(ph(t,1.2,2.8)),pt=[[180,250],[214,244],[248,248],[282,236],[316,240],[350,226],[384,230],[418,214],[460,222]];
 c.save();c.beginPath();c.rect(170,200,300*p,70);c.clip();c.strokeStyle=o.a;c.lineWidth=3;c.lineCap='round';c.lineJoin='round';c.beginPath();pt.forEach((q,i)=>i?c.lineTo(q[0],q[1]):c.moveTo(q[0],q[1]));c.stroke();c.restore();
 if(p>=1){c.beginPath();c.arc(460,222,5+Math.sin(t*5)*1.2,0,7);c.fillStyle=o.a;c.fill()}
 const k=back(ph(t,2.5,2.9));if(k>0){c.save();c.translate(456,74+Math.sin(t*1.6)*3);c.scale(k,k);c.rotate(.05);sh(c,'rgba(11,11,26,.35)',22,10);rr(c,-66,-17,132,34,17,'#0b0b1a');noSh(c);c.beginPath();c.moveTo(-50,5);c.lineTo(-44,-5);c.lineTo(-38,5);c.closePath();c.fillStyle='#4ade80';c.fill();txt(c,'+12% this week','600 12px Poppins','#fff',8,1);c.restore()}}

function sBars(c,t,o){ink(c);bloom(c,320,340,330,o.a,.3);
 txt(c,'Weekly views','600 18px Poppins','#fff',70,52,'left');txt(c,'MON - SAT','700 10px "Space Mono"','#8b90c8',70,74,'left');
 c.fillStyle='rgba(255,255,255,.06)';c.beginPath();c.moveTo(96,294);c.lineTo(552,294);c.lineTo(574,278);c.lineTo(118,278);c.closePath();c.fill();
 const v=[.38,.55,.47,.72,1,.64];v.forEach((q,i)=>{const g=back(ph(t,.4+i*.09,1.1+i*.09)),h=Math.max(0,q*172*g),x=124+i*70,w=40,y=290-h,dx=14,dy=-10,hot=q==1;
  const f=hot?o.a:'#3a3f6e';if(hot)sh(c,hexA(o.a,.75),44,0);const gr=c.createLinearGradient(0,y,0,290);gr.addColorStop(0,f);gr.addColorStop(1,mix(f,'#0b0b1a',.45));c.fillStyle=gr;c.fillRect(x,y,w,h);noSh(c);
  c.fillStyle=hot?mix(o.a,'#000000',.38):'#262a4f';c.beginPath();c.moveTo(x+w,y);c.lineTo(x+w+dx,y+dy);c.lineTo(x+w+dx,290+dy);c.lineTo(x+w,290);c.closePath();c.fill();
  c.fillStyle=hot?mix(o.a,'#ffffff',.38):'#565c93';c.beginPath();c.moveTo(x,y);c.lineTo(x+dx,y+dy);c.lineTo(x+w+dx,y+dy);c.lineTo(x+w,y);c.closePath();c.fill();
  const e=eo(ph(t,1+i*.09,1.4+i*.09));c.globalAlpha=e;txt(c,Math.round(q*48*Math.min(1,g))+'K',(hot?'700 14px':'600 12px')+' Poppins',hot?'#fff':'#a9aed6',x+w/2+6,y-24-(1-e)*8);c.globalAlpha=1;
  txt(c,'MTWTFS'[i],'700 10px "Space Mono"','#6f74a6',x+w/2,310)})}

function sRoll(c,t,o){c.fillStyle='#fff';c.fillRect(0,0,640,360);
 c.save();c.font='800 232px Poppins';c.textBaseline='middle';c.textAlign='left';c.strokeStyle='#eceef6';c.lineWidth=2;c.strokeText('MOTION',-150+Math.sin(t/5.2*Math.PI*2)*40,188);c.restore();
 const W=['faster.','bolder.','sharper.',(o.brand||'Brand').slice(0,13)+'.'],seg=1.3,i=Math.floor(t/seg)%4,p=eio(ph(t%seg,.95,1.3)),F='700 44px Poppins';
 c.font=F;const w0=c.measureText(W[i]).width,w1=c.measureText(W[(i+1)%4]).width,pw=lerp(w0,w1,p)+44,lw=c.measureText('Make it').width,x=320-(lw+18+pw)/2,px=x+lw+18;
 txt(c,'Make it',F,'#0b0b1a',x,182,'left');
 sh(c,hexA(o.a,.45),30,14);const g=c.createLinearGradient(0,146,0,218);g.addColorStop(0,mix(o.a,'#ffffff',.2));g.addColorStop(1,o.a);rr(c,px,146,pw,72,22,g);noSh(c);
 c.save();c.beginPath();c.roundRect(px,146,pw,72,22);c.clip();txt(c,W[i],F,'#fff',px+22,183-p*72,'left');txt(c,W[(i+1)%4],F,'#fff',px+22,255-p*72,'left');c.restore();
 txt(c,'ONE LINE. ONE MOVING WORD.','700 10px "Space Mono"','#9aa0b8',320,264)}

function sCursor(c,t,o){paper(c,t);sh(c,'rgba(20,30,80,.18)',54,26);rr(c,170,66,300,228,22,'#fff');noSh(c);
 txt(c,'Export reel','600 17px Poppins','#0b0b1a',194,100,'left');
 [['Captions',1],['4K upscale',0],['Brand kit',1]].forEach((r,i)=>{const y=140+i*32;txt(c,r[0],'500 13px Poppins','#4b5070',194,y,'left');rr(c,412,y-9,34,18,9,r[1]?o.a:'#d5d9e6');c.beginPath();c.arc(r[1]?437:421,y,6.5,0,7);c.fillStyle='#fff';c.fill()});
 const ck=1.9,pr=eio(ph(t,2.05,3.4)),dip=1-.07*Math.sin(Math.PI*ph(t,ck,ck+.22));
 c.save();c.translate(320,256);c.scale(dip,dip);
 if(t<2.05){sh(c,hexA(o.a,.4),18,8);rr(c,-126,-19,252,38,19,o.a);noSh(c);txt(c,'Generate','600 14px Poppins','#fff',0,1)}
 else if(t<3.4){rr(c,-126,-19,252,38,19,'#e9ecf5');c.save();c.beginPath();c.roundRect(-126,-19,252,38,19);c.clip();c.fillStyle=o.a;c.fillRect(-126,-19,252*pr,38);c.restore();txt(c,Math.round(pr*100)+'%','600 13px Poppins',pr>.55?'#fff':'#4b5070',0,1)}
 else{const k=.9+.1*back(ph(t,3.4,3.75));c.scale(k,k);sh(c,'rgba(22,163,74,.45)',18,8);rr(c,-126,-19,252,38,19,'#16a34a');noSh(c);txt(c,'Done','600 14px Poppins','#fff',8,1);c.strokeStyle='#fff';c.lineWidth=2.4;c.lineCap='round';c.lineJoin='round';c.beginPath();c.moveTo(-28,1);c.lineTo(-23,6);c.lineTo(-14,-5);c.stroke()}
 c.restore();
 const rp=ph(t,ck,ck+.5);if(rp>0&&rp<1){c.strokeStyle=hexA(o.a,1-rp);c.lineWidth=2;c.beginPath();c.arc(372,260,6+rp*28,0,7);c.stroke()}
 const m=eio(ph(t,.5,1.6)),u=1-m,out=eio(ph(t,3.9,4.8));cursor(c,u*u*600+2*u*m*560+m*m*372+out*150,u*u*350+2*u*m*190+m*m*260+out*80,1-.12*Math.sin(Math.PI*ph(t,ck,ck+.22)))}

function sPrompt(c,t,o){ink(c);bloom(c,320,50,310,o.a,.32);
 const mv=eio(ph(t,2.15,2.7)),s=o.head.slice(0,34),n=Math.floor(s.length*ph(t,.35,1.9));
 c.save();c.translate(320,lerp(180,58,mv));const sc=lerp(1,.82,mv);c.scale(sc,sc);
 sh(c,hexA(o.a,.5),36,14);rr(c,-215,-27,430,54,27,'#17182c','rgba(255,255,255,.18)',1.2);star(c,-188,0,9,o.a);
 txt(c,s.slice(0,n),'500 15px Poppins','#fff',-166,1,'left');const tw=c.measureText(s.slice(0,n)).width;
 if(t<2.1&&(n<s.length&&n>0||t*2.4%1<.55)){c.fillStyle=o.a;c.fillRect(-163+tw,-10,2,20)}
 const pu=1+.16*Math.sin(Math.PI*ph(t,1.95,2.2));c.beginPath();c.arc(188,0,17*pu,0,7);c.fillStyle=o.a;c.fill();c.strokeStyle='#fff';c.lineWidth=2;c.lineCap='round';c.lineJoin='round';c.beginPath();c.moveTo(188,6);c.lineTo(188,-6);c.moveTo(183,-1);c.lineTo(188,-6);c.lineTo(193,-1);c.stroke();c.restore();
 const cols=[o.a,'#2f6bff','#ec4899','#ff6a2b','#4898f7','#7c3aed'];
 for(let i=0;i<6;i++){const e=back(ph(t,2.6+i*.08,3.05+i*.08));if(e<=0)continue;c.save();c.translate(164+(i%3)*156,158+Math.floor(i/3)*112);c.scale(e,e);
  sh(c,'rgba(0,0,0,.5)',24,12);const g=c.createLinearGradient(-72,-48,72,48);g.addColorStop(0,cols[i]);g.addColorStop(1,mix(cols[i],'#0b0b1a',.62));rr(c,-72,-48,144,96,14,g,'rgba(255,255,255,.2)',1);
  c.fillStyle='rgba(255,255,255,.92)';if(i%2==0){c.beginPath();c.moveTo(-7,-12);c.lineTo(12,-1);c.lineTo(-7,10);c.closePath();c.fill()}else for(let k=0;k<4;k++){const bh=10+(i*7+k*5)%18;c.fillRect(-21+k*11,10-bh,7,bh)}
  rr(c,-60,30,52,6,3,'rgba(255,255,255,.6)');rr(c,-60,-40,26,12,6,'rgba(11,11,26,.45)');c.restore()}}

function sPhone(c,t,o){const g=c.createLinearGradient(0,0,640,360);g.addColorStop(0,mix(o.a,'#0b0b1a',.5));g.addColorStop(1,'#0b0b1a');c.fillStyle=g;c.fillRect(0,0,640,360);bloom(c,440,110,290,o.a,.4);
 c.save();c.translate(320,198+Math.sin(t*1.31)*4);c.rotate(-.1);sh(c,'rgba(0,0,0,.6)',54,30);rr(c,-82,-160,164,330,30,'#15162a','rgba(255,255,255,.28)',1.5);
 const sg=c.createLinearGradient(0,-150,0,160);sg.addColorStop(0,mix(o.a,'#0b0b1a',.25));sg.addColorStop(1,'#101124');rr(c,-73,-151,146,312,23,sg);rr(c,-24,-144,48,12,6,'#0b0b1a');txt(c,'9:41','600 24px Poppins','rgba(255,255,255,.92)',0,-104);c.restore();
 [['New lead','Sara wants a reel package','#2f6bff'],['Reel hit 10K views','Up 38% from yesterday','#ec4899'],['Payment received','Invoice #204 is paid','#16a34a']].forEach((n,i)=>{const e=back(ph(t,.6+i*.4,1.15+i*.4));if(e<=0)return;const y=148+i*58+Math.sin(t*1.31*2+i)*2.5,x=180+i*10;c.save();c.globalAlpha=Math.min(1,e*1.4);c.translate(0,(e-1)*46);
  sh(c,'rgba(0,0,0,.45)',30,16);rr(c,x,y,270,48,15,'rgba(255,255,255,.96)');noSh(c);rr(c,x+10,y+10,28,28,9,n[2]);txt(c,n[0],'600 13px Poppins','#0b0b1a',x+48,y+17,'left');txt(c,n[1],'400 11px Poppins','#6b7086',x+48,y+33,'left');txt(c,'now','400 10px Poppins','#9aa0b8',x+258,y+17,'right');c.restore()});
 const b=back(ph(t,1.95,2.3));if(b>0){c.save();c.translate(452,146);c.scale(b,b);sh(c,'rgba(255,59,48,.6)',14,4);c.beginPath();c.arc(0,0,14,0,7);c.fillStyle='#ff3b30';c.fill();noSh(c);txt(c,'3','700 14px Poppins','#fff',0,1);c.restore()}}

function sLogo(c,t,o){c.fillStyle='#050509';c.fillRect(0,0,640,360);const e=eo(ph(t,.2,1));bloom(c,320,180,250,o.a,.2*eo(ph(t,.6,1.6)));
 const b=(o.brand||'Brand').slice(0,16),F='700 40px Poppins';c.font=F;const tw=c.measureText(b).width,x0=320-(82+tw)/2,q=1-e;
 if(q>0)for(let k=0;k<8;k++){c.save();c.globalAlpha=.13*q;c.translate(x0+32+(k-3.5)*q*90,180);c.scale(1+q*6,1-q*.55);rr(c,-32,-32,64,64,18,o.a);c.restore()}
 c.save();c.globalAlpha=e;c.translate(x0+32,180);const k2=.8+.2*e;c.scale(k2,k2);sh(c,hexA(o.a,.7),36,10);const g=c.createLinearGradient(-32,-32,32,32);g.addColorStop(0,mix(o.a,'#ffffff',.28));g.addColorStop(1,o.a);rr(c,-32,-32,64,64,18,g);noSh(c);txt(c,b[0].toUpperCase(),'800 34px Poppins','#fff',0,2);c.restore();
 let lx=x0+82;c.font=F;[...b].forEach((ch,i)=>{const z=eo(ph(t,.95+i*.05,1.35+i*.05));c.globalAlpha=z;txt(c,ch,F,'#fff',lx,182+(1-z)*18,'left');lx+=c.measureText(ch).width});c.globalAlpha=1;
 c.fillStyle=o.a;c.fillRect(x0+82,214,tw*eio(ph(t,1.7,2.3)),3)}

function sRing(c,t,o){const base=()=>{ink(c);bloom(c,320,180,280,o.a,.22);const r=20+Math.sin(t*6)*3;c.strokeStyle=o.a;c.lineWidth=5;sh(c,hexA(o.a,.9),20,0);c.beginPath();c.arc(320,180,r,0,7);c.stroke();noSh(c)};
 const f=eio(ph(t,.9,1.55)),bk=eio(ph(t,3.3,3.95));base();if(f<=0)return;
 c.beginPath();c.arc(320,180,22+f*380,0,7);c.fillStyle=o.a;c.fill();
 c.font='700 34px Poppins';const L=wrap(c,o.head,480).slice(0,2);words(c,L,'700 34px Poppins','#fff',t,1.4,.08,24,ln=>320-c.measureText(ln).width/2,i=>180+(i-(L.length-1)/2)*44);
 if(bk>0){c.save();c.beginPath();c.arc(320,180,bk*400,0,7);c.clip();base();c.restore()}}

function sCode(c,t,o){ink(c);bloom(c,474,180,270,o.a,.25);const bn=(o.brand||'Brand').slice(0,10);
 sh(c,'rgba(0,0,0,.5)',40,20);rr(c,24,44,286,272,14,'#12132a','rgba(255,255,255,.14)',1);
 ['#ff5f57','#febc2e','#28c840'].forEach((k,i)=>{c.beginPath();c.arc(42+i*14,60,4,0,7);c.fillStyle=k;c.fill()});
 const C=[['<Nav brand="'+bn+'" />','#7dd3fc',0],['<Hero>','#c4b5fd',0],['<h1>Launch day</h1>','#ffffff',1],['<Button glow />','#f9a8d4',1],['</Hero>','#c4b5fd',0],['<Cards count={2} />','#fdba74',0]];
 const tot=C.reduce((s,l)=>s+l[0].length,0),n=Math.floor(tot*ph(t,.4,3.6)),at=[];let used=0;
 C.forEach((l,i)=>{const k=cl(n-used,0,l[0].length),y=92+i*27,s=l[0].slice(0,k);txt(c,i+1,'400 11px "Space Mono"','#4a4f7a',46,y,'right');txt(c,s,'400 12px "Space Mono"',l[1],58+l[2]*16,y,'left');
  if(k>0&&k<l[0].length||k==l[0].length&&i==5&&t*2%1<.5){c.fillStyle=o.a;c.fillRect(59+l[2]*16+c.measureText(s).width,y-8,6,15)}used+=l[0].length;at[i]=.4+3.2*used/tot});
 sh(c,'rgba(0,0,0,.5)',40,20);rr(c,330,44,286,272,14,'#fff');noSh(c);
 const pop=(i,fn)=>{const e=back(ph(t,at[i],at[i]+.4));if(e<=0)return;c.save();c.globalAlpha=Math.min(1,e*1.5);fn(e);c.restore()};
 pop(0,()=>{rr(c,342,56,262,26,8,'#f1f3fa');c.beginPath();c.arc(356,69,6,0,7);c.fillStyle=o.a;c.fill();txt(c,bn,'600 11px Poppins','#0b0b1a',368,70,'left');rr(c,560,63,34,12,6,'#d5d9e6')});
 pop(1,e=>{const g=c.createLinearGradient(342,90,604,210);g.addColorStop(0,o.a);g.addColorStop(1,mix(o.a,'#0b0b1a',.5));c.translate(473,150);c.scale(.9+.1*e,.9+.1*e);rr(c,-131,-60,262,120,12,g)});
 pop(2,e=>txt(c,'Launch day','700 22px Poppins','#fff',358,136+(1-e)*10,'left'));
 pop(3,e=>{c.translate(398,174);c.scale(e,e);sh(c,'rgba(255,255,255,.6)',16,0);rr(c,-40,-13,80,26,13,'#fff');noSh(c);txt(c,'Start','600 11px Poppins',o.a,0,1)});
 pop(5,e=>{for(let k=0;k<2;k++){const X=342+k*134,Y=222+(1-e)*14;rr(c,X,Y,128,82,10,'#f1f3fa');rr(c,X+10,Y+10,40,40,8,k?'#ec4899':'#2f6bff');rr(c,X+58,Y+16,58,7,3.5,'#c6cbdc');rr(c,X+58,Y+30,40,7,3.5,'#dfe3f0');rr(c,X+10,Y+60,108,7,3.5,'#dfe3f0')}})}

const PC={};function mul(a){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function pts(s){if(PC[s])return PC[s];const k=document.createElement('canvas');k.width=640;k.height=360;const x=k.getContext('2d',{willReadFrequently:true});let fs=112;x.font='800 '+fs+'px Poppins';while(x.measureText(s).width>540&&fs>30){fs-=6;x.font='800 '+fs+'px Poppins'}x.textAlign='center';x.textBaseline='middle';x.fillStyle='#fff';x.fillText(s,320,176);
 const d=x.getImageData(0,0,640,360).data,P=[],rnd=mul(7);for(let y=0;y<360;y+=4)for(let X=0;X<640;X+=4)if(d[(y*640+X)*4+3]>128)P.push([X,y]);const st=Math.max(1,Math.ceil(P.length/620));
 return PC[s]=P.filter((_,i)=>i%st==0).map(p=>({x:p[0],y:p[1],sx:rnd()*640,sy:rnd()*360,d:rnd(),z:rnd()}))}
function sPart(c,t,o){ink(c);bloom(c,320,178,300,o.a,.22);const P=pts((o.brand||'BRAND').toUpperCase().slice(0,10)),out=eio(ph(t,4.2,5.1));
 for(const p of P){const e=eio(ph(t,.3+p.d*.9,1.7+p.d*.9)),sw=(1-e)*1.6,dx=p.sx-p.x,dy=p.sy-p.y,cs=Math.cos(sw),sn=Math.sin(sw);let x=p.x+(dx*cs-dy*sn)*(1-e),y=p.y+(dx*sn+dy*cs)*(1-e);
  if(out>0){x+=(p.x-320)*out*1.4*(.4+p.z);y+=(p.y-176)*out*2.4*(.4+p.z)+out*out*70*p.z}
  c.globalAlpha=(.3+.7*e)*(1-out);c.fillStyle=p.z>.74?o.a:'#fff';const r=1.1+p.z*1.2;c.fillRect(x-r,y-r,r*2,r*2)}
 c.globalAlpha=eo(ph(t,2.5,3))*(1-out);txt(c,'EVERY DOT FINDS ITS PLACE','700 10px "Space Mono"','#8b90c8',320,266);c.globalAlpha=1}

function sGlass(c,t,o){const g=c.createLinearGradient(0,0,640,360),w=Math.PI*2/5;g.addColorStop(0,'#1a1140');g.addColorStop(1,'#0b0b1a');c.fillStyle=g;c.fillRect(0,0,640,360);
 bloom(c,170+Math.sin(t*w)*60,110+Math.cos(t*w)*30,240,o.a,.62);bloom(c,500+Math.cos(t*w)*50,270+Math.sin(t*w)*30,230,'#ec4899',.42);bloom(c,340,200,170,'#2f6bff',.3);
 const card=(i,x,y,W,H,fn)=>{const e=eo(ph(t,.25+i*.1,.85+i*.1));if(e<=0)return;c.save();c.globalAlpha=e;c.translate(x+W/2,y+H/2+Math.sin(t*w+i*1.3)*(3+i%3*1.5)+(1-e)*34);const s=.9+.1*e;c.scale(s,s);c.translate(-W/2,-H/2);
  sh(c,'rgba(0,0,0,.45)',36,18);rr(c,0,0,W,H,18,'rgba(255,255,255,.1)');noSh(c);const gl=c.createLinearGradient(0,0,0,H);gl.addColorStop(0,'rgba(255,255,255,.24)');gl.addColorStop(.5,'rgba(255,255,255,.03)');gl.addColorStop(1,'rgba(255,255,255,.08)');rr(c,0,0,W,H,18,gl,'rgba(255,255,255,.34)',1);fn();c.restore()};
 card(0,56,40,256,154,()=>{txt(c,'VIEWS TODAY','700 10px "Space Mono"','rgba(255,255,255,.7)',20,30,'left');txt(c,(12.4*eo(ph(t,.5,2))).toFixed(1)+'K','700 48px Poppins','#fff',20,80,'left');rr(c,20,116,92,22,11,'rgba(22,163,74,.92)');txt(c,'+18% today','600 10px Poppins','#fff',66,127.5)});
 card(1,328,40,256,100,()=>[.4,.65,.5,.85,.6,1,.75].forEach((v,k)=>{const h=v*56*eo(ph(t,.7+k*.06,1.4+k*.06));rr(c,24+k*31,80-h,19,h,5,k==5?'#fff':'rgba(255,255,255,.42)')}));
 card(2,328,156,120,164,()=>{const p=.72*eio(ph(t,.9,2.2));c.lineWidth=9;c.lineCap='round';c.strokeStyle='rgba(255,255,255,.18)';c.beginPath();c.arc(60,72,34,0,7);c.stroke();c.strokeStyle='#fff';c.beginPath();c.arc(60,72,34,-Math.PI/2,-Math.PI/2+p*Math.PI*2+.001);c.stroke();txt(c,Math.round(p*100)+'%','700 17px Poppins','#fff',60,73);txt(c,'Watch time','500 11px Poppins','rgba(255,255,255,.78)',60,138)});
 card(3,464,156,120,164,()=>['Captions','Music','Colour'].forEach((s,k)=>{const y=38+k*44,q=eio(ph(t,1.2+k*.5,1.45+k*.5));txt(c,s,'500 11px Poppins','rgba(255,255,255,.88)',14,y,'left');rr(c,76,y-9,32,18,9,mix('#6a6f95','#16a34a',q));c.beginPath();c.arc(85+14*q,y,6.5,0,7);c.fillStyle='#fff';c.fill()}));
 card(4,56,210,256,110,()=>{['#2f6bff','#ec4899','#ff6a2b'].forEach((k,i)=>{c.beginPath();c.arc(38+i*24,44,16,0,7);c.fillStyle=k;c.fill();c.strokeStyle='rgba(255,255,255,.9)';c.lineWidth=2;c.stroke()});txt(c,'3 editors online','600 14px Poppins','#fff',122,38,'left');txt(c,'Rendering your reel','400 11px Poppins','rgba(255,255,255,.72)',122,56,'left');rr(c,20,82,216,7,3.5,'rgba(255,255,255,.2)');rr(c,20,82,216*(.2+.75*eio(ph(t,1,4.2))),7,3.5,'#fff')})}

/* ---------- prompt library (written by Con-Gen Media) ---------- */
const RULES=`

Build rules
- One self-contained HTML file with a single canvas. Every frame is a pure function of time t, so it can be rendered frame by frame to video.
- Format {{FORMAT}}, {{DURATION}} seconds, 60 fps. Stretch the holds to fit the length and keep the animated beats at the timings above.
- Font: Poppins (700 for headlines, 500 for labels). Small labels in Space Mono.
- One accent colour only: {{ACCENT}}.
- Entrances ease out, nothing moves at linear speed, and landed text never drifts.
- No stock footage, no emoji, no placeholder text.`;
const PRE=`Before you build
Ask me for anything below that I have not given you. Use these defaults for whatever I skip.
- Brand name: {{BRAND}}
- Headline: "{{HEADLINE}}"
- Accent colour: {{ACCENT}}
- Format and length: {{FORMAT}}, {{DURATION}} seconds
- Logo file and brand font (optional). Without them, use the brand initial and Poppins.
- Music (optional): a track I have the rights to, and its tempo. Without one, build to 120 BPM so every hit lands on a beat.

The brief
`,POST=`

Render
- Capture frame by frame in a headless browser at 60 fps and encode to H.264 MP4. For fast moves, blend 4 to 8 sub-frames per frame so the motion blur is real.
- If there is sound: voice above effects above music, each effect placed so its peak lands on the event, mastered to about -14 LUFS.
- If you cannot run code where you are, say so first and give me a live preview instead of promising a video file.

Check before you show me
- Look at one still for every beat above. Fix anything cramped, clipped, overlapping or hard to read.
- Step through the fastest move frame by frame and remove any single-frame pop.
- If the piece loops, the last frame must match the first.

Start
Show me the beat list and three stills (opening, middle, final frame), then wait for my go-ahead before the full render.`;
const P=[
{id:'line-pill-card',title:'Line to pill to card',cat:['Product UI','Shapes'],L:4.6,fn:sLine,bg:'#0b0b1a',a:'#7c3aed',p:`Animate a hero reveal for {{BRAND}} where one shape carries the message in.

Stage: near-black, a faint perspective grid drifting toward the camera, one soft {{ACCENT}} glow behind the centre.

Beats
0.0-0.5 s  A thin {{ACCENT}} line grows outward from the centre.
0.5-1.0 s  The line thickens into a pill.
1.0-1.6 s  The pill expands into a white rounded card with a coloured shadow under it.
1.6-2.4 s  The headline "{{HEADLINE}}" rises into the card one word at a time, each word masked by its own line.
2.4-3.0 s  Three small feature chips pop in under the headline, 70 ms apart, with a slight overshoot.
3.0 s on   Hold the finished card perfectly still.

Sound: a soft riser into the pill, one glassy pop when the card lands.`},
{id:'odometer-stat',title:'Odometer stat card',cat:['Charts','Kinetic type'],L:4.4,fn:sOdo,bg:'#f5f7fc',a:'#2f6bff',p:`Animate one big result number for {{BRAND}} as an odometer.

Stage: off-white paper with a slow drifting dot grid. A white card floats in the centre with a wide soft shadow.

Beats
0.0-0.4 s  The card is on screen with the small label "REACH, LAST 30 DAYS".
0.4-2.4 s  The number 248% rolls up digit by digit. Each digit is its own wheel; the left wheel starts first and the others follow 120 ms apart, all decelerating into place.
1.2-2.8 s  A {{ACCENT}} sparkline draws itself from left to right under the number.
2.5-2.9 s  A small dark chip reading "+12% this week" pops onto the top-right corner of the card and keeps a gentle float.
3.0 s on   Number and card hold still. Only the chip floats.

The % sign and the sparkline are {{ACCENT}}. Everything else is ink on white.

Sound: one clean glassy tick per digit change, pitched up in the music's key. No looping clock tick.`},
{id:'bar-chart-3d',title:'3D bar chart build',cat:['Charts'],L:4.6,fn:sBars,bg:'#0b0b1a',a:'#ec4899',p:`Build a weekly chart for {{BRAND}} out of solid 3D bars.

Stage: near-black with a {{ACCENT}} glow rising from the floor. Title "Weekly views" top left with a small mono label "MON - SAT".

Beats
0.0-0.4 s  Title and a thin floor plate are on screen.
0.4-1.5 s  Six extruded bars (front, side and top face) grow from the floor 90 ms apart with a small overshoot.
1.0-1.9 s  A value label rises in above each bar as it lands, counting up to its final number.
1.5 s on   The tallest bar is {{ACCENT}} with a glow. The other five stay muted slate so the eye goes to one place.

Depth comes from the three faces and the glow, not from tilting the whole chart.

Sound: a short low thud per bar, a brighter hit on the tallest one.`},
{id:'rolling-word',title:'Rolling word headline',cat:['Kinetic type'],L:5.2,fn:sRoll,bg:'#ffffff',a:'#2f6bff',loop:1,p:`Animate a one-line headline for {{BRAND}} where only the last word changes.

Stage: clean white. Behind the type, the word MOTION sits as a giant pale outline that drifts slowly sideways.

Layout: the words "Make it" in bold ink, followed by a {{ACCENT}} pill that holds the changing word in white.

Beats (repeat for each word)
Hold 0.95 s. Then in 0.35 s the current word rolls up and out of the pill while the next rolls in from below, like a wheel. The pill resizes smoothly to fit the new word and the whole line stays centred.

Word list: faster. / bolder. / sharper. / {{BRAND}}.

The static words never move. The last word in the list is the brand name, so the loop lands on the brand.

Sound: one glassy click per roll.`},
{id:'cursor-click',title:'Cursor click to done',cat:['Product UI'],L:5.4,fn:sCursor,bg:'#f5f7fc',a:'#7c3aed',p:`Show a product action for {{BRAND}} in one continuous shot: a cursor clicks a button and the interface finishes the job.

Stage: off-white paper with a dot grid. A flat white settings card in the centre, never tilted, titled "Export reel", with three toggle rows (Captions on, 4K upscale off, Brand kit on) and a wide {{ACCENT}} "Generate" button.

Beats
0.5-1.6 s   The cursor travels in from the bottom right on a curved path and slows into the button.
1.6-1.9 s   It pauses.
1.9 s       Click: the button dips 7% and a {{ACCENT}} ring ripples out from the cursor tip.
2.05-3.4 s  The button becomes a progress bar that fills left to right with a live percentage.
3.4 s       It turns green with a tick and the word "Done", landing with a small overshoot.
3.9 s on    The cursor leaves the frame.

Sound: a soft click on press, a rising tone during progress, one chime on Done.`},
{id:'prompt-to-grid',title:'Prompt bar to results grid',cat:['Product UI'],L:5.6,fn:sPrompt,bg:'#0b0b1a',a:'#ff6a2b',p:`Animate an AI product moment for {{BRAND}}: a prompt is typed, sent, and results appear.

Stage: near-black with a {{ACCENT}} glow at the top.

Beats
0.3-1.9 s   In a dark glass prompt pill in the centre, the text "{{HEADLINE}}" types itself with a {{ACCENT}} caret. A small sparkle icon sits at the left, a round send button at the right.
1.95-2.2 s  The send button pulses once.
2.15-2.7 s  The pill shrinks to 82% and slides to the top of the frame.
2.6-3.5 s   Six result tiles pop into a 3 x 2 grid, 80 ms apart, each with a different colour gradient and real-looking content (a play icon or a tiny chart).
3.5 s on    Hold.

Type only while characters appear. Tiles are never empty.

Sound: light typing during the text only, a soft whoosh as the pill moves, small pops for the tiles.`},
{id:'phone-notifications',title:'Phone notification stack',cat:['Phone'],L:4.8,fn:sPhone,bg:'#0b0b1a',a:'#7c3aed',p:`Animate three good-news notifications landing on a phone for {{BRAND}}.

Stage: a diagonal gradient from deep {{ACCENT}} to near-black, with one bright glow behind the phone.

Beats
0.0 s      A phone stands in the centre, rotated about 6 degrees, floating gently, lock screen showing 9:41.
0.6 s      Notification 1 drops in front of the phone with a spring: "New lead".
1.0 s      Notification 2: "Reel hit 10K views".
1.4 s      Notification 3: "Payment received".
1.95 s     A red badge with the number 3 pops on the top-right corner.
2.3 s on   The cards keep a tiny independent float. Nothing else moves.

The notification cards are wider than the phone and stay level while the phone is tilted, so they read as floating in front of it. Each card has an app-colour icon, a title, one line of detail and the word "now".

Sound: one soft notification tone per card, each a step higher than the last.`},
{id:'logo-smear',title:'Logo from a light smear',cat:['Logo','Shapes'],L:4.4,fn:sLogo,bg:'#050509',a:'#4898f7',p:`Animate a logo lockup for {{BRAND}} that resolves out of a streak of light and then stays still.

Stage: pure black. Nothing else on screen.

Beats
0.2-1.0 s   A wide horizontal streak of {{ACCENT}} light compresses toward the centre and resolves into a rounded-square icon tile holding the brand initial.
0.95-1.6 s  The wordmark "{{BRAND}}" appears to the right of the tile, letter by letter, each rising 18 px and fading in 50 ms after the last.
1.7-2.3 s   A thin {{ACCENT}} underline draws from left to right under the wordmark.
2.3 s on    Hold the lockup completely still for at least 2 seconds.

No bounce, no glow pulse, no spin. The stillness at the end is the point.

Sound: one airy swell into the tile, a single soft hit when the wordmark completes.`},
{id:'ring-flood',title:'Ring flood transition',cat:['Shapes','Kinetic type'],L:4.6,fn:sRing,bg:'#0b0b1a',a:'#2f6bff',loop:1,p:`Animate a scene change for {{BRAND}} that is caused by a shape on screen.

Beats
0.0-0.9 s    On a near-black stage a small {{ACCENT}} ring pulses in the centre.
0.9-1.55 s   The ring opens and floods the whole frame with {{ACCENT}}.
1.4-2.2 s    The headline "{{HEADLINE}}" lands in white on the colour, word by word, each rising 24 px.
2.2-3.3 s    Hold.
3.3-3.95 s   A near-black circle grows from the centre and wipes back to the dark stage, where the ring is pulsing again.

There is no cut and no crossfade. The ring is the transition both ways.

Sound: a low pulse on the ring, a deep cinematic whoosh on each flood, landing on the beat.`},
{id:'code-to-ui',title:'Code types, UI builds',cat:['Code','Product UI'],L:5.6,fn:sCode,bg:'#0b0b1a',a:'#7c3aed',p:`Animate a split screen for {{BRAND}}: code is typed on the left and the interface builds itself on the right.

Stage: near-black. Left, a dark editor window with three window dots and line numbers. Right, a white preview window.

Beats
0.4-3.6 s  Six short lines of component code type themselves at a steady speed with a block caret, each tag type in its own colour.
           As each line completes, the matching part pops into the preview: a nav bar with the brand name, a {{ACCENT}} hero block, the title "Launch day", a white button, then two content cards.
3.6 s on   The caret blinks on the last line and the finished page holds.

Each preview element appears within 100 ms of its line finishing, so the viewer feels the code causing the interface.

Sound: typing only while characters appear, one soft pop per element.`},
{id:'particles-to-word',title:'Particles form the brand name',cat:['Particles','Kinetic type'],L:5.2,fn:sPart,bg:'#0b0b1a',a:'#ec4899',p:`Animate about 600 small particles that gather into the word "{{BRAND}}".

Stage: near-black with a soft {{ACCENT}} glow in the centre.

Beats
0.0-0.3 s  Particles are scattered across the whole frame, dim.
0.3-2.6 s  Each particle swirls on a curved path into its place in the letters, with a random delay so the word fills in unevenly and then snaps readable.
2.5-3.0 s  A small mono caption fades in below.
3.0-4.2 s  Hold: the word is fully formed and still.
4.2-5.0 s  The particles burst outward and fall away.

About a quarter of the particles are {{ACCENT}}, the rest white. Particles are tiny squares between 2 and 5 px.

Sound: a granular shimmer that tightens as the word forms, one soft hit when it becomes readable.`},
{id:'glass-bento',title:'Glass bento dashboard',cat:['Product UI'],L:5,fn:sGlass,bg:'#120c2c',a:'#7c3aed',loop:1,p:`Animate a floating glass dashboard for {{BRAND}}.

Stage: deep violet to near-black, with three large soft colour glows ({{ACCENT}}, pink and blue) drifting slowly behind everything.

Beats
0.25-1.3 s  Five frosted glass cards rise into a bento layout 100 ms apart, each scaling from 90% to 100%.
0.5-2.2 s   Inside the cards the content comes alive: a views counter running up to 12.4K, a row of bars growing, a ring filling to 72%, three toggles switching on one after another, and a render progress bar.
2.2 s on    Every card keeps its own slow float at a slightly different height and speed.

Glass recipe: 10% white fill, a brighter top edge fading down, a 1 px light border and a deep soft shadow. Depth comes from the shadow and the separate floats, not from tilting the cards.

Sound: soft pops as the cards land, one glassy tick per toggle.`}
];

function circ(c,x,y,r,f,s,lw){c.beginPath();c.arc(x,y,Math.max(0,r),0,6.2832);if(f){c.fillStyle=f;c.fill()}if(s){noSh(c);c.strokeStyle=s;c.lineWidth=lw||1;c.stroke()}}
function pop(c,x,y,e,fn){if(e<=0)return;c.save();c.translate(x,y);c.scale(e,e);fn();c.restore()}
function chk(c,x,y,s,col,lw){c.strokeStyle=col;c.lineWidth=lw||2.4;c.lineCap='round';c.lineJoin='round';c.beginPath();c.moveTo(x-5*s,y);c.lineTo(x-1.5*s,y+4*s);c.lineTo(x+6*s,y-4.5*s);c.stroke()}
function heart(c,x,y,s,col){c.beginPath();c.moveTo(x,y+s*.9);c.bezierCurveTo(x-s*1.5,y-s*.2,x-s*.7,y-s*1.2,x,y-s*.4);c.bezierCurveTo(x+s*.7,y-s*1.2,x+s*1.5,y-s*.2,x,y+s*.9);c.fillStyle=col;c.fill()}
function paint(cv,p,t,o){const c=cv.getContext('2d');S=cv.width/640;c.setTransform(S,0,0,S,0,0);c.save();t=((t%p.L)+p.L)%p.L;try{p.fn(c,t,o)}catch(e){if(!p._e){p._e=1;console.error(p.id,e)}}c.restore();c.setTransform(S,0,0,S,0,0);noSh(c);c.globalAlpha=1;
 if(!p.loop){const f=1-Math.min(ph(t,0,.3),1-ph(t,p.L-.3,p.L));if(f>0){c.globalAlpha=f;c.fillStyle=p.bg;c.fillRect(0,0,640,360);c.globalAlpha=1}}}
function fit(cv){const w=Math.round(cv.clientWidth*Math.min(2,devicePixelRatio||1));if(w&&cv.width!==w){cv.width=w;cv.height=Math.round(w*9/16)}}
window.CG={cl,ph,lerp,eo,eio,back,rgb,hexA,mix,sh,noSh,rr,txt,wrap,ink,bloom,floor,paper,star,cursor,words,mul,circ,pop,chk,heart,paint,fit,P,PC,RULES,PRE,POST};
})();
