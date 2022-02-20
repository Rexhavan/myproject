document.addEventListener("click", function(e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src")
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoPlaySpeed: 1500,
        arrows: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            setting: {
                slidesToShow:4
            }
        }, {
            breakpoint: 520,
            setting: {
                slidesToShow: 3
            }
        }]
    });
});


document.addEventListener("click", function(e){
    if(e.target.classList.contains("gallery-footer")){
        const src = e.target.getAttribute("src")
        document.querySelector(".modal-foot").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-foot'));
        myModal.show();
    }    
})