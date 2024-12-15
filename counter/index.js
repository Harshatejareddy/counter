let c=0;
function reset(){
   c=0;
   document.getElementById("label").textContent=c;
}
function inc(){
   c++;
   document.getElementById("label").textContent=c;

}
function dec(){
   c--;
   document.getElementById("label").textContent=c;
}