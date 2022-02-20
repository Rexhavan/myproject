document.addEventListener("click", function(e){
    if(e.target.classList.contains("gallery-blog-pic")){
        const src = e.target.getAttribute("src")
        document.querySelector(".modal-blog").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-blog'));
        myModal.show();
    }    
})