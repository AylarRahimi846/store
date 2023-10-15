function backHome(){
    sectionBtn.classList.remove("section__btnDisplay");
    firstSlide.classList.remove("imgDisplay");
    sectionCard.classList.remove("sectionDisplay");
    primary.classList.add("primaryDisplay");
}



homeIcon.addEventListener("click" , backHome)