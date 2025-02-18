document.addEventListener('DOMContentLoaded', (event) => {
    document.forms['upload-art'].addEventListener("submit", event => {
        event.preventDefault();
        const result = document.querySelector(".result");
        
        fetch("/", {
            method: "POST",
            body: new FormData(event.target)
        })
        .then(() => {
            result.innerText = "Upload Successful! Please refresh to see your art in the gallery.";
            // Here you would typically update the gallery or inform the user how to see the uploaded art
        })
        .catch(error => {
            result.innerText = `Upload Failed: ${error}`;
        });
    });
});
