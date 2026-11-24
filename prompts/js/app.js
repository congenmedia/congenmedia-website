/* Con-Gen prompt library: page */
(()=>{const {P,RULES,PC,paint,fit,PRE,POST}=CG;
/* ---------- page ---------- */
const DEF={brand:'Your Brand',head:'Edits that stop the scroll',format:'16:9 landscape (1920 x 1080)',dur:'8'};
const st={...DEF,a:'#7c3aed'};
const fill=(p,o)=>(PRE+p.p+(p.r||RULES)+POST).replaceAll('{{BRAND}}',o.brand||DEF.brand).replaceAll('{{HEADLINE}}',o.head||DEF.head).replaceAll('{{ACCENT}}',o.a.toUpperCase()).replaceAll('{{FORMAT}}',o.format).replaceAll('{{DURATION}}',o.dur);
const $=s=>document.querySelector(s),grid=$('#grid'),toast=$('#toast');
async function copy(text,btn){let ok=false;try{await navigator.clipboard.writeText(text);ok=true}catch(e){try{const ta=document.createElement('textarea');ta.value=text;ta.style.cssText='position:fixed;opacity:0';document.body.appendChild(ta);ta.select();ok=document.execCommand('copy');ta.remove()}catch(_){}}
 toast.textContent=ok?'Prompt copied. Paste it into your AI tool.':'Copy was blocked. Select the text in Customize and copy it.';toast.classList.add('on');clearTimeout(toast._t);toast._t=setTimeout(()=>toast.classList.remove('on'),2200);
 if(ok&&btn){const o=btn.textContent;btn.textContent='Copied';btn.classList.add('ok');setTimeout(()=>{btn.textContent=o;btn.classList.remove('ok')},1500)}}

const cvs=[],vis=new Set(),io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting?vis.add(e.target):vis.delete(e.target)),{rootMargin:'120px'});
P.forEach((p,i)=>{const el=document.createElement('article');el.className='pc';el.id=p.id;el.dataset.cat=p.cat.join('|');el.dataset.q=(p.title+' '+p.cat.join(' ')+' '+p.p).toLowerCase();const o={...DEF,a:p.a};
 el.innerHTML=`<button class="stage" aria-label="Customize ${p.title}"><canvas></canvas></button><div class="pb"><div class="tags mono"><span>${p.cat.join(' · ')}</span><span class="dur">${p.L.toFixed(1)} s loop</span></div><h3>${p.title}</h3><p class="ex"></p><div class="act"><button class="btn sm dark">Copy prompt</button><button class="btn sm ghost">Customize</button></div></div>`;
 el.querySelector('.ex').textContent=p.p.split('\n')[0].replaceAll('{{BRAND}}',DEF.brand).replaceAll('{{HEADLINE}}',DEF.head).replaceAll('{{ACCENT}}',p.a.toUpperCase());grid.appendChild(el);el.querySelector('.stage').style.background=p.bg;
 const cv=el.querySelector('canvas');cv._p=p;cv._o=o;cv._off=i*.37;cvs.push(cv);io.observe(cv);
 const b=el.querySelectorAll('.act button');b[0].onclick=()=>copy(fill(p,o),b[0]);b[1].onclick=()=>openMd(p);el.querySelector('.stage').onclick=()=>openMd(p)});
$('#selTag').textContent=P.length+' prompts';

let catSel='All',qSel='';const none=$('#none');
function apply(){let n=0;grid.querySelectorAll('.pc').forEach(el=>{const ok=(catSel=='All'||el.dataset.cat.split('|').includes(catSel))&&(!qSel||el.dataset.q.includes(qSel));el.hidden=!ok;n+=ok});none.hidden=n>0;still()}
const cats=['All',...new Set(P.flatMap(p=>p.cat))],chips=$('#chips');
cats.forEach(k=>{const b=document.createElement('button');b.className='chip';b.setAttribute('aria-pressed',k=='All');b.innerHTML=k+'<span>'+(k=='All'?P.length:P.filter(p=>p.cat.includes(k)).length)+'</span>';
 b.onclick=()=>{catSel=k;chips.querySelectorAll('.chip').forEach(x=>x.setAttribute('aria-pressed',x==b));apply()};chips.appendChild(b)});
$('#q').addEventListener('input',e=>{qSel=e.target.value.trim().toLowerCase();apply()});

let paused=matchMedia('(prefers-reduced-motion: reduce)').matches,cur=null;const mdC=$('#mdC'),ov=$('#ov'),pauseB=$('#pause');
const still=()=>{if(paused)requestAnimationFrame(()=>cvs.forEach(cv=>{fit(cv);paint(cv,cv._p,cv._p.L*.66,cv._o)}))};
pauseB.setAttribute('aria-pressed',paused);pauseB.onclick=()=>{paused=!paused;pauseB.setAttribute('aria-pressed',paused);still()};
function tick(now){const t=now/1000;if(!paused)vis.forEach(cv=>{if(cv.offsetParent){fit(cv);paint(cv,cv._p,t+cv._off,cv._o)}});if(cur){fit(mdC);paint(mdC,cur,paused?cur.L*.66:t-cur._t0,st)}requestAnimationFrame(tick)}
requestAnimationFrame(tick);addEventListener('resize',still);still();
const FONTS=['400 12px "Space Mono"','700 12px "Space Mono"','400 16px Poppins','500 16px Poppins','600 16px Poppins','700 16px Poppins','800 16px Poppins'];
if(document.fonts)Promise.all(FONTS.map(f=>document.fonts.load(f))).then(()=>{for(const k in PC)delete PC[k];CG.fr=1;still()}).catch(()=>{});

/* customize dialog */
const fB=$('#fBrand'),fH=$('#fHead'),fF=$('#fFormat'),fD=$('#fDur'),mdP=$('#mdP'),sw=$('#sw');let lastFocus=null;
['#7c3aed','#2f6bff','#4898f7','#ec4899','#ff6a2b'].forEach(k=>{const b=document.createElement('button');b.style.background=k;b.dataset.c=k;b.setAttribute('aria-label','Accent '+k);b.onclick=()=>setA(k);sw.appendChild(b)});
const ci=document.createElement('input');ci.type='color';ci.setAttribute('aria-label','Custom accent colour');ci.oninput=()=>setA(ci.value);sw.appendChild(ci);
function setA(k){st.a=k;ci.value=k;sw.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.c==k));upd()}
function upd(){st.brand=fB.value.trim();st.head=fH.value.trim()||DEF.head;st.format=fF.value;st.dur=fD.value;if(cur)mdP.value=fill(cur,st)}
[fB,fH,fF,fD].forEach(f=>f.addEventListener('input',upd));
function openMd(p){lastFocus=document.activeElement;cur=p;p._t0=performance.now()/1000;$('#mdT').textContent=p.title;$('#mdG').textContent=p.cat.join(' · ');if(!fB.value)fB.value=DEF.brand;if(!fH.value)fH.value=DEF.head;ov.hidden=false;document.body.style.overflow='hidden';setA(st.a==='#7c3aed'&&!ov._used?p.a:st.a);ov._used=1;fB.focus();fB.select()}
function closeMd(){ov.hidden=true;cur=null;document.body.style.overflow='';lastFocus&&lastFocus.focus()}
$('#mdX').onclick=closeMd;ov.addEventListener('click',e=>{if(e.target===ov)closeMd()});addEventListener('keydown',e=>{if(e.key==='Escape'&&cur)closeMd()});
$('#mdCopy').onclick=e=>copy(mdP.value,e.currentTarget);
})();
