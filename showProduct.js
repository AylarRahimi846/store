function showProduct(id){
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then((selected) => {
            return showSelected(selected)
        })
        .catch()
}

function showSelected(eachCart){
    let tem = `
    <div class="show">
    <img class="show__img" src="${eachCart.image}" alt="">
    <div class="show__data">
      <h1 class="show__data--title">${eachCart.title}</h1>
      <p class="show__data--description">${eachCart.description}</p>
      <h2 class="show__data--price">${eachCart.price}</h2>
      <button class="show__data--btn"  onclick="addInBasket(${eachCart.id})">Buy</button>
    </div>
</div>
    `

    primary.innerHTML = tem;

    
   sectionBtn.classList.add("section__btnDisplay");
   firstSlide.classList.add("imgDisplay");
   sectionCard.classList.add("sectionDisplay");
//    primary.classList.add("primaryDisplay");
}