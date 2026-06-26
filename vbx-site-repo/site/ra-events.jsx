// AUTO-GENERATED from Resident Advisor (promoter 30291).
// Generated: (placeholder — no RA fetch yet; run scripts/update-from-ra.js from a
// clean network to populate this with live RA events)
// MERGE overlay: adds NEW RA shows to UPCOMING and drops past ones, but never
// overwrites events already curated in data.jsx (matched by RA event id).
(function(){
  var ev = [];
  var U = (window.UPCOMING && Array.isArray(window.UPCOMING)) ? window.UPCOMING : (window.UPCOMING = []);
  function raId(e){
    var m = String((e && e.ticketUrl) || "").match(/ra\.co\/events\/(\d+)/);
    if (m) return m[1];
    var s = String((e && e.slug) || (e && e.id) || "").match(/(\d{6,})/);
    return s ? s[1] : null;
  }
  var seen = {};
  U.forEach(function(e){ var id = raId(e); if (id) seen[id] = true; });
  ev.forEach(function(e){ var id = raId(e); if (!id || !seen[id]) { U.push(e); if (id) seen[id] = true; } });
  var today = new Date().toISOString().slice(0,10);
  var merged = U.filter(function(e){ return e && e.date && e.date >= today; })
               .sort(function(a, b){ return String(a.date).localeCompare(String(b.date)); });
  U.length = 0;
  Array.prototype.push.apply(U, merged);
  window.UPCOMING = U;
})();
