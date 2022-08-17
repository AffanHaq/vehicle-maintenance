const menuItems = document.querySelectorAll(".menu-item");

// Modal

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

// NEW VARIABLES FOR MODALS
const appointmentModal = document.querySelector('.book-appointment');
const exitButtonAppointment = document.querySelector('#closeAppointment');

const exitGetCall = document.querySelector('#exitCall');
const openGetCall = document.querySelector('.getacall-icon');
const modalGetCall = document.querySelector('.getacall');


const bookAppointmentTruck = document.querySelector('#bookAppointmentTruck');
const bookAppointmentCar = document.querySelector('#bookAppointmentCar');
const bookAppointmentBike = document.querySelector('#bookAppointmentBike');
const vehicleTypePlaceHolder = document.querySelector('#appoint-vehicle-type');

const carServiceModalOpenner = document.querySelector('#openServiceCardCar');
const bikeServiceModalOpenner = document.querySelector('#openServiceCardBike');
const truckServiceModalOpenner = document.querySelector('#openServiceCardTruck');


// BOOK APPOINTMENT
const OpenAppointmnet = () =>{
    appointmentModal.style.display = 'grid';

}

const closeAppointmentModal = () =>{
    appointmentModal.style.display = 'none';
}

bookAppointmentBike.addEventListener('click',() =>{
    vehicleTypePlaceHolder.placeholder = 'VEHICLE TYPE: BIKE';
    OpenAppointmnet();
});
bookAppointmentCar.addEventListener('click', () =>{
    vehicleTypePlaceHolder.placeholder = 'VEHICLE TYPE: CAR';
    OpenAppointmnet();
});
bookAppointmentTruck.addEventListener('click', () =>{
    vehicleTypePlaceHolder.placeholder = 'VEHICLE TYPE: TRUCK';
    OpenAppointmnet();
});
exitButtonAppointment.addEventListener('click', closeAppointmentModal)

// VEHICLE SERVICE MODAL

const openModal = () =>{
    CarModal.style.display = 'grid';
}

const closeSeriveModals = (e) => {
    if(e.target.classList.contains('car-modal')){
        CarModal.style.display = 'none';
    }
    else if(e.target.classList.contains('bike-modal')){
        bikeModal.style.display = 'none';
    }
    else if(e.target.classList.contains('truck-modal')){

        truckModal.style.display = 'none';
    }
}

// GET A CALL 
const openCallModal = () =>{
    modalGetCall.style.display = 'grid';

}

const closeCallModal = () =>{
    modalGetCall.style.display = 'none';
}

openGetCall.addEventListener('click', openCallModal);
exitGetCall.addEventListener('click', closeCallModal);

carServiceModalOpenner.addEventListener('click', openModal);
CarModal.addEventListener('click', closeSeriveModals);
bikeModal.addEventListener('click', closeSeriveModals);
truckModal.addEventListener('click', closeSeriveModals);

bikeServiceModalOpenner.addEventListener('click', () => {
    bikeModal.style.display = 'grid';
});
truckServiceModalOpenner.addEventListener('click', () => {
    truckModal.style.display = 'grid';
});

// cartButton.addEventListener('click', openList);
// closeBasketicon.addEventListener('click', closeList)

// Modal

const changeActiveClass = () =>{
    menuItems.forEach(item =>{
        item.classList.remove('active');
        console.log('removing....')
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






