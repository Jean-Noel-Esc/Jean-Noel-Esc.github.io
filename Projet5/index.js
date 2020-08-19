var request = new XMLHttpRequest();
var produits;
window.onload=function(){ 
request.onreadystatechange = function() {
			if(this.status == 200 && this.readyState==XMLHttpRequest.DONE) 
			{
				produits = JSON.parse(this.responseText);
				console.log(produits);
				insertproduct(produits);
			}else {
				console.log(this.status);
				console.log("Administration : ERROR connection API");
			}
		}	
request.open("GET", "Http://localhost:3000/api/teddies");
request.send();
 }

let teddies = document.getElementById('produits');

function insertproduct(produits){ 
for ( let i=0 ; i<produits.length ; i++){
	teddies.innerHTML+= '<div class="card" id="product_box">'+
                    '<img class="card-img-top" src="'+produits[i].imageUrl+'" alt="product_img">'+
                '<div class="card-body">'+
                    '<h5 class="card-title" id="product_name">'+produits[i].name+'</h5>'+
                    '<p class="card-text" id="product_description">Ours en peluche</p>'+
                
                   
                        '<p class="card-text" id="product_description">Prix:'+produits[i].price+'</p>'+

                    '<a href="ficheproduit.html?id='+produits[i]._id+'" class="btn btn-primary">Voir</a>'+
                '</div>'+
            '</div>';
} }