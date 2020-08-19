var firstNameElt = document.getElementById("firstname");
firstNameElt.value = "Votre prénom";

// Affichage d'un message contextuel pour la saisie du prenom
firstNameElt.addEventListener("focus", function () {
    document.getElementById("oublisPrenom").textContent = "Entrez votre prénom";
});
// Suppression du message contextuel pour la saisie du prenom
firstNameElt.addEventListener("blur", function (e) {
    document.getElementById("oublisPrenom").textContent = "";
});


var firstNameElt = document.getElementById("name");
firstNameElt.value = "Votre nom";

// Affichage d'un message contextuel pour la saisie du prenom
firstNameElt.addEventListener("focus", function () {
    document.getElementById("oublisNom").textContent = "Entrez votre nom";
});
// Suppression du message contextuel pour la saisie du prenom
firstNameElt.addEventListener("blur", function (e) {
    document.getElementById("oublisNom").textContent = "";
});

var firstNameElt = document.getElementById("address");
firstNameElt.value = "Votre adresse";

// Affichage d'un message contextuel pour la saisie du prenom
firstNameElt.addEventListener("focus", function () {
    document.getElementById("oublisAddress").textContent = "Entrez votre adresse";
});
// Suppression du message contextuel pour la saisie du prenom
firstNameElt.addEventListener("blur", function (e) {
    document.getElementById("oublisAddress").textContent = "";
});

var firstNameElt = document.getElementById("city");
firstNameElt.value = "Votre ville";

// Affichage d'un message contextuel pour la saisie du prenom
firstNameElt.addEventListener("focus", function () {
    document.getElementById("oublisVille").textContent = "Entrez votre ville";
});
// Suppression du message contextuel pour la saisie du prenom
firstNameElt.addEventListener("blur", function (e) {
    document.getElementById("oublisVille").textContent = "";
});







// Contrôle du courriel en fin de saisie
document.getElementById("email").addEventListener("blur", function (e) {
    // Correspond à une chaîne de la forme xxx@yyy.zzz
    var regexCourriel = /.+@.+\..+/;
    var validiteCourriel = "";
    if (!regexCourriel.test(e.target.value)) {
        validiteCourriel = "Adresse invalide";
    }
    document.getElementById("email").textContent = validiteCourriel;
});






// Affichage de la demande de confirmation d'inscription
document.getElementById("valider").addEventListener("click", function (e) {
    console.log("Demande de confirmation : " + e.target.checked);
});
