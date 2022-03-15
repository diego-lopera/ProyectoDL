export function expandInfo() {
    
    let product ={}
    if(event.target.classList.contains("btn")){
        product={
            img:event.target.parentElement.querySelector("img").src,
            name:event.target.parentElement.querySelector("h4").textContent,
            
        }
        console.log(product)

        let img=document.getElementById("imgInfo")
        img.src=product.img
        let name=document.getElementById("nameInfo")
        name.textContent=product.name
    }

}