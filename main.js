const quoteButton = document.getElementById("btn");
const outputElement = document.getElementById("output");

const quotes = [
    "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one which has been opened for us.",
    "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.",
    "Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.",
    "You can't be great if you don't feel great. Make exceptional health your number one priority.",
    "Impossible is just an opinion.",
    "The secret of getting ahead is getting started.",
    "Waiting is painful. Forgetting is painful. But not knowing which to do is the worst kind of suffering.",
    "By The River Piedra I Sat Down And Wept",
    "All our dreams can come true if we have the courage to pursue them.",
    "I always wanted to be somebody, but now I realize I should have been more specific.",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "Life is what happens when you're busy making other plans.",
    "When you reach the end of your rope, tie a knot in it and hang on.",
    "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "It is during our darkest moments that we must focus to see the light.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

quoteButton.addEventListener("click", () => {
    const randomQuote = getRandomQuote();
    outputElement.textContent = randomQuote;
});
