/* =======================================================
   FREECOAT DECOR - ADVANCED CONVERSION ENGINE JS
   ======================================================= */

document.addEventListener('DOMContentLoaded', function() {
  
  // 1. DRAGGABLE BEFORE & AFTER SLIDER LOGIC
  initBeforeAfterSlider();

  // 2. PROJECT COST ESTIMATOR CALCULATOR LOGIC
  initCostEstimator();

  // 3. LIVE SOCIAL PROOF TOAST NOTIFICATION LOGIC
  initSocialProofToast();

});

/* --- Multi-Project Draggable Before / After Split Slider --- */
const baProjects = {
  pop: {
    before: 'freecoat/new-images/before-pop-ceiling.jpeg',
    after: 'freecoat/new-images/after-pop-ceiling.jpeg',
    beforeLabel: '🛠️ Before: Raw POP Framing',
    afterLabel: '✨ After: Completed Luxury POP',
    title: 'Modern Living Room POP Ceiling Transformation'
  },

  palace: {
    before: 'freecoat/palace-before.jpg',
    after: 'freecoat/palace.jpg',
    beforeLabel: '🏰 Before: Bare Cement Facade',
    afterLabel: '✨ After: Royal Palace Luxury Finish',
    title: 'Royal Palace Royal Gold & White Facade Transformation'
  },
  pop2: {
    before: 'freecoat/new-images/before-pop-ceiling-1.jpeg',
    after: 'freecoat/new-images/final-fully-finished-pop-ceiling.jpeg',
    beforeLabel: '🛠️ Before: Board Laying Stage',
    afterLabel: '✨ After: Final Integrated Lighting POP',
    title: 'Executive Villa POP Ceiling & Warm LED Lighting'
  }
};

function switchBASliderProject(projectId, element) {
  const proj = baProjects[projectId];
  if (!proj) return;

  const afterImg = document.getElementById('baImgAfterEl');
  const beforeImg = document.getElementById('baImgBeforeEl');
  const beforeBadge = document.getElementById('baBadgeBeforeEl');
  const afterBadge = document.getElementById('baBadgeAfterEl');
  const projectTitle = document.getElementById('baProjectTitleEl');
  const beforeLayer = document.getElementById('baImgBefore');
  const handle = document.getElementById('baSliderHandle');
  const container = document.getElementById('baComparisonWrapper');

  if (afterImg) afterImg.src = proj.after;
  if (beforeImg) beforeImg.src = proj.before;
  if (beforeBadge) beforeBadge.innerText = proj.beforeLabel;
  if (afterBadge) afterBadge.innerText = proj.afterLabel;
  if (projectTitle) projectTitle.innerText = proj.title;

  document.querySelectorAll('.ba-tab-btn').forEach(btn => btn.classList.remove('active'));
  if (element) element.classList.add('active');

  if (beforeLayer) beforeLayer.style.width = '50%';
  if (handle) handle.style.left = '50%';

  if (beforeImg && container) {
    beforeImg.style.width = container.offsetWidth + 'px';
    beforeImg.style.maxWidth = 'none';
  }
}

function initBeforeAfterSlider() {
  const container = document.getElementById('baComparisonWrapper');
  const beforeLayer = document.getElementById('baImgBefore');
  const handle = document.getElementById('baSliderHandle');

  if (!container || !beforeLayer || !handle) return;

  const beforeImg = beforeLayer.querySelector('img');
  
  function updateImageWidths() {
    if (beforeImg && container) {
      beforeImg.style.width = container.offsetWidth + 'px';
      beforeImg.style.maxWidth = 'none';
    }
  }

  updateImageWidths();
  window.addEventListener('resize', updateImageWidths);

  let isDragging = false;

  function updateSliderPosition(clientX) {
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    const percentage = (x / rect.width) * 100;

    beforeLayer.style.width = percentage + '%';
    handle.style.left = percentage + '%';
  }

  handle.addEventListener('mousedown', function(e) {
    isDragging = true;
  });

  window.addEventListener('mouseup', function() {
    isDragging = false;
  });

  window.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });

  // Touch support for mobile devices
  handle.addEventListener('touchstart', function(e) {
    isDragging = true;
  });

  window.addEventListener('touchend', function() {
    isDragging = false;
  });

  window.addEventListener('touchmove', function(e) {
    if (!isDragging || !e.touches[0]) return;
    updateSliderPosition(e.touches[0].clientX);
  });
}

/* --- Project Cost Estimator Widget --- */
let selectedScope = 'interior';
let selectedSize = 'standard';

function selectEstimatorOption(type, value, element) {
  if (type === 'scope') {
    selectedScope = value;
    document.querySelectorAll('[data-scope-option]').forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
  } else if (type === 'size') {
    selectedSize = value;
    document.querySelectorAll('[data-size-option]').forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
  }

  calculateEstimatedPrice();
}

function calculateEstimatedPrice() {
  const priceEl = document.getElementById('estimatorPriceDisplay');
  if (priceEl) {
    priceEl.innerText = "Custom Private Quote";
  }
}

function sendEstimateToWhatsApp() {
  const scopeNames = {
    'interior': 'Interior Painting & Decor',
    'pop': 'POP Ceiling & Lights',
    'luxury': 'Luxury Mansion Full Finish',
    'commercial': 'Hotel & Commercial Plaza'
  };
  const sizeNames = {
    'standard': '2 - 3 Bedroom Property',
    'medium': '4 - 5 Bedroom Executive Villa',
    'large': 'Large Mansion / Commercial'
  };

  const scopeText = scopeNames[selectedScope] || selectedScope.toUpperCase();
  const sizeText = sizeNames[selectedSize] || selectedSize.toUpperCase();

  const text = encodeURIComponent(`Hi FreeCoat Decor! I am interested in getting a custom project quote.\n\nProject Scope: ${scopeText}\nProperty Size: ${sizeText}\n\nI would like to discuss pricing and book a free site inspection directly with the owner!`);
  window.open(`https://wa.me/233240854667?text=${text}`, '_blank');
}

function initCostEstimator() {
  calculateEstimatedPrice();
}

/* --- Live Social Proof Toast Sequence --- */
function initSocialProofToast() {
  const toastContainer = document.getElementById('socialProofToast');
  if (!toastContainer) return;

  const notifications = [
    { name: 'Nana Kwame (East Legon)', action: 'Booked Luxury Mansion Interior', time: '4 minutes ago' },
    { name: 'Dr. Michael (Diaspora, UK)', action: 'Scheduled Live Video Consultation', time: '12 minutes ago' },
    { name: 'Madam Grace (Spintex)', action: 'Booked POP Ceiling & LED Lighting', time: '18 minutes ago' },
    { name: 'Presby Church Committee', action: 'Approved Commercial Complex Painting', time: '1 hour ago' }
  ];

  let currentIndex = 0;

  function showNextNotification() {
    const notif = notifications[currentIndex];
    
    document.getElementById('toastName').innerText = notif.name;
    document.getElementById('toastAction').innerText = notif.action;
    document.getElementById('toastTime').innerText = notif.time;

    toastContainer.classList.add('show');

    // Hide after 5.5 seconds
    setTimeout(() => {
      toastContainer.classList.remove('show');
      currentIndex = (currentIndex + 1) % notifications.length;
    }, 5500);
  }

  // First trigger after 4 seconds
  setTimeout(showNextNotification, 4000);

  // Repeat every 16 seconds
  setInterval(showNextNotification, 16000);
}
