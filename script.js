document.addEventListener('DOMContentLoaded', function() {
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const htmlVisual = document.getElementById('html-visual');
    const cssVisual = document.getElementById('css-visual');

    function updateVisual() {
        htmlVisual.innerHTML = htmlCode.textContent;

        const cssFrame = document.createElement('iframe');
        cssFrame.style.width = '100%';
        cssFrame.style.height = '100%';
        cssFrame.style.border = 'none';

        // Create a separate HTML file for CSS and load it into the iframe
        const cssContent = `
            <html>
            <head>
                <link rel="stylesheet" type="text/css" href="css-visual.css">
            </head>
            <body></body>
            </html>
        `;

        const blob = new Blob([cssContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);

        cssFrame.src = url;

        // Clear previous content
        while (cssVisual.firstChild) {
            cssVisual.removeChild(cssVisual.firstChild);
        }

        // Append the new iframe
        cssVisual.appendChild(cssFrame);
    }

    htmlCode.addEventListener('input', updateVisual);
    cssCode.addEventListener('input', updateVisual);

    // Initial update
    updateVisual();
});
