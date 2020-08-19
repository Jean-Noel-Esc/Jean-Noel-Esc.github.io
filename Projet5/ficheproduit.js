//  récupération de l'id du produit dans l'url

let params = new URLSearchParams(document.location.search);
let id = params.get("id");
console.log(id);
let teddy;

//  selection d'un seul produit à afficher dans la page produit

  let request = new XMLHttpRequest();
  window.onload=function(){
    request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            teddy = JSON.parse(this.responseText);
            console.log(teddy);
            affichageProduit(teddy);
            // ajout de l'article dans le panier avec le bouton "ajouter au panier"
			const buttonElement = document.getElementById('btn');
			console.log(buttonElement);
			let choix= teddy.colors;
			console.log(choix);
			            for (var i = 0; i < choix.length; i++) {

    					var select = document.getElementById('choix');
						var option = select.createElement('option');
    					option.textContent = choix[i];
    					option.id = "couleur";
    					console.log(select);
    				select.innerHTML+= option;
    				console.log(option);}
        }

    }
    request.open("GET", "http://localhost:3000/api/teddies/"+ id);
    request.send();
    ajoutLocalStorage (id);
};




// Affichage de l'article demandé à l'ouverture de la page produit
function ajoutLocalStorage (product){ 
localStorage.setItem('panier', product);
        alert('Vous avez ajouté ' + 'norbert' + ' à votre panier');
}

//let panier = localStorage.getItem('panier');//
//panier = JSON.parse(panier);
//localStorage.getItem('panier', JSON.stringify(panier));
//console.log(panier);//


 // Affichage du produit dans la card bootstrap
let teddies = document.getElementById('produits');
function affichageProduit(produits){
	//( let i= i++; ){//
		teddies.innerHTML+= '<div class="card" id="product_box">'+
                    '<img class="card-img-top" src="'+produits.imageUrl+'" alt="product_img">'+
                '<div class="card-body">'+
                    '<h5 class="card-title" id="product_name"></h5>'+
                    '<p class="card-text" id="product_description"></p>'+
                '</div>'+
                    '<ul class="list-group list-group-flush">'+
                        '<li class="list-group-item" id="product_color"></li>'+
                        '<li class="list-group-item" id="product_price"></li>'+
                    '</ul>'+
                    '<label>Couleur : </label>'+

                    '<select id="choix"><option id="couleur">Tan</option><option id="couleur">Chocolate</option><option id="couleur">Black</option><option id="couleur">White</option></select>'+
                '<div class="card-body">'+
                    '<a href="panier.html" id="btn" class="btn btn-primary">Ajouter au panier</a>'+
                    '<a href="index.html" class="btn btn-primary">Retour</a>'+
                    '<a href="panier.html" class="btn btn-primary">Voir mon panier</a>'+
                '</div>'+
            '</div>';
	}
// ajout de l'article dans le panier avec le bouton "ajouter au panier"
		const buttonElement = document.getElementById('btn');
		console.log(buttonElement);

//ici appel fonction local storage si ad event click et transmettre l'id du produit il faut creer une variable independante pour l'appeller et la transmettre 
//local storage

