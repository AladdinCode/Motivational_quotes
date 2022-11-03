let randomQuotes = ['Love For All, Hatred For None. – Khalifatul Masih III', 
'Change the world by being yourself. – Amy Poehler',
'Every moment is a fresh beginning. – T.S Eliot',
'Never regret anything that made you smile. – Mark Twain',
'Die with memories, not dreams. – Unknown',
'Aspire to inspire before we expire. – Unknown',
'Everything you can imagine is real. – Pablo Picasso',
'Simplicity is the ultimate sophistication. – Leonardo da Vinci'
]



// code block to select a random quote
function pickQuote() {
    let randomize = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
    let result = document.querySelector('p').innerHTML = `Quote of the day is: { ` + randomize + '}';
    return result;
}