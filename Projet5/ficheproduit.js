//  récupération de l'id du produit dans l'url

let apiurl = "http://localhost:3000/api/teddies/";
let params = new URLSearchParams(document.location.search);
let id = params.get("id");
console.log(id);
let teddy;

//  selection d'un seul produit à afficher dans la page produit

window.onload = function(){
	fetch(apiurl + id)
	.then(response => response.json())
	.then(response => {
		console.log (response);
		affichageProduit(response);
		teddy = response;
		console.log(teddy);
	})
	.catch(err=>console.error(err));
};

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


function ecouteClick() {
	document.getElementById("btn").addEventListener("click",() => {
		let panier = JSON.parse(localStorage.getItem("panier"));
		if (panier === null){
			panier =[];
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






