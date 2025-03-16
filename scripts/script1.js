document.addEventListener("DOMContentLoaded", function() {
    openModal();
});

document.getElementById("book").addEventListener("click", function() {
    openModal();
});

function openModal() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}