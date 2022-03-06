console.log("heyS");
element = document.getElementById('first').innerHTML
first.addEventListener("mousedown",function(){
    document.getElementById('first').innerHTML="<h3>Clicked<h3>"
    console.log("click")
})
console.log(element);
first.addEventListener("mouseout",function(){
    document.getElementById('first').innerHTML=element;
    console.log("click")
})



