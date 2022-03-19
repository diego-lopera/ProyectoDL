export function expandInfo(event) {
    
    let product ={}
    if(event.target.classList.contains("btn")){
        product={
            img:event.target.parentElement.querySelector("img").src,
            name:event.target.parentElement.querySelector("h4").textContent,
            price:event.target.parentElement.querySelector("h5").textContent,
            description:event.target.parentElement.querySelector("h6").textContent,
        }
        console.log(product)

        let img=document.getElementById("imgInfo")
        img.src=product.img
        let name=document.getElementById("nameInfo")
        name.textContent=product.name
        let price=document.getElementById("priceInfo")
        price.textContent=product.price
        let description=document.getElementById("descriptionInfo")
        description.textContent=product.description
        
    }

}