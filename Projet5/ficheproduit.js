let apiurl = "http://localhost:3000/api/teddies/";//Url de l'api relative aux infos produits.
let params = new URLSearchParams(document.location.search);// Nouveau paramètre d'url.
let id = params.get("id");// Parametre id de l'url 
let teddy;// Qui contiendra la reponse de la requete.(fetch(apiurl+i))

// Requete api + id; Appel de la fonction affichageproduit; Initialisation de la variable teddy.
// Promesse : reponse json.
window.onload = callApiId(id);
function callApiId(i){
	fetch(apiurl + i)
	.then(response => response.json())
	.then(response => {		
		affichageProduit(response);
		teddy = response;	
	})
	.catch(err=>console.error(err));
};	
// Déclaration de la fonction affichageProduit @param {array}.
// Nous injectons les infos produits dans l'html avec la possibilté du choix d'option de couleur.
// Appel de la fonction ecouteClick. 
function affichageProduit(produit) {
	let element = document.getElementById("produits");
	element.innerHTML+='<div class="card" id="product_box">'+
	'<img class="card-img-top" src="'+produit.imageUrl+'" alt="product_img">'+
	'<div class="card-body">'+
	'<h5 class="card-title" id="product_name">'+produit.name+'</h5>'+
	'<p class="card-text" id="product_description">'+produit.description+'</p>'+
	'<label>Couleur : </label>'+
	'<select id="choix" class="form-control"></select>'+
	'<p class="card-text my-2">'+new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(produit.price)+'</p>'+
	'<a href="panier.html" id="btn" class="btn btn-primary">Ajouter au panier</a>'+
	'<a href="index.html" class="btn btn-primary">Retour</a>'+
	'<a href="panier.html" class="btn btn-primary">Voir mon panier</a>'+
	'</div>'+
	'</div>';
	let select = document.getElementById("choix");
	produit.colors.forEach(color => { 
		select.innerHTML +='<option value="+color+">'+color+'</option>';
	});
	ecouteClick();
}
// Declaration de la fonction ecouteclick qui permet a l'utilisateur de placer le produit dans le panier
// Creation du panier dans le local storage; push des infos produit dans le panier.
// Retour message "alert" qui informe l'utilisateur qu'il a ajouté un produit au panier.
function ecouteClick() {
	document.getElementById("btn").addEventListener("click",() => {
		let panier = JSON.parse(localStorage.getItem("panier"));
		if (panier === null) {
			panier = [];
		}
		panier.push({
			id: teddy._id,
			imageUrl: teddy.imageUrl,
			name: teddy.name,
			price: teddy.price
		});
		localStorage.setItem("panier", JSON.stringify(panier));
		alert("Vous avez ajouté "+teddy.name+" à votre panier");
	})
}






