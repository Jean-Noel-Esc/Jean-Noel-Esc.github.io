var request = new XMLHttpRequest(); // Qui contient notre nouvelle requëte.
var produits; // Qui contiendra la reponse JSON parse.

// Récupération des informations de l'API + appel callApi. 
var urlApi =  "Http://localhost:3000/api/teddies";
window.onload = callApi(urlApi); 

// Déclaration de la fonction callApi pour l'appel de l'api.
// callApi @param {string}.
// Appel insertproduct @param [array].
function callApi(url){ 
	request.onreadystatechange = function() {
		if(this.status == 200 && this.readyState==XMLHttpRequest.DONE) {
			produits = JSON.parse(this.responseText);
			insertproduct(produits);
		} 
	}	
	request.open("GET", url);
	request.send();
}

// Initialisation de la variable teddies pour cibler l'élément "produits" dans la page html.
let teddies = document.getElementById('produits');

// Déclaration de la fonction insertproduct qui injecte les infos produits dans l'html avec une card bootstrap.
// Insert bouton avec lien ?id=
// insertproduct @param {array}.
function insertproduct(produits){ 
	for ( let i=0 ; i<produits.length ; i++){
		teddies.innerHTML+= 
		'<div class="card" id="product_box">'+
		'<img class="card-img-top" src="'+produits[i].imageUrl+'" alt="product_img">'+
		'<div class="card-body">'+
		'<h5 class="card-title" id="product_name">'+produits[i].name+'</h5>'+
		'<p class="card-text" id="product_description">Ours en peluche</p>'+
		'<p class="card-text" id="product_description">Prix:'+produits[i].price+'</p>'+
		'<a href="ficheproduit.html?id='+produits[i]._id+'" class="btn btn-primary">Voir</a>'+
		'</div>'+
		'</div>';
	} 
}

