var products = [];
function panier(){
//consulté l'info qui est dans le local storage:
           var paniers= JSON.parse (localStorage.getItem("panier"));
           console.log(paniers);


                      if (paniers === null)
                      {
           				paniers=[];
           				alert("votre panier est vide")
          				}
          			else {
           			var total = 0;

            		for (var i=paniers.length-1; i >= 0; i--) {
            			total+= paniers[i].price;
            			products.push(paniers[i].id)

 			var listProduit=document.getElementById("Produits");
           listProduit.innerHTML+= '<div class="card" id="product_box">'+
                    '<img class="card-img-top" src="'+paniers[i].imageUrl+'" alt="product_img">'+
                '<div class="card-body">'+
                    '<h5 class="card-title" id="product_name">'+paniers[i].name+'</h5>'+
                    '<p class="card-text" id="product_description">Ours en peluche</p>'+
                
                   
                        '<p class="card-text" id="product_description">Prix:'+paniers[i].price+'</p>'+

         
                '</div>'+
            '</div>';
            }
            
            var affichetotal= document.getElementById("total");
            affichetotal.innerHTML= total;
        }
       }
       panier();

/*function validateForm(){
	var firstName= document.forms["formulaire"] ["firstName"];
	var lastName= document.forms ["formulaire"] ["lastName"];
	var address= document.forms ["formulaire"] ["address"];
	var email= document.forms["formulaire"] ["email"];
	var city= document.forms["formulaire"] ["city"];

	if firstName.value("")
	{
		alert("Entrez votre prénom.");
		firstName.focus ();
		return false;
	}
	if lastName.value("")
	{
		alert("Entrez votre nom.");
		lastName.focus ();
		return false;

	}
	if address.value("");
	{ 
		alert("Entrez votre adresse.");
		address.focus ();
		return false;
	} 
	if city.value("");
	{
		alert("Entrez votre ville.")
		city.focus ();
		return false;
	}
	if email.value("");
	{
		alert("Entrez votre email.");
		email.focus ();
		return false;	
	}

	return true;
}

//var retourForm= validateForm();
if retourForm== true;
{
	alert ("ok");
}
else
{
	alert ("erreur");
}*/

document.getElementById("valider").addEventListener("click", function recupForm(e){
	e.preventDefault();
	var infoClient1= document.getElementById("firstName");
	var infoClient2= document.getElementById("lastName");
	var infoClient3= document.getElementById("city");
	var infoClient4= document.getElementById("address");
	var infoClient5= document.getElementById("email");
	console.log(infoClient1.value.length);
	console.log(infoClient2);
	console.log(infoClient3);
	console.log(infoClient4.value.length);
	console.log(infoClient5.value.length);

	if (infoClient1.value.length>1 && infoClient2.value.length>1 && infoClient3.value.length>1 && infoClient4.value.length>1 && infoClient5.value.length>1 )
	{
		var contact =[];
                        contact.push(infoClient1.value);
                        contact.push(infoClient2.value);
                        contact.push(infoClient3.value);
                        contact.push(infoClient4.value);
                        contact.push(infoClient5.value);
                        console.log(contact);
		//faire les verification test de format avec les regex et le point test.js a partir de la stocké dans un objet contact les infos client 
var mail=document.getElementById("email"); 
var adresse = document.getElementById("address");
if (ValidateEmail(mail) && ValidateAddress(adresse)){ 
document.getElementById("message").innerHTML= "envoi serveur";
var fusionproduit =[];
		// tableau des id de produit dans le panier var
		    function FusionIdForm (products, contact){

                        fusionproduit.push(products , contact);
            		}
            		FusionIdForm(products,contact);
            		console.log(fusionproduit);
		//idem à l'ope de recuperation new xml http request mais c'est un envoi donc post au lieu de get 
		var request = new XMLHttpRequest();
		request.open("POST", "Http://localhost:3000/api/teddies/order");
		request.send(fusionproduit);

}	else
	{
		document.getElementById("message").innerHTML = "erreur dans le formulaire"
	}

}
	else
	{
		document.getElementById("message").innerHTML = "le formulaire n'est pas complet"
	}

}
)



function ValidateEmail(email) {
 				if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
    				return (true)
  					}
  					else { 
    				alert("Votre adresse email est invalide!");
    				return (false)
    				}
				}

function ValidateAddress(adresse){
				if (/^[0-9a-zA-Z]+$/.test(adresse.value)){ 
					console.log(/^[0-9a-zA-Z]+$/.test(adresse.value));
					return (true)
		    	}
				else {
					alert("Votre adresse est invalide!");
					console.log(adresse.value);
					return (false)
				}
			}

