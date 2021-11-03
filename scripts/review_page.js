
document.getElementById("open-popup-btn").addEventListener("click", function(){
    console.log("popup")
    document.getElementsByClassName("popup")[0].classList.add("active");
});
   
document.getElementById("dismiss-popup-btn").addEventListener("click", function(){
    console.log("popdown")
    document.getElementsByClassName("popup")[0].classList.remove("active");
});