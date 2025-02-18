document.addEventListener('DOMContentLoaded', (event) => {
    document.forms['upload-art'].addEventListener("submit", event => {
        event.preventDefault();
        const result = document.querySelector(".result");
        
        fetch("/api/uploadImage", {
            method: "POST",
            body: new FormData(event.target)
        })
        .then(response => response.json())
        .then(data => {
            result.innerText = data.message;
            // Now, instead of adding a placeholder, we dynamically update the gallery
            updateGallery(data.path);
        })
        .catch(error => {
            result.innerText = `Upload Failed: ${error}`;
        });
    });
});

function updateGallery(imagePath) {
    const gallery = document.getElementById('gallery');
    const imgElement = document.createElement('img');
    imgElement.src = imagePath; // This should be relative to your site's root
    imgElement.alt = 'New Artwork';
    imgElement.classList.add('artwork');
    gallery.appendChild(imgElement);
}
