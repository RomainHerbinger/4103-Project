document.addEventListener("DOMContentLoaded", function() {
    openWelcomeModal();
    updateSetPiece();
    loadSettings();
});

// Open inital modal.
function openWelcomeModal() {
    document.getElementById("welcomeModal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

// Close all other modals
function closeModal() {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => modal.style.display = "none");
    document.getElementById("overlay").style.display = "none";
}

document.getElementById("book").addEventListener("click", function() {
    openWelcomeModal();
});

function showCanvasModal(canvasId) {
    const modalId = `canvasModal${canvasId}`;
    document.getElementById(modalId).style.display = "block";
    document.getElementById("overlay").style.display = "block";

    localStorage.setItem(`canvas${canvasId}Visited`, true);
    updateSetPiece();
}

// Show statue modals
function showStatueModal(statueId) {
    const modalId = `statueModal${statueId}`;
    document.getElementById(modalId).style.display = "block";
    document.getElementById("overlay").style.display = "block";
}


function showResetConfirmation() {
    document.getElementById("resetModal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeResetModal() {
    document.getElementById("resetModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function closeFinalModal() {
    document.getElementById("resetModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


function saveSettings() {
    const disableBorders = document.getElementById("disableBorders").checked;
    const increaseFont = document.getElementById("increaseFont").checked;
    const changeFont = document.getElementById("changeFont").checked;
  
    // Save to localStorage
    localStorage.setItem("disableBorders", disableBorders);
    localStorage.setItem("increaseFont", increaseFont);
    localStorage.setItem("changeFont", changeFont);
  
    // Reload the page to apply changes
    location.reload();
  }

  function loadSettings() {
    const disableBorders = localStorage.getItem("disableBorders") === "true";
    const increaseFont = localStorage.getItem("increaseFont") === "true";
    const changeFont = localStorage.getItem("changeFont") === "true";
  
    // Apply border removal
    if (disableBorders) {
      document.querySelectorAll(".canvas, .book-area, .door-area, .set-piece, .statue").forEach(element => {
        element.classList.add("no-border");
      });
    }
  
    // Apply font size increase
    if (increaseFont) {
      document.querySelectorAll(".modal").forEach(element => {
        element.classList.add("large-font");
      });
    }
  
    // Apply font style change
    if (changeFont) {
      document.querySelectorAll(".modal").forEach(element => {
        element.classList.add("serif-font");
      });
    }
  
    // Keep checkboxes in sync
    document.getElementById("disableBorders").checked = disableBorders;
    document.getElementById("increaseFont").checked = increaseFont;
    document.getElementById("changeFont").checked = changeFont;
  }
  

function resetProgress() {
    localStorage.removeItem('canvas1Visited');
    localStorage.removeItem('canvas2Visited');
    localStorage.removeItem('statue3Visited');
    localStorage.removeItem('statue4Visited');
    localStorage.removeItem('statue5Visited');
    localStorage.removeItem('statue6Visited');
    localStorage.removeItem('statue7Visited');
    localStorage.removeItem('statue8Visited');
    updateSetPiece();
    closeResetModal();
}


// Had to get help to see if i could implement css animations for the doors, or at least a transition effect.
function triggerTransition() {
    const goldEffect = document.createElement('div');
    goldEffect.classList.add('gold-transition');
    document.body.appendChild(goldEffect);

    setTimeout(() => {
        window.location.href = 'second-room.html';
    }, 2000);
}

function triggerTransitionBack() {
    const goldEffect = document.createElement('div');
    goldEffect.classList.add('gold-transition');
    document.body.appendChild(goldEffect);

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

function updateSetPiece() {
    let visitedCount = 0;
  
    for (let i = 1; i <= 10; i++) {
      if (localStorage.getItem(`canvas${i}Visited`) || localStorage.getItem(`statue${i}Visited`)) {
        visitedCount++;
        const section = document.getElementById(`overlaySection${visitedCount}`);
        if (section) {
          section.style.opacity = '0';
        }
      }
    }
  
    const overlay = document.getElementById('setPieceOverlay');
    if (visitedCount === 10) {
      overlay.style.pointerEvents = 'auto';
      overlay.style.cursor = 'pointer';
    }
  }

  document.getElementById("setPieceOverlay").addEventListener("click", function() {
    const overlaySections = document.querySelectorAll('.overlay-section');
    if (Array.from(overlaySections).every(section => section.style.opacity === '0')) {
      document.getElementById("final-modal").style.display = "block";
      document.getElementById("overlay").style.display = "block";
    }
  });