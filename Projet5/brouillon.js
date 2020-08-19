                    //choix de la couleur//
                        (for (var i = 0; i < choix.length; i++) {
    					var option = document.createElement('option');
    					option.textContent = choix[i];
    					option.id = "couleur";}

    							 //buttonElement.addEventListener('click', ajoutLocalStorage(id))



    


    							 
// Affichage de l'article demandé à l'ouverture de la page produit
window.addEventListener('voir', article);
function ajoutLocalStorage (product){ 
localStorage.setItem('panier', product);
        alert('Vous avez ajouté ' + teddy.name + ' à votre panier');
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


//ajout d'un produit dans le  panier
function chargementPanier(){
  let nombreProduit = localStorage.getItem('qté'); 
  if(nombreProduit){
  document.querySelector ('.totalQté').textContent = nombreProduit;
  }else{
      document.querySelector ('.totalQté').textContent = 0 ;
  }
}

chargementPanier(); 

//    Affichage des articles mis au panier dans la page panier
function affichagePanier(){
  let data = JSON.parse(localStorage.getItem('panier'));}

  // Affichage de la demande de confirmation d'inscription
document.getElementById("confirmation").addEventListener("change", function (e) {
    console.log("Demande de confirmation : " + e.target.checked);
});

// Affichage de la demande de confirmation d'inscription
document.getElementById("confirmation").addEventListener("change", function (e) {
    console.log("Demande de confirmation : " + e.target.checked);
});


// Mise en place des événements

(function() { // Utilisation d'une IIFE pour éviter les variables globales.

    var myForm = document.getElementById('myForm'),
        inputs = document.querySelectorAll('input[type=text], input[type=password]'),
        inputsLength = inputs.length;

    for (var i = 0; i < inputsLength; i++) {
        inputs[i].addEventListener('keyup', function(e) {
            check[e.target.id](e.target.id); // "e.target" représente l'input actuellement modifié
        });
    }

    myForm.addEventListener('submit', function(e) {

        var result = true;

        for (var i in check) {
            result = check[i](i) && result;
        }

        if (result) {
            alert('Le formulaire est bien rempli.');
        }
        e.preventDefault();
    });
    myForm.addEventListener('reset', function() {
        for (var i = 0; i < inputsLength; i++) {
            inputs[i].className = '';
        }
        deactivateTooltips();
    });
})();
// Maintenant que tout est initialisé, on peut désactiver les "tooltips"
deactivateTooltips();

//verification nom dans le formulaire
check['lastName'] = function(id) {

    var name = document.getElementById(id),
        tooltipStyle = getTooltip(name).style;

    if (name.value.length >= 2) {
        name.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        name.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};