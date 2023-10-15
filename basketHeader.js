
function getAllCarts() {
    fetch('https://fakestoreapi.com/carts')
        .then(res => res.json())
        .then((carts) => {
            return getCartId(carts)
        })
        .catch()
}


function getCartId(carts) {
    return carts.map((cart)=> {
        fetch(`https://fakestoreapi.com/products/${cart.id}`)
                .then(res=>res.json())
                .then((items)=>basketItem.push(items))
                .catch()
       })
}

console.log(basketItem);


function showBasketItems(){

    let all = basketItem.map((item) => {
        const{image, title, price, id} = item;
        return `
        <a href="#" onclick="showProduct(\`${id}\`)">
        <div class="section__card">
            <div class="section__card--img"><img class="section__card--img--second" src="${image}" alt=""></div>
            <h1 class="section__card--title">${title}</h1>
            <h2 class="section__card--price">price: ${price} $</h2>
        </div>
        </a>
        `
    })

    primary.innerHTML = all.join("");

    sectionBtn.classList.add("section__btnDisplay");
    firstSlide.classList.add("imgDisplay");
    sectionCard.classList.add("sectionDisplay")


}

window.addEventListener("load", getAllCarts)
basketHeader.addEventListener("click" , showBasketItems)



function addInBasket(ID){
        fetch(`https://fakestoreapi.com/products/${ID}`)
                .then(res=>res.json())
                .then((selectedItem)=>basketItem.push(selectedItem))
                .catch()
}