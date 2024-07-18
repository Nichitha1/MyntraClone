let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    console.log('I am here');
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}
let resultItems = [];
function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector('.left .search-right-container .items-container');

  let innerHtml = '';
  items.forEach(item => {
    innerHtml += `
    <div class="result-items">
      <a><img class="item-image" src="${item.image}" alt="item image" width="210px" height="280px"></a>
      
      <div class="wish-list" style="display:none;">
      <div class="pdp-add-to-wishlist pdp-flex pdp-center" style="height: 63px;
      width: 210px;">
        <button>
          <span class="material-symbols-outlined favorite pdp-flex pdp-center">favorite</span>
          <a style="text-decoration: none;">WISHLIST</a>
        </button>
      </div>
 

      </div>

      <div class="rating" sytle="z-index=1; position = relative;">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>


      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>


      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <br>
      <div class="pdp-action-container">
              <div class="pdp-add-to-bag pdp-button pdp-flex pdp-center" style="height: 63px;
              width: 210px;">
                <button onclick="addToBag(${item.id})">
                  <span class="material-symbols-outlined shopping_bag pdp-flex pdp-center">shopping_bag</span>
                  <a style="text-decoration: none;">ADD TO BAG</a>
                </button>
              </div>
            </div>

    </div>`
  });
  itemsContainerElement.innerHTML = innerHtml;
}

function addBagEvent() {
  let itemsContainerElement = document.querySelector('.left .search-right-container .items-container .pdp-action-container .pdp-add-to-wishlist');
  // let innerHtml = '';
  // items.forEach(item => {

    document.querySelector('.result-items .rating').style.display = "none";
    document.querySelector('.result-items .company-name').style.display = "none";
    document.querySelector('.result-items .item-name').style.display = "none";


    document.querySelector('.result-items .item-image').style.transition = "all 1s";
    document.querySelector('.result-items .item-image').style.height = "260px";
    document.querySelector('.result-items .wish-list').style.display = "block";
    document.querySelector('.result-items .wish-list').style.transition = "2s";
    // let innerHtml = `
    //           <div class="pdp-add-to-bag pdp-button pdp-flex pdp-center" style="height: 63px;
    //           width: 210px;">
    //             <button onclick="addToBag(${item.id})>
    //               <span class="material-symbols-outlined shopping_bag pdp-flex pdp-center">shopping_bag</span>
    //               <a style="text-decoration: none;">ADD TO BAG</a>
    //             </button>
    //         </div>
    // `;
  // itemsContainerElement.innerHTML = innerHtml;
}

document.querySelector(".result-items").addEventListener('mouseover',addBagEvent);
