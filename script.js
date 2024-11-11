const quote = document.getElementById("quotes")
const author = document.getElementById("authors")

const api_url = "http://api.quotable.io/random";

async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();

    quotes.innerHTML = data.content;
    authors.innerHTML = data.author;
}
getquote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quotes.innerHTML + " ----by "+authors.innerHTML,"Tweet window","width=600 ,height=300")
}