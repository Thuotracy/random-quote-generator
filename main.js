let btn = document.getElementById('btn');
let output = document.getElementById('output');
let body = document.body;

// Function to fetch a random quote
async function getQuote() {
    try {
        let response = await fetch('https://api.quotable.io/random');
        let data = await response.json();
        return `${data.content} - ${data.author}`;
        
    } catch (error) {
        console.error('Error fetching quote:', error);
        return "Sorry, something went wrong. Please try again.";
    }
}

// Function to fetch a random image
async function getImage() {
    try {
        let response = await fetch('https://picsum.photos/1600/900');
        return response.url; // Use the direct image URL
    } catch (error) {
        console.error('Error fetching image:', error);
        return ''; // Fallback in case of error
    }
}

// Handle button click
btn.addEventListener('click', async function() {
    output.innerHTML = 'Loading...'; // Indicate loading

    try {
        // Use Promise.all to fetch quote and image simultaneously
        const [quote, imageUrl] = await Promise.all([getQuote(), getImage()]);
        output.innerHTML = quote;

        if (imageUrl) {
            body.style.backgroundImage = `url(${imageUrl})`;
        }
    } catch (error) {
        output.innerHTML = "Sorry, something went wrong. Please try again.";
    }
});
