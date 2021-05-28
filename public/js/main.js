$(document).ready(function () {
    $('.sliders').slick({
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 2000,
        fade:true,
        prevArrow: "<i class='fa fa-arrow-left ' aria-hidden='true'></i>",
        nextArrow: "<i class='fa fa-arrow-right ' aria-hidden='true'></i>",
        appendArrows: $('.sliders-controls'),
        cssEase: 'cubic-bezier(0.86, 0, 0.07, 1)',
        loop: true,
        
    })
    })


const mobileToggleBtn = document.querySelector('.fa-bars');
const navigation = document.querySelector('.nav-menu')
const cart = document.querySelector('.cart')
const  cart__hideBtn = document.getElementById("close-cart")
const  cart__showBtn = document.getElementById("show-cart")



mobileToggleBtn.addEventListener('mousedown', () => {
    navigation.classList.toggle('toggle-visibility')
})

cart__hideBtn.addEventListener('click', () => {
   toggleCart()
   

})
cart__showBtn.addEventListener('click', () => {
    toggleCart()
})

function toggleCart() {
    console.log("Cart visible");
    cart.classList.toggle('toggle-cart')

}
