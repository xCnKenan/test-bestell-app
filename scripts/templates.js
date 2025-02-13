function getMainDishTemplate(index) {
  return `<div class="foodCard gap border" id="foodCard_${index}" onclick="addToCart(${index})">
            <div class="foodCardBody">
              <p class="boldTitle">${mainDishes[index].name}</p>
              <p class="dishDescription">${mainDishes[index].description}</p>
              <p class="coloredPrice">${mainDishes[index].price}€</p>
            </div>
            <div class="addToBasket">
              <img src="./assets/img/plus.png" />
            </div>
          </div>`;
}

function basketTemplate(index) {
  let basketRef = document.getElementById("addFood");
  // basketRef.innerHTML ="";
  basketRef.innerHTML += `<div class="menuList" id="foodField${index}">
            <span class="boldTitleBasket">${mainDishes[index].name}</span>

            <div class="priceList">
              <img onclick="addToCartMinus(${index})" class="minus" src="./assets/img/minus.png"/>
              <p id="counter${index}">${basket[index].amount}x</p>
              <img onclick="addToCart(${index})" class="plus" src="./assets/img/plus.png"/>
              <p id="finalPrice${index}">${basket[index].newPrice}€</p>
              <img onclick="removeDishFromBasket(${index})" class="trash" src="./assets/img/trash.png"/>
            </div>
          </div>
    `;
}

function getInvoiceTemplate(priceOfAllDishes) {
  for (let index = 0; index < basket.length; index++) {
    if (priceOfAllDishes == 0 && basket[index].amount == 0 && basket[index].newPrice == 0) {
      getDefaultBasketTemplate();
    }
    else {
      getAllCostsTemplate(priceOfAllDishes);
    }
  }
}

function getDefaultBasketTemplate() {
  let invoiceRef = document.getElementById("invoice");
  invoiceRef.innerHTML = "";
  document.getElementById("removeInfo").style = "";
  document.getElementById("removeInfo").innerHTML = "";
  document.getElementById("removeInfo").innerHTML =
   `<img src="./assets/img/empty-basket.png" alt="">
      <span>Warenkorb leer</span>`;
}

function getAgainDefaultBasketTemplate() {
  document.getElementById("basketRefs").innerHTML =
   `<div id="informationDeliver"></div>

    <!-- Information Deliver -->

          <div id="shoppingCart">
            <!--hier kommen neue elemente rein--> 
            <div id="removeInfo" id="" class="emptyBasket">
            <img src="./assets/img/empty-basket.png" alt="">
            <span>Warenkorb leer</span>
            </div>
          </div>

          <div id="addFood"></div>

          <div id="invoice"></div>`;
}

function getAllCostsTemplate(priceOfAllDishes) {
  let invoiceRef = document.getElementById("invoice");
  invoiceRef.innerHTML = "";
  invoiceRef.innerHTML = `<div class="divide" id="divide">
            <div class="line"></div>
          </div>
          <table>
            <tr>
              <td class="costs">Zwischensumme</td>
              <td id="invoicePrice" class="costs">${priceOfAllDishes.toFixed(2)}€</td>
            </tr>
            <tr>
              <td id="deliverCosts" class="costs">Lieferkosten</td>
              <td id="priceDeliverCosts"class="costs">5.00€</td>
            </tr>
            <tr>
              <td class="boldTitleBasket">Gesamt</td>
              <td id="invoiceAllCosts" class="boldTitleBasket">${priceOfAllDishes.toFixed(2)}€</td>
            </tr>
          </table>`;
}

function getTemplateOfDeliverCosts(priceOfAllDishes) {
  let deliverCostsRef = document.getElementById("informationDeliver");
  deliverCostsRef.innerHTML = '';

  if(priceOfAllDishes <= 0){
    deliverCostsRef.innerHTML = '';
  } else if (priceOfAllDishes <= 35) {
    deliverCostsRef.innerHTML = `<div class="informationDeliver">
    <div class="bgInformationDeliver">Noch <b>${(35 - priceOfAllDishes).toFixed(2)}€</b> bis der Mindestbestellwert erreicht ist
    </div>
    </div>`;
  }
}
