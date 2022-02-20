const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPost = document.querySelectorAll('.all');

for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPost.bind(this, categoryTitle[i]));
}

function filterPost(item){
    changeActivePosition(item);
    for(let i = 0; i < allCategoryPost.length; i++){
        if(allCategoryPost[i].classList.contains(item.attributes.id.value)){
            allCategoryPost[i].style.display = "block";
        }else{
            allCategoryPost[i].style.display = "none"
        }
    }
}

function changeActivePosition(activeItem){
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.add('active');
    }
    activeItem.classList.remove('active');
};