function showImage(src) {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    mainImage.src = src;

    thumbnails.forEach(thumbnail => {
        if (thumbnail.src.includes(src)) {
            thumbnail.classList.add('active');
        } else {
            thumbnail.classList.remove('active');
        }
    });
}
