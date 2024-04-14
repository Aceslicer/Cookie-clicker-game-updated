var cookies = 0;

function bakecookie() {
    cookies += 1;
    
    document.getElementById("cookie-text").innerHTML = "Cookies:" + cookies;
}