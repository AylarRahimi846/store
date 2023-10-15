function forAll(){
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((allCards) => {
        return showAll(allCards)
    })
    .catch(() => {
        primary.innerHTML = "NOT FOUND";
    })
}

function showAll(products){
    let all = products.map((product) => {
        const{image, title, price, id} = product;
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

sectionBtn.addEventListener("click" , forAll)

