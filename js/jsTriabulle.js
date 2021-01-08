// <-- tri a bulle 
function sort(tab){
    var changed;
    do{
        changed = false;
        for(var i=0; i < tab.length-1; i++) {
            if(tab[i] > tab[i+1]) {
                var tmp = tab[i];
                tab[i] = tab[i+1];
                tab[i+1] = tmp;
                changed = true;
            }
        }
    } while(changed);
}
var tab = [18, , 11, 6, 1, 9, 3];
sort(tab);
console.log(tab);

// <-- suiter de fibonacci
function fibonacci(nbr) {
    var n1 = 0;
    var n2 = 1;
    var somme = 0;
  
    for(let i = 2; i <= nbr; i++){
       //somme des deux derniers nombres
       somme = n1 + n2; 
       //assigner la dernière valeur à la première
       n1 = n2; 
       //attribuer la somme au dernier
       n2 = somme; 
    }
  
    return nbr ? n2 : n1;
 }
 console.log(fibonacci(8));