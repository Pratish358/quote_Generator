let currentIndex = 0;

function addQuote() {
    const quoteInput = document.querySelector(".text");
    const nameInput = document.querySelector(".name");
    const quote = quoteInput.value.trim();
    const name = nameInput.value.trim();

    if (quote !== "") {
        let quotes = JSON.parse(localStorage.getItem('quotes')) || [];
        
        quotes.push({ quote: quote, name: name || "Anonymous" });

        localStorage.setItem('quotes', JSON.stringify(quotes));
        
        alert("Quote added successfully!");
        quoteInput.value = "";
        nameInput.value = "";
    } else {
        alert("Please enter a quote.");
    }
}
function displayStoredQuote() {
    const quotes = JSON.parse(localStorage.getItem('quotes')) || [];
    
    if (quotes.length > 0) {
        const currentQuote = quotes[currentIndex];
        document.getElementById("Show").innerText = `"${currentQuote.quote}"`;
        document.getElementById("nameShow").innerText = `~ ${currentQuote.name}`;
    } else {
        document.getElementById("Show").innerText = "No quotes available.";
        document.getElementById("nameShow").innerText = "";
    }
}

function generateQuote() {
    const quotes = JSON.parse(localStorage.getItem('quotes')) || [];
    
    if (quotes.length > 0) {
        currentIndex = (currentIndex + 1) % quotes.length;
        const currentQuote = quotes[currentIndex];
        
        document.getElementById("Show").innerText = `"${currentQuote.quote}"`;
        document.getElementById("nameShow").innerText = `~ ${currentQuote.name}`;
    } else {
        alert("No quotes available. Please add some quotes first.");
    }
}
document.getElementById("addQuote").addEventListener("click", addQuote);
document.getElementById("genrateButton").addEventListener("click", generateQuote);

window.onload = displayStoredQuote;
