const CONVENIENCE_FEES = 99;
let WishListItemObjects;
onLoad();

function onLoad() {
  loadWishListItemObjects();
  displayWishListItems();
  displayWishListSummary();
}

loadWishListItemObjects = () => {
    let WishlistSummaryElement = document.querySelector('.wishlist-summary');
    let totalItem = WishListItemObjects.length;
    
    bagSummaryElement.innerHTML = `
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <hr>
    </div>
    `;
}

function loadWishListItemObjects() {
    console.log(bagItems);
    bagItemObjects = bagItems.map(itemId => {
      for (let i = 0; i < items.length; i++) {
        if (itemId == items[i].id) {
          return items[i];
        }
      }
    });
    console.log(bagItemObjects);
}

function displayBagItems() {
    let containerElement = document.querySelector('.wishlist-container');
    let innerHTML = '';
    WishListItemObjects.forEach(WishListItem => {
      innerHTML += generateItemHTML(WishListItem);
    });
    containerElement.innerHTML = innerHTML;
  }