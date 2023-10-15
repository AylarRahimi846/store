// findAPI
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((data) => {
        return findFirstCards(data)
    })
    .catch(() => {
        sectionCard.innerHTML = "NOT FOUND";
    })

    function findFirstCards(fourCards){
        let findFirstCards = fourCards.filter(item => item.id <= 4)
        showCard(findFirstCards);
    }


// showCard
function showCard(products) {
    let cards = products.map((product) => {
        const { image, title, price, id } = product;
        return `
        <a href="#" onclick="showProduct(\`${id}\`)">
         <div class = "section__card">
    <img class = "section__card--img" src="${image}" alt="">
    <h1 class="section__card--title">${title}</h1>
    <span class="section__card--price"> price: ${price} $</span>
    </div>
    </a>`
    })
    
sectionCard.innerHTML = cards.join('');
    }

