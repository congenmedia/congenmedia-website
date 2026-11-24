/* Con-Gen prompt library, pack 4: real 3D (three.js / WebGL). One shared renderer draws every 3D preview. */
(()=>{const {cl,ph,lerp,eo,eio,back,hexA,mix,sh,noSh,rr,txt,ink,bloom,paper,floor,mul,circ,P}=CG,T=window.THREE;

const T3={r:null,env:null,fail:!T,
 init(){if(this.r)return true;if(this.fail)return false;try{const r=new T.WebGLRenderer({antialias:true,alpha:true});r.setPixelRatio(1);r.setSize(960,540,false);r.setClearColor(0,0);r.outputEncoding=T.sRGBEncoding;r.toneMapping=T.ACESFilmicToneMapping;r.toneMappingExposure=1.05;r.shadowMap.enabled=true;r.shadowMap.type=T.PCFSoftShadowMap;
   const es=new T.Scene(),box=(x,y,z,w,h,d,i)=>{const m=new T.MeshBasicMaterial({color:0xffffff});m.color.multiplyScalar(i);const b=new T.Mesh(new T.BoxGeometry(w,h,d),m);b.position.set(x,y,z);es.add(b)};
   es.add(new T.Mesh(new T.BoxGeometry(22,22,22),new T.MeshBasicMaterial({color:0x14141e,side:T.BackSide})));
   box(0,10,0,9,.2,9,9);box(-10,2,3,.2,8,5,5);box(10,3,-2,.2,6,4,3.5);box(0,1,10,7,5,.2,2.2);box(0,-10,0,12,.2,12,.4);
   const pm=new T.PMREMGenerator(r);this.env=pm.fromScene(es,.03).texture;pm.dispose();this.r=r;return true}catch(e){this.fail=true;console.error('3D init',e);return false}},
 make(){const scene=new T.Scene();scene.environment=this.env;return{scene,camera:new T.PerspectiveCamera(32,16/9,.1,90)}},
 draw(c,s){this.r.render(s.scene,s.camera);c.drawImage(this.r.domElement,0,0,640,360)}};
const SC={},get=(k,f)=>SC[k]||(SC[k]=f()),V=T?new T.Vector3():null;
const pr=(cam,x,y,z)=>{V.set(x,y,z).project(cam);return[(V.x+1)*320,(1-V.y)*180]};
function no3(c,o){ink(c);bloom(c,320,180,280,o.a,.3);txt(c,'3D preview needs WebGL','600 15px Poppins','#fff',320,176);txt(c,'THE PROMPT STILL WORKS','700 10px "Space Mono"','#8b90c8',320,202)}
function rsh(w,h,r){const s=new T.Shape(),x=-w/2,y=-h/2;s.moveTo(x+r,y);s.lineTo(x+w-r,y);s.absarc(x+w-r,y+r,r,-Math.PI/2,0,false);s.lineTo(x+w,y+h-r);s.absarc(x+w-r,y+h-r,r,0,Math.PI/2,false);s.lineTo(x+r,y+h);s.absarc(x+r,y+h-r,r,Math.PI/2,Math.PI,false);s.lineTo(x,y+r);s.absarc(x+r,y+r,r,Math.PI,Math.PI*1.5,false);return s}
function rbox(w,h,d,r,bv){const g=new T.ExtrudeGeometry(rsh(w,h,r),{depth:d,bevelEnabled:true,bevelThickness:bv,bevelSize:bv,bevelSegments:5,curveSegments:12});g.center();return g}
function rplane(w,h,r){const g=new T.ShapeGeometry(rsh(w,h,r),12),p=g.attributes.position,u=g.attributes.uv;for(let i=0;i<p.count;i++)u.setXY(i,p.getX(i)/w+.5,p.getY(i)/h+.5);return g}
function frameGeo(w,h,r,th,d){const s=rsh(w,h,r);s.holes.push(rsh(w-th*2,h-th*2,Math.max(.05,r-th)));const g=new T.ExtrudeGeometry(s,{depth:d,bevelEnabled:false,curveSegments:12});g.center();return g}
const phys=(col,rough,metal,cc)=>new T.MeshPhysicalMaterial({color:new T.Color(col).convertSRGBToLinear(),roughness:rough,metalness:metal,clearcoat:cc||0,clearcoatRoughness:.12});
function lights(sc,k0){const k=new T.DirectionalLight(0xffffff,k0||1.05);k.position.set(4,8,6);k.castShadow=true;k.shadow.mapSize.set(1024,1024);const cm=k.shadow.camera;cm.left=cm.bottom=-7;cm.right=cm.top=7;cm.near=1;cm.far=30;k.shadow.bias=-.0004;k.shadow.radius=5;sc.add(k,new T.HemisphereLight(0xffffff,0x39395a,.4));return k}
function flr(sc,y,op){const m=new T.Mesh(new T.PlaneGeometry(60,60),new T.ShadowMaterial({opacity:op}));m.rotation.x=-Math.PI/2;m.position.y=y;m.receiveShadow=true;sc.add(m)}
const tex=cv=>{const t=new T.CanvasTexture(cv);t.encoding=T.sRGBEncoding;t.anisotropy=4;return t};
const W=6.2832,lin=h=>new T.Color(h).convertSRGBToLinear(),setc=(c,h)=>c.set(h).convertSRGBToLinear();

function d3Knot(c,t,o){const g=c.createLinearGradient(0,0,0,360);g.addColorStop(0,'#15122f');g.addColorStop(1,'#07070f');c.fillStyle=g;c.fillRect(0,0,640,360);bloom(c,320,170,300,o.a,.42);if(!T3.init())return no3(c,o);
 const s=get('knot',()=>{const s=T3.make();s.m=phys(0xffffff,.1,.2,1);s.k=new T.Mesh(new T.TorusKnotGeometry(1,.36,260,40,2,3),s.m);s.scene.add(s.k);const a=new T.PointLight(0xffffff,1.1,0);a.position.set(4,3,5);s.b=new T.PointLight(lin(0xec4899),1.6,0);s.b.position.set(-4,-2,3);s.scene.add(a,s.b,new T.AmbientLight(0xffffff,.15));return s});
 setc(s.m.color,o.a);s.k.rotation.set(t*W/6,t*W/3,0);s.k.scale.setScalar(.25+.75*back(ph(t,0,.9)));s.camera.position.set(0,0,9.6-eo(ph(t,0,2.4))*1.5);s.camera.lookAt(0,0,0);T3.draw(c,s);
 txt(c,(o.brand||'Brand').slice(0,18),'700 20px Poppins','#fff',34,312,'left');txt(c,'GLOSS, CLEARCOAT, ONE SLOW TURN','700 10px "Space Mono"','#8b90c8',34,334,'left')}

function ui9(x,t,o){x.fillStyle='#0b0b1a';x.fillRect(0,0,360,780);const g=x.createLinearGradient(0,0,360,430);g.addColorStop(0,o.a);g.addColorStop(1,'#0b0b1a');x.fillStyle=g;x.fillRect(0,0,360,430);
 txt(x,'9:41','600 18px Poppins','#fff',40,36,'left');txt(x,(o.brand||'Brand').slice(0,14),'700 30px Poppins','#fff',30,112,'left');txt(x,'Studio dashboard','400 15px Poppins','rgba(255,255,255,.82)',30,146,'left');
 rr(x,24,190,312,190,22,'rgba(255,255,255,.14)','rgba(255,255,255,.3)',1.5);circ(x,180,285,30,'#fff');x.fillStyle=o.a;x.beginPath();x.moveTo(171,270);x.lineTo(196,285);x.lineTo(171,300);x.closePath();x.fill();
 const p=eio(ph(t,1.4,3.8));rr(x,44,352,272,8,4,'rgba(255,255,255,.3)');rr(x,44,352,272*p,8,4,'#fff');
 [['Views',12.4],['Saves',3.1]].forEach((k,i)=>{rr(x,24+i*162,452,150,120,20,'#17182c');txt(x,k[0],'500 14px Poppins','#8b90c8',42+i*162,484,'left');txt(x,(k[1]*p).toFixed(1)+'K','700 34px Poppins','#fff',42+i*162,532,'left')});
 for(let i=0;i<3;i++){rr(x,24,598+i*58,312,46,14,'#17182c');circ(x,50,621+i*58,12,['#ec4899','#2f6bff','#ff6a2b'][i]);rr(x,74,613+i*58,150-i*26,8,4,'rgba(255,255,255,.78)');rr(x,74,627+i*58,90,6,3,'rgba(255,255,255,.3)')}}
function d3Phone(c,t,o){paper(c,t);bloom(c,320,200,320,o.a,.16);if(!T3.init())return no3(c,o);
 const s=get('phone',()=>{const s=T3.make();s.cv=document.createElement('canvas');s.cv.width=360;s.cv.height=780;s.x=s.cv.getContext('2d');s.tx=tex(s.cv);s.g=new T.Group();
   const body=new T.Mesh(rbox(1.9,4,.16,.3,.04),phys(0x1b1c30,.28,.9,.7));body.castShadow=true;const scr=new T.Mesh(rplane(1.8,3.9,.26),new T.MeshBasicMaterial({map:s.tx,toneMapped:false}));scr.position.z=.123;s.g.add(body,scr);s.scene.add(s.g);
   s.p=[new T.Mesh(rbox(1.15,.44,.14,.2,.04),phys(0xffffff,.3,.1,1)),new T.Mesh(new T.SphereGeometry(.36,48,32),phys(0xec4899,.22,.1,1)),new T.Mesh(new T.TorusGeometry(.32,.13,28,72),phys(0xff6a2b,.28,.1,1))];s.p.forEach(m=>{m.castShadow=true;s.scene.add(m)});
   lights(s.scene);flr(s.scene,-2.6,.2);return s});
 ui9(s.x,t,o);s.tx.needsUpdate=true;setc(s.p[0].material.color,o.a);const e=eio(ph(t,.1,1.7)),w=W/6;
 s.g.rotation.set(lerp(.5,.05,e)+Math.sin(t*w)*.04,lerp(-1.5,-.36,e)+Math.sin(t*w)*.3,lerp(.25,0,e));s.g.position.y=lerp(-1.4,0,back(ph(t,.1,1.2)))+Math.sin(t*w*2)*.06;
 [[-2.5,1.15,.7],[2.35,-1,1],[2.2,1.45,-.9]].forEach((q,i)=>{const m=s.p[i];m.position.set(q[0],q[1]+Math.sin(t*w+i*2)*.16,q[2]);m.scale.setScalar(Math.max(.001,back(ph(t,.9+i*.15,1.4+i*.15))));m.rotation.set(.2+i*.5+Math.sin(t*w)*.15,.5+t*w*(i==2?1:0)+Math.sin(t*w)*.2,-.15)});
 s.camera.position.set(Math.sin(t*w)*.7,.25,9.6);s.camera.lookAt(0,-.1,0);T3.draw(c,s);txt(c,'LIVE SCREEN ON A REAL 3D PHONE','700 10px "Space Mono"','#8b90a8',320,30)}

function cardTex(i){const cv=document.createElement('canvas');cv.width=480;cv.height=300;const x=cv.getContext('2d'),k=['#7c3aed','#2f6bff','#ec4899','#ff6a2b','#16a34a'][i],g=x.createLinearGradient(0,0,480,300);g.addColorStop(0,k);g.addColorStop(1,mix(k,'#0b0b1a',.62));x.fillStyle=g;x.fillRect(0,0,480,300);
 txt(x,'STEP 0'+(i+1),'700 18px "Space Mono"','rgba(255,255,255,.78)',36,40,'left');txt(x,['Hook','Cut','Caption','Grade','Post'][i],'700 56px Poppins','#fff',36,96,'left');for(let j=0;j<3;j++)rr(x,36,158+j*34,[300,220,260][j],14,7,'rgba(255,255,255,'+(.8-j*.22)+')');circ(x,420,244,26,'rgba(255,255,255,.25)');return cv}
function d3Cards(c,t,o){ink(c);floor(c,t,o.a);bloom(c,320,150,330,o.a,.36);if(!T3.init())return no3(c,o);
 const s=get('cards',()=>{const s=T3.make();s.c=[];const gb=rbox(2.4,1.5,.04,.14,.02),gp=rplane(2.4,1.5,.14);for(let i=0;i<5;i++){const tx=tex(cardTex(i)),g=new T.Group(),f=new T.Mesh(gp,new T.MeshPhysicalMaterial({map:tx,roughness:.32,clearcoat:1,clearcoatRoughness:.14}));f.position.z=.042;g.add(new T.Mesh(gb,phys(0xf4f5fa,.4,0,.5)),f);s.scene.add(g);s.c.push({g,tx,i})}lights(s.scene,.8);return s});
 if(s.fr!==CG.fr){s.c.forEach(k=>{k.tx.image=cardTex(k.i);k.tx.needsUpdate=true});s.fr=CG.fr}
 const e=eio(ph(t,.5,1.8))-eio(ph(t,4.5,5.5)),w=W/6;
 s.c.forEach((k,i)=>{const u=i-2;k.g.position.set(u*1.2*e,-Math.abs(u)*.2*e+Math.sin(t*w*2+i)*.05*e,-Math.abs(u)*.55*e+i*.06*(1-e)+(u==0?.35*e:0));k.g.rotation.set(-.12*e,-u*.24*e,-u*.15*e)});
 s.camera.position.set(Math.sin(t*w)*1.1,.7,8.6-1.2*e);s.camera.lookAt(0,-.1,0);T3.draw(c,s);txt(c,'FIVE CARDS, ONE FAN','700 10px "Space Mono"','#8b90c8',320,334)}

function d3Bars(c,t,o){ink(c);bloom(c,320,310,350,o.a,.3);if(!T3.init())return no3(c,o);
 const s=get('bars',()=>{const s=T3.make(),g=rbox(.6,.6,1,.12,.03);g.translate(0,0,.53);s.b=[];[.4,.58,.5,.76,1,.66].forEach((q,i)=>{const hot=q==1,m=new T.Mesh(g,phys(hot?0xffffff:0x474d86,.26,.2,1));m.rotation.x=-Math.PI/2;m.position.x=(i-2.5)*.95;m.castShadow=true;if(hot){m.material.emissive=new T.Color(0);m.material.emissiveIntensity=.4;s.hot=m.material}s.scene.add(m);s.b.push({m,q})});
   const pl=new T.Mesh(new T.CylinderGeometry(4.3,4.3,.14,96),phys(0x15162c,.45,.4,.6));pl.position.y=-.07;pl.receiveShadow=true;s.scene.add(pl);lights(s.scene);return s});
 setc(s.hot.color,o.a);setc(s.hot.emissive,o.a);s.b.forEach((k,i)=>k.m.scale.z=Math.max(.02,k.q*2.6*back(ph(t,.4+i*.1,1.2+i*.1))));
 const m=eio(ph(t,.2,4.8)),a=-.75+m*1.3;s.camera.position.set(Math.sin(a)*9.4,3.8-m*1,Math.cos(a)*9.4);s.camera.lookAt(0,1.05,0);T3.draw(c,s);
 const e=eo(ph(t,1.5,1.9));if(e>0){const p=pr(s.camera,1.425,2.6*Math.min(1.02,back(ph(t,.8,1.6)))+.3,0);c.globalAlpha=e;sh(c,'rgba(0,0,0,.45)',14,6);rr(c,p[0]-29,p[1]-30,58,24,12,'#fff');noSh(c);txt(c,'48K','700 12px Poppins','#0b0b1a',p[0],p[1]-17);c.globalAlpha=1}
 txt(c,'Weekly views','600 17px Poppins','#fff',34,40,'left');txt(c,'REAL 3D, ONE HERO BAR','700 10px "Space Mono"','#8b90c8',34,62,'left')}

function coinTex(b){const cv=document.createElement('canvas');cv.width=cv.height=512;const x=cv.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,512,512);x.strokeStyle='#b8b8b8';x.lineWidth=12;x.beginPath();x.arc(256,256,216,0,W);x.stroke();x.strokeStyle='#d8d8d8';x.lineWidth=4;x.beginPath();x.arc(256,256,196,0,W);x.stroke();txt(x,b,'800 250px Poppins','#9a9a9a',256,274);return cv}
function d3Coin(c,t,o){const g=c.createLinearGradient(0,0,640,360);g.addColorStop(0,'#1c1244');g.addColorStop(1,'#0b0b1a');c.fillStyle=g;c.fillRect(0,0,640,360);bloom(c,320,190,290,o.a,.42);if(!T3.init())return no3(c,o);
 const b=((o.brand||'B')[0]).toUpperCase(),s=get('coin',()=>{const s=T3.make();s.tx={};s.ms=phys(0xffffff,.2,1,.4);s.mf=new T.MeshPhysicalMaterial({roughness:.24,metalness:1,clearcoat:.4,clearcoatRoughness:.1});s.k=new T.Mesh(new T.CylinderGeometry(1.35,1.35,.2,128),[s.ms,s.mf,s.mf]);s.g=new T.Group();s.g.add(s.k);s.scene.add(s.g);const l=new T.PointLight(0xffffff,1.1,0);l.position.set(3,4,6);s.sw=new T.PointLight(0xffffff,0,0);s.scene.add(l,s.sw,new T.AmbientLight(0xffffff,.2));s.camera.position.set(0,.15,7.6);s.camera.lookAt(0,0,0);return s});
 if(s.fr!==CG.fr){s.tx={};s.fr=CG.fr}if(!s.tx[b]){const x=tex(coinTex(b));x.center.set(.5,.5);x.rotation=Math.PI/2;s.tx[b]=x}if(s.mf.map!==s.tx[b]){s.mf.map=s.tx[b];s.mf.needsUpdate=true}
 setc(s.ms.color,o.a);setc(s.mf.color,o.a);const up=ph(t,.3,1.9),land=t-1.9,wob=land>0?Math.exp(-land*2.6)*Math.cos(land*13)*.45:0;
 s.k.rotation.x=Math.PI/2+eio(up)*Math.PI*6+wob;s.g.position.y=-.1+4*up*(1-up)*1.5;s.g.rotation.y=land>0?Math.sin(land*W/4.1)*.5*cl(land/1.2):0;s.g.scale.setScalar(.3+.7*eo(ph(t,0,.5)));
 const q=ph(t,2.7,3.6);s.sw.intensity=Math.sin(q*Math.PI)*3;s.sw.position.set(lerp(-5,5,q),1.5,3.5);T3.draw(c,s);
 c.globalAlpha=eo(ph(t,2.2,2.7));txt(c,(o.brand||'Brand').slice(0,18),'700 20px Poppins','#fff',320,318);c.globalAlpha=1}

function d3Wave(c,t,o){ink(c);bloom(c,320,110,330,o.a,.3);if(!T3.init())return no3(c,o);
 const s=get('wave',()=>{const s=T3.make();s.g=new T.PlaneGeometry(12,7,110,64);s.m=new T.MeshPhysicalMaterial({color:0xffffff,roughness:.34,metalness:.2,clearcoat:.45,clearcoatRoughness:.25,side:T.DoubleSide});s.m.envMapIntensity=.45;const k=new T.Mesh(s.g,s.m);k.rotation.x=-1.08;k.position.y=-1;s.scene.add(k);const l=new T.DirectionalLight(0xffffff,.55);l.position.set(-3,6,4);const l2=new T.PointLight(lin(0xec4899),.9,0);l2.position.set(5,1,3);s.scene.add(l,l2,new T.AmbientLight(0xffffff,.15));return s});
 setc(s.m.color,o.a);const p=s.g.attributes.position,w=W/6;for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i);p.setZ(i,Math.sin(x*.9+t*w*2)*.34+Math.sin(x*.45-y*.8+t*w)*.42+Math.cos(y*1.3+t*w*3)*.12)}p.needsUpdate=true;s.g.computeVertexNormals();
 s.camera.position.set(Math.sin(t*w)*1,1.25,7.4);s.camera.lookAt(0,-.45,0);T3.draw(c,s);
 sh(c,'rgba(0,0,0,.55)',22,4);txt(c,(o.brand||'Brand').slice(0,16),'800 40px Poppins','#fff',320,92);noSh(c);txt(c,'SILK IN SLOW MOTION','700 10px "Space Mono"','rgba(255,255,255,.75)',320,126)}

function d3Cubes(c,t,o){paper(c,t);bloom(c,320,180,320,o.a,.14);if(!T3.init())return no3(c,o);
 const s=get('cubes',()=>{const s=T3.make(),r=mul(5),g=rbox(.82,.82,.82,.14,.04);s.g=new T.Group();s.c=[];s.ma=phys(0xffffff,.32,.05,1);const mw=phys(0xf3f4f9,.4,0,.7),md=phys(0x16172d,.32,.25,.9);
   for(let x=-1;x<2;x++)for(let y=-1;y<2;y++)for(let z=-1;z<2;z++){const i=s.c.length,m=new T.Mesh(g,[4,13,22,10,16].includes(i)?s.ma:i%5==0?md:mw);m.castShadow=true;s.g.add(m);s.c.push({m,x,y,z,sx:(r()-.5)*12,sy:(r()-.15)*5.5,sz:(r()-.5)*7-1,rx:r()*6,ry:r()*6,d:r()})}
   s.scene.add(s.g);lights(s.scene);flr(s.scene,-2.45,.2);s.camera.position.set(0,1.7,10.4);s.camera.lookAt(0,-.1,0);return s});
 setc(s.ma.color,o.a);const out=eio(ph(t,5,5.95)),gap=.93+.17*Math.sin(Math.PI*ph(t,3,3.8));
 s.c.forEach(k=>{const e=eio(ph(t,.3+k.d*.9,1.7+k.d*.9))*(1-out),q=1-e;k.m.position.set(lerp(k.sx,k.x*gap,e),lerp(k.sy,k.y*gap,e),lerp(k.sz,k.z*gap,e));k.m.rotation.set(k.rx*q,k.ry*q,0)});
 s.g.rotation.set(.42,t*W/6,0);T3.draw(c,s);txt(c,'27 PIECES, ONE CUBE','700 10px "Space Mono"','#8b90a8',320,30)}

function d3Tunnel(c,t,o){c.fillStyle='#05050c';c.fillRect(0,0,640,360);if(!T3.init())return no3(c,o);
 const N=16,SP=2.2,s=get('tun',()=>{const s=T3.make();s.camera.fov=62;s.camera.updateProjectionMatrix();s.scene.fog=new T.Fog(lin(0x05050c),3,27);s.f=[];const g=frameGeo(4.8,2.7,.55,.17,.18);for(let i=0;i<N;i++){const hot=i%4==0,m=new T.Mesh(g,new T.MeshStandardMaterial({color:lin(hot?0xffffff:0x2a2e5c),roughness:.3,metalness:.7}));if(hot){m.material.emissive=new T.Color(0);m.material.emissiveIntensity=1.1}s.scene.add(m);s.f.push({m,hot})}s.scene.add(new T.AmbientLight(0xffffff,.35));s.pl=new T.PointLight(0xffffff,1.4,16);s.scene.add(s.pl);return s});
 const w=W/6,tr=t/6*SP*4,span=N*SP;s.f.forEach((k,i)=>{const z=-(((i*SP-tr)%span)+span)%span;k.m.position.z=z;k.m.rotation.z=z*.1+Math.sin(t*w)*.12;if(k.hot){setc(k.m.material.color,o.a);setc(k.m.material.emissive,o.a)}});
 s.camera.position.set(Math.sin(t*w)*.3,Math.cos(t*w)*.18,1.3);s.camera.rotation.set(0,0,Math.sin(t*w)*.05);s.pl.position.copy(s.camera.position);T3.draw(c,s);
 const v=c.createRadialGradient(320,180,60,320,180,360);v.addColorStop(0,'rgba(5,5,12,.55)');v.addColorStop(.35,'rgba(5,5,12,0)');v.addColorStop(1,'rgba(5,5,12,.6)');c.fillStyle=v;c.fillRect(0,0,640,360);
 txt(c,(o.brand||'Brand').slice(0,14),'800 34px Poppins','#fff',320,176);txt(c,'FLY THROUGH','700 10px "Space Mono"',o.a,320,208)}

function d3Clay(c,t,o){const g=c.createLinearGradient(0,0,0,360);g.addColorStop(0,'#fff4ea');g.addColorStop(1,'#f0e5fb');c.fillStyle=g;c.fillRect(0,0,640,360);if(!T3.init())return no3(c,o);
 const s=get('clay',()=>{const s=T3.make(),cm=k=>{const m=new T.MeshPhysicalMaterial({color:lin(k),roughness:.88,metalness:0});m.envMapIntensity=.6;return m};s.o=[];
   const add=(m,x,z,p,sc)=>{m.traverse(q=>{q.castShadow=true});s.scene.add(m);s.o.push({m,x,z,p,sc});return m};
   s.a=add(new T.Mesh(new T.SphereGeometry(.8,56,40),cm(0xffffff)),-3.2,.2,0,.8);add(new T.Mesh(new T.TorusGeometry(.56,.27,36,80),cm(0xec4899)),-1.4,-.5,1.1,.83);add(new T.Mesh(rbox(.85,.85,.85,.3,.14),cm(0x2f6bff)),.45,.4,2.3,.57);
   const pill=new T.Group(),pm=cm(0xff6a2b);[[new T.CylinderGeometry(.36,.36,.8,48),0],[new T.SphereGeometry(.36,40,28),.4],[new T.SphereGeometry(.36,40,28),-.4]].forEach(q=>{const m=new T.Mesh(q[0],pm);m.position.y=q[1];pill.add(m)});add(pill,2.05,-.3,3.4,.76);
   add(new T.Mesh(new T.SphereGeometry(.42,44,30),cm(0xfbbf24)),3.35,.6,4.6,.42);lights(s.scene,1.2);flr(s.scene,-1.7,.17);s.camera.position.set(0,1.3,9.1);s.camera.lookAt(0,-.45,0);return s});
 setc(s.a.material.color,o.a);const w=W/6;
 s.o.forEach((k,i)=>{const b=Math.abs(Math.sin(t*w+k.p)),e=Math.max(.001,back(ph(t,.15+i*.1,.75+i*.1))),sq=1-.2*Math.max(0,1-b*5),q=1/Math.sqrt(sq);k.m.position.set(k.x,-1.7+k.sc*sq+b*1.5,k.z);k.m.scale.set(e*q,e*sq,e*q);k.m.rotation.y=t*w+k.p;if(i==3)k.m.rotation.z=.5});
 T3.draw(c,s);txt(c,'SOFT, MATTE, FRIENDLY','700 10px "Space Mono"','#a08fb5',320,30)}

function d3Globe(c,t,o){ink(c);bloom(c,320,180,310,o.a,.32);if(!T3.init())return no3(c,o);
 const s=get('globe',()=>{const s=T3.make(),n=2200,pos=new Float32Array(n*3);for(let i=0;i<n;i++){const y=1-2*(i+.5)/n,r=Math.sqrt(1-y*y),a=i*2.39996;pos[i*3]=Math.cos(a)*r*2;pos[i*3+1]=y*2;pos[i*3+2]=Math.sin(a)*r*2}
   const g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(pos,3));s.g=new T.Group();s.g.add(new T.Mesh(new T.SphereGeometry(1.97,64,40),new T.MeshBasicMaterial({color:lin(0x0d0d20),transparent:true,opacity:.86})),new T.Points(g,new T.PointsMaterial({color:0xffffff,size:.036,transparent:true,opacity:.85})));
   s.am=new T.MeshBasicMaterial({color:0xffffff});s.arc=[];const P3=(la,lo)=>new T.Vector3(Math.cos(la)*Math.cos(lo)*2,Math.sin(la)*2,Math.cos(la)*Math.sin(lo)*2);
   [[.6,.2,.1,1.5],[.1,1.5,-.4,2.9],[.6,.2,-.2,-1.1],[-.4,2.9,.7,4.2],[-.2,-1.1,.3,-2.4],[.7,4.2,.6,.2]].forEach(a=>{const A=P3(a[0],a[1]),B=P3(a[2],a[3]),M=A.clone().add(B).multiplyScalar(.5).normalize().multiplyScalar(2+A.distanceTo(B)*.24),tg=new T.TubeGeometry(new T.QuadraticBezierCurve3(A,M,B),56,.016,6,false),m=new T.Mesh(tg,s.am);s.g.add(m);[A,B].forEach(q=>{const d=new T.Mesh(new T.SphereGeometry(.055,14,10),s.am);d.position.copy(q);s.g.add(d)});s.arc.push({tg,n:tg.index.count})});
   s.scene.add(s.g);s.camera.position.set(0,.9,7.9);s.camera.lookAt(0,0,0);return s});
 setc(s.am.color,o.a);s.arc.forEach((k,i)=>k.tg.setDrawRange(0,Math.floor(k.n*eio(ph(t,.6+i*.45,1.7+i*.45))/3)*3));s.g.rotation.set(.18,t*W/8,.28);s.g.scale.setScalar(.6+.4*eo(ph(t,0,.8)));T3.draw(c,s);
 txt(c,'Worldwide','600 17px Poppins','#fff',34,40,'left');txt(c,'POINTS, ARCS, ONE SLOW SPIN','700 10px "Space Mono"','#8b90c8',34,62,'left')}

const R3=`

Build rules
- One self-contained HTML file using three.js (WebGL). Every transform, camera move and material value is a pure function of time t, so it can be rendered frame by frame to video.
- Format {{FORMAT}}, {{DURATION}} seconds, 60 fps. Stretch the holds to fit the length and keep the animated beats at the timings above.
- Lighting: a soft studio environment map for reflections, one key light with soft shadows and one coloured rim light. Never ambient light alone.
- Materials: physically based. Use the roughness, metalness and clearcoat values given above and keep them consistent across the shot.
- Camera: 30 to 40 mm look unless stated, always moving a little (slow orbit or dolly) and always eased. No linear moves and no cuts inside the shot.
- One accent colour only: {{ACCENT}}. On-screen text is Poppins, drawn flat on top of the 3D, and never moves once it lands.
- No stock footage, no emoji, no placeholder text.`;
P.unshift(
{id:'3d-gloss-knot',title:'Glossy knot hero loop',cat:['3D','Shapes'],L:6,fn:d3Knot,bg:'#0b0b1a',a:'#7c3aed',r:R3,p:`Animate a glossy 3D hero object for {{BRAND}}: one torus knot, turning slowly, lit like a product shot.

Stage: a vertical gradient from deep indigo to near-black with a soft {{ACCENT}} glow behind the object.

Object: a torus knot (2,3 winding) with a thick tube. Material: {{ACCENT}}, roughness 0.1, metalness 0.2, full clearcoat. It should read as polished lacquer, not chrome.

Lighting: a white key light upper right, a pink rim light lower left, studio reflections from the environment map.

Beats
0.0-0.9 s  The knot scales in from 25% with a small overshoot.
0.0-2.4 s  The camera dollies in about 15%, easing out.
All the time  The knot makes one full turn on one axis and two on another per 6 seconds, so the loop closes perfectly.

Bottom left, the brand name in bold with one small mono line under it. The text never moves.

Sound: a low sustained pad with one soft swell on the entrance.`},
{id:'3d-phone-live-screen',title:'3D phone with a live screen',cat:['3D','Phone'],L:6,fn:d3Phone,bg:'#f5f7fc',a:'#7c3aed',r:R3,p:`Animate a real 3D phone for {{BRAND}} whose screen is a live animated interface, not a flat picture.

Stage: off-white paper with a faint dot grid and a soft ground shadow under the phone.

Phone: a rounded slab, dark anodised metal (roughness 0.28, metalness 0.9, clearcoat 0.7), with a rounded screen set flush into the front. The screen shows a dashboard in {{ACCENT}}: brand name, a video card with a play button, a progress bar, two stat tiles counting up (Views 12.4K, Saves 3.1K) and three list rows.

Beats
0.1-1.7 s  The phone rises from below and turns from almost side-on to three-quarter front, easing in and out.
0.9-1.8 s  Three glossy props pop in around it at different depths: a {{ACCENT}} pill, a pink sphere, an orange ring.
1.4-3.8 s  On the screen, the progress bar fills and the stat tiles count up.
1.7 s on   The phone sways slowly through about 35 degrees and floats 6 px up and down. The camera drifts sideways so the props show parallax.

Sound: a soft whoosh on the turn, small pops for the props, gentle ticks while the numbers count.`},
{id:'3d-card-fan',title:'3D card stack fan-out',cat:['3D','Product UI'],L:6,fn:d3Cards,bg:'#0b0b1a',a:'#7c3aed',loop:1,r:R3,p:`Animate five glossy 3D cards for {{BRAND}} that start as one stack and fan out into an arc.

Stage: near-black with a faint perspective grid drifting toward the camera and a {{ACCENT}} glow.

Cards: rounded, thin, with a pale edge and a clearcoat face (roughness 0.32, full clearcoat). Each face has its own colour gradient, a mono step label, one big word and three content bars: Hook, Cut, Caption, Grade, Post.

Beats
0.0-0.5 s  One neat stack, facing the camera.
0.5-1.8 s  The stack fans out. The outer cards travel furthest, sink back and turn away slightly; the middle card comes forward.
1.8-4.5 s  Hold the fan. Each card bobs a few pixels on its own rhythm while the camera drifts in a slow arc and pushes in.
4.5-5.5 s  The cards gather back into the stack so the loop closes.

Reflections slide across the faces as the camera moves. That sliding highlight is what sells the gloss.

Sound: a soft paper riffle on the fan, a reversed riffle on the gather.`},
{id:'3d-bar-chart-orbit',title:'3D bar chart with camera orbit',cat:['3D','Charts'],L:6,fn:d3Bars,bg:'#0b0b1a',a:'#ec4899',r:R3,p:`Build a weekly chart for {{BRAND}} as real 3D bars on a round stage while the camera orbits.

Stage: near-black with a {{ACCENT}} glow from below. Six rounded square bars stand in a row on a dark, slightly glossy disc that catches their shadows.

Materials: five bars in muted indigo (roughness 0.26, metalness 0.2, clearcoat on). The tallest bar is {{ACCENT}} and slightly self-lit.

Beats
0.4-1.7 s  The bars grow from the stage 100 ms apart with a small overshoot.
0.2-4.8 s  The camera orbits about 75 degrees around the chart and sinks a little, one continuous eased move.
1.5-1.9 s  A white value label "48K" fades in above the tallest bar and stays pinned to it as the camera moves.
4.8 s on   Hold.

Title top left: "Weekly views", with a small mono line under it. The title is flat and never moves.

Sound: a short low thud per bar, a brighter hit on the tallest one.`},
{id:'3d-coin-flip',title:'3D coin flip logo',cat:['3D','Logo'],L:6,fn:d3Coin,bg:'#0b0b1a',a:'#ff6a2b',r:R3,p:`Animate a metal coin for {{BRAND}} that is tossed, spins and lands face-on with the brand initial.

Stage: a diagonal gradient from deep violet to near-black with a {{ACCENT}} glow behind the coin.

Coin: a thick disc in {{ACCENT}} metal (roughness 0.2, metalness 1, light clearcoat) with a raised rim line and the brand initial engraved on both faces.

Beats
0.0-0.5 s  The coin scales in.
0.3-1.9 s  It is tossed up and comes back down on a smooth arc while spinning three full turns, easing out of the spin.
1.9-3.2 s  It lands facing the camera and settles with a fast, shrinking wobble.
2.2-2.7 s  The brand name fades in below.
2.7-3.6 s  One bright light sweeps across the face from left to right.
3.2 s on   The coin sways gently from side to side so the edge keeps catching the light.

Sound: a metallic ring on the toss, a short tick on landing, a soft shimmer on the light sweep.`},
{id:'3d-silk-wave',title:'Silk wave title',cat:['3D','Kinetic type'],L:6,fn:d3Wave,bg:'#0b0b1a',a:'#2f6bff',loop:1,r:R3,p:`Animate a sheet of silk for {{BRAND}} rolling in slow motion under a title.

Stage: near-black with a {{ACCENT}} glow at the top.

Surface: one large, finely divided plane tilted away from the camera. Displace it with three layered sine waves of different size, direction and speed so no two ridges move alike. Material: {{ACCENT}}, roughness 0.26, metalness 0.4, clearcoat 0.8, lit by a white key from the upper left and a pink point light from the right so the crests pick up a second colour.

Beats
All the time  The waves travel continuously and repeat exactly every 6 seconds.
All the time  The camera drifts slowly from side to side.

Title: the brand name, heavy and white with a soft shadow, sits flat above the horizon with one mono line under it. It is on screen from the first frame and never moves.

Sound: a slow airy pad, no hits. This one is about calm.`},
{id:'3d-cube-assemble',title:'27 cubes assemble',cat:['3D','Shapes'],L:6,fn:d3Cubes,bg:'#f5f7fc',a:'#7c3aed',loop:1,r:R3,p:`Animate 27 small rounded cubes for {{BRAND}} that fly in from all sides and lock into one large cube.

Stage: off-white paper with a faint dot grid and a soft ground shadow.

Cubes: bevelled, with clearcoat. Most are off-white, some near-black, and five are {{ACCENT}} so the finished cube carries the brand colour.

Beats
0.3-2.6 s  The cubes travel from scattered, tumbling positions into a 3 by 3 by 3 block. Each starts at a slightly different time and eases in and out, so the block fills unevenly and then clicks complete.
All the time  The whole block turns slowly, one full turn every 6 seconds, tilted so three faces show.
3.0-3.8 s  One "breath": the cubes spread apart by about 15% and close again.
5.0-5.95 s  The cubes fly back out to where they started, so the loop closes.

Sound: soft clicks as cubes lock, one deeper click on the last, a short airy swell on the breath.`},
{id:'3d-frame-tunnel',title:'Fly-through frame tunnel',cat:['3D','Transitions'],L:6,fn:d3Tunnel,bg:'#05050c',a:'#4898f7',loop:1,r:R3,p:`Animate a camera flying through an endless tunnel of rounded frames for {{BRAND}}.

Stage: near-black with distance fog in the same colour, so frames appear out of the dark.

Frames: sixteen rounded rectangular rings in a row, each rotated a little more than the one before so the tunnel twists. Dark metallic indigo (roughness 0.3, metalness 0.7). Every fourth frame is {{ACCENT}} and glows.

Camera: a wide 20 mm look. It flies forward at constant speed, passing exactly four frames every 6 seconds so the loop is seamless, while drifting in a small circle and rolling a few degrees. A light travels with the camera.

Title: the brand name, heavy and white, in the centre with a mono line "FLY THROUGH" in {{ACCENT}}. A soft dark vignette behind it keeps it readable. The title never moves.

Sound: a deep continuous whoosh with a soft pulse each time a glowing frame passes.`},
{id:'3d-soft-clay',title:'Soft clay shapes bounce',cat:['3D','Characters'],L:6,fn:d3Clay,bg:'#f8eef4',a:'#7c3aed',r:R3,p:`Animate five soft, matte 3D shapes for {{BRAND}} bouncing in a row like toys.

Stage: a warm vertical gradient from cream to pale lilac with soft ground shadows.

Shapes: a sphere in {{ACCENT}}, a pink ring, a blue rounded cube, an orange pill and a small yellow ball. Material: matte clay (roughness 0.88, no metal, weak reflections). Every edge is rounded.

Beats
0.15-1.2 s  The shapes pop in from left to right, 100 ms apart, with an overshoot.
All the time  Each bounces on its own phase, twice per loop. On landing it squashes about 20% and bulges sideways to keep its volume, then stretches back as it rises.
All the time  Each turns slowly, one full turn per loop.

Soft, wide shadows sit under every shape and tighten as it lands. The camera does not move; the bounce is the whole show.

Sound: a soft rubbery thud per landing, pitched differently for each shape.`},
{id:'3d-point-globe',title:'Point globe with arcs',cat:['3D','Particles'],L:8,fn:d3Globe,bg:'#0b0b1a',a:'#16a34a',r:R3,p:`Animate a globe made of points for {{BRAND}} with connection arcs drawing across it.

Stage: near-black with a {{ACCENT}} glow behind the globe.

Globe: about 2,200 small white points spread evenly over a sphere, with a dark inner sphere so points on the far side are hidden. Tilt the axis a little.

Beats
0.0-0.8 s  The globe scales in from 60%.
0.6-4.0 s  Six thin {{ACCENT}} arcs draw from point to point, 450 ms apart, each lifting off the surface in a curve and ending in a small dot.
All the time  The globe turns slowly, one full turn every 8 seconds.

Title top left: "Worldwide", with one small mono line under it. The title never moves.

Sound: a soft ping as each arc lands, over a low steady pad.`}
);
})();
