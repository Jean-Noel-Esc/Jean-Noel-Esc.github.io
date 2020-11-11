var orderapi = "http://localhost:3000/api/teddies/order";//Adresse de l'emplacement de l'api.
var products = []; //Array vide qui servira à placer la liste des produits de la commande de l'utilisateur
var contact = []; //Array vide pour stocker les infos du formulaire client.
var paniers = JSON.parse(localStorage.getItem("panier"));//Emplacement du panier dans le local storage sous forme de tableau.
var total = 0; // Emplacement du prix total de la commande initialisé à 0.
var listProduit = document.getElementById("Produits");//Cible l'element Produits dans le html par son id.
var afficheTotal = document.getElementById("total"); // Cible l'element total dans le html par son id.
const checkMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Regex pour l'email client.
const checkAddress = /^[0-9a-zA-Z\s]+$/; // Regex pour l'adresse du client.
const checkText = /^[a-zA-Z\s]+$/; // Regex pour les informations textuelles.

window.onload = panier(paniers);
// panier @param {array}.
// Creation array si le panier est vide.
// Sinon parcours du tableau pour affichage infos. 
// Insert infos dans l'html.
// et set du total dans l'html et le local storage.
function panier(p){
	if (p === null){
		p=[];
		alert("votre panier est vide")
	}else{
		for( var i=p.length-1; i>=0; i--){
			total+= p[i].price;
			products.push(paniers[i].id) 
			listProduit.innerHTML+= '<div class="card" id="product_box">'+
			'<img class="card-img-top" src="'+paniers[i].imageUrl+'" alt="product_img">'+
			'<div class="card-body">'+
			'<h5 class="card-title" id="product_name">'+paniers[i].name+'</h5>'+
			'<p class="card-text" id="product_description">Ours en peluche</p>'+
			'<p class="card-text" id="product_description">Prix:'+paniers[i].price+'</p>'+
			'</div>'+
			'</div>';
		}
		afficheTotal.innerHTML = total;
		localStorage.setItem("total", total);
	}
}
// checkInput @param : (text, type).
// Verification conformité regex
function checkInput(text,type) {
	if (type == "mail" && !checkMail.test(text)){
		return false;
	}else if (type == "text" && !checkText.test(text)){
		return false;
	}else if (type == "address" && !checkAddress.test(text)){
		return false;
	}else{ 
		return true;}
	}

// Au click appel checkInput 
// Si retour false : message erreur
// Si retour true : creation objet contact et appel de la fonction sendOrder @param string (contact, products).
document.getElementById("formulaire").addEventListener("submit", (e) => { 
	event.preventDefault();  
	var check = true;
	if(checkInput(firstName.value, "text")===false) {
		check = false;
		alert("Votre prénom est invalide!");
	}
	if(checkInput(lastName.value, "text")===false) {
		check = false;
		alert("Votre nom est invalide!");
	}
	if(checkInput(email.value, "mail")===false) {
		check = false;
		alert("Votre adresse email est invalide!");
	}
	if(checkInput(city.value, "text")===false) {
		check = false;
		alert("Votre ville est invalide!");
	}
	if(checkInput(address.value, "address")===false) {
		check = false;
		alert("Votre adresse est invalide!");
	}

	if (check) {
		contact = {
			firstName: firstName.value,
			lastName: lastName.value,
			address: address.value,
			city: city.value,
			email: email.value,
		}
		sendOrder(contact, products);
	}
});

// sendOrder envoi contact et products vers l'api.
// retour : json orderId 
function sendOrder(c,p) {
	const objectToSend = {
		contact, products
	};
	const options = {
		method: 'post',
		body: JSON.stringify(objectToSend),
		headers : {
			'Content-Type' : 'application/json'
		}
	}
	fetch (orderapi, options)
	.then (response => response.json())
	.then (response => {
		localStorage.removeItem("panier");
		localStorage.setItem("orderId", response.orderId);
		window.location.replace("./confirmation.html")
	})
	.catch(err => console.error(err));
}