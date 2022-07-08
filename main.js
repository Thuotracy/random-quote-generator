let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = [
 "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one which has been opened for us.",
 "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.",
 "Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.",
 "You can't be great if you don't feel great. Make exceptional health your number one priority.",
 "Impossible is just an opinion.",
 "The secret of getting ahead is getting started.",
 "Waiting is painful. Forgetting is painful. But not knowing which to do is the worst kind of suffering.",
 "By The River Piedra I Sat Down And Wept",
 "All our dreams can come true if we have the courage to pursue them.",
 "I always wanted to be somebody, but now I realize I should have been more specific."

];

btn.addEventListener('click', function(){
    var randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
})