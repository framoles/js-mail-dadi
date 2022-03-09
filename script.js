const goLogin = document.getElementById("login");

goLogin.addEventListener("click", function () {
    let dbMail = ["mail1@email.com", "mail2@email.com", "mail3@email.com", "mail4@email.com"];
    let login = prompt("Inserisci la tua email per accedere");
    let message;
    for (let i = 0; i < dbMail.length; i++) {
        if (dbMail[i] == login) {
            alert("Accesso consentito");
        }
    }
})



const goGame = document.getElementById("game");

goGame.addEventListener("click", function () {

    let user = Math.floor(Math.random() * 6);
    let cpu = Math.floor(Math.random() * 6);
    if (user > cpu) {
        alert("Utente ha vinto");
    }
    else {
        alert("Computer ha vinto");
    }

})