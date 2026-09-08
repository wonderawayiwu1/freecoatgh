/**
 * FreeCoat Decor — Draggable Help Float
 * One floating Help button → Call or WhatsApp. Drag anywhere; position is saved.
 */
(function () {
  "use strict";

  var PHONE = "+233240854667";
  var WA =
    "https://wa.me/233240854667?text=" +
    encodeURIComponent("Hi FreeCoat Decor! I would like to get a quote for painting services.");
  var STORAGE_KEY = "fcHelpFloatPos";

  function removeOldFloats() {
    document.querySelectorAll(".whatsapp-float, .call-float").forEach(function (el) {
      el.remove();
    });
  }

  function buildWidget() {
    if (document.getElementById("fcHelpFloat")) return document.getElementById("fcHelpFloat");

    var root = document.createElement("div");
    root.id = "fcHelpFloat";
    root.className = "fc-help-float";
    root.innerHTML =
      '<div class="fc-help-menu" id="fcHelpMenu" hidden>' +
      '  <a class="fc-help-option fc-help-call" href="tel:' +
      PHONE +
      '">' +
      '    <span class="fc-help-option-icon"><i class="bi bi-telephone-fill"></i></span>' +
      "    <span class=\"fc-help-option-text\"><strong>Call us</strong><small>+233 24 085 4667</small></span>" +
      "  </a>" +
      '  <a class="fc-help-option fc-help-wa" href="' +
      WA +
      '" target="_blank" rel="noopener">' +
      '    <span class="fc-help-option-icon"><i class="bi bi-whatsapp"></i></span>' +
      "    <span class=\"fc-help-option-text\"><strong>WhatsApp</strong><small>Chat with FreeCoat</small></span>" +
      "  </a>" +
      "</div>" +
      '<button type="button" class="fc-help-btn" id="fcHelpBtn" aria-expanded="false" aria-controls="fcHelpMenu" aria-label="Help — call or WhatsApp">' +
      '  <i class="bi bi-headset fc-help-btn-icon"></i>' +
      '  <span class="fc-help-btn-label">Help</span>' +
      '  <i class="bi bi-x-lg fc-help-btn-close" aria-hidden="true"></i>' +
      "</button>";

    document.body.appendChild(root);
    return root;
  }

  function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }

  function applySavedPosition(root) {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var pos = JSON.parse(raw);
      if (typeof pos.left !== "number" || typeof pos.top !== "number") return;
      root.style.left = clamp(pos.left, 8, window.innerWidth - root.offsetWidth - 8) + "px";
      root.style.top = clamp(pos.top, 8, window.innerHeight - root.offsetHeight - 8) + "px";
      root.style.right = "auto";
      root.style.bottom = "auto";
    } catch (e) {}
  }

  function savePosition(root) {
    var rect = root.getBoundingClientRect();
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ left: rect.left, top: rect.top })
      );
    } catch (e) {}
  }

  function init() {
    removeOldFloats();
    var root = buildWidget();
    var btn = document.getElementById("fcHelpBtn");
    var menu = document.getElementById("fcHelpMenu");
    if (!btn || !menu) return;

    applySavedPosition(root);

    var open = false;
    function setOpen(state) {
      open = state;
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      root.classList.toggle("is-open", open);
      if (open) {
        menu.removeAttribute("hidden");
      } else {
        menu.setAttribute("hidden", "");
      }
    }

    var dragging = false;
    var moved = false;
    var startX = 0;
    var startY = 0;
    var originLeft = 0;
    var originTop = 0;
    var pointerId = null;

    function onPointerDown(e) {
      if (e.button !== undefined && e.button !== 0) return;
      dragging = true;
      moved = false;
      pointerId = e.pointerId;
      try {
        btn.setPointerCapture(pointerId);
      } catch (err) {}

      var rect = root.getBoundingClientRect();
      startX = e.clientX;
      startY = e.clientY;
      originLeft = rect.left;
      originTop = rect.top;
      root.classList.add("is-dragging");
      e.preventDefault();
    }

    function onPointerMove(e) {
      if (!dragging) return;
      var dx = e.clientX - startX;
      var dy = e.clientY - startY;
      if (Math.abs(dx) > 6 || Math.abs(dy) > 6) moved = true;

      var w = root.offsetWidth;
      var h = root.offsetHeight;
      var left = clamp(originLeft + dx, 8, window.innerWidth - w - 8);
      var top = clamp(originTop + dy, 8, window.innerHeight - h - 8);
      root.style.left = left + "px";
      root.style.top = top + "px";
      root.style.right = "auto";
      root.style.bottom = "auto";
    }

    function onPointerUp() {
      if (!dragging) return;
      dragging = false;
      root.classList.remove("is-dragging");
      try {
        if (pointerId != null) btn.releasePointerCapture(pointerId);
      } catch (err) {}
      pointerId = null;

      if (moved) {
        savePosition(root);
      } else {
        setOpen(!open);
      }
    }

    btn.addEventListener("pointerdown", onPointerDown);
    btn.addEventListener("pointermove", onPointerMove);
    btn.addEventListener("pointerup", onPointerUp);
    btn.addEventListener("pointercancel", onPointerUp);

    document.addEventListener("click", function (e) {
      if (!open) return;
      if (!root.contains(e.target)) setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && open) setOpen(false);
    });

    window.addEventListener("resize", function () {
      var rect = root.getBoundingClientRect();
      root.style.left =
        clamp(rect.left, 8, window.innerWidth - root.offsetWidth - 8) + "px";
      root.style.top =
        clamp(rect.top, 8, window.innerHeight - root.offsetHeight - 8) + "px";
      root.style.right = "auto";
      root.style.bottom = "auto";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
