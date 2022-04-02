export function printCart(sum) {
    let quantityCart=document.getElementById("quantityCart")
    quantityCart.textContent=sum
    quantityCart.classList.remove("invisible")
}