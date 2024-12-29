function addPhoto() {
    const upload = document.getElementById('photo-upload');
    const gallery = document.getElementById('photo-gallery');
    const file = upload.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = document.createElement('img');
            img.src = event.target.result;
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}