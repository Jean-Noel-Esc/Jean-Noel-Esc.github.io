
//L'utilisateur à besoin d'un panier dans le localStorage de son navigateur



//Appel de l'API/
const APIURL = "http://localhost:3000/api/teddies";

var request = XMLhttpRequest();
request.open("GET", "http://localhost:3000/api/teddies");
request.send();

Produits = () =>{
	return new Promise((resolve) =>{
		let request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if(this.readyState == XMLHttpRequest.DONE && this.status == 200) 
			{
				resolve(JSON.parse(this.responseText));
				console.log("Administration : connection ok");
			}else{
				console.log("Administration : ERROR connection API");
			}
		}
		request.open("GET", APIURL + idProduit);
		request.send();
	});
};


// affichage de la page des produits dans le tableau HTML après appel de l'API 




//affichage de la liste des produits



//affichage de la page du produit selectionné


// ajout du ou des produits au panier 

