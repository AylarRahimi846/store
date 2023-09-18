
const cont = document.querySelector('section');
const categories = document.querySelector('.categories');
const nav = document.querySelector(".nav")
// const basket = []
// const product= []

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((data) =>{
                return showData(data)
            })
            .catch(()=>{
                cont.innerHTML="error";
            })


            

function categoryFinder(category) {

    fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then((data) =>{
                return showData(data)
            })
            .catch(()=>{
                cont.innerHTML="error";
            })
}


function showData(products) {
    const tem =products.map(product => {
    return ` <div class = "card">
    <img src="${product.image}" alt="">
    <h1 class="title">${product.title}</h1>
    <span id="price"> price: ${product.price} $</span>
    <a class="button__basket" onclick="buyData(${id})" href="#">Buy</a>
    </div>
    `
})
   


    cont.innerHTML= tem.join('')
    // showProducts(products)

}



// function showProducts(x){
//     product.push(x)
//     console.log(product);
// }



// function buyData(shopp,id){
//     let findData = shopp.find(item => item.id === id)
//     basket.push(findData)
// }




// categoty

function addNav(){
    nav.classList.toggle("second__nav")
}


fetch('https://fakestoreapi.com/products/categories')
.then(res => res.json())
.then((cate) => {
    return navCategorie(cate)
})
.catch()

function navCategorie(categories){
    let temp2 = categories.map((item, index) =>{
        return `
        <h1 class="nav__item" onclick="categoryFinder(\`${item}\`)">${item}</h1>
        `
    })
    nav.innerHTML = temp2.join("")
}



