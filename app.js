/* Preston University Past Papers — renders the 6 program folder tiles.
   The folder links live in papers.js (window.FOLDERS). */

(function () {
  "use strict";

  var PLACEHOLDER = "PASTE-DRIVE-FOLDER-LINK-HERE";
  var FOLDERS = (window.FOLDERS || []).slice();

  // One accent colour per program tile
  var ACC = ["#f6b40e", "#7dd3fc", "#ff8fb0", "#b49cff", "#8ea8ff", "#5fd39a"];

  var grid = document.getElementById("grid");
  var nPrograms = document.getElementById("n-programs");

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  var FOLDER_ICON =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M3 8c0-1.1.9-2 2-2h4.2c.6 0 1.1.2 1.5.6L12 8h7c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V8z"/>' +
    "</svg>";

  var ARROW_ICON =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M7 17L17 7"/><path d="M9 7h8v8"/>' +
    "</svg>";

  function tile(f, i) {
    var tint = ACC[i % ACC.length];
    var url = String(f.url || "").trim();
    var isReal = url && url.indexOf(PLACEHOLDER) === -1 && /^https?:\/\//.test(url);

    var head =
      '<span class="ficon">' + FOLDER_ICON + "</span>" +
      '<span class="fbody">' +
        '<span class="fname">' + esc(f.name) + "</span>" +
        '<span class="fsub">All subjects &amp; past papers</span>' +
      "</span>";

    if (isReal) {
      return '<a class="folder" href="' + esc(url) + '" target="_blank" rel="noopener" ' +
        'style="--tint:' + tint + '" ' +
        'aria-label="Open the ' + esc(f.name) + ' past papers folder on Google Drive">' +
        head +
        '<span class="fcta">Open folder ' + ARROW_ICON + "</span>" +
        "</a>";
    }
    // Link not pasted yet on papers.js
    return '<div class="folder is-empty" style="--tint:' + tint + '" title="Owner: paste the folder link in papers.js">' +
      head +
      '<span class="fcta">Link not added yet</span>' +
      "</div>";
  }

  grid.innerHTML = FOLDERS.map(tile).join("");

  var real = FOLDERS.filter(function (f) {
    var u = String(f.url || "").trim();
    return u && u.indexOf(PLACEHOLDER) === -1 && /^https?:\/\//.test(u);
  }).length;
  nPrograms.textContent = String(real || FOLDERS.length);
})();
