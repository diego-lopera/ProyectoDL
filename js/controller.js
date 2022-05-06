// Import modules

import { printStore } from './storeFill.js'
import {expandInfo} from './expandInfo.js'
import {printCart} from './printCart.js'
//  import {cartSummary} from './cartSummary.js'

let product ={}

// Calling module printStore
printStore()


//Calling module expandInfo
let containerStore = document.getElementById("row.")
let infoProductModal = new bootstrap.Modal(document.getElementById('infoProductModal'))
let summaryModal = new bootstrap.Modal(document.getElementById('summaryModal'))
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
    let sum=0
    //Add quantity to object product
    product.quantity=quantity
    //Add product to cart

    cartProducts.push(product)
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

let buttonClear2 = document.getElementById("clearCart2")
buttonClear2.addEventListener('click',function(event){
    cartProducts=[]
    let quantityCart=document.getElementById("quantityCart")
    quantityCart.textContent=0

    quantityCart.classList.add("invisible")
    summaryModal.hide()
})


let purchaseSummary = document.getElementById("cartButton")
purchaseSummary.addEventListener('click',function(event) {
    let container = document.getElementById("containerSale") 
    container.innerHTML=""

    let tot = 0
        let totalPrice = document.getElementById("totalPrice")
        totalPrice.innerHTML = tot

    cartProducts.forEach(function(product){
            
        let totalPrice = 0
        let row = document.createElement("div")
        row.classList.add("row")
        let column1 = document.createElement("div")
        column1.classList.add("col-12","col-md-5")
        let column2 = document.createElement("div")
        column2.classList.add("col-12","col-md-7")

        let row1 = document.createElement("div")
        row1.classList.add("row")

        let column3 = document.createElement("div")
        column3.classList.add("col-6","col-md-4")
        let column4 = document.createElement("div")
        column4.classList.add("col-6","col-md-3")

        let image = document.createElement("img")
        image.classList.add("img-fluid","w-100")
        image.src=product.image
        let name = document.createElement("h4")
        name.textContent=product.name
        let Lquantity = document.createElement("h6")
        Lquantity.textContent="Cantidad:"
        let quantity = document.createElement("h6")
        quantity.textContent=product.quantity
        let Lprice = document.createElement("h6")
        Lprice.textContent="Precio:"
        let price = document.createElement("h6")
        price.textContent=product.price
        let Lsubtot = document.createElement("h6")
        Lsubtot.textContent="Subtotal:"
        let subtot = document.createElement("h6")
        let subtotal = (product.price * product.quantity)
        subtot.textContent=subtotal
        totalPrice += subtotal
        
        column1.appendChild(image)
        column2.appendChild(name)
        column2.appendChild(row1)
        row1.appendChild(column3)
        row1.appendChild(column4)
        column3.appendChild(Lquantity)
        column4.appendChild(quantity)
        column3.appendChild(Lprice)
        column4.appendChild(price)
        column3.appendChild(Lsubtot)
        column4.appendChild(subtot)

        
        row.appendChild(column1)
        row.appendChild(column2)
        container.appendChild(row)

        totalPrice.innerHTML= totalPrice
    })
    summaryModal.show()
})

