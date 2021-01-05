/*** Horloge de param ***/
window.addEventListener('load',horloge);
      function horloge(){
        let d = new Date();
        document.getElementById('heure').innerHTML = d.toLocaleTimeString();
        setTimeout(horloge, 1000);
    }
    
      document.addEventListener('DOMContentLoaded', function(){
        let cache = document.getElementById('bouton');
        cache.addEventListener('click',cacheHorloge);
        document.getElementById('tog').style.display = 'block';
        function cacheHorloge(){
          let para = document.getElementById('tog');
          if(para.style.display == 'block'){
            para.style.display = 'none';
          }else{
            para.style.display = 'block';
          }
        }
      });

/*** compteur par categorie */

    var i = 0;
    var o = 0;
    var ii= 0;
    var ou= 0;
    var coi = 0 ;
    var coo =0 ;
    var tour = 1;
    var statresult = 1 ;
    var total = 0 ;
	function Countsty() {
        document.getElementById("inputsty").innerHTML = i++ + 1;
    }
    function Countill() {
        document.getElementById("inputill").innerHTML = coi++ + 1;
    }
	function Countmep() {
        document.getElementById("inputmep").innerHTML = o++ + 1;
    }
    function Countosemo() {
        document.getElementById("inputemo").innerHTML = coo++ + 1;
	}
	function Somme(){
	   var ii = document.getElementById("inputsty").innerText;
     var oo = document.getElementById("inputill").innerText;
     var uu = document.getElementById("inputmep").innerText;
     var ee = document.getElementById("inputemo").innerText;
	   document.getElementById("resultat").innerHTML = ee + ii + oo + uu ;
	}
	function zero(){
	    document.getElementById("inputsty").innerHTML = 0;
      document.getElementById("inputill").innerHTML =0;
      document.getElementById("inputmep").innerHTML =0;
      document.getElementById("inputemo").innerHTML =0;
	    document.getElementById("resultat").innerHTML =0;
	    i = 0;
      o = 0;
    }
    
    function datechoix(){
     var datemo = document.getElementById("dateselect").innerHTML;
    }
    
     /**** partie javascript statistiques **/

    }
/*** valeurs pour le seuil d'alerte ***/
/** calcul du seuil recommandé */

function myseuil(){
    var surface = document.getElementById("surface" ).innerHTML;
    var perisecu = document.getElementById("inputsecur").innerHTML ;
  var seuil = surface / perisecu;
  document.getElementById("leseuil").innerHTML = seuil;
}

    
    function myFunction() {
      taille.push("Le seuil de Réference :") ;
      taille[taille.length] = seuil ;
      document.getElementById("demo").innerHTML = taille ;
    }
