// Basket display
const menuItems = document.querySelectorAll(".menu-item");
const cartButton = document.querySelector('.btn-cart');
const cartList = document.querySelector('.basket');
const closeBasketicons = document.querySelector('#closeBasketicon');

// Modal
const carModalButton = document.querySelector('.car-svg');
const bikeModalButton = document.querySelector('.bike-svg');
const truckModalButton = document.querySelector('.truck-svg');
const CarModal =document.querySelector('.car-modal');
const bikeModal =document.querySelector('.bike-modal');
const truckModal =document.querySelector('.truck-modal');
const carTunning = document.querySelector('#tunning');
const carEngine = document.querySelector('#engine');
const carOil = document.querySelector('#oil');
const carAC = document.querySelector('#ac');
const carWash = document.querySelector('#wash');
const carInspection = document.querySelector('#inspection');
const carModalMenu = document.querySelectorAll('.car-list-detailed');
const Menu1 = document.querySelector('.car-tuning');
const Menu2 = document.querySelector('.car-engine');
const Menu3 = document.querySelector('.car-ac');
const Menu4 = document.querySelector('.car-oil');
const Menu5 = document.querySelector('.car-wash');
const Menu6 = document.querySelector('.car-inspection');

// Basket Button on-click

const closeList = () => {
        cartList.style.display = 'none';
}

const openList = () =>{
    cartList.style.display = 'flex';
}

cartButton.addEventListener('click', openList);
closeBasketicon.addEventListener('click', closeList)

// Modal

const changeActiveClass = () =>{
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}

menuItems.forEach(item =>{
    item.addEventListener('click', () =>{
        changeActiveClass();
        item.classList.add('active');
    })
})

const setupServiceMenu = () => {
    carModalMenu.forEach(item =>{
        item.style.display = 'none';
    })
}

const tunningActive = () =>{
    setupServiceMenu();
    carTunning.style.display = 'grid';
}
const engineActive = () =>{
    setupServiceMenu();
    carEngine.style.display = 'grid';
}
const oilActive = () =>{
    setupServiceMenu();
    carOil.style.display = 'grid';
}
const acActive = () =>{
    setupServiceMenu();
    carAC.style.display = 'grid';
}
const washActive = () =>{
    setupServiceMenu();
    carWash.style.display = 'grid';
}
const inspectActive = () =>{
    setupServiceMenu();
    carInspection.style.display = 'grid';
}

Menu1.addEventListener('click', tunningActive);
Menu2.addEventListener('click', engineActive);
Menu3.addEventListener('click', acActive);
Menu4.addEventListener('click', oilActive);
Menu5.addEventListener('click', washActive);
Menu6.addEventListener('click', inspectActive);

// Modal OPEN AND EXIT

const openModal = () =>{
    CarModal.style.display = 'grid';
}

const closecarModal = (e) => {
    if(e.target.classList.contains('car-modal')){
        CarModal.style.display = 'none';
    }
}

const openBikeModal = () =>{
    bikeModal.style.display = 'grid';
}

const closeBikeModal = (e) => {
    if(e.target.classList.contains('bike-modal')){
        bikeModal.style.display = 'none';
    }
}

const openTruckModal = () =>{
    truckModal.style.display = 'grid';
}

const closeTruckModal = (e) => {
    if(e.target.classList.contains('truck-modal')){
        truckModal.style.display = 'none';
    }
}

carModalButton.addEventListener('click', openModal);
CarModal.addEventListener('click', closecarModal);

bikeModalButton.addEventListener('click', openBikeModal);
bikeModal.addEventListener('click', closeBikeModal);

truckModalButton.addEventListener('click', openTruckModal);
truckModal.addEventListener('click', closeTruckModal);

