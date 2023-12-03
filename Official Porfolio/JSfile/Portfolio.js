document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('popup-container').style.display = 'none';
});

document.getElementById('show-popup').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('popup-container').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup-container').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});



