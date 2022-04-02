export function cartSummary(event){
    let product ={}
    if(event.target.classList.contains("btn")){
        /*product={
            image:event.target.parentElement.querySelector("img").src,
            name:event.target.parentElement.querySelector("h4").textContent,
            price:event.target.parentElement.querySelector("h5").textContent,
        }
        */

        /*
        let image=document.getElementById("imgInfo")
        image.src=product.image
        let name=document.getElementById("nameInfo")
        name.textContent=product.name
        let price=document.getElementById("priceInfo")
        price.textContent=product.price
        */
    }
    return product  
}