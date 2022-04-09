// Import modules

import { printStore } from './storeFill.js'
import {expandInfo} from './expandInfo.js'
import {printCart} from './printCart.js'
import {cartSummary} from './cartSummary.js'

let product ={}

// Calling module printStore
printStore()


//Calling module expandInfo
let containerStore = document.getElementById("row.")
let infoProductModal = new bootstrap.Modal(document.getElementById('infoProductModal'))
containerStore.addEventListener("click",function(event){
    
    product=expandInfo(event)
    if(event.target.classList.contains("btn")){
    infoProductModal.show()}
})

let cartProducts = []

let buttonAdd = document.getElementById("addCart")
buttonAdd.addEventListener('click',function(event) {

    //Capture quantity of product
    let quantity=document.getElementById("quantity").value
    document.getElementById("quantity").value="1"
    //Add quantity to object product
    product.quantity=quantity
    //Add product to cart
    cartProducts.push(product)
    let sum=0
    cartProducts.forEach(function(product) {
        sum = sum+Number(product.quantity) 
    });
    printCart(sum)
    infoProductModal.hide()
    
})


let buttonClear = document.getElementById("clearCart")
buttonClear.addEventListener('click',function(event){
    cartProducts=[]
    let quantityCart=document.getElementById("quantityCart")
    quantityCart.textContent=0

    quantityCart.classList.add("invisible")
})


let purchaseSummary = document.getElementById("cartButton")
purchaseSummary.addEventListener('click',function(event) {
    let container = document.getElementById("containerSale")
    let summaryModal = new bootstrap.Modal(document.getElementById('summaryModal')) 
    container.innerHTML=""

    summaryModal.show()
})

