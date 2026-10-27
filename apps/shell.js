/* Wottrich — boton flotante para volver al panel. Se carga dentro de cada herramienta. */
(function () {
  if (window.__WT_SHELL__) return;
  window.__WT_SHELL__ = true;

  // El panel esta dos niveles arriba: /apps/<herramienta>/ -> /
  var PANEL = new URL('../../', location.href).href;

  var KEY = 'wt-shell-btn-pos';
  var btn = document.createElement('button');
  btn.setAttribute('aria-label', 'Volver al panel Wottrich');
  btn.textContent = '\u2190';
  btn.style.cssText = [
    'position:fixed', 'z-index:2147483000',
    'left:12px', 'bottom:12px',
    'width:46px', 'height:46px', 'border-radius:50%',
    'border:1px solid rgba(255,255,255,.28)',
    'background:rgba(10,15,26,.72)', 'color:#eef3f8',
    'font:600 20px/1 system-ui,-apple-system,sans-serif',
    'display:flex', 'align-items:center', 'justify-content:center',
    'box-shadow:0 6px 18px rgba(0,0,0,.45)',
    'touch-action:none', 'cursor:pointer', 'padding:0',
    '-webkit-tap-highlight-color:transparent'
  ].join(';');

  function place(pos) {
    if (!pos) return;
    var w = window.innerWidth, h = window.innerHeight;
    btn.style.left = Math.max(4, Math.min(w - 50, pos.x)) + 'px';
    btn.style.top = Math.max(4, Math.min(h - 50, pos.y)) + 'px';
    btn.style.bottom = 'auto';
  }

  try { place(JSON.parse(localStorage.getItem(KEY) || 'null')); } catch (e) {}

  var drag = false, moved = false, sx = 0, sy = 0, ox = 0, oy = 0;

  btn.addEventListener('pointerdown', function (ev) {
    drag = true; moved = false;
    sx = ev.clientX; sy = ev.clientY;
    var r = btn.getBoundingClientRect();
    ox = r.left; oy = r.top;
    try { btn.setPointerCapture(ev.pointerId); } catch (e) {}
    ev.preventDefault();
  });

  btn.addEventListener('pointermove', function (ev) {
    if (!drag) return;
    var dx = ev.clientX - sx, dy = ev.clientY - sy;
    if (Math.abs(dx) > 6 || Math.abs(dy) > 6) moved = true;
    if (!moved) return;
    var w = window.innerWidth, h = window.innerHeight;
    var x = Math.max(4, Math.min(w - 50, ox + dx));
    var y = Math.max(4, Math.min(h - 50, oy + dy));
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
    btn.style.bottom = 'auto';
  });

  btn.addEventListener('pointerup', function () {
    if (!drag) return;
    drag = false;
    if (moved) {
      var r = btn.getBoundingClientRect();
      try { localStorage.setItem(KEY, JSON.stringify({ x: r.left, y: r.top })); } catch (e) {}
      return;
    }
    location.href = PANEL;
  });

  btn.addEventListener('pointercancel', function () { drag = false; });

  function mount() {
    if (!document.body) { setTimeout(mount, 60); return; }
    document.body.appendChild(btn);
  }
  mount();
})();
