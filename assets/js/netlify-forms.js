/**
 * FreeCoat Decor — Netlify Forms handler
 * Replaces BootstrapMade php-email-form AJAX (expects "OK") with Netlify-compatible POST.
 */
(function () {
  "use strict";

  function encode(data) {
    return Object.keys(data)
      .map(function (key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
      })
      .join("&");
  }

  function ensureStatusEls(form) {
    var wrap = form.querySelector(".fc-form-status");
    if (!wrap) {
      wrap = document.createElement("div");
      wrap.className = "fc-form-status";
      wrap.innerHTML =
        '<div class="loading">Sending…</div>' +
        '<div class="error-message"></div>' +
        '<div class="sent-message">Thank you! Your message was sent. We will contact you shortly.</div>';
      var btn = form.querySelector('button[type="submit"]');
      if (btn && btn.parentNode) {
        btn.parentNode.insertBefore(wrap, btn);
      } else {
        form.appendChild(wrap);
      }
    }
    return {
      loading: wrap.querySelector(".loading"),
      error: wrap.querySelector(".error-message"),
      sent: wrap.querySelector(".sent-message")
    };
  }

  function show(el, on) {
    if (!el) return;
    el.style.display = on ? "block" : "none";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var forms = document.querySelectorAll('form[data-netlify="true"]');

    forms.forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        var status = ensureStatusEls(form);
        show(status.loading, true);
        show(status.error, false);
        show(status.sent, false);

        var formData = new FormData(form);
        if (!formData.get("form-name")) {
          formData.set("form-name", form.getAttribute("name") || "contact");
        }

        var body = {};
        formData.forEach(function (value, key) {
          body[key] = value;
        });

        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode(body)
        })
          .then(function (res) {
            if (!res.ok) throw new Error("Submission failed (" + res.status + ")");
            show(status.loading, false);
            show(status.sent, true);
            form.reset();

            // Restore default selected options on quote builder if present
            form.querySelectorAll("[data-scope-option], [data-size-option]").forEach(function (btn) {
              btn.classList.remove("selected");
            });
            var firstScope = form.querySelector("[data-scope-option]");
            var firstSize = form.querySelector("[data-size-option]");
            if (firstScope) firstScope.classList.add("selected");
            if (firstSize) firstSize.classList.add("selected");

            var next = form.getAttribute("data-success-redirect");
            if (next) {
              setTimeout(function () {
                window.location.href = next;
              }, 900);
            }
          })
          .catch(function (err) {
            show(status.loading, false);
            if (status.error) {
              status.error.textContent =
                "Could not send right now. Please WhatsApp +233 24 085 4667 or email freecoatpaintingsdecor@gmail.com.";
              show(status.error, true);
            }
            console.error(err);
          });
      });
    });
  });
})();
