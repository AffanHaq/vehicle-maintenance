// Basket display
const cartButton = document.querySelector('.btn-cart');
const cartList = document.querySelector('.basket');
const closeBasketicon = document.querySelector('#closeBasketicon');

// Basket Button on-click

const closeList = () => {
        cartList.style.display = 'none';
}

const openList = () =>{
    cartList.style.display = 'flex';
}

cartButton.addEventListener('click', openList);
closeBasketicon.addEventListener('click', closeList)