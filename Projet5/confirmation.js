// Affichage orderId et montant total de la commande au chargement de la page.
// Clear du local storage.
window.onload = confirm ();
function confirm () {
	var element = document.getElementById ("confirm");
	var total = localStorage.getItem("total");
	var orderId = localStorage.getItem("orderId");
	if (orderId === null ) window.location.replace("./panier.html")
		element.innerHTML += "<p>Votre numéro de commande : "+orderId+" </p><p>Total de votre commande : "+total+" euros</p>";
	localStorage.clear();
}
