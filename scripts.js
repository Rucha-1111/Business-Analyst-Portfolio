const SKILLS = ["Requirements Analysis", "BABOK", "BRD / FRD", "Stakeholder Management", "SQL / MySQL", "Python \u00b7 Pandas", "Data Visualisation", "Process Mapping", "UAT Planning", "Agile / JIRA"];

/* ─── Skills ─── */
function renderSkills(ids){
  (ids||['homeSkills']).forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.innerHTML=SKILLS.map(s=>`<span class="skill-chip">${s}</span>`).join('');
  });
}

/* ─── Modal ─── */
let _modalCharts = [];
function setModalCharts(charts){ _modalCharts = charts; }

function openChartModal(idx, tab, e){
  if(e) e.stopPropagation();
  tab = tab || 'img';
  const chart = _modalCharts[idx];
  if(!chart) return;
  document.getElementById('modalTitle').textContent = chart.title;
  document.getElementById('modalImg').src           = chart.img;
  document.getElementById('modalInsight').textContent = chart.insight;
  document.getElementById('modalCode').textContent  = chart.code;
  const ghBtn = document.getElementById('modalGithubBtn');
  if(ghBtn) ghBtn.href = window._projGithub || '#';
  switchModalTab(tab);
  document.getElementById('chartModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModalDirect(){
  document.getElementById('chartModal').classList.remove('open');
  document.body.style.overflow = '';
}
function closeModal(e){ if(e.target.id==='chartModal') closeModalDirect(); }
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModalDirect(); });
function switchModalTab(tab){
  const isImg = tab==='img';
  document.getElementById('modalImgPanel').classList.toggle('hidden',  !isImg);
  document.getElementById('modalCodePanel').classList.toggle('visible', !isImg);
  document.querySelectorAll('.modal-tab').forEach((b,i)=>b.classList.toggle('active', isImg?i===0:i===1));
}

/* ─── Sub Nav (project pages) ─── */
function switchSubnav(tab){
  const isViz = tab==='viz';
  const vp = document.getElementById('vizPanel');
  const dp = document.getElementById('docsPanel');
  if(vp) vp.style.display = isViz ? '' : 'none';
  if(dp) dp.style.display = isViz ? 'none' : '';
  document.getElementById('subVizBtn').classList.toggle('active',  isViz);
  document.getElementById('subDocBtn').classList.toggle('active',  !isViz);
}