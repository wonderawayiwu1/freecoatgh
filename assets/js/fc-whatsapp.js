/**
 * FreeCoat Decor — shared WhatsApp prefill message (emoji-safe)
 */
(function (global) {
  "use strict";

  function line(code, label) {
    return String.fromCodePoint(code) + " " + label;
  }

  var WA_MSG = [
    "Thank you for contacting FreeCoat Decor. We provide professional services in decoration, construction, renovation, and finishing.",
    "",
    "Our Services Include:",
    line(0x1f3e0, "Interior & Exterior Decorations"),
    line(0x1f3a8, "General Painting & Spray Painting"),
    line(0x1f3d7, "General Construction & Building Plan Drawings"),
    line(0x1f528, "Renovation & Finishing Works"),
    line(0x2728, "POP Ceiling & 3D Wall/Ceiling Designs"),
    line(0x1f9f1, "Tiling Works"),
    line(0x26a1, "Electrical Works"),
    line(0x1f6b0, "Plumbing Works"),
    line(0x1f4fa, "Modern TV Unit Designs"),
    line(0x1f4a7, "Leakage Solutions & Roof Leakage Repairs"),
    line(0x1f3e2, "Epoxy Flooring"),
    line(0x1f4d0, "3D Building Drawings"),
    line(0x1f37d, "Kitchen Cabinet Installation"),
    line(0x1f3a8, "Wall Molding Designs"),
    line(0x1f4a6, "Wall Dampness Treatment"),
    line(0x1f33f, "Artificial Grass Installation"),
    line(0x1f5bc, "Wall Artwork & Mural Designs"),
    "",
    "FreeCoat Decor " + String.fromCodePoint(0x2014) + " Quality, Luxury & Excellence.",
    "",
    "Please tell us what service you need and the location of the project, and we'll be happy to assist you with a quotation."
  ].join("\n");

  var WA_URL =
    "https://api.whatsapp.com/send?phone=233240854667&text=" +
    encodeURIComponent(WA_MSG);

  global.FreeCoatWhatsApp = {
    message: WA_MSG,
    url: WA_URL,
    phone: "233240854667",
    buildUrl: function (extra) {
      var text = WA_MSG;
      if (extra) text += "\n\n" + extra;
      return (
        "https://api.whatsapp.com/send?phone=233240854667&text=" +
        encodeURIComponent(text)
      );
    }
  };

  function bindWhatsAppLinks() {
    var nodes = document.querySelectorAll("[data-fc-whatsapp], a.fc-wa-link");
    for (var i = 0; i < nodes.length; i++) {
      var a = nodes[i];
      a.setAttribute("href", WA_URL);
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
    }
  }

  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", bindWhatsAppLinks);
    } else {
      bindWhatsAppLinks();
    }
  }
})(typeof window !== "undefined" ? window : this);
