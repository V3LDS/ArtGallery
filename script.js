document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const file = document.getElementById('artFile').files[0];
    const artistName = document.getElementById('artistName').value;

    if (file && artistName) {
        const newArt = document.createElement('div');
        newArt.className = 'artwork';
        
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.alt = artistName + "'s Art";
        newArt.appendChild(img);
        
        const p = document.createElement('p');
        p.textContent = `Artist: ${artistName}`;
        newArt.appendChild(p);
        
        document.getElementById('gallery').appendChild(newArt);

        document.getElementById('uploadForm').reset();
    } else {
        alert('Please select an image and provide your name.');
    }
});

// Note: This script does not handle image uploads for the background. You need to manually place the images in your project folder and name them image1.jpg, image2.jpg, etc.