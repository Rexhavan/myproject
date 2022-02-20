document.addEventListener("click", function(e){
    if(e.target.classList.contains("gallery-footer")){
        const src = e.target.getAttribute("src")
        document.querySelector(".modal-foot").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-foot'));
        myModal.show();
    }    
})