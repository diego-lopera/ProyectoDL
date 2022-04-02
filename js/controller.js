// Import modules

import { printStore } from './storeFill.js'
import {expandInfo} from './expandInfo.js'

let product ={}

// Calling module printStore
printStore()


//Calling module expandInfo
let containerStore = document.getElementById("row.")
containerStore.addEventListener("click",function(event){
    let infoProductModal = new bootstrap.Modal(document.getElementById('infoProductModal'))
    product=expandInfo(event)
    if(event.target.classList.contains("btn")){
    infoProductModal.show()}
})

let cartProducts = []

let buttonClear = document.getElementById("clearCart")
buttonClear.classList.add("invisible")

let buttonAdd = document.getElementById("addCart")
buttonAdd.addEventListener('click',function(event) {
    //console.log("add to cart")
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
    let quantityCart=document.getElementById("quantityCart")
    quantityCart.textContent=sum
    quantityCart.classList.remove("invisible")
    if(sum=0){buttonClear.classList.add("invisible")}
    else{buttonClear.classList.remove("invisible")}
})

buttonClear = document.getElementById("clearCart")
buttonClear.addEventListener('click',function(event){
    cartProducts=[]
    let quantityCart=document.getElementById("quantityCart")
    quantityCart.textContent=0

    quantityCart.classList.add("invisible")
    
    
})