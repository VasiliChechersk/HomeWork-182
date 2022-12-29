// Раздел "Car"
function Car( name, speed){
    this.carName = name;
    this.carSpeed = speed;
}
Car.prototype.accelerate = function (){
    return this.carSpeed + 5
}
Car.prototype.break = function (){
    return this.carSpeed - 5
}
const car1= new Car('BMW 750', 250 )
const car2= new Car('Audi A-6', 220 )
const car3= new Car('Opel - Vectra', 210 )  
const carContainer = document.querySelector('#container-car')
carContainer.addEventListener('click', (e) =>{
    if(e.target.className === 'card__book_btn card__book_btn-accelerate1'){
        console.log(car1.accelerate());   
    }else if(e.target.className === 'card__book_btn card__book_btn-accelerate2'){
        console.log(car2.accelerate());   
    }else if(e.target.className === 'card__book_btn card__book_btn-accelerate3'){
        console.log(car3.accelerate());   
    }else if(e.target.className === 'card__cancel_btn card__cancel_btn-break1'){
        console.log(car1.break());   
    }else if(e.target.className === 'card__cancel_btn card__cancel_btn-break2'){
        console.log(car2.break());   
    }else if(e.target.className === 'card__cancel_btn card__cancel_btn-break3'){
        console.log(car3.break());   
    }
})


// Раздел "Product"
function Product( name, book){
    this.productName = name;
    this.productBook = book;
}
Product.prototype.booking = function (){
    return this.productBook + 1
}
Product.prototype.cancelBooking = function (){
    return this.productBook - 1
}
const product1= new Product('Pizza', 12)
const product2= new Product('Soup',8)
const product3= new Product('Cake', 10)
const productContainer = document.querySelector('#container-product')
productContainer.addEventListener('click', (e) =>{
    if(e.target.className === 'card__book_btn card__book_btn-1'){
        console.log(product1.booking()); 
    }else if(e.target.className === 'card__book_btn card__book_btn-2'){
        console.log(product2.booking());   
    }else if(e.target.className === 'card__book_btn card__book_btn-3'){
        console.log(product3.booking());   
    }else if(e.target.className === 'card__cancel_btn card__cancel_btn-1'){
        console.log(product1.cancelBooking());   
    }else if(e.target.className === 'card__cancel_btn card__cancel_btn-2'){
        console.log(product2.cancelBooking());   
    }else if(e.target.className === 'card__cancel_btn card__cancel_btn-3'){
        console.log(product3.cancelBooking());   
    }
    })



