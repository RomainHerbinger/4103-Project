document.addEventListener("DOMContentLoaded", function() {
    openModal();
    updateSetPiece();
});

document.getElementById("book").addEventListener("click", function() {
    openModal();
});

document.getElementById("canvas1").addEventListener("click", function() {
    openCanvasModal1();
});

document.getElementById("canvas2").addEventListener("click", function() {
    openCanvasModal2();
});

function openModal() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function openCanvasModal1() {
    document.getElementById("canvasModal1").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function openCanvasModal2() {
    document.getElementById("canvasModal2").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function showCanvasModal(canvasId) {
    localStorage.setItem(`canvas${canvasId}Visited`, true);
    updateSetPiece();
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("canvasModal1").style.display = "none";
    document.getElementById("canvasModal2").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function showResetConfirmation() {
    document.getElementById("resetModal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeResetModal() {
    document.getElementById("resetModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function resetProgress() {
    localStorage.removeItem('canvas1Visited');
    localStorage.removeItem('canvas2Visited');
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

function updateSetPiece() {
    const canvas1Visited = localStorage.getItem('canvas1Visited');
    const canvas2Visited = localStorage.getItem('canvas2Visited');

    const overlay = document.getElementById('setPieceOverlay');
    let visibility = 1;

    if (canvas1Visited && canvas2Visited) {
        visibility = 0;
    } else if (canvas1Visited || canvas2Visited) {
        visibility = 0.5;
    }

    overlay.style.opacity = visibility;
}