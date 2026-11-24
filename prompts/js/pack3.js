/* Con-Gen prompt library, pack 3: product UI, phone, isometric, particles, characters */
(()=>{const {cl,ph,lerp,eo,eio,back,hexA,mix,sh,noSh,rr,txt,ink,bloom,paper,star,mul,circ,pop,chk,heart,P}=CG;

function sTimeline(c,t,o){ink(c);bloom(c,320,0,330,o.a,.25);const tc=2.68;
 sh(c,'rgba(0,0,0,.5)',30,14);const g=c.createLinearGradient(222,26,418,136);g.addColorStop(0,mix(o.a,'#0b0b1a',.2));g.addColorStop(1,'#1a1b33');rr(c,222,22,196,112,10,g,'rgba(255,255,255,.18)',1);
 circ(c,320,78,16,'rgba(255,255,255,.92)');c.fillStyle='#0b0b1a';c.beginPath();c.moveTo(315,70);c.lineTo(328,78);c.lineTo(315,86);c.closePath();c.fill();
 const p0=ph(t,.9,4.4),px=70+p0*500,fr=Math.floor(p0*240);txt(c,'00:0'+Math.floor(fr/30)+':'+String(fr%30).padStart(2,'0'),'400 10px "Space Mono"','#fff',410,124,'right');
 rr(c,50,156,540,176,12,'#12132a','rgba(255,255,255,.1)',1);
 [[['#7c3aed',0,150,'Intro'],['#2f6bff',154,210,'A-roll'],['#ec4899',368,132,'Outro']],[['#16a34a',40,186,'B-roll'],['#ff6a2b',230,160,'Screen']],[['#4898f7',0,500,'Music']]].forEach((row,r)=>row.forEach((k,i)=>{const e=eo(ph(t,.15+r*.12+i*.1,.65+r*.12+i*.1));if(e<=0)return;const y=174+r*50,x=70+k[1]+(1-e)*60,w=k[2];c.globalAlpha=e;
  if(r==1&&i==0){rr(c,x,y,w,36,7,k[0])}
  if(r==0&&i==1){const cut=eo(ph(t,tc,tc+.25))*6;rr(c,x,y,100-cut/2,36,7,k[0]);rr(c,x+100+cut/2,y,w-100-cut/2,36,7,k[0])}else if(r==2){rr(c,x,y,w,36,7,hexA(k[0],.3));c.strokeStyle=k[0];c.lineWidth=1.5;c.beginPath();for(let q=6;q<w-4;q+=4){const hh=3+Math.abs(Math.sin(q*.21)*Math.sin(q*.045))*13;c.moveTo(x+q,y+18-hh);c.lineTo(x+q,y+18+hh)}c.stroke()}else if(!(r==1&&i==0))rr(c,x,y,w,36,7,k[0]);
  txt(c,k[3],'600 10px Poppins','#fff',x+8,y+11,'left');c.globalAlpha=1}));
 c.fillStyle='#fff';c.fillRect(px-1,152,2,184);c.beginPath();c.moveTo(px-6,146);c.lineTo(px+6,146);c.lineTo(px,157);c.closePath();c.fill();
 const f=ph(t,tc,tc+.45);if(f>0&&f<1){c.strokeStyle=hexA('#ffffff',1-f);c.lineWidth=2;c.beginPath();c.arc(324,192,6+f*24,0,6.2832);c.stroke()}}

function sToggles(c,t,o){paper(c,t);sh(c,'rgba(20,30,80,.18)',54,26);rr(c,190,26,260,308,26,'#fff');noSh(c);let on=0;
 [['Auto captions','#2f6bff'],['Beat sync','#ec4899'],['Colour grade','#ff6a2b'],['Noise clean-up','#16a34a'],['Brand kit','#7c3aed']].forEach((r,i)=>{const y=98+i*46,s=.7+i*.55,q=eio(ph(t,s,s+.28));if(q>.5)on++;c.globalAlpha=eo(ph(t,.1+i*.06,.5+i*.06));
  rr(c,208,y-15,30,30,9,r[1]);circ(c,223,y,5,'rgba(255,255,255,.9)');txt(c,r[0],'500 13px Poppins','#0b0b1a',250,y+1,'left');
  c.save();c.translate(410,y);c.scale(1+.12*Math.sin(Math.PI*ph(t,s,s+.28)),1);rr(c,-21,-12,42,24,12,mix('#d5d9e6',o.a,q));sh(c,'rgba(0,0,0,.25)',5,2);circ(c,-9+18*q,0,9.5,'#fff');noSh(c);c.restore();
  if(i<4){c.fillStyle='#eef0f6';c.fillRect(250,y+23,182,1)}c.globalAlpha=1});
 txt(c,'Smart edit','700 17px Poppins','#0b0b1a',208,58,'left');const all=on==5;pop(c,404,58,all?.8+.2*back(ph(t,3.04,3.4)):1,()=>{rr(c,-30,-11,60,22,11,all?'#16a34a':'#f1f3fa');txt(c,on+' of 5','600 10px Poppins',all?'#fff':'#6b7086',0,1)})}

function sCal(c,t,o){ink(c);bloom(c,150,340,310,o.a,.32);sh(c,'rgba(0,0,0,.5)',44,20);rr(c,60,36,330,288,20,'#15162b','rgba(255,255,255,.12)',1);
 txt(c,'November','600 16px Poppins','#fff',84,66,'left');'MTWTFSS'.split('').forEach((d,i)=>txt(c,d,'700 9px "Space Mono"','#6f74a6',101+i*42,94));
 const n=Math.floor(28*ph(t,.5,3.4)),st=Math.min(10,Math.max(0,n-18));
 for(let i=0;i<28;i++){const x=84+(i%7)*42,y=108+Math.floor(i/7)*50,s=.5+i*(2.9/28);rr(c,x,y,34,40,9,'rgba(255,255,255,.05)');txt(c,i+1,'500 10px Poppins','#8b90c8',x+8,y+11,'left');
  if(i!=9&&i!=17)pop(c,x+17,y+26,back(ph(t,s,s+.3)),()=>{sh(c,hexA(o.a,.7),10,0);circ(c,0,0,7,o.a);noSh(c);chk(c,0,0,.55,'#fff',1.6)})}
 sh(c,'rgba(0,0,0,.5)',44,20);rr(c,410,36,170,136,20,o.a);noSh(c);txt(c,'POSTED','700 10px "Space Mono"','rgba(255,255,255,.78)',430,64,'left');txt(c,Math.max(0,n-(n>9?1:0)-(n>17?1:0)),'700 52px Poppins','#fff',430,114,'left');txt(c,'reels this month','400 11px Poppins','rgba(255,255,255,.82)',430,152,'left');
 sh(c,'rgba(0,0,0,.5)',44,20);rr(c,410,188,170,136,20,'#15162b','rgba(255,255,255,.12)',1);txt(c,'BEST STREAK','700 10px "Space Mono"','#8b90c8',430,216,'left');txt(c,st+' days','700 30px Poppins','#fff',430,258,'left');rr(c,430,290,130,6,3,'rgba(255,255,255,.12)');rr(c,430,290,130*st/10,6,3,'#16a34a')}

function sPricing(c,t,o){paper(c,t);
 [['Starter','$29',2],['Pro','$79',4],['Studio','$199',3]].forEach((k,i)=>{const mid=i==1,e=eo(ph(t,.2+i*.12,.8+i*.12)),up=mid?eio(ph(t,1.3,1.8)):0,s=1+up*.13,hot=up>.5;if(e<=0)return;c.save();c.globalAlpha=e;c.translate(142+i*178,190+(1-e)*40-up*6);c.scale(s,s);
  sh(c,mid?hexA(o.a,.12+.4*up):'rgba(20,30,80,.14)',40,20);rr(c,-76,-108,152,216,20,mid?mix('#ffffff',o.a,up):'#fff');noSh(c);const fg=hot?'#fff':'#0b0b1a',mu=hot?'rgba(255,255,255,.82)':'#6b7086';
  txt(c,k[0],'600 13px Poppins',mu,-58,-80,'left');txt(c,k[1],'700 34px Poppins',fg,-58,-46,'left');txt(c,'per month','400 10px Poppins',mu,-58,-20,'left');
  for(let j=0;j<4;j++){const q=eo(ph(t,1+i*.1+j*.08,1.3+i*.1+j*.08)),y=8+j*22;c.globalAlpha=e*q;if(j<k[2]){circ(c,-50,y,7,hot?'rgba(255,255,255,.25)':hexA(o.a,.14));chk(c,-50,y,.5,hot?'#fff':o.a,1.6)}else circ(c,-50,y,7,'#eef0f6');rr(c,-34,y-3.5,[70,56,82,48][j],7,3.5,hot?'rgba(255,255,255,.55)':j<k[2]?'#c6cbdc':'#e8ebf3')}
  c.globalAlpha=e;rr(c,-58,78,116,20,10,hot?'#fff':'#0b0b1a');txt(c,'Choose','600 9px Poppins',hot?o.a:'#fff',0,88.5);c.restore()});
 pop(c,320,58,back(ph(t,1.8,2.15)),()=>{sh(c,'rgba(11,11,26,.3)',14,6);rr(c,-38,-12,76,24,12,'#0b0b1a');noSh(c);star(c,-24,0,6,'#fbbf24');txt(c,'Popular','600 10px Poppins','#fff',6,1)})}

function sSearch(c,t,o){ink(c);bloom(c,320,30,310,o.a,.32);const q='motion templates',n=Math.floor(q.length*ph(t,.4,1.5)),s=q.slice(0,n);
 sh(c,hexA(o.a,.4),30,12);rr(c,120,36,400,48,24,'#fff');noSh(c);circ(c,148,58,7,null,'#6b7086',2);c.beginPath();c.moveTo(153,63);c.lineTo(158,68);c.stroke();
 if(n==0)txt(c,'Search','400 15px Poppins','#b4bad2',170,61,'left');txt(c,s,'500 15px Poppins','#0b0b1a',170,61,'left');if(t<1.7&&(n<q.length&&n>0||t*2.4%1<.5)){c.fillStyle=o.a;c.fillRect(172+c.measureText(s).width,50,2,20)}
 const hl=eio(ph(t,2.9,3.3));[['Kinetic title pack','24 presets','#7c3aed'],['Logo sting, 3 seconds','12 presets','#ec4899'],['Lower thirds','18 presets','#2f6bff'],['Chart builders','9 presets','#ff6a2b']].forEach((r,i)=>{const e=eo(ph(t,1.7+i*.09,2.1+i*.09));if(e<=0)return;const y=104+i*58+(1-e)*18,sel=i==0?hl:0;c.globalAlpha=e;
  if(sel>0)sh(c,hexA(o.a,.5*sel),24,8);rr(c,120,y,400,48,14,sel>0?mix('#17182c',o.a,sel):'#17182c','rgba(255,255,255,.1)',1);rr(c,132,y+9,30,30,9,sel>.5?'rgba(255,255,255,.25)':r[2]);txt(c,r[0],'600 13px Poppins','#fff',176,y+18,'left');txt(c,r[1],'400 10px "Space Mono"',sel>.5?'rgba(255,255,255,.85)':'#6f74a6',176,y+35,'left');
  if(sel>0){c.globalAlpha=e*sel;rr(c,462,y+13,44,22,11,'#fff');txt(c,'Open','600 10px Poppins',o.a,484,y+25)}c.globalAlpha=1})}

function sIso(c,t,o){paper(c,t);
 [['Design','#2f6bff','Layout and type'],['Motion','#ec4899','Timing and easing'],['Sound',o.a,'Hits on the beat']].forEach((l,i)=>{const a=ph(t,.4+i*.6,.7+i*.6);if(a<=0)return;const e=back(ph(t,.4+i*.6,1+i*.6)),cx=226,cy=254-i*54-(1-e)*90,w=124,h=62,d=22,k=l[1];c.globalAlpha=a;
  if(i==0)sh(c,'rgba(20,30,80,.28)',40,26);c.fillStyle=mix(k,'#0b0b1a',.32);c.beginPath();c.moveTo(cx-w,cy);c.lineTo(cx,cy+h);c.lineTo(cx,cy+h+d);c.lineTo(cx-w,cy+d);c.closePath();c.fill();noSh(c);
  c.fillStyle=mix(k,'#0b0b1a',.55);c.beginPath();c.moveTo(cx+w,cy);c.lineTo(cx,cy+h);c.lineTo(cx,cy+h+d);c.lineTo(cx+w,cy+d);c.closePath();c.fill();
  const g=c.createLinearGradient(cx-w,cy,cx+w,cy);g.addColorStop(0,mix(k,'#ffffff',.34));g.addColorStop(1,k);c.fillStyle=g;c.beginPath();c.moveTo(cx,cy-h);c.lineTo(cx+w,cy);c.lineTo(cx,cy+h);c.lineTo(cx-w,cy);c.closePath();c.fill();
  const q=eo(ph(t,.9+i*.6,1.3+i*.6));c.globalAlpha=q;if(q>0){c.strokeStyle='#b4bad2';c.lineWidth=1.5;c.setLineDash([4,5]);c.beginPath();c.moveTo(cx+w+10,cy+4);c.lineTo(cx+w+10+62*q,cy+4);c.stroke();c.setLineDash([]);circ(c,cx+w+10,cy+4,3.5,k);txt(c,l[0],'700 18px Poppins','#0b0b1a',cx+w+84,cy-4,'left');txt(c,l[2],'400 11px Poppins','#6b7086',cx+w+84,cy+14,'left')}c.globalAlpha=1})}

const CF=(()=>{const r=mul(11);return Array.from({length:80},()=>({a:r()*6.2832,v:120+r()*260,s:4+r()*6,k:Math.floor(r()*5),w:r()*6,rv:(r()-.5)*14}))})();
function sConf(c,t,o){c.fillStyle='#fff';c.fillRect(0,0,640,360);bloom(c,320,150,270,o.a,.13);
 const p=eio(ph(t,.3,1));c.lineCap='round';c.strokeStyle='#e9ecf5';c.lineWidth=8;c.beginPath();c.arc(320,146,44,0,6.2832);c.stroke();
 if(p>0){c.strokeStyle='#16a34a';c.beginPath();c.arc(320,146,44,-1.5708,-1.5708+p*6.2832);c.stroke()}
 const u=t-1.05;if(u>0){const cols=[o.a,'#2f6bff','#ec4899','#ff6a2b','#fbbf24'];CF.forEach(f=>{const dr=1-Math.exp(-u*2.2);c.save();c.globalAlpha=cl(1.7-u*.6);c.translate(320+Math.cos(f.a)*f.v*dr*.95,146+Math.sin(f.a)*f.v*dr*.6-40*dr+90*u*u);c.rotate(f.w+u*f.rv);c.fillStyle=cols[f.k];c.fillRect(-f.s/2,-f.s/4,f.s,f.s/2*(.4+Math.abs(Math.cos(u*6+f.w))));c.restore()})}
 pop(c,320,146,back(ph(t,1,1.4)),()=>{sh(c,'rgba(22,163,74,.5)',30,10);circ(c,0,0,44,'#16a34a');noSh(c);chk(c,0,0,3,'#fff',7)});
 const e=eo(ph(t,1.3,1.7));c.globalAlpha=e;txt(c,'Published','700 26px Poppins','#0b0b1a',320,236+(1-e)*10);txt(c,'Your reel is live on 3 platforms','400 13px Poppins','#6b7086',320,264+(1-e)*10);c.globalAlpha=1}

function sCompare(c,t,o){ink(c);bloom(c,530,190,310,o.a,.32);txt(c,'Average views per reel','600 17px Poppins','#fff',70,60,'left');
 [['BEFORE',1.2,'#565c93',.4],['AFTER',9.8,o.a,1.1]].forEach((r,i)=>{const y=128+i*88,p=eo(ph(t,r[3],r[3]+1.3)),w=440*(r[1]/9.8)*p;txt(c,r[0],'700 10px "Space Mono"','#8b90c8',70,y-24,'left');rr(c,70,y-10,440,42,12,'rgba(255,255,255,.06)');
  if(w>1){if(i)sh(c,hexA(o.a,.7),30,0);const g=c.createLinearGradient(70,0,70+w,0);g.addColorStop(0,mix(r[2],'#0b0b1a',.3));g.addColorStop(1,r[2]);rr(c,70,y-10,w,42,12,g);noSh(c)}
  txt(c,(r[1]*p).toFixed(1)+'K','700 16px Poppins','#fff',Math.max(70+w+12,84),y+12,'left')});
 pop(c,548,106,back(ph(t,2.5,2.9)),()=>{c.rotate(-.12);sh(c,'rgba(0,0,0,.5)',20,8);rr(c,-36,-24,72,48,14,'#fff');noSh(c);txt(c,'8x','800 26px Poppins',o.a,0,2)});
 c.globalAlpha=eo(ph(t,2.8,3.2));txt(c,'SAME CLIP. BETTER FIRST SECOND.','700 10px "Space Mono"','#6f74a6',70,300,'left');c.globalAlpha=1}

function sRules(c,t,o){c.fillStyle='#fff';c.fillRect(0,0,640,360);const Rl=['Hook in frame one','Cut on every beat','End on a hold'],seg=1.5,i=Math.min(2,Math.floor(t/seg)),p=i<2?eio(ph(t-i*seg,1.15,1.5)):0,a=eo(ph(t,.1,.6));c.globalAlpha=a;
 c.save();c.beginPath();c.rect(40,104,232,152);c.clip();for(let k=0;k<2;k++)if(i+k<3)txt(c,'0'+(i+k+1),'800 140px Poppins',o.a,156,186+k*160-p*160);c.restore();
 c.fillStyle='#0b0b1a';c.fillRect(288,180-54*a,3,108*a);
 c.save();c.beginPath();c.rect(304,140,330,84);c.clip();for(let k=0;k<2;k++)if(i+k<3){txt(c,'RULE '+(i+k+1)+' OF 3','700 10px "Space Mono"','#8b90a8',312,160+k*90-p*90,'left');txt(c,Rl[i+k],'700 26px Poppins','#0b0b1a',312,192+k*90-p*90,'left')}c.restore();
 for(let k=0;k<3;k++)rr(c,312+k*30,248,22,4,2,k<=i+(p>.5?1:0)?o.a:'#e3e6f0');c.globalAlpha=1}

const WP=(()=>{const r=mul(23);return Array.from({length:110},()=>({a:r()*6.2832,o:r(),s:.4+r()*.9,k:r()}))})();
function sWarp(c,t,o){c.fillStyle='#05050c';c.fillRect(0,0,640,360);const sp=.3+eio(ph(t,.3,1.6))*1.15-eio(ph(t,3.4,4.4))*1.15;c.lineCap='round';
 WP.forEach(f=>{const z=(f.o+t*.45*f.s)%1,r0=24+z*z*430,len=(5+z*95*sp)*f.s,cs=Math.cos(f.a),sn=Math.sin(f.a)*.7;c.globalAlpha=Math.min(1,z*1.6);c.strokeStyle=f.k>.7?o.a:'#fff';c.lineWidth=.6+z*2;c.beginPath();c.moveTo(320+cs*r0,180+sn*r0);c.lineTo(320+cs*(r0+len),180+sn*(r0+len));c.stroke()});c.globalAlpha=1;
 bloom(c,320,180,170,'#05050c',.9);bloom(c,320,180,150,o.a,.3);const e=eo(ph(t,.8,1.5)),s=1.25-.25*e,b=(o.brand||'Brand').slice(0,14);c.save();c.globalAlpha=e;c.translate(320,176);c.scale(s,s);c.font='800 44px Poppins';const fs=c.measureText(b).width>420?32:44;sh(c,'rgba(0,0,0,.8)',24,0);txt(c,b,'800 '+fs+'px Poppins','#fff',0,0);noSh(c);txt(c,'LAUNCHING NOW','700 10px "Space Mono"',o.a,0,38);c.restore()}

function sFeed(c,t,o){const g=c.createLinearGradient(0,0,640,360);g.addColorStop(0,'#0b0b1a');g.addColorStop(1,mix(o.a,'#0b0b1a',.55));c.fillStyle=g;c.fillRect(0,0,640,360);bloom(c,320,180,270,o.a,.38);
 sh(c,'rgba(0,0,0,.6)',50,24);rr(c,232,12,176,336,28,'#15162a','rgba(255,255,255,.28)',1.5);
 const seg=1.4,i=Math.floor(t/seg),u=t%seg,p=eio(ph(u,.9,1.4)),cols=[o.a,'#ec4899','#2f6bff','#ff6a2b'];c.save();c.beginPath();c.roundRect(240,20,160,320,21);c.clip();
 for(let k=0;k<2;k++){const n=(i+k)%4,y=20+(k-p)*320,gg=c.createLinearGradient(240,y,400,y+320);gg.addColorStop(0,mix(cols[n],'#ffffff',.18));gg.addColorStop(1,mix(cols[n],'#0b0b1a',.72));c.fillStyle=gg;c.fillRect(240,y,160,321);
  circ(c,320,y+132,48,'rgba(255,255,255,.14)');circ(c,320,y+132,30,'rgba(255,255,255,.22)');txt(c,['Hook','Cut','Grade','Post'][n],'800 26px Poppins','#fff',320,y+133);
  circ(c,262,y+250,9,'#fff');rr(c,278,y+246,52,8,4,'rgba(255,255,255,.8)');rr(c,252,y+272,96,8,4,'rgba(255,255,255,.85)');rr(c,252,y+288,64,6,3,'rgba(255,255,255,.5)')}
 c.restore();rr(c,296,26,48,12,6,'#0b0b1a');
 const on=u>.25,hs=on?.9+.35*back(ph(u,.25,.55))-.25*ph(u,.55,.75):1;c.save();c.translate(382,196);c.scale(hs,hs);heart(c,0,0,11,on?'#ff3b5c':'rgba(255,255,255,.92)');c.restore();txt(c,on?'2.4K':'2.3K','600 9px Poppins','#fff',382,217);
 [['+2.4K views',146,112,0],['38 saves',500,240,1.7]].forEach(k=>pop(c,k[1],k[2]+Math.sin(t*6.2832/2.8+k[3])*4,back(ph(t,.5+k[3]*.3,.9+k[3]*.3)),()=>{sh(c,'rgba(0,0,0,.45)',24,12);rr(c,-54,-18,108,36,18,'#fff');noSh(c);circ(c,-36,0,8,o.a);txt(c,k[0],'600 11px Poppins','#0b0b1a',-22,1,'left')}))}

function sMascot(c,t,o){paper(c,t);const bx=320+Math.sin(t*6.2832/4.8)*196,bt=t*1.25%1,h=4*bt*(1-bt),by=290-h*172,sq=1-.25*Math.max(0,1-h*8),br=1+Math.sin(t*6.2832/1.6)*.025;
 c.fillStyle='rgba(20,30,80,.13)';c.beginPath();c.ellipse(bx,304,8+(1-h)*10,4,0,0,6.2832);c.fill();c.beginPath();c.ellipse(320,304,82,9,0,0,6.2832);c.fill();
 c.save();c.translate(320,302);c.scale(1/br,br);sh(c,hexA(o.a,.4),30,10);const g=c.createLinearGradient(-70,-140,70,0);g.addColorStop(0,mix(o.a,'#ffffff',.38));g.addColorStop(1,o.a);c.beginPath();c.moveTo(-72,0);c.bezierCurveTo(-94,-70,-60,-140,0,-140);c.bezierCurveTo(60,-140,94,-70,72,0);c.closePath();c.fillStyle=g;c.fill();noSh(c);
 const bl=t%2.4>2.26?.12:1;[-26,26].forEach(ex=>{const dx=bx-(320+ex),dy=by-216,d=Math.hypot(dx,dy)||1;c.save();c.translate(ex,-86);c.scale(1,bl);circ(c,0,0,17,'#fff');circ(c,dx/d*7,dy/d*7,7.5,'#0b0b1a');circ(c,dx/d*7+2.5,dy/d*7-2.5,2.2,'#fff');c.restore()});
 c.strokeStyle='#0b0b1a';c.lineWidth=3;c.lineCap='round';c.beginPath();c.arc(0,-58,12,.3,Math.PI-.3);c.stroke();circ(c,-52,-54,7,'rgba(255,255,255,.26)');circ(c,52,-54,7,'rgba(255,255,255,.26)');c.restore();
 c.save();c.translate(bx,by);c.scale(2-sq,sq);sh(c,'rgba(255,106,43,.5)',14,6);circ(c,0,0,13,'#ff6a2b');noSh(c);circ(c,-4,-4,3.5,'rgba(255,255,255,.7)');c.restore();
 txt(c,'LOOK, BLINK, BREATHE','700 10px "Space Mono"','#8b90a8',320,40)}

P.push(
{id:'editor-timeline',title:'Editor timeline with one cut',cat:['Product UI'],L:5,fn:sTimeline,bg:'#0b0b1a',a:'#7c3aed',p:`Animate a video editor timeline for {{BRAND}} with one clean cut.

Stage: near-black with a {{ACCENT}} glow from the top. A small preview monitor with a play button and a running timecode sits above a three-track timeline panel.

Beats
0.15-1.0 s  Clips slide into their tracks from the right, 100 ms apart: Intro, A-roll and Outro on track 1, B-roll and Screen on track 2, a full-width music track with a waveform on track 3.
0.9-4.4 s   A white playhead sweeps from left to right at constant speed while the timecode counts.
2.7 s       As the playhead crosses the A-roll clip, the clip splits in two with a 6 px gap and a white ring flashes at the cut point.

Every clip has a label and its own colour. The music track is a tinted bar with waveform lines.

Sound: soft slides for the clips, one crisp slice on the cut.`},
{id:'toggle-cascade',title:'Settings toggle cascade',cat:['Product UI','Phone'],L:4.6,fn:sToggles,bg:'#f5f7fc',a:'#7c3aed',p:`Animate a settings sheet for {{BRAND}} where five features switch on one after another.

Stage: off-white paper with a dot grid. One tall white card titled "Smart edit" with a counter pill top right.

Beats
0.1-0.8 s  Five rows fade in 60 ms apart. Each row has a coloured icon tile, a label and a grey toggle: Auto captions, Beat sync, Colour grade, Noise clean-up, Brand kit.
0.7 s on   Every 550 ms the next toggle switches on: the knob slides right, the track turns {{ACCENT}} and the toggle stretches 12% for a moment. The counter pill counts "1 of 5" up to "5 of 5".
3.0 s      On the fifth toggle the counter pill turns green and pops.

Sound: one glassy tick per toggle, each a note higher, and a small chime on five of five.`},
{id:'posting-calendar',title:'Posting calendar fill',cat:['Product UI','Charts'],L:4.8,fn:sCal,bg:'#0b0b1a',a:'#2f6bff',p:`Animate a posting calendar for {{BRAND}} that fills up over a month.

Stage: near-black with a {{ACCENT}} glow from the bottom left. A dark calendar card on the left, two stat cards stacked on the right.

Beats
0.5-3.4 s  Day by day, a {{ACCENT}} tick badge pops into each of the 28 day cells. Two days are skipped on purpose so it looks real.
0.5-3.4 s  The top stat card, filled {{ACCENT}}, counts "POSTED" up to 26.
2.4-3.4 s  The lower stat card counts "BEST STREAK" up to 10 days while a green bar fills.
3.4 s on   Hold.

Badges pop with a small overshoot. Counts change only when a badge lands.

Sound: one very soft tick per day, getting slightly brighter toward the end.`},
{id:'pricing-spotlight',title:'Pricing cards spotlight',cat:['Product UI'],L:4.6,fn:sPricing,bg:'#f5f7fc',a:'#7c3aed',p:`Animate three pricing cards for {{BRAND}} where the middle plan takes the spotlight.

Stage: off-white paper with a dot grid.

Beats
0.2-1.0 s  Three white cards rise in 120 ms apart: Starter $29, Pro $79, Studio $199. Each has a plan name, a price, "per month", four feature rows and a button.
1.0-1.6 s  The feature rows tick in 80 ms apart. Included features get a {{ACCENT}} tick, the rest stay grey.
1.3-1.8 s  The middle card scales up 13%, lifts 6 px and floods with {{ACCENT}}. Its text turns white and its shadow turns coloured.
1.8 s      A dark "Popular" badge with a gold star pops onto its top edge.

Depth comes from scale and shadow. The cards never tilt.

Sound: soft pops for the cards, one bright hit when the middle card lifts.`},
{id:'search-to-pick',title:'Search, results, pick one',cat:['Product UI'],L:4.8,fn:sSearch,bg:'#0b0b1a',a:'#2f6bff',p:`Animate a search for {{BRAND}}: type, results, pick one.

Stage: near-black with a {{ACCENT}} glow from the top.

Beats
0.4-1.5 s  In a white search pill, the query "motion templates" types itself with a {{ACCENT}} caret.
1.7-2.4 s  Four dark result rows rise in 90 ms apart. Each has a coloured tile, a title and a mono count: Kinetic title pack, Logo sting, Lower thirds, Chart builders.
2.9-3.3 s  The first row fills with {{ACCENT}} and a white "Open" button fades in on its right.
3.3 s on   Hold.

Rows are never empty and every title is readable.

Sound: typing while characters appear, a soft whoosh for the list, one glassy click on the highlight.`},
{id:'isometric-stack',title:'Isometric stack build',cat:['Diagrams','Shapes'],L:4.4,fn:sIso,bg:'#f5f7fc',a:'#7c3aed',p:`Animate an isometric stack for {{BRAND}} that builds one layer at a time.

Stage: off-white paper with a dot grid.

Beats
0.4 s     A blue slab drops in from above and lands with a small overshoot. A dotted line draws out to the right and labels it "Design", with "Layout and type" underneath.
1.0 s     A pink slab lands on top of it: "Motion", "Timing and easing".
1.6 s     A {{ACCENT}} slab lands on top: "Sound", "Hits on the beat".
2.2 s on  Hold the finished stack.

Each slab has three visible faces: a light top with a gradient, and two darker sides. Only the bottom slab casts a ground shadow.

Sound: a low thud per slab, each slightly higher, landing on the beat.`},
{id:'success-confetti',title:'Success tick and confetti',cat:['Particles','Product UI'],L:4.4,fn:sConf,bg:'#ffffff',a:'#7c3aed',p:`Animate a success moment for {{BRAND}}: a tick, then confetti.

Stage: clean white with a faint {{ACCENT}} glow.

Beats
0.3-1.0 s  A green ring draws clockwise over a pale grey ring.
1.0-1.4 s  The ring fills solid green and a white tick pops in with an overshoot.
1.05 s     Eighty small paper rectangles burst out from the tick in {{ACCENT}}, blue, pink, orange and gold. They spread fast, slow down, tumble and fall under gravity, then fade.
1.3-1.7 s  "Published" rises in below in bold, followed by "Your reel is live on 3 platforms".

Each piece of confetti spins and flips at its own speed so no two move alike.

Sound: a rising tone on the ring, one bright chime on the tick, a soft paper burst.`},
{id:'before-after-bars',title:'Before and after bars',cat:['Charts'],L:4.6,fn:sCompare,bg:'#0b0b1a',a:'#ff6a2b',p:`Animate a before and after comparison for {{BRAND}} with two horizontal bars.

Stage: near-black with a {{ACCENT}} glow on the right. Title top left: "Average views per reel".

Beats
0.4-1.7 s  The "BEFORE" bar grows in muted slate to 1.2K, its value counting beside the tip.
1.1-2.4 s  The "AFTER" bar grows in glowing {{ACCENT}} all the way across to 9.8K.
2.5 s      A white "8x" badge pops in at a slight tilt above the bars.
2.8 s      A mono line fades in at the bottom: "SAME CLIP. BETTER FIRST SECOND."

Both bars run on the same scale so the difference is honest. The value label always sits just past the tip of its bar.

Sound: a short low tone for the first bar, a longer rising tone for the second, one hit on the badge.`},
{id:'rolling-rules',title:'Three rules, rolling number',cat:['Kinetic type'],L:4.6,fn:sRules,bg:'#ffffff',a:'#2f6bff',p:`Animate a three-point list for {{BRAND}} with a rolling number.

Stage: clean white.

Layout: a huge {{ACCENT}} numeral on the left, a thin vertical ink line, and on the right a small mono label ("RULE 1 OF 3") above one bold rule.

Beats (every 1.5 s)
Hold 1.15 s. Then in 0.35 s the numeral rolls up to the next number like a wheel while the rule text rolls up with it, each inside its own mask.

Rules: "Hook in frame one" / "Cut on every beat" / "End on a hold".

Three short bars under the text show progress and fill in {{ACCENT}} as the list moves on. The last rule holds to the end.

Sound: one glassy click per roll.`},
{id:'speed-line-launch',title:'Speed-line launch title',cat:['Particles','Logo'],L:4.6,fn:sWarp,bg:'#05050c',a:'#4898f7',p:`Animate a launch title for {{BRAND}} inside a tunnel of speed lines.

Stage: near-black. About 110 thin lines streak outward from the centre toward the edges, most white, some {{ACCENT}}.

Beats
0.0-0.3 s  The lines are short and calm.
0.3-1.6 s  They stretch into long streaks as the speed builds.
0.8-1.5 s  The brand name scales down from 125% to 100% into the centre and locks, with a mono line "LAUNCHING NOW" in {{ACCENT}} under it.
1.6-3.4 s  Full speed. The name stays perfectly still.
3.4-4.4 s  The streaks shorten again.

Lines get thicker and brighter as they near the edge of the frame, which sells the depth.

Sound: a deep cinematic whoosh that builds with the streaks, one hit when the name locks.`},
{id:'phone-feed-scroll',title:'Phone feed scroll with likes',cat:['Phone'],L:5.6,fn:sFeed,bg:'#0b0b1a',a:'#7c3aed',p:`Animate a phone scrolling a vertical video feed for {{BRAND}}.

Stage: a diagonal gradient from near-black to deep {{ACCENT}}, with a glow behind an upright phone in the centre.

Beats (every 1.4 s)
0.25 s     The heart on the right of the screen pops, turns red, and the count ticks from 2.3K to 2.4K.
0.9-1.4 s  The feed swipes up one full video. Each video has its own colour and one bold word: Hook, Cut, Grade, Post.

Outside the phone, two white stat chips float at different heights: "+2.4K views" on the left and "38 saves" on the right. They pop in at the start and keep a slow drift.

The phone never tilts. Depth comes from the chips floating in front of the background.

Sound: a short low dry swipe per scroll, a soft pop on each like.`},
{id:'living-mascot',title:'Mascot that looks, blinks, breathes',cat:['Characters'],L:4.8,fn:sMascot,bg:'#f5f7fc',a:'#7c3aed',loop:1,p:`Animate a simple original mascot for {{BRAND}} that feels alive.

Stage: off-white paper with a dot grid.

Character: a rounded {{ACCENT}} blob with a soft gradient, two large white eyes with dark pupils and a tiny highlight, a small curved smile and two faint cheek spots. No arms or legs.

Beats
All the time  An orange ball bounces across the floor from side to side, squashing as it lands and stretching as it rises.
All the time  The mascot's pupils follow the ball wherever it goes.
Every 2.4 s   It blinks: the eyes close for about 140 ms.
All the time  It breathes: the body gets a little taller and narrower, then relaxes.

Ground shadows sit under both the mascot and the ball. The ball's shadow shrinks as it rises.

Sound: a soft rubbery bounce on each landing.`}
);
})();
