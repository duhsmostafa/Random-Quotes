function demo() {
    const quotes = [
        "“Be yourself; everyone else is already taken.”",
        "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        "“So many books, so little time.”",
        "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        "“A room without books is like a body without a soul.”",
        "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        `“You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”`,
        `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
        `“You only live once, but if you do it right, once is enough.”`,
        `“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”`,
        `“It is better to be hated for what you are than to be loved for what you are not.”`
    ];
    
    // Select a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    // Display the random quote
    document.getElementById("click").innerHTML = randomQuote;
}
