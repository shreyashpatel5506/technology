let menu= document.getElementsByClassName("hamburger");

function menuh(){
    if(document.getElementById("ham").className=="mobilemenu1"){
        document.getElementById("imgmenu").src="icon-hamburger.svg"; 
        document.getElementById("ham").classList.remove("mobilemenu1");
        document.getElementById("ham").classList.add("mobilemenu");     
    }
    else{
    document.getElementById("ham").classList.add("mobilemenu1");
    document.getElementById("ham").classList.remove("mobilemenu");
    document.getElementById("imgmenu").src="icon-close.svg";
    }
}

let slideIndex=1;
showSlide(slideIndex)

function currentSlide(n){
    showSlide(slideIndex = n);
}

function showSlide(n){
    let i;
    let images=document.getElementsByClassName("image")
    let text=document.getElementsByClassName("text")
    let dot=document.getElementsByClassName("dot")
    if(n > images.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = images.length;
    }
    for(i=0 ;i < images.length ;i++){
        images[i].style.display= "none";
        text[i].style.display="none";
    }
    for(i=0; i < dot.length ; i++){
        dot[i].className = dot[i].className.replace(" current", " ");

    }
    images[slideIndex -1].style.display="block";
    text[slideIndex-1].style.display="flex";
    dot[slideIndex-1].className += " current";

}

function auto(){
    slideIndex++;
    showSlide(slideIndex);
}

setInterval(auto,3500);