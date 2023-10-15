
function showCategory() {
    category.classList.toggle("showCategory")
}

// function saba(products) {
//     let cards = products.map(product => {
//         const { image, title, price, id } = product
//         return `
//         <a href="#" onclick="showProduct(${id})" href="#">
//          <div class = "section__card">
//     <img class = "section__card--img" src="${image}" alt="">
//     <h1 class="section__card--title">${title}</h1>
//     <span class="section__card--price"> price: ${price} $</span>
//     </div>
//     </a>
//     `
//     })
//    categorySection.innerHTML = cards.join('')

//    sectionBtn.classList.add("section__btnDisplay");
//    firstSlide.classList.add("imgDisplay");
//    sectionCard.classList.add("sectionDisplay");
//    primary.classList.add("primaryDisplay");
// }


// show category name

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
