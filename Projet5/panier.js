function panier(){
//consulté l'info qui est dans le local storage:
           var paniers= JSON.parse (localStorage.getItem(localstorage.key(panier)));
           console.log(paniers);
           if (paniers === null){
           	paniers=[];
           	alert("votre panier est vide")
           }
           else {
           	var total = 0;
            for (var i=paniers.length - 1; i >= 0; i--) {

           console.log(paniers[i]);
            }
    --     	//arrayteddy.forEach
           	//pour chaque afficher le resultat dans le html

           	Element.innerHTML = getElmentbyId () //ajout d'un teddy 
            	
           	//in fine afficher le total "price" dans le html

           	Element.innerHTML = document.getElemntById(total) price +new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(produit.price) // calcul du prix total

}


function valideform () {

if 
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

function validateForm(){
	document.getElmentbyId ("firstname","name","address","city")
	var infoClient = >1;
	 .forEach

	if true
	alert ("Merci!") 

		else alert(" veuillez verifier vos informations!")
}



function validate(){
	if (document.myForm.firstname.value ==""){
		alert("Entrez votre nom");
		document.myForm.firstname.focus();
		return false;
	}
	return true
}

function validate2(){
	var firstname= document.forms["RegForm"]["Nom"];
	var name= document.forms["RegForm"]["Prenom"];
	var address= document.form["RegForm"]["addresse"];
	var mail= document.form["RegForm"]["email"];

	if firstname.value("")
	{
	alert("entrez votre nom.");
	name.focus();
	return false;
	}
	return true
}


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

}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("Votre adresse email est invalide!")
    return (false)
}



// Affichage de la demande de confirmation d'inscription
document.getElementById("valider").addEventListener("click", function (e) {
    console.log("Demande de confirmation : " + e.target.checked);
});

// fonction send result API qui envoi l'objet form a l'api.


function sendResult {} 