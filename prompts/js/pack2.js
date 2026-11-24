/* Con-Gen prompt library, pack 2: diagrams, charts, music, type, shapes */
(()=>{const {cl,ph,lerp,eo,eio,back,hexA,mix,sh,noSh,rr,txt,ink,bloom,paper,circ,pop,chk,P}=CG;

function sFlow(c,t,o){paper(c,t);const N=[['Clip in',92],['Cut',244],['Captions',396],['Posted',548]],y=172;
 N.forEach((n,i)=>{if(i<3){const p=eo(ph(t,.7+i*.75,1.2+i*.75)),x0=n[1]+52,x1=N[i+1][1]-52;if(p>0){c.save();c.setLineDash([5,6]);c.strokeStyle='#b4bad2';c.lineWidth=2;c.beginPath();c.moveTo(x0,y);c.lineTo(lerp(x0,x1,p),y);c.stroke();c.restore()}
   const q=ph(t,3.4,4.6)*3-i;if(q>0&&q<1){sh(c,hexA(o.a,.9),12,0);circ(c,lerp(x0,x1,q),y,5.5,o.a);noSh(c)}}
  const last=i==3;pop(c,n[1],y,back(ph(t,.3+i*.75,.75+i*.75)),()=>{sh(c,last?hexA(o.a,.45):'rgba(20,30,80,.16)',30,14);rr(c,-50,-46,100,92,20,last?o.a:'#fff');noSh(c);circ(c,0,-12,16,last?'rgba(255,255,255,.22)':hexA(o.a,.12));txt(c,i+1,'700 13px "Space Mono"',last?'#fff':o.a,0,-11);txt(c,n[0],'600 13px Poppins',last?'#fff':'#0b0b1a',0,24)});
  pop(c,n[1]+42,y-40,back(ph(t,.95+i*.75,1.3+i*.75)),()=>{circ(c,0,0,10,'#16a34a');chk(c,0,0,.8,'#fff',2)})});
 txt(c,'ONE CLIP, FOUR STEPS, NO HANDS','700 10px "Space Mono"','#8b90a8',320,280)}

function sOrbit(c,t,o){ink(c);bloom(c,320,180,290,o.a,.32);const w=Math.PI*2/6,e0=eo(ph(t,.2,.9));
 const sat=[[0,0,'Reels','#ec4899'],[0,3.1416,'Shorts','#ff6a2b'],[1,0,'TikTok','#4898f7'],[1,2.094,'LinkedIn','#2f6bff'],[1,4.189,'Stories','#16a34a']].map((s,i)=>{const R=s[0]?140:84,a=t*w*(s[0]?1:-1)+s[1];return{x:320+Math.cos(a)*R*1.55,y:180+Math.sin(a)*R*.6,z:Math.sin(a),n:s[2],k:s[3],e:back(ph(t,.6+i*.12,1.1+i*.12))}});
 [84,140].forEach(R=>{c.globalAlpha=.22*e0;c.strokeStyle='#fff';c.lineWidth=1;c.beginPath();c.ellipse(320,180,R*1.55,R*.6,0,0,6.2832);c.stroke()});c.globalAlpha=1;
 const dr=s=>pop(c,s.x,s.y,s.e*(.86+.2*s.z),()=>{c.globalAlpha=.7+.3*(s.z+1)/2;sh(c,hexA(s.k,.6),18,6);rr(c,-36,-14,72,28,14,s.k);noSh(c);txt(c,s.n,'600 11px Poppins','#fff',0,1)});
 sat.filter(s=>s.z<0).forEach(dr);
 pop(c,320,180,back(e0),()=>{sh(c,hexA(o.a,.85),44,0);const g=c.createLinearGradient(-34,-34,34,34);g.addColorStop(0,mix(o.a,'#ffffff',.32));g.addColorStop(1,o.a);circ(c,0,0,36,g);noSh(c);txt(c,(o.brand||'B')[0].toUpperCase(),'800 30px Poppins','#fff',0,2)});
 sat.filter(s=>s.z>=0).forEach(dr)}

function sDonut(c,t,o){paper(c,t);sh(c,'rgba(20,30,80,.16)',50,24);rr(c,110,60,420,240,24,'#fff');noSh(c);
 const seg=[[.46,o.a,'Reels'],[.27,'#ec4899','Shorts'],[.17,'#ff6a2b','Stories'],[.10,'#cfd4e4','Other']],a0=-Math.PI/2,p=eio(ph(t,.4,2.2));let acc=0;
 c.strokeStyle='#f1f3fa';c.lineWidth=26;c.beginPath();c.arc(222,180,62,0,6.2832);c.stroke();
 seg.forEach((s,i)=>{const from=acc;acc+=s[0];const q=cl((p-from)/s[0]),st=a0+from*6.2832,en=a0+(from+s[0]*q)*6.2832-.03;if(en>st){c.strokeStyle=s[1];c.lineWidth=26;c.lineCap='butt';c.beginPath();c.arc(222,180,62,st,en);c.stroke()}
  const e=eo(ph(t,.7+i*.35,1.1+i*.35)),y=118+i*42+(1-e)*8;c.globalAlpha=e;rr(c,340,y-7,14,14,4,s[1]);txt(c,s[2],'500 13px Poppins','#4b5070',364,y,'left');txt(c,Math.round(s[0]*100*e)+'%','700 15px Poppins','#0b0b1a',500,y,'right');c.globalAlpha=1});
 txt(c,(24.8*p).toFixed(1)+'K','700 24px Poppins','#0b0b1a',222,176);txt(c,'VIEWS','700 9px "Space Mono"','#8b90a8',222,198)}

function sLines(c,t,o){ink(c);bloom(c,480,80,300,o.a,.28);txt(c,'Growth','600 18px Poppins','#fff',60,50,'left');
 c.strokeStyle='rgba(255,255,255,.07)';c.lineWidth=1;for(let i=0;i<5;i++){c.beginPath();c.moveTo(60,90+i*50);c.lineTo(590,90+i*50);c.stroke()}
 const A=[[60,270],[130,252],[200,262],[270,220],[340,232],[410,176],[480,150],[550,96],[590,84]],B=[[60,280],[130,274],[200,262],[270,266],[340,246],[410,250],[480,228],[550,232],[590,214]],p=eio(ph(t,.5,3)),X=60+530*p;
 const path=Q=>{c.beginPath();Q.forEach((q,i)=>i?c.lineTo(q[0],q[1]):c.moveTo(q[0],q[1]))};
 c.save();c.beginPath();c.rect(0,0,X,360);c.clip();path(A);c.lineTo(590,290);c.lineTo(60,290);c.closePath();const g=c.createLinearGradient(0,80,0,290);g.addColorStop(0,hexA(o.a,.42));g.addColorStop(1,hexA(o.a,0));c.fillStyle=g;c.fill();
 c.lineJoin='round';c.lineCap='round';path(B);c.strokeStyle='#565c93';c.lineWidth=2.5;c.stroke();sh(c,hexA(o.a,.9),14,0);path(A);c.strokeStyle=o.a;c.lineWidth=3.5;c.stroke();c.restore();
 let y=270;for(let i=0;i<A.length-1;i++)if(X>=A[i][0]&&X<=A[i+1][0])y=lerp(A[i][1],A[i+1][1],(X-A[i][0])/(A[i+1][0]-A[i][0]));
 if(p>0){circ(c,X,y,6,'#fff',o.a,3);const tx=Math.min(X,548);sh(c,'rgba(0,0,0,.4)',16,8);rr(c,tx-34,y-46,68,26,13,'#fff');noSh(c);txt(c,lerp(1.2,9.8,p).toFixed(1)+'K','700 12px Poppins','#0b0b1a',tx,y-32)}
 ['JAN','MAR','MAY','JUL','SEP'].forEach((m,i)=>txt(c,m,'700 9px "Space Mono"','#6f74a6',80+i*124,312))}

function sTerm(c,t,o){ink(c);bloom(c,320,340,330,o.a,.28);sh(c,'rgba(0,0,0,.55)',50,24);rr(c,90,46,460,268,16,'#10111f','rgba(255,255,255,.14)',1);
 ['#ff5f57','#febc2e','#28c840'].forEach((k,i)=>circ(c,110+i*15,64,4.5,k));txt(c,'render.sh','400 11px "Space Mono"','#6f74a6',320,64);
 const cmd='npx render reel --fps 60',n=Math.floor(cmd.length*ph(t,.4,1.5)),s=cmd.slice(0,n);txt(c,'$','700 13px "Space Mono"',o.a,112,104,'left');txt(c,s,'400 13px "Space Mono"','#fff',130,104,'left');
 if(t<1.7&&(n<cmd.length||t*2.5%1<.5)){c.fillStyle='#fff';c.fillRect(131+c.measureText(s).width,96,7,16)}
 [['Scenes compiled','12 files'],['Frames rendered','480 / 480'],['Audio mixed','-14 LUFS'],['Exported','reel.mp4']].forEach((l,i)=>{const s0=1.8+i*.55,e=eo(ph(t,s0,s0+.3));if(e<=0)return;const y=140+i*30,d=t>s0+.45;c.globalAlpha=e;
  if(d){circ(c,118,y,7,'#16a34a');chk(c,118,y,.6,'#fff',1.8)}else{c.strokeStyle=o.a;c.lineWidth=2;c.lineCap='round';c.beginPath();c.arc(118,y,6,t*9,t*9+4);c.stroke()}
  txt(c,l[0],'400 12px "Space Mono"','#d5d9f0',136,y,'left');txt(c,d?l[1]:'...','400 12px "Space Mono"',d?'#8b90c8':'#6f74a6',528,y,'right');c.globalAlpha=1});
 rr(c,112,276,416,8,4,'rgba(255,255,255,.1)');rr(c,112,276,416*eio(ph(t,1.8,4)),8,4,o.a)}

function sEq(c,t,o){ink(c);const pulse=Math.pow(1-t*2%1,3);bloom(c,320,186,220+pulse*70,o.a,.24+pulse*.22);
 for(let i=0;i<28;i++){const v=.25+.75*Math.abs(Math.sin(t*Math.PI*2+i*.7)*Math.sin(t*Math.PI+i*.31)),h=(16+v*112)*(.7+.3*pulse)*eo(ph(t,.1+i*.02,.6+i*.02)),x=98+i*16;if(h<=0)continue;
  const g=c.createLinearGradient(0,186-h/2,0,186+h/2);g.addColorStop(0,mix(o.a,'#ffffff',.4));g.addColorStop(.5,o.a);g.addColorStop(1,mix(o.a,'#0b0b1a',.45));rr(c,x,186-h/2,9,h,4.5,g)}
 pop(c,320,302,back(ph(t,.5,.95)),()=>{sh(c,'rgba(0,0,0,.5)',24,10);rr(c,-134,-23,268,46,23,'rgba(255,255,255,.1)','rgba(255,255,255,.26)',1);circ(c,-108,0,15,o.a);c.fillStyle='#fff';c.beginPath();c.moveTo(-112,-6);c.lineTo(-102,0);c.lineTo(-112,6);c.closePath();c.fill();
  txt(c,'Launch Day (Instrumental)','600 12px Poppins','#fff',-84,-6,'left');txt(c,'120 BPM','400 10px "Space Mono"','#8b90c8',-84,10,'left');txt(c,'0:'+String(Math.floor(t)+12).padStart(2,'0'),'400 10px "Space Mono"','#8b90c8',116,1,'right')});
 txt(c,'EVERY BAR HITS THE BEAT','700 10px "Space Mono"','#6f74a6',320,58)}

function sLyric(c,t,o){c.fillStyle='#fff';c.fillRect(0,0,640,360);bloom(c,320,430,330,o.a,.2);
 const Ls=['Cut on the beat','Land on the drop','Let the type sing'],seg=1.6,i=Math.floor(t/seg)%3,u=t%seg,sl=eio(ph(u,1.3,1.6)),F='700 36px Poppins';
 const draw=(k,y,a,mode)=>{const ws=Ls[(k+6)%3].split(' ');c.font=F;let x=320-c.measureText(ws.join(' ')).width/2;ws.forEach((w,j)=>{const on=mode==2?1:mode==1?ph(u,.1+j/ws.length,.22+j/ws.length):0;c.globalAlpha=a;txt(c,w,F,mix('#c9cede',j==ws.length-1?o.a:'#0b0b1a',on),x,y-(mode==1?Math.sin(on*Math.PI)*5:0),'left');x+=c.measureText(w+' ').width})};
 draw(i-1,108-sl*68,(1-sl)*.3,2);draw(i,176-sl*68,1-sl*.7,1);draw(i+1,244-sl*68,.3+sl*.7,0);draw(i+2,312-sl*68,sl*.3,0);c.globalAlpha=1;
 for(let k=0;k<4;k++){const b=Math.floor(u/.4)%4==k;circ(c,296+k*16,330,b?5:3.5,b?o.a:'#dfe3f0')}}

function sChat(c,t,o){const g=c.createLinearGradient(0,0,0,360);g.addColorStop(0,'#f5f7fc');g.addColorStop(1,mix(o.a,'#ffffff',.78));c.fillStyle=g;c.fillRect(0,0,640,360);
 const bn=(o.brand||'Brand').slice(0,16);sh(c,'rgba(20,30,80,.2)',50,24);rr(c,170,22,300,334,28,'#fff');noSh(c);circ(c,202,54,14,o.a);txt(c,bn[0].toUpperCase(),'700 13px Poppins','#fff',202,55);txt(c,bn,'600 14px Poppins','#0b0b1a',226,48,'left');txt(c,'online','400 10px Poppins','#16a34a',226,64,'left');c.fillStyle='#eceef5';c.fillRect(170,80,300,1);
 [[0,'Can you turn this into a reel?',.4],[1,'On it. Captions too?',1.5],[0,'Yes, and make it loop',2.6],[1,'Done. Sending the file now',3.7]].forEach((m,i)=>{const y=98+i*44,ty=m[2];c.font='500 12px Poppins';const w=c.measureText(m[1]).width+26,x=m[0]?454-w:186,ox=m[0]?454:186;
  if(m[0]&&t>ty-.7&&t<ty)pop(c,430,y+16,back(ph(t,ty-.7,ty-.45)),()=>{rr(c,-24,-14,48,28,14,o.a);for(let k=0;k<3;k++)circ(c,-9+k*9,Math.sin(t*9-k*.9)*2.5,2.6,'#fff')});
  const e=back(ph(t,ty,ty+.35));if(e>0){c.save();c.translate(ox,y+32);c.scale(e,e);c.translate(-ox,-y-32);sh(c,'rgba(20,30,80,.1)',12,5);rr(c,x,y,w,32,14,m[0]?o.a:'#f1f3fa');noSh(c);txt(c,m[1],'500 12px Poppins',m[0]?'#fff':'#0b0b1a',x+13,y+17,'left');c.restore()}});
 pop(c,400,304,back(ph(t,4.3,4.65)),()=>{sh(c,'rgba(20,30,80,.25)',16,8);rr(c,-54,-22,108,44,12,'#0b0b1a');noSh(c);rr(c,-46,-14,28,28,6,o.a);c.fillStyle='#fff';c.beginPath();c.moveTo(-36,-6);c.lineTo(-27,0);c.lineTo(-36,6);c.closePath();c.fill();txt(c,'reel.mp4','600 11px Poppins','#fff',-10,-5,'left');txt(c,'12 MB','400 9px Poppins','#9aa0b8',-10,9,'left')})}

function sSlice(c,t,o){ink(c);bloom(c,320,180,310,o.a,.22);const F='800 150px Poppins',e=eo(ph(t,.15,.7)),d=(eo(ph(t,1.15,1.4))-eio(ph(t,3.3,3.8)))*13,bl=ph(t,1,1.2);
 const half=top=>{c.save();c.beginPath();if(top){c.moveTo(0,0);c.lineTo(640,0);c.lineTo(640,150);c.lineTo(0,214)}else{c.moveTo(0,214);c.lineTo(640,150);c.lineTo(640,360);c.lineTo(0,360)}c.closePath();c.clip();c.globalAlpha=e;txt(c,'CUT.',F,'#fff',320+(top?-d:d),186+(1-e)*40+(top?d*.1:-d*.1));c.restore()};
 half(1);half(0);const dn=Math.min(1,Math.abs(d)/13);
 if(dn>0){c.save();c.globalAlpha=dn*.95;sh(c,o.a,16,0);c.strokeStyle=o.a;c.lineWidth=2;c.beginPath();c.moveTo(70,207);c.lineTo(570,157);c.stroke();c.restore()}
 if(bl>0&&bl<1){const a=lerp(-.2,1,bl),b=a+.25;c.strokeStyle='#fff';c.lineWidth=3;c.lineCap='round';c.beginPath();c.moveTo(640*a,214-64*a);c.lineTo(640*b,214-64*b);c.stroke()}
 c.globalAlpha=eo(ph(t,1.5,1.9))*(1-ph(t,3.2,3.5));txt(c,'THE WORD DOES WHAT IT SAYS','700 10px "Space Mono"','#8b90c8',320,300);c.globalAlpha=1}

function sTrack(c,t,o){c.fillStyle='#fff';c.fillRect(0,0,640,360);bloom(c,320,180,340,o.a,.1);
 const sp=(s,F,y,p,from,to,col,a)=>{if(a<=0)return;c.font=F;const ch=[...s],ws=ch.map(q=>c.measureText(q).width),k=lerp(from,to,p);let x=320-(ws.reduce((m,n)=>m+n,0)+k*(ch.length-1))/2;c.globalAlpha=a;ch.forEach((q,i)=>{txt(c,q,F,col,x,y,'left');x+=ws[i]+k});c.globalAlpha=1};
 const b=(o.brand||'Brand').slice(0,12);c.font='800 64px Poppins';const F='800 '+(c.measureText(b).width>500?46:64)+'px Poppins';
 for(let g=3;g>=1;g--){const pg=eo(ph(t,.4+g*.07,1.9+g*.07));sp(b,F,186,pg,34,-1,o.a,.14*(1-pg)*ph(t,.4,.6))}
 sp(b,F,186,eo(ph(t,.4,1.9)),34,-1,'#0b0b1a',ph(t,.4,.9));sp('INTRODUCING','700 11px "Space Mono"',118,eo(ph(t,.2,1.4)),16,4,'#8b90a8',ph(t,.2,.6));
 const u=eio(ph(t,2,2.5));rr(c,320-60*u,238,120*u,4,2,o.a);const q=eo(ph(t,2.4,2.8));c.globalAlpha=q;txt(c,'Wide to tight, soft to sharp','400 14px Poppins','#6b7086',320,270+(1-q)*8);c.globalAlpha=1}

function sMorph(c,t,o){ink(c);const seg=1.25,N=[0,3,4,6],nm=['Circle','Triangle','Square','Hexagon'],cols=[o.a,'#ec4899','#ff6a2b','#4898f7'],i=Math.floor(t/seg)%4,j=(i+1)%4,p=eio(ph(t%seg,.7,1.25));
 const R=(n,a)=>{if(!n)return 1;const s=6.2832/n,m=((a%s)+s)%s;return 1.12*Math.cos(Math.PI/n)/Math.cos(m-Math.PI/n)},col=mix(cols[i],cols[j],p);
 bloom(c,320,166,270,cols[i],.3*(1-p));bloom(c,320,166,270,cols[j],.3*p);
 c.save();c.translate(320,166);c.rotate(t*6.2832/5-1.5708);sh(c,col,50,0);c.beginPath();for(let k=0;k<=96;k++){const a=k/96*6.2832,r=lerp(R(N[i],a),R(N[j],a),p)*78;k?c.lineTo(Math.cos(a)*r,Math.sin(a)*r):c.moveTo(Math.cos(a)*r,Math.sin(a)*r)}c.closePath();c.fillStyle=col;c.fill();noSh(c);c.restore();
 c.save();c.translate(320,166);c.rotate(t*6.2832/5-1.5708);c.beginPath();for(let k=0;k<=96;k++){const a=k/96*6.2832,r=lerp(R(N[i],a),R(N[j],a),p)*78;k?c.lineTo(Math.cos(a)*r,Math.sin(a)*r):c.moveTo(Math.cos(a)*r,Math.sin(a)*r)}c.closePath();c.rotate(-(t*6.2832/5-1.5708));const g=c.createLinearGradient(-70,-80,70,80);g.addColorStop(0,'rgba(255,255,255,.6)');g.addColorStop(.5,'rgba(255,255,255,0)');g.addColorStop(1,'rgba(0,0,0,.32)');c.fillStyle=g;c.fill();c.restore();
 c.globalAlpha=1-p;txt(c,nm[i],'600 18px Poppins','#fff',320,290-p*12);c.globalAlpha=p;txt(c,nm[j],'600 18px Poppins','#fff',320,302-p*12);c.globalAlpha=1;txt(c,'ONE SHAPE, FOUR FORMS','700 10px "Space Mono"','#6f74a6',320,328)}

function sDots(c,t,o){ink(c);for(let y=0;y<13;y++)for(let x=0;x<23;x++){const X=34+x*26,Y=24+y*26,d=Math.hypot(X-320,Y-180),w=Math.max(0,Math.sin(d*.05-t*Math.PI)),e=eo(ph(t,d*.002,.5+d*.002));if(e<=0)continue;c.globalAlpha=.22+.78*w;c.fillStyle=mix('#ffffff',o.a,w);c.beginPath();c.arc(X,Y-w*6,(1.4+w*w*5)*e,0,6.2832);c.fill()}c.globalAlpha=1;
 pop(c,320,180,back(ph(t,.6,1.05)),()=>{sh(c,'rgba(0,0,0,.75)',40,10);rr(c,-124,-31,248,62,31,'#0b0b1a','rgba(255,255,255,.22)',1);txt(c,(o.brand||'Brand').slice(0,16),'700 22px Poppins','#fff',0,1)})}

P.push(
{id:'flow-diagram',title:'Four-step flow diagram',cat:['Diagrams'],L:5,fn:sFlow,bg:'#f5f7fc',a:'#7c3aed',p:`Animate a four-step workflow diagram for {{BRAND}} that builds from left to right.

Stage: off-white paper with a slow dot grid.

Beats
0.3 s      Step 1 pops in as a white rounded tile with a number badge and the label "Clip in".
0.7-1.2 s  A dotted connector draws from tile 1 to where tile 2 will be.
0.95 s     A green tick pops on the corner of tile 1.
           Repeat every 0.75 s for "Cut", "Captions" and "Posted". The last tile is filled {{ACCENT}} with white text.
3.4-4.6 s  One {{ACCENT}} dot travels along all three connectors, start to finish.

Tiles land with a small overshoot. Connectors always draw from the finished tile toward the next one, so the eye is led forward.

Sound: a soft pop per tile, a tick per check, a rising sweep while the dot travels.`},
{id:'orbit-diagram',title:'Hub and orbit diagram',cat:['Diagrams','Shapes'],L:6,fn:sOrbit,bg:'#0b0b1a',a:'#7c3aed',p:`Animate an orbit diagram for {{BRAND}}: one hub, five channels circling it.

Stage: near-black with a {{ACCENT}} glow in the centre.

Beats
0.2-0.9 s  A round {{ACCENT}} hub with the brand initial scales in with an overshoot. Two thin tilted orbit rings fade in around it.
0.6-1.7 s  Five labelled pills pop onto the rings 120 ms apart: Reels, Shorts, TikTok, LinkedIn, Stories. Each has its own colour.
1.7 s on   The inner ring turns one way and the outer ring the other, one full turn every 6 seconds.

Depth: the rings are flattened ellipses. Pills passing behind the hub are drawn smaller and under it, pills in front are larger and over it.

Sound: a soft swell on the hub, small pops for the pills, then a steady low pad.`},
{id:'donut-chart',title:'Donut chart sweep',cat:['Charts'],L:4.4,fn:sDonut,bg:'#f5f7fc',a:'#2f6bff',p:`Animate a donut chart for {{BRAND}} that shows where the views come from.

Stage: off-white paper with a dot grid, one white card with a wide soft shadow.

Beats
0.4-2.2 s  The ring sweeps clockwise from the top in four segments, one after another without a pause: Reels 46% in {{ACCENT}}, Shorts 27%, Stories 17%, Other 10% in pale grey. Leave a hairline gap between segments.
0.4-2.2 s  The total in the centre counts up to 24.8K in step with the sweep.
0.7-2.2 s  The legend on the right fills row by row, 350 ms apart. Each row slides up 8 px while its percentage counts up.
2.2 s on   Hold.

Sound: one soft tick as each segment completes.`},
{id:'live-line-chart',title:'Live line chart with tooltip',cat:['Charts'],L:4.6,fn:sLines,bg:'#0b0b1a',a:'#16a34a',p:`Animate a growth chart for {{BRAND}} where the line is drawn live.

Stage: near-black with a {{ACCENT}} glow top right, five faint horizontal gridlines, month labels along the bottom, title "Growth" top left.

Beats
0.5-3.0 s  Two lines draw from left to right together. The comparison line is muted slate. The hero line is {{ACCENT}} with a glow and a soft gradient fill under it.
0.5-3.0 s  A white dot rides the tip of the hero line. A small white tooltip floats above it and counts from 1.2K to 9.8K.
3.0 s on   The dot and tooltip stop at the last point and hold.

The hero line dips twice before the climb, so the ending feels earned.

Sound: a rising tone that follows the line, one soft hit at the final point.`},
{id:'terminal-render',title:'Terminal render job',cat:['Code'],L:5,fn:sTerm,bg:'#0b0b1a',a:'#4898f7',p:`Animate a terminal window for {{BRAND}} that runs a render job.

Stage: near-black with a {{ACCENT}} glow from below. One dark terminal window with three window dots and the tab title "render.sh".

Beats
0.4-1.5 s  The command "npx render reel --fps 60" types itself after a {{ACCENT}} prompt sign, with a block caret.
1.8 s on   Four status lines appear 550 ms apart: Scenes compiled, Frames rendered, Audio mixed, Exported. Each starts with a spinning {{ACCENT}} arc and "..." on the right, then flips to a green tick and its result (12 files, 480 / 480, -14 LUFS, reel.mp4).
1.8-4.0 s  A thin progress bar along the bottom fills in step with the lines.

Sound: typing only while characters appear, a small tick each time a line turns green.`},
{id:'beat-visualiser',title:'Beat-synced audio bars',cat:['Music'],L:4,fn:sEq,bg:'#0b0b1a',a:'#ec4899',p:`Animate an audio visualiser for {{BRAND}} that moves on the beat at 120 BPM.

Stage: near-black. A {{ACCENT}} glow in the centre swells on every beat and relaxes between beats.

Beats
0.1-0.7 s  Twenty-eight rounded bars rise from a centre line, left to right, 20 ms apart.
0.5 s      A glass track pill pops in at the bottom with a play button, the title "Launch Day (Instrumental)", "120 BPM" and a running timer.
0.7 s on   The bars dance. Neighbouring bars move differently, and every bar gets taller on the beat.

The bars are mirrored around the centre line and shaded light at the top, {{ACCENT}} in the middle, dark at the bottom.

Sound: this one is driven by the music itself. Put a kick on every beat and let the glow follow it.`},
{id:'lyric-captions',title:'Lyric captions on the beat',cat:['Music','Kinetic type'],L:4.8,fn:sLyric,bg:'#ffffff',a:'#7c3aed',loop:1,p:`Animate a lyric-style caption for {{BRAND}} where the words light up in time.

Stage: clean white with a faint {{ACCENT}} glow from below.

Layout: three lines stacked. The active line is in the middle at full strength, the previous line above and the next line below, both pale.

Beats (every 1.6 s)
0.1-1.1 s  The words of the active line switch from pale grey to ink one at a time, each with a 5 px hop. The last word of the line lands in {{ACCENT}}.
1.3-1.6 s  All lines slide up one slot. The sung line fades back and the next line becomes active.

Lines: "Cut on the beat" / "Land on the drop" / "Let the type sing".

Four small dots at the bottom count the beat.

Sound: none added. The words follow the vocal or the beat of the track.`},
{id:'chat-to-file',title:'Chat that ends with a file',cat:['Phone','Product UI'],L:5.6,fn:sChat,bg:'#f5f7fc',a:'#2f6bff',p:`Animate a short chat for {{BRAND}} that ends with a delivered file.

Stage: a soft vertical gradient from off-white to a pale tint of {{ACCENT}}. One white chat window with the brand avatar, the brand name and "online".

Beats
0.4 s  Client bubble (grey, left): "Can you turn this into a reel?"
0.8 s  Typing dots appear on the right in a {{ACCENT}} bubble.
1.5 s  Brand reply ({{ACCENT}}, right): "On it. Captions too?"
2.6 s  Client: "Yes, and make it loop"
3.0 s  Typing dots again.
3.7 s  Brand: "Done. Sending the file now"
4.3 s  A dark file card pops in: play icon, "reel.mp4", "12 MB".

Each bubble scales up from its own corner with a small overshoot. Typing dots bounce in a wave.

Sound: a soft pop per bubble, a brighter chime for the file.`},
{id:'sliced-word',title:'The word that gets cut',cat:['Kinetic type'],L:4.6,fn:sSlice,bg:'#0b0b1a',a:'#ff6a2b',p:`Animate the word "CUT." so the motion acts out the word, for {{BRAND}}.

Stage: near-black with a soft {{ACCENT}} glow.

Beats
0.15-0.7 s  "CUT." rises in, very large, heavy and white.
1.0-1.2 s   A white blade streak crosses the frame on a shallow diagonal, right through the word.
1.15-1.4 s  The word splits along that line. The top half slides one way along the cut and the bottom half the other, 13 px each. A thin glowing {{ACCENT}} line sits in the gap.
1.5 s       A small mono caption fades in: "THE WORD DOES WHAT IT SAYS".
3.3-3.8 s   The halves slide back and the word is whole again.

The halves move along the cut, never apart from it.

Sound: one sharp blade slice on the streak, a soft thud when the word closes.`},
{id:'tracking-reveal',title:'Wide to tight title reveal',cat:['Kinetic type','Logo'],L:4.4,fn:sTrack,bg:'#ffffff',a:'#ec4899',p:`Animate a title reveal for {{BRAND}} that goes from wide and soft to tight and sharp.

Stage: clean white with a barely visible {{ACCENT}} glow.

Beats
0.2-1.4 s  A small mono label "INTRODUCING" fades in while its letter-spacing closes.
0.4-1.9 s  The brand name appears in heavy type with very wide letter-spacing and closes to tight. Three faint {{ACCENT}} echoes of the word trail behind and catch up, so it reads as a blur resolving.
2.0-2.5 s  A short {{ACCENT}} bar grows from the centre under the name.
2.4-2.8 s  One thin supporting line rises in below.
2.8 s on   Hold still.

The spacing decelerates the whole way in. Nothing bounces.

Sound: an airy reverse swell that ends exactly when the letters lock.`},
{id:'shape-morph',title:'One shape, four forms',cat:['Shapes'],L:5,fn:sMorph,bg:'#0b0b1a',a:'#7c3aed',loop:1,p:`Animate one shape for {{BRAND}} that morphs through four forms and never stops turning.

Stage: near-black. A glow behind the shape takes the colour of the current form.

Beats (every 1.25 s)
Hold 0.7 s, then morph for 0.55 s into the next form: circle, triangle, square, hexagon, and back to circle. The colour blends with the morph: {{ACCENT}}, pink, orange, sky blue.

The shape turns slowly the whole time, one full turn per loop. It has a soft highlight on the top-left edge and a darker bottom-right edge so it reads as a solid object, not a flat icon.

Under it, the name of the form rolls up as the form changes. A small mono line reads "ONE SHAPE, FOUR FORMS".

Sound: one soft tonal note per form, stepping up, in the key of the music.`},
{id:'dot-grid-ripple',title:'Dot grid ripple',cat:['Particles','Shapes'],L:4,fn:sDots,bg:'#0b0b1a',a:'#4898f7',p:`Animate a dot-grid ripple for {{BRAND}}.

Stage: near-black, filled edge to edge with an even grid of small white dots.

Beats
0.0-0.9 s   The dots appear from the centre outward.
0.6-1.05 s  A dark pill with a thin light border pops in at the centre with the brand name in white.
1.0 s on    Rings of energy travel outward from the centre every two seconds. As a ring passes, each dot grows up to four times its size, lifts 6 px and shifts from white to {{ACCENT}}, then settles back.

Only the dots move. The pill stays perfectly still, which makes the ripple feel like it comes from the name.

Sound: a low soft pulse each time a ring leaves the centre.`}
);
})();
