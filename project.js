document.addEventListener("click", function(e){
    if(e.target.classList.contains("gallery-project")){
        const src = e.target.getAttribute("src")
        document.querySelector(".modal-project").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-pro'));
        myModal.show();
    }    
})