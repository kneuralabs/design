
// ═══════════════════════════════════════════════════════
// DARK MODE TOGGLE
// ═══════════════════════════════════════════════════════
function initTheme() {
  const saved = localStorage.getItem('ds-theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  updateToggleIcon();
}

function toggleTheme() {
  const html = document.documentElement;
  html.classList.add('theme-transitioning');
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  if (next === 'dark') {
    html.setAttribute('data-theme', 'dark');
  } else {
    html.removeAttribute('data-theme');
  }
  localStorage.setItem('ds-theme', next);
  updateToggleIcon();
  setTimeout(() => html.classList.remove('theme-transitioning'), 350);
}

function updateToggleIcon() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.innerHTML = isDark 
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
}

initTheme();


// ═══════════════════════════════════════════════════════
// DATA STORE
// ═══════════════════════════════════════════════════════
const BS = {
  name: 'Lumina',
  tagline: 'Illuminate your world',
  industry: 'technology',
  traits: [],
  archetype: '',
  colors: { primary:'#7c6dff', secondary:'#4ecdc4', accent:'#d4a853', bg:'#0a0a0f', text:'#f0eff8' },
  fonts: { heading:'Space Grotesk', body:'Inter', ui:'IBM Plex Sans' },
  palette: [],
};

const FONT_DB = [
  {name:'Space Grotesk',cat:'Sans Serif',tags:['Technology','Startup','Modern'],desc:'Clean and techy with personality',css:"'Space Grotesk',sans-serif",sample:'Brand Vision'},
  {name:'Inter',cat:'Sans Serif',tags:['Corporate','Technology','Healthcare','Finance'],desc:'Super easy to read everywhere',css:"'Inter',sans-serif",sample:'Clean & Clear'},
  {name:'Manrope',cat:'Sans Serif',tags:['Startup','Creative','Education'],desc:'Friendly and rounded feel',css:"'Manrope',sans-serif",sample:'Modern & Fresh'},
  {name:'DM Sans',cat:'Sans Serif',tags:['Startup','Creative','Fashion'],desc:'Smooth and effortless',css:"'DM Sans',sans-serif",sample:'Effortless Design'},
  {name:'Plus Jakarta Sans',cat:'Sans Serif',tags:['Corporate','Technology','Finance'],desc:'Modern and business-ready',css:"'Plus Jakarta Sans',sans-serif",sample:'Professional Grade'},
  {name:'Sora',cat:'Sans Serif',tags:['Creative','Startup','Technology'],desc:'Bold and future-looking',css:"'Sora',sans-serif",sample:'Future Forward'},
  {name:'Playfair Display',cat:'Serif',tags:['Luxury','Editorial','Fashion'],desc:'Elegant with a classic feel',css:"'Playfair Display',serif",sample:'Timeless Luxury'},
  {name:'Merriweather',cat:'Serif',tags:['Education','Corporate','Healthcare'],desc:'Warm and easy on the eyes',css:"'Merriweather',serif",sample:'Trusted & Warm'},
  {name:'Source Serif 4',cat:'Serif',tags:['Education','Finance','Corporate'],desc:'Trustworthy news-style look',css:"'Source Serif 4',serif",sample:'Credible & Clear'},
  {name:'Cormorant Garamond',cat:'Serif',tags:['Luxury','Fashion','Creative'],desc:'Ultra-elegant and refined',css:"'Cormorant Garamond',serif",sample:'Pure Elegance'},
  {name:'Libre Baskerville',cat:'Serif',tags:['Education','Healthcare','Corporate'],desc:'Classic and dependable',css:"'Libre Baskerville',serif",sample:'Knowledge & Trust'},
  {name:'Fraunces',cat:'Display',tags:['Creative','Editorial','Fashion'],desc:'Artsy and eye-catching',css:"'Fraunces',serif",sample:'Poetic Craft'},
  {name:'IBM Plex Sans',cat:'Sans Serif',tags:['Technology','Finance','Corporate'],desc:'Smart and corporate-ready',css:"'IBM Plex Sans',sans-serif",sample:'Logic Meets Design'},
  {name:'IBM Plex Serif',cat:'Serif',tags:['Technology','Finance','Corporate'],desc:'Polished and structured',css:"'IBM Plex Serif',serif",sample:'Structure & Form'},
];

const PAIRS = [
  {h:'Space Grotesk',b:'Inter',ui:'IBM Plex Sans',label:'Tech Forward',desc:'Clean techy headings with easy-to-read body text',industries:['technology','startup'],traits:['innovative','technical','minimalist']},
  {h:'Playfair Display',b:'Inter',ui:'Inter',label:'Premium Look',desc:'Elegant headings with a smooth, readable body font',industries:['luxury','fashion'],traits:['elegant','premium','creative']},
  {h:'Manrope',b:'Source Serif 4',ui:'Manrope',label:'Friendly & Smart',desc:'Warm, rounded headings with a trustworthy body font',industries:['startup','education'],traits:['friendly','trustworthy','playful']},
  {h:'Cormorant Garamond',b:'Manrope',ui:'DM Sans',label:'Fashion House',desc:'Ultra-elegant headings with a modern, clean body',industries:['luxury','creative','fashion'],traits:['elegant','bold','creative']},
  {h:'IBM Plex Sans',b:'IBM Plex Serif',ui:'IBM Plex Sans',label:'All Business',desc:'A consistent font family that looks sharp everywhere',industries:['finance','corporate','technology'],traits:['trustworthy','technical','minimalist']},
  {h:'Fraunces',b:'DM Sans',ui:'Inter',label:'Bold & Artsy',desc:'Eye-catching headings with a simple, light body font',industries:['creative','editorial'],traits:['creative','bold','playful']},
  {h:'Plus Jakarta Sans',b:'Merriweather',ui:'Inter',label:'Trusted & Warm',desc:'Modern headings paired with a warm, friendly body font',industries:['finance','healthcare','corporate'],traits:['trustworthy','premium','minimalist']},
  {h:'Sora',b:'Manrope',ui:'Space Grotesk',label:'Future Brand',desc:'Bold, future-looking headings with smooth body text',industries:['startup','technology'],traits:['innovative','bold','technical']},
];

const TRAITS = ['Premium','Trustworthy','Innovative','Playful','Elegant','Technical','Friendly','Minimalist','Bold','Creative','Warm','Professional'];
const TRAIT_COLORS = {Premium:'#d4a853',Trustworthy:'#4ecdc4',Innovative:'#7c6dff',Playful:'#e8758a',Elegant:'#a78bfa',Technical:'#60a5fa',Friendly:'#86efac',Minimalist:'#94a3b8',Bold:'#f87171',Creative:'#fb923c',Warm:'#fbbf24',Professional:'#818cf8'};
const ARCHETYPE_DESCS = {
  hero:'Your brand is strong and inspiring. It pushes people to do amazing things and be their best.',
  sage:'Your brand is the wise guide people trust. It helps them learn, understand, and make better decisions.',
  creator:'Your brand is all about imagination. It makes beautiful things and inspires others to be creative too.',
  ruler:'Your brand feels high-end and polished. It stands for quality, confidence, and doing things the right way.',
  magician:'Your brand makes big ideas feel real. It surprises, excites, and delivers on bold promises.',
  jester:'Your brand is all about fun and joy. It keeps things lighthearted and makes people smile.',
  caregiver:'Your brand makes people feel safe and looked after. It\'s warm, generous, and deeply human.',
  explorer:'Your brand is about freedom and adventure. It encourages people to try new things and think differently.',
  lover:'Your brand is warm and personal. It creates close connections and makes people feel special.',
  innocent:'Your brand is cheerful and simple. It\'s honest, upbeat, and always delivers a feel-good experience.'
};

// ═══════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════
function showSection(id, el) {
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('sec-'+id).classList.add('active');
  el.classList.add('active');
  if(id==='preview') renderLivePreview('website');
  if(id==='export') buildExports();
}

function switchTab(tabGroup, panelPrefix, idx, el) {
  const tabs = document.getElementById(tabGroup).querySelectorAll('.tab');
  tabs.forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  const count = document.querySelectorAll('[id^="'+panelPrefix+'"]').length;
  for(let i=0;i<count;i++){
    const p = document.getElementById(panelPrefix+i);
    if(p) p.classList.toggle('active',i===idx);
  }
}

// ═══════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════
function init() {
  renderTraits('traitsWrap',BS.traits,onTraitToggle);
  renderTraits('fontTraitsWrap',BS.traits,onFontTraitToggle);
  renderFontLibrary();
  populateFontSelects();
  generatePalette();
  generateHarmonies();
  initFixColors();
  checkContrast();
  renderTypoPreview('website');
  renderCompare();
  renderHealthScore();
  renderA11y();
  renderAIAdvisor();
  renderTypeScale();
  suggestPairings();
  renderLivePreview('website');
  buildExports();
}

function renderTraits(wrId, active, cb) {
  const wrap = document.getElementById(wrId);
  if(!wrap) return;
  wrap.innerHTML = TRAITS.map(t=>`
    <span class="trait ${active.includes(t)?'on':''}" 
      style="${active.includes(t)?'color:'+TRAIT_COLORS[t]+';border-color:'+TRAIT_COLORS[t]:''}" 
      onclick="(${cb.toString()})(this,'${t}')" data-trait="${t}">${t}</span>
  `).join('');
}

function onTraitToggle(el, t) {
  const i = BS.traits.indexOf(t);
  if(i>-1) BS.traits.splice(i,1); else BS.traits.push(t);
  el.classList.toggle('on');
  if(BS.traits.includes(t)){el.style.color=TRAIT_COLORS[t];el.style.borderColor=TRAIT_COLORS[t];}
  else{el.style.color='';el.style.borderColor='';}
  suggestPairings();
  autoRecommend();
}

function onFontTraitToggle(el, t) {
  const i = BS.traits.indexOf(t);
  if(i>-1) BS.traits.splice(i,1); else BS.traits.push(t);
  el.classList.toggle('on');
  if(BS.traits.includes(t)){el.style.color=TRAIT_COLORS[t];el.style.borderColor=TRAIT_COLORS[t];}
  else{el.style.color='';el.style.borderColor='';}
  suggestPairings();
}

// ═══════════════════════════════════════════════════════
// BRAND
// ═══════════════════════════════════════════════════════
function syncBrand() {
  BS.name = document.getElementById('brandName').value || 'Lumina';
  BS.tagline = document.getElementById('brandTagline').value || 'Illuminate your world';
}

document.getElementById('brandIndustry').addEventListener('change', function(){
  BS.industry = this.value;
  autoRecommend();
});

document.getElementById('archetype').addEventListener('change', function(){
  BS.archetype = this.value;
  const d = document.getElementById('archetypeDesc');
  if(this.value && ARCHETYPE_DESCS[this.value]){
    d.style.display='block';
    d.textContent = ARCHETYPE_DESCS[this.value];
  } else d.style.display='none';
  autoRecommend();
});

function updateColors() {
  BS.colors.primary = document.getElementById('cprimary').value;
  BS.colors.secondary = document.getElementById('csecondary').value;
  BS.colors.accent = document.getElementById('caccent').value;
  BS.colors.bg = document.getElementById('cbg').value;
}

function autoRecommend() {
  updateColors();
  suggestPairings();
  renderAIAdvisor();
  // Navigate to Fonts → Mix & Match so the user sees the results
  const navItem = document.querySelector('.nav-item[data-sec="typography"]');
  if (navItem) showSection('typography', navItem);
  const mixTab = document.querySelector('#typeTabs .tab:nth-child(2)');
  if (mixTab) switchTab('typeTabs', 'typePanel', 1, mixTab);
  showToast('Fonts suggested! See your matches below.');
}

function generateGuidelines() {
  const n = BS.name||'YourBrand';
  const arch = BS.archetype ? `<strong>Archetype:</strong> ${BS.archetype.charAt(0).toUpperCase()+BS.archetype.slice(1)}<br>` : '';
  const traits = BS.traits.length ? `<strong>Personality:</strong> ${BS.traits.join(', ')}<br>` : '';
  const html = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div style="background:var(--c3);border-radius:var(--r);padding:14px">
        <div style="font-size:11px;color:var(--acc2);font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Brand Identity</div>
        <div style="font-size:13px;color:var(--txt2);line-height:1.8">${arch}${traits}
          <strong>Primary Color:</strong> ${BS.colors.primary}<br>
          <strong>Typography:</strong> ${BS.fonts.heading} / ${BS.fonts.body}
        </div>
      </div>
      <div style="background:var(--c3);border-radius:var(--r);padding:14px">
        <div style="font-size:11px;color:var(--acc2);font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Usage Rules</div>
        <div style="font-size:12px;color:var(--txt2);line-height:1.8">
          ✓ Use your main color for buttons<br>
          ✓ Keep text easy to read<br>
          ✓ ${BS.fonts.heading} for all headings<br>
          ✓ ${BS.fonts.body} at least 16px for body text<br>
          ✗ Never stretch the logo<br>
          ✗ Never use random color combos
        </div>
      </div>
      <div style="background:var(--c3);border-radius:var(--r);padding:14px;grid-column:1/-1">
        <div style="font-size:11px;color:var(--acc2);font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px">Color Palette</div>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          ${Object.entries(BS.colors).map(([k,v])=>`
            <div style="text-align:center">
              <div style="width:48px;height:48px;border-radius:8px;background:${v};border:1px solid var(--c4)"></div>
              <div style="font-size:10px;color:var(--txt3);margin-top:4px">${k}</div>
              <div style="font-size:10px;color:var(--txt2);font-weight:600">${v}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  const out = document.getElementById('guidelineOutput');
  document.getElementById('guidelineContent').innerHTML = html;
  out.style.display = 'block';
  out.scrollIntoView({behavior:'smooth',block:'nearest'});
  showToast('Guidelines generated!');
}

// ═══════════════════════════════════════════════════════
// PALETTE FIXER
// ═══════════════════════════════════════════════════════
function hslToHex(h,s,l){
  s/=100;l/=100;
  const a=s*Math.min(l,1-l);
  const f=n=>{const k=(n+h/30)%12;const c=l-a*Math.max(Math.min(k-3,9-k,1),-1);return Math.round(255*c).toString(16).padStart(2,'0')};
  return `#${f(0)}${f(8)}${f(4)}`;
}

function hexToHsl(hex){
  let r=parseInt(hex.slice(1,3),16)/255,g=parseInt(hex.slice(3,5),16)/255,b=parseInt(hex.slice(5,7),16)/255;
  const max=Math.max(r,g,b),min=Math.min(r,g,b);
  let h,s,l=(max+min)/2;
  if(max===min){h=s=0;}else{
    const d=max-min;s=l>.5?d/(2-max-min):d/(max+min);
    switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;default:h=(r-g)/d+4;}
    h/=6;
  }
  return [h*360,s*100,l*100];
}

function generatePalette() {
  const base = document.getElementById('baseHue').value;
  const style = document.getElementById('palStyle').value;
  const count = parseInt(document.getElementById('palCount').value);
  const [h,s,l] = hexToHsl(base);
  let colors=[];
  if(style==='professional'){
    for(let i=0;i<count;i++) colors.push(hslToHex(h,(20+i*12)%100,20+i*(60/count)));
  }else if(style==='vibrant'){
    for(let i=0;i<count;i++) colors.push(hslToHex((h+i*(360/count))%360,75,55));
  }else if(style==='muted'){
    for(let i=0;i<count;i++) colors.push(hslToHex((h+i*15)%360,25,40+i*(40/count)));
  }else if(style==='dark'){
    for(let i=0;i<count;i++) colors.push(hslToHex(h,30+i*8,8+i*(30/count)));
  }else if(style==='pastel'){
    for(let i=0;i<count;i++) colors.push(hslToHex((h+i*(360/count))%360,40,75+i*(10/count)));
  }else if(style==='monochrome'){
    for(let i=0;i<count;i++) colors.push(hslToHex(h,s,15+i*(70/count)));
  }else if(style==='earthy'){
    const hues=[30,45,25,55,15];
    for(let i=0;i<count;i++) colors.push(hslToHex(hues[i%hues.length],40+i*5,35+i*6));
  }else if(style==='neon'){
    for(let i=0;i<count;i++) colors.push(hslToHex((h+i*(360/count))%360,100,60));
  }
  BS.palette = colors;
  renderPaletteDisplay(colors);
}

function renderPaletteDisplay(colors) {
  const d = document.getElementById('paletteDisplay');
  const strip = document.getElementById('paletteStrip');
  d.innerHTML = `<div class="grid-4" style="grid-template-columns:repeat(${Math.min(colors.length,5)},1fr)">
    ${colors.map(c=>`
      <div class="swatch-wrap">
        <div class="swatch" style="background:${c}" onclick="navigator.clipboard.writeText('${c}');showToast('Copied ${c}')"></div>
        <div class="swatch-label">${c}</div>
      </div>
    `).join('')}
  </div>`;
  strip.innerHTML = colors.map(c=>`<div class="palette-chip" style="background:${c}" title="${c}"></div>`).join('');
  document.getElementById('paletteMeta').textContent = `${colors.length} colors · Click any color to copy`;
}


function applyToBrand() {
  if(BS.palette[0]) { document.getElementById('cprimary').value=BS.palette[0]; BS.colors.primary=BS.palette[0]; }
  if(BS.palette[1]) { document.getElementById('csecondary').value=BS.palette[1]; BS.colors.secondary=BS.palette[1]; }
  if(BS.palette[2]) { document.getElementById('caccent').value=BS.palette[2]; BS.colors.accent=BS.palette[2]; }
  showToast('Palette applied to brand!');
  buildExports();
}

// Fix colors
let fixColors = ['#7c6dff','#4ecdc4','#0a0a0f'];
function initFixColors() {
  renderFixInputs();
}

function renderFixInputs() {
  const wrap = document.getElementById('fixInputs');
  wrap.innerHTML = fixColors.map((c,i)=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
      <input type="color" value="${c}" style="width:44px;height:44px;padding:2px;border-radius:8px" oninput="fixColors[${i}]=this.value">
      <span style="font-size:10px;color:var(--txt3)">${c}</span>
    </div>
  `).join('');
}

function addFixColor() {
  if(fixColors.length<8) { fixColors.push('#888888'); renderFixInputs(); }
}

function analyzeColors() {
  const report = document.getElementById('fixReport');
  let html = '<div style="display:grid;gap:10px">';
  fixColors.forEach((c,i)=>{
    const [h,s,l] = hexToHsl(c);
    const issues = [];
    if(l<15) issues.push({t:'Too Dark',f:'Hard to see details',fix:hslToHex(h,s,20)});
    if(l>90) issues.push({t:'Too Light',f:'Hard to read against white',fix:hslToHex(h,s,75)});
    if(s<10) issues.push({t:'Too Dull',f:'Looks washed out',fix:hslToHex(h,40,l)});
    const status = issues.length===0 ? 'Healthy' : 'Needs Fix';
    const statusColor = issues.length===0 ? 'var(--teal)' : 'var(--gold)';
    html += `
      <div style="background:var(--c3);border-radius:var(--r);padding:14px;display:flex;gap:14px;align-items:flex-start;flex-wrap:wrap">
        <div style="width:48px;height:48px;border-radius:8px;background:${c};flex-shrink:0"></div>
        <div style="flex:1;min-width:160px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <span style="font-size:13px;font-weight:600;color:var(--txt1)">${c}</span>
            <span style="font-size:10px;color:${statusColor};font-weight:700;padding:2px 8px;background:rgba(0,0,0,.3);border-radius:20px">${status}</span>
          </div>
          <div style="font-size:11px;color:var(--txt3)">${Math.round(l)<30?'Dark shade':Math.round(l)>70?'Light shade':'Mid-tone'} · ${Math.round(s)<20?'Muted':'Vivid'}</div>
          ${issues.map(iss=>`
            <div style="margin-top:8px;padding:8px;background:var(--c4);border-radius:6px">
              <span style="color:var(--gold);font-size:11px;font-weight:600">⚠ ${iss.t}</span>
              <span style="color:var(--txt3);font-size:11px;margin-left:6px">${iss.f}</span>
              <div style="margin-top:5px;display:flex;align-items:center;gap:6px">
                <span style="font-size:10px;color:var(--txt3)">Fix →</span>
                <div style="width:20px;height:20px;border-radius:4px;background:${iss.fix}"></div>
                <span style="font-size:10px;color:var(--txt2)">${iss.fix}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });
  html += '</div>';
  report.innerHTML = html;
}

// Harmonies
function generateHarmonies() {
  const root = document.getElementById('harmonyRoot').value;
  const type = document.getElementById('harmonyType').value;
  const [h,s,l] = hexToHsl(root);
  let harmonies=[];
  if(type==='complementary') harmonies=[root,hslToHex((h+180)%360,s,l)];
  else if(type==='triadic') harmonies=[root,hslToHex((h+120)%360,s,l),hslToHex((h+240)%360,s,l)];
  else if(type==='analogous') harmonies=[hslToHex((h-30+360)%360,s,l),root,hslToHex((h+30)%360,s,l)];
  else if(type==='split') harmonies=[root,hslToHex((h+150)%360,s,l),hslToHex((h+210)%360,s,l)];
  else if(type==='tetradic') harmonies=[root,hslToHex((h+90)%360,s,l),hslToHex((h+180)%360,s,l),hslToHex((h+270)%360,s,l)];
  else if(type==='square') harmonies=[root,hslToHex((h+90)%360,s,l),hslToHex((h+180)%360,s,l),hslToHex((h+270)%360,s,l)];
  
  const d = document.getElementById('harmoniesDisplay');
  d.innerHTML = `
    <div style="display:flex;gap:0;border-radius:var(--r);overflow:hidden;height:80px;margin-bottom:14px">
      ${harmonies.map(c=>`<div style="flex:1;background:${c};transition:.3s" title="${c}"></div>`).join('')}
    </div>
    <div class="grid-4">
      ${harmonies.map(c=>`
        <div class="swatch-wrap">
          <div class="swatch" style="background:${c}" onclick="navigator.clipboard.writeText('${c}');showToast('Copied!')"></div>
          <div class="swatch-label">${c}</div>
        </div>
      `).join('')}
    </div>
    <p style="font-size:12px;color:var(--txt3);margin-top:10px">Click any color to copy. ${harmonies.length} colors that look great together.</p>
  `;
}

// Contrast
function getLuminance(hex){
  const r=parseInt(hex.slice(1,3),16)/255,g=parseInt(hex.slice(3,5),16)/255,b=parseInt(hex.slice(5,7),16)/255;
  const toLinear=c=>c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4);
  return .2126*toLinear(r)+.7152*toLinear(g)+.0722*toLinear(b);
}

function getContrast(c1,c2){
  const l1=getLuminance(c1),l2=getLuminance(c2);
  return (Math.max(l1,l2)+.05)/(Math.min(l1,l2)+.05);
}

function checkContrast() {
  const fg=document.getElementById('fg').value,bg=document.getElementById('bg').value;
  const ratio = getContrast(fg,bg);
  const aa = ratio>=4.5,aaa=ratio>=7,aaLg=ratio>=3;
  document.getElementById('contrastResult').innerHTML = `
    <div style="background:${bg};border-radius:var(--r);padding:16px;border:1px solid var(--c4);margin-bottom:12px">
      <p style="font-family:'Inter',sans-serif;color:${fg};font-size:18px;font-weight:600;margin-bottom:4px">Sample Heading Text</p>
      <p style="font-family:'Inter',sans-serif;color:${fg};font-size:13px;opacity:.9">This is how body text appears with your color combination.</p>
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">
      <div style="font-size:24px;font-weight:700;font-family:'Space Grotesk',sans-serif;color:var(--txt1)">${ratio.toFixed(2)}:1</div>
      <span class="a11y-chip ${aaa?'a11y-pass':aa?'a11y-warn':'a11y-fail'}">${aaa?'Excellent ✓':'Excellent ✗'}</span>
      <span class="a11y-chip ${aa?'a11y-pass':aaLg?'a11y-warn':'a11y-fail'}">${aa?'Good ✓':'Good ✗'}</span>
      <span class="a11y-chip ${aaLg?'a11y-pass':'a11y-fail'}">${aaLg?'OK for big text ✓':'OK for big text ✗'}</span>
    </div>
    <p style="font-size:12px;color:var(--txt3);margin-top:8px">For easy reading, aim for 4.5 or higher. 7+ is excellent. Big text (18pt+) only needs 3.</p>
  `;
}

// ═══════════════════════════════════════════════════════
// TYPOGRAPHY
// ═══════════════════════════════════════════════════════
function renderFontLibrary() {
  const catF = document.getElementById('fontCatFilter').value;
  const indF = document.getElementById('fontIndustryFilter').value;
  const filtered = FONT_DB.filter(f=>{
    if(catF && f.cat!==catF) return false;
    if(indF && !f.tags.includes(indF)) return false;
    return true;
  });
  const grid = document.getElementById('fontLibGrid');
  grid.innerHTML = filtered.map(f=>`
    <div class="font-card ${BS.fonts.heading===f.name||BS.fonts.body===f.name?'active':''}" onclick="selectFont('${f.name}')">
      <div class="fc-cat">${f.cat}</div>
      <div class="fc-name">${f.name}</div>
      <div class="fc-sample" style="font-family:${f.css};font-size:22px">${f.sample}</div>
      <div class="fc-tag">${f.tags.slice(0,3).join(' · ')}</div>
      <div style="font-size:11px;color:var(--txt3);margin-top:4px">${f.desc}</div>
    </div>
  `).join('');
}

function selectFont(name) {
  BS.fonts.heading = name;
  const f = FONT_DB.find(x=>x.name===name);
  if(f) {
    document.getElementById('selHeading').value = name;
    updateTypoPrev();
    renderFontLibrary();
    renderHealthScore();
    renderAIAdvisor();
    renderTypeScale();
    showToast(`${name} selected as heading font`);
  }
}

function populateFontSelects() {
  const opts = FONT_DB.map(f=>`<option value="${f.name}">${f.name}</option>`).join('');
  ['selHeading','selBody','selUI'].forEach(id=>{
    document.getElementById(id).innerHTML = opts;
  });
  document.getElementById('selHeading').value = BS.fonts.heading;
  document.getElementById('selBody').value = BS.fonts.body;
  document.getElementById('selUI').value = BS.fonts.ui;
}

function updateTypoPrev() {
  BS.fonts.heading = document.getElementById('selHeading').value;
  BS.fonts.body = document.getElementById('selBody').value;
  BS.fonts.ui = document.getElementById('selUI').value;
  renderTypoPreview(document.querySelector('#prevToggle .toggle-btn.active')?.dataset?.mode||'website');
  renderCompare();
  renderHealthScore();
  renderAIAdvisor();
  renderTypeScale();
  buildExports();
}

function suggestPairings() {
  const ind = document.getElementById('pairingIndustry').value;
  const relevant = PAIRS.filter(p=>{
    if(ind && !p.industries.includes(ind)) return false;
    if(BS.traits.length && !BS.traits.some(t=>p.traits.includes(t.toLowerCase()))) {
      if(!ind) return false;
    }
    return true;
  }).slice(0,4);
  const all = relevant.length ? relevant : PAIRS.slice(0,3);
  
  document.getElementById('pairingResults').innerHTML = all.map((p,i)=>`
    <div style="background:var(--c3);border-radius:var(--r);padding:12px;margin-bottom:10px;cursor:pointer;border:1px solid var(--c4);transition:all .2s" 
      onmouseenter="this.style.borderColor='var(--acc2)'" onmouseleave="this.style.borderColor='var(--c4)'"
      onclick="applyPairing(${PAIRS.indexOf(p)})">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <span style="font-size:11px;color:var(--acc2);font-weight:700">${p.label}</span>
        ${i===0?`<span style="font-size:9px;background:var(--acc);color:#fff;padding:2px 7px;border-radius:20px;font-weight:700">BEST MATCH</span>`:''}
      </div>
      <div style="font-family:'${p.h}',sans-serif,serif;font-size:18px;font-weight:700;color:var(--txt1);margin-bottom:3px">${BS.name||'Brand Name'}</div>
      <div style="font-family:'${p.b}',sans-serif,serif;font-size:12px;color:var(--txt2)">${p.desc}</div>
      <div style="margin-top:8px;font-size:10px;color:var(--txt3)">H: ${p.h} · B: ${p.b} · UI: ${p.ui}</div>
    </div>
  `).join('');
}

function applyPairing(idx) {
  const p = PAIRS[idx];
  BS.fonts.heading = p.h; BS.fonts.body = p.b; BS.fonts.ui = p.ui;
  document.getElementById('selHeading').value = p.h;
  document.getElementById('selBody').value = p.b;
  document.getElementById('selUI').value = p.ui;
  updateTypoPrev();
  showToast(`Applied: ${p.h} + ${p.b}`);
}

let prevMode='website';
function switchPrevMode(mode,el){
  document.querySelectorAll('#prevToggle .toggle-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  el.dataset.mode=mode;
  prevMode=mode;
  renderTypoPreview(mode);
}

function renderTypoPreview(mode) {
  const hf = `font-family:'${BS.fonts.heading}',sans-serif,serif`;
  const bf = `font-family:'${BS.fonts.body}',sans-serif,serif`;
  const p = BS.colors.primary;
  const bg = '#13131a';
  const wrap = document.getElementById('typographyPreview');
  
  if(mode==='website') {
    wrap.innerHTML = `
      <div class="brand-mockup">
        <div class="mockup-bar">
          <div class="mock-dot" style="background:#ff5f56"></div>
          <div class="mock-dot" style="background:#ffbd2e"></div>
          <div class="mock-dot" style="background:#27c93f"></div>
          <span style="font-size:11px;color:var(--txt3);margin-left:8px;${bf}">${BS.name.toLowerCase()}.com</span>
        </div>
        <div style="background:${bg};padding:32px 28px">
          <div style="font-size:10px;letter-spacing:2.5px;text-transform:uppercase;color:${p};margin-bottom:10px;${hf}">${BS.industry||'TECHNOLOGY'}</div>
          <h1 style="${hf};font-size:clamp(24px,4vw,44px);font-weight:700;color:#f0eff8;line-height:1.1;margin-bottom:14px">${BS.name||'Brand Name'}<br><span style="color:${p}">Reimagined.</span></h1>
          <p style="${bf};font-size:14px;color:#8a8a9a;line-height:1.7;max-width:480px;margin-bottom:20px">${BS.tagline||'Your tagline here'}. Crafted with precision and designed for impact.</p>
          <div style="display:flex;gap:10px;flex-wrap:wrap">
            <button style="background:${p};color:#fff;border:none;padding:11px 22px;border-radius:8px;${hf};font-weight:600;font-size:13px;cursor:pointer">Get Started →</button>
            <button style="background:transparent;color:#f0eff8;border:1px solid #32324a;padding:11px 22px;border-radius:8px;${bf};font-size:13px;cursor:pointer">Learn More</button>
          </div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:28px">
            ${['Innovative Design','Proven Results','Trusted Platform'].map(t=>`
              <div style="background:#1c1c27;border-radius:8px;padding:14px;border:1px solid #252535">
                <div style="${hf};font-weight:600;font-size:14px;color:#f0eff8;margin-bottom:5px">${t}</div>
                <div style="${bf};font-size:12px;color:#6a6a7a;line-height:1.5">Excellence in every detail.</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>`;
  } else if(mode==='card') {
    wrap.innerHTML = `
      <div style="display:flex;justify-content:center;padding:20px 0">
        <div style="width:340px;height:190px;background:linear-gradient(135deg,${p} 0%,${BS.colors.secondary||'#4ecdc4'} 100%);border-radius:12px;padding:24px;position:relative;box-shadow:0 20px 60px rgba(0,0,0,.5)">
          <div style="${hf};font-size:20px;font-weight:700;color:#fff;letter-spacing:-.5px">${BS.name||'Brand'}</div>
          <div style="${bf};font-size:11px;color:rgba(255,255,255,.7);margin-top:2px">${BS.tagline||'Your tagline'}</div>
          <div style="position:absolute;bottom:24px;left:24px">
            <div style="${hf};color:#fff;font-size:13px;font-weight:600">Creative Director</div>
            <div style="${bf};color:rgba(255,255,255,.7);font-size:11px;margin-top:2px">hello@${(BS.name||'brand').toLowerCase()}.com</div>
          </div>
          <div style="position:absolute;bottom:24px;right:24px;opacity:.3">
            <div style="width:50px;height:50px;border:2px solid #fff;border-radius:50%"></div>
          </div>
        </div>
      </div>`;
  } else if(mode==='social') {
    wrap.innerHTML = `
      <div style="display:flex;justify-content:center;padding:20px 0">
        <div style="width:320px;height:320px;background:${bg};border-radius:16px;overflow:hidden;position:relative">
          <div style="position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(135deg,rgba(124,109,255,.15) 0%,transparent 60%)"></div>
          <div style="padding:28px;height:100%;display:flex;flex-direction:column;justify-content:center">
            <div style="${hf};font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${p};margin-bottom:12px">${BS.industry||'FEATURED'}</div>
            <h2 style="${hf};font-size:28px;font-weight:700;color:#f0eff8;line-height:1.15;margin-bottom:12px">${BS.tagline||'Illuminate<br>Your World'}</h2>
            <p style="${bf};font-size:12px;color:#7a7a8a;line-height:1.5;margin-bottom:20px">Transforming ideas into extraordinary experiences.</p>
            <div style="display:flex;align-items:center;gap:10px">
              <div style="width:32px;height:32px;border-radius:50%;background:${p}"></div>
              <span style="${bf};font-size:12px;font-weight:600;color:#f0eff8">${BS.name||'Brand'}</span>
            </div>
          </div>
        </div>
      </div>`;
  } else if(mode==='app') {
    wrap.innerHTML = `
      <div style="display:flex;justify-content:center;padding:20px 0">
        <div style="width:280px;background:#0d0d18;border-radius:24px;overflow:hidden;border:6px solid #252535">
          <div style="height:24px;background:#0d0d18;display:flex;align-items:center;justify-content:center">
            <div style="width:60px;height:4px;background:#252535;border-radius:2px"></div>
          </div>
          <div style="padding:16px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
              <div style="${hf};font-size:18px;font-weight:700;color:#f0eff8">${BS.name||'App'}</div>
              <div style="width:32px;height:32px;border-radius:50%;background:${p};display:flex;align-items:center;justify-content:center">
                <span style="font-size:14px;color:#fff">⊞</span>
              </div>
            </div>
            ${['Dashboard','Analytics','Settings'].map((item,i)=>`
              <div style="background:${i===0?p:'#1c1c27'};border-radius:10px;padding:12px;margin-bottom:8px;display:flex;align-items:center;gap:10px">
                <div style="width:32px;height:32px;border-radius:8px;background:${i===0?'rgba(255,255,255,.2)':p+'22'};display:flex;align-items:center;justify-content:center">
                  <span style="font-size:14px;color:${i===0?'#fff':p}">◈</span>
                </div>
                <div>
                  <div style="${hf};font-size:13px;font-weight:600;color:${i===0?'#fff':'#f0eff8'}">${item}</div>
                  <div style="${bf};font-size:10px;color:${i===0?'rgba(255,255,255,.6)':'#6a6a7a'}">View details</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>`;
  }
}

function renderCompare() {
  const comparePairs = PAIRS.slice(0,3);
  const hf = n=>`font-family:'${n}',sans-serif,serif`;
  document.getElementById('compareGrid').innerHTML = comparePairs.map((p,i)=>`
    <div class="compare-col ${i===0?'winner':''}">
      ${i===0?`<div class="compare-badge">RECOMMENDED</div>`:''}
      <div style="${hf(p.h)};font-size:22px;font-weight:700;color:var(--txt1);margin-bottom:4px;line-height:1.1">${BS.name||'Brand'}</div>
      <div style="${hf(p.b)};font-size:12px;color:var(--txt2);margin-bottom:12px;line-height:1.5">The quick brown fox. Body text example.</div>
      <div style="font-size:10px;color:var(--txt3)">H: <strong style="color:var(--txt2)">${p.h}</strong></div>
      <div style="font-size:10px;color:var(--txt3);margin-top:2px">B: <strong style="color:var(--txt2)">${p.b}</strong></div>
      <button class="btn btn-ghost btn-sm" style="margin-top:10px;width:100%" onclick="applyPairing(${PAIRS.indexOf(p)})">Apply</button>
    </div>
  `).join('');
}

function renderHealthScore() {
  const hf = FONT_DB.find(f=>f.name===BS.fonts.heading);
  const bf = FONT_DB.find(f=>f.name===BS.fonts.body);
  const scores = {
    'Easy to Read': bf ? (bf.cat==='Sans Serif'?88:75) : 75,
    'Works for Everyone': 85,
    'Clear Visual Order': hf&&bf&&hf.name!==bf.name ? 92 : 70,
    'Brand Match': BS.traits.length ? Math.min(95,70+BS.traits.length*5) : 65,
    'Professional Look': 82
  };
  const total = Math.round(Object.values(scores).reduce((a,b)=>a+b,0)/Object.keys(scores).length);
  document.getElementById('healthScore').innerHTML = `
    <div style="text-align:center;margin-bottom:16px">
      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="34" fill="none" stroke="var(--c4)" stroke-width="6"/>
        <circle cx="40" cy="40" r="34" fill="none" stroke="var(--acc)" stroke-width="6"
          stroke-dasharray="${2*Math.PI*34}" stroke-dashoffset="${2*Math.PI*34*(1-total/100)}"
          stroke-linecap="round" transform="rotate(-90 40 40)" style="transition:stroke-dashoffset 1s"/>
        <text x="40" y="44" text-anchor="middle" fill="#f0eff8" font-size="18" font-weight="700" font-family="Space Grotesk">${total}</text>
      </svg>
      <div style="font-size:12px;color:var(--txt3);margin-top:4px">Font Score</div>
    </div>
    ${Object.entries(scores).map(([k,v])=>`
      <div class="health-item">
        <span class="health-label">${k}</span>
        <div style="flex:2"><div class="score-bar"><div class="score-fill" style="width:${v}%"></div></div></div>
        <span class="health-score" style="color:${v>=85?'var(--teal)':v>=70?'var(--gold)':'var(--rose)'}">${v}</span>
      </div>
    `).join('')}
  `;
}

function renderA11y() {
  const recs = [
    {label:'Smallest text size',val:'16px body / 14px buttons',status:'pass'},
    {label:'Heading readability',val:'Check with your colors',status:'warn'},
    {label:'Line spacing',val:'Good breathing room',status:'pass'},
    {label:'Letter spacing',val:'Comfortable and clear',status:'pass'},
    {label:'Thick vs thin styles',val:'Light body, bold headings',status:'pass'},
    {label:'Easy for everyone',val:`${BS.fonts.body} — Clear letter shapes`,status:'pass'},
  ];
  document.getElementById('a11yAnalysis').innerHTML = recs.map(r=>`
    <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--c3)">
      <span style="font-size:12px;color:var(--txt2)">${r.label}</span>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:11px;color:var(--txt3)">${r.val}</span>
        <span class="a11y-chip a11y-${r.status}">${r.status.toUpperCase()}</span>
      </div>
    </div>
  `).join('');
}

function renderAIAdvisor() {
  const h = BS.fonts.heading || 'Space Grotesk';
  const b = BS.fonts.body || 'Inter';
  const ind = BS.industry || 'technology';
  const traits = BS.traits.length ? BS.traits.join(', ').toLowerCase() : 'modern';
  const advisorTexts = {
    technology:`<strong>${h}</strong> gives your headings a clean, techy look that feels modern and innovative. <strong>${b}</strong> keeps everything easy to read on screens — perfect for tech products.`,
    luxury:`<strong>${h}</strong> brings an elegant, timeless feel to your headings. Paired with <strong>${b}</strong>, your brand looks polished and intentional.`,
    healthcare:`<strong>${h}</strong> feels trustworthy and clear. <strong>${b}</strong> keeps things warm and readable, making even complex info feel approachable.`,
    finance:`<strong>${h}</strong> looks confident and stable — exactly what finance needs. <strong>${b}</strong> stays crisp and professional everywhere.`,
    default:`<strong>${h}</strong> sets the tone for your brand with a ${traits} vibe. <strong>${b}</strong> complements it perfectly and reads well everywhere.`
  };
  const text = advisorTexts[ind]||advisorTexts.default;
  document.getElementById('aiAdvisor').innerHTML = `
    <div class="ai-chip">✦ Font Analysis</div>
    <div style="background:var(--c3);border-radius:var(--r);padding:14px;font-size:13px;color:var(--txt2);line-height:1.7">${text}</div>
    <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">
      ${PAIRS.filter(p=>p.industries.includes(ind)).slice(0,2).map(p=>`
        <div style="background:var(--c3);border-radius:var(--r3);padding:8px 12px;font-size:11px;color:var(--txt2)">
          ✓ <strong>${p.h}</strong> + <strong>${p.b}</strong> — <span style="color:var(--txt3)">${p.label}</span>
        </div>
      `).join('')}
    </div>
  `;
}

const SCALE_STEPS = [
  {name:'Display XL',size:56,lh:1.1,ls:'-1px',w:700},
  {name:'Display',size:44,lh:1.15,ls:'-.5px',w:700},
  {name:'H1',size:36,lh:1.2,ls:'-.3px',w:600},
  {name:'H2',size:28,lh:1.25,ls:'-.2px',w:600},
  {name:'H3',size:22,lh:1.3,ls:'0',w:600},
  {name:'H4',size:18,lh:1.35,ls:'0',w:500},
  {name:'Body L',size:18,lh:1.7,ls:'0',w:400},
  {name:'Body',size:16,lh:1.7,ls:'0',w:400},
  {name:'Small',size:14,lh:1.5,ls:'0',w:400},
  {name:'Caption',size:12,lh:1.4,ls:'.2px',w:400},
  {name:'Label',size:11,lh:1.3,ls:'.8px',w:600},
];

function renderTypeScale() {
  const hf = `font-family:'${BS.fonts.heading}',sans-serif,serif`;
  const bf = `font-family:'${BS.fonts.body}',sans-serif,serif`;
  document.getElementById('typeScale').innerHTML = SCALE_STEPS.map(s=>{
    const isHead = s.name.startsWith('H')||s.name.startsWith('Display');
    return `
      <div class="scale-row">
        <span class="scale-size">${s.size}px</span>
        <span class="scale-name" style="color:var(--txt3)">${s.name}</span>
        <span style="${isHead?hf:bf};font-size:${Math.min(s.size,28)}px;font-weight:${s.w};color:var(--txt1);line-height:1">${s.name}</span>
      </div>
    `;
  }).join('');

  document.getElementById('typeSpecs').innerHTML = `
    <div style="font-size:12px;color:var(--txt2);line-height:1.9">
      <div><strong style="color:var(--txt1)">Heading Font:</strong> ${BS.fonts.heading}</div>
      <div><strong style="color:var(--txt1)">Body Font:</strong> ${BS.fonts.body}</div>
      <div><strong style="color:var(--txt1)">Buttons & Labels:</strong> ${BS.fonts.ui}</div>
      <div class="divider"></div>
      <div><strong style="color:var(--txt1)">Starting Size:</strong> 16px</div>
      <div><strong style="color:var(--txt1)">Each Step Up:</strong> 1.25× bigger</div>
      <div><strong style="color:var(--txt1)">Line Spacing (body):</strong> Roomy (1.7)</div>
      <div><strong style="color:var(--txt1)">Line Spacing (headings):</strong> Tight (1.1–1.3)</div>
      <div><strong style="color:var(--txt1)">Thickness Options:</strong> Light, Medium, Semi-Bold, Bold</div>
      <div><strong style="color:var(--txt1)">Letter Gaps:</strong> Tight to Wide</div>
    </div>
  `;

  document.getElementById('respTypo').innerHTML = `
    <div class="grid-3">
      ${[
        {bp:'Phone',h:'28–36px',b:'15px',scale:'Smaller steps'},
        {bp:'Tablet',h:'36–44px',b:'16px',scale:'Medium steps'},
        {bp:'Computer',h:'44–72px',b:'18px',scale:'Bigger steps'},
      ].map(r=>`
        <div style="background:var(--c3);border-radius:var(--r);padding:14px">
          <div style="font-size:11px;color:var(--acc2);font-weight:700;margin-bottom:8px">${r.bp}</div>
          <div style="font-size:12px;color:var(--txt2);line-height:1.8">
            <span>Headings: ${r.h}</span><br>
            <span>Body text: ${r.b}</span><br>
            <span>Size jumps: ${r.scale}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ═══════════════════════════════════════════════════════
// LIVE PREVIEW
// ═══════════════════════════════════════════════════════
function switchLivePrev(mode,el){
  document.querySelectorAll('#sec-preview .toggle-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  renderLivePreview(mode);
}

function renderLivePreview(mode) {
  const wrap = document.getElementById('livePreviewWrap');
  const p = BS.colors.primary;
  const s = BS.colors.secondary||'#4ecdc4';
  const a = BS.colors.accent||'#d4a853';
  const bg = BS.colors.bg||'#0a0a0f';
  const hf = `font-family:'${BS.fonts.heading}',sans-serif,serif`;
  const bf = `font-family:'${BS.fonts.body}',sans-serif,serif`;
  const name = BS.name||'Brand';
  const tagline = BS.tagline||'Your tagline here';

  if(mode==='website') {
    wrap.innerHTML = `
      <div style="border-radius:16px;overflow:hidden;border:1px solid var(--c4)">
        <div style="background:var(--c4);height:36px;display:flex;align-items:center;padding:0 14px;gap:6px">
          <div style="width:10px;height:10px;border-radius:50%;background:#ff5f56"></div>
          <div style="width:10px;height:10px;border-radius:50%;background:#ffbd2e"></div>
          <div style="width:10px;height:10px;border-radius:50%;background:#27c93f"></div>
          <div style="flex:1;margin-left:8px;height:22px;background:var(--c3);border-radius:4px;display:flex;align-items:center;padding:0 10px">
            <span style="${bf};font-size:11px;color:var(--txt3)">${name.toLowerCase()}.com</span>
          </div>
        </div>
        <div style="background:${bg}">
          <nav style="padding:14px 28px;border-bottom:1px solid rgba(255,255,255,.06);display:flex;align-items:center;gap:20px">
            <span style="${hf};font-size:16px;font-weight:700;color:#f0eff8">${name}</span>
            <div style="display:flex;gap:16px;margin-left:auto">
              ${['Product','About','Pricing'].map(l=>`<span style="${bf};font-size:12px;color:rgba(255,255,255,.5);cursor:pointer">${l}</span>`).join('')}
              <button style="background:${p};color:#fff;border:none;padding:6px 14px;border-radius:6px;${hf};font-size:12px;font-weight:600;cursor:pointer">Sign Up</button>
            </div>
          </nav>
          <div style="padding:60px 28px 40px">
            <div style="${hf};font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${p};margin-bottom:12px">Now Available</div>
            <h1 style="${hf};font-size:clamp(28px,4vw,52px);font-weight:700;color:#f0eff8;line-height:1.1;margin-bottom:16px">${tagline}</h1>
            <p style="${bf};font-size:15px;color:rgba(255,255,255,.5);line-height:1.7;max-width:520px;margin-bottom:28px">Build powerful brand systems that scale. From identity to implementation, we've got you covered with professional tools.</p>
            <div style="display:flex;gap:12px;margin-bottom:48px;flex-wrap:wrap">
              <button style="background:${p};color:#fff;border:none;padding:13px 26px;border-radius:8px;${hf};font-weight:600;font-size:14px;cursor:pointer">Start Building →</button>
              <button style="background:transparent;color:rgba(255,255,255,.7);border:1px solid rgba(255,255,255,.15);padding:13px 26px;border-radius:8px;${bf};font-size:14px;cursor:pointer">Watch Demo</button>
            </div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px">
              ${[[p,'Identity'],[s,'Palette'],[a,'Typography']].map(([c,t])=>`
                <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:18px">
                  <div style="width:36px;height:36px;border-radius:8px;background:${c}22;display:flex;align-items:center;justify-content:center;margin-bottom:10px">
                    <div style="width:16px;height:16px;border-radius:4px;background:${c}"></div>
                  </div>
                  <div style="${hf};font-size:14px;font-weight:600;color:#f0eff8;margin-bottom:4px">${t}</div>
                  <div style="${bf};font-size:12px;color:rgba(255,255,255,.4);line-height:1.5">Professional grade tools</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>`;
  } else if(mode==='app') {
    wrap.innerHTML = `
      <div style="display:flex;justify-content:center;padding:10px 0">
        <div style="width:320px;background:${bg};border-radius:28px;border:8px solid var(--c4);overflow:hidden">
          <div style="height:28px;background:${bg};display:flex;align-items:flex-end;justify-content:center;padding-bottom:4px">
            <div style="width:80px;height:5px;background:var(--c4);border-radius:3px"></div>
          </div>
          <div style="padding:16px 16px 24px">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px">
              <div style="width:36px;height:36px;border-radius:10px;background:${p};display:flex;align-items:center;justify-content:center">
                <span style="${hf};font-size:16px;font-weight:700;color:#fff">${name[0]}</span>
              </div>
              <div>
                <div style="${hf};font-size:14px;font-weight:600;color:#f0eff8">${name}</div>
                <div style="${bf};font-size:11px;color:rgba(255,255,255,.4)">Dashboard</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,${p},${s});border-radius:14px;padding:18px;margin-bottom:14px">
              <div style="${bf};font-size:11px;color:rgba(255,255,255,.7);margin-bottom:4px">Total Revenue</div>
              <div style="${hf};font-size:26px;font-weight:700;color:#fff">$48,200</div>
              <div style="${bf};font-size:11px;color:rgba(255,255,255,.6);margin-top:6px">↑ 24% this month</div>
            </div>
            ${['Campaigns','Analytics','Reports'].map((item,i)=>`
              <div style="display:flex;align-items:center;gap:10px;padding:10px;background:rgba(255,255,255,.04);border-radius:10px;margin-bottom:8px">
                <div style="width:28px;height:28px;border-radius:7px;background:${[p,s,a][i]}22;display:flex;align-items:center;justify-content:center">
                  <div style="width:10px;height:10px;border-radius:2px;background:${[p,s,a][i]}"></div>
                </div>
                <span style="${hf};font-size:13px;font-weight:500;color:#f0eff8">${item}</span>
                <span style="${bf};font-size:11px;color:rgba(255,255,255,.3);margin-left:auto">→</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>`;
  } else if(mode==='social') {
    wrap.innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:600px;margin:0 auto">
        <div style="aspect-ratio:1;background:${bg};border-radius:14px;overflow:hidden;padding:20px;display:flex;flex-direction:column;justify-content:flex-end;border:1px solid var(--c4);position:relative">
          <div style="position:absolute;top:0;right:0;width:100px;height:100px;background:${p};border-radius:0 14px 0 100%"></div>
          <div style="${hf};font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${p};margin-bottom:6px">${name}</div>
          <div style="${hf};font-size:18px;font-weight:700;color:#f0eff8;line-height:1.2">${tagline}</div>
        </div>
        <div style="aspect-ratio:1;background:${p};border-radius:14px;overflow:hidden;padding:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center">
          <div style="${hf};font-size:32px;font-weight:700;color:#fff;line-height:1">${name[0]}</div>
          <div style="${hf};font-size:14px;font-weight:600;color:rgba(255,255,255,.9);margin-top:8px">${name}</div>
          <div style="${bf};font-size:11px;color:rgba(255,255,255,.6);margin-top:4px">${BS.industry||'Brand'}</div>
        </div>
        <div style="aspect-ratio:2/1;grid-column:1/-1;background:linear-gradient(135deg,${bg},${p}22);border-radius:14px;padding:20px;display:flex;align-items:center;gap:20px;border:1px solid rgba(255,255,255,.08)">
          <div style="width:48px;height:48px;border-radius:12px;background:${p};flex-shrink:0"></div>
          <div>
            <div style="${hf};font-size:16px;font-weight:700;color:#f0eff8">${tagline}</div>
            <div style="${bf};font-size:12px;color:rgba(255,255,255,.4);margin-top:3px">Brand Story · ${name}</div>
          </div>
        </div>
      </div>`;
  } else if(mode==='pres') {
    wrap.innerHTML = `
      <div style="background:${bg};border-radius:14px;overflow:hidden;border:1px solid var(--c4);aspect-ratio:16/9;display:flex;flex-direction:column">
        <div style="background:${p};height:4px"></div>
        <div style="flex:1;padding:40px;display:flex;align-items:center">
          <div>
            <div style="${hf};font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:${p};margin-bottom:12px">COMPANY OVERVIEW</div>
            <h1 style="${hf};font-size:clamp(20px,3vw,42px);font-weight:700;color:#f0eff8;line-height:1.15;margin-bottom:14px">${name}<br><span style="color:${p}">${tagline}</span></h1>
            <p style="${bf};font-size:13px;color:rgba(255,255,255,.5);line-height:1.6;max-width:400px">Transforming how brands are built and experienced. Professional tools for the modern creative team.</p>
          </div>
        </div>
        <div style="padding:14px 40px;border-top:1px solid rgba(255,255,255,.06);display:flex;justify-content:space-between;align-items:center">
          <span style="${hf};font-size:11px;font-weight:600;color:rgba(255,255,255,.3)">${name} · Brand Presentation</span>
          <div style="display:flex;gap:6px">
            ${[p,s,a].map(c=>`<div style="width:20px;height:3px;border-radius:2px;background:${c}"></div>`).join('')}
          </div>
        </div>
      </div>`;
  }
}

// ═══════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════
function buildExports() {
  const hf = BS.fonts.heading||'Space Grotesk';
  const bf = BS.fonts.body||'Inter';
  const ui = BS.fonts.ui||'IBM Plex Sans';
  const c = BS.colors;

  document.getElementById('cssExport').textContent = 
`:root {
  /* Brand Identity: ${BS.name||'Brand'} */

  /* Colors */
  --color-primary: ${c.primary};
  --color-secondary: ${c.secondary||'#4ecdc4'};
  --color-accent: ${c.accent||'#d4a853'};
  --color-background: ${c.bg||'#0a0a0f'};
  --color-text: ${c.text||'#f0eff8'};

  /* Typography */
  --font-heading: '${hf}', sans-serif;
  --font-body: '${bf}', sans-serif;
  --font-ui: '${ui}', sans-serif;

  /* Type Scale */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-8: 2rem;
  --space-16: 4rem;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 20px;
}`;

  document.getElementById('tailwindExport').textContent = 
`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '${c.primary}',
          secondary: '${c.secondary||'#4ecdc4'}',
          accent: '${c.accent||'#d4a853'}',
          bg: '${c.bg||'#0a0a0f'}',
        }
      },
      fontFamily: {
        heading: ['${hf}', 'sans-serif'],
        body: ['${bf}', 'sans-serif'],
        ui: ['${ui}', 'monospace'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1' }],
        'h1': ['2.25rem', { lineHeight: '1.2' }],
        'h2': ['1.875rem', { lineHeight: '1.25' }],
        'h3': ['1.5rem', { lineHeight: '1.3' }],
      }
    }
  }
}`;

  document.getElementById('tokensExport').textContent = 
JSON.stringify({
  color: {
    primary: { value: c.primary, type: 'color' },
    secondary: { value: c.secondary||'#4ecdc4', type: 'color' },
    accent: { value: c.accent||'#d4a853', type: 'color' },
    background: { value: c.bg||'#0a0a0f', type: 'color' },
  },
  typography: {
    fontHeading: { value: hf, type: 'fontFamily' },
    fontBody: { value: bf, type: 'fontFamily' },
    fontUI: { value: ui, type: 'fontFamily' },
    sizeBase: { value: '16px', type: 'fontSize' },
  }
}, null, 2);

  document.getElementById('figmaExport').textContent = 
JSON.stringify({
  "$schema": "https://stepsapp.org/tokens/schema/1.0",
  "global": {
    "brand-primary": { "$value": c.primary, "$type": "color" },
    "brand-secondary": { "$value": c.secondary||'#4ecdc4', "$type": "color" },
    "font-heading": { "$value": hf, "$type": "fontFamily" },
    "font-body": { "$value": bf, "$type": "fontFamily" },
    "size-base": { "$value": "16", "$type": "fontSize" },
    "size-h1": { "$value": "36", "$type": "fontSize" },
    "weight-bold": { "$value": "700", "$type": "fontWeight" },
    "line-height-body": { "$value": "1.7", "$type": "lineHeight" },
  }
}, null, 2);
}

function copyExport(id) {
  const el = document.getElementById(id);
  navigator.clipboard.writeText(el.textContent);
  showToast('Copied to clipboard!');
}

// ═══════════════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════════════
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2500);
}

function copyPaletteCSS() {
  const css = BS.palette.map((c,i)=>`--color-${i+1}: ${c};`).join('\n');
  navigator.clipboard.writeText(`:root {\n${css}\n}`);
  showToast('Palette CSS copied!');
}

// Init on load
window.addEventListener('load', init);
