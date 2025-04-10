function showCity(city) {
    let content = document.getElementById('content');

    if (city === 'London') {
        content.innerHTML = `
            <h1>London</h1>
            <p>London is the capital city of England. It is the most populous city in the United Kingdom and has a rich history stretching back to Roman times.</p>
            <p>At its centre stand the Houses of Parliament, the iconic Big Ben clock tower, and Westminster Abbey.</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/London_Montage_L.jpg" alt="London" width="400">
        `;
    } else if (city === 'Paris') {
        content.innerHTML = `
            <h1>Paris</h1>
            <p>Paris is the capital and most populous city of France. Situated on the Seine River, in the north of the country, it is in the centre of the Île-de-France region, also known as the région parisienne, "Paris Region".</p>
            <p>Paris is known for its museums and architectural landmarks: the Louvre received 8.9 million visitors in 2023, on track for keeping its position as the most-visited art museum in the world.</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Paris_Night.jpg" alt="Paris" width="400">
        `;
    } else if (city === 'Tokyo') {
        content.innerHTML = `
            <h1>Tokyo</h1>
            <p>Tokyo is the capital city of Japan. It is one of the world's most populous metropolises and blends modern architecture with traditional culture.</p>
            <p>Famous landmarks include the Imperial Palace, Shibuya Crossing, and the Tokyo Skytree.</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Minato_City%2C_Tokyo%2C_Japan.jpg" alt="Tokyo" width="400">
        `;
    }
}
