const goLogin = document.getElementById("login");

goLogin.addEventListener("click", function () {
    let dbMail = ["mail1@email.com", "mail2@email.com", "mail3@email.com", "mail4@email.com"];
    let login = prompt("Inserisci la tua email per accedere");
    let access;
    for (let i = 0; i < dbMail.length; i++) {
        if (dbMail[i] == login) {
            access = true;
        }
    }
    if (access == true) {
        alert("Accesso consentito");
    }
    else {
        alert("Accesso non consentito");
    }
})



const goGame = document.getElementById("game");

goGame.addEventListener("click", function () {

    let user = Math.floor((Math.random() * 6) + 1);
    let cpu = Math.floor((Math.random() * 6) + 1);
    if (user > cpu) {
        alert("Utente ha vinto");
    }
    else if (user == cpu) {
        alert("Pareggio");
    }
    else {
        alert("Computer ha vinto");
    }

    console.log("N Utente: ", user, "N Computer: ", cpu);

})