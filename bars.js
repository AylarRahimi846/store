
function showCategory() {
    category.classList.toggle("showCategory")
}



fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then((categories) => {
        return navCategory(categories)
    })
    .catch()

function navCategory(categories) {
    let navCategoryTemp = categories.map((item) => {
        return `
        <p class="categoryItem" onclick="categoryFinder(\`${item}\`)">${item}</p>`
    })
    category.innerHTML = navCategoryTemp.join("")
}

// showBars

function categoryFinder(category) {

    fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then((data) =>{
                return  showAll(data)
            })
            .catch(()=>{
                cont.innerHTML="error";
            })
}
