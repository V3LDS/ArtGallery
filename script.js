document.addEventListener('DOMContentLoaded', (event) => {
    document.forms['upload-art'].addEventListener("submit", event => {
        event.preventDefault();
        const result = document.querySelector(".result");
        const gallery = document.getElementById('gallery');
        
        fetch("/", {
            method: "POST",
            body: new FormData(event.target)
        })
        .then(() => {
            result.innerText = "Upload Successful! Please refresh to see your art in the gallery.";
            
            // This part simulates adding an image. In reality, you would need to manually update or use a script to fetch new images.
            const imgElement = document.createElement('img');
            imgElement.src = 'assets/uploads/placeholder.jpg'; // Use a placeholder or last known image URL
            imgElement.alt = 'New Artwork';
            gallery.appendChild(imgElement);
        })
        .catch(error => {
            result.innerText = `Upload Failed: ${error}`;
        });
    });
});
