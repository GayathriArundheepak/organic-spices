//addToCart
var count =0;
function addToCart(){
    var x = document.getElementById("count");
    x.style.display = "block";
 count++
 document.getElementById("count").innerHTML = count;
}


function myFunction() {
    var x = document.getElementById("selected-cart");
    var option = document.createElement("option");
    option.id="option"
    x.add(option,x[0]);
  }
  function cartProduct(n){
   
  let y= document.querySelector("#option")
  
    if(n===1)
   y.innerHTML=document.querySelector(".card1").innerHTML
    if(n===2)
    y.innerHTML =document.querySelector(".card2").innerHTML
    if(n===3)
    y.innerHTML =document.querySelector(".card3").innerHTML
    if(n===4)
    y.innerHTML =document.querySelector(".card4").innerHTML
    if(n===5)
    y.innerHTML =document.querySelector(".card5").innerHTML
    if(n===6)
    y.innerHTML =document.querySelector(".card6").innerHTML
    if(n===7)
    y.innerHTML =document.querySelector(".card7").innerHTML
    if(n===8)
    y.innerHTML =document.querySelector(".card8").innerHTML
    if(n===9)
    y.innerHTML =document.querySelector(".card9").innerHTML
    if(n===10)
    y.innerHTML =document.querySelector(".card10").innerHTML
    if(n===11)
    y.innerHTML =document.querySelector(".card11").innerHTML
    if(n===12)
    y.innerHTML =document.querySelector(".card12").innerHTML
  
  }