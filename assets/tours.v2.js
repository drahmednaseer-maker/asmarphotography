/* Shared behaviour for the tour and guide pages (no inline handlers, CSP friendly). */
(function(){
  var root=document.documentElement;
  var toggle=document.getElementById('themeToggle');
  if(toggle) toggle.addEventListener('click',function(){
    var next=root.getAttribute('data-theme')==='light'?'dark':'light';
    try{ localStorage.setItem('theme',next); }catch(e){}
    if(next==='light') root.setAttribute('data-theme','light'); else root.removeAttribute('data-theme');
    toggle.setAttribute('aria-label','Switch to '+(next==='light'?'dark':'light')+' mode');
  });
  var burger=document.getElementById('tbBurger'), nav=document.getElementById('tbNav');
  if(burger&&nav) burger.addEventListener('click',function(){
    var open=nav.classList.toggle('open');
    burger.setAttribute('aria-expanded',open?'true':'false');
  });
  /* light image protection, consistent with the main site */
  document.addEventListener('contextmenu',function(e){ if(e.target.tagName==='IMG') e.preventDefault(); });
  [].forEach.call(document.querySelectorAll('img'),function(im){ im.setAttribute('draggable','false'); });
})();
