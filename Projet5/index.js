
/*L'utilisateur à besoin d'un panier dans le localStorage de son navigateur
Vérifier si le panier existe dans le localStorage, sinon le créer et l'envoyer dans le localStorage au premier chargement du site quelque soit la page*/


//Appel de l'API/
var request == XMLhtpRequest();
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

		//L'appel est réussi : suppression des messages d'erreur
				error = document.getElementById("error");
				//On supprime le message d'erreur s'il existe
				if(error){
					error.remove();
				}
			}else{
				console.log("Administration : ERROR connection API");
			}
		}
		request.open("GET", APIURL + idProduit);
		request.send();
	});
};


// affichage de la page des produits dans le HTML après appel de l'API 




//affichage de la liste des produits



//affichage de la page du produit selectionné


// ajout du ou des produits au panier 

