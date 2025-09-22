// Animación E2E: artifact (verde) y token/oauth (celeste)
(function(){
  const steps = [
    {edges:[], nodes:['dev'], moveA:{x:120,y:90}},
    {edges:['e1a'], nodes:['tekton'], moveA:{x:120,y:170}},
    {edges:['e1b'], nodes:['registry'], moveA:{x:120,y:250}},
    {edges:['e1c'], nodes:['ocp'], moveA:{x:420,y:90}},
    {edges:['e2'], nodes:['istio'], moveA:{x:420,y:170}},
    {edges:['e3'], nodes:['blue'], moveA:{x:420,y:250}},
    {edges:['e4'], nodes:['green'], moveA:{x:420,y:330}},
    {edges:['u1','u2'], nodes:['browser','apigw'], moveT:{x:720,y:140}},
    {edges:['u3'], nodes:['auth'], moveT:{x:720,y:240}},
    {edges:['u4'], nodes:['bff'], moveT:{x:720,y:320}},
    {edges:['u5','u6'], nodes:['svc','prod'], moveT:{x:1040,y:170}},
    {edges:['u7'], nodes:['dbprod'], moveT:{x:1040,y:270}},
  ];
  const edgeIds = ['e1a','e1b','e1c','e2','e3','e4','u1','u2','u3','u4','u5','u6','u7'];
  let idx = 0, timer = null;

  function setActiveEdges(){
    edgeIds.forEach(id=>{
      const el = document.getElementById(id);
      if(!el) return;
      const active = steps.slice(0, idx+1).some(s => (s.edges||[]).includes(id));
      el.classList.toggle('active', active);
    });
  }
  function highlight(){
    document.querySelectorAll('.node').forEach(n=>n.classList.remove('highlight'));
    (steps[idx].nodes||[]).forEach(id=> document.getElementById(id)?.classList.add('highlight'));
  }
  function moveParticle(id, target){
    if(!target) return;
    const el = document.getElementById(id);
    if(!el) return;
    el.setAttribute('cx', target.x);
    el.setAttribute('cy', target.y);
  }
  function render(){
    setActiveEdges(); highlight();
    moveParticle('artifact', steps[idx].moveA);
    moveParticle('token', steps[idx].moveT);
    const lbl = document.getElementById('animStep');
    lbl && (lbl.textContent = `Paso: ${Math.min(idx+1, steps.length)}/${steps.length}`);
  }
  function play(){ if(timer) return; render(); timer=setInterval(()=>{ idx++; if(idx>=steps.length){ pause(); return; } render(); }, 1200); }
  function pause(){ clearInterval(timer); timer=null; }
  function reset(){ pause(); idx=0; render(); }

  document.getElementById('playAnim')?.addEventListener('click', play);
  document.getElementById('pauseAnim')?.addEventListener('click', pause);
  document.getElementById('resetAnim')?.addEventListener('click', reset);
  reset();
})();