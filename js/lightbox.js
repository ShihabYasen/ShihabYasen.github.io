function openLightbox(imgSrc) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imgSrc;
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden'; 
}


function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
    document.body.style.overflow = ''; 
}


document.addEventListener('DOMContentLoaded', function() {
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
        var img = box.querySelector('img');
        img.addEventListener('click', function() {
            openLightbox(img.src);
        });
    });
});
