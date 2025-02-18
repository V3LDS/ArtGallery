const { parse } = require('busboy');
const path = require('path');
const fs = require('fs');

exports.handler = async (event, context) => {
    try {
        const busboy = parse({ headers: event.headers });

        let filePath;
        busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
            filePath = path.join(__dirname, 'public', 'uploads', filename);
            file.pipe(fs.createWriteStream(filePath));
        });

        busboy.on('finish', async () => {
            // Here you would typically store the file path or URL in a database or update a JSON file
            // For simplicity, we're just returning the path where the image was saved
            context.res = {
                statusCode: 200,
                body: JSON.stringify({ message: 'Image uploaded successfully', path: filePath.replace(path.join(__dirname), '') })
            };
        });

        busboy.end(event.body);

        return new Promise((resolve, reject) => {
            context.res.on('finish', resolve);
            context.res.on('error', reject);
        });
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to upload image' })
        };
    }
};
